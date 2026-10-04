// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

// collaborative_rich_textarea renders a configured <lexxy-collaboration>.
// The imported custom element creates and connects its Action Cable
// provider.
import "@37signals/lexxy"
import "lexxy-realtime"

// Hashtag and comment-mark nodes for every editor.
import "./custom_nodes"
