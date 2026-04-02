# Playwright Triage Notes

Generated from `BASE_URL=http://localhost:3000 node scripts/playwright-smoke.js`.

## High Priority

1. Room page runtime crash
   Route: `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Error: `Cannot read properties of undefined (reading 'A')`
   Likely source: `react-tailwindcss-datepicker` usage in `apps/web/src/components/listing/BookProperty.tsx`
   Evidence: `artifacts/playwright/public-pageerror.png`, `artifacts/playwright/guest-pageerror.png`

2. Guest account page also triggers the same runtime error
   Route: `http://localhost:3000/Home/Account`
   Error: `Cannot read properties of undefined (reading 'A')`
   Likely impact: the room-page booking widget crash leaks into logged-in navigation after visiting the listing flow
   Evidence: `artifacts/playwright/guest-pageerror.png`

3. Wishlist interaction is not reliably reachable in browser automation
   Route: `/Home/rooms/69c90aba845305efca14dc60`
   Error: `Wishlist toggle failed: locator.click timeout`
   Likely cause: the room page is partially broken, and the save control also has invalid nested button markup

## Medium Priority

1. Invalid nested button markup on the room save action
   Warning: `validateDOMNesting(...): <button> cannot appear as a descendant of <button>`
   Likely source: outer save button in `apps/web/src/app/Home/rooms/[listingId]/client.tsx` wrapping `apps/web/src/components/Svg/wishSvg.tsx`

2. React special prop misuse on cards
   Warning: ``key` is not a prop`
   Likely source: `apps/web/src/components/card/card.tsx`

3. Invalid SVG attribute casing
   Warning: `stroke-linecap` / related SVG props should use React casing
   Likely source: `apps/web/src/components/carousel.tsx`

## Raw Artifacts

- `artifacts/playwright/issues.json`
- `artifacts/playwright/issues.md`
- `artifacts/playwright/public-pageerror.png`
- `artifacts/playwright/guest-pageerror.png`
- `artifacts/playwright/guest-fatal.png`
