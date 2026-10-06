// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

// collaborative_rich_textarea renders <yrby-document> around the editor and
// <lexxy-collaboration> inside it. Importing lexxy-realtime registers both,
// and <yrby-document> opens the Action Cable subscription.
import "@37signals/lexxy"
import "lexxy-realtime"

// Hashtag and comment-mark nodes for every editor.
import "./custom_nodes"
