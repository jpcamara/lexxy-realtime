// Browser e2e. Two Lexxy editors collaborate through the yrby server, driven
// with agent-browser. The test checks that edits sync both ways and that a new
// client, opened after the others leave, loads the document from the server's
// store. It also covers attachments, upload placeholders, a host-supplied
// provider, setConsumer, seeding from an existing body, and the orphaned
// upload sweep.
//
// Expects the test server on PORT (run.mjs starts it) and a built browser
// bundle (npm run build:test).
import { execFileSync } from "node:child_process";

const PORT = process.env.PORT || 4111;
const ROOM = `bre2e-${process.pid}`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ab = (session, ...args) => {
  try {
    return execFileSync("npx", ["agent-browser", ...args], {
      env: { ...process.env, AGENT_BROWSER_SESSION: session },
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (e) {
    return `${e.stdout || ""}${e.stderr || ""}`;
  }
};

// The AnyCable run sets CABLE_WS_URL. Every page gets it as `cable`, which
// points all three consumer setups at the gateway.
const CABLE = process.env.CABLE_WS_URL ? `&cable=${encodeURIComponent(process.env.CABLE_WS_URL)}` : "";
const open = (session, name) => ab(session, "open", `http://localhost:${PORT}/?room=${ROOM}&name=${name}${CABLE}`);
const ready = (session) => waitEval(session, "!!(window.__test && window.__test.synced())", "ready+synced");

async function waitEval(session, js, label, ms = 10000) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    if (/\btrue\b/.test(ab(session, "eval", js))) return true;
    await sleep(250);
  }
  console.log(`  TIMEOUT: ${label} (${session})`);
  return false;
}

let failures = 0;
const check = (label, ok) => {
  console.log(`${ok ? "ok" : "FAIL"}: ${label}`);
  if (!ok) failures++;
};

// <yrby-document> pages subscribe with grant=ROOM and name=body, which the
// test channel stores under "ROOM:body".
execFileSync("curl", ["-s", "-X", "POST", `http://localhost:${PORT}/reset/${ROOM}:body`]);

// Two users join the same document.
open("alice", "Alice");
check("Alice synced", await ready("alice"));
open("bob", "Bob");
check("Bob synced", await ready("bob"));

// Alice edits; Bob sees it.
ab("alice", "click", "#editor [contenteditable]");
ab("alice", "keyboard", "type", "ALICE-EDIT");
check("Bob received Alice's edit", await waitEval("bob", 'window.__test.text().includes("ALICE-EDIT")', "bob sees ALICE-EDIT"));

// Alice has focus and a caret, so Bob should show her remote cursor as a
// labeled caret in the @lexical/yjs cursor overlay.
check(
  "Bob renders Alice's remote caret",
  await waitEval(
    "bob",
    '(() => { const c = document.querySelector(".lexxy-collab-cursors"); return !!c && c.childElementCount > 0 && /Alice/.test(c.textContent); })()',
    "bob shows Alice's caret"
  )
);

// Bob edits; Alice sees it.
ab("bob", "click", "#editor [contenteditable]");
ab("bob", "keyboard", "type", "BOB-EDIT");
check("Alice received Bob's edit", await waitEval("alice", 'window.__test.text().includes("BOB-EDIT")', "alice sees BOB-EDIT"));

// Attachments must render on the peer. @lexical/yjs calls node constructors
// with no arguments when it applies a remote update, so Lexxy's attachment
// constructors have to accept that (basecamp/lexxy#1196). If one throws
// ("Cannot destructure property 'tagName' of 'undefined'"), the peer's Yjs doc
// has the node but the editor never shows it.
ab("alice", "eval", 'window.__test.insertAttachment("TEST-SGID-123")');
check(
  "Bob's editor shows Alice's attachment",
  await waitEval("bob", 'window.__test.attachmentSgids().includes("TEST-SGID-123")', "bob has attachment")
);
check(
  "no Yjs update errors on Bob",
  /\btrue\b/.test(ab("bob", "eval", 'window.__test.errors().filter(e => e.includes("destructure") || e.includes("Yjs update")).length === 0'))
);
// The live `editor` object is an excluded property and must not reach the
// shared doc. If it synced, peers would get editor="[object Object]".
check(
  "the editor object is not in the shared doc",
  /\btrue\b/.test(ab("bob", "eval", '!window.__test.docRoot().includes("editor=")'))
);

// Both leave. The server keeps the document.
ab("alice", "close");
ab("bob", "close");
await sleep(800);

// A new client must load the document from the server's store.
open("carol", "Carol");
check("Carol synced", await ready("carol"));
const carolHasBoth = await waitEval(
  "carol",
  'window.__test.text().includes("ALICE-EDIT") && window.__test.text().includes("BOB-EDIT")',
  "carol loaded the stored doc"
);
check("a new client loaded the document from the server", carolHasBoth);
// The late joiner gets the attachment from the initial sync when the editor
// binds. Bob got his through a live update.
check(
  "a new client shows the attachment",
  await waitEval("carol", 'window.__test.attachmentSgids().includes("TEST-SGID-123")', "carol has attachment")
);

// A second editor on the same page without collaboration can still create
// attachments. Binding one editor must not change another editor's
// registered classes.
check(
  "plain editor on the same page still creates attachments",
  /\bok\b/.test(ab("carol", "eval", "window.__test.plainEditorAttachment()"))
);

// Rebinding (removing and re-adding the collaboration element) must keep the
// excluded properties. The exclusions are rebuilt on each bind. Without them,
// an upload node's File makes the Lexical to Yjs sync throw.
ab("carol", "eval", 'window.__test.remountCollab()');
check("carol re-synced after remount", await waitEval("carol", "window.__test.synced()", "carol re-synced"));
ab("carol", "eval", 'window.__test.insertUploadNode("rebind-probe.png")');
check(
  "upload node synced after the rebind",
  await waitEval("carol", 'window.__test.docRoot().includes("rebind-probe.png")', "upload node in doc")
);
check(
  "rebind kept the property exclusions, so the sync did not throw",
  /\btrue\b/.test(ab("carol", "eval", 'window.__test.errors().filter(e => /Unexpected content type|insertUploadNode/.test(e)).length === 0'))
);
check(
  "rebind kept the property exclusions, so no File is in the shared doc",
  /\btrue\b/.test(ab("carol", "eval", '!window.__test.docRoot().includes("file=")'))
);
// Lexxy tracks uploads with a mutation listener on the upload node class. It
// marks the editor invalid while an upload node exists, so a form can't
// submit mid-upload. The pending upload node inserted above must leave the
// editor invalid after the rebind.
check(
  "Lexxy's upload mutation listener still fires, so the editor is invalid while uploading",
  /\btrue\b/.test(ab("carol", "eval", "window.__test.editorInvalidWhileUploading()"))
);

// On pagehide, the element removes this client's upload placeholders that
// hold a File, while it can still sync the deletion. Carol still has the
// rebind probe pending. After her pagehide, a new client must load the
// document without it.
ab("carol", "eval", 'window.dispatchEvent(new Event("pagehide")); "fired"');
check(
  "pagehide removed the local pending upload node",
  await waitEval("carol", '!window.__test.docRoot().includes("rebind-probe.png")', "upload node removed locally")
);

// A Turbo page replacement discards the editor without a pagehide, so the
// element removes the pending upload on turbo:before-cache. An editor inside
// data-turbo-permanent keeps its upload node. <yrby-document> also unbinds
// the editor on turbo:before-cache and binds it again once Turbo finishes,
// so the check reads the doc it saved before dispatching the event.
check(
  "permanent editor keeps its pending upload through turbo:before-cache",
  /\btrue\b/.test(ab(
    "carol",
    "eval",
    'document.getElementById("editor").setAttribute("data-turbo-permanent", "");' +
      ' window.__test.insertUploadNode("permanent-probe.png");' +
      ' (() => { const doc = window.__test.doc;' +
      ' document.dispatchEvent(new CustomEvent("turbo:before-cache"));' +
      ' return doc.share.get("root").toString().includes("permanent-probe.png"); })()'
  ))
);
ab("carol", "eval", 'document.getElementById("editor").removeAttribute("data-turbo-permanent"); "ok"');
check("carol bound again after turbo:before-cache", await waitEval("carol", "window.__test.synced()", "carol rebound"));
ab(
  "carol",
  "eval",
  'window.__test.insertUploadNode("turbo-probe.png");' +
    ' document.dispatchEvent(new CustomEvent("turbo:before-cache")); "fired"'
);
check(
  "turbo:before-cache removed the pending upload once the editor is not permanent",
  await waitEval(
    "carol",
    'window.__test.synced() && !window.__test.docRoot().includes("turbo-probe.png")',
    "upload removed on turbo discard"
  )
);
ab("carol", "close");

// Host mode: the page assigns its own YrbyProvider to the element and
// renders no <yrby-document>. It must load the same durable document.
ab("zara", "open", `http://localhost:${PORT}/?room=${ROOM}&name=Zara&mode=host${CABLE}`);
check("host-mode element connected and synced", await ready("zara"));
const zaraHasBoth = await waitEval(
  "zara",
  'window.__test.text().includes("ALICE-EDIT") && window.__test.text().includes("BOB-EDIT")',
  "zara loaded persisted doc via a host provider"
);
check("host-mode element loaded the document", zaraHasBoth);

ab("zara", "close");

// The app-wide consumer set with setConsumer, as an @anycable/web app does.
// The session must use that consumer.
ab("uma", "open", `http://localhost:${PORT}/?room=${ROOM}&name=Uma&mode=setconsumer${CABLE}`);
check("setConsumer element connected and synced", await ready("uma"));
check(
  "element used the configured consumer",
  /\btrue\b/.test(ab("uma", "eval", "!!window.__test.usesConfiguredConsumer()"))
);
ab("uma", "close");

// Seeding: when a record with an existing body is opened for the first time,
// the editor's server-rendered value becomes the collaborative document. The
// first client sees it, the server stores it, and a later peer with no local
// value receives it.
const SEEDROOM = `${ROOM}-seed`;
ab("sam", "open", `http://localhost:${PORT}/?room=${SEEDROOM}&name=Sam&seedHtml=${encodeURIComponent("<p>EXISTING-BODY</p>")}${CABLE}`);
check("seeder synced", await ready("sam"));
check(
  "seeder kept the existing content",
  await waitEval("sam", 'window.__test.text().includes("EXISTING-BODY")', "sam sees EXISTING-BODY")
);
ab("tia", "open", `http://localhost:${PORT}/?room=${SEEDROOM}&name=Tia${CABLE}`);
check("peer synced into the seeded doc", await ready("tia"));
check(
  "peer received the seeded content from the shared document",
  await waitEval("tia", 'window.__test.text().includes("EXISTING-BODY")', "tia sees EXISTING-BODY")
);
ab("sam", "close");
ab("tia", "close");

open("dave", "Dave");
check("Dave synced", await ready("dave"));
check(
  "a new client sees no leftover upload placeholders",
  /\btrue\b/.test(ab(
    "dave",
    "eval",
    '!window.__test.docRoot().includes("rebind-probe.png") && !window.__test.docRoot().includes("turbo-probe.png")'
  ))
);
// Dave stays open because he creates the orphan in the next scenario.

// Set up the placeholder without a File that remains when a pagehide
// deletion never reaches the server. Dave creates the node without a File,
// so his own cleanup skips it, and Erin and Frank receive it before he
// disconnects.
open("erin", "Erin");
open("frank", "Frank");
check("Erin synced", await ready("erin"));
check("Frank synced", await ready("frank"));

ab("dave", "eval", 'window.__test.insertUploadNode("orphan-probe.png", { orphan: true })');
check(
  "orphan reached a connected peer",
  await waitEval("erin", 'window.__test.docRoot().includes("orphan-probe.png")', "orphan visible to erin")
);
ab("dave", "close");

// Any other awareness state stops the sweep, because from each client's
// side the other one could be the uploader.
check(
  "erin sees another client in awareness",
  await waitEval("erin", "window.__test.provider.awareness.getStates().size >= 2", "erin sees frank")
);
check(
  "frank sees another client in awareness",
  await waitEval("frank", "window.__test.provider.awareness.getStates().size >= 2", "frank sees erin", 20000)
);
await sleep(27000); // longer than the 25s settle delay, with another client present
check(
  "the orphan stays while another peer is present",
  /\btrue\b/.test(ab("erin", "eval", 'window.__test.docRoot().includes("orphan-probe.png")'))
);

// Frank leaves. Erin is now alone, and after the settle delay she removes
// the orphan.
ab("frank", "close");
check(
  "a client alone in the document removes the orphaned upload placeholder",
  await waitEval("erin", '!window.__test.docRoot().includes("orphan-probe.png")', "orphan removed", 70000)
);
ab("erin", "close");

console.log("");
if (failures > 0) {
  console.log(`FAILED: ${failures} check(s) failed`);
  process.exit(1);
}
console.log(`PASS: browser e2e (room ${ROOM})`);
process.exit(0);
