# lexxy-realtime tests

These tests run the real collaboration stack against a **yrby** server and
exercise its durability guarantees.

```
npm test              # headless durability suite + browser editor e2e
npm run test:headless # just the headless suite
npm run test:browser  # just the browser e2e
```

`test/run.mjs` boots the server, runs the suites against it, and tears it down.

## Pieces

- **`server/`** — a minimal Rails + ActionCable app whose only channel is
  `DocumentChannel` (one `include Y::Sync`). It runs the memory backend
  with an `on_change`/`on_load` file store (`lib/file_store.rb`), so it's the
  authoritative, record-before-distribute path: every change is durably logged
  before it's relayed, and a document is rebuilt from the log on a cold start.
  `GET /content/:id` returns the durable state for assertions.

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
  the document from the server.

## Lifecycle and navigation contracts

`headless/contracts.mjs` verifies SSR imports, rejected public configuration,
and cleanup under exceptions/reentry. `browser/lifecycle_contract.js` drives
real Lexxy editors through duplicate ownership, populated remounts, delayed
initialization, partial setup failures, throwing cleanup, remote-apply recovery,
recovery cancellation, bootstrap during reconnect, and held acknowledgments.

`browser/navigation.mjs` uses three independent Chrome sessions for each of
Turbo 8 and Turbolinks 5. Two users continue typing while the third visits away
and returns, including browser history. It checks exact convergence, retired
resource disposal, one overlay, overlapping keyboard input, and recovery by a
fresh fourth reader. Screenshots and JSON evidence are saved under
`server/data/navigation/`. These fixtures follow the documented no-cache rule
for live editor DOM; they do not claim cached Lexical snapshots are reusable.

## Lexical compatibility

Lexxy 0.9.29 already fixes the attachment constructors. The remaining
`patchCollabElementSplice` workaround handles an empty-tree splice in
`@lexical/yjs` 0.44. A binding's disposal also clears its `_collabNode` caches
before the same Y.Doc can be attached to another editor. See `LIFECYCLE.md`.
