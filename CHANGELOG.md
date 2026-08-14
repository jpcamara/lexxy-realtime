# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Remote cursors match Lexxy's design. The name label is a rounded pill
  in Lexxy's font, the caret is a clean 2px bar, and selections render
  as soft rounded highlights, all in the peer's color. @lexical/yjs
  renders its hardcoded inline styles (an Arial label on a square color
  block) unless the editor's Lexical theme has a `collaboration` entry;
  the element now registers one (`lexxy-collab-cursor`,
  `lexxy-collab-cursor__name`, `lexxy-collab-selection`,
  `lexxy-collab-selection__bg`) with a small stylesheet built on Lexxy's
  design tokens, so a customized Lexxy theme carries into the
  collaboration UI. Override by styling those classes, or keep full
  control by defining `theme.collaboration` on the editor yourself; the
  peer color arrives as `--lexical-cursor-color`. The rules also ship as
  a real stylesheet for apps whose Content-Security-Policy blocks
  injected style tags: `import "lexxy-realtime/lexxy-realtime.css"` on
  npm, or the gem's `lexxy_realtime.css` asset. When the file is loaded,
  the element skips its runtime injection.
- Real uploads are covered end to end. The test server gains ActiveStorage
  (sqlite + disk service, tables created at boot), and a browser e2e drives
  a PNG through Lexxy's own upload pipeline: DirectUpload to the real
  direct-upload endpoint, the attachment lands in the shared document with
  its signed sgid, a live peer and a late joiner both render actual pixels
  from the served blob URL, and no upload placeholder survives. Runs in the
  Action Cable and AnyCable phases both. The test bundle now includes the
  real @rails/activestorage (the stub that disabled uploads is gone).
- AnyCable is covered end to end. The suite gains an AnyCable leg
  (`npm run test:anycable`, run automatically in full runs when
  anycable-go and redis are present, plus a CI job): the headless
  durability suites, the full browser editor e2e, and a runtime
  `@anycable/web` consumer check all go through a real anycable-go
  gateway and RPC server, including presence over AnyCable whispers.
  The README documents the server pair and both client paths.

### Changed

- The README leads with a quick start (gem, generator, model, form, and
  the JavaScript for import-map and bundler apps both), followed by a
  table of contents and the reference sections. The import-map install
  path is documented for the first time; the old README required a
  bundler even though the generator pins the gem's own import-map
  builds.

## [0.5.0] - 2026-08-12

### Changed

- `yrby-client` is a regular dependency instead of being bundled into the
  npm package's dist. Consumers resolve one copy of the provider (shared
  with any direct yrby-client use), and the version relationship is an
  explicit `^0.5.0` instead of whatever was inlined at build time. The
  Rails gem's import-map asset still bakes everything in and is unchanged.

### Fixed

- The npm package ships real TypeScript declarations. `package.json` pointed
  `types` at `dist/lexxy-realtime.d.ts`, a file the build never produced, so
  strict TypeScript consumers failed with TS7016. `types/lexxy-realtime.d.ts`
  now declares `Collaboration` and `setConsumer` and re-exports
  `YrbyProvider`'s types from yrby-client. The test suite compiles a strict
  consumer against the declarations, including an `@anycable/web` consumer.
- The AnyCable example calls `createConsumer` from `@anycable/web`. The
  README and the `setConsumer` docs showed `createCable()`, whose native
  `Cable` has no `subscriptions` and fails as a consumer when an editor
  mounts. The ActionCable-compat `createConsumer()` is the supported shape,
  pinned by a compile-time check.

## [0.4.0] - 2026-08-08

### Added

- The `lexxy-realtime` Rails gem, first release: `has_collaborative_rich_text`
  (with `encrypted: true` through `Y::EncryptedDocument` and
  `ActionText::EncryptedRichText`), `collaborative_rich_textarea`,
  field-scoped signed tokens, write-through rendering to Action Text via
  `Y::Lexxy`, and an install generator for the channel, tables, and
  import-map pins. Storage comes from `yrby-rails`.

- Import maps work with no bundler: the Rails gem ships pinnable builds
  (`lexxy_realtime/lexical.js`, `lexxy_realtime/lexxy.js`,
  `lexxy_realtime/lexxy-realtime.js`, each readable with a sourcemap
  plus a `.min.js`, following Lexxy's gem asset layout), and the
  install generator adds the pins when `config/importmap.rb` exists. `lexical` is the one
  module the Lexxy and lexxy-realtime bundles share, so both are built
  with it external and it resolves through its own pin; the
  `@37signals/lexxy` pin must point at this gem's build, since Lexxy's
  own asset bundles a second `lexical`. A stopgap until Lexxy ships
  import-map-ready builds.

- Zero-config element: with no consumer, doc, or provider assigned, the
  element creates a shared Action Cable consumer (from the standard
  `action-cable-url` meta tag, falling back to `/cable`), builds its own
  doc and provider, and connects itself. `setConsumer(consumerOrFactory)`
  sets the app-wide default for other transports such as `@anycable/web`;
  a consumer assigned directly on an element still wins. The element now
  also exposes `doc`, like `provider` and `awareness`.
- A document opened for the first time on a record with an existing body
  seeds the collaborative document from the editor's server-rendered
  value, instead of clearing it to an empty paragraph. Existing documents
  load exactly as before. Two first-ever openers can both seed, the same
  check-then-act race as Lexical's CollaborationPlugin (whose docs call
  client bootstrap dev-only); accepted knowingly, since the duplicate is
  confined to a document's first open, visible, and easily deleted.
- Attachments work under collaboration: an attachment created by one
  collaborator materializes for every peer and for late joiners. Uploads
  sync live (progress bar and error state; a finished upload no longer
  leaves a zombie placeholder), server-generated previews (PDFs) render
  their poll-until-ready placeholder, remote placeholders drop the
  "NaN undefined" size caption, and re-binding the element keeps the
  exclusions. The browser e2e covers the scenarios.

### Changed

- The runtime constructor shims are gone. Lexxy constructs attachment
  nodes bare (basecamp/lexxy#1196), which retires the no-arg constructor
  probe, the guarded subclass swap, the constructor lookup patch, and the
  mutation-listener re-key. What remains: the unsyncable-property
  exclusions (`file`, `editor`, `previewSrc`, `uploadUrl`,
  `blobUrlTemplate`), keyed by node type and passed to `createBinding`,
  and the `CollabElementNode.splice` patch, a separate `@lexical/yjs`
  empty-bootstrap issue.
- The `@37signals/lexxy` peer floor is `^0.9.29`, the first release with
  the constructor fix; earlier versions throw at bind. CI installs it
  from the registry instead of overlaying a dist built from the merge
  commit.

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

[Unreleased]: https://github.com/jpcamara/lexxy-realtime/compare/v0.5.0...HEAD
[0.5.0]: https://github.com/jpcamara/lexxy-realtime/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/jpcamara/lexxy-realtime/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/jpcamara/lexxy-realtime/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/jpcamara/lexxy-realtime/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.3...v0.2.0
[0.1.3]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/jpcamara/lexxy-realtime/releases/tag/v0.1.0
