// Headless test harness: drives the real YrbLiteProvider (from src/) against the
// yrb-lite test server with no DOM. Provides a minimal raw-WebSocket ActionCable
// consumer with an injectable lossy network, plus small assertion helpers.
import * as Y from "yjs";

export const PORT = process.env.PORT || 4111;
export const BASE = `http://localhost:${PORT}`;
export const URL = `ws://localhost:${PORT}/cable`;

// Minimal ActionCable consumer over a raw WebSocket. `net` is a mutable knob the
// tests use to simulate loss: { loss: 0..1, blackhole: bool } drop OUTBOUND
// frames; { ackLoss: 0..1 } drops INBOUND acks. Counters report what was dropped.
export function rawConsumer(url, net = {}) {
  const state = { loss: 0, blackhole: false, ackLoss: 0, droppedOut: 0, droppedAck: 0, ...net };
  const subs = [];
  let welcomed = false;
  const ws = new WebSocket(url, ["actioncable-v1-json"]);
  const subscribe = (s) => ws.send(JSON.stringify({ command: "subscribe", identifier: s.identifier }));
  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.type === "welcome") {
      welcomed = true;
      subs.forEach(subscribe);
    } else if (msg.type === "confirm_subscription") {
      subs.find((s) => s.identifier === msg.identifier)?.connected?.();
    } else if (msg.type === "ping" || msg.type === "disconnect") {
      // ignore
    } else if (msg.message !== undefined) {
      if (msg.message?.ack !== undefined && Math.random() < state.ackLoss) {
        state.droppedAck++;
        return;
      }
      subs.find((s) => s.identifier === msg.identifier)?.received?.(msg.message);
    }
  };
  const consumer = {
    state,
    subscriptions: {
      create(params, mixin) {
        const identifier = JSON.stringify(params);
        const sub = Object.assign(
          {
            identifier,
            send(data) {
              if (state.blackhole || Math.random() < state.loss) {
                state.droppedOut++;
                return true;
              }
              ws.send(JSON.stringify({ command: "message", identifier, data: JSON.stringify(data) }));
              return true;
            },
            unsubscribe() {
              ws.send(JSON.stringify({ command: "unsubscribe", identifier }));
            },
          },
          mixin
        );
        subs.push(sub);
        if (welcomed && ws.readyState === WebSocket.OPEN) subscribe(sub);
        return sub;
      },
      remove(sub) {
        sub.unsubscribe?.();
        const i = subs.indexOf(sub);
        if (i >= 0) subs.splice(i, 1);
      },
    },
    close() {
      ws.close();
    },
  };
  return consumer;
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function waitFor(label, pred, ms = 8000) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    if (pred()) return true;
    await sleep(50);
  }
  throw new Error(`TIMEOUT waiting for: ${label}`);
}

// Server-side durable state for a doc key, as a fresh Y.Doc (or null).
export async function serverDoc(room) {
  const res = await fetch(`${BASE}/content/${room}`);
  const { state } = await res.json();
  if (!state) return null;
  const doc = new Y.Doc();
  Y.applyUpdate(doc, Uint8Array.from(atob(state), (c) => c.charCodeAt(0)));
  return doc;
}

export const resetDoc = (room) => fetch(`${BASE}/reset/${room}`, { method: "POST" });

let failures = 0;
export const check = (label, ok) => {
  console.log(`${ok ? "ok" : "FAIL"}: ${label}`);
  if (!ok) failures++;
};
export const done = (label) => {
  console.log("");
  if (failures > 0) {
    console.log(`FAILED: ${failures} check(s) failed`);
    process.exit(1);
  }
  console.log(`PASS: ${label}`);
  process.exit(0);
};
