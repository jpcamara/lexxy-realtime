// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

// The Lexxy editor, and collaboration for it. This is the entire client-side
// setup: the server renders <lexxy-collaboration> with attributes (see
// collaborative_rich_text_area) and the element wires itself up.
import "@37signals/lexxy"
import "lexxy-realtime"
