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

## The two runtime shims

`@lexical/yjs` 0.44 and `@37signals/lexxy` 0.9 each have a rough edge that breaks
binding an empty/collaborative document. We apply both fixes **at runtime, from
inside `editor_collaboration.js`'s bind path**, so consumers don't have to patch
their `node_modules`:

1. **`@37signals/lexxy` attachment nodes.** @lexical/yjs constructs registered
   node classes with no arguments in two places: `createBinding`'s bind-time
   property snapshot, and again whenever a peer's node is materialized from a
   remote update. Lexxy's three ActionText attachment nodes destructure their
   first parameter and throw on no-arg construction. We detect the offending
   classes on an isolated probe editor and permanently swap each into
   `editor._nodes` for a subclass that defaults the missing argument to `{}`.
   Lexical asserts `registeredNode.klass === node.constructor`, and which
   class is right depends on the editor doing the asserting (a plain Lexxy
   editor on the same page registers the original class), so `constructor`
   is a getter that answers with whatever the active editor registered.
   The same classes get excluded properties — a raw `File` on the upload
   node makes yjs throw mid-sync, and `editor`/`previewSrc` are
   client-local — and a small `createDOM` fixup that blanks the
   "NaN undefined" size caption Lexxy renders for a File it doesn't have.
   The swap also re-keys mutation listeners that were registered against
   the original class (Lexxy's upload tracker, which holds form submission
   while uploads are pending): Lexical buckets mutations by the currently
   registered class, so a pre-swap listener would otherwise never fire
   again.
   The fix upstream is mostly trivial (default the constructor parameter to
   `{}`; keep non-serializable state off enumerable instance properties;
   guard the size formatter).

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

Last checked: lexxy 0.9.23 (July 2026). The attachment constructors still
destructure their first parameter with no default, and the upload node's size
caption still formats `this.file?.size` unguarded, so both shims remain. The
full browser suite passes against 0.9.23.

## Pull requests

- Keep the bind path readable; both shims are commented with *why*, not just
  *what* — keep that.
- Run `bun run test` before opening a PR.
- Update `CHANGELOG.md` under **[Unreleased]**.
