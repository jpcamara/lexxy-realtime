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
  /** Configure before mounting (or after removal has settled). Active assignments throw. */
  consumer?: CableConsumer;
  doc?: import('yjs').Doc;
  provider?: CollaborationProvider;
  readonly awareness: import('y-protocols/awareness').Awareness | undefined;
  readonly status: CollaborationStatus;
  /** Replace all configuration atomically while detached or failed. */
  configure(options?: CollaborationConfiguration): void;
  /** Retry a failed setup/binding; a no-op in other states. */
  retry(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
}

export interface CollaborationConfiguration {
  consumer?: CableConsumer | null;
  doc?: import('yjs').Doc | null;
  provider?: CollaborationProvider | null;
}

/** The editor lifecycle, independent of provider.synced / transport status. */
export type CollaborationStatus = 'detached' | 'waiting' | 'starting' | 'active' | 'recovering' | 'failed';

/** Minimal provider contract; the host owns providers assigned to an element. */
export interface CollaborationProvider {
  readonly awareness: import('y-protocols/awareness').Awareness;
  readonly synced: boolean;
  readonly doc?: import('yjs').Doc;
  readonly whenSynced?: PromiseLike<unknown>;
}

export interface CollaborationErrorDetail { error: unknown; }
export interface CollaborationDesyncDetail extends CollaborationErrorDetail { recovering: boolean; }

declare global {
  interface HTMLElementEventMap {
    'lexxy-realtime:error': CustomEvent<CollaborationErrorDetail>;
    'lexxy-realtime:desync': CustomEvent<CollaborationDesyncDetail>;
  }
  interface HTMLElementTagNameMap {
    'lexxy-collaboration': Collaboration;
  }
}
