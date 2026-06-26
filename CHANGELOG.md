# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.1] - 2026-06-26

### Fixed

- Remote cursors and selections now update live. The re-render trigger listened
  on a separately-created `Awareness` instance, but `YrbLiteProvider` always
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
  `yrb-lite` Rails server.

### Removed

- The `patches/` directory, the `postinstall: patch-package` script, and the
  `patch-package` dev dependency. Installing the peers is now enough.

### Changed

- Standardized on a single lockfile (`bun.lock`); dropped `package-lock.json`.

[Unreleased]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/jpcamara/lexxy-realtime/releases/tag/v0.1.0
