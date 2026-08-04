# lexxy-realtime (Rails gem)

Collaborative editing for [Lexxy](https://github.com/basecamp/lexxy) (Action
Text) in Rails, backed by [yrby](https://github.com/jpcamara/yrby) — Yjs CRDTs
in Ruby, with no Node service to run.

## Install

Prerequisites: a working [Lexxy](https://github.com/basecamp/lexxy) setup
(the gem and its editor JS), and a JS bundler (esbuild/vite/webpack —
importmap-only apps aren't supported yet; the lexical/yjs dependencies
aren't pinnable until Lexxy exports them).

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
yrby's tables (`y_documents` + `y_document_updates`; the models ship
in the yrby-rails gem as `Y::Document` and `Y::DocumentUpdate`), the Action
Cable boilerplate if your app
lacks it, and appends `import "lexxy-realtime"` to
`app/javascript/application.js` when it exists (importmap-only apps get a
warning instead).

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

Live edits are CRDT deltas recorded to the document. `post.body` remains
regular Action Text, rendered write-through: after recording each change,
the channel renders the document to HTML server-side via yrby's `Y::Lexxy`
(`materialize_collaborative_rich_text!`, visible in the generated channel)
and saves it as the attribute. There is no job or queue to configure;
reads are plain reads. If a render fails, the error is logged — the
change is already recorded, and the next successful change re-renders
everything. Until one arrives, the attribute keeps its last rendered
value.

## Access control

Clients join with a signed, purpose-scoped GlobalID minted by the form helper
— they never name documents, and a signed id from another feature can't be
replayed here. The signed id identifies the record; it doesn't check who is
connecting. Authorize the user in the generated channel's `authorized?`
(for example, `record.editable_by?(current_user)`).

## Configuration

```ruby
LexxyRealtime.identity = ->(view) { { name: view.current_user.handle, color: nil } }
```

The identity default uses `current_user`'s name/username/handle and never an
email address.

Full documentation, the demo app, and the JavaScript package:
[repository README](https://github.com/jpcamara/lexxy-realtime#readme).
