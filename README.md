# lexxy-realtime

Real-time collaborative editing for [Lexxy](https://github.com/basecamp/lexxy)
over [Yjs](https://github.com/yjs/yjs). Drop a `<lexxy-collaboration>` element
inside your `<lexxy-editor>` and people editing the same document see each other's
**text, cursors, and selections** live.

![Two people typing on separate lines of the same document, each keystroke synced live, seen from a third browser with labeled carets](docs/images/collab.gif)

Each side sees the other's cursor and selection:

![Two browsers side by side, each showing the other's selection and caret live](docs/images/presence.gif)

## Rails

Rails apps install both the `lexxy-realtime` gem and npm package, then
run the install generator. Both ship from this repo under the same name.

```bash
# Gemfile
gem "lexxy-realtime"
```
```bash
bin/rails generate lexxy_realtime:install
bin/rails db:migrate
npm install lexxy-realtime   # or yarn/bun/pnpm
```
```ruby
class Post < ApplicationRecord
  has_collaborative_rich_text :body
end
```
```erb
<%= form.collaborative_rich_textarea :body %>
```
```js
// app/javascript/application.js
import "lexxy-realtime"
```

Implement `authorized?` in the generated channel, then open the page in
two browsers and edit together. A working demo of this setup lives in
[`demo/`](demo/).

### Generated files

#### Database tables

The migration creates `y_documents` and `y_document_updates`. Their
models, `Y::Document` and `Y::DocumentUpdate`, are provided by
`yrby-rails`.

A document belongs to a model through `record` and `name`, much like
`ActionText::RichText`. It also has a unique transport `key` and stores
the compacted CRDT state. Destroying the model removes its document and
update rows.

Each incoming delta is appended to `y_document_updates`. At the
compaction threshold, yrby merges those updates into `y_documents.state`
and removes the old rows. The channel renders the document into
`post.body` after each change. Apps using yrby directly can provide
another store through `on_load` and `on_change`.

#### Document channel

`DocumentChannel` runs Yjs sync over Action Cable or AnyCable and stores
updates in `Y::Document`. It saves each update before acknowledging or
broadcasting it, so the stored log can rebuild the document.

The form helper gives the client a signed GlobalID scoped to one record
and field. Use `authorized?` for your application's user access check.

`has_collaborative_rich_text :body, encrypted: true` stores the rendered
body with `ActionText::EncryptedRichText`. The CRDT state and updates use
yrby's encrypted document models. Active Record encryption handles both.

### How it stays in sync with Action Text

`has_collaborative_rich_text :body` is a regular `has_rich_text` attribute
underneath. After recording each change, the channel renders the
collaborative document to HTML **on the server** and saves it through
the normal Action Text writer. yrby's `Y::Lexxy` produces byte-identical
markup to the editor's own serializer, in Ruby. So `post.body` tracks
the collaborative state, and everything downstream (rendering, search,
mailers) is plain Action Text.

Each update is rendered synchronously, so `post.body` is current when
the channel call returns. Once an update is stored, closing the browser
does not affect it. If rendering fails, the next successful update
renders the full document again.

When collaboration starts for a record with existing Action Text
content, the client seeds the Yjs document from the editor's rendered
value. Clearing the editor later saves an empty body as expected.

There is a race during the first open: two clients can seed the document
before either finishes syncing, which duplicates the initial content.
Lexical's `CollaborationPlugin` behaves the same way. The duplicate is
visible and can be deleted.

### Cursor identity

The helper uses the first available `current_user` value from `name`,
`username`, or `handle`. It falls back to `"Anonymous"` and derives a
stable cursor color from the result. Customize either globally or per render:

```ruby
LexxyRealtime.identity = ->(view) { { name: view.current_user.handle, color: nil } }
```
```erb
<%= form.collaborative_rich_textarea :body, name: "Reviewer", color: "#0ea5e9" %>
```

Cursor names and colors are sent as presence metadata. The channel uses
the signed GlobalID to find the record and `authorized?` to check
access.

## JavaScript client

`<lexxy-collaboration>` works with providers that expose awareness and a
boolean synced state, including `y-websocket` and Hocuspocus. In a Rails app, the element
builds an Action Cable consumer, a `Y.Doc`, and a
[`YrbyProvider`](https://github.com/jpcamara/yrby) from its attributes.
You can instead supply a consumer or your own document and provider. The
yrby stack has the most test coverage; other providers need the contract
below.

### Requirements

Before installing, make sure the page already loads Lexxy
(`@37signals/lexxy`, see [Lexxy's docs](https://basecamp.github.io/lexxy))
and the app uses a JavaScript bundler. Collaboration relies on one shared
copy of `lexical` and `yjs` across Lexxy and lexxy-realtime, and a bundler
dedupes them for you (see
[a single copy of lexical & yjs](#a-single-copy-of-lexical--yjs)). You
also need a backend for whichever provider you choose; see
[Server](#server-yrby) for the yrby setup. The Rails gem additionally
requires Ruby 3.4+ and Rails 8.0.2+.

### Install

```bash
npm install lexxy-realtime @lexical/yjs yjs y-protocols
```

You also need a Lexxy editor and `lexical` (`^0.44`), which your app already has.
The element-managed Action Cable client is bundled. Install `@anycable/web`
when configuring AnyCable, or the client package for your own Yjs provider
(for example, `y-websocket`).

### Wiring the element

`lexxy-realtime` registers the `<lexxy-collaboration>` custom element. Mount it
inside your `<lexxy-editor>` using one of these setups.

### Default yrby path

#### Let the element create the provider

Render (or create) the element with attributes inside the editor and import the
package once. The element waits for the editor, creates a shared
Action Cable consumer (from the standard `action-cable-url` meta tag, falling
back to `/cable`), builds the doc and provider, connects, and disconnects on
removal:

```html
<lexxy-editor>
  <lexxy-collaboration doc-id="doc-42" name="Ada"
    channel-name="SyncChannel" channel-params='{"id":"doc-42"}'>
  </lexxy-collaboration>
</lexxy-editor>
```

```js
import "@37signals/lexxy";
import "lexxy-realtime"; // registers <lexxy-collaboration>
```

To use a specific transport (for example `@anycable/web`), set the app-wide
consumer once at boot; every element without one of its own uses it:

```js
import { createCable } from "@anycable/web";
import { setConsumer } from "lexxy-realtime";

setConsumer(() => createCable());
```

Assigning `collab.consumer` on an element before it initializes still wins,
per element.

#### Create the provider yourself

Create and manage the yrby provider yourself when you need its lifecycle for
status UI, `whenSynced`, or sharing one document across components:

```js
import "@37signals/lexxy";                          // registers <lexxy-editor>
import { YrbyProvider } from "lexxy-realtime";   // registers <lexxy-collaboration>
import * as Y from "yjs";
import { createConsumer } from "@rails/actioncable"; // or "@anycable/web"

const doc = new Y.Doc();
const consumer = createConsumer();
const provider = new YrbyProvider(doc, consumer, "SyncChannel", { id: documentId });

const collab = document.createElement("lexxy-collaboration");
collab.setAttribute("doc-id", documentId);    // Yjs document id (defaults to "main")
collab.setAttribute("name", currentUserName); // shown on your cursor to others
collab.setAttribute("color", "#3b82f6");      // optional cursor color
collab.doc = doc;
collab.provider = provider;
document.querySelector("lexxy-editor").appendChild(collab);

provider.connect(); // YrbyProvider does not auto-connect
```

The element waits for the editor to initialize on its own, so you can
append it as soon as the `<lexxy-editor>` is in the DOM.

### Bring your own Yjs provider

Create the document and provider, then assign both to the element. This example
uses a Node `y-websocket` server:

```js
import "@37signals/lexxy";
import "lexxy-realtime"; // registers <lexxy-collaboration>
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

const doc = new Y.Doc();
const provider = new WebsocketProvider("wss://your-server", documentId, doc);

const collab = document.createElement("lexxy-collaboration");
collab.setAttribute("name", currentUserName);
collab.doc = doc;
collab.provider = provider;
document.querySelector("lexxy-editor").appendChild(collab);
// y-websocket connects when it is created.
```

Point the provider at its own backend. Nothing else in the client wiring changes.

#### Provider contract

Any provider with the standard Yjs surface works:

- `provider.awareness`: a [`y-protocols`](https://github.com/yjs/y-protocols)
  `Awareness` instance (used for remote cursors/selections).
- `provider.synced`: `true` once caught up with the server (used to seed a
  brand-new, empty document the first time).
- `provider.disconnect()` or `destroy()`: when you assign a provider, you
  own its connection and must disconnect it yourself. The element
  disconnects only providers it creates.

You start the connection however that provider expects (`provider.connect()` for
`YrbyProvider`; `y-websocket` connects on construction). `y-websocket` and
Hocuspocus satisfy this contract; other providers may need an adapter.

## Server (yrby)

Collaboration needs a server that records and relays Yjs updates. The
Rails installer generates the channel described above. For a manual yrby
setup, include the [`yrby-rails`](https://rubygems.org/gems/yrby-rails)
concern:

```ruby
# Gemfile: gem "yrby-rails"

class SyncChannel < ApplicationCable::Channel
  include Y::ActionCable

  # Rebuild a document from storage (nil for a brand-new document):
  on_load   { |key| Y::Document.load_state(key) }
  # Record each CRDT delta before it's acked and relayed:
  on_change { |key, update| Y::Document.append(key, update) }

  def subscribed = sync_subscribed(params[:id])
  def receive(data) = sync_receive(data, params[:id])
end
```

`Y::Document` ships in yrby-rails and is the storage the generators use.
The hooks accept any store that can return and append update bytes. See
[`yrby`](https://github.com/jpcamara/yrby) for the full protocol
(reliable delivery, causal-gap handling).

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

`YrbyProvider` creates and owns its `Awareness` instance; the element
uses and exposes `provider.awareness`. Read it for presence data such as
the current collaborators.

## Attachments

File and image uploads work under collaboration. The uploader's
browser does the ActiveStorage direct upload as usual; the attachment node
syncs through Yjs, and peers render the finished image from its URL. While
an upload is in flight, peers see a placeholder with the filename and a
live progress bar. The raw `File`, preview URL, and upload settings stay in the uploader's
browser. Other collaborators receive the attachment state without
starting another upload.

## Persisting to ActionText (manual)

The Rails gem handles this automatically. The following example is for
apps that wire yrby directly.

The collaborative document lives in your durable store as CRDT updates.
When the rest of your app needs it as rich text (display, search,
mailers), render it server-side with the `yrby` gem's `Y::Lexxy`, which reproduces
Lexxy's own HTML byte for byte:

```ruby
ydoc = Y::Doc.new
ydoc.apply_update(Y::Document.load_state(key))
html = Y::Lexxy.new(ydoc).to_html
note.content = html # a has_rich_text attribute
```

The
[yrby demo's `NoteMaterializer`](https://github.com/jpcamara/yrby/blob/main/examples/actioncable-demo/app/lib/note_materializer.rb)
shows the same server-side rendering in a store-agnostic form.

## Turbo

Two things matter under Turbo Drive:

- Run your wiring on `turbo:load` (or make the editor page a Turbo frame
  boundary), so a fresh `<lexxy-collaboration>` mounts per visit. The
  test suite covers removal before the first sync, DOM moves, and
  remounts.
- Don't cache a live editor: mark the editor container
  `data-turbo-temporary` so Turbo's snapshot doesn't restore a stale
  editor DOM next to a fresh binding. To disable caching for the whole
  page, use `<meta name="turbo-cache-control" content="no-cache">`.

## A single copy of `lexical` & `yjs`

Lexxy and lexxy-realtime both leave `lexical` (and lexxy-realtime leaves `yjs` /
`@lexical/yjs`) as external peers, so your bundler can resolve them to one shared
instance. Both libraries must resolve to one installed copy. Lexical depends on
class identity, and Yjs depends on constructor identity; duplicate copies
break syncing. Bundlers normally deduplicate matching versions
(`lexical ^0.44`, `yjs ^13.6`). Configure an alias if yours does not
(e.g. esbuild `--alias:yjs=./node_modules/yjs`).

## Try it

The [`yrby` Action Cable demo](https://github.com/jpcamara/yrby/tree/main/examples/actioncable-demo)
runs a Lexxy editor on lexxy-realtime end to end (there's a one-command Docker
setup). Open `/docs/demo/lexxy` in two windows and type.

## Notes

lexxy-realtime applies a temporary `@lexical/yjs` compatibility patch
during binding. The patch lives in the package code; see
[`CONTRIBUTING.md`](CONTRIBUTING.md) for details and upstream status.
Lexxy 0.9.29 is the minimum version: it ships the no-arg construction
fix (basecamp/lexxy#1196) this package relies on, and the peer
dependency enforces the floor.

## License

MIT
