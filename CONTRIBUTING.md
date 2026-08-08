# Contributing to lexxy-realtime

Issues and PRs welcome. This repository contains the browser package and
the Rails integration (`rails/`). The sibling
[`yrby`](https://github.com/jpcamara/yrby) repository provides the server
and `yrby-client`, so most of the test suite drives a real yrby Rails
server.

## Prerequisites

- [Bun](https://bun.sh) (build + test runner)
- A local checkout of [`yrby`](https://github.com/jpcamara/yrby) **as a
  sibling directory** (`../yrby`). The test server's `Gemfile` path-pins the
  `yrby` and `yrby-rails` gems to that checkout.
- For the server-backed tests: Ruby 3.4+ and a Rust toolchain (the `yrby`
  gem has a native extension that compiles on `bundle install`).
- For the browser tests: a Chrome/Chromium that [agent-browser](https://www.npmjs.com/package/agent-browser)
  can drive.

## Build

```bash
bun install
bun run build        # the published bundle; dist/ is built, never committed (npm install runs it via prepare)
bun run build:test   # the browser test bundle
```

## Tests

```bash
bun run test            # headless durability + browser suites
bun run test:headless   # protocol-level convergence / durability / loss
bun run test:browser    # real Lexxy editors driven via agent-browser
```

`test/run.mjs` boots the `yrby` test server (`test/server`, a minimal Rails
app), runs the suites, and tears it down.

- **Headless** (`test/headless/*.mjs`) drives Yjs directly over the cable
  protocol. Deterministic, and runs in CI alongside the browser suite.
- **Browser** (`test/browser/{e2e,cursors,lifecycle}.mjs`) opens real Lexxy editors and
  asserts live convergence, durability, and remote-cursor fidelity. The cursor
  presence-timing checks (focus/blur/refocus/disconnect) are sensitive to
  agent-browser scheduling and can flake; rerun before treating one as a real
  regression.

## The compatibility patch

One runtime patch remains, applied from inside `editor_collaboration.js`'s
bind path so consumers don't have to touch their `node_modules`:

`patchCollabElementSplice` works around an `@lexical/yjs` empty-tree bug:
`splice` throws in dev builds (and appends `undefined` in prod) when both
the existing child and the replacement are missing, which is what the
empty-collab-tree bootstrap does. We reach the unexported prototype
through the live binding root and make that one case a no-op.

The attachment exclusions (`attachmentExclusions`) use `createBinding`'s
supported `excludedProperties` option to keep browser-only values (a raw
`File`, `editor`, `previewSrc`, upload config) out of the shared doc.

The constructor shims are gone. Lexxy constructs attachment nodes bare as of
[basecamp/lexxy#1196](https://github.com/basecamp/lexxy/pull/1196), shipped
in Lexxy 0.9.29; the `@37signals/lexxy` peer floor requires that release.

If you change the patch, revalidate with `bun run test:browser`; the browser
suite is the only thing that exercises the real editor binding.

### Upstream tracking

- `@lexical/yjs`: `CollabElementNode.splice` still needs the empty case
  tolerated, and a candidate for an upstream fix in facebook/lexical.

## Pull requests

- Keep the bind-path comment that explains why the patch exists.
- Run `bun run test` before opening a PR.
- Update `CHANGELOG.md` under **[Unreleased]**.
