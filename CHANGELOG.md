# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `LexxyRealtime::DocumentChannel` ships in the gem. It extends yrby-rails'
  `Y::DocumentChannel` and renders the Action Text field after each saved
  change. It rejects a missing, tampered, expired, or wrong-field grant, a
  deleted record, and a field that isn't declared with
  `has_collaborative_rich_text`. To add a permission check, use
  `LexxyRealtime::DocumentChannel.authorize_document`.
- `collaborative_rich_textarea` accepts `expires_in:`, which limits how long
  the grant lasts, and `refresh:`, the URL of an action that returns a new
  grant as `{ "grant": ... }`. When the server rejects the subscription,
  the page fetches a new grant and resubscribes. It keeps the document and
  any edits the server hasn't acknowledged.
- `record.collaborative_rich_text_grant(:body, expires_in:)` returns the
  grant the form helper renders, for refresh actions.
- The `lexxy-realtime:desync` event and the element's `doc`, `provider`,
  `awareness`, and `binding` properties are in the TypeScript declarations.
- `has_collaborative_rich_text` takes `nodes:`, the `Y::Lexxy` render rules
  for the app's custom Lexical nodes. Without a rule, a custom node can be
  missing from the stored HTML even though the editors show it.
- The gem logs a warning that names node types with no render rule. It
  logs once per model, field, and set of types.

### Changed

- **Breaking:** the form helper wraps the editor in yrby-client's
  `<yrby-document>`, and `<lexxy-collaboration>` binds the editor to that
  element's document session. The session owns the `Y.Doc` and provider,
  keeps unacknowledged edits after the editor is removed, and handles
  Turbo and Turbolinks visits. `<lexxy-collaboration>` no longer reads
  `channel-name` or `channel-params` and no longer creates a consumer, doc,
  or provider. Without a `<yrby-document>` ancestor, assign `doc` and
  `provider` before the element connects. Importing `lexxy-realtime`
  registers `<yrby-document>`.
- **Breaking:** `setConsumer` sets `YrbyDocumentElement.consumer`. A
  function argument runs the first time a `<yrby-document>` needs a
  consumer, and its result is reused. The per-element `consumer` property
  is gone.
- The element renders a doc's existing content when it binds, and moving
  it within one turn keeps its binding. An element that replaces it in the
  same turn, for example through a Turbo Stream, takes the document over.
- The package stylesheet sets `yrby-document { display: contents }`, so the
  element around the editor doesn't change form layout. The element
  injects it, and it is in `lexxy-realtime.css` for apps that load the
  file.
- **Breaking:** the gem's import-map assets are three files, so the page
  loads one copy of each shared module: `lexxy_realtime/lexxy-realtime.js`,
  `lexxy_realtime/yrby-client.js` (pinned as `yrby-client` and
  `yrby-client/element`), and `lexxy_realtime/yjs.js` (pinned as `yjs`).
  `@rails/actioncable` resolves to Rails' `actioncable.esm.js`. Import-map
  apps re-run `bin/rails generate lexxy_realtime:install`, which adds the
  pins the app doesn't have yet.
- `@rails/actioncable` is a dependency of the npm package, because
  `<yrby-document>` loads it for its default consumer.
- **Breaking:** `lexxy_realtime:install` no longer generates
  `app/channels/document_channel.rb` or the Action Cable boilerplate. It
  adds the storage migration, plus import-map pins if the app uses import
  maps. An app upgrading from the generated
  channel can delete it. Move any access check from its `authorized?` into
  an `authorize_document` block.
- **Breaking:** collaborative fields are built on yrby-rails'
  `Y::Collaborative`. `record.collaborative_document(:body)` returns yrby's
  document handle. `find_or_create_collaborative_document` and the
  `collaborative_document_<name>` association are removed. Existing
  documents keep working, because both versions use the same rows.
- **Breaking:** the form helper's channel params are now `grant` and
  `name`, in place of `sgid` and `field`. Pages open during the upgrade need
  a reload to reconnect. `LexxyRealtime.sgid_purpose` and `SGID_PURPOSE`
  are replaced by `LexxyRealtime.grant_purpose`. The grant's purpose is
  separate from yrby-rails', so yrby-rails' `Y::DocumentChannel` rejects
  it.
- Requires yrby 0.8.1 or later, yrby-rails 0.7, and yrby-client 0.7.
- The `lexxy` gem dependency is capped below 2.0. The collaboration bundle
  uses the Lexical namespace that Lexxy re-exports, and a major release
  could change it. The cap keeps apps off a new major version until it's
  tested.

### Fixed

- Undo in a collaborative editor no longer corrupts the document. Lexxy's
  own history restored editor snapshots that never reached the shared
  document, so after one undo each keystroke copied whole lists or
  paragraphs into the document again (#33). Undo and redo now go through a
  Yjs UndoManager. They only revert this user's changes, and other users
  see the result. Changes made within 500ms form one undo step. Seeding a
  new document from an existing body can't be undone.
- Two peers typing into the same empty paragraph at once could duplicate
  text that had just arrived from a third peer. When the caret is on the
  paragraph next to plain text, the element now moves it into that text
  before inserting. A caret next to unmergeable or special text stays where
  it is.
- Remote changes that arrived in an unexpected order could delete
  characters, formatting, or NodeState, or show text twice. This happened
  when a peer received a merge before the text it merged into, when one user
  removed or undid a text node while another typed into it, and when a new
  text node was inserted at the start of an existing one. The element now
  keeps those characters, with the formatting and NodeState of the text
  they came from when that's known. Each remote change rebuilds the
  affected block's text nodes from the shared document. Neither fix changes
  the Yjs document format.
- An error while applying a remote update no longer leaves the editor out
  of sync without a trace. Yjs runs the apply inside `Y.applyUpdate`, and
  y-protocols catches and logs anything it throws. By then the document
  already holds the update, so the editor stayed behind the document for
  good, and a reconnect didn't fix it. The broken binding could also delete
  visible text on later edits. Now the element stops syncing in both
  directions, makes the editor read-only, and dispatches a bubbling
  `lexxy-realtime:desync` event. With a `<yrby-document>` it discards the
  session and binds a new one that loads the server's state, without
  seeding from the editor and with undo history cleared. Local edits the
  server hadn't acknowledged yet are lost. It rebuilds at most once every
  15 seconds, and a failure inside that window waits for it to end. When
  the element unbinds, the editor gets back the editable state it had
  before the failure. With a host-supplied document it only dispatches the
  event, and the host recreates the element to recover.
- When Lexxy builds a new Lexical editor without disconnecting its
  children, as it does when a Turbo morph changes its `connected`
  attribute, the element binds the new editor, so its edits sync.

## [0.7.1] - 2026-10-03

### Changed

- Supports Lexxy 1.0. The npm peer range is `^0.9.29 || ^1.0.0`, and the
  tests and demo run on Lexxy 1.0.0. The gem already allowed it.

### Fixed

- The generated channel's `authorized?` accepts the document key.
  yrby-rails 0.7 calls `authorized?(key)` when a client subscribes, so a
  channel generated by 0.7.0 raised `ArgumentError` on every subscription
  it allowed. Apps on yrby-rails 0.7 should change `def authorized?` in
  `app/channels/document_channel.rb` to `def authorized?(_key = nil)`.

## [0.7.0] - 2026-08-18

### Changed

- The import-map bundle uses the copy of lexical inside Lexxy and doesn't
  ship its own. A build-time shim points the bundle's bare `lexical`
  imports at Lexxy's documented `Lexical` re-export, so the page runs one
  copy of lexical, the editor's. The gem doesn't ship Lexxy or lexical
  builds anymore. The generator adds two pins: `@37signals/lexxy`, which
  points at the app's own Lexxy asset, and `lexxy-realtime`. It used to
  add three pins pointing at copies in the gem. To upgrade an import-map
  app, remove the `lexxy_realtime/lexical.js` and `lexxy_realtime/lexxy.js`
  pins and re-run the install generator, or add the two pins by hand.
  Apps that use a bundler don't need to change anything.

## [0.6.0] - 2026-08-14

### Added

- Remote cursors match Lexxy's design. The name label is a rounded pill in
  Lexxy's font, the caret is a 2px bar, and selections are soft rounded
  highlights, all in the peer's color. @lexical/yjs uses hardcoded inline
  styles (an Arial label on a square block of color) unless the editor's
  Lexical theme has a `collaboration` entry. The element registers one
  (`lexxy-collab-cursor`, `lexxy-collab-cursor__name`,
  `lexxy-collab-selection`, `lexxy-collab-selection__bg`) with a small
  stylesheet built on Lexxy's design tokens, so a customized Lexxy theme
  applies to the collaboration UI too. To change the look, style those
  classes, or define `theme.collaboration` on the editor yourself for full
  control. The peer color is available as `--lexical-cursor-color`. The
  rules also ship as a stylesheet for apps whose Content Security Policy
  blocks injected style tags: `import "lexxy-realtime/lexxy-realtime.css"`
  on npm, or the gem's `lexxy_realtime.css` asset. When that file is
  loaded, the element doesn't inject its own styles.
- End-to-end tests for real uploads. The test server has Active Storage
  (SQLite and the disk service, with tables created at boot). A browser
  test sends a PNG through Lexxy's upload pipeline: DirectUpload to the
  real direct-upload endpoint, then the attachment and its signed sgid
  arrive in the shared document. A live peer and a late joiner both render
  the image from the served blob URL, and no upload placeholder is left
  behind. The test runs with both Action Cable and AnyCable. The test
  bundle includes the real @rails/activestorage in place of the stub that
  disabled uploads.
- End-to-end tests for AnyCable. `npm run test:anycable` runs the headless
  durability suites, the full browser editor test, and a runtime AnyCable
  consumer check through a real anycable-go gateway and RPC server,
  including presence over AnyCable whispers. Full runs include it when
  anycable-go and Redis are installed, and CI has a job for it. The browser
  test uses the real `@anycable/web` client. The headless check uses the
  same Action Cable compatible consumer through `@anycable/core`, which
  `@anycable/web` re-exports. The README documents the server setup and
  both client options.

### Changed

- The README starts with a quick start covering the gem, generator, model,
  form, and the JavaScript for both import-map and bundler apps. A table of
  contents and the reference sections follow. The README now documents the
  import-map install. Before, it said a bundler was required even though
  the generator pins the gem's own import-map builds.

## [0.5.0] - 2026-08-12

### Changed

- `yrby-client` is a regular dependency. It used to be bundled into the
  npm package's dist. Apps now resolve one copy of the provider, shared
  with any direct use of yrby-client, and the package declares the version
  it needs as `^0.5.0`. The Rails gem's import-map asset still bundles
  everything and hasn't changed.

### Fixed

- The npm package ships real TypeScript declarations. `package.json`
  pointed `types` at `dist/lexxy-realtime.d.ts`, which the build never
  produced, so strict TypeScript projects failed with TS7016.
  `types/lexxy-realtime.d.ts` declares `Collaboration` and `setConsumer`
  and re-exports `YrbyProvider`'s types from yrby-client. The test suite
  compiles a strict TypeScript project against the declarations, including
  one that uses an `@anycable/web` consumer.
- The AnyCable example calls `createConsumer` from `@anycable/web`. The
  README and the `setConsumer` docs showed `createCable()`. Its native
  `Cable` has no `subscriptions`, so it failed as a consumer when an editor
  mounted. The Action Cable compatible `createConsumer()` is the supported
  form, and a compile-time check covers it.

## [0.4.0] - 2026-08-08

### Added

- The `lexxy-realtime` Rails gem, first release. It includes
  `has_collaborative_rich_text` (with `encrypted: true` through
  `Y::EncryptedDocument` and `ActionText::EncryptedRichText`),
  `collaborative_rich_textarea`, signed tokens scoped to a field, rendering
  to Action Text through `Y::Lexxy` on each change, and an install
  generator for the channel, tables, and import-map pins. Storage comes
  from `yrby-rails`.

- Import maps work without a bundler. The Rails gem ships builds you can
  pin: `lexxy_realtime/lexical.js`, `lexxy_realtime/lexxy.js`, and
  `lexxy_realtime/lexxy-realtime.js`. Each has a readable build with a
  sourcemap plus a `.min.js`, following the layout of Lexxy's gem assets.
  The install generator adds the pins when `config/importmap.rb` exists.
  `lexical` is the one module the Lexxy and lexxy-realtime bundles share,
  so both builds leave it external and it loads through its own pin. The
  `@37signals/lexxy` pin has to point at this gem's build, because Lexxy's
  own asset bundles a second copy of `lexical`. This is temporary until
  Lexxy ships builds that work with import maps.

- The element works with no configuration. If no consumer, doc, or
  provider is assigned, it creates a shared Action Cable consumer from the
  standard `action-cable-url` meta tag, or `/cable` if there isn't one. It
  then builds its own doc and provider and connects. `setConsumer(consumerOrFactory)`
  sets the default for the whole app, for transports such as
  `@anycable/web`. A consumer assigned directly on an element takes
  precedence. The element also exposes `doc`, like `provider` and
  `awareness`.
- When a document is opened for the first time on a record that already
  has a body, the element copies the editor's server-rendered value into
  the collaborative document. It used to clear it to an empty paragraph.
  Existing documents load as before. If two people open a new document at
  the same moment, both can copy the body in. Lexical's
  CollaborationPlugin has the same race, and its docs describe client-side
  bootstrapping as meant for development only. We accept it because it
  only affects a document's first open, the duplicate is visible, and it's
  easy to delete.
- Attachments work with collaboration. An attachment one person adds
  appears for every peer and for anyone who joins later. Uploads sync live,
  with the progress bar and error state, and a finished upload doesn't
  leave a stuck placeholder. Server-generated previews such as PDFs show
  their placeholder while they wait to be ready. Remote placeholders no
  longer show a "NaN undefined" size caption, and binding the element again
  keeps the excluded properties. The browser tests cover these cases.

### Changed

- Removed the runtime constructor shims. Lexxy now constructs attachment
  nodes without arguments (basecamp/lexxy#1196), so the no-argument
  constructor probe, the subclass swap, the constructor lookup patch, and
  the mutation-listener re-keying are gone. Two pieces remain. The element
  passes a list of properties that can't sync (`file`, `editor`,
  `previewSrc`, `uploadUrl`, `blobUrlTemplate`), keyed by node type, to
  `createBinding`. The `CollabElementNode.splice` patch handles a separate
  `@lexical/yjs` problem with an empty tree at startup.
- The minimum `@37signals/lexxy` peer version is `^0.9.29`, the first
  release with the constructor fix. Earlier versions throw when the binding
  is created. CI installs Lexxy from the registry and doesn't build it from
  the merge commit anymore.

## [0.3.0] - 2026-07-13

### Fixed

- The element-managed setup works. When the host supplied only a cable
  `consumer` and attributes, the element built its own `YrbyProvider`,
  which doesn't connect on its own, and nothing connected it. The editor
  never synced. The element now connects a provider it creates and still
  leaves providers from the host alone.

### Added

- TypeScript declarations for the `<lexxy-collaboration>` element (both
  setups and all attributes), the provider methods the element needs, and
  the `YrbyProvider` re-export.
- CI runs the browser tests in real Chrome. They're the only tests that
  run the real editor binding and the runtime shims. Before this, CI ran
  only the build and the headless protocol tests.
- README sections on saving to Action Text with server-side rendering
  (`Y::Lexxy`) and on Turbo Drive, plus a GIF of typing and a GIF of live
  presence, both recorded in real browsers.

### Changed

- The README starts with the provider contract. lexxy-realtime works with
  any Yjs provider and uses yrby only when you don't pass one. If you bring
  your own provider, you don't need yrby-client.
- Bundles `yrby-client` 0.5.0 from the registry, which adds
  `provider.whenSynced`. The vendored tarball is gone.
- `package.json` declares `sideEffects` so tree shaking keeps the custom
  element registration. It also ships `types` and adds keywords.

## [0.2.1] - 2026-06-29

### Fixed

- Bundles `yrby-client@0.4.2`. Its `ActionCableProvider` tears down with
  `subscription.unsubscribe()`, which works everywhere.
  `consumer.subscriptions.remove()` doesn't exist on `@anycable/web`, so
  disconnecting threw there. The cable consumer types are also looser, so
  an `@anycable/web` consumer can be assigned without an adapter or casts.

## [0.2.0] - 2026-06-29

### Changed

- **BREAKING:** the element reads the document id from its own `doc-id`
  attribute. It used to read the global HTML `id` attribute. Use
  `collab.setAttribute("doc-id", ...)` in place of
  `collab.setAttribute("id", ...)`. The default is still `"main"`.
- Internal: removed `async` from `#init`, which never awaited anything,
  removed unused rolldown externals (`@y-rb/actioncable`, `@anycable/web`),
  and documented that the shared `CollabElementNode.splice` patch affects
  the whole page.

### Fixed

- Teardown clears the post-sync bootstrap poll, a 50 ms interval. It used
  to clear only after a successful first sync. If the element was removed
  before syncing, or the provider never synced, the interval kept running
  forever, since `unref()` does nothing in a browser. A new lifecycle test
  (`test/browser/lifecycle.mjs`) covers it.
- Moving the element in the DOM fires disconnect and then reconnect, and
  that used to close a provider the host passed in.
  `<lexxy-collaboration>` now disconnects only a provider it created
  itself. A provider from the host stays connected across moves and is
  reused when the element reconnects. This also stops the element from
  disconnecting a host's provider twice.
- Mounting `<lexxy-collaboration>` outside a `<lexxy-editor>` logs a clear
  error. It used to throw a `Cannot read properties of null` TypeError.
- A malformed `channel-params` attribute logs a clear error and falls back
  to `{}`. It used to throw an uncaught `SyntaxError`.

## [0.1.3] - 2026-06-29

### Changed

- Internal: renamed the `__yrbLiteSplicePatched` prototype guard to
  `__yrbySplicePatched`. Behavior is unchanged.

## [0.1.2] - 2026-06-26

### Changed

- Remote carets and selections stay visible while a collaborator's editor
  is blurred. `@lexical/yjs` shows a peer only while their `focusing` flag
  is true. We toggled it on focus and blur the way `@lexical/react` does,
  so it went false on every blur. A collaborator disappeared as soon as
  they clicked another window or tab. With two windows on one machine, the
  focused window never saw the other one. `focusing` now stays true for
  the whole session. A peer who leaves is removed by the provider's
  presence cleanup on `pagehide`, or by the awareness timeout if they drop
  off suddenly.

## [0.1.1] - 2026-06-26

### Fixed

- Remote cursors and selections update live. The code that re-rendered
  cursors listened on a separate `Awareness` instance, but `YrbyProvider`
  always creates and uses its own. When a peer only moved the caret or
  changed the selection without editing text, nothing re-rendered, so a
  remote caret seemed to move only when that peer typed. The element now
  listens on the provider's `Awareness` and exposes it as the element's
  `awareness` property. This was the cause of the intermittent cursor
  behavior.

## [0.1.0] - 2026-06-25

First release that installs without patching the app's dependencies.
Before this, the app had to apply two `patch-package` patches to
`@lexical/yjs` and `@37signals/lexxy`. The element now applies both at
runtime when it binds, so the packages on disk are never modified.

### Added

- Runtime shim for `@37signals/lexxy`. Its Action Text attachment node
  constructors threw when `@lexical/yjs`'s `createBinding` built every
  node with no arguments to read its defaults. While binding, the shim
  swaps those classes for subclasses that keep the same identity and
  default the missing argument to `{}`, then swaps them back. This
  replaces the app-side `@37signals/lexxy` patch.
- Runtime shim for `@lexical/yjs`. `CollabElementNode.splice` does nothing
  when there's nothing to remove, where it used to throw, so the binding
  can fill an empty collaboration tree at startup. This replaces the
  app-side `@lexical/yjs` patch.
- `LICENSE` (MIT), `CHANGELOG.md`, `CONTRIBUTING.md`.
- GitHub Actions CI with two jobs. One builds and bundles without network
  services. The other runs the convergence, durability, and loss suites
  headless against the real `yrby` Rails server.

### Removed

- The `patches/` directory, the `postinstall: patch-package` script, and
  the `patch-package` dev dependency. Installing the peers is enough.

### Changed

- Uses a single lockfile, `bun.lock`. Removed `package-lock.json`.

[Unreleased]: https://github.com/jpcamara/lexxy-realtime/compare/v0.7.1...HEAD
[0.7.1]: https://github.com/jpcamara/lexxy-realtime/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/jpcamara/lexxy-realtime/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/jpcamara/lexxy-realtime/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/jpcamara/lexxy-realtime/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/jpcamara/lexxy-realtime/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/jpcamara/lexxy-realtime/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/jpcamara/lexxy-realtime/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.3...v0.2.0
[0.1.3]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/jpcamara/lexxy-realtime/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/jpcamara/lexxy-realtime/releases/tag/v0.1.0
