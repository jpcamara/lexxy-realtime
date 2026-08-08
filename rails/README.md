# lexxy-realtime (Rails gem)

Collaborative [Lexxy](https://github.com/basecamp/lexxy) editing for
Rails, backed by [yrby](https://github.com/jpcamara/yrby)'s Ruby
implementation of Yjs.

## Install

Requires Ruby 3.4+, Rails 8.0.2+, and a working
[Lexxy](https://github.com/basecamp/lexxy) installation (its gem and
editor JavaScript). Import maps and bundlers (esbuild, Vite, webpack)
both work.

```ruby
# Gemfile
gem "lexxy-realtime"
```

```bash
bin/rails generate lexxy_realtime:install
bin/rails db:migrate
```

The generator creates `app/channels/document_channel.rb`, installs
yrby's table migration, and adds the standard Action Cable files when
they are missing. The `Y::Document` and `Y::DocumentUpdate` models come
from `yrby-rails`.

With a bundler, install the JavaScript package and import it next to
your Lexxy import:

```bash
npm install lexxy-realtime   # yarn, bun, and pnpm also work
```

With import maps, there is no npm install; the generator pins assets
this gem ships:

```ruby
# config/importmap.rb, added by the generator
pin "lexical", to: "lexxy_realtime/lexical.js"
pin "@37signals/lexxy", to: "lexxy_realtime/lexxy.js"
pin "lexxy-realtime", to: "lexxy_realtime/lexxy-realtime.js"
pin "@rails/activestorage", to: "activestorage.esm.js"
```

`lexical` is the one module the Lexxy and lexxy-realtime bundles share,
so both ship with it external and it resolves through its own pin. The
`@37signals/lexxy` pin must point at this gem's build: Lexxy's own
asset bundles a second copy of `lexical`, and two copies break the
collaboration binding, so remove any pin of Lexxy's asset. Keep
`stylesheet_link_tag "lexxy"` for the editor's CSS. These assets are a
stopgap until Lexxy ships import-map-ready builds itself.

Either way, your entrypoint imports both:

```js
import "@37signals/lexxy"
import "lexxy-realtime"
```

## Use

```ruby
class Post < ApplicationRecord
  has_collaborative_rich_text :body   # a regular Action Text attribute
end
```

```erb
<%= form_with model: @post do |form| %>
  <%= form.collaborative_rich_textarea :body %>
<% end %>
```

Add your app's access check to `authorized?` in the generated channel,
then open the page in two browsers and edit together. The record must be persisted
(the document key derives from it). A record with an existing body works: the
first collaborative open seeds the document from it.

Encryption works the way Action Text's does:

```ruby
has_collaborative_rich_text :body, encrypted: true
```

The rendered body goes through `ActionText::EncryptedRichText`, and the
collaborative document (CRDT state and update payloads) is stored through
yrby's `Y::EncryptedDocument`. Both use Active Record encryption, so the
app must configure encryption keys. Without Action Text, declare
`encrypts` on the plain attribute yourself.

Use it for new attributes. Existing plaintext rows need migration
before you add `encrypted: true`: enable `support_unencrypted_data`,
rewrite each document, update, and rich-text row through its encrypted
class, then turn it back off. There is no built-in task for that yet.
And if your channel came from an earlier pre-release checkout, update it
to the current record-based storage first; a channel calling
`Y::Document` directly stores encrypted attributes as plaintext.

## How the body stays current

The channel records each CRDT update, renders the full document with
`Y::Lexxy`, and saves the HTML through the Action Text writer. This
happens synchronously in `refresh_collaborative_rich_text`, so
reads use the stored `post.body` value.

If rendering fails, the update remains stored and the error is logged.
The next successful update renders the full document again. Until then,
`post.body` keeps its previous value.

## Access control

The form helper gives clients a signed GlobalID scoped to one record and
field. `DocumentChannel` uses it to locate the record. Put the user
access check in `authorized?` (for example,
`record.editable_by?(current_user)`).

## Configuration

```ruby
LexxyRealtime.identity = ->(view) { { name: view.current_user.handle, color: nil } }
```

By default, identity uses the first available `current_user` value from
`name`, `username`, or `handle`, then falls back to `"Anonymous"`.

Full documentation, the demo app, and the JavaScript package:
[repository README](https://github.com/jpcamara/lexxy-realtime#readme).
