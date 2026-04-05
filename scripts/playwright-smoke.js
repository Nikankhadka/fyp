const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright-core");

const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:3000";
const API_URL = process.env.API_URL || "http://127.0.0.1:2900";
const OUTPUT_DIR = path.join(process.cwd(), "artifacts", "playwright");

const USERS = {
  guest: { userId: "guest.asha", password: "guest1234" },
  host: { userId: "host.sita", password: "host1234" },
  admin: { userId: "admin", password: "admin1234" },
};

const issues = [];
const seenIssues = new Set();

function ensureOutputDir() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const entry of fs.readdirSync(OUTPUT_DIR)) {
    fs.rmSync(path.join(OUTPUT_DIR, entry), { recursive: true, force: true });
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

async function loadDemoData() {
  const response = await fetch(`${API_URL}/property/v1/getProperty?page=1&limit=6`, {
    headers: { accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch smoke seed data: HTTP ${response.status}`);
  }

  const payload = await response.json();
  if (!payload?.success || !Array.isArray(payload.propertyData) || payload.propertyData.length === 0) {
    throw new Error("Failed to fetch smoke seed data: no properties available");
  }

  const property = payload.propertyData.find((item) => item?._id && item?.userId) || payload.propertyData[0];
  if (!property?._id || !property?.userId) {
    throw new Error("Failed to fetch smoke seed data: property is missing ids");
  }

  return {
    propertyId: property._id,
    userId: String(property.userId),
  };
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
    const message = msg.text();
    if (
      message.startsWith("Warning:") ||
      message.startsWith("The above error occurred") ||
      message.includes("Failed to fetch RSC payload")
    ) {
      return;
    }
    addIssue({
      scope,
      kind: "console",
      route: page.url(),
      message,
    });
  });
}

async function gotoAndCheck(page, route, scope) {
  const response = await page.goto(`${BASE_URL}${route}`, {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  });

  await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
  await page.locator("body").waitFor({ state: "visible", timeout: 10000 });

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
  await page.locator('input[type="submit"]').click();
  await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
}

async function runScenario(name, creds, routes, actions) {
  const browser = await chromium.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 1200 },
  });
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
    await context.close();
    await browser.close();
  }
}

async function run() {
  ensureOutputDir();
  const demo = await loadDemoData();
  const propertyRoute = `/Home/rooms/${demo.propertyId}`;
  const userRoute = `/Home/user/${demo.userId}`;

  await runScenario("public", null, [
    "/Home",
    "/Home/login",
    "/Home/signup",
    propertyRoute,
    userRoute,
  ]);

  await runScenario("guest", USERS.guest, [
    "/Home",
    propertyRoute,
    "/Home/Account",
    "/Home/Account/trips",
    "/Home/Account/reservations",
    "/Home/Account/favourites",
  ], async (page) => {
    await page.goto(`${BASE_URL}${propertyRoute}`, { waitUntil: "domcontentloaded" });
    await page.getByRole("button", { name: /save/i }).click().catch(async (error) => {
      addIssue({
        scope: "guest",
        kind: "action",
        route: propertyRoute,
        message: `Wishlist toggle failed: ${error.message}`,
      });
    });
  });

  await runScenario("host", USERS.host, [
    "/Home",
    "/Home/Account",
    "/Home/Account/trips",
    "/Home/Account/reservations",
    userRoute,
  ]);

  await runScenario("admin", USERS.admin, [
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
  if (issues.length > 0) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
