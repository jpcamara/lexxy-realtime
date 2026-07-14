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
// classes with no arguments when applying a remote update; before the
// permanent node guard, Lexxy's attachment constructor threw
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
// attachments: the constructor patch answers per active editor, so the
// collaborative editor's Guarded registration must not poison the plain
// editor's class-identity assertion.
check(
  "plain editor on the same page still creates attachments",
  /\bok\b/.test(ab("carol", "eval", "window.__test.plainEditorAttachment()"))
);

// A re-bind (unmount + remount of the collaboration element) must keep the
// excluded properties: the already-guarded classes no longer trip the
// thrower probe, so exclusions have to carry over — otherwise the next
// upload node's raw File aborts the Lexical->Yjs sync all over again.
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

ab("carol", "close");

console.log("");
if (failures > 0) {
  console.log(`FAILED: ${failures} check(s) failed`);
  process.exit(1);
}
console.log(`PASS: browser e2e (room ${ROOM})`);
process.exit(0);
