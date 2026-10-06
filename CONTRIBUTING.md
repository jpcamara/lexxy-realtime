# Contributing to lexxy-realtime

Issues and PRs are welcome. This repository holds the browser package and
the Rails integration (`rails/`). The server and `yrby-client` live in the
[`yrby`](https://github.com/jpcamara/yrby) repository, and most of the test
suite runs against a real yrby Rails server.

## Prerequisites

- [Bun](https://bun.sh), for builds and tests.
- A checkout of [`yrby`](https://github.com/jpcamara/yrby) in a sibling
  directory (`../yrby`). The test server's `Gemfile` points the `yrby` and
  `yrby-rails` gems at that checkout.
- For the server-backed tests, Ruby 3.4+ and a Rust toolchain. The `yrby`
  gem has a native extension that compiles during `bundle install`.
- For the browser tests, a Chrome or Chromium that
  [agent-browser](https://www.npmjs.com/package/agent-browser) can drive.

## Build

```bash
bun install
bun run build        # the published bundle; dist/ isn't committed (npm install builds it via prepare)
bun run build:test   # the browser test bundle
```

## Tests

```bash
bun run test            # headless and browser suites
bun run test:headless   # protocol-level convergence, durability, and loss
bun run test:browser    # real Lexxy editors driven by agent-browser
bun run test:anycable   # the suites again through anycable-go (needs anycable-go and Redis)
```

`test/run.mjs` boots the yrby test server (`test/server`, a minimal Rails
app), runs the suites, and shuts the server down.

- The headless suite (`test/headless/*.mjs`) drives Yjs directly over the
  cable protocol. It's deterministic, and CI runs it next to the browser
  suite.
- The browser suite (`test/browser/*.mjs`) opens real Lexxy editors. It
  checks that editors converge, that edits are stored, and that remote
  cursors render correctly. It also covers uploads, element lifecycle,
  Turbo navigation, and the import-map build. The cursor presence timing
  checks (focus, blur, refocus, disconnect) depend on agent-browser
  scheduling and sometimes fail at random. Rerun one before you treat it as
  a real regression.

## The compatibility patches

The package patches `@lexical/yjs` at runtime, so apps don't have to change
their `node_modules`. `editor_collaboration.js` applies both patches when it
binds an editor.

`patchCollabElementSplice` works around an `@lexical/yjs` bug with empty
trees. When neither the existing child nor the replacement exists, `splice`
throws in development builds and records `undefined` in production builds.
Binding an empty document hits exactly that case. The prototype isn't
exported, so we reach it through the live binding's root and make that one
case a no-op. The patch lives in `attachment_sync.js`.

`registerTextReconciliation`, in `text_reconciliation.js`, overrides
`applyChildrenYjsDelta` for bindings this package creates. A peer can
receive the deletion of a text node's metadata before the metadata of the
text that absorbed it, and the stock code then deletes text that should
survive. The override rebuilds the children from the shared value instead.
`test/headless/text_integrity.mjs` covers it, and
`LEXXY_TEST_LEGACY=1` runs the same checks without the fixes.

`attachmentExclusions` uses the `excludedProperties` option of
`createBinding` to keep browser-only values out of the shared document: the
raw `File`, `editor`, `previewSrc`, and the upload settings.

The `@37signals/lexxy` peer range starts at 0.9.29. That release constructs
attachment nodes without arguments
([basecamp/lexxy#1196](https://github.com/basecamp/lexxy/pull/1196)), which
the binding needs.

If you change a patch, run `bun run test:headless` and
`bun run test:browser`. Only the browser suite exercises the real editor
binding.

### Upstream tracking

- `@lexical/yjs`: `CollabElementNode.splice` should accept the empty case,
  and `applyChildrenYjsDelta` should keep text whose metadata arrives late.
  Both could be fixed upstream in facebook/lexical.

## Pull requests

- Keep the comments above `patchCollabElementSplice` and
  `registerTextReconciliation` that explain why each patch exists.
- Run `bun run test` before you open a PR.
- Add an entry to `CHANGELOG.md` under **[Unreleased]**.
