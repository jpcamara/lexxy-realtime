// yrb-lite provider for Yjs over ActionCable / AnyCable.
//
// Speaks the standard y-websocket sync protocol that the `yrb-lite` Rails gem
// (YrbLite::Sync) implements, and layers yrb-lite's reliable-delivery on top so
// an acknowledged edit can't be silently lost on a flaky connection. It is a
// drop-in replacement for the older CustomYjsProvider: same
// `(doc, consumer, channelName, channelParams, { awareness })` shape, same
// `connect()` / `disconnect()` / `synced` surface.
//
// Reliable delivery (document updates only):
//   * Each outgoing batch carries an "id"; yrb-lite replies `{ ack: <id> }` once
//     it has accepted the update (recorded in audit mode, applied in fast mode).
//   * "Sync since last ack": the unacknowledged local updates are kept in a
//     queue and sent as their MERGE -- one causally-complete delta -- so the
//     server never sees an internal gap. The id is the highest sequence in the
//     batch, so a single ack cumulatively confirms everything up to it.
//   * Retransmit on a timer and on reconnect until the ack lands; idempotent
//     CRDT apply makes resends free.
//
// Awareness/presence stays fire-and-forget. Against a server that doesn't
// implement acks the provider warns once and falls back to plain delivery, and
// `reliable: false` opts out entirely. Unlike the demo build, the constructor
// does NOT auto-connect: the host wires the editor binding first and then calls
// `connect()`.
import * as encoding from "lib0/encoding";
import * as decoding from "lib0/decoding";
import * as Y from "yjs";
import {
  readSyncMessage,
  messageYjsSyncStep2,
  writeSyncStep1,
  writeSyncStep2,
  writeUpdate,
} from "y-protocols/sync";
import {
  encodeAwarenessUpdate,
  applyAwarenessUpdate,
  removeAwarenessStates,
  Awareness,
} from "y-protocols/awareness";
import { readAuthMessage } from "y-protocols/auth";
import { publish, subscribe, unsubscribe } from "lib0/broadcastchannel";

export const MessageType = { Sync: 0, Awareness: 1, Auth: 2, QueryAwareness: 3 };

const toBase64 = (bin) => btoa(Array.from(bin, (b) => String.fromCharCode(b)).join(""));
const fromBase64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

const messageHandlers = {
  [MessageType.Sync]: (encoder, decoder, provider, emitSynced) => {
    encoding.writeVarUint(encoder, MessageType.Sync);
    const syncMessageType = readSyncMessage(decoder, encoder, provider.doc, provider);
    if (emitSynced && syncMessageType === messageYjsSyncStep2 && !provider.synced) {
      provider.synced = true;
    }
  },
  [MessageType.QueryAwareness]: (encoder, _decoder, provider) => {
    encoding.writeVarUint(encoder, MessageType.Awareness);
    encoding.writeVarUint8Array(
      encoder,
      encodeAwarenessUpdate(provider.awareness, Array.from(provider.awareness.getStates().keys()))
    );
  },
  [MessageType.Awareness]: (_encoder, decoder, provider) => {
    applyAwarenessUpdate(provider.awareness, decoding.readVarUint8Array(decoder), provider);
  },
  [MessageType.Auth]: (_encoder, decoder, provider) => {
    readAuthMessage(decoder, provider.doc, (_ydoc, reason) =>
      console.warn(`Permission denied to access ${provider.channelName}.\n${reason}`)
    );
  },
};

export class YrbLiteProvider {
  constructor(
    doc,
    consumer,
    channelName,
    channelParams = {},
    {
      awareness = new Awareness(doc),
      disableBc = true,
      reliable = true,
      resendInterval = 1000,
      maxUnconfirmedResends = 8,
    } = {}
  ) {
    this.doc = doc;
    this.consumer = consumer;
    this.channelName = channelName;
    this.channelParams = channelParams;
    this.awareness = awareness;
    this.disableBc = disableBc;
    this.bcChannelName = `${channelName}_${Object.entries(channelParams)
      .map(([k, v]) => `${k}-${v}`)
      .join("_")}`;
    this.subscription = null;
    this.bcconnected = false;
    this._synced = false;

    // Reliable-delivery state.
    this.reliable = reliable;
    this.resendInterval = resendInterval;
    this.maxUnconfirmedResends = maxUnconfirmedResends;
    this.pending = []; // unacked local updates: [{ seq, update }], in order
    this.nextSeq = 1;
    this.everAcked = false;
    this._resendsSinceProgress = 0;
    this._serverConnected = false;
    this._resendTimer = undefined;

    this._updateHandler = (update, origin) => {
      if (origin === this) return; // don't echo updates we applied from the server
      if (this.reliable) {
        this.pending.push({ seq: this.nextSeq++, update });
        this.flushToServer();
      } else {
        this.send(this._syncUpdateFrame(update));
      }
    };

    this._awarenessUpdateHandler = ({ added, updated, removed }) => {
      const changed = added.concat(updated).concat(removed);
      const encoder = encoding.createEncoder();
      encoding.writeVarUint(encoder, MessageType.Awareness);
      encoding.writeVarUint8Array(encoder, encodeAwarenessUpdate(this.awareness, changed));
      this.send(encoding.toUint8Array(encoder), { whisper: true }); // presence: fire-and-forget
    };

    this._bcSubscriber = (data, origin) => {
      if (origin === this) return;
      const reply = this._process(new Uint8Array(data), false);
      if (encoding.length(reply) > 1) publish(this.bcChannelName, encoding.toUint8Array(reply), this);
    };

    this.doc.on("update", this._updateHandler);
    this.awareness.on("update", this._awarenessUpdateHandler);
    // No auto-connect: the host calls connect() after wiring the editor binding.
  }

  get synced() {
    return this._synced;
  }

  set synced(state) {
    if (this._synced !== state) this._synced = state;
  }

  connect() {
    if (this.subscription) return;

    const provider = this;
    this._synced = false;
    this.subscription = this.consumer.subscriptions.create(
      { channel: this.channelName, ...this.channelParams },
      {
        received(message) {
          // Reliable-delivery ack: confirm and prune the local queue.
          if (message && message.ack !== undefined) {
            provider.onAck(message.ack);
            return;
          }
          const payload = message && (message.m || message.update);
          if (typeof payload !== "string") return;
          const reply = provider._process(fromBase64(payload), true);
          if (encoding.length(reply) > 1) provider.send(encoding.toUint8Array(reply));
        },
        connected() {
          provider._serverConnected = true;
          // Opening handshake: SyncStep1 + local awareness (fire-and-forget).
          const sync = encoding.createEncoder();
          encoding.writeVarUint(sync, MessageType.Sync);
          writeSyncStep1(sync, provider.doc);
          provider.send(encoding.toUint8Array(sync));
          if (provider.awareness.getLocalState() !== null) {
            const aw = encoding.createEncoder();
            encoding.writeVarUint(aw, MessageType.Awareness);
            encoding.writeVarUint8Array(
              aw,
              encodeAwarenessUpdate(provider.awareness, [provider.doc.clientID])
            );
            provider.send(encoding.toUint8Array(aw));
          }
          // Reconnect recovery: resend any unacked tail and resume the timer.
          provider.flushToServer();
          provider.startResendTimer();
        },
        disconnected() {
          provider._serverConnected = false;
          provider._synced = false;
          provider.stopResendTimer(); // queue is kept for reconnect
          removeAwarenessStates(
            provider.awareness,
            Array.from(provider.awareness.getStates().keys()).filter((c) => c !== provider.doc.clientID),
            provider
          );
        },
      }
    );

    this._connectBc();
  }

  disconnect() {
    if (!this.subscription) return;
    this.stopResendTimer();
    this._serverConnected = false;
    this._disconnectBc();
    this.consumer.subscriptions.remove(this.subscription);
    this.subscription = null;
    this._synced = false;
  }

  destroy() {
    this.disconnect();
    this.doc.off("update", this._updateHandler);
    this.awareness.off("update", this._awarenessUpdateHandler);
  }

  // -- Reliable delivery ----------------------------------------------------

  // Send the whole unacked tail as one merged delta ("sync since last ack").
  flushToServer() {
    if (this.pending.length === 0) return;
    const merged = Y.mergeUpdates(this.pending.map((p) => p.update));
    const id = this.pending[this.pending.length - 1].seq; // cumulative: highest seq in batch
    this.send(this._syncUpdateFrame(merged), { id });
  }

  // A `{ ack: id }` cumulatively confirms every queued update with seq <= id.
  onAck(id) {
    this.everAcked = true;
    this._resendsSinceProgress = 0;
    this.pending = this.pending.filter((p) => p.seq > id);
  }

  // Periodic resend of the unacked tail while connected. The first round-trip
  // sets everAcked; if we keep resending on a live connection and never get an
  // ack, the server doesn't support them, so warn once and fall back.
  onResendTick() {
    if (!this._serverConnected || this.pending.length === 0) return;
    if (!this.everAcked && ++this._resendsSinceProgress > this.maxUnconfirmedResends) {
      console.warn(
        `[yrb-lite] no acks from ${this.channelName} after ${this.maxUnconfirmedResends} ` +
          "resends; server does not support reliable delivery. Falling back to fire-and-forget."
      );
      this.reliable = false;
      this.pending = [];
      this.stopResendTimer();
      return;
    }
    this.flushToServer();
  }

  startResendTimer() {
    if (this._resendTimer || !this.reliable) return;
    this._resendTimer = setInterval(() => this.onResendTick(), this.resendInterval);
    if (this._resendTimer && typeof this._resendTimer.unref === "function") this._resendTimer.unref();
  }

  stopResendTimer() {
    if (this._resendTimer) clearInterval(this._resendTimer);
    this._resendTimer = undefined;
  }

  // -- Wire helpers ---------------------------------------------------------

  _syncUpdateFrame(update) {
    const encoder = encoding.createEncoder();
    encoding.writeVarUint(encoder, MessageType.Sync);
    writeUpdate(encoder, update);
    return encoding.toUint8Array(encoder);
  }

  send(frame, { whisper = false, id = undefined } = {}) {
    if (!this.subscription) {
      if (this.bcconnected) publish(this.bcChannelName, frame, this);
      return; // not connected yet; reliable updates stay queued and flush on connect
    }
    const update = toBase64(frame);
    const payload = id === undefined ? { update } : { update, id };
    if (whisper && typeof this.subscription.whisper === "function") {
      this.subscription.whisper(payload);
    } else {
      this.subscription.send(payload);
    }
    if (this.bcconnected) publish(this.bcChannelName, frame, this);
  }

  _process(frame, emitSynced) {
    const decoder = decoding.createDecoder(frame);
    const encoder = encoding.createEncoder();
    const messageType = decoding.readVarUint(decoder);
    const handler = messageHandlers[messageType];
    if (handler) handler(encoder, decoder, this, emitSynced, messageType);
    else console.error("[yrb-lite] unable to handle message type", messageType);
    return encoder;
  }

  _connectBc() {
    if (this.disableBc) return;
    if (!this.bcconnected) {
      subscribe(this.bcChannelName, this._bcSubscriber);
      this.bcconnected = true;
    }
    const step1 = encoding.createEncoder();
    encoding.writeVarUint(step1, MessageType.Sync);
    writeSyncStep1(step1, this.doc);
    publish(this.bcChannelName, encoding.toUint8Array(step1), this);

    const step2 = encoding.createEncoder();
    encoding.writeVarUint(step2, MessageType.Sync);
    writeSyncStep2(step2, this.doc);
    publish(this.bcChannelName, encoding.toUint8Array(step2), this);

    const query = encoding.createEncoder();
    encoding.writeVarUint(query, MessageType.QueryAwareness);
    publish(this.bcChannelName, encoding.toUint8Array(query), this);

    const state = encoding.createEncoder();
    encoding.writeVarUint(state, MessageType.Awareness);
    encoding.writeVarUint8Array(state, encodeAwarenessUpdate(this.awareness, [this.doc.clientID]));
    publish(this.bcChannelName, encoding.toUint8Array(state), this);
  }

  _disconnectBc() {
    const encoder = encoding.createEncoder();
    encoding.writeVarUint(encoder, MessageType.Awareness);
    encoding.writeVarUint8Array(
      encoder,
      encodeAwarenessUpdate(this.awareness, [this.doc.clientID], new Map())
    );
    this.send(encoding.toUint8Array(encoder));
    if (this.bcconnected) {
      unsubscribe(this.bcChannelName, this._bcSubscriber);
      this.bcconnected = false;
    }
  }
}
