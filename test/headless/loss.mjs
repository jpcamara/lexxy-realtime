// Drops some of A's outgoing frames and incoming acks while A edits. The
// provider resends edits the server hasn't acknowledged, so every edit should
// still reach B and the server's store.
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

// Let both clients sync on a clean network, then start dropping A's frames.
const a = client();
const b = client();
await waitFor("both synced", () => a.provider.synced && b.provider.synced);

a.consumer.state.loss = 0.4; // drop 40% of A's outgoing frames
a.consumer.state.ackLoss = 0.3; // and 30% of the acks A receives
for (let i = 0; i < N; i++) {
  a.doc.getText("body").insert(a.text().length, `[${i}]`);
  await sleep(8);
}

// Stop dropping frames. The provider resends anything still unacknowledged.
a.consumer.state.loss = 0;
a.consumer.state.ackLoss = 0;
await waitFor("A has no unacknowledged edits", () => !a.provider.hasPending, 20000);

const markers = Array.from({ length: N }, (_, i) => `[${i}]`);
await waitFor("B receives the last edit", () => b.text().includes(`[${N - 1}]`), 20000);

const missingOnB = markers.filter((m) => !b.text().includes(m));
check(`all ${N} edits reached B despite dropped frames`, missingOnB.length === 0);
if (missingOnB.length) console.log(`  B missing: ${missingOnB.slice(0, 6).join(",")}...`);

await sleep(300);
const ua = Y.encodeStateAsUpdate(a.doc);
const ub = Y.encodeStateAsUpdate(b.doc);
check("A and B converged byte-for-byte", ua.length === ub.length && ua.every((x, i) => x === ub[i]));

const sdoc = await serverDoc(ROOM);
const stext = sdoc ? sdoc.getText("body").toString() : "";
check("server stored all edits", markers.every((m) => stext.includes(m)));

check("the test dropped frames and acks", a.consumer.state.droppedOut > 3 && a.consumer.state.droppedAck > 0);
console.log(`stats: droppedOut=${a.consumer.state.droppedOut} droppedAck=${a.consumer.state.droppedAck}`);

a.provider.destroy();
b.provider.destroy();
done(`reliable delivery under loss (room ${ROOM})`);
