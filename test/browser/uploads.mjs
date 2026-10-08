// Uploads e2e. A PNG goes through Lexxy's own upload code: contents.uploadFiles,
// then DirectUpload, then the server's Active Storage direct upload endpoint
// and disk service. The attachment must appear for a connected peer and for a
// late joiner, and both must load the image from the served blob URL.
//
// Expects the test server on PORT (run.mjs starts it) and a built browser
// bundle (npm run build:test).
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

execFileSync("curl", ["-s", "-X", "POST", `http://localhost:${PORT}/reset/${ROOM}:body`]);

open("alice", "Alice");
check("Alice synced", await ready("alice"));
open("bob", "Bob");
check("Bob synced", await ready("bob"));

// Alice uploads a PNG through the editor's upload code.
ab("alice", "eval", 'window.__test.uploadPng("real-upload.png")');
check(
  "upload finished and Alice's attachment has an sgid",
  await waitEval("alice", "window.__test.attachmentSgids().length > 0", "alice sgid present")
);
check(
  "Alice's image loads from the Active Storage blob URL",
  await waitEval(
    "alice",
    '(() => { const i = window.__test.renderedImage(); return !!i && i.naturalWidth > 0 && String(i.src).includes("/rails/active_storage/"); })()',
    "alice image decoded from blob URL"
  )
);

// Bob gets the same attachment and image.
check(
  "Bob received the attachment with its sgid",
  await waitEval("bob", "window.__test.attachmentSgids().length > 0", "bob sgid present")
);
check(
  "Bob's image loads from the blob URL",
  await waitEval(
    "bob",
    '(() => { const i = window.__test.renderedImage(); return !!i && i.naturalWidth > 0 && String(i.src).includes("/rails/active_storage/"); })()',
    "bob image decoded from blob URL"
  )
);

// After the upload completes, the shared document has no upload placeholder.
check(
  "no upload placeholder left in the shared doc",
  await waitEval("bob", '!window.__test.docRoot().includes("attachment_upload")', "no upload node in doc")
);

ab("alice", "close");
ab("bob", "close");

// A late joiner loads the document from the server and shows the image.
open("carol", "Carol");
check("late joiner synced", await ready("carol"));
check(
  "late joiner has the attachment from the stored document",
  await waitEval("carol", "window.__test.attachmentSgids().length > 0", "carol sgid present")
);
check(
  "late joiner's image loads from the blob URL",
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
console.log(`\nPASS: uploads e2e (room ${ROOM})`);
