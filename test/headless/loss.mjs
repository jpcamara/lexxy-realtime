// Reliable delivery under message loss: with a fraction of A's outbound frames
// and inbound acks dropped, every acknowledged edit must still reach B and the
// durable store -- recovered by the provider's retransmit, not luck.
import * as Y from "yjs";
import { Awareness } from "y-protocols/awareness";
import { YrbyProvider } from "../../src/yrby_provider.js";
import { rawConsumer, URL, waitFor, sleep, serverDoc, resetDoc, check, done } from "./support.mjs";

const ROOM = `loss-${process.pid}`;
const N = 40;
await resetDoc(ROOM);

function client(net = {}) {
  const doc = new Y.Doc();
  const consumer = rawConsumer(URL, net);
  const provider = new YrbyProvider(doc, consumer, "DocumentChannel", { id: ROOM }, { awareness: new Awareness(doc), resendInterval: 150 });
  provider.connect();
  return { doc, consumer, provider, text: () => doc.getText("body").toString() };
}

// Sync the handshake cleanly, then turn A's network hostile.
const a = client();
const b = client();
await waitFor("both synced", () => a.provider.synced && b.provider.synced);

a.consumer.state.loss = 0.4; // drop 40% of A's outbound frames
a.consumer.state.ackLoss = 0.3; // and 30% of A's inbound acks
for (let i = 0; i < N; i++) {
  a.doc.getText("body").insert(a.text().length, `[${i}]`);
  await sleep(8);
}

// Heal the network; the reliable layer drains whatever is still outstanding.
a.consumer.state.loss = 0;
a.consumer.state.ackLoss = 0;
await waitFor("A's queue drains (all edits acked)", () => !a.provider.hasPending, 20000);

const markers = Array.from({ length: N }, (_, i) => `[${i}]`);
await waitFor("B receives the last edit", () => b.text().includes(`[${N - 1}]`), 20000);

const missingOnB = markers.filter((m) => !b.text().includes(m));
check(`every one of ${N} edits survived loss and reached B`, missingOnB.length === 0);
if (missingOnB.length) console.log(`  B missing: ${missingOnB.slice(0, 6).join(",")}...`);

await sleep(300);
const ua = Y.encodeStateAsUpdate(a.doc);
const ub = Y.encodeStateAsUpdate(b.doc);
check("A and B converged byte-for-byte", ua.length === ub.length && ua.every((x, i) => x === ub[i]));

const sdoc = await serverDoc(ROOM);
const stext = sdoc ? sdoc.getText("body").toString() : "";
check("server holds all edits durably", markers.every((m) => stext.includes(m)));

check("loss was actually exercised", a.consumer.state.droppedOut > 3 && a.consumer.state.droppedAck > 0);
console.log(`stats: droppedOut=${a.consumer.state.droppedOut} droppedAck=${a.consumer.state.droppedAck}`);

a.provider.destroy();
b.provider.destroy();
done(`reliable delivery under loss (room ${ROOM})`);
