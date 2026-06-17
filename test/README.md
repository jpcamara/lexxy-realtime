# lexxy-realtime tests

These tests run the real collaboration stack against a **yrb-lite** server and
exercise its durability guarantees.

```
npm test              # headless durability suite + browser editor e2e
npm run test:headless # just the headless suite
npm run test:browser  # just the browser e2e
```

`test/run.mjs` boots the server, runs the suites against it, and tears it down.

## Pieces

- **`server/`** — a minimal Rails + ActionCable app whose only channel is
  `DocumentChannel` (one `include YrbLite::Sync`). It runs the memory backend
  with an `on_change`/`on_load` file store (`lib/file_store.rb`), so it's the
  authoritative, record-before-distribute path: every change is durably logged
  before it's relayed, and a document is rebuilt from the log on a cold start.
  `GET /content/:id` returns the durable state for assertions.

- **`headless/`** — Node/Yjs tests driving the `YrbLiteProvider` (no DOM):
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
  the document from the server.

## Note on the Lexxy patch

`@lexical/yjs`'s `createBinding` snapshots node defaults by constructing every
registered node with no arguments. Several Lexxy ActionText nodes destructure
their first constructor argument and throw on no-arg construction, which aborts
binding setup and silently breaks Lexical↔Yjs sync. `patches/` carries a
`patch-package` patch that defaults those constructor args, applied on
`postinstall`. This is still required on current Lexxy (verified on 0.9.18) and
is a candidate for an upstream fix.
