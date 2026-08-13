// Real-upload e2e: a PNG goes through Lexxy's own upload pipeline
// (contents.uploadFiles -> DirectUpload -> the server's ActiveStorage
// direct-upload endpoint -> disk service), and the attachment that lands in
// the shared document materializes for a live peer and a late joiner, both
// of whom render actual pixels from the served blob URL.
//
// Assumes the test server is running on PORT (run.mjs handles that) and the
// browser bundle is built (npm run build:test).
import { execFileSync } from "node:child_process";

const PORT = process.env.PORT || 4111;
const ROOM = `upl-${process.pid}`;
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

const CABLE = process.env.CABLE_WS_URL ? `&cable=${encodeURIComponent(process.env.CABLE_WS_URL)}` : "";
const open = (session, name) => ab(session, "open", `http://localhost:${PORT}/?room=${ROOM}&name=${name}${CABLE}`);
const ready = (session) => waitEval(session, "!!(window.__test && window.__test.synced())", "ready+synced");

async function waitEval(session, js, label, ms = 15000) {
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

open("alice", "Alice");
check("Alice synced", await ready("alice"));
open("bob", "Bob");
check("Bob synced", await ready("bob"));

// Alice uploads a real PNG through the editor's own pipeline.
ab("alice", "eval", 'window.__test.uploadPng("real-upload.png")');
check(
  "upload finished: Alice's attachment carries a real sgid",
  await waitEval("alice", "window.__test.attachmentSgids().length > 0", "alice sgid present")
);
check(
  "Alice renders the served blob (real pixels, ActiveStorage URL)",
  await waitEval(
    "alice",
    '(() => { const i = window.__test.renderedImage(); return !!i && i.naturalWidth > 0 && String(i.src).includes("/rails/active_storage/"); })()',
    "alice image decoded from blob URL"
  )
);

// The attachment materializes for the live peer with the same real bytes.
check(
  "Bob received the attachment node with the sgid",
  await waitEval("bob", "window.__test.attachmentSgids().length > 0", "bob sgid present")
);
check(
  "Bob renders the served blob (real pixels)",
  await waitEval(
    "bob",
    '(() => { const i = window.__test.renderedImage(); return !!i && i.naturalWidth > 0 && String(i.src).includes("/rails/active_storage/"); })()',
    "bob image decoded from blob URL"
  )
);

// No zombie upload placeholder remains anywhere once the upload completed.
check(
  "no upload placeholder left in the shared doc",
  await waitEval("bob", '!window.__test.docRoot().includes("attachment_upload")', "no upload node in doc")
);

ab("alice", "close");
ab("bob", "close");

// A late joiner rebuilds from the server and still renders the real image.
open("carol", "Carol");
check("late joiner synced", await ready("carol"));
check(
  "late joiner materialized the attachment from the durable doc",
  await waitEval("carol", "window.__test.attachmentSgids().length > 0", "carol sgid present")
);
check(
  "late joiner renders the served blob (real pixels)",
  await waitEval(
    "carol",
    '(() => { const i = window.__test.renderedImage(); return !!i && i.naturalWidth > 0 && String(i.src).includes("/rails/active_storage/"); })()',
    "carol image decoded from blob URL"
  )
);
ab("carol", "close");

if (failures > 0) {
  console.log(`\nFAILED: ${failures} check(s) failed`);
  process.exit(1);
}
console.log(`\nPASS: real uploads e2e (room ${ROOM})`);
