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

The generator adds yrby's table migration, plus import-map pins if the app
uses import maps. The channel ships in the gem
(`LexxyRealtime::DocumentChannel`), and the `Y::Document` and
`Y::DocumentUpdate` models come from `yrby-rails`.

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

Render the form only for users who may edit the record, then open the page
in two browsers and edit together. You don't write a channel. The helper
renders a signed grant for the record and field, and
`LexxyRealtime::DocumentChannel` only opens a document for a valid grant.
The record must be persisted (the document key derives from it). A record with
an existing body works: the first collaborative open seeds the document
from it.

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

The form helper renders a signed grant for the record and field.
`LexxyRealtime::DocumentChannel` is yrby-rails' `Y::DocumentChannel` with
Action Text rendering added. The grant has its own purpose, so yrby-rails'
`Y::DocumentChannel` rejects it, and the block below can't be skipped by
subscribing there instead. The channel rejects a missing, tampered, expired, or
wrong-field grant, a deleted record, and a field that isn't declared with
`has_collaborative_rich_text`. A valid grant means your app rendered the
form for this user.

To also check the user's current permissions when they subscribe, give
the channel a block:

```ruby
# config/initializers/lexxy_realtime.rb
Rails.application.config.to_prepare do
  LexxyRealtime::DocumentChannel.authorize_document do |record, name|
    record.editable_by?(current_user, attribute: name)
  end
end
```

The block runs inside the channel, so `current_user` and your other
connection identifiers are available. `editable_by?` stands for your own
permission check. If the block returns false or nil, the channel rejects
the subscription before sending anything.

## Grant lifetime and refresh

A grant lasts as long as GlobalID's signed-id default, which is one month
under Rails, and `expires_in:` on the form helper shortens it. The grant is
part of the rendered page, though, and Action Cable resubscribes with it
after every network drop. If the grant expires before the user is done
editing, the editor stops syncing at the next reconnect. To avoid that,
pair `expires_in:` with `refresh:`, a URL the page fetches when a
subscription is rejected:

```erb
<%= form.collaborative_rich_textarea :body, expires_in: 10.minutes,
                                             refresh: grant_post_path(@post) %>
```

```ruby
# config/routes.rb:  resources :posts do get :grant, on: :member end
# app/controllers/posts_controller.rb
def grant
  @post = current_user.posts.find(params[:id]) # your own authorization, again
  render json: { grant: @post.collaborative_rich_text_grant(:body, expires_in: 10.minutes) }
end
```

`collaborative_rich_text_grant` makes the same grant the form helper
renders, for `LexxyRealtime::DocumentChannel`. A grant from yrby-rails'
`collaborative_sgid` doesn't work here, because the channel checks a
different purpose.

That action grants write access, so its check must be at least as strict
as the page that renders the form. If it skips authorization, anyone who
can reach the URL gets a grant, and a short `expires_in:` protects nothing.

When a subscription is rejected, `<yrby-document>` fetches the URL with the
session cookie, and the action runs your authorization again. If the
response is `{ "grant": ... }`, the page resubscribes with the new grant and
keeps the document and any edits the server hasn't acknowledged. Any other
response, a non-2xx status, a second rejection, or a refresh that takes
longer than 15 seconds stops syncing until the page reloads, and
`<yrby-document>` dispatches `yrby:error`. The page doesn't renew grants on
a timer, so it won't interrupt a healthy subscription. Every reconnect
after expiry is a fresh permission check, which is why you'd want a short
lifetime in the first place.

Without `refresh:`, an editor whose grant has expired stops syncing at its
next reconnect and starts again after the page reloads.

## Configuration

```ruby
LexxyRealtime.identity = ->(view) { { name: view.current_user.handle, color: nil } }
```

By default, identity uses the first available `current_user` value from
`name`, `username`, or `handle`, then falls back to `"Anonymous"`.

Full documentation, the demo app, and the JavaScript package:
[repository README](https://github.com/jpcamara/lexxy-realtime#readme).
