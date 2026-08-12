// Declarations for lexxy-realtime. The package source is plain JavaScript,
// so this file is the type surface.
//
// YrbyProvider is yrby-client's ActionCableProvider bundled into dist, and
// its declarations come from yrby-client too: scripts/vendor_types.mjs
// copies the installed version's .d.ts files into types/vendor/ (the test
// suite fails if they drift), and this file re-exports them.

export {
  ActionCableProvider as YrbyProvider,
} from "./vendor/yrby-client/actioncable_provider.js";
export type {
  ActionCableProviderOptions as YrbyProviderOptions,
  CableConsumer,
  CableSubscription,
  ProviderStatus,
  StatusEvent,
} from "./vendor/yrby-client/actioncable_provider.js";

import type { CableConsumer } from "./vendor/yrby-client/actioncable_provider.js";

/**
 * Register the shared Action Cable consumer for every <lexxy-collaboration>
 * element. Call once at boot, before editors mount. Accepts the consumer or
 * a function returning one, resolved lazily on first use. A consumer
 * assigned directly on an element still wins.
 */
export declare function setConsumer(
  consumerOrFactory: CableConsumer | (() => CableConsumer),
): void;

/**
 * The <lexxy-collaboration> custom element. Place it inside a <lexxy-editor>
 * and it wires the editor's Lexical instance to a YrbyProvider. Attributes:
 * doc-id, name, color, channel-name, channel-params (JSON). Assign
 * `consumer` on the element to override the shared one from setConsumer.
 */
export declare class Collaboration extends HTMLElement {
  consumer?: CableConsumer;
  connectedCallback(): void;
  disconnectedCallback(): void;
}
