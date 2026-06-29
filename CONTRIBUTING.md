# Contributing to lexxy-realtime

Issues and PRs welcome. This package is the browser half of a small stack —
[`yrby`](https://github.com/jpcamara/yrby) (the Rust-backed Yjs server
+ `@yrby/client`) is the other half — so most of the test suite drives a real
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

## The two runtime shims

`@lexical/yjs` 0.44 and `@37signals/lexxy` 0.9 each have a rough edge that breaks
binding an empty/collaborative document. We apply both fixes **at runtime, from
inside `editor_collaboration.js`'s bind path**, so consumers don't have to patch
their `node_modules`:

1. **`@37signals/lexxy` attachment-node constructors.** `createBinding` snapshots
   default node properties by constructing every registered node with no
   arguments (`new klass()` in `initializeNodeProperties`). Lexxy's three
   ActionText attachment nodes destructure their first parameter and throw on
   no-arg construction. Lexical also asserts `registeredNode.klass ===
   node.constructor` on every construct, so a `Proxy`/foreign wrapper trips
   `errorOnTypeKlassMismatch`. We instead detect the offending classes on an
   isolated probe editor, then — for the bind window only — swap each into
   `editor._nodes` for an identity-preserving subclass that defaults the missing
   argument to `{}`, and revert immediately after. The fix upstream is trivial
   (default the parameter, `= {}`).

2. **`@lexical/yjs` `CollabElementNode.splice`.** It throws (dev) / appends
   `undefined` (prod) when asked to splice at an index with no existing child and
   no node to insert — exactly what the empty-collab-tree bootstrap does. We
   reach the (unexported) prototype through the live binding root and make that
   one case a no-op.

Both are temporary. If you change either, **revalidate by reversing any local
file patches and running `bun run test:browser`** — the browser suite is the only
thing that exercises the real editor binding and these shims.

### Upstream tracking

- `@37signals/lexxy`: default the attachment-node constructor parameters.
- `@lexical/yjs`: make `CollabElementNode.splice` tolerate the empty case.

When an upstream release lands, drop the corresponding shim and bump the peer
range.

## Pull requests

- Keep the bind path readable; both shims are commented with *why*, not just
  *what* — keep that.
- Run `bun run test` before opening a PR.
- Update `CHANGELOG.md` under **[Unreleased]**.
