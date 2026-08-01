# Contributing to lexxy-realtime

Issues and PRs welcome. This package is the browser half of a small stack —
[`yrby`](https://github.com/jpcamara/yrby) (the Rust-backed Yjs server
+ `yrby-client`) is the other half — so most of the test suite drives a real
`yrby` Rails server.

## Prerequisites

- [Bun](https://bun.sh) (build + test runner)
- A local checkout of [`yrby`](https://github.com/jpcamara/yrby) **as a
  sibling directory** (`../yrby`). The test server's `Gemfile` path-pins the
  `yrby` and `yrby-actioncable` gems to that checkout.
- For the server-backed tests: Ruby 3.4+ and a Rust toolchain (the `yrby`
  gem has a native extension that compiles on `bundle install`).
- For the browser tests: a Chrome/Chromium that [agent-browser](https://www.npmjs.com/package/agent-browser)
  can drive.

## Build

```bash
bun install
bun run build        # the published bundle (dist/)
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
  protocol — deterministic, and what CI runs.
- **Browser** (`test/browser/{e2e,cursors}.mjs`) opens real Lexxy editors and
  asserts live convergence, durability, and remote-cursor fidelity. The cursor
  presence-timing checks (focus/blur/refocus/disconnect) are sensitive to
  agent-browser scheduling and can flake; rerun before treating one as a real
  regression.

## The compatibility patch

One runtime patch remains, applied from inside `editor_collaboration.js`'s
bind path so consumers don't have to touch their `node_modules`:

**`@lexical/yjs` `CollabElementNode.splice`.** It throws (dev) / appends
`undefined` (prod) when asked to splice at an index with no existing child and
no node to insert — exactly what the empty-collab-tree bootstrap does. We
reach the (unexported) prototype through the live binding root and make that
one case a no-op.

The attachment-property exclusions (`attachmentExclusions`) are not a patch:
they use `createBinding`'s supported `excludedProperties` parameter to keep
client-local properties (a raw `File`, `editor`, `previewSrc`, upload config)
out of the shared doc.

The constructor shims are gone. Lexxy constructs attachment nodes bare as of
[basecamp/lexxy#1196](https://github.com/basecamp/lexxy/pull/1196) — merged
but not yet in an npm release, so CI builds Lexxy's dist from the merge
commit and lays it over the installed package (see the workflow step).

If you change the patch, revalidate with `bun run test:browser` — the browser
suite is the only thing that exercises the real editor binding.

### Upstream tracking

- `@37signals/lexxy`: no-arg construction is fixed on main (basecamp/lexxy#1196).
  When a release ships it: bump the `@37signals/lexxy` dev dependency AND the
  peer floor (`^0.9` admits releases that throw at bind), and delete the CI
  overlay step.
- `@lexical/yjs`: `CollabElementNode.splice` still needs the empty case
  tolerated — candidate for an upstream fix in facebook/lexical.

## Pull requests

- Keep the bind path readable; the patch is commented with *why*, not just
  *what* — keep that.
- Run `bun run test` before opening a PR.
- Update `CHANGELOG.md` under **[Unreleased]**.
