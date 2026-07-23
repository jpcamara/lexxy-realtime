# lexxy-realtime (Rails gem)

Collaborative editing for [Lexxy](https://github.com/basecamp/lexxy) (Action
Text) in Rails, backed by [yrby](https://github.com/jpcamara/yrby) — Yjs CRDTs
in Ruby, no Node anywhere.

## Install

```ruby
# Gemfile
gem "lexxy-realtime"
```

```bash
bin/rails generate lexxy_realtime:install
bin/rails db:migrate
npm install lexxy-realtime   # or yarn/bun/pnpm — the JS half of this package
```

The generator creates `app/channels/document_channel.rb`, the migration for
the gem's update-log table (`lexxy_realtime_updates`; the model ships in the
gem as `LexxyRealtime::Update`), the Action Cable boilerplate if your app
lacks it, and appends `import "lexxy-realtime"` to your JavaScript entrypoint.

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

Open the page in two browsers and edit together. The record must be persisted
(the document key derives from it). A record with an existing body works: the
first collaborative open seeds the document from it.

## How the body stays current

Live edits are CRDT deltas recorded to the update log. `post.body` remains
regular Action Text, kept current two ways:

- A `MaterializeJob` is enqueued for every recorded change (delay:
  `LexxyRealtime.materialize_after`, default 5s) and renders the document to
  HTML server-side via yrby's `Y::Lexxy`. Zero setup: Active Job's async
  adapter in development, Solid Queue on stock Rails 8 in production.
- **Reading the attribute materializes first when the log is newer** — a
  read can lock and save. That is deliberate (leaving the editor for a show
  page never shows stale content) and worth knowing: freshness is exact once
  writes quiesce, best-effort while peers are actively typing.

## Access control

Clients join with a signed, purpose-scoped GlobalID minted by the form helper
— they never name documents. Tighten further in the generated channel's
`authorized?` (for example, tenant checks against `current_user`).

## Configuration

```ruby
LexxyRealtime.store_name = "MyUpdateLog"   # any class with load/append (+ latest_change_at)
LexxyRealtime.materialize_after = 10       # seconds between an edit and its job
LexxyRealtime.identity = ->(view) { { name: view.current_user.handle, color: nil } }
```

The identity default uses `current_user`'s name/username/handle and never an
email address.

Full documentation, the demo app, and the JavaScript package:
[repository README](https://github.com/jpcamara/lexxy-realtime#readme).
