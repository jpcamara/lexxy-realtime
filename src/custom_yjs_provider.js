/**
 * Custom Yjs ActionCable Provider
 *
 * Implements a simple "dumb passthrough" protocol where the backend
 * stores and forwards base64-encoded Yjs updates without understanding them.
 *
 * Protocol:
 * - Client -> Server:
 *   - { type: "update", update: base64, client_id: number }
 *   - { type: "awareness", update: base64 }
 *
 * - Server -> Client:
 *   - { type: "sync", updates: [base64, ...] } (on subscribe)
 *   - { type: "update", update: base64 }
 *   - { type: "awareness", update: base64 }
 */

import * as Y from 'yjs';
import * as awarenessProtocol from 'y-protocols/awareness';

// Helper: Encode Uint8Array to base64
function uint8ArrayToBase64(uint8Array) {
  const binaryString = Array.from(uint8Array).map(byte => String.fromCharCode(byte)).join('');
  return btoa(binaryString);
}

// Helper: Decode base64 to Uint8Array
function base64ToUint8Array(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * options: {
 *   awareness?: Awareness
 * }
 */
export class CustomYjsProvider {
  #updateHandler;
  #awarenessUpdateHandler;
  #synced;

  constructor(
    doc,
    consumer,
    channelName,
    channelParams = {},
    options = {}
  ) {
    this.doc = doc;
    this.consumer = consumer;
    this.channelName = channelName;
    this.channelParams = channelParams;
    this.awareness = options.awareness || null;
    this.subscription = null;
    this.connected = false;
    this.#synced = false;

    this.#updateHandler = (update, origin) => {
      // Don't echo updates that came from the server
      if (origin === this) {
        return;
      }

      if (this.subscription) {
        const base64Update = uint8ArrayToBase64(update);
        this.subscription.send({
          type: 'update',
          update: base64Update,
          client_id: this.doc.clientID
        });
      }
    };

    this.#awarenessUpdateHandler = (change, origin) => {
      if (origin === this) return;

      const added = change.added || [];
      const updated = change.updated || [];
      const removed = change.removed || [];
      const changedClients = added.concat(updated).concat(removed);

      if (!this.awareness) return;

      const awarenessUpdate = awarenessProtocol.encodeAwarenessUpdate(this.awareness, changedClients);

      if (this.subscription && this.connected) {
        const base64Update = uint8ArrayToBase64(awarenessUpdate);
        const awarenessMessage = {
          type: 'awareness',
          update: base64Update
        };

        if (this.subscription.whisper) {
          this.subscription.whisper(awarenessMessage);
        } else {
          this.subscription.send(awarenessMessage);
        }
      }
    };
  }

  connect() {
    if (this.subscription) {
      return;
    }

    this.subscription = this.consumer.subscriptions.create(
      { channel: this.channelName, ...this.channelParams },
      {
        connected: () => {
          this.connected = true;
        },

        disconnected: () => {
          this.connected = false;
          this.#synced = false;
        },

        received: (data) => {
          this.#handleMessage(data);
        }
      }
    );

    this.doc.on('update', this.#updateHandler);

    if (this.awareness) {
      this.awareness.on('update', this.#awarenessUpdateHandler);
    }
  }

  disconnect() {
    if (!this.subscription) return;

    this.doc.off('update', this.#updateHandler);
    if (this.awareness) {
      this.awareness.off('update', this.#awarenessUpdateHandler);
    }

    this.consumer.subscriptions.remove(this.subscription);
    this.subscription = null;
    this.connected = false;
    this.#synced = false;
  }

  destroy() {
    this.disconnect();
  }

  get synced() {
    return this.#synced;
  }

  #handleMessage(data) {
    switch (data.type) {
      case 'sync':
        this.#handleSync(data.updates);
        break;

      case 'update':
        this.#handleUpdate(data.update);
        break;

      case 'awareness':
        this.#handleAwareness(data.update);
        break;

      default:
        console.warn('CustomYjsProvider: Unknown message type', data.type);
    }
  }

  #handleSync(updates) {
    updates.forEach((base64Update, index) => {
      const update = base64ToUint8Array(base64Update);
      Y.applyUpdate(this.doc, update, this);
    });

    this.#synced = true;
  }

  #handleUpdate(base64Update) {
    const update = base64ToUint8Array(base64Update);
    Y.applyUpdate(this.doc, update, this);
  }

  #handleAwareness(base64Update) {
    if (!this.awareness) return;

    const update = base64ToUint8Array(base64Update);
    awarenessProtocol.applyAwarenessUpdate(this.awareness, update, this);
  }
}
