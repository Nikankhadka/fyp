# Playwright Smoke Issues

Generated: 2026-06-19T04:06:05.456Z

## Summary

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/login. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at refreshReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:62092)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69731)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)
    at useReducerWithReduxDevtools (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75193)
    at Router (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:10798)
    at wf (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:38363)
    at $g (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:53651)
  Count: 3
  Scopes: guest, host, admin
  Routes: http://127.0.0.1:3101/Home/login

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000005. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)
  Count: 2
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin | http://127.0.0.1:3101/Admin/listing

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000003. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)
  Count: 2
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin | http://127.0.0.1:3101/Admin/listing

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001011. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)
  Count: 1
  Scopes: public
  Routes: http://127.0.0.1:3101/Home

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001012. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)
  Count: 1
  Scopes: public
  Routes: http://127.0.0.1:3101/Home

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001010. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)
  Count: 1
  Scopes: public
  Routes: http://127.0.0.1:3101/Home

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001003. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)
  Count: 1
  Scopes: public
  Routes: http://127.0.0.1:3101/Home

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/66010000000000000000100e. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)
  Count: 1
  Scopes: public
  Routes: http://127.0.0.1:3101/Home

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/66010000000000000000100f. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)
  Count: 1
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001009. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)
  Count: 1
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001005. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)
  Count: 1
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000006. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)
  Count: 1
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin/users

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000003. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)
  Count: 1
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin/users

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000002. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)
  Count: 1
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin/users

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000005. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)
  Count: 1
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin/users

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000004. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)
  Count: 1
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin/users

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001011. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)
  Count: 1
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin/listing

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001012. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)
  Count: 1
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin/listing

- console | Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001010. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)
  Count: 1
  Scopes: admin
  Routes: http://127.0.0.1:3101/Admin/listing

## Detailed Records

1. [public] console on `http://127.0.0.1:3101/Home`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001011. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)

2. [public] console on `http://127.0.0.1:3101/Home`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001012. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)

3. [public] console on `http://127.0.0.1:3101/Home`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001010. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)

4. [public] console on `http://127.0.0.1:3101/Home`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001003. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)

5. [public] console on `http://127.0.0.1:3101/Home`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/66010000000000000000100e. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)

6. [guest] console on `http://127.0.0.1:3101/Home/login`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/login. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at refreshReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:62092)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69731)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)
    at useReducerWithReduxDevtools (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75193)
    at Router (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:10798)
    at wf (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:38363)
    at $g (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:53651)

7. [host] console on `http://127.0.0.1:3101/Home/login`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/login. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at refreshReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:62092)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69731)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)
    at useReducerWithReduxDevtools (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75193)
    at Router (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:10798)
    at wf (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:38363)
    at $g (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:53651)

8. [admin] console on `http://127.0.0.1:3101/Home/login`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/login. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at refreshReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:62092)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69731)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)
    at useReducerWithReduxDevtools (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75193)
    at Router (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:10798)
    at wf (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:38363)
    at $g (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:53651)

9. [admin] console on `http://127.0.0.1:3101/Admin`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/66010000000000000000100f. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)

10. [admin] console on `http://127.0.0.1:3101/Admin`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000005. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)

11. [admin] console on `http://127.0.0.1:3101/Admin`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001009. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)

12. [admin] console on `http://127.0.0.1:3101/Admin`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000003. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)

13. [admin] console on `http://127.0.0.1:3101/Admin`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001005. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)

14. [admin] console on `http://127.0.0.1:3101/Admin/users`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000006. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)

15. [admin] console on `http://127.0.0.1:3101/Admin/users`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000003. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)

16. [admin] console on `http://127.0.0.1:3101/Admin/users`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000002. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)

17. [admin] console on `http://127.0.0.1:3101/Admin/users`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000005. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)

18. [admin] console on `http://127.0.0.1:3101/Admin/users`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000004. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31783)

19. [admin] console on `http://127.0.0.1:3101/Admin/listing`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000003. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)

20. [admin] console on `http://127.0.0.1:3101/Admin/listing`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001011. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)

21. [admin] console on `http://127.0.0.1:3101/Admin/listing`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001012. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)

22. [admin] console on `http://127.0.0.1:3101/Admin/listing`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/user/660100000000000000000005. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)

23. [admin] console on `http://127.0.0.1:3101/Admin/listing`
   Failed to fetch RSC payload for http://127.0.0.1:3101/Home/rooms/660100000000000000001010. Falling back to browser navigation. TypeError: Failed to fetch
    at fetchServerResponse (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:44692)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60616
    at Object.task (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31721)
    at PromiseQueue.processNext (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:32445)
    at PromiseQueue.enqueue (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:31849)
    at prefetchReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:60579)
    at reducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:69850)
    at http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:1:75208
    at Object.Nf [as useReducer] (http://127.0.0.1:3101/_next/static/chunks/ee8a080f-0c941d2381d4f7e6.js:9:40413)
    at t.useReducer (http://127.0.0.1:3101/_next/static/chunks/490-2e4bc2a6d3f5ef09.js:17:7409)

