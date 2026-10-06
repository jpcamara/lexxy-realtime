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

The generator adds yrby's table migration. If the app uses import maps, it
also adds pins. The channel, `LexxyRealtime::DocumentChannel`, ships in the
gem. The `Y::Document` and `Y::DocumentUpdate` models come from
`yrby-rails`.

With a bundler, install the JavaScript package and import it next to
your Lexxy import:

```bash
npm install lexxy-realtime   # yarn, bun, and pnpm also work
```

With import maps, there is no npm install; the generator pins assets
this gem ships, one pin for each module the page must load once:

```ruby
# config/importmap.rb, added by the generator
pin "@37signals/lexxy", to: "lexxy.js"
pin "lexxy-realtime", to: "lexxy_realtime/lexxy-realtime.js"
pin "yrby-client", to: "lexxy_realtime/yrby-client.js"
pin "yrby-client/element", to: "lexxy_realtime/yrby-client.js"
pin "yjs", to: "lexxy_realtime/yjs.js"
pin "@rails/actioncable", to: "actioncable.esm.js"
pin "@rails/activestorage", to: "activestorage.esm.js"
```

`@37signals/lexxy` points at the Lexxy gem's own asset, the same file as
its `lexxy` pin, and lexxy-realtime reaches lexical through Lexxy's
`Lexical` re-export, so the page runs one copy of lexical. yrby-client and
yjs are separate files that lexxy-realtime imports. Two copies of either
would mean two `<yrby-document>` classes or two Yjs runtimes, which breaks
the binding, so other code that imports them gets the same copy.
`@rails/actioncable` is Rails' own file, which `<yrby-document>` loads for
its default consumer. The generator keeps any of these pins the app
already has and adds the rest, so run it again after upgrading.

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
`LexxyRealtime::DocumentChannel` opens a document only for a valid grant.
The record must be saved first, because the document key comes from its id.
If the record already has a body, the first editor to open it copies that
body into the new document.

Encryption works the way Action Text's does:

```ruby
has_collaborative_rich_text :body, encrypted: true
```

Action Text stores the rendered body with `ActionText::EncryptedRichText`.
yrby's `Y::EncryptedDocument` stores the collaborative document, both the
CRDT state and each update. Both use Active Record encryption, so the app
needs encryption keys configured. Without Action Text, declare `encrypts`
on the plain attribute yourself.

This works best on new attributes. To encrypt an attribute that already
has plaintext rows, enable `support_unencrypted_data`, rewrite each
document, update, and rich-text row through its encrypted class, then
turn the setting off again. The gem doesn't include a task for this.

## How the body stays current

The channel saves each CRDT update, renders the full document with
`Y::Lexxy`, and saves the HTML through the Action Text writer. This
happens in `refresh_collaborative_rich_text`, inside the channel's handler
for each update. There's no background job, so `post.body` is up to date as
soon as the channel finishes handling the update.

If rendering fails, the channel logs the error and keeps the update. The
next update renders the full document again. Until then, `post.body`
keeps its previous value.

## Access control

The form helper renders a signed grant for the record and field.
`LexxyRealtime::DocumentChannel` extends yrby-rails' `Y::DocumentChannel`
and adds Action Text rendering. The grant uses its own purpose, so
`Y::DocumentChannel` rejects it. A client can't get around the block below
by subscribing to that channel. The channel rejects a missing, tampered,
expired, or wrong-field grant, a deleted record, and a field that isn't
declared with `has_collaborative_rich_text`. A valid grant means your app
rendered the form for this user.

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

The block runs inside the channel, so you can use `current_user` and your
other connection identifiers. `editable_by?` is a placeholder for your own
permission check. If the block returns false or nil, the channel rejects
the subscription before it sends anything.

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
keeps the document and any edits the server hasn't acknowledged. If the
refresh fails, the editor stops syncing until the page reloads, and
`<yrby-document>` dispatches `yrby:error`. A refresh fails when the response
is an error or has no grant, when it takes longer than 15 seconds, or when
the server rejects the new grant. The page doesn't renew grants on a timer,
so it won't interrupt a working subscription. Every reconnect after the
grant expires runs your permission check again, and that's the reason to
keep the lifetime short.

Without `refresh:`, an editor whose grant has expired stops syncing at its
next reconnect and starts again after the page reloads.

While a grant is rejected and not renewed, `<yrby-document>` makes the
editor inert, so nobody types into a document that can't sync. The editor
is also inert before the first sync, while the page can't reach the
server.

## Configuration

```ruby
LexxyRealtime.identity = ->(view) { { name: view.current_user.handle, color: nil } }
```

By default, the cursor name is the first of `current_user.name`,
`username`, or `handle` that has a value. Without one it's `"Anonymous"`.

Full documentation, the demo app, and the JavaScript package:
[repository README](https://github.com/jpcamara/lexxy-realtime#readme).
