# lexxy-realtime tests

These tests run the real collaboration stack against a **yrby** server and
check that edits aren't lost.

```
npm test              # headless suites, browser suites, and AnyCable when available
npm run test:headless # just the headless suites
npm run test:browser  # just the browser suites
npm run test:anycable # the AnyCable suites (needs anycable-go and redis)
```

`test/run.mjs` starts the server, runs the suites against it, and stops it.

## Pieces

- **`server/`** — a minimal Rails + ActionCable app whose only channel is
  `DocumentChannel` (one `include Y::Sync`). It runs the memory backend
  with an `on_change`/`on_load` file store (`lib/file_store.rb`), so it's the
  authoritative, record-before-distribute path: every change is durably logged
  before it's relayed, and a document is rebuilt from the log on a cold start.
  `GET /content/:id` returns the durable state for assertions.
  Headless clients subscribe with `{ id: room }`. `<yrby-document>`
  subscribes with `{ grant, name }`, stored under the key `grant:name`. A
  grant that starts with `reject` is rejected, and `GET /grant/:grant`
  returns `{ grant }` for refresh tests.

- **`headless/`** — Node/Yjs tests driving the `YrbyProvider` (no DOM):
  - `convergence.mjs` — two clients sync both ways; a late joiner is caught up
    by the server.
  - `durability.mjs` — an edit is recorded before relay, survives every client
    disconnecting, and a fresh client is rebuilt from the store (`on_load`).
  - `loss.mjs` — with outbound frames and acks dropped, every acknowledged edit
    still reaches the peer and the store, recovered by the provider's retransmit.

- **`browser/`** — the real Lexxy editor in a browser, driven with
  [`agent-browser`](https://www.npmjs.com/package/agent-browser). `app.js` is
  bundled into `server/public/` (`npm run build:test`); `e2e.mjs` opens two
  editors that converge both ways, then opens a third cold client that rebuilds
  the document from the server. `lifecycle.mjs` covers binding to a
  `<yrby-document>` session, moves, removal with pending edits, desync
  recovery, grant refresh, and host-supplied providers. `navigation.mjs`
  types in three browsers while one navigates with Turbo and Turbolinks.

## Note on the Lexxy patch

`@lexical/yjs`'s `createBinding` snapshots node defaults by constructing every
registered node with no arguments. Several Lexxy ActionText nodes destructure
their first constructor argument and throw on no-arg construction, which aborts
binding setup and silently breaks Lexical↔Yjs sync. `patches/` carries a
`patch-package` patch that defaults those constructor args, applied on
`postinstall`. This is still required on current Lexxy (verified on 0.9.18) and
is a candidate for an upstream fix.
