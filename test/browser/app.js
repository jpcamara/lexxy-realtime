// Browser test entry. Renders a real Lexxy editor wired to the yrb-lite test
// server through the YrbLiteProvider, mirroring how a Rails host wires it:
// create the provider, set it on <lexxy-collaboration>, append, then connect().
//
// Reads `room`, `name`, `color` from the query string so two agent-browser
// sessions can join the same document as different users. Exposes window.__test
// for assertions.
import "@37signals/lexxy";
import { YrbLiteProvider } from "../../src/index.js"; // also registers <lexxy-collaboration>
import * as Y from "yjs";
import { Awareness } from "y-protocols/awareness";
import { createConsumer } from "@rails/actioncable";

const params = new URLSearchParams(location.search);
const room = params.get("room") || "browser-demo";
const name = params.get("name") || "User";
const color = params.get("color") || "#3b82f6";

const consumer = createConsumer(`ws://${location.host}/cable`);
const editor = document.getElementById("editor");

function start() {
  const doc = new Y.Doc();
  const awareness = new Awareness(doc);
  const provider = new YrbLiteProvider(doc, consumer, "DocumentChannel", { id: room }, { awareness, disableBc: true });

  const collab = document.createElement("lexxy-collaboration");
  collab.setAttribute("id", room);
  collab.setAttribute("name", name);
  collab.setAttribute("color", color);
  collab.setAttribute("channel-name", "DocumentChannel");
  collab.setAttribute("channel-params", JSON.stringify({ id: room }));
  collab.consumer = consumer;
  collab.doc = doc;
  collab.awareness = awareness;
  collab.provider = provider;

  editor.appendChild(collab);
  provider.connect();

  // Test hooks.
  window.__test = {
    doc,
    provider,
    awareness,
    room,
    // What the user actually sees: the editor's contenteditable text.
    text: () => {
      const ce = editor.querySelector('[contenteditable="true"]') || editor.querySelector("[contenteditable]");
      return ce ? ce.innerText : "";
    },
    synced: () => provider.synced,
    peers: () =>
      [...awareness.getStates().values()].map((s) => s.user && s.user.name).filter(Boolean),
  };
  document.body.dataset.collabReady = "true";
}

// Lexxy initializes <lexxy-editor> on its own connectedCallback; wait for it.
if (editor.editor) {
  start();
} else {
  editor.addEventListener("lexxy:initialize", start, { once: true });
}
