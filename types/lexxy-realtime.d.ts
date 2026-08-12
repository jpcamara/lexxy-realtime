// Declarations for lexxy-realtime. The package source is plain JavaScript,
// so this file is the type surface. YrbyProvider is yrby-client's
// ActionCableProvider re-exported under this package's name, and its types
// come from the yrby-client dependency the same way.

export { ActionCableProvider as YrbyProvider } from "yrby-client";
export type {
  ActionCableProviderOptions as YrbyProviderOptions,
  CableConsumer,
  CableSubscription,
  ProviderStatus,
  StatusEvent,
} from "yrby-client";

import type { CableConsumer } from "yrby-client";

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
