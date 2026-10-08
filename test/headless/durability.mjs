// Checks that the server stores an edit, keeps it after every client
// disconnects, and sends it to a new client from its stored log through
// yrby's on_load. No other client is connected when the new one joins, so
// the document can only come from the server.
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
check("server stored the edit (on_change)", (await serverText()).includes("durable content"));

// Every client leaves.
provA.destroy();
await sleep(500);
check("the server's log still has the edit after every client disconnects", (await serverText()).includes("durable content"));

// A new client gets the document from the server's log.
const docB = new Y.Doc();
const provB = new YrbyProvider(docB, rawConsumer(URL), "DocumentChannel", { id: ROOM }, { awareness: new Awareness(docB) });
provB.connect();
await waitFor("B loaded from the store", () => docB.getText("body").toString().includes("durable content"));
check("a new client loaded the stored document from the server (on_load)", docB.getText("body").toString().includes("durable content"));

provB.destroy();
done(`durability (room ${ROOM})`);
