// Browser e2e: two real Lexxy editors collaborate through the yrby server,
// driven headlessly with agent-browser. Asserts live convergence both ways and
// server-side durability (a fresh client, opened after the others have left,
// is rebuilt from the durable store).
//
// Assumes the test server is running on PORT (run.mjs handles that) and the
// browser bundle is built (npm run build:test).
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

const open = (session, name) => ab(session, "open", `http://localhost:${PORT}/?room=${ROOM}&name=${name}`);
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

execFileSync("curl", ["-s", "-X", "POST", `http://localhost:${PORT}/reset/${ROOM}`]);

// Two users join the same document.
open("alice", "Alice");
check("Alice synced", await ready("alice"));
open("bob", "Bob");
check("Bob synced", await ready("bob"));

// Alice edits; Bob sees it.
ab("alice", "click", "#editor [contenteditable]");
ab("alice", "keyboard", "type", "ALICE-EDIT");
check("Bob received Alice's edit", await waitEval("bob", 'window.__test.text().includes("ALICE-EDIT")', "bob sees ALICE-EDIT"));

// Alice has focus + a caret, so Bob should render her remote cursor (a labeled
// caret in the @lexical/yjs cursors overlay).
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

// Attachments must materialize on the PEER. @lexical/yjs constructs node
// classes with no arguments when applying a remote update; before Lexxy
// defaulted its constructor parameters (basecamp/lexxy#1196), that threw
// ("Cannot destructure property 'tagName' of 'undefined'") and the peer
// silently never rendered the node, even though its Yjs doc had it.
ab("alice", "eval", 'window.__test.insertAttachment("TEST-SGID-123")');
check(
  "Bob materialized Alice's attachment node",
  await waitEval("bob", 'window.__test.attachmentSgids().includes("TEST-SGID-123")', "bob has attachment")
);
check(
  "no Yjs update errors on Bob",
  /\btrue\b/.test(ab("bob", "eval", 'window.__test.errors().filter(e => e.includes("destructure") || e.includes("Yjs update")).length === 0'))
);
// The live `editor` object reference must not be serialized into the doc
// (excluded properties): peers used to receive editor="[object Object]".
check(
  "no editor object reference leaked into the shared doc",
  /\btrue\b/.test(ab("bob", "eval", '!window.__test.docRoot().includes("editor=")'))
);

// Both leave; the server should hold the durable doc on its own.
ab("alice", "close");
ab("bob", "close");
await sleep(800);

// A brand-new client, opened cold, must be rebuilt from the durable store.
open("carol", "Carol");
check("Carol synced", await ready("carol"));
const carolHasBoth = await waitEval(
  "carol",
  'window.__test.text().includes("ALICE-EDIT") && window.__test.text().includes("BOB-EDIT")',
  "carol loaded persisted doc"
);
check("fresh client rebuilt the document from the server (durability)", carolHasBoth);
// The late joiner materializes the attachment from the initial sync too —
// the bind-time path, not just the live-update path.
check(
  "fresh client materialized the attachment",
  await waitEval("carol", 'window.__test.attachmentSgids().includes("TEST-SGID-123")', "carol has attachment")
);

// A plain (non-collaborative) editor on the same page still creates
// attachments: binding one editor for collaboration must not disturb
// another editor's registered classes.
check(
  "plain editor on the same page still creates attachments",
  /\bok\b/.test(ab("carol", "eval", "window.__test.plainEditorAttachment()"))
);

// A re-bind (unmount + remount of the collaboration element) must keep the
// excluded properties — exclusions are recomputed per bind, and losing them
// means the next upload node's raw File aborts the Lexical->Yjs sync.
ab("carol", "eval", 'window.__test.remountCollab()');
check("carol re-synced after remount", await waitEval("carol", "window.__test.synced()", "carol re-synced"));
ab("carol", "eval", 'window.__test.insertUploadNode("rebind-probe.png")');
check(
  "upload node synced after the re-bind",
  await waitEval("carol", 'window.__test.docRoot().includes("rebind-probe.png")', "upload node in doc")
);
check(
  "re-bind kept the property exclusions (no mid-sync throw)",
  /\btrue\b/.test(ab("carol", "eval", 'window.__test.errors().filter(e => /Unexpected content type|insertUploadNode/.test(e)).length === 0'))
);
check(
  "re-bind kept the property exclusions (no File in the shared doc)",
  /\btrue\b/.test(ab("carol", "eval", '!window.__test.docRoot().includes("file=")'))
);
// Lexxy's upload tracker is a mutation listener registered BEFORE the class
// swap, keyed to the original class. Lexical buckets mutations by the
// currently registered class, so without re-keying the listener never fires,
// the uploads count stays at zero, and forms submit mid-upload. The pending
// upload node inserted above must have marked the editor invalid.
check(
  "Lexxy's upload mutation listener still fires (editor invalid while uploading)",
  /\btrue\b/.test(ab("carol", "eval", "window.__test.editorInvalidWhileUploading()"))
);

// A dying page removes its own in-flight upload placeholders (pagehide
// fires the cleanup; the DirectUpload dies with the page, so the node can
// never complete). The re-bind upload node above is still pending on
// carol; after her pagehide, a fresh client must load the document
// without it.
ab("carol", "eval", 'window.dispatchEvent(new Event("pagehide")); "fired"');
check(
  "pagehide removed the local pending upload node",
  await waitEval("carol", '!window.__test.docRoot().includes("rebind-probe.png")', "upload node removed locally")
);
ab("carol", "close");

// Zero-config: attributes only, no host wiring at all. The element creates its
// own shared consumer (defaulting to /cable), doc, and provider, and connects
// itself. It must sync the same durable document.
ab("zara", "open", `http://localhost:${PORT}/?room=${ROOM}&name=Zara&mode=zero`);
check("zero-config element connected and synced", await ready("zara"));
const zaraHasBoth = await waitEval(
  "zara",
  'window.__test.text().includes("ALICE-EDIT") && window.__test.text().includes("BOB-EDIT")',
  "zara loaded persisted doc via auto-consumer"
);
check("zero-config element loaded the document (auto-created consumer)", zaraHasBoth);

ab("zara", "close");

// Seeding: a document opened for the first time on a record with an existing
// body (the editor's server-rendered value) must adopt that content as the
// collaborative document: visible to the seeder, durable, and delivered to a
// later peer who has no local value.
const SEEDROOM = `${ROOM}-seed`;
ab("sam", "open", `http://localhost:${PORT}/?room=${SEEDROOM}&name=Sam&seedHtml=${encodeURIComponent("<p>EXISTING-BODY</p>")}`);
check("seeder synced", await ready("sam"));
check(
  "seeder kept the pre-existing content",
  await waitEval("sam", 'window.__test.text().includes("EXISTING-BODY")', "sam sees EXISTING-BODY")
);
ab("tia", "open", `http://localhost:${PORT}/?room=${SEEDROOM}&name=Tia`);
check("peer synced into the seeded doc", await ready("tia"));
check(
  "peer received the seeded content from the document (not a local value)",
  await waitEval("tia", 'window.__test.text().includes("EXISTING-BODY")', "tia sees EXISTING-BODY")
);
ab("sam", "close");
ab("tia", "close");

open("dave", "Dave");
check("Dave synced", await ready("dave"));
check(
  "abandoned upload placeholder is gone for a fresh client",
  /\btrue\b/.test(ab("dave", "eval", '!window.__test.docRoot().includes("rebind-probe.png")'))
);
// dave stays open: he authors the next scenario's orphan.

// The pagehide send can be lost (dying socket, no retransmit), leaving
// the post-crash state: an upload placeholder with no local File
// anywhere. Stage that state deterministically (dave authors the node
// file-less, so his own pagehide cleanup provably skips it) with
// witnesses already present.
open("erin", "Erin");
open("frank", "Frank");
check("Erin synced", await ready("erin"));
check("Frank synced", await ready("frank"));

ab("dave", "eval", 'window.__test.insertUploadNode("orphan-probe.png", { orphan: true })');
check(
  "orphan reached a live peer",
  await waitEval("erin", 'window.__test.docRoot().includes("orphan-probe.png")', "orphan visible to erin")
);
ab("dave", "close");

// Erin and frank each see the other in awareness: neither is alone, so
// neither may sweep — from their side, the other could be the uploader.
check(
  "erin sees company in awareness",
  await waitEval("erin", "window.__test.provider.awareness.getStates().size >= 2", "erin has company")
);
check(
  "frank sees company in awareness",
  await waitEval("frank", "window.__test.provider.awareness.getStates().size >= 2", "frank has company", 20000)
);
await sleep(27000); // past the settle window, with company present
check(
  "no sweep while another peer is present",
  /\btrue\b/.test(ab("erin", "eval", 'window.__test.docRoot().includes("orphan-probe.png")'))
);

// Frank leaves; erin becomes alone, and after the settle window the
// orphan is provably dead and swept.
ab("frank", "close");
check(
  "alone client sweeps the orphaned upload placeholder",
  await waitEval("erin", '!window.__test.docRoot().includes("orphan-probe.png")', "orphan swept", 70000)
);
ab("erin", "close");

console.log("");
if (failures > 0) {
  console.log(`FAILED: ${failures} check(s) failed`);
  process.exit(1);
}
console.log(`PASS: browser e2e (room ${ROOM})`);
process.exit(0);
