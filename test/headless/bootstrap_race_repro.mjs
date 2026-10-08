// Reproduces the check-then-act race in the bootstrap step of @lexical/react's
// CollaborationPlugin, using a real sync server.
//
// The plugin decides whether to seed the document like this
// (LexicalCollaborationPlugin.dev.mjs):
//
//   provider.on('sync', ...) -> onBootstrap():
//     if (shouldBootstrap && root.isEmpty() && root._xmlText._length === 0) {
//       initializeEditor(editor, initialEditorState);   // seeds the shared doc
//     }
//
// Both checks read the client's local copy of the shared root. If two clients
// finish their first sync before either receives the other's seed, both pass
// the check and both seed the document. The CRDT then keeps both seeds. This
// script runs the same check for two clients at once and prints the merged
// document.
//
// Lexical's collaboration docs describe this case ("two clients ... could
// both try to initialize the content resulting in document corruption").
// They recommend client bootstrap only for development and testing, and
// seeding the document on the server in production.
import * as Y from "yjs";
import { ActionCableProvider as YrbyProvider } from "yrby-client";
import { rawConsumer, URL } from "./support.mjs";
const room = `bootstrap-race-${Date.now()}`;

function makeClient(label) {
  const doc = new Y.Doc();
  const provider = new YrbyProvider(doc, rawConsumer(URL), "DocumentChannel", { id: room });
  return { label, doc, provider };
}

function seedIfEmpty({ label, doc }) {
  // The plugin's check. root.isEmpty() and root._xmlText._length === 0 both
  // read this client's local root XmlText, so checking its length is the same
  // test.
  const root = doc.get("root", Y.XmlText);
  if (root.length === 0) {
    root.insert(0, `[SEED-${label}]`);
    return true;
  }
  return false;
}

const a = makeClient("A");
const b = makeClient("B");

// Two users open a new, empty document at the same moment.
a.provider.connect();
b.provider.connect();
await Promise.all([a.provider.whenSynced, b.provider.whenSynced]);

// Each client gets its 'sync' event and runs onBootstrap's check on its own copy.
const aSeeded = seedIfEmpty(a);
const bSeeded = seedIfEmpty(b);

// Give the updates time to reach both clients.
await new Promise((r) => setTimeout(r, 1500));

const aText = a.doc.get("root", Y.XmlText).toString();
const bText = b.doc.get("root", Y.XmlText).toString();

console.log(`A saw an empty document and seeded it: ${aSeeded}`);
console.log(`B saw an empty document and seeded it: ${bSeeded}`);
console.log(`A's document after merging: ${JSON.stringify(aText)}`);
console.log(`B's document after merging: ${JSON.stringify(bText)}`);

const duplicated = aSeeded && bSeeded && aText.includes("SEED-A") && aText.includes("SEED-B");
console.log(duplicated
  ? "RACE REPRODUCED: both clients seeded, so the document has the initial content twice."
  : "the race did not happen on this run");

a.provider.disconnect();
b.provider.disconnect();
process.exit(duplicated ? 0 : 1);
