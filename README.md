# lexxy-realtime

Real-time collaborative editing for [Lexxy](https://github.com/basecamp/lexxy)
over [Yjs](https://github.com/yjs/yjs). Drop a `<lexxy-collaboration>` element
inside your `<lexxy-editor>` and people editing the same document see each other's
**text, cursors, and selections** live.

It works with **any Yjs provider**. [`yrby`](https://github.com/jpcamara/yrby)
is the recommended one — a reliable, Rails-native provider over Action Cable /
AnyCable with ack-tracked delivery (an acknowledged edit isn't silently lost on a
flaky connection, and a reconnecting client catches up from the server). But you
can just as well point it at a Node `y-websocket` server, Hocuspocus, y-webrtc,
and so on.

> Pre-1.0, and tracks pre-1.0 peers (`@37signals/lexxy` `^0.9`, `lexical` /
> `@lexical/yjs` `^0.44`). See [`CHANGELOG.md`](CHANGELOG.md).

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
**plus a provider**: for `yrby`, a cable consumer (`@rails/actioncable` or
`@anycable/web`); otherwise the provider of your choice (e.g. `y-websocket`).

## Client

`lexxy-realtime` registers a `<lexxy-collaboration>` custom element. Create a Yjs
doc and a provider, mount the element inside your `<lexxy-editor>`, and go. The
element is the same regardless of provider — only how you build the provider
differs.

### With yrby (recommended for Rails)

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

### With any other Yjs provider

Same element — bring your own provider. For example, a Node `y-websocket` server:

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

## Server (yrby)

The recommended path. Collaboration needs a server that records and relays Yjs
updates; with `yrby` that's one Action Cable channel including the
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
provider.status;           // "connecting" | "connected" | "synced" | "disconnected"
provider.onStatusChange(({ status }) => render(status)); // returns an unsubscribe fn
provider.awareness;        // the Yjs Awareness instance (presence/cursors)
```

It owns presence — it creates its own `Awareness`. Read `provider.awareness` if
you need it (e.g. to show who's here); don't pass one in.

## Attachments

File and image uploads work under collaboration (v0.3.1+). The uploader's
browser does the ActiveStorage direct upload as usual; the attachment node
syncs through Yjs, and peers render the finished image from its URL. While
an upload is in flight, peers see a placeholder with the filename and a
live progress bar. Nothing client-local crosses the wire: the `File`
object, preview object-URLs, and upload configuration stay on the
uploader's machine, and a peer never starts a duplicate upload.

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
