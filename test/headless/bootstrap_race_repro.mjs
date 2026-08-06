// Reproduction: the check-then-act bootstrap race in @lexical/react's
// CollaborationPlugin, run against a real sync server.
//
// The plugin's decision procedure (LexicalCollaborationPlugin.dev.mjs):
//
//   provider.on('sync', ...) -> onBootstrap():
//     if (shouldBootstrap && root.isEmpty() && root._xmlText._length === 0) {
//       initializeEditor(editor, initialEditorState);   // seeds the shared doc
//     }
//
// Both guards read the LOCAL replica of the shared root. Two clients whose
// first sync completes before either sees the other's seed both pass the
// guard and both seed; the CRDT merges both. This script runs that exact
// predicate for two simultaneous clients and prints the converged document.
//
// Lexical's collaboration docs acknowledge this ("two clients ... could
// both try to initialize the content resulting in document corruption")
// and gate client bootstrap to dev-testing; their production guidance is
// server-side seeding.
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
  // The plugin's predicate, verbatim: the root XmlText is empty on this
  // replica. (root.isEmpty() and root._xmlText._length === 0 both read the
  // same local shared type.)
  const root = doc.get("root", Y.XmlText);
  if (root.length === 0) {
    root.insert(0, `[SEED-${label}]`);
    return true;
  }
  return false;
}

const a = makeClient("A");
const b = makeClient("B");

// Two users open the never-collaborated document at the same moment.
a.provider.connect();
b.provider.connect();
await Promise.all([a.provider.whenSynced, b.provider.whenSynced]);

// Each client's 'sync' fires; each runs onBootstrap's guard on its replica.
const aSeeded = seedIfEmpty(a);
const bSeeded = seedIfEmpty(b);

// Let the CRDT converge.
await new Promise((r) => setTimeout(r, 1500));

const aText = a.doc.get("root", Y.XmlText).toString();
const bText = b.doc.get("root", Y.XmlText).toString();

console.log(`A passed the empty-guard and seeded: ${aSeeded}`);
console.log(`B passed the empty-guard and seeded: ${bSeeded}`);
console.log(`A's converged document: ${JSON.stringify(aText)}`);
console.log(`B's converged document: ${JSON.stringify(bText)}`);

const duplicated = aSeeded && bSeeded && aText.includes("SEED-A") && aText.includes("SEED-B");
console.log(duplicated
  ? "RACE REPRODUCED: both clients seeded; the document holds the initial content twice."
  : "race did not fire this run");

a.provider.disconnect();
b.provider.disconnect();
process.exit(duplicated ? 0 : 1);
