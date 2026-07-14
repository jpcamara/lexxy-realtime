import {
  createBinding,
  syncLexicalUpdateToYjs,
  syncYjsChangesToLexical,
  syncCursorPositions,
  setLocalStateFocus,
  initLocalState,
} from '@lexical/yjs';
import { $getEditor, $getRoot, $createParagraphNode, HISTORY_MERGE_TAG, createEditor } from 'lexical';
import { Doc } from 'yjs';
import { YrbyProvider } from './yrby_provider';

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
    const doc = this.doc || new Doc();
    const provider =
      this.provider || new YrbyProvider(doc, this.consumer, channelName, channelParams);

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

    const excludedProperties = guardLexxyNodes(this.editor);
    const binding = createBinding(this.editor, provider, id, doc, docMap, excludedProperties);
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

// @lexical/yjs constructs registered node classes with NO arguments in two
// places: createBinding's initializeNodeProperties (snapshotting default
// property values at bind time), and again whenever a peer's node is
// materialized from a remote Yjs update. Lexxy's attachment nodes
// destructure their first parameter (`constructor({ tagName, ... }, key)`),
// so a no-arg construction throws. At bind time that aborted the bind.
// After bind it silently dropped every remote attachment: the peer's Yjs
// doc had the node, the editor never showed it, and each update logged
// "Cannot destructure property 'tagName' of 'undefined'". Lexxy 0.9 ships
// without default parameters.
//
// The guard replaces each offending class in editor._nodes with an
// identity-preserving subclass that supplies `{}` when constructed with no
// args (what `= {}` defaults would do). The replacement is permanent — an
// earlier version swapped for the bind window only, which fixed the
// snapshot and left remote materialization broken. Two details make the
// permanent swap safe:
//
// - Lexical asserts `registeredNode.klass === node.constructor`, and
//   Lexxy's own statics construct through hardcoded class references
//   (`new ActionTextAttachmentNode(...)` in clone/importJSON). Pointing the
//   original prototype's `constructor` at the subclass makes those
//   instances report the registered class, so the assertion holds on both
//   creation paths.
// - The subclass is memoized per class, so several editors on one page all
//   register the same subclass and the constructor patch never flaps.
//
// The same classes also get an excluded-properties entry, because Lexxy
// attachment nodes carry plain properties that must not sync:
//
// - `editor` is a live object reference; it serialized as the string
//   "[object Object]".
// - `file` is a File object. yjs cannot encode it as an attribute value
//   and throws "Unexpected content type" MID-SYNC, which aborts the whole
//   Lexical->Yjs update. The visible symptom: when an upload finishes and
//   Lexxy swaps its provisional upload node for the final attachment, the
//   removal never reaches the shared doc, and every peer and late joiner
//   renders a zombie upload placeholder next to the real attachment.
// - `previewSrc` is a client-local object URL, `uploadUrl` /
//   `blobUrlTemplate` / `progress` / `uploadError` / `pendingPreview` are
//   upload machinery with no meaning on another client.
//
// Returns the Map to pass to createBinding.
const GUARDED_CLASSES = new WeakMap();
const GUARDED_ORIGINALS = new WeakMap(); // Guarded -> Original
const GUARDED_EXCLUSIONS = new WeakMap(); // either class -> excluded property Set
const CONSTRUCTOR_PATCHED = new WeakSet();

// Lexical asserts `registeredNode.klass === node.constructor`, and which
// class is "right" depends on the editor doing the asserting: a
// collaborative editor registered Guarded, while a plain Lexxy editor on
// the same page registered Original. A blanket
// `Original.prototype.constructor = Guarded` satisfies the first and
// breaks attachment creation in the second. Instead, `constructor` answers
// with whatever the ACTIVE editor registered for this node type; outside
// an editor update it falls back to the real class.
function patchConstructorLookup(Original, Guarded) {
  if (CONSTRUCTOR_PATCHED.has(Original)) return;
  CONSTRUCTOR_PATCHED.add(Original);
  Object.defineProperty(Original.prototype, 'constructor', {
    configurable: true,
    get() {
      try {
        const registered = $getEditor()._nodes.get(this.getType())?.klass;
        if (registered === Guarded) return Guarded;
      } catch {
        // No active editor; fall through.
      }
      return Original;
    },
  });
}

// What stays local: `file` (yjs can't encode a File and throws mid-sync),
// `editor` (live object reference), `previewSrc` (client-local object URL),
// and `uploadUrl` / `blobUrlTemplate` (host config — and an absent
// uploadUrl is what stops a peer from starting its own duplicate
// DirectUpload). Everything else syncs on purpose: `progress` and
// `uploadError` give peers a live progress bar and the error state, and
// `pendingPreview` tells peers to render the poll-until-ready placeholder
// for server-generated previews (PDFs and friends) instead of requesting a
// preview that doesn't exist yet and giving up.
const UNSYNCABLE_ATTACHMENT_PROPERTIES = new Set([
  'editor',
  'file',
  'previewSrc',
  'uploadUrl',
  'blobUrlTemplate',
]);

function guardedClassFor(Original) {
  let Guarded = GUARDED_CLASSES.get(Original);
  if (!Guarded) {
    Guarded = class extends Original {
      constructor(...args) {
        super(args.length === 0 || args[0] === undefined ? {} : args[0], args[1]);
      }

      // Remote instances have no local File (it never syncs), and Lexxy's
      // upload caption formats `this.file?.size`, which renders as
      // "NaN undefined" on peers. Scrub it; the filename and the synced
      // progress bar remain. Locally created nodes construct through the
      // original class and never reach this override.
      createDOM(...args) {
        const dom = super.createDOM(...args);
        if (dom && !this.file) {
          const size = dom.querySelector?.('.attachment__size');
          if (size && /NaN/.test(size.textContent)) size.textContent = '';
        }
        return dom;
      }
    };
    GUARDED_CLASSES.set(Original, Guarded);
  }
  return Guarded;
}

function guardLexxyNodes(editor) {
  const excludedProperties = new Map();
  const nodes = editor?._nodes;
  if (!nodes || typeof nodes.forEach !== 'function') return excludedProperties;

  // A re-bind (disconnect/reconnect, a DOM move) sees classes that are
  // already the tolerant Guarded subclasses. The thrower probe below skips
  // them — they no longer throw — so their exclusions have to be carried
  // over explicitly, or a new binding would serialize the next upload's
  // raw File and abort mid-sync all over again.
  nodes.forEach((info) => {
    const exclusions = GUARDED_EXCLUSIONS.get(info.klass);
    if (!exclusions) return;
    excludedProperties.set(info.klass, exclusions);
    const counterpart = GUARDED_ORIGINALS.get(info.klass) || GUARDED_CLASSES.get(info.klass);
    if (counterpart) excludedProperties.set(counterpart, exclusions);
  });

  let throwers;
  try {
    throwers = detectNoArgThrowingNodes(nodes);
  } catch {
    // If detection fails for any reason, bind unguarded rather than break
    // collaboration -- the original error (if any) still surfaces.
    return excludedProperties;
  }
  for (const info of throwers) {
    const Original = info.klass;
    const Guarded = guardedClassFor(Original);
    info.klass = Guarded;
    patchConstructorLookup(Original, Guarded);
    GUARDED_ORIGINALS.set(Guarded, Original);
    GUARDED_EXCLUSIONS.set(Original, UNSYNCABLE_ATTACHMENT_PROPERTIES);
    GUARDED_EXCLUSIONS.set(Guarded, UNSYNCABLE_ATTACHMENT_PROPERTIES);
    // Keyed by both classes: @lexical/yjs looks the map up by the node's
    // constructor, which differs between locally- and remotely-created
    // instances here.
    excludedProperties.set(Original, UNSYNCABLE_ATTACHMENT_PROPERTIES);
    excludedProperties.set(Guarded, UNSYNCABLE_ATTACHMENT_PROPERTIES);
    rekeyMutationListeners(editor, Original, Guarded);
  }
  return excludedProperties;
}

// Lexical buckets mutations by the CURRENTLY registered klass, but a
// listener registered before the swap resolved its klass key at
// registration time — Lexxy's upload tracker
// (`registerMutationListener(ActionTextAttachmentUploadNode, ...)`) is one,
// and it's what holds form submission while uploads are pending. Without
// re-keying, its mutations land in the Guarded bucket, the listener's
// Original key never matches, the uploads count stays at zero, and a form
// can submit mid-upload. Listeners registered after the swap resolve
// through editor._nodes and get Guarded on their own. The trade-off: a
// re-keyed listener's unsubscribe closure still deletes the Original key,
// so unsubscribing one of these pre-swap listeners after the swap leaves
// it registered. Lexxy's are editor-lifetime listeners, so that doesn't
// bite; it's the cost of keeping upload tracking alive.
function rekeyMutationListeners(editor, Original, Guarded) {
  const mutationListeners = editor._listeners?.mutation;
  if (!mutationListeners || typeof mutationListeners.forEach !== 'function') return;
  mutationListeners.forEach((klassSet) => {
    if (klassSet?.has?.(Original)) {
      klassSet.delete(Original);
      klassSet.add(Guarded);
    }
  });
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
