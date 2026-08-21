# frozen_string_literal: true

# Verifies the Post nodes: rules against a real collaborative document.
# The fixture is the y-lexical update produced by two live demo editors
# typing "Collab #ruby rocks and #peer too" and wrapping "rocks" with the
# comment-mark toolbar button (see "Custom nodes" in the README).
#
# Run with: bin/rails runner script/check_custom_nodes.rb
post = Post.create!(title: "Custom nodes render check")
begin
  state = Base64.strict_decode64(Rails.root.join("script/fixtures/custom_nodes_body.update.b64").read)
  post.find_or_create_collaborative_document(:body).append(state)
  post.refresh_collaborative_rich_text(:body) || abort("the fixture document rendered no HTML")

  html = post.reload.body.to_s
  failures = []
  # The "mark" rule materializes @lexical/mark's MarkNode. Without it the
  # marked text would survive as plain text, losing the <mark> wrapper.
  failures << "comment mark markup missing" unless html.include?(%(<mark class="comment-mark">rocks</mark>))
  # Hashtags are text runs: they materialize as their plain text.
  failures << "hashtag text missing" unless html.include?("#ruby")
  failures << "hashtag unexpectedly carries markup (text runs degrade to text)" if html.include?(%(class="hashtag"))

  abort(failures.join("; ")) if failures.any?
  puts "custom nodes render check ok"
ensure
  post.destroy
end
