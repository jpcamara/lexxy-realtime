// The documented AnyCable client path, at runtime: YrbyProvider on an
// AnyCable ActionCable-compat consumer against a real anycable-go gateway.
// Documents converge through record-then-broadcast (RPC), and presence
// travels AnyCable whispers: client to client through the gateway, never
// touching the Ruby server. createConsumer comes from @anycable/core, the
// class @anycable/web re-exports for browsers; node has no DOM, so the
// core entry point is the one that runs here.
import * as Y from "yjs";
import { createConsumer } from "@anycable/core";
import { YrbyProvider } from "../../src/yrby_provider.js";
import { waitFor, sleep, resetDoc, check, done } from "./support.mjs";

const WS = process.env.CABLE_URL;
if (!WS) {
  console.error("FAILED: anycable_client.mjs needs CABLE_URL (the anycable-go ws URL)");
  process.exit(1);
}

const ROOM = `anyc-${process.pid}`;
await resetDoc(ROOM);

function client(name) {
  const doc = new Y.Doc();
  const provider = new YrbyProvider(doc, createConsumer(WS), "DocumentChannel", { id: ROOM });
  provider.awareness.setLocalStateField("name", name);
  provider.connect();
  return { doc, provider, text: () => doc.getText("body").toString() };
}

const a = client("Ana");
const b = client("Ben");

await waitFor("both synced", () => a.provider.synced && b.provider.synced);
check("both @anycable/web consumers synced through anycable-go", a.provider.synced && b.provider.synced);

a.doc.getText("body").insert(0, "over anycable");
await waitFor("b converges", () => b.text() === "over anycable");
check("document update recorded and relayed through the gateway", b.text() === "over anycable");

await waitFor(
  "b sees Ana's presence",
  () => [...b.provider.awareness.getStates().values()].some((s) => s.name === "Ana")
);
check(
  "presence reached the peer (awareness over AnyCable whisper)",
  [...b.provider.awareness.getStates().values()].some((s) => s.name === "Ana")
);

a.provider.destroy();
await sleep(300);
const benSeesAna = [...b.provider.awareness.getStates().values()].some((s) => s.name === "Ana");
check("presence removal propagated on destroy", !benSeesAna);

b.provider.destroy();
done(`anycable client (room ${ROOM})`);
process.exit(0);
