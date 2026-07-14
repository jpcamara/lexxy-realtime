# lexxy-realtime

Real-time collaborative editing for [Lexxy](https://github.com/basecamp/lexxy)
over [Yjs](https://github.com/yjs/yjs). Drop a `<lexxy-collaboration>` element
inside your `<lexxy-editor>` and people editing the same document see each other's
**text, cursors, and selections** live.

![Two people typing on separate lines of the same document, each keystroke synced live, seen from a third browser with labeled carets](docs/images/collab.gif)

Each side sees the other's cursor and selection:

![Two browsers side by side, each showing the other's selection and caret live](docs/images/presence.gif)

It works with **any Yjs provider** (`y-websocket`, Hocuspocus, y-webrtc, ...).
Supply your own provider and that's what the element uses. Supply none and it
assumes [`yrby`](https://github.com/jpcamara/yrby), building a Rails-native
Action Cable / AnyCable provider from your cable consumer — the yrby client is
bundled, so that path needs nothing else installed. lexxy-realtime is tested
extensively against the yrby stack; other providers plug into the small
contract documented below.

## Requirements

- A **Lexxy editor** on the page (`@37signals/lexxy`) — see
  [Lexxy's docs](https://basecamp.github.io/lexxy).
- A **Yjs provider** and its backend. With `yrby` that's a Rails channel (see
  [Server](#server-yrby)); with another provider it's whatever that provider
  connects to.
- A **JS bundler** (jsbundling-rails / esbuild, or any app that bundles its
  JavaScript). Collaboration relies on one shared copy of `lexical` and `yjs`
  across Lexxy and lexxy-realtime; a bundler dedupes them for you (see
  [a single copy of lexical & yjs](#a-single-copy-of-lexical--yjs)).

## Install

```bash
npm install lexxy-realtime @lexical/yjs yjs y-protocols
```

You also need a Lexxy editor and `lexical` (`^0.44`), which your app already has,
**plus a provider**: a cable consumer (`@rails/actioncable` or `@anycable/web`)
for the built-in yrby path, or the Yjs provider of your choice (e.g.
`y-websocket`) — in which case no yrby anything is involved.

## Client

`lexxy-realtime` registers a `<lexxy-collaboration>` custom element. Create a Yjs
doc and a provider, mount the element inside your `<lexxy-editor>`, and go. The
element is the same regardless of provider — only how you build the provider
differs.

### Element-managed (simplest — assumes yrby)

When you don't hand the element a provider, it assumes yrby. Give it a cable
consumer and attributes; it builds the `Y.Doc` and `YrbyProvider` itself,
connects, and disconnects on removal:

```js
import "@37signals/lexxy";
import "lexxy-realtime"; // registers <lexxy-collaboration>
import { createConsumer } from "@rails/actioncable"; // or "@anycable/web"

const editor = document.querySelector("lexxy-editor");

function startCollaborating() {
  const collab = document.createElement("lexxy-collaboration");
  collab.setAttribute("doc-id", documentId);
  collab.setAttribute("name", currentUserName);
  collab.setAttribute("channel-name", "DocumentChannel");
  collab.setAttribute("channel-params", JSON.stringify({ id: documentId }));
  collab.consumer = createConsumer();
  editor.appendChild(collab);
}

if (editor.editor) startCollaborating();
else editor.addEventListener("lexxy:initialize", startCollaborating, { once: true });
```

### Bring your own provider

Same element, any Yjs provider — no yrby involved. For example, a Node
`y-websocket` server:

```js
import "@37signals/lexxy";
import "lexxy-realtime"; // registers <lexxy-collaboration>
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

const editor = document.querySelector("lexxy-editor");

function startCollaborating() {
  const doc = new Y.Doc();
  const provider = new WebsocketProvider("wss://your-server", documentId, doc);

  const collab = document.createElement("lexxy-collaboration");
  collab.setAttribute("name", currentUserName);
  collab.doc = doc;
  collab.provider = provider;
  editor.appendChild(collab);
  // y-websocket connects on construction — no connect() call needed.
}

if (editor.editor) startCollaborating();
else editor.addEventListener("lexxy:initialize", startCollaborating, { once: true });
```

**What the element needs from a provider.** Any provider with the standard Yjs
surface works:

- `provider.awareness` — a [`y-protocols`](https://github.com/yjs/y-protocols)
  `Awareness` instance (used for remote cursors/selections).
- `provider.synced` — `true` once caught up with the server (used to seed a
  brand-new, empty document the first time).
- `provider.disconnect()` — called when the element is removed.

You start the connection however that provider expects (`provider.connect()` for
`YrbyProvider`; `y-websocket` connects on construction). `y-websocket`,
Hocuspocus, and y-webrtc all satisfy this.

### yrby, host-managed

Manage the yrby provider yourself when you need its lifecycle — status UI,
`whenSynced`, sharing one doc across components:

```js
import "@37signals/lexxy";                          // registers <lexxy-editor>
import { YrbyProvider } from "lexxy-realtime";   // registers <lexxy-collaboration>
import * as Y from "yjs";
import { createConsumer } from "@rails/actioncable"; // or "@anycable/web"

const editor = document.querySelector("lexxy-editor");

function startCollaborating() {
  const doc = new Y.Doc();
  const consumer = createConsumer();
  const provider = new YrbyProvider(doc, consumer, "DocumentChannel", { id: documentId });

  const collab = document.createElement("lexxy-collaboration");
  collab.setAttribute("doc-id", documentId);       // Yjs document id (defaults to "main")
  collab.setAttribute("name", currentUserName);    // shown on your cursor to others
  collab.setAttribute("color", "#3b82f6");          // optional cursor color
  collab.doc = doc;
  collab.provider = provider;
  editor.appendChild(collab);

  provider.connect(); // YrbyProvider does not auto-connect
}

// Lexxy sets up its editor asynchronously; start once it's ready.
if (editor.editor) {
  startCollaborating();
} else {
  editor.addEventListener("lexxy:initialize", startCollaborating, { once: true });
}
```

## Server (yrby)

Collaboration needs a server that records and relays Yjs updates. On the yrby
path that's one Action Cable channel including the
[`yrby-actioncable`](https://rubygems.org/gems/yrby-actioncable) concern:

```ruby
# Gemfile: gem "yrby-actioncable"

class DocumentChannel < ApplicationCable::Channel
  include Y::ActionCable::Sync

  # Rebuild a document's state from your store (return nil for a new doc):
  on_load   { |id| Document.find_by(id:)&.yjs_state }
  # Persist each CRDT delta before it's acked/relayed:
  on_change { |id, update| Document.record!(id, update) }

  def subscribed = sync_subscribed(params[:id])
  def receive(data) = sync_receive(data, params[:id])
end
```

See [`yrby`](https://github.com/jpcamara/yrby) for durable-store options
and the full protocol (reliable delivery, causal-gap handling). Using a different
provider instead? Point it at that provider's own backend (e.g. a `y-websocket`
Node server) — nothing on the client above changes except how you build the
provider.

## Provider API (yrby)

`YrbyProvider` is a thin alias for `yrby-client`'s `ActionCableProvider`:

```js
provider.connect();        // open the subscription and start syncing
provider.disconnect();     // pause; queued edits are kept
provider.destroy();        // tear down (also clears presence)

provider.synced;           // caught up with the server?
await provider.whenSynced; // resolves on the first catch-up (immediately if already synced)
provider.status;           // "connecting" | "connected" | "synced" | "disconnected"
provider.onStatusChange(({ status }) => render(status)); // returns an unsubscribe fn
provider.awareness;        // the Yjs Awareness instance (presence/cursors)
provider.hasPending;       // unacknowledged local edits in flight?
```

It owns presence — it creates its own `Awareness`. Read `provider.awareness` if
you need it (e.g. to show who's here); don't pass one in.

## Persisting to ActionText

The collaborative document lives in your durable store as CRDT updates.
When the rest of your app needs it as rich text — display, search, mailers
— render it server-side with the `yrby` gem's `Y::Lexxy`, which reproduces
Lexxy's own HTML byte for byte:

```ruby
ydoc = Y::Doc.new
ydoc.apply_update(store.replay(document_id))
html = Y::Lexxy.new(ydoc).to_html("root")
note.content = html # a has_rich_text attribute
```

No browser is involved and no client-submitted HTML is trusted. The
[yrby demo's `NoteMaterializer`](https://github.com/jpcamara/yrby/blob/main/examples/actioncable-demo/app/lib/note_materializer.rb)
shows the full pattern, refreshed on read with a store-version staleness
check.

## Turbo

Two things matter under Turbo Drive:

- Run your wiring on `turbo:load` (or make the editor page a Turbo frame
  boundary), so a fresh `<lexxy-collaboration>` mounts per visit. The
  element tears down cleanly on removal — unmount before first sync,
  DOM moves, and remounts are all covered by the test suite.
- Don't cache a live editor: mark the editor container
  `data-turbo-temporary` (or `data-turbo-cache="false"` on the page) so
  Turbo's snapshot doesn't restore a stale editor DOM next to a fresh
  binding.

## A single copy of `lexical` & `yjs`

Lexxy and lexxy-realtime both leave `lexical` (and lexxy-realtime leaves `yjs` /
`@lexical/yjs`) as external peers, so your bundler can resolve them to one shared
instance. They **must** be a single copy: Lexical keys node behavior to class
identity and Yjs to constructor identity, so two copies break syncing. With
matching versions (`lexical ^0.44`, `yjs ^13.6`) bundlers dedupe automatically;
if yours pulls duplicates, dedupe them (e.g. esbuild
`--alias:yjs=./node_modules/yjs`).

## Try it

The [`yrby` Action Cable demo](https://github.com/jpcamara/yrby/tree/main/examples/actioncable-demo)
runs a Lexxy editor on lexxy-realtime end to end (there's a one-command Docker
setup). Open `/docs/demo/lexxy` in two windows and type.

## Notes

lexxy-realtime applies two small compatibility shims to `@lexical/yjs` and
`@37signals/lexxy` **at runtime, from inside its own bind path** — no
`patch-package`, no vendored patches, install the peers and go. They're temporary
pending upstream fixes; the details and tracking PRs are in
[`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

MIT
