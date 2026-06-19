const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright-core");

const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:3000";
const API_BASE_URL = process.env.API_BASE_URL || "http://127.0.0.1:2900";
const OUTPUT_DIR = path.join(process.cwd(), "artifacts", "playwright");

const DEMO = {
  guest: { userId: "guest.asha", password: "guest1234" },
  host: { userId: "host.sita", password: "host1234" },
  admin: { userId: "admin", password: "admin1234" },
  propertyId: "69c90aba845305efca14dc60",
  userId: "69c90aba845305efca14dc5a",
};

const issues = [];
const seenIssues = new Set();

function resolveChromeExecutable() {
  const candidates = [
    process.env.PLAYWRIGHT_CHROME_PATH,
    chromium.executablePath(),
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
  ].filter(Boolean);

  return candidates.find((candidate) => fs.existsSync(candidate));
}

function ensureOutputDir() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const fileName of fs.readdirSync(OUTPUT_DIR)) {
    if (fileName.endsWith(".png") || fileName === "issues.json" || fileName === "issues.md") {
      fs.rmSync(path.join(OUTPUT_DIR, fileName), { force: true });
    }
  }
}

function slugify(value) {
  return value.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
}

function addIssue(issue) {
  const dedupeKey = [issue.scope, issue.kind, issue.route, issue.message].join(" | ");
  if (seenIssues.has(dedupeKey)) {
    return;
  }

  seenIssues.add(dedupeKey);
  issues.push({
    ...issue,
    timestamp: new Date().toISOString(),
  });
}

function withTimeout(promise, timeoutMs, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`${label} timed out after ${timeoutMs}ms`)), timeoutMs);
    }),
  ]);
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

async function resolveDemoTargets() {
  try {
    const data = await fetchJson(`${API_BASE_URL}/property/v1/getProperty?page=1&limit=1`);
    const property = data.propertyData?.[0];

    if (!data.success || !property?._id) {
      throw new Error("No property returned from API");
    }

    const userId =
      typeof property.userId === "object" && property.userId?._id
        ? property.userId._id
        : typeof property.userId === "string" && property.userId
          ? property.userId
          : DEMO.userId;

    DEMO.propertyId = property._id;
    DEMO.userId = userId;
  } catch (error) {
    addIssue({
      scope: "setup",
      kind: "data",
      route: API_BASE_URL,
      message: `Using fallback smoke IDs because API target discovery failed: ${error.message}`,
    });
  }
}

async function attachPageObservers(page, scope) {
  page.on("pageerror", async (error) => {
    const screenshot = path.join(OUTPUT_DIR, `${slugify(`${scope}-pageerror`)}.png`);
    await page.screenshot({ path: screenshot, fullPage: true }).catch(() => {});
    addIssue({
      scope,
      kind: "pageerror",
      route: page.url(),
      message: error.message,
      screenshot: path.relative(process.cwd(), screenshot),
    });
  });

  page.on("requestfailed", (request) => {
    const failure = request.failure()?.errorText || "failed";
    if (failure.includes("net::ERR_ABORTED")) {
      return;
    }

    addIssue({
      scope,
      kind: "requestfailed",
      route: page.url(),
      message: `${request.method()} ${request.url()} => ${failure}`,
    });
  });

  page.on("console", (msg) => {
    if (msg.type() !== "error") return;
    addIssue({
      scope,
      kind: "console",
      route: page.url(),
      message: msg.text(),
    });
  });
}

async function gotoAndCheck(page, route, scope) {
  console.log(`[${scope}] ${route}`);
  const response = await page.goto(`${BASE_URL}${route}`, {
    waitUntil: "domcontentloaded",
    timeout: 20000,
  });

  await page.waitForLoadState("networkidle", { timeout: 5000 }).catch(() => {});
  await page.locator("body").waitFor({ state: "visible", timeout: 8000 });

  const bodyText = await page.locator("body").innerText().catch(() => "");
  const markers = ["Application error", "Unhandled Runtime Error", "500", "ReferenceError", "TypeError"];
  const marker = markers.find((item) => bodyText.includes(item));

  if (response && response.status() >= 400) {
    const screenshot = path.join(OUTPUT_DIR, `${slugify(`${scope}-${route}-http`)}.png`);
    await page.screenshot({ path: screenshot, fullPage: true }).catch(() => {});
    addIssue({
      scope,
      kind: "http",
      route,
      message: `HTTP ${response.status()}`,
      screenshot: path.relative(process.cwd(), screenshot),
    });
  }

  if (marker) {
    const screenshot = path.join(OUTPUT_DIR, `${slugify(`${scope}-${route}-ui`)}.png`);
    await page.screenshot({ path: screenshot, fullPage: true }).catch(() => {});
    addIssue({
      scope,
      kind: "ui",
      route,
      message: `Page body contains error marker: ${marker}`,
      screenshot: path.relative(process.cwd(), screenshot),
    });
  }
}

async function login(page, creds, scope) {
  await gotoAndCheck(page, "/Home/login", scope);
  await page.getByPlaceholder("userId").fill(creds.userId);
  await page.getByPlaceholder("password").fill(creds.password);
  const loginResponse = page
    .waitForResponse(
      (response) =>
        response.url().includes("/auth/v1/login") &&
        response.request().method() === "POST",
      { timeout: 12000 },
    )
    .catch((error) => {
      addIssue({
        scope,
        kind: "auth",
        route: "/Home/login",
        message: `Login API response was not observed: ${error.message}`,
      });
      return null;
    });

  await page.getByRole("button", { name: /^log in$/i }).click();
  const response = await loginResponse;

  if (response && response.status() >= 400) {
    addIssue({
      scope,
      kind: "auth",
      route: "/Home/login",
      message: `Login API returned HTTP ${response.status()}`,
    });
  }

  await page.waitForLoadState("networkidle", { timeout: 5000 }).catch(() => {});
}

async function runScenario(name, creds, routes, actions) {
  console.log(`[${name}] start`);
  const executablePath = resolveChromeExecutable();
  if (!executablePath) {
    throw new Error(
      "No Chrome/Chromium executable found. Set PLAYWRIGHT_CHROME_PATH to run smoke tests.",
    );
  }

  const browser = await chromium.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 1200 },
  });
  context.setDefaultTimeout(12000);
  context.setDefaultNavigationTimeout(20000);
  const page = await context.newPage();
  await attachPageObservers(page, name);

  try {
    if (creds) {
      await login(page, creds, name);
    } else {
      await gotoAndCheck(page, "/Home", name);
    }

    for (const route of routes) {
      await gotoAndCheck(page, route, name);
    }

    if (actions) {
      await actions(page);
    }
  } catch (error) {
    const screenshot = path.join(OUTPUT_DIR, `${slugify(`${name}-fatal`)}.png`);
    await page.screenshot({ path: screenshot, fullPage: true }).catch(() => {});
    addIssue({
      scope: name,
      kind: "fatal",
      route: page.url(),
      message: error.message,
      screenshot: path.relative(process.cwd(), screenshot),
    });
  } finally {
    const browserProcess = typeof browser.process === "function" ? browser.process() : null;
    await withTimeout(context.close(), 5000, `${name} context.close`).catch((error) => {
      console.warn(`[${name}] ${error.message}`);
    });
    await withTimeout(browser.close(), 5000, `${name} browser.close`).catch((error) => {
      console.warn(`[${name}] ${error.message}`);
      browserProcess?.kill("SIGKILL");
    });
  }
}

async function run() {
  ensureOutputDir();
  await resolveDemoTargets();

  await runScenario("public", null, [
    "/Home",
    "/Home/login",
    "/Home/signup",
    `/Home/rooms/${DEMO.propertyId}`,
    `/Home/user/${DEMO.userId}`,
  ]);

  await runScenario("guest", DEMO.guest, [
    "/Home",
    `/Home/rooms/${DEMO.propertyId}`,
    "/Home/Account",
    "/Home/Account/trips",
    "/Home/Account/reservations",
    "/Home/Account/favourites",
  ], async (page) => {
    await page.goto(`${BASE_URL}/Home/rooms/${DEMO.propertyId}`, { waitUntil: "domcontentloaded" });
    await page
      .getByRole("button", { name: /save to favourites|remove from favourites/i })
      .click({ timeout: 8000 })
      .catch(async (error) => {
      addIssue({
        scope: "guest",
        kind: "action",
        route: `/Home/rooms/${DEMO.propertyId}`,
        message: `Wishlist toggle failed: ${error.message}`,
      });
    });
  });

  await runScenario("host", DEMO.host, [
    "/Home",
    "/Home/Account",
    "/Home/Account/trips",
    "/Home/Account/reservations",
    `/Home/user/${DEMO.userId}`,
  ]);

  await runScenario("admin", DEMO.admin, [
    "/Admin",
    "/Admin/users",
    "/Admin/listing",
    "/Admin/bookings",
    "/Admin/kycRequest",
    "/Admin/listingRequest",
    "/Admin/account",
  ]);

  const jsonPath = path.join(OUTPUT_DIR, "issues.json");
  fs.writeFileSync(jsonPath, JSON.stringify(issues, null, 2));

  const mdPath = path.join(OUTPUT_DIR, "issues.md");
  const grouped = new Map();
  for (const issue of issues) {
    const key = `${issue.kind} | ${issue.message}`;
    if (!grouped.has(key)) {
      grouped.set(key, { count: 0, scopes: new Set(), routes: new Set() });
    }
    const entry = grouped.get(key);
    entry.count += 1;
    entry.scopes.add(issue.scope);
    entry.routes.add(issue.route);
  }

  const lines = [
    "# Playwright Smoke Issues",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
  ];

  if (issues.length === 0) {
    lines.push("No issues captured.");
  } else {
    for (const [key, value] of [...grouped.entries()].sort((a, b) => b[1].count - a[1].count)) {
      lines.push(`- ${key}`);
      lines.push(`  Count: ${value.count}`);
      lines.push(`  Scopes: ${[...value.scopes].join(", ")}`);
      lines.push(`  Routes: ${[...value.routes].join(" | ")}`);
      lines.push("");
    }

    lines.push("## Detailed Records");
    lines.push("");

    for (const [index, issue] of issues.entries()) {
      lines.push(`${index + 1}. [${issue.scope}] ${issue.kind} on \`${issue.route}\``);
      lines.push(`   ${issue.message}`);
      if (issue.screenshot) {
        lines.push(`   Screenshot: \`${issue.screenshot}\``);
      }
      lines.push("");
    }
  }

  fs.writeFileSync(mdPath, `${lines.join("\n")}\n`);
  console.log(`Saved issue artifacts to ${OUTPUT_DIR}`);
  console.log(`Captured ${issues.length} issue(s).`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
