import { Doc } from 'yjs';
import { createConsumer } from '@rails/actioncable';
import { YrbyProvider } from './yrby_provider.js';
import { Cleanup } from './cleanup.js';
import { Lifecycle } from './lifecycle.js';

let sharedConsumer;
let configuredConsumer;
// Removed editors can remount before their final acknowledgment arrives. Reuse
// that draining connection instead of opening a duplicate cable subscription.
const drainingConnections = new WeakMap();

export function validateConsumer(consumer) {
  if (typeof consumer?.subscriptions?.create !== 'function') {
    throw new TypeError('Expected an ActionCable-compatible consumer with subscriptions.create().');
  }
  return consumer;
}

export function setConsumer(consumerOrFactory) {
  if (typeof consumerOrFactory !== 'function') validateConsumer(consumerOrFactory);
  configuredConsumer = consumerOrFactory;
}

function resolveConsumer() {
  if (typeof configuredConsumer === 'function') {
    // Do not cache an invalid factory result; a later mount can retry.
    configuredConsumer = validateConsumer(configuredConsumer());
  }
  return configuredConsumer || (sharedConsumer ??= createConsumer());
}

export function validateDocument(doc) {
  if (!(doc instanceof Doc) || doc.isDestroyed) {
    throw new TypeError('Expected a live Y.Doc from the same copy of yjs as lexxy-realtime.');
  }
}

export function validateProvider(provider, doc) {
  const awareness = provider?.awareness;
  if (!awareness || ['on', 'off', 'getStates', 'getLocalState', 'setLocalState'].some(method => typeof awareness[method] !== 'function')
      || typeof provider.synced !== 'boolean') {
    throw new TypeError('Expected a Yjs provider with awareness and a boolean synced property.');
  }
  const providerDoc = provider.doc || awareness.doc;
  if (doc && ((providerDoc && providerDoc !== doc) || (awareness.doc && awareness.doc !== doc))) {
    throw new TypeError('The collaboration document, provider and awareness must use the same Y.Doc.');
  }
}

// Transport lifetime is independent of the editor binding. A removed editor
// stops observing immediately; an owned connection drains its queued edits
// before destroying its document. A host-supplied provider stays host-owned.
export function openConnection({ doc: suppliedDoc, provider: suppliedProvider, consumer, channelName, channelParams }) {
  if (suppliedProvider) validateProvider(suppliedProvider, suppliedDoc);
  if (suppliedDoc) validateDocument(suppliedDoc);
  const cable = suppliedProvider ? null : validateConsumer(consumer || resolveConsumer());
  const key = JSON.stringify([channelName, channelParams]);
  const draining = cable && drainingConnections.get(cable)?.get(key);
  if (draining && (suppliedDoc ? draining.doc === suppliedDoc : draining.canRecover)) {
    draining.reclaim();
    return draining;
  }
  const doc = suppliedDoc || suppliedProvider?.doc || suppliedProvider?.awareness.doc || new Doc();
  const ownsDoc = !suppliedDoc && !suppliedProvider;
  const ownsProvider = !suppliedProvider;
  validateDocument(doc);
  const cleanup = new Cleanup();
  if (ownsDoc) cleanup.add(() => doc.destroy());
  let provider;
  try {
    provider = suppliedProvider || new YrbyProvider(doc, cable, channelName, {
      ...channelParams,
      // Rails identifies subscriptions by their complete params. Separate
      // local documents need separate confirmations on a shared consumer.
      lexxy_realtime_client_id: doc.clientID,
    });
    if (ownsProvider) cleanup.add(() => provider.destroy());
    validateProvider(provider, doc);
  } catch (error) {
    cleanup.close();
    throw error;
  }
  const lifecycle = new Lifecycle('Connection', 'open', {
    open: { close: 'closing' },
    closing: { drain: 'draining', finish: 'closed' },
    draining: { reclaim: 'open', finish: 'closed' },
    closed: {},
  });
  let timer;
  const forget = () => {
    clearInterval(timer);
    const pool = cable && drainingConnections.get(cable);
    if (pool?.get(key) === connection) pool.delete(key);
  };
  cleanup.add(forget);
  const connection = {
    doc, provider,
    canRecover: ownsDoc && ownsProvider,
    reclaim() {
      lifecycle.transition('reclaim');
      forget();
    },
    connect() { if (lifecycle.phase === 'open' && ownsProvider) provider.connect(); },
    close({ discard = false } = {}) {
      if (lifecycle.phase !== 'open') return;
      lifecycle.transition('close');
      if (!ownsProvider) { lifecycle.transition('finish'); cleanup.close(); return; }
      // Removing presence must not prevent the rest of teardown.
      const presence = new Cleanup();
      presence.add(() => provider.awareness.setLocalState(null));
      presence.close();
      if (!discard && provider.hasPending) {
        lifecycle.transition('drain');
        let pool = drainingConnections.get(cable);
        if (!pool) drainingConnections.set(cable, pool = new Map());
        pool.set(key, connection);
        timer = setInterval(() => {
          if (lifecycle.phase !== 'draining' || provider.hasPending) return;
          lifecycle.transition('finish');
          cleanup.close();
        }, 100);
        timer.unref?.();
      } else {
        lifecycle.transition('finish');
        cleanup.close();
      }
    },
  };
  return connection;
}
