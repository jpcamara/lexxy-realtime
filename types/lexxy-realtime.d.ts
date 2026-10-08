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
import type { Doc } from "yjs";
import type { Awareness } from "y-protocols/awareness";

/**
 * Sets the Action Cable consumer that every <yrby-document> on the page
 * uses (YrbyDocumentElement.consumer). Call once at boot, before editors
 * mount. A function is called the first time a <yrby-document> needs a
 * consumer, and its result is reused.
 */
export declare function setConsumer(
  consumerOrFactory: CableConsumer | (() => CableConsumer),
): void;

/**
 * A Yjs provider assigned by the host. y-websocket and Hocuspocus
 * providers fit this shape.
 */
export interface CollaborationProvider {
  awareness: Awareness;
  synced: boolean;
  whenSynced?: Promise<unknown>;
  doc?: Doc;
}

/** The detail of the `lexxy-realtime:desync` event. */
export interface DesyncDetail {
  /** What the remote apply threw. */
  error: unknown;
  /**
   * True when the element will rebuild from a new yrby session. False with
   * a host-supplied provider, where the host has to recover.
   */
  recovering: boolean;
}

/**
 * The <lexxy-collaboration> custom element. Place it inside a
 * <lexxy-editor>. By default it binds the editor to the session of its
 * closest <yrby-document>. To use another provider, assign `doc` and
 * `provider` before the element connects. Attributes: doc-id, name, color.
 */
export declare class Collaboration extends HTMLElement {
  /** The bound doc, or the one the host assigned. */
  get doc(): Doc | null;
  set doc(doc: Doc | null | undefined);
  /** The bound provider, or the one the host assigned. */
  get provider(): CollaborationProvider | null;
  set provider(provider: CollaborationProvider | null | undefined);
  /** The bound provider's Awareness, while the editor is bound. */
  get awareness(): Awareness | undefined;
  connectedCallback(): void;
  disconnectedCallback(): void;
}

declare global {
  interface HTMLElementEventMap {
    "lexxy-realtime:desync": CustomEvent<DesyncDetail>;
  }
  interface DocumentEventMap {
    "lexxy-realtime:desync": CustomEvent<DesyncDetail>;
  }
}
