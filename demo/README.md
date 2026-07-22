# Demo: collaborative posts

A small, real Rails app showing lexxy-realtime end to end: a `Post` with a
collaborative Action Text `body`, edited together live, materialized back to
`post.body` on the server.

The interesting files are exactly the ones you'd touch in your own app:

- `app/models/post.rb` — `has_collaborative_rich_text :body`
- `app/views/posts/edit.html.erb` — `collaborative_rich_text_area form, :body`
- `app/javascript/application.js` — `import "lexxy-realtime"`
- `app/channels/document_channel.rb`, `app/models/yrby_document_*` — generated
  by `rails g lexxy_realtime:install`
- `config/initializers/lexxy_realtime.rb` — guest identity (a real app uses
  `current_user`, which is the default)

## Run it

```bash
bundle install
npm install
npm run build
bin/rails db:prepare
bin/rails server
```

Create a post, open its edit page in two browser windows, and type in both.
Open the post's show page a few seconds later: the collaborative document has
been rendered to HTML on the server (no Node) and saved as regular Action Text.

## Notes

- The Gemfile points at the sibling `rails/` gem and a local `../../yrby`
  checkout; `package.json` points at the repo root (`file:..`).
- The esbuild `--alias` flags exist because a `file:` dependency is a symlink,
  which would otherwise pull a second copy of `lexical`/`yjs` from the repo's
  own node_modules. Apps installing from the registries don't need them.
