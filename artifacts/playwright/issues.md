# Playwright Smoke Issues

Generated: 2026-04-02T01:12:59.569Z

## Summary

- console | Warning: %s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)%s Card 
    at Card (webpack-internal:///(app-pages-browser)/./src/components/card/card.tsx:48:11)
    at div
    at div
    at main
    at HomeClient (webpack-internal:///(app-pages-browser)/./src/app/Home/HomeClient.tsx:17:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 4
  Scopes: public, guest, host, admin
  Routes: http://localhost:3000/Home

- pageerror | Cannot read properties of undefined (reading 'A')
  Count: 3
  Scopes: public, guest
  Routes: http://localhost:3000/Home/rooms/69c90aba845305efca14dc60 | http://localhost:3000/Home/Account

- console | Warning: validateDOMNesting(...): %s cannot appear as a descendant of <%s>.%s <button> button 
    at button
    at Wish (webpack-internal:///(app-pages-browser)/./src/components/Svg/wishSvg.tsx:21:11)
    at button
    at div
    at div
    at div
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: public, guest
  Routes: http://localhost:3000/Home/rooms/69c90aba845305efca14dc60

- console | Warning: Invalid DOM property `%s`. Did you mean `%s`?%s stroke-linecap strokeLinecap 
    at path
    at svg
    at span
    at button
    at div
    at Carousel (webpack-internal:///(app-pages-browser)/./src/components/carousel.tsx:15:11)
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: public, guest
  Routes: http://localhost:3000/Home/rooms/69c90aba845305efca14dc60

- console | Warning: Invalid DOM property `%s`. Did you mean `%s`?%s stroke-linejoin strokeLinejoin 
    at path
    at svg
    at span
    at button
    at div
    at Carousel (webpack-internal:///(app-pages-browser)/./src/components/carousel.tsx:15:11)
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: public, guest
  Routes: http://localhost:3000/Home/rooms/69c90aba845305efca14dc60

- console | Warning: Invalid DOM property `%s`. Did you mean `%s`?%s stroke-width strokeWidth 
    at path
    at svg
    at span
    at button
    at div
    at Carousel (webpack-internal:///(app-pages-browser)/./src/components/carousel.tsx:15:11)
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: public, guest
  Routes: http://localhost:3000/Home/rooms/69c90aba845305efca14dc60

- console | Warning: Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render%s HotReload Datepicker Datepicker 
    at Datepicker (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:2585:13)
    at div
    at div
    at main
    at BookProperty (webpack-internal:///(app-pages-browser)/./src/components/listing/BookProperty.tsx:27:11)
    at div
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: public, guest
  Routes: http://localhost:3000/Home/rooms/69c90aba845305efca14dc60

- console | Warning: Invalid DOM property `%s`. Did you mean `%s`?%s fill-rule fillRule 
    at path
    at svg
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at div
    at div
    at div
    at Error (webpack-internal:///(app-pages-browser)/./src/app/error.tsx:18:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: public, guest
  Routes: http://localhost:3000/Home/rooms/69c90aba845305efca14dc60

- console | Warning: Invalid DOM property `%s`. Did you mean `%s`?%s clip-rule clipRule 
    at path
    at svg
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at div
    at div
    at div
    at Error (webpack-internal:///(app-pages-browser)/./src/app/error.tsx:18:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: public, guest
  Routes: http://localhost:3000/Home/rooms/69c90aba845305efca14dc60

- console | The above error occurred in the <NotFoundErrorBoundary> component:

    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundaryHandler.
  Count: 2
  Scopes: public, guest
  Routes: http://localhost:3000/Home/rooms/69c90aba845305efca14dc60

- console | TypeError: Cannot read properties of undefined (reading 'A')
    at getOwner (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:414:46)
    at jsxDEVImpl (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:589:58)
    at reactJsxRuntime_development.jsx (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:716:15)
    at Datepicker (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:2844:216)
    at renderWithHooks (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:10732:18)
    at mountIndeterminateComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:15770:13)
    at beginWork$1 (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:17354:16)
    at beginWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:25711:14)
    at performUnitOfWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24557:12)
    at workLoopSync (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24273:5)
    at renderRootSync (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24228:7)
    at recoverFromConcurrentError (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:23453:20)
    at performConcurrentWorkOnRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:23398:26)
    at workLoop (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:261:34)
    at flushWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:230:14)
    at MessagePort.performWorkUntilDeadline (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:534:21)
  Count: 2
  Scopes: public, guest
  Routes: http://localhost:3000/Home/rooms/69c90aba845305efca14dc60

- console | Failed to load resource: the server responded with a status of 404 (Not Found)
  Count: 2
  Scopes: public, guest
  Routes: http://localhost:3000/Home/rooms/69c90aba845305efca14dc60

- console | Warning: %s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)%s Card 
    at Card (webpack-internal:///(app-pages-browser)/./src/components/card/card.tsx:48:11)
    at div
    at div
    at div
    at main
    at Profile (webpack-internal:///(app-pages-browser)/./src/components/user/profile.tsx:29:11)
    at main
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: public, host
  Routes: http://localhost:3000/Home/user/69c90aba845305efca14dc5a

- console | Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <td> a  
    at td
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: guest, host
  Routes: http://localhost:3000/Home/Account/trips | http://localhost:3000/Home/Account/reservations

- console | Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <a> tr  
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: guest, host
  Routes: http://localhost:3000/Home/Account/trips | http://localhost:3000/Home/Account/reservations

- console | Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <td> td  
    at td
    at td
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: guest, host
  Routes: http://localhost:3000/Home/Account/trips | http://localhost:3000/Home/Account/reservations

- console | Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <td> a  
    at td
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at main
    at AdminTable (webpack-internal:///(app-pages-browser)/./src/components/admin/table.tsx:40:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: admin
  Routes: http://localhost:3000/Admin/users | http://localhost:3000/Admin/listing

- console | Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <a> tr  
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at main
    at AdminTable (webpack-internal:///(app-pages-browser)/./src/components/admin/table.tsx:40:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 2
  Scopes: admin
  Routes: http://localhost:3000/Admin/users | http://localhost:3000/Admin/listing

- action | Wishlist toggle failed: locator.click: Timeout 30000ms exceeded.
Call log:
[2m  - waiting for getByRole('button', { name: /save/i })[22m

  Count: 1
  Scopes: guest
  Routes: /Home/rooms/69c90aba845305efca14dc60

- console | Failed to fetch RSC payload for http://localhost:3000/Home/login. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js:54:27)
    at refreshReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js:32:123)
    at clientReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/router-reducer/router-reducer.js:37:59)
    at eval (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/use-reducer-with-devtools.js:63:21)
    at updateReducerImpl (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:11248:11)
    at updateReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:11138:10)
    at Object.useReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:12556:16)
    at useReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/cjs/react.development.js:1761:21)
    at useReducerWithReduxDevtoolsImpl (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/use-reducer-with-devtools.js:102:53)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:174:169)
    at renderWithHooks (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:10732:18)
    at updateFunctionComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:15215:20)
    at beginWork$1 (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:17368:16)
    at beginWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:25711:14)
    at performUnitOfWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24557:12)
    at workLoopConcurrent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24543:5)
    at renderRootConcurrent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24499:9)
    at performConcurrentWorkOnRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:23360:38)
    at workLoop (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:261:34)
    at flushWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:230:14)
    at MessagePort.performWorkUntilDeadline (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:534:21)
  Count: 1
  Scopes: host
  Routes: http://localhost:3000/Home/login

- console | Warning: %s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)%s Card 
    at Card (webpack-internal:///(app-pages-browser)/./src/components/card/card.tsx:48:11)
    at div
    at div
    at div
    at main
    at Profile (webpack-internal:///(app-pages-browser)/./src/components/user/profile.tsx:29:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 1
  Scopes: host
  Routes: http://localhost:3000/Home/Account

- requestfailed | GET http://localhost:3000/_next/static/css/app/layout.css?v=1775092345422 => net::ERR_ABORTED
  Count: 1
  Scopes: admin
  Routes: http://localhost:3000/Home/login

- requestfailed | GET http://localhost:3000/Home => net::ERR_ABORTED
  Count: 1
  Scopes: admin
  Routes: http://localhost:3000/Admin

- console | Failed to fetch RSC payload for http://localhost:3000/Home. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js:54:27)
    at refreshReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js:32:123)
    at clientReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/router-reducer/router-reducer.js:37:59)
    at eval (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/use-reducer-with-devtools.js:63:21)
    at updateReducerImpl (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:11248:11)
    at updateReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:11138:10)
    at Object.useReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:12556:16)
    at useReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/cjs/react.development.js:1761:21)
    at useReducerWithReduxDevtoolsImpl (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/use-reducer-with-devtools.js:102:53)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:174:169)
    at renderWithHooks (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:10732:18)
    at updateFunctionComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:15215:20)
    at beginWork$1 (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:17368:16)
    at beginWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:25711:14)
    at performUnitOfWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24557:12)
    at workLoopConcurrent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24543:5)
    at renderRootConcurrent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24499:9)
    at performConcurrentWorkOnRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:23360:38)
    at workLoop (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:261:34)
    at flushWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:230:14)
    at MessagePort.performWorkUntilDeadline (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:534:21)
  Count: 1
  Scopes: admin
  Routes: http://localhost:3000/Home

- console | Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <td> a  
    at td
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at AdminTable (webpack-internal:///(app-pages-browser)/./src/components/admin/table.tsx:40:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 1
  Scopes: admin
  Routes: http://localhost:3000/Admin/bookings

- console | Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <a> tr  
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at AdminTable (webpack-internal:///(app-pages-browser)/./src/components/admin/table.tsx:40:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 1
  Scopes: admin
  Routes: http://localhost:3000/Admin/bookings

- console | Warning: %s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)%s Card 
    at Card (webpack-internal:///(app-pages-browser)/./src/components/card/card.tsx:48:11)
    at div
    at div
    at main
    at ListingComp (webpack-internal:///(app-pages-browser)/./src/components/listing/listingcomp.tsx:22:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)
  Count: 1
  Scopes: admin
  Routes: http://localhost:3000/Admin/listingRequest

## Detailed Records

1. [public] console on `http://localhost:3000/Home`
   Warning: %s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)%s Card 
    at Card (webpack-internal:///(app-pages-browser)/./src/components/card/card.tsx:48:11)
    at div
    at div
    at main
    at HomeClient (webpack-internal:///(app-pages-browser)/./src/app/Home/HomeClient.tsx:17:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

2. [public] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: validateDOMNesting(...): %s cannot appear as a descendant of <%s>.%s <button> button 
    at button
    at Wish (webpack-internal:///(app-pages-browser)/./src/components/Svg/wishSvg.tsx:21:11)
    at button
    at div
    at div
    at div
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

3. [public] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: Invalid DOM property `%s`. Did you mean `%s`?%s stroke-linecap strokeLinecap 
    at path
    at svg
    at span
    at button
    at div
    at Carousel (webpack-internal:///(app-pages-browser)/./src/components/carousel.tsx:15:11)
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

4. [public] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: Invalid DOM property `%s`. Did you mean `%s`?%s stroke-linejoin strokeLinejoin 
    at path
    at svg
    at span
    at button
    at div
    at Carousel (webpack-internal:///(app-pages-browser)/./src/components/carousel.tsx:15:11)
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

5. [public] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: Invalid DOM property `%s`. Did you mean `%s`?%s stroke-width strokeWidth 
    at path
    at svg
    at span
    at button
    at div
    at Carousel (webpack-internal:///(app-pages-browser)/./src/components/carousel.tsx:15:11)
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

6. [public] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render%s HotReload Datepicker Datepicker 
    at Datepicker (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:2585:13)
    at div
    at div
    at main
    at BookProperty (webpack-internal:///(app-pages-browser)/./src/components/listing/BookProperty.tsx:27:11)
    at div
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

7. [public] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: Invalid DOM property `%s`. Did you mean `%s`?%s fill-rule fillRule 
    at path
    at svg
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at div
    at div
    at div
    at Error (webpack-internal:///(app-pages-browser)/./src/app/error.tsx:18:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

8. [public] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: Invalid DOM property `%s`. Did you mean `%s`?%s clip-rule clipRule 
    at path
    at svg
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at div
    at div
    at div
    at Error (webpack-internal:///(app-pages-browser)/./src/app/error.tsx:18:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

9. [public] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   The above error occurred in the <NotFoundErrorBoundary> component:

    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundaryHandler.

10. [public] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   TypeError: Cannot read properties of undefined (reading 'A')
    at getOwner (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:414:46)
    at jsxDEVImpl (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:589:58)
    at reactJsxRuntime_development.jsx (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:716:15)
    at Datepicker (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:2844:216)
    at renderWithHooks (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:10732:18)
    at mountIndeterminateComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:15770:13)
    at beginWork$1 (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:17354:16)
    at beginWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:25711:14)
    at performUnitOfWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24557:12)
    at workLoopSync (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24273:5)
    at renderRootSync (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24228:7)
    at recoverFromConcurrentError (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:23453:20)
    at performConcurrentWorkOnRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:23398:26)
    at workLoop (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:261:34)
    at flushWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:230:14)
    at MessagePort.performWorkUntilDeadline (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:534:21)

11. [public] pageerror on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Cannot read properties of undefined (reading 'A')
   Screenshot: `artifacts/playwright/public-pageerror.png`

12. [public] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Failed to load resource: the server responded with a status of 404 (Not Found)

13. [public] console on `http://localhost:3000/Home/user/69c90aba845305efca14dc5a`
   Warning: %s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)%s Card 
    at Card (webpack-internal:///(app-pages-browser)/./src/components/card/card.tsx:48:11)
    at div
    at div
    at div
    at main
    at Profile (webpack-internal:///(app-pages-browser)/./src/components/user/profile.tsx:29:11)
    at main
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

14. [guest] console on `http://localhost:3000/Home`
   Warning: %s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)%s Card 
    at Card (webpack-internal:///(app-pages-browser)/./src/components/card/card.tsx:48:11)
    at div
    at div
    at main
    at HomeClient (webpack-internal:///(app-pages-browser)/./src/app/Home/HomeClient.tsx:17:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

15. [guest] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: validateDOMNesting(...): %s cannot appear as a descendant of <%s>.%s <button> button 
    at button
    at Wish (webpack-internal:///(app-pages-browser)/./src/components/Svg/wishSvg.tsx:21:11)
    at button
    at div
    at div
    at div
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

16. [guest] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: Invalid DOM property `%s`. Did you mean `%s`?%s stroke-linecap strokeLinecap 
    at path
    at svg
    at span
    at button
    at div
    at Carousel (webpack-internal:///(app-pages-browser)/./src/components/carousel.tsx:15:11)
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

17. [guest] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: Invalid DOM property `%s`. Did you mean `%s`?%s stroke-linejoin strokeLinejoin 
    at path
    at svg
    at span
    at button
    at div
    at Carousel (webpack-internal:///(app-pages-browser)/./src/components/carousel.tsx:15:11)
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

18. [guest] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: Invalid DOM property `%s`. Did you mean `%s`?%s stroke-width strokeWidth 
    at path
    at svg
    at span
    at button
    at div
    at Carousel (webpack-internal:///(app-pages-browser)/./src/components/carousel.tsx:15:11)
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

19. [guest] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render%s HotReload Datepicker Datepicker 
    at Datepicker (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:2585:13)
    at div
    at div
    at main
    at BookProperty (webpack-internal:///(app-pages-browser)/./src/components/listing/BookProperty.tsx:27:11)
    at div
    at div
    at main
    at RoomClient (webpack-internal:///(app-pages-browser)/./src/app/Home/rooms/[listingId]/client.tsx:30:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

20. [guest] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: Invalid DOM property `%s`. Did you mean `%s`?%s fill-rule fillRule 
    at path
    at svg
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at div
    at div
    at div
    at Error (webpack-internal:///(app-pages-browser)/./src/app/error.tsx:18:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

21. [guest] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Warning: Invalid DOM property `%s`. Did you mean `%s`?%s clip-rule clipRule 
    at path
    at svg
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at div
    at div
    at div
    at Error (webpack-internal:///(app-pages-browser)/./src/app/error.tsx:18:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

22. [guest] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   The above error occurred in the <NotFoundErrorBoundary> component:

    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundaryHandler.

23. [guest] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   TypeError: Cannot read properties of undefined (reading 'A')
    at getOwner (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:414:46)
    at jsxDEVImpl (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:589:58)
    at reactJsxRuntime_development.jsx (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:716:15)
    at Datepicker (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/react-tailwindcss-datepicker@1.7.4_dayjs@1.11.13_react@18.3.1/node_modules/react-tailwindcss-datepicker/dist/index.esm.js:2844:216)
    at renderWithHooks (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:10732:18)
    at mountIndeterminateComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:15770:13)
    at beginWork$1 (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:17354:16)
    at beginWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:25711:14)
    at performUnitOfWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24557:12)
    at workLoopSync (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24273:5)
    at renderRootSync (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24228:7)
    at recoverFromConcurrentError (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:23453:20)
    at performConcurrentWorkOnRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:23398:26)
    at workLoop (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:261:34)
    at flushWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:230:14)
    at MessagePort.performWorkUntilDeadline (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:534:21)

24. [guest] pageerror on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Cannot read properties of undefined (reading 'A')
   Screenshot: `artifacts/playwright/guest-pageerror.png`

25. [guest] console on `http://localhost:3000/Home/rooms/69c90aba845305efca14dc60`
   Failed to load resource: the server responded with a status of 404 (Not Found)

26. [guest] pageerror on `http://localhost:3000/Home/Account`
   Cannot read properties of undefined (reading 'A')
   Screenshot: `artifacts/playwright/guest-pageerror.png`

27. [guest] console on `http://localhost:3000/Home/Account/trips`
   Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <td> a  
    at td
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

28. [guest] console on `http://localhost:3000/Home/Account/trips`
   Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <a> tr  
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

29. [guest] console on `http://localhost:3000/Home/Account/trips`
   Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <td> td  
    at td
    at td
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

30. [guest] action on `/Home/rooms/69c90aba845305efca14dc60`
   Wishlist toggle failed: locator.click: Timeout 30000ms exceeded.
Call log:
[2m  - waiting for getByRole('button', { name: /save/i })[22m


31. [host] console on `http://localhost:3000/Home/login`
   Failed to fetch RSC payload for http://localhost:3000/Home/login. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js:54:27)
    at refreshReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js:32:123)
    at clientReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/router-reducer/router-reducer.js:37:59)
    at eval (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/use-reducer-with-devtools.js:63:21)
    at updateReducerImpl (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:11248:11)
    at updateReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:11138:10)
    at Object.useReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:12556:16)
    at useReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/cjs/react.development.js:1761:21)
    at useReducerWithReduxDevtoolsImpl (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/use-reducer-with-devtools.js:102:53)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:174:169)
    at renderWithHooks (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:10732:18)
    at updateFunctionComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:15215:20)
    at beginWork$1 (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:17368:16)
    at beginWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:25711:14)
    at performUnitOfWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24557:12)
    at workLoopConcurrent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24543:5)
    at renderRootConcurrent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24499:9)
    at performConcurrentWorkOnRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:23360:38)
    at workLoop (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:261:34)
    at flushWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:230:14)
    at MessagePort.performWorkUntilDeadline (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:534:21)

32. [host] console on `http://localhost:3000/Home`
   Warning: %s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)%s Card 
    at Card (webpack-internal:///(app-pages-browser)/./src/components/card/card.tsx:48:11)
    at div
    at div
    at main
    at HomeClient (webpack-internal:///(app-pages-browser)/./src/app/Home/HomeClient.tsx:17:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

33. [host] console on `http://localhost:3000/Home/Account`
   Warning: %s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)%s Card 
    at Card (webpack-internal:///(app-pages-browser)/./src/components/card/card.tsx:48:11)
    at div
    at div
    at div
    at main
    at Profile (webpack-internal:///(app-pages-browser)/./src/components/user/profile.tsx:29:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

34. [host] console on `http://localhost:3000/Home/Account/reservations`
   Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <td> a  
    at td
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

35. [host] console on `http://localhost:3000/Home/Account/reservations`
   Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <a> tr  
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

36. [host] console on `http://localhost:3000/Home/Account/reservations`
   Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <td> td  
    at td
    at td
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at div
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

37. [host] console on `http://localhost:3000/Home/user/69c90aba845305efca14dc5a`
   Warning: %s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)%s Card 
    at Card (webpack-internal:///(app-pages-browser)/./src/components/card/card.tsx:48:11)
    at div
    at div
    at div
    at main
    at Profile (webpack-internal:///(app-pages-browser)/./src/components/user/profile.tsx:29:11)
    at main
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

38. [admin] requestfailed on `http://localhost:3000/Home/login`
   GET http://localhost:3000/_next/static/css/app/layout.css?v=1775092345422 => net::ERR_ABORTED

39. [admin] requestfailed on `http://localhost:3000/Admin`
   GET http://localhost:3000/Home => net::ERR_ABORTED

40. [admin] console on `http://localhost:3000/Home`
   Warning: %s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)%s Card 
    at Card (webpack-internal:///(app-pages-browser)/./src/components/card/card.tsx:48:11)
    at div
    at div
    at main
    at HomeClient (webpack-internal:///(app-pages-browser)/./src/app/Home/HomeClient.tsx:17:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

41. [admin] console on `http://localhost:3000/Home`
   Failed to fetch RSC payload for http://localhost:3000/Home. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js:54:27)
    at refreshReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js:32:123)
    at clientReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/router-reducer/router-reducer.js:37:59)
    at eval (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/use-reducer-with-devtools.js:63:21)
    at updateReducerImpl (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:11248:11)
    at updateReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:11138:10)
    at Object.useReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:12556:16)
    at useReducer (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/cjs/react.development.js:1761:21)
    at useReducerWithReduxDevtoolsImpl (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/use-reducer-with-devtools.js:102:53)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:174:169)
    at renderWithHooks (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:10732:18)
    at updateFunctionComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:15215:20)
    at beginWork$1 (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:17368:16)
    at beginWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:25711:14)
    at performUnitOfWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24557:12)
    at workLoopConcurrent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24543:5)
    at renderRootConcurrent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24499:9)
    at performConcurrentWorkOnRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:23360:38)
    at workLoop (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:261:34)
    at flushWork (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:230:14)
    at MessagePort.performWorkUntilDeadline (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:534:21)

42. [admin] console on `http://localhost:3000/Admin/users`
   Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <td> a  
    at td
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at main
    at AdminTable (webpack-internal:///(app-pages-browser)/./src/components/admin/table.tsx:40:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

43. [admin] console on `http://localhost:3000/Admin/users`
   Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <a> tr  
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at main
    at AdminTable (webpack-internal:///(app-pages-browser)/./src/components/admin/table.tsx:40:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

44. [admin] console on `http://localhost:3000/Admin/listing`
   Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <td> a  
    at td
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at main
    at AdminTable (webpack-internal:///(app-pages-browser)/./src/components/admin/table.tsx:40:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

45. [admin] console on `http://localhost:3000/Admin/listing`
   Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <a> tr  
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at main
    at AdminTable (webpack-internal:///(app-pages-browser)/./src/components/admin/table.tsx:40:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

46. [admin] console on `http://localhost:3000/Admin/bookings`
   Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <td> a  
    at td
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at AdminTable (webpack-internal:///(app-pages-browser)/./src/components/admin/table.tsx:40:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

47. [admin] console on `http://localhost:3000/Admin/bookings`
   Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s <a> tr  
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/link.js:105:19)
    at tr
    at tbody
    at table
    at div
    at div
    at div
    at div
    at div
    at main
    at TripBookingClient (webpack-internal:///(app-pages-browser)/./src/components/listing/TripsReservationClient.tsx:39:11)
    at AdminTable (webpack-internal:///(app-pages-browser)/./src/components/admin/table.tsx:40:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

48. [admin] console on `http://localhost:3000/Admin/listingRequest`
   Warning: %s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)%s Card 
    at Card (webpack-internal:///(app-pages-browser)/./src/components/card/card.tsx:48:11)
    at div
    at div
    at main
    at ListingComp (webpack-internal:///(app-pages-browser)/./src/components/listing/listingcomp.tsx:22:11)
    at ClientComp (webpack-internal:///(app-pages-browser)/./src/components/clientComp.tsx:13:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at main
    at main
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:241:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at Suspense
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:338:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/render-from-template-context.js:15:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/layout-router.js:348:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:72:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:54:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:294:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:157:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:82:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/error-boundary.js:110:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router.js:440:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:126:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@13.5.11_@babel+core@7.27.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-index.js:142:11)

