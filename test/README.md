# lexxy-realtime tests

These tests run the real collaboration stack against a yrby server and check
that no edits are lost.

```
npm test              # headless suites, browser suites, and AnyCable when available
npm run test:headless # only the headless suites
npm run test:browser  # only the browser suites
npm run test:anycable # the AnyCable suites (needs anycable-go and Redis)
```

`test/run.mjs` starts the server, runs the suites against it, and stops it.
The unit checks (`remote_apply`, `text_integrity`) run first and need no
server.

## Pieces

- **`server/`** is a small Rails and Action Cable app. Its only channel,
  `DocumentChannel`, includes `Y::ActionCable::Sync` and stores updates in a
  file store (`lib/file_store.rb`) through `on_change` and `on_load`. The
  server records each change before it relays it, and rebuilds a document
  from that log on a cold start. `GET /content/:id` returns the stored state
  for assertions.
  Headless clients subscribe with `{ id: room }`. `<yrby-document>`
  subscribes with `{ grant, name }`, and the channel stores that document
  under the key `grant:name`. The channel rejects a grant that starts with
  `reject`, and `GET /grant/:grant` returns `{ grant }` for the refresh
  tests.

- **`headless/`** has Node tests that drive `YrbyProvider` with no DOM:
  - `convergence.mjs`: two clients sync both ways, and the server catches up
    a late joiner.
  - `durability.mjs`: the server records an edit before relaying it, the
    edit survives every client disconnecting, and a new client loads it from
    the store through `on_load`.
  - `loss.mjs`: with outbound frames and acknowledgments dropped, every
    acknowledged edit still reaches the peer and the store, because the
    provider retransmits.
  - `remote_apply.mjs` and `text_integrity.mjs` test the binding without a
    server.

- **`browser/`** runs the real Lexxy editor in Chrome, driven with
  [`agent-browser`](https://www.npmjs.com/package/agent-browser).
  `npm run build:test` bundles `app.js` into `server/public/`. `e2e.mjs`
  opens two editors that sync both ways, then opens a third client that
  loads the document from the server. `lifecycle.mjs` covers binding to a
  `<yrby-document>` session, moves, removal with pending edits, desync
  recovery, grant refresh, and host-supplied providers. `navigation.mjs`
  types in three browsers while one of them navigates with Turbo and with
  Turbolinks.

## The `@lexical/yjs` patch

The package patches `@lexical/yjs` at runtime when it binds an editor.
[`CONTRIBUTING.md`](../CONTRIBUTING.md#the-compatibility-patch) explains the
patch and which tests cover it.
