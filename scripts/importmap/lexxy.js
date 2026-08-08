// Import-map pin target: the Lexxy editor with everything except
// `lexical` (shared with lexxy-realtime through its own pin) and
// `@rails/activestorage` (the Rails-provided pin, loaded on upload)
// bundled in.
export * from "@37signals/lexxy";
