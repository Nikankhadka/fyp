# Playwright Smoke Issues

Generated: 2026-06-19T04:32:00.149Z

## Summary

- fatal | locator.waitFor: Timeout 8000ms exceeded.
Call log:
[2m  - waiting for locator('body') to be visible[22m

  Count: 4
  Scopes: public, guest, host, admin
  Routes: http://localhost:3000/Home | http://localhost:3000/Home/login

## Detailed Records

1. [public] fatal on `http://localhost:3000/Home`
   locator.waitFor: Timeout 8000ms exceeded.
Call log:
[2m  - waiting for locator('body') to be visible[22m

   Screenshot: `artifacts/playwright/public-fatal.png`

2. [guest] fatal on `http://localhost:3000/Home/login`
   locator.waitFor: Timeout 8000ms exceeded.
Call log:
[2m  - waiting for locator('body') to be visible[22m

   Screenshot: `artifacts/playwright/guest-fatal.png`

3. [host] fatal on `http://localhost:3000/Home/login`
   locator.waitFor: Timeout 8000ms exceeded.
Call log:
[2m  - waiting for locator('body') to be visible[22m

   Screenshot: `artifacts/playwright/host-fatal.png`

4. [admin] fatal on `http://localhost:3000/Home/login`
   locator.waitFor: Timeout 8000ms exceeded.
Call log:
[2m  - waiting for locator('body') to be visible[22m

   Screenshot: `artifacts/playwright/admin-fatal.png`

