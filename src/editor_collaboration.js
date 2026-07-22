import {
  createBinding,
  syncLexicalUpdateToYjs,
  syncYjsChangesToLexical,
  syncCursorPositions,
  setLocalStateFocus,
  initLocalState,
} from '@lexical/yjs';
import { $getRoot, $createParagraphNode, HISTORY_MERGE_TAG, createEditor } from 'lexical';
import { Doc } from 'yjs';
import { createConsumer } from '@rails/actioncable';
import { YrbyProvider } from './yrby_provider';

// One shared Action Cable consumer for every element that isn't handed one.
// createConsumer() reads the standard `action-cable-url` meta tag (rendered by
// Rails' action_cable_meta_tag) and falls back to /cable, so a server-rendered
// element works with no host JavaScript at all. Shared so multiple editors on
// a page ride one WebSocket, like Rails' own consumer module.
let sharedConsumer;

export class Collaboration extends HTMLElement {
  #teardown = null;

  connectedCallback() {
    this.editorElement = this.closest('lexxy-editor');
    if (!this.editorElement) {
      console.error('<lexxy-collaboration> must be placed inside a <lexxy-editor>.');
      return;
    }
    this.editor = this.editorElement.editor;

    // Init now if the editor is already present, otherwise wait for it.
    if (this.editor) {
      this.#init();
    } else {
      this.editorElement.addEventListener(
        'lexxy:initialize',
        () => {
          this.editor = this.editorElement.editor;
          this.#init();
        },
        { once: true }
      );
    }
  }

  disconnectedCallback() {
    this.#teardown?.();
  }

  #init() {
    // The Yjs document id (the @lexical/yjs binding key). A dedicated attribute
    // rather than the global HTML `id`, which it used to overload.
    const id = this.getAttribute('doc-id') || 'main';
    const name = this.getAttribute('name') || 'Example User';
    const color = this.getAttribute('color') || '#958DF1';
    const channelName = this.getAttribute('channel-name') || 'SyncChannel';
    const rawParams = this.getAttribute('channel-params') || '{}';
    let channelParams;
    try {
      channelParams = typeof rawParams === 'string' ? JSON.parse(rawParams) : rawParams;
    } catch {
      console.error(
        '<lexxy-collaboration>: invalid channel-params attribute (expected JSON); using {}.',
        rawParams
      );
      channelParams = {};
    }

    // Track what we create vs. what the host supplied. A host-supplied provider
    // is the host's to manage -- it called connect(), it calls disconnect() --
    // so we must not disconnect it on teardown. Doing so also broke DOM moves:
    // moving the element fires disconnect+reconnect, and disconnecting the
    // host's provider (then reusing it without reconnecting) left it dead.
    const ownsProvider = !this.provider;
    const ownsDoc = !this.doc;
    const doc = this.doc || new Doc();
    const provider =
      this.provider ||
      new YrbyProvider(doc, this.consumer || (sharedConsumer ??= createConsumer()), channelName, channelParams);
    // A provider we created is ours to run: YrbyProvider does not
    // auto-connect. A host-supplied provider is the host's — it decides
    // when to connect.
    if (ownsProvider) provider.connect();

    // The provider owns its Awareness: it constructs its own and ignores any
    // passed in. Every presence operation here -- initLocalState,
    // setLocalStateFocus, syncLexicalUpdateToYjs, syncCursorPositions -- goes
    // through `provider`, so the re-render trigger MUST listen on this exact
    // instance. Listening on a separately-created Awareness (the old bug) meant
    // remote cursor/selection changes, which only mutate the provider's
    // instance, never triggered a re-render: a peer's caret moved only when they
    // also edited text (an awareness-only move was invisible until then).
    const awareness = provider.awareness;

    const docMap = new Map();
    docMap.set(id, doc);

    // Start the editor empty so Lexical and the Yjs collab tree align at bind
    // time. Lexxy otherwise seeds a paragraph that the binding never captures,
    // and @lexical/yjs >= 0.44 then silently refuses to sync edits. New docs are
    // seeded once the first sync confirms the doc is empty (see
    // bootstrapWhenSynced); existing docs are loaded by the Yjs->Lexical observer.
    this.editor.update(() => $getRoot().clear(), { tag: HISTORY_MERGE_TAG, discrete: true });

    const binding = bindWithLexxyNodeGuard(this.editor, () =>
      createBinding(this.editor, provider, id, doc, docMap)
    );
    patchCollabElementSplice(binding);
    const unsubscribeListeners = registerCollaborationListeners(this.editor, provider, binding);
    const cancelBootstrap = bootstrapWhenSynced(this.editor, provider, binding);

    // Remote cursors/selections are rendered by @lexical/yjs (syncCursorPositions)
    // into a positioned overlay it manages via `binding.cursorsContainer`.
    const cursorsContainer = this.#createCursorsContainer();
    binding.cursorsContainer = cursorsContainer;

    // Seed local presence (identity + focus). The local cursor's anchor/focus is
    // written to awareness by syncLexicalUpdateToYjs on every editor update, as
    // Yjs relative positions that stay correct across concurrent edits.
    //
    // `focusing` stays true for the whole session. @lexical/yjs's
    // syncCursorPositions renders a peer's caret ONLY while their `focusing` flag
    // is true, so toggling it off on editor blur (the @lexical/react default)
    // makes a collaborator vanish the moment their editor loses focus -- e.g.
    // they click another window/tab, or (when testing two windows on one machine)
    // simply whenever the other window is focused. We keep peers visible at their
    // last position for as long as they're connected; a departed peer is removed
    // by the provider's disconnect/pagehide presence removal and the awareness
    // timeout.
    initLocalState(provider, name, color, true, { name, color });
    setLocalStateFocus(provider, name, color, true, { name, color });

    // Re-render remote cursors when presence changes or the document reflows.
    const renderCursors = () => syncCursorPositions(binding, provider);
    awareness.on('update', renderCursors);
    const unsubscribeCursorRender = this.editor.registerUpdateListener(renderCursors);
    syncCursorPositions(binding, provider); // initial paint of anyone already present

    this.provider = provider;
    this.doc = doc; // expose the doc (created or host-supplied) to the host
    this.awareness = awareness; // expose the real (provider-owned) instance to the host
    this.binding = binding;
    this.#teardown = () => {
      this.#teardown = null;
      awareness.off('update', renderCursors);
      unsubscribeCursorRender();
      unsubscribeListeners();
      cancelBootstrap();
      cursorsContainer.remove();
      // Only disconnect a provider we created. A host-supplied provider is the
      // host's to disconnect; tearing it down here breaks DOM moves (which
      // reconnect and reuse it) and disconnects a provider the host may reuse.
      if (ownsProvider) {
        provider.disconnect();
        this.provider = null;
      }
      if (ownsDoc) this.doc = null;
    };
  }

  // An absolutely-positioned overlay covering the editor; @lexical/yjs positions
  // remote carets/selections within it (relative to its offsetParent).
  #createCursorsContainer() {
    const host = this.editorElement.querySelector('.lexxy-editor-container') || this.editorElement;
    if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
    const container = document.createElement('div');
    container.className = 'lexxy-collab-cursors';
    container.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
    host.appendChild(container);
    return container;
  }
}

// Lexical's built-in node types -- never need guarding, and can't be
// re-registered on a probe editor (Lexical seeds them itself).
const BUILTIN_NODE_TYPES = new Set(['root', 'text', 'linebreak', 'tab', 'paragraph']);

// @lexical/yjs's createBinding snapshots default node properties by constructing
// every registered node with NO arguments (`new klass()` in
// initializeNodeProperties). Lexxy's attachment nodes destructure their first
// parameter (`constructor({ tagName, ... }, key)`), so they throw on no-arg
// construction and abort the bind. Lexxy 0.9 ships without default parameters.
//
// Rather than require a consumer-side patch, we make those constructions tolerate
// no args. We can't wrap the class (Lexical asserts `registeredNode.klass ===
// node.constructor` on every construct, so a Proxy/foreign wrapper trips
// errorOnTypeKlassMismatch) and we can't safely probe construction on the live
// editor. So: detect the offending classes on an isolated probe editor, then for
// the bind window only, swap each into editor._nodes for an identity-preserving
// subclass that supplies `{}` when constructed with no args (exactly what `= {}`
// defaults would do). The subclass IS the registered klass during the bind, so
// the identity assertion holds; we revert immediately after, so real attachment
// creation (with real args, against the original class) is untouched. This
// replaces the consumer-side @37signals/lexxy patch.
function bindWithLexxyNodeGuard(editor, bind) {
  const nodes = editor?._nodes;
  if (!nodes || typeof nodes.forEach !== 'function') return bind();

  let throwers;
  try {
    throwers = detectNoArgThrowingNodes(nodes);
  } catch {
    // If detection fails for any reason, fall back to an unguarded bind rather
    // than break collaboration -- the original error (if any) still surfaces.
    return bind();
  }
  if (throwers.size === 0) return bind();

  const restore = [];
  for (const info of throwers) {
    const Original = info.klass;
    const Guarded = class extends Original {
      constructor(...args) {
        super(args.length === 0 || args[0] === undefined ? {} : args[0], args[1]);
      }
    };
    info.klass = Guarded;
    restore.push(() => {
      info.klass = Original;
    });
  }
  try {
    return bind();
  } finally {
    for (const undo of restore) undo();
  }
}

// Probe each non-builtin registered node on a throwaway editor (so the live
// editor's state is never touched) to find classes that throw when constructed
// with no arguments. Probing inside the probe editor's update keeps Lexical's
// active-editor + klass-identity invariants satisfied for the well-behaved nodes,
// so only genuinely no-arg-intolerant constructors are flagged.
function detectNoArgThrowingNodes(nodes) {
  const throwers = new Set();
  const candidates = [];
  nodes.forEach((info) => {
    const klass = info?.klass;
    if (typeof klass !== 'function' || typeof klass.getType !== 'function') return;
    let type;
    try {
      type = klass.getType();
    } catch {
      return;
    }
    if (!type || BUILTIN_NODE_TYPES.has(type)) return;
    candidates.push({ info, klass });
  });
  if (candidates.length === 0) return throwers;

  const probeEditor = createEditor({
    namespace: 'yrby-node-probe',
    nodes: candidates.map((c) => c.klass),
    onError: () => {},
  });
  probeEditor.update(
    () => {
      for (const { info, klass } of candidates) {
        try {
          // eslint-disable-next-line no-new
          new klass();
        } catch {
          throwers.add(info);
        }
      }
    },
    { discrete: true }
  );
  return throwers;
}

// @lexical/yjs's CollabElementNode.splice throws (dev) / appends `undefined`
// (prod) when asked to insert at an index that has no existing child and no
// collab node to insert -- which is exactly what the empty-collab-tree bootstrap
// does. Make that one case a no-op so an empty document can bind. createBinding
// builds binding.root without triggering this case, so patching the (unexported)
// CollabElementNode prototype through the live binding root -- right after the
// bind, before bootstrap/sync runs -- is in time. Guarded by a per-prototype
// flag. This replaces the consumer-side @lexical/yjs patch.
//
// Blast radius: this mutates the SHARED CollabElementNode prototype once, for
// the whole page, and is never reverted -- every @lexical/yjs consumer on the
// page sees the patched splice. It only narrows the one undefined-at-empty-index
// no-op case, so it is safe, but it is a page-global side effect by design.
function patchCollabElementSplice(binding) {
  const proto = binding?.root?.constructor?.prototype;
  if (!proto || typeof proto.splice !== 'function' || proto.__yrbySplicePatched) return;
  const original = proto.splice;
  proto.splice = function (b, index, delCount, collabNode) {
    if (this._children[index] === undefined && collabNode === undefined) return;
    return original.call(this, b, index, delCount, collabNode);
  };
  proto.__yrbySplicePatched = true;
}

// Once the provider reports its first sync, seed a brand-new (empty) document
// with an initial paragraph -- the equivalent of @lexical/react's
// CollaborationPlugin bootstrap. Doing it post-sync (not at bind time) means an
// existing document is loaded by the Yjs->Lexical observer first, so we never
// push a stray paragraph onto a doc that already has content.
// Returns a canceller: the poll interval otherwise runs forever if the element
// is torn down (or the provider never syncs) before the first sync, since `seed`
// only clears it on success.
function bootstrapWhenSynced(editor, provider, binding) {
  let done = false;
  const seed = () => {
    if (done || !provider.synced) return;
    done = true;
    clearInterval(timer);
    if (binding.root.getSharedType().length === 0) {
      // New (empty) document. Lexical won't keep the root empty, so the
      // paragraph Lexxy seeded shares the same node key in prev/next and the
      // binding never treats it as "new". Replace it with a fresh-keyed
      // paragraph in one transaction so the binding creates it in the collab
      // tree, aligning Lexical with Yjs. (Existing docs are loaded by the
      // Yjs->Lexical observer, so this only runs for a brand-new document.)
      editor.update(
        () => {
          const root = $getRoot();
          root.clear();
          root.append($createParagraphNode());
        },
        { tag: HISTORY_MERGE_TAG }
      );
    }
  };
  const timer = setInterval(seed, 50);
  if (typeof timer?.unref === 'function') timer.unref();
  return () => {
    done = true;
    clearInterval(timer);
  };
}

function registerCollaborationListeners(editor, provider, binding) {
  const unsubscribeUpdateListener = editor.registerUpdateListener(
    ({ dirtyElements, dirtyLeaves, editorState, normalizedNodes, prevEditorState, tags }) => {
      editor.getEditorState().read(() => {
        if (tags.has('skip-collab') === false) {
          syncLexicalUpdateToYjs(
            binding,
            provider,
            prevEditorState,
            editorState,
            dirtyElements,
            dirtyLeaves,
            normalizedNodes,
            tags
          );
        }
      });
    }
  );

  const observer = (events, transaction) => {
    if (transaction.origin !== binding) {
      syncYjsChangesToLexical(binding, provider, events, false);
    }
  };

  binding.root.getSharedType().observeDeep(observer);

  return () => {
    unsubscribeUpdateListener();
    binding.root.getSharedType().unobserveDeep(observer);
  };
}
