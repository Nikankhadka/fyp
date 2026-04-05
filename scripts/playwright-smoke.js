const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright-core");

const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:3000";
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

function ensureOutputDir() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
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
    if (failure.includes("net::ERR_ABORTED") && request.url().includes("_rsc=")) {
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
    await page.getByRole("button", { name: /save/i }).click().catch(async (error) => {
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
