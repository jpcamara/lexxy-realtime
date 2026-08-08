// The gem's import-map assets driving the real stack with no bundler:
// the static importmap.html page pins lexical, @37signals/lexxy, and
// lexxy-realtime to the built files. Proves the three-bundle split
// shares one lexical (an attachment created through the pins lands on
// the peer) and syncs both ways.
import { execFileSync } from "node:child_process";

const PORT = process.env.PORT || 4111;
const ROOM = `imap-${process.pid}`;
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

let failures = 0;
const check = (label, ok) => {
  console.log(`${ok ? "PASS" : "FAIL"}: ${label}`);
  if (!ok) failures++;
};

const waitEval = async (session, expr, label, timeout = 15000) => {
  const end = Date.now() + timeout;
  while (Date.now() < end) {
    if (/\btrue\b/.test(ab(session, "eval", expr))) return true;
    await sleep(300);
  }
  console.log(`  (timed out: ${label})`);
  return false;
};

const url = (name) => `http://localhost:${PORT}/importmap.html?room=${ROOM}&name=${name}`;

ab("ima", "open", url("Ana"));
ab("imb", "open", url("Ben"));

check("ana synced", await waitEval("ima", "window.__test.synced()", "ana sync"));
check("ben synced", await waitEval("imb", "window.__test.synced()", "ben sync"));

ab("ima", "eval", 'document.querySelector("[contenteditable]").focus(); "f"');
ab("ima", "keyboard", "type", "import maps work");
check(
  "ana's text reaches ben",
  await waitEval("imb", 'window.__test.text().includes("import maps work")', "text to ben")
);

ab("imb", "eval", 'document.querySelector("[contenteditable]").focus(); "f"');
ab("imb", "press", "End");
ab("imb", "keyboard", "type", " both ways");
check(
  "ben's text reaches ana",
  await waitEval("ima", 'window.__test.text().includes("import maps work both ways")', "text to ana")
);

check(
  "attachment created through the pins",
  /\bok\b/.test(ab("ima", "eval", 'window.__test.insertAttachment("IMAP-SGID-1")'))
);
check(
  "attachment materialized on the peer",
  await waitEval("imb", 'window.__test.attachmentSgids().includes("IMAP-SGID-1")', "attachment to ben")
);

check(
  "no page errors",
  /\btrue\b/.test(ab("ima", "eval", "window.__test.errors().length === 0")) &&
    /\btrue\b/.test(ab("imb", "eval", "window.__test.errors().length === 0"))
);

ab("ima", "close");
ab("imb", "close");

console.log("");
if (failures > 0) {
  console.log(`FAILED: ${failures} check(s) failed`);
  process.exit(1);
}
console.log("PASS: import-map e2e");
