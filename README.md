# lexxy-realtime

Real-time collaborative editing for [Lexxy](https://github.com/basecamp/lexxy),
the modern rich text editor for Rails. Drop a `<lexxy-collaboration>` element
inside your `<lexxy-editor>` and everyone on the same document sees each
other's **text, cursors, and selections** live.

![Two people typing on separate lines of the same document, each keystroke synced live, seen from a third browser with labeled carets](docs/images/collab.gif)

Each side sees the other's cursor and selection:

![Two browsers side by side, each showing the other's selection and caret live](docs/images/presence.gif)

Under the hood: Yjs CRDTs synced over Action Cable or AnyCable through
[yrby](https://github.com/jpcamara/yrby), every update stored durably before
it is acknowledged, and the document rendered back into Action Text on the
server. `post.body` stays a normal rich text attribute that the rest of your
app (rendering, search, mailers) reads as usual.

## Quick start

Add the gem and run the installer:

```bash
# Gemfile
gem "lexxy-realtime"
```

```bash
bin/rails generate lexxy_realtime:install
bin/rails db:migrate
```

The generator creates the sync channel and the document tables, and adds
import-map pins when the app uses import maps.

Make a rich text attribute collaborative:

```ruby
class Post < ApplicationRecord
  has_collaborative_rich_text :body
end
```

Render the collaborative editor in your form:

```erb
<%= form.collaborative_rich_textarea :body %>
```

Load the JavaScript. **With import maps** (propshaft + importmap-rails),
the generator already added the pins, and the bundle shares the lexical
copy embedded in Lexxy's own asset; just import it:

```js
// app/javascript/application.js
import "@37signals/lexxy"
import "lexxy-realtime"
```

**With a JavaScript bundler** (esbuild, webpack, bun), install the npm
package and use the same imports. npm and bun install its peers
(`lexical`, `yjs`, and friends) automatically; yarn only warns, so add
`@lexical/yjs yjs y-protocols` yourself there:

```bash
npm install lexxy-realtime
```

Finally, authorize access: implement `authorized?` in the generated channel
(everyone is denied until you do). Open the page in two browsers and type.

## Try it

A working app using this exact setup lives in [`demo/`](demo/): run
`bin/setup`, create a post, and open its edit page in two windows.

## Contents

- [Quick start](#quick-start)
- [Try it](#try-it)
- [How it works](#how-it-works)
- [The Rails side](#the-rails-side)
  - [Database tables](#database-tables)
  - [The document channel](#the-document-channel)
  - [Encrypted storage](#encrypted-storage)
  - [How it stays in sync with Action Text](#how-it-stays-in-sync-with-action-text)
  - [Cursor identity](#cursor-identity)
- [The JavaScript client](#the-javascript-client)
  - [Install](#install)
  - [Let the element create the provider](#let-the-element-create-the-provider)
  - [Create the provider yourself](#create-the-provider-yourself)
  - [A single copy of lexical and yjs](#a-single-copy-of-lexical-and-yjs)
- [Providers](#providers)
  - [The yrby provider API](#the-yrby-provider-api)
  - [Bring your own Yjs provider](#bring-your-own-yjs-provider)
  - [Provider contract](#provider-contract)
  - [Manual server setup (yrby without the gem)](#manual-server-setup-yrby-without-the-gem)
  - [Manual Action Text rendering](#manual-action-text-rendering)
- [AnyCable](#anycable)
- [Attachments](#attachments)
- [Turbo](#turbo)
- [Requirements](#requirements)

## How it works

The `<lexxy-collaboration>` element waits for its editor, builds an Action
Cable consumer, a `Y.Doc`, and a yrby provider from its attributes, and binds
the editor's Lexical instance to the shared document. Every edit ships as a
CRDT update; the channel records it durably before acknowledging or
broadcasting, so the stored log can always rebuild the document. After each
change the server renders the document to HTML with byte-identical output to
the editor's own serializer and saves it through the normal Action Text
writer.

None of it is coupled to yrby: the element works with any Yjs provider that
exposes awareness and a synced flag (`y-websocket`, Hocuspocus). yrby is the
default and has the most test coverage.

## The Rails side

What `bin/rails generate lexxy_realtime:install` sets up, and how the gem
keeps Action Text in sync with the collaborative document.

### Database tables

The migration creates `y_documents` and `y_document_updates`. Their models,
`Y::Document` and `Y::DocumentUpdate`, are provided by `yrby-rails`.

A document belongs to a model through `record` and `name`, much like
`ActionText::RichText`. It also has a unique transport `key` and stores the
compacted CRDT state. Destroying the model removes its document and update
rows.

Each incoming delta is appended to `y_document_updates`. At the compaction
threshold, yrby merges those updates into `y_documents.state` and removes the
old rows. The channel renders the document into `post.body` after each
change. Apps using yrby directly can provide another store through `on_load`
and `on_change`.

### The document channel

`DocumentChannel` runs Yjs sync over Action Cable or AnyCable and stores
updates in `Y::Document`. It saves each update before acknowledging or
broadcasting it, so the stored log can rebuild the document.

The form helper gives the client a signed GlobalID scoped to one record and
field. Use `authorized?` for your application's user access check.

### Encrypted storage

`has_collaborative_rich_text :body, encrypted: true` stores the rendered body
with `ActionText::EncryptedRichText`. The CRDT state and updates use yrby's
encrypted document models. Active Record encryption handles both.

### How it stays in sync with Action Text

`has_collaborative_rich_text :body` is a regular `has_rich_text` attribute
underneath. After recording each change, the channel renders the
collaborative document to HTML **on the server** and saves it through the
normal Action Text writer. yrby's `Y::Lexxy` produces byte-identical markup
to the editor's own serializer, in Ruby. So `post.body` tracks the
collaborative state, and everything downstream (rendering, search, mailers)
is plain Action Text.

Each update is rendered synchronously, so `post.body` is current when the
channel call returns. Once an update is stored, closing the browser does not
affect it. If rendering fails, the next successful update renders the full
document again.

When collaboration starts for a record with existing Action Text content, the
client seeds the Yjs document from the editor's rendered value. Clearing the
editor later saves an empty body as expected.

There is a race during the first open: two clients can seed the document
before either finishes syncing, which duplicates the initial content.
Lexical's `CollaborationPlugin` behaves the same way. The duplicate is
visible and can be deleted.

### Cursor identity

The helper uses the first available `current_user` value from `name`,
`username`, or `handle`. It falls back to `"Anonymous"` and derives a stable
cursor color from the result. Customize either globally or per render:

```ruby
LexxyRealtime.identity = ->(view) { { name: view.current_user.handle, color: nil } }
```

```erb
<%= form.collaborative_rich_textarea :body, name: "Reviewer", color: "#0ea5e9" %>
```

Cursor names and colors are sent as presence metadata. The channel uses the
signed GlobalID to find the record and `authorized?` to check access.

## The JavaScript client

`lexxy-realtime` registers the `<lexxy-collaboration>` custom element. In a
Rails app, the element builds an Action Cable consumer, a `Y.Doc`, and a
[`YrbyProvider`](https://github.com/jpcamara/yrby) from its attributes. You
can instead supply a consumer or your own document and provider (see
[Providers](#providers)).

### Install

**Import maps**: the install generator adds two pins: `lexxy-realtime`
(a build the gem ships) and `@37signals/lexxy` as an alias of the app's
own Lexxy asset (the same file as Lexxy's `lexxy` pin; one URL, one
module). The bundle reaches lexical through Lexxy's documented `Lexical`
re-export, so the page runs exactly one copy of lexical: the editor's.
Nothing to install; import the packages in your entry point.

**Bundlers**: install the npm package. npm and bun install its peers
automatically; with yarn, add `@lexical/yjs yjs y-protocols` yourself:

```bash
npm install lexxy-realtime
```

You also need a Lexxy editor and `lexical` (`^0.44`), which your app already
has. The element-managed Action Cable client is bundled. Install
`@anycable/web` when configuring [AnyCable](#anycable), or the client
package for your own Yjs provider (for example, `y-websocket`).

Either way, the entry point imports are the same:

```js
import "@37signals/lexxy";
import "lexxy-realtime"; // registers <lexxy-collaboration>
```

### Let the element create the provider

Render (or create) the element with attributes inside the editor. The element
waits for the editor, creates a shared Action Cable consumer (from the
standard `action-cable-url` meta tag, falling back to `/cable`), builds the
doc and provider, connects, and disconnects on removal:

```html
<lexxy-editor>
  <lexxy-collaboration doc-id="doc-42" name="Ada"
    channel-name="SyncChannel" channel-params='{"id":"doc-42"}'>
  </lexxy-collaboration>
</lexxy-editor>
```

To use a specific transport (for example `@anycable/web`), set the app-wide
consumer once at boot; every element without one of its own uses it:

```js
import { createConsumer } from "@anycable/web";
import { setConsumer } from "lexxy-realtime";

setConsumer(() => createConsumer());
```

Assigning `collab.consumer` on an element before it initializes still wins,
per element.

### Create the provider yourself

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

The element waits for the editor to initialize on its own, so you can append
it as soon as the `<lexxy-editor>` is in the DOM.

### A single copy of `lexical` and `yjs`

Lexxy and lexxy-realtime both leave `lexical` (and lexxy-realtime leaves
`yjs` / `@lexical/yjs`) as external peers, so your bundler can resolve them
to one shared instance. Both libraries must resolve to one installed copy.
Lexical depends on class identity, and Yjs depends on constructor identity;
duplicate copies break syncing. Bundlers normally deduplicate matching
versions (`lexical ^0.44`, `yjs ^13.6`). Configure an alias if yours does
not (e.g. esbuild `--alias:yjs=./node_modules/yjs`). Import-map apps get
this for free: the generator's pins resolve each module to exactly one
build.

## Providers

The element works with any Yjs provider that satisfies the contract below.
The yrby stack is the default and has the most test coverage.

### The yrby provider API

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

`YrbyProvider` creates and owns its `Awareness` instance; the element uses
and exposes `provider.awareness`. Read it for presence data such as the
current collaborators.

### Bring your own Yjs provider

Create the document and provider, then assign both to the element. This
example uses a Node `y-websocket` server:

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

Point the provider at its own backend. Nothing else in the client wiring
changes.

### Provider contract

Any provider with the standard Yjs surface works:

- `provider.awareness`: a [`y-protocols`](https://github.com/yjs/y-protocols)
  `Awareness` instance (used for remote cursors/selections).
- `provider.synced`: `true` once caught up with the server (used to seed a
  brand-new, empty document the first time).
- `provider.disconnect()` or `destroy()`: when you assign a provider, you
  own its connection and must disconnect it yourself. The element
  disconnects only providers it creates.

You start the connection however that provider expects (`provider.connect()`
for `YrbyProvider`; `y-websocket` connects on construction). `y-websocket`
and Hocuspocus satisfy this contract; other providers may need an adapter.

### Manual server setup (yrby without the gem)

Collaboration needs a server that records and relays Yjs updates. The Rails
installer generates this channel for you. For a manual yrby setup, include
the [`yrby-rails`](https://rubygems.org/gems/yrby-rails) concern:

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

`Y::Document` ships in yrby-rails and is the storage the generators use. The
hooks accept any store that can return and append update bytes. See
[`yrby`](https://github.com/jpcamara/yrby) for the full protocol (reliable
delivery, causal-gap handling).

### Manual Action Text rendering

The Rails gem handles this automatically. The following is for apps that
wire yrby directly.

The collaborative document lives in your durable store as CRDT updates. When
the rest of your app needs it as rich text (display, search, mailers),
render it server-side with the `yrby` gem's `Y::Lexxy`, which reproduces
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

## AnyCable

The whole setup runs unchanged on [AnyCable](https://anycable.io): the
channel is the same `Y::ActionCable` concern, and the CI suite runs the
full editor e2e (real uploads included) through a real anycable-go
gateway.

Server side, run the standard AnyCable pair next to your app (the RPC
server executes the channel; anycable-go terminates the sockets):

```ruby
# Gemfile
gem "anycable-rails"
```

```yaml
# config/cable.yml
production:
  adapter: any_cable
```

```bash
bundle exec anycable   # channel logic (RPC)
anycable-go            # WebSocket gateway
```

Client side, point the page at the gateway. The stock setup needs nothing
else: the element reads the `action-cable-url` meta tag, so set
`config.action_cable.url` to the anycable-go URL and every
`<lexxy-collaboration>` connects through it. To use the `@anycable/web`
client instead (its ActionCable-compat mode), configure it once at boot:

```js
import { createConsumer } from "@anycable/web";
import { setConsumer } from "lexxy-realtime";

setConsumer(() => createConsumer());
```

Presence gets faster under AnyCable: yrby's provider sends awareness
(cursors, selections) as client-to-client whispers, relayed entirely by
anycable-go, so cursor traffic never touches the Ruby server.

## Attachments

File and image uploads work under collaboration. The uploader's browser does
the ActiveStorage direct upload as usual; the attachment node syncs through
Yjs, and peers render the finished image from its URL. While an upload is in
flight, peers see a placeholder with the filename and a live progress bar.
The raw `File`, preview URL, and upload settings stay in the uploader's
browser. Other collaborators receive the attachment state without starting
another upload.

The browser e2e suite drives a real PNG through this pipeline (DirectUpload
to a live ActiveStorage endpoint) and asserts a live peer and a late joiner
both render actual pixels from the served blob, over Action Cable and
AnyCable both.

## Turbo

Two things matter under Turbo Drive:

- Run your wiring on `turbo:load` (or make the editor page a Turbo frame
  boundary), so a fresh `<lexxy-collaboration>` mounts per visit. The test
  suite covers removal before the first sync, DOM moves, and remounts.
- Don't cache a live editor: mark the editor container
  `data-turbo-temporary` so Turbo's snapshot doesn't restore a stale editor
  DOM next to a fresh binding. To disable caching for the whole page, use
  `<meta name="turbo-cache-control" content="no-cache">`.

## Requirements

Ruby 3.4+, Rails 8.0.2+, and Lexxy 0.9.29+ (enforced by the npm peer range
and the gem floor; 0.9.29 ships the attachment construction fix this package
relies on). lexxy-realtime applies a temporary `@lexical/yjs` compatibility
patch during binding; see [`CONTRIBUTING.md`](CONTRIBUTING.md) for details
and upstream status.

## License

MIT
