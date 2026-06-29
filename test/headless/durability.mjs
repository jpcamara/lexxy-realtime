// Durability: an edit is recorded on the server before it's relayed, survives
// every client disconnecting, and a fresh client is rebuilt from the durable
// log (yrby on_load) -- not from a peer.
import * as Y from "yjs";
import { Awareness } from "y-protocols/awareness";
import { YrbyProvider } from "../../src/yrby_provider.js";
import { rawConsumer, URL, waitFor, sleep, serverDoc, resetDoc, check, done } from "./support.mjs";

const ROOM = `dur-${process.pid}`;
await resetDoc(ROOM);

const serverText = async () => {
  const doc = await serverDoc(ROOM);
  return doc ? doc.getText("body").toString() : "";
};
const waitServer = async (label, pred, ms = 8000) => {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    if (await pred()) return true;
    await sleep(100);
  }
  throw new Error(`TIMEOUT waiting for: ${label}`);
};

// A connects and edits.
const docA = new Y.Doc();
const provA = new YrbyProvider(docA, rawConsumer(URL), "DocumentChannel", { id: ROOM }, { awareness: new Awareness(docA) });
provA.connect();
await waitFor("A synced", () => provA.synced);
docA.getText("body").insert(0, "durable content");

await waitServer("edit recorded on the server", async () => (await serverText()).includes("durable content"));
check("edit recorded durably before relay (authoritative on_change)", (await serverText()).includes("durable content"));

// Every client leaves; the warm replica is evicted.
provA.destroy();
await sleep(500);
check("state persists after all clients disconnect (read straight from the log)", (await serverText()).includes("durable content"));

// A brand-new client must be rebuilt from the durable log by the server.
const docB = new Y.Doc();
const provB = new YrbyProvider(docB, rawConsumer(URL), "DocumentChannel", { id: ROOM }, { awareness: new Awareness(docB) });
provB.connect();
await waitFor("B rebuilt from the store", () => docB.getText("body").toString().includes("durable content"));
check("fresh client reloaded the durable doc from the server (on_load)", docB.getText("body").toString().includes("durable content"));

provB.destroy();
done(`durability (room ${ROOM})`);
