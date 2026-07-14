# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2026-07-13

### Fixed

- The element-managed wiring works. When the host supplies only a cable
  `consumer` plus attributes, the element builds its own `YrbyProvider` —
  which does not auto-connect — and nothing ever connected it, so that
  wiring produced a dead editor. The element now connects a provider it
  created and still leaves host-supplied providers alone.

### Added

- TypeScript declarations, covering the `<lexxy-collaboration>` element
  (both wirings, all attributes), the provider surface the element
  requires, and the `YrbyProvider` re-export.
- The browser e2e suite runs in CI (real Chrome). It is the only suite
  that exercises the actual editor binding and the runtime shims; before,
  CI ran only the build and the headless protocol tests.
- README sections for persisting to ActionText with server-side rendering
  (`Y::Lexxy`) and Turbo Drive, plus a typing GIF and a live presence GIF
  captured from real browsers.

### Changed

- The README leads with the provider contract: lexxy-realtime works with
  any Yjs provider, assumes yrby only when you don't supply one, and never
  requires yrby-client on the bring-your-own-provider path.
- Bundles `yrby-client` 0.5.0 from the registry (adds
  `provider.whenSynced`); the vendored-tarball workaround is gone.
- `package.json` declares `sideEffects` (the custom-element registration
  must survive tree shaking), ships `types`, and adds keywords.

## [0.2.1] - 2026-06-29

### Fixed

- Bundles `yrby-client@0.4.2`, whose `ActionCableProvider` now tears down via
  `subscription.unsubscribe()` (universal) instead of
  `consumer.subscriptions.remove()` — the latter doesn't exist on `@anycable/web`,
  so disconnect threw there. Also loosens the cable consumer types so an
  `@anycable/web` consumer is assignable with no adapter/casts.

## [0.2.0] - 2026-06-29

### Changed

- **BREAKING:** the document id is now read from a dedicated `doc-id` attribute
  instead of the global HTML `id` attribute (which it overloaded). Set
  `collab.setAttribute("doc-id", ...)` instead of `collab.setAttribute("id", ...)`.
  Still defaults to `"main"` when omitted.
- Internal: dropped `async` from the no-`await` `#init`, removed dead rolldown
  externals (`@y-rb/actioncable`, `@anycable/web`), and documented the page-wide
  blast radius of the shared `CollabElementNode.splice` patch.

### Fixed

- The post-sync bootstrap poll (a 50 ms interval) is now cleared on teardown.
  It previously cleared only on a successful first sync, so unmounting the
  element before sync — or a provider that never synced — leaked the interval
  (in a browser `unref()` is a no-op, so it runs forever). Verified by a new
  lifecycle e2e (`test/browser/lifecycle.mjs`).
- A DOM move (which fires disconnect+reconnect) no longer kills a host-supplied
  provider. `<lexxy-collaboration>` now only disconnects a provider it created
  itself; a provider passed in by the host stays connected across moves and is
  reused on reconnect. Also fixes the element double-disconnecting a provider
  the host owns.
- Mounting `<lexxy-collaboration>` outside a `<lexxy-editor>` now logs a clear
  error instead of throwing an opaque `Cannot read properties of null` TypeError.
- A malformed `channel-params` attribute no longer throws an uncaught
  `SyntaxError`; it logs a clear error and falls back to `{}`.

## [0.1.3] - 2026-06-29

### Changed

- Internal: renamed the `__yrbLiteSplicePatched` prototype guard to
  `__yrbySplicePatched` (no behavior change).

## [0.1.2] - 2026-06-26

### Changed

- Remote carets/selections now persist while a collaborator's editor is blurred,
  instead of disappearing. `@lexical/yjs` renders a peer only while their
  `focusing` flag is true, and the `@lexical/react`-style focus/blur toggling we
  used set it false on every editor blur — so a collaborator vanished the moment
  they clicked another window or tab (and, with two windows on one machine, the
  focused window could never see the other). `focusing` now stays true for the
  session; a peer who actually leaves is removed via the provider's
  navigation/close presence removal (`pagehide`), or the awareness timeout if
  they drop abruptly.

## [0.1.1] - 2026-06-26

### Fixed

- Remote cursors and selections now update live. The re-render trigger listened
  on a separately-created `Awareness` instance, but `YrbyProvider` always
  creates and uses its own, so awareness-only changes from a peer (moving the
  caret or selecting, with no text edit) never triggered a re-render — a remote
  caret appeared to move only when that peer also typed. The collaboration
  element now listens on the provider's own `Awareness`, and exposes it back via
  the element's `awareness` property. (This was the source of the
  previously-intermittent cursor behavior.)

## [0.1.0] - 2026-06-25

First release that installs with **no consumer-side patches**. Previously the
consuming app had to apply two `patch-package` patches to `@lexical/yjs` and
`@37signals/lexxy`; both are now applied at runtime from inside the bind path,
so the upstream packages are never modified on disk.

### Added

- Runtime shim for `@37signals/lexxy`: its ActionText attachment-node
  constructors throw when `@lexical/yjs`'s `createBinding` snapshots node
  defaults by constructing every node with no arguments. For the bind window
  only, the offending classes are swapped for identity-preserving subclasses
  that default the missing argument to `{}`, then reverted. Replaces the
  consumer-side `@37signals/lexxy` patch.
- Runtime shim for `@lexical/yjs`: `CollabElementNode.splice` is made a no-op
  when there is nothing to remove, instead of throwing, so the binding bootstrap
  can populate an empty collab tree. Replaces the consumer-side `@lexical/yjs`
  patch.
- `LICENSE` (MIT), `CHANGELOG.md`, `CONTRIBUTING.md`.
- GitHub Actions CI: a hermetic build/bundle job, and a headless durability job
  that runs the convergence / durability / loss suites against the real
  `yrby` Rails server.

### Removed

- The `patches/` directory, the `postinstall: patch-package` script, and the
  `patch-package` dev dependency. Installing the peers is now enough.

### Changed

- Standardized on a single lockfile (`bun.lock`); dropped `package-lock.json`.

[Unreleased]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.2...HEAD
[0.1.2]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/jpcamara/lexxy-realtime/releases/tag/v0.1.0
