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

`patchCollabElementSplice` works around an `@lexical/yjs` 0.44 bug with
empty trees. When neither the existing child nor the replacement exists,
`splice` throws in development builds and records `undefined` in production
builds. Binding an empty document hits exactly that case. The prototype isn't
exported, so we reach it through the live binding's root and make that one
case a no-op. The patch lives in `attachment_sync.js`. `@lexical/yjs` 0.52
fixed the bug, so the patch only matters for the import-map asset, which
still bundles 0.44. Remove it when that asset moves to 0.52.

`registerTextReconciliation`, in `text_reconciliation.js`, overrides
`applyChildrenYjsDelta` for bindings this package creates. A peer can
receive the deletion of a text node's metadata before the metadata of the
text that absorbed it, and the stock code then deletes text that should
survive. For bindings this package creates, the override rebuilds a
block's children from the shared value on every remote change, and gives
text without metadata a new header. Repairs are written under
`reconciliationOrigin`, so the
remote applier and the Yjs undo manager both ignore them.
`test/headless/text_integrity.mjs` covers it, and `LEXXY_TEST_LEGACY=1` runs
the same checks without the fixes. These fixes mirror
[jpcamara/lexical#3](https://github.com/jpcamara/lexical/pull/3) and
[#4](https://github.com/jpcamara/lexical/pull/4), which fix the same bugs in
Lexical itself. The upstream fix keeps an incremental fast path; this patch
always rebuilds, so it doesn't depend on Lexical's private update logic.

`attachmentExclusions` uses the `excludedProperties` option of
`createBinding` to keep browser-only values out of the shared document: the
raw `File`, `editor`, `previewSrc`, and the upload settings.

The gem's `lexxy` dependency starts at 0.9.29. That release constructs
attachment nodes without arguments
([basecamp/lexxy#1196](https://github.com/basecamp/lexxy/pull/1196)), which
the binding needs.

If you change a patch, run `bun run test:headless` and
`bun run test:browser`. Only the browser suite exercises the real editor
binding.

### Upstream tracking

- `@lexical/yjs`: `applyChildrenYjsDelta` should keep text whose metadata
  arrives late. Still broken in 0.52; `LEXXY_TEST_LEGACY=1` fails 12
  text-integrity checks.
- `@lexical/yjs`: `CollabElementNode.splice` accepts the empty case as of
  0.52.

## Two Lexical versions

The npm package and the import-map asset use different Lexical versions,
because Lexxy ships different ones on npm and in its gem.

- `@37signals/lexxy` 1.0.2 and later on npm depend on Lexical 0.52. The npm
  package's peers are `lexical ^0.52`, `@lexical/yjs ^0.52`, and
  `@37signals/lexxy ^1.0.2`. Development and tests use these versions.
- The Lexxy gem's `lexxy.js` embeds Lexical 0.44, up to at least 1.0.4.
  The import-map asset gets lexical from that file, so it bundles
  `@lexical/yjs` 0.44. `@lexical/yjs` 0.52 calls Lexical functions that
  0.44 doesn't have. The `lexical-importmap` and `lexical-yjs-importmap`
  dev dependencies are npm aliases for those 0.44 packages, and only
  `build:importmap` uses them.

When a Lexxy gem release embeds Lexical 0.52, point both aliases at 0.52
(or remove them) and raise the gem's `lexxy` floor to that release. To see
which Lexical a Lexxy gem embeds, search its `app/assets/javascript/lexxy.js`
for `+prod.esm`.

## Pull requests

- Keep the comments above `patchCollabElementSplice` and
  `registerTextReconciliation` that explain why each patch exists.
- Run `bun run test` before you open a PR.
- Add an entry to `CHANGELOG.md` under **[Unreleased]**.
