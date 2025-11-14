import { createBinding, initLocalState, syncLexicalUpdateToYjs, syncYjsChangesToLexical } from "@lexical/yjs";
import { Doc } from "yjs";
import { createConsumer } from "@anycable/web";
import { WebsocketProvider } from "@y-rb/actioncable";
import { $getNodeByKey, $getSelection, $isRangeSelection } from "lexical";

//#region node_modules/lib0/math.js
/**
* Common Math expressions.
*
* @module math
*/
const floor = Math.floor;
const isNaN = Number.isNaN;

//#endregion
//#region node_modules/lib0/set.js
/**
* Utility module to work with sets.
*
* @module set
*/
const create$1 = () => /* @__PURE__ */ new Set();

//#endregion
//#region node_modules/lib0/array.js
/**
* Transforms something array-like to an actual Array.
*
* @function
* @template T
* @param {ArrayLike<T>|Iterable<T>} arraylike
* @return {T}
*/
const from = Array.from;
const isArray$1 = Array.isArray;

//#endregion
//#region node_modules/lib0/time.js
/**
* Return current unix time.
*
* @return {number}
*/
const getUnixTime = Date.now;

//#endregion
//#region node_modules/lib0/map.js
/**
* Utility module to work with key-value stores.
*
* @module map
*/
/**
* Creates a new Map instance.
*
* @function
* @return {Map<any, any>}
*
* @function
*/
const create = () => /* @__PURE__ */ new Map();
/**
* Get map property. Create T if property is undefined and set T on map.
*
* ```js
* const listeners = map.setIfUndefined(events, 'eventName', set.create)
* listeners.add(listener)
* ```
*
* @function
* @template {Map<any, any>} MAP
* @template {MAP extends Map<any,infer V> ? function():V : unknown} CF
* @param {MAP} map
* @param {MAP extends Map<infer K,any> ? K : unknown} key
* @param {CF} createT
* @return {ReturnType<CF>}
*/
const setIfUndefined = (map, key, createT) => {
	let set = map.get(key);
	if (set === void 0) map.set(key, set = createT());
	return set;
};

//#endregion
//#region node_modules/lib0/observable.js
/**
* Observable class prototype.
*
* @module observable
*/
/* c8 ignore start */
/**
* Handles named events.
*
* @deprecated
* @template N
*/
var Observable = class {
	constructor() {
		/**
		* Some desc.
		* @type {Map<N, any>}
		*/
		this._observers = create();
	}
	/**
	* @param {N} name
	* @param {function} f
	*/
	on(name, f) {
		setIfUndefined(this._observers, name, create$1).add(f);
	}
	/**
	* @param {N} name
	* @param {function} f
	*/
	once(name, f) {
		/**
		* @param  {...any} args
		*/
		const _f = (...args) => {
			this.off(name, _f);
			f(...args);
		};
		this.on(name, _f);
	}
	/**
	* @param {N} name
	* @param {function} f
	*/
	off(name, f) {
		const observers = this._observers.get(name);
		if (observers !== void 0) {
			observers.delete(f);
			if (observers.size === 0) this._observers.delete(name);
		}
	}
	/**
	* Emit a named event. All registered event listeners that listen to the
	* specified name will receive the event.
	*
	* @todo This should catch exceptions
	*
	* @param {N} name The event name.
	* @param {Array<any>} args The arguments that are applied to the event listener.
	*/
	emit(name, args) {
		return from((this._observers.get(name) || create()).values()).forEach((f) => f(...args));
	}
	destroy() {
		this._observers = create();
	}
};
/* c8 ignore end */

//#endregion
//#region node_modules/lib0/object.js
/**
* @param {Object<string,any>} obj
*/
const keys = Object.keys;
/**
* @deprecated use object.size instead
* @param {Object<string,any>} obj
* @return {number}
*/
const length = (obj) => keys(obj).length;
/**
* Calls `Object.prototype.hasOwnProperty`.
*
* @param {any} obj
* @param {string|number|symbol} key
* @return {boolean}
*/
const hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

//#endregion
//#region node_modules/lib0/traits.js
const EqualityTraitSymbol = Symbol("Equality");
/**
* @typedef {{ [EqualityTraitSymbol]:(other:EqualityTrait)=>boolean }} EqualityTrait
*/

//#endregion
//#region node_modules/lib0/function.js
/**
* Common functions and function call helpers.
*
* @module function
*/
/* c8 ignore start */
/**
* @param {any} a
* @param {any} b
* @return {boolean}
*/
const equalityDeep = (a, b) => {
	if (a === b) return true;
	if (a == null || b == null || a.constructor !== b.constructor) return false;
	if (a[EqualityTraitSymbol] != null) return a[EqualityTraitSymbol](b);
	switch (a.constructor) {
		case ArrayBuffer:
			a = new Uint8Array(a);
			b = new Uint8Array(b);
		case Uint8Array:
			if (a.byteLength !== b.byteLength) return false;
			for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
			break;
		case Set:
			if (a.size !== b.size) return false;
			for (const value of a) if (!b.has(value)) return false;
			break;
		case Map:
			if (a.size !== b.size) return false;
			for (const key of a.keys()) if (!b.has(key) || !equalityDeep(a.get(key), b.get(key))) return false;
			break;
		case Object:
			if (length(a) !== length(b)) return false;
			for (const key in a) if (!hasProperty(a, key) || !equalityDeep(a[key], b[key])) return false;
			break;
		case Array:
			if (a.length !== b.length) return false;
			for (let i = 0; i < a.length; i++) if (!equalityDeep(a[i], b[i])) return false;
			break;
		default: return false;
	}
	return true;
};
/* c8 ignore stop */
const isArray = isArray$1;

//#endregion
//#region node_modules/y-protocols/awareness.js
const outdatedTimeout = 3e4;
/**
* @typedef {Object} MetaClientState
* @property {number} MetaClientState.clock
* @property {number} MetaClientState.lastUpdated unix timestamp
*/
/**
* The Awareness class implements a simple shared state protocol that can be used for non-persistent data like awareness information
* (cursor, username, status, ..). Each client can update its own local state and listen to state changes of
* remote clients. Every client may set a state of a remote peer to `null` to mark the client as offline.
*
* Each client is identified by a unique client id (something we borrow from `doc.clientID`). A client can override
* its own state by propagating a message with an increasing timestamp (`clock`). If such a message is received, it is
* applied if the known state of that client is older than the new state (`clock < newClock`). If a client thinks that
* a remote client is offline, it may propagate a message with
* `{ clock: currentClientClock, state: null, client: remoteClient }`. If such a
* message is received, and the known clock of that client equals the received clock, it will override the state with `null`.
*
* Before a client disconnects, it should propagate a `null` state with an updated clock.
*
* Awareness states must be updated every 30 seconds. Otherwise the Awareness instance will delete the client state.
*
* @extends {Observable<string>}
*/
var Awareness = class extends Observable {
	/**
	* @param {Y.Doc} doc
	*/
	constructor(doc) {
		super();
		this.doc = doc;
		/**
		* @type {number}
		*/
		this.clientID = doc.clientID;
		/**
		* Maps from client id to client state
		* @type {Map<number, Object<string, any>>}
		*/
		this.states = /* @__PURE__ */ new Map();
		/**
		* @type {Map<number, MetaClientState>}
		*/
		this.meta = /* @__PURE__ */ new Map();
		this._checkInterval = setInterval(() => {
			const now = getUnixTime();
			if (this.getLocalState() !== null && outdatedTimeout / 2 <= now - this.meta.get(this.clientID).lastUpdated) this.setLocalState(this.getLocalState());
			/**
			* @type {Array<number>}
			*/
			const remove = [];
			this.meta.forEach((meta, clientid) => {
				if (clientid !== this.clientID && outdatedTimeout <= now - meta.lastUpdated && this.states.has(clientid)) remove.push(clientid);
			});
			if (remove.length > 0) removeAwarenessStates(this, remove, "timeout");
		}, floor(outdatedTimeout / 10));
		doc.on("destroy", () => {
			this.destroy();
		});
		this.setLocalState({});
	}
	destroy() {
		this.emit("destroy", [this]);
		this.setLocalState(null);
		super.destroy();
		clearInterval(this._checkInterval);
	}
	/**
	* @return {Object<string,any>|null}
	*/
	getLocalState() {
		return this.states.get(this.clientID) || null;
	}
	/**
	* @param {Object<string,any>|null} state
	*/
	setLocalState(state) {
		const clientID = this.clientID;
		const currLocalMeta = this.meta.get(clientID);
		const clock = currLocalMeta === void 0 ? 0 : currLocalMeta.clock + 1;
		const prevState = this.states.get(clientID);
		if (state === null) this.states.delete(clientID);
		else this.states.set(clientID, state);
		this.meta.set(clientID, {
			clock,
			lastUpdated: getUnixTime()
		});
		const added = [];
		const updated = [];
		const filteredUpdated = [];
		const removed = [];
		if (state === null) removed.push(clientID);
		else if (prevState == null) {
			if (state != null) added.push(clientID);
		} else {
			updated.push(clientID);
			if (!equalityDeep(prevState, state)) filteredUpdated.push(clientID);
		}
		if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) this.emit("change", [{
			added,
			updated: filteredUpdated,
			removed
		}, "local"]);
		this.emit("update", [{
			added,
			updated,
			removed
		}, "local"]);
	}
	/**
	* @param {string} field
	* @param {any} value
	*/
	setLocalStateField(field, value) {
		const state = this.getLocalState();
		if (state !== null) this.setLocalState({
			...state,
			[field]: value
		});
	}
	/**
	* @return {Map<number,Object<string,any>>}
	*/
	getStates() {
		return this.states;
	}
};
/**
* Mark (remote) clients as inactive and remove them from the list of active peers.
* This change will be propagated to remote clients.
*
* @param {Awareness} awareness
* @param {Array<number>} clients
* @param {any} origin
*/
const removeAwarenessStates = (awareness, clients, origin) => {
	const removed = [];
	for (let i = 0; i < clients.length; i++) {
		const clientID = clients[i];
		if (awareness.states.has(clientID)) {
			awareness.states.delete(clientID);
			if (clientID === awareness.clientID) {
				const curMeta = awareness.meta.get(clientID);
				awareness.meta.set(clientID, {
					clock: curMeta.clock + 1,
					lastUpdated: getUnixTime()
				});
			}
			removed.push(clientID);
		}
	}
	if (removed.length > 0) {
		awareness.emit("change", [{
			added: [],
			updated: [],
			removed
		}, origin]);
		awareness.emit("update", [{
			added: [],
			updated: [],
			removed
		}, origin]);
	}
};

//#endregion
//#region src/consumer.js
const consumer = createConsumer({ protocol: "actioncable-v1-ext-json" });

//#endregion
//#region src/lexxy-cursor-manager.js
/**
* - Live carets with user-colored labels
* - Selection range highlights spanning disjoint rects
* - Awareness lifecycle (added/updated/removed)
* - Throttled reflow on updates, scroll, resize, mutations
* - Works with multiple remote users
* - Robust DOM range mapping from Lexical keys/offsets
*/
var LexxyCursorManager = class {
	constructor(editor, provider, containerElement) {
		this.editor = editor;
		this.provider = provider;
		this.awareness = provider.awareness;
		this.container = containerElement;
		this.cursors = /* @__PURE__ */ new Map();
		this.selections = /* @__PURE__ */ new Map();
		this.localClientId = this.awareness.clientID;
		this.lastSeenTimestamps = /* @__PURE__ */ new Map();
		this.updateQueue = /* @__PURE__ */ new Set();
		this.rafId = null;
		this.resizeObserver = null;
		this.mutationObserver = null;
		this.lastUpdate = 0;
		this.UPDATE_THROTTLE = 16;
		this.INACTIVE_TIMEOUT = 3e4;
		this.heartbeatInterval = null;
		this.overlayContainer = this.createOverlayContainer();
		this.handleAwarenessUpdate = this.handleAwarenessUpdate.bind(this);
		this.handleEditorUpdate = this.handleEditorUpdate.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.handleResize = this.handleResize.bind(this);
		this.processUpdateQueue = this.processUpdateQueue.bind(this);
		this.checkInactiveUsers = this.checkInactiveUsers.bind(this);
		this.init();
	}
	init() {
		this.awareness.on("update", this.handleAwarenessUpdate);
		this.unsubscribeEditor = this.editor.registerUpdateListener(this.handleEditorUpdate);
		this.scrollableElement = this.findScrollableParent(this.container);
		this.scrollableElement.addEventListener("scroll", this.handleScroll, { passive: true });
		this.resizeObserver = new ResizeObserver(this.handleResize);
		this.resizeObserver.observe(this.container);
		this.mutationObserver = new MutationObserver(() => {
			this.queueUpdate("mutation");
		});
		this.mutationObserver.observe(this.container, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ["style", "class"]
		});
		this.heartbeatInterval = setInterval(() => {
			this.sendHeartbeat();
			this.checkInactiveUsers();
		}, 5e3);
		setTimeout(() => {
			this.renderAllCursors();
		}, 100);
	}
	sendHeartbeat() {
		this.awareness.setLocalStateField("lastSeen", Date.now());
	}
	checkInactiveUsers() {
		const now = Date.now();
		this.awareness.getStates().forEach((state, clientId) => {
			if (clientId === this.localClientId) return;
			const lastSeen = state?.lastSeen;
			if (lastSeen) {
				const timeSinceLastSeen = now - lastSeen;
				if (timeSinceLastSeen > this.INACTIVE_TIMEOUT) {
					console.log(`Removing inactive user ${clientId} (last seen ${Math.round(timeSinceLastSeen / 1e3)}s ago)`);
					this.removeCursor(clientId);
					this.removeSelection(clientId);
					this.lastSeenTimestamps.delete(clientId);
				} else this.lastSeenTimestamps.set(clientId, lastSeen);
			}
		});
	}
	createOverlayContainer() {
		const overlay = document.createElement("div");
		overlay.className = "lexxy-cursor-overlay";
		overlay.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1000;
    `;
		this.container.style.position = "relative";
		this.container.appendChild(overlay);
		return overlay;
	}
	handleAwarenessUpdate({ added, updated, removed }) {
		try {
			removed.forEach((clientId) => {
				this.removeCursor(clientId);
				this.removeSelection(clientId);
				this.lastSeenTimestamps.delete(clientId);
			});
			[...added, ...updated].forEach((clientId) => {
				if (clientId === this.localClientId) return;
				try {
					const state = this.awareness.getStates().get(clientId);
					if (state) {
						if (state.lastSeen) this.lastSeenTimestamps.set(clientId, state.lastSeen);
						if (state.cursor) this.updateCursorFromState(clientId, state);
						else {
							this.removeCursor(clientId);
							this.removeSelection(clientId);
						}
					} else {
						this.removeCursor(clientId);
						this.removeSelection(clientId);
					}
				} catch (error) {
					console.warn("Failed to update cursor for client", clientId, error);
					this.removeCursor(clientId);
					this.removeSelection(clientId);
				}
			});
			this.queueUpdate("awareness");
		} catch (error) {
			console.error("Error in handleAwarenessUpdate:", error);
		}
	}
	handleEditorUpdate({ editorState }) {
		editorState.read(() => {
			this.queueUpdate("editor");
		});
	}
	handleScroll() {
		this.queueUpdate("scroll");
	}
	handleResize() {
		this.queueUpdate("resize");
	}
	queueUpdate(source) {
		this.updateQueue.add(source);
		if (this.rafId) return;
		const timeSinceLastUpdate = Date.now() - this.lastUpdate;
		if (timeSinceLastUpdate < this.UPDATE_THROTTLE) setTimeout(() => {
			this.rafId = requestAnimationFrame(this.processUpdateQueue);
		}, this.UPDATE_THROTTLE - timeSinceLastUpdate);
		else this.rafId = requestAnimationFrame(this.processUpdateQueue);
	}
	processUpdateQueue() {
		this.rafId = null;
		this.lastUpdate = Date.now();
		this.updateQueue.clear();
		this.editor.getEditorState().read(() => {
			this.updateAllCursorPositions();
		});
	}
	updateCursorFromState(clientId, state) {
		const cursor = state.cursor;
		const user = state.user;
		if (!cursor) {
			this.removeCursor(clientId);
			this.removeSelection(clientId);
			return;
		}
		if (!cursor.anchorPos || !cursor.focusPos) {
			this.removeCursor(clientId);
			this.removeSelection(clientId);
			return;
		}
		console.log(`Updating cursor for client ${clientId}, user:`, user);
		const cursorData = {
			clientId,
			user: user || {
				name: `User ${clientId}`,
				color: this.getColorForClient(clientId)
			},
			anchor: cursor.anchorPos,
			focus: cursor.focusPos
		};
		this.cursors.set(clientId, cursorData);
		if (this.isCollapsed(cursor.anchorPos, cursor.focusPos)) {
			this.removeSelection(clientId);
			this.selections.delete(clientId);
		} else this.selections.set(clientId, cursorData);
	}
	isCollapsed(anchor, focus) {
		if (!anchor || !focus) return true;
		return anchor.key === focus.key && anchor.offset === focus.offset;
	}
	updateAllCursorPositions() {
		this.cursors.forEach((cursorData, clientId) => {
			this.updateCursorPosition(clientId, cursorData);
		});
		this.selections.forEach((selectionData, clientId) => {
			this.updateSelectionPosition(clientId, selectionData);
		});
	}
	updateCursorPosition(clientId, cursorData) {
		const { anchor, user } = cursorData;
		const position = this.getPositionFromPoint(anchor);
		if (!position) {
			this.removeCursor(clientId);
			return;
		}
		let cursorElement = this.overlayContainer.querySelector(`[data-cursor-id="${clientId}"]`);
		if (!cursorElement) {
			cursorElement = this.createCursorElement(clientId, user);
			this.overlayContainer.appendChild(cursorElement);
		}
		cursorElement.style.transform = `translate(${position.x}px, ${position.y}px)`;
		cursorElement.style.height = `${position.height}px`;
		const isVisible = this.isPositionVisible(position);
		cursorElement.style.opacity = isVisible ? "1" : "0.3";
	}
	updateSelectionPosition(clientId, selectionData) {
		const { anchor, focus, user } = selectionData;
		const rects = this.getSelectionRects(anchor, focus);
		if (!rects || rects.length === 0) {
			this.removeSelection(clientId);
			return;
		}
		let selectionContainer = this.overlayContainer.querySelector(`[data-selection-id="${clientId}"]`);
		if (!selectionContainer) {
			selectionContainer = this.createSelectionContainer(clientId, user);
			this.overlayContainer.appendChild(selectionContainer);
		}
		selectionContainer.innerHTML = "";
		rects.forEach((rect) => {
			const rectElement = document.createElement("div");
			rectElement.className = "lexxy-selection-rect";
			const hexToRgba = (hex, alpha) => {
				return `rgba(${parseInt(hex.slice(1, 3), 16)}, ${parseInt(hex.slice(3, 5), 16)}, ${parseInt(hex.slice(5, 7), 16)}, ${alpha})`;
			};
			rectElement.style.cssText = `
        position: absolute;
        background-color: ${hexToRgba(user.color, .3)};
        left: ${rect.x}px;
        top: ${rect.y}px;
        width: ${rect.width}px;
        height: ${rect.height}px;
        pointer-events: none;
        mix-blend-mode: multiply;
      `;
			selectionContainer.appendChild(rectElement);
		});
	}
	getPositionFromPoint(point) {
		if (!$getNodeByKey(point.key)) return null;
		const domNode = this.editor.getElementByKey(point.key);
		if (!domNode) return null;
		try {
			if (domNode.textContent === "" || domNode.textContent === "\n") {
				const rect$1 = domNode.getBoundingClientRect();
				const containerRect$1 = this.container.getBoundingClientRect();
				return {
					x: rect$1.left - containerRect$1.left,
					y: rect$1.top - containerRect$1.top,
					height: rect$1.height || 20
				};
			}
			const range = this.createRangeFromPoint(domNode, point.offset);
			if (!range) return null;
			const rect = range.getBoundingClientRect();
			const containerRect = this.container.getBoundingClientRect();
			if (rect.width === 0 && rect.height === 0) {
				const nodeRect = domNode.getBoundingClientRect();
				return {
					x: nodeRect.left - containerRect.left,
					y: nodeRect.top - containerRect.top,
					height: nodeRect.height || 20
				};
			}
			return {
				x: rect.left - containerRect.left,
				y: rect.top - containerRect.top,
				height: rect.height || 20
			};
		} catch (error) {
			console.warn("Failed to get position from point:", error);
			try {
				const nodeRect = domNode.getBoundingClientRect();
				const containerRect = this.container.getBoundingClientRect();
				return {
					x: nodeRect.left - containerRect.left,
					y: nodeRect.top - containerRect.top,
					height: nodeRect.height || 20
				};
			} catch (fallbackError) {
				return null;
			}
		}
	}
	createRangeFromPoint(domNode, offset) {
		const range = document.createRange();
		if (domNode.nodeType === Node.TEXT_NODE) {
			const textLength = domNode.textContent.length;
			const clampedOffset = Math.min(offset, textLength);
			range.setStart(domNode, clampedOffset);
			range.setEnd(domNode, clampedOffset);
		} else {
			const walker = document.createTreeWalker(domNode, NodeFilter.SHOW_TEXT, null, false);
			let currentOffset = 0;
			let targetNode = null;
			let targetOffset = 0;
			while (walker.nextNode()) {
				const node = walker.currentNode;
				const nodeLength = node.textContent.length;
				if (currentOffset + nodeLength >= offset) {
					targetNode = node;
					targetOffset = offset - currentOffset;
					break;
				}
				currentOffset += nodeLength;
			}
			if (targetNode) {
				range.setStart(targetNode, targetOffset);
				range.setEnd(targetNode, targetOffset);
			} else try {
				range.selectNodeContents(domNode);
				range.collapse(offset === 0);
			} catch (e) {
				range.setStartBefore(domNode);
				range.setEndBefore(domNode);
			}
		}
		return range;
	}
	getSelectionRects(anchor, focus) {
		return this.editor.getEditorState().read(() => {
			const anchorNode = $getNodeByKey(anchor.key);
			const focusNode = $getNodeByKey(focus.key);
			if (!anchorNode || !focusNode) return null;
			const anchorDOM = this.editor.getElementByKey(anchor.key);
			const focusDOM = this.editor.getElementByKey(focus.key);
			if (!anchorDOM || !focusDOM) return null;
			try {
				const range = document.createRange();
				const isBackward = anchor.key === focus.key ? anchor.offset > focus.offset : anchorDOM.compareDocumentPosition(focusDOM) & Node.DOCUMENT_POSITION_PRECEDING;
				const startPoint = isBackward ? focus : anchor;
				const endPoint = isBackward ? anchor : focus;
				const startDOM = isBackward ? focusDOM : anchorDOM;
				const endDOM = isBackward ? anchorDOM : focusDOM;
				const startRange = this.createRangeFromPoint(startDOM, startPoint.offset);
				if (!startRange) return null;
				range.setStart(startRange.startContainer, startRange.startOffset);
				const endRange = this.createRangeFromPoint(endDOM, endPoint.offset);
				if (!endRange) return null;
				range.setEnd(endRange.endContainer, endRange.endOffset);
				const clientRects = Array.from(range.getClientRects());
				const containerRect = this.container.getBoundingClientRect();
				console.log(`Selection rects for client: ${clientRects.length} rects found`);
				return clientRects.map((rect) => ({
					x: rect.left - containerRect.left,
					y: rect.top - containerRect.top,
					width: rect.width,
					height: rect.height
				}));
			} catch (error) {
				console.warn("Failed to get selection rects:", error);
				return null;
			}
		});
	}
	createCursorElement(clientId, user) {
		const cursor = document.createElement("div");
		cursor.className = "lexxy-cursor";
		cursor.dataset.cursorId = clientId;
		const caret = document.createElement("div");
		caret.className = "lexxy-cursor-caret";
		caret.style.backgroundColor = user.color;
		const label = document.createElement("div");
		label.className = "lexxy-cursor-label";
		label.textContent = user.name;
		label.style.cssText = `
      position: absolute;
      bottom: 100%;
      left: 0;
      background-color: ${user.color};
      color: white;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 11px;
      font-family: system-ui, -apple-system, sans-serif;
      white-space: nowrap;
      margin-bottom: 2px;
      pointer-events: none;
      user-select: none;
    `;
		cursor.appendChild(caret);
		cursor.appendChild(label);
		return cursor;
	}
	createSelectionContainer(clientId, user) {
		const container = document.createElement("div");
		container.className = "lexxy-selection";
		container.dataset.selectionId = clientId;
		container.style.cssText = "position: absolute; pointer-events: none; z-index: 999;";
		return container;
	}
	removeCursor(clientId) {
		const element = this.overlayContainer.querySelector(`[data-cursor-id="${clientId}"]`);
		if (element) element.remove();
		this.cursors.delete(clientId);
	}
	removeSelection(clientId) {
		const element = this.overlayContainer.querySelector(`[data-selection-id="${clientId}"]`);
		if (element) element.remove();
		this.selections.delete(clientId);
	}
	isPositionVisible(position) {
		const scrollTop = this.scrollableElement.scrollTop;
		const scrollBottom = scrollTop + this.scrollableElement.clientHeight;
		return position.y >= scrollTop - 50 && position.y <= scrollBottom + 50;
	}
	findScrollableParent(element) {
		let parent = element.parentElement;
		while (parent) {
			const overflow = window.getComputedStyle(parent).overflow;
			if (overflow === "auto" || overflow === "scroll") return parent;
			parent = parent.parentElement;
		}
		return document.documentElement;
	}
	renderAllCursors() {
		try {
			const states = this.awareness.getStates();
			console.log("All awareness states:", states);
			states.forEach((state, clientId) => {
				if (clientId !== this.localClientId && state?.cursor) {
					console.log(`Rendering cursor for client ${clientId}, state:`, state);
					try {
						this.updateCursorFromState(clientId, state);
					} catch (error) {
						console.warn("Failed to render cursor for client", clientId, error);
					}
				}
			});
			this.queueUpdate("initial");
		} catch (error) {
			console.error("Error in renderAllCursors:", error);
		}
	}
	getColorForClient(clientId) {
		const colors = [
			"#FF6B6B",
			"#FF006E",
			"#C1121F",
			"#FF4365",
			"#E63946",
			"#DC2F02",
			"#D00000",
			"#9D0208",
			"#FF0A54",
			"#FF5C8A",
			"#F77F00",
			"#FCBF49",
			"#FFB700",
			"#FFA400",
			"#FF9500",
			"#F4A261",
			"#E76F51",
			"#FF8C42",
			"#FFD60A",
			"#FFB627",
			"#06FFA5",
			"#00F5FF",
			"#55A630",
			"#2D6A4F",
			"#52B788",
			"#40916C",
			"#1B5E20",
			"#2E7D32",
			"#43A047",
			"#66BB6A",
			"#4ECDC4",
			"#96CEB4",
			"#88D498",
			"#36C9C6",
			"#06FFB4",
			"#0077B6",
			"#0096C7",
			"#00B4D8",
			"#48CAE4",
			"#90E0EF",
			"#023E8A",
			"#0466C8",
			"#5390D9",
			"#4361EE",
			"#4895EF",
			"#4CC9F0",
			"#45B7D1",
			"#2196F3",
			"#1976D2",
			"#0D47A1",
			"#7209B7",
			"#B5179E",
			"#F72585",
			"#7B2CBF",
			"#6A4C93",
			"#6C5CE7",
			"#A8E6CF",
			"#DDA0DD",
			"#9C27B0",
			"#8E24AA",
			"#AB47BC",
			"#CE93D8",
			"#6A1B9A",
			"#4A148C",
			"#9D4EDD",
			"#8D5524",
			"#A0522D",
			"#964B00",
			"#6F4E37",
			"#8B4513",
			"#14213D",
			"#006D77",
			"#2C7DA0",
			"#468FAF",
			"#61A5C2",
			"#007EA7",
			"#003459",
			"#00A8CC",
			"#005F73",
			"#0A9396",
			"#540B0E",
			"#702632",
			"#A4133C",
			"#800E13",
			"#590D22",
			"#370617",
			"#6A040F",
			"#9D0208",
			"#D00000",
			"#DC2F02"
		];
		let hash = 0;
		const idStr = String(clientId);
		for (let i = 0; i < idStr.length; i++) {
			hash = (hash << 5) - hash + idStr.charCodeAt(i);
			hash = hash & hash;
		}
		return colors[Math.abs(hash) % colors.length];
	}
	destroy() {
		this.awareness.off("update", this.handleAwarenessUpdate);
		if (this.unsubscribeEditor) this.unsubscribeEditor();
		if (this.scrollableElement) this.scrollableElement.removeEventListener("scroll", this.handleScroll);
		if (this.resizeObserver) this.resizeObserver.disconnect();
		if (this.mutationObserver) this.mutationObserver.disconnect();
		if (this.rafId) cancelAnimationFrame(this.rafId);
		if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
		if (this.overlayContainer) this.overlayContainer.remove();
		this.cursors.clear();
		this.selections.clear();
		this.lastSeenTimestamps.clear();
		this.updateQueue.clear();
	}
};
/**
* Helper function to sync local cursor position to awareness
* This follows the standard Yjs editor binding pattern
*/
function syncLocalCursorPosition(editor, provider) {
	const awareness = provider.awareness;
	return editor.registerUpdateListener(() => {
		editor.getEditorState().read(() => {
			const selection = $getSelection();
			if (!selection || !$isRangeSelection(selection)) {
				awareness.setLocalStateField("cursor", null);
				return;
			}
			const anchor = selection.anchor;
			const focus = selection.focus;
			const cursorState = {
				anchorPos: {
					key: anchor.key,
					offset: anchor.offset,
					type: anchor.type
				},
				focusPos: {
					key: focus.key,
					offset: focus.offset,
					type: focus.type
				}
			};
			awareness.setLocalStateField("cursor", cursorState);
		});
	});
}

//#endregion
//#region src/editor_collaboration.js
var Collaboration = class extends HTMLElement {
	connectedCallback() {
		this.editorElement = this.closest("lexxy-editor");
		this.editor = this.editorElement.editor;
		if (this.editor && this.editor.isReady && this.editor.isReady()) {
			console.log("Editor already initialized, starting collaboration");
			this.#init();
		} else if (this.editor) {
			console.log("Editor exists, starting collaboration");
			this.#init();
		} else this.editorElement.addEventListener(`lexxy:initialize`, (...args) => {
			console.log("Editor initialized event, starting collaboration", args);
			this.editor = this.editorElement.editor;
			this.#init();
		}, { once: true });
	}
	disconnectedCallback() {
		if (this.cursorManager) this.cursorManager.destroy();
		if (this.unsubscribeCursorSync) this.unsubscribeCursorSync();
		if (this.unsubscribeListeners) this.unsubscribeListeners();
		if (this.provider) this.provider.disconnect();
	}
	async #init() {
		const id = this.getAttribute("id") || "main";
		const name = this.getAttribute("name") || "Example User";
		const color = this.getAttribute("color") || "#958DF1";
		const channelName = this.getAttribute("channel-name") || "SyncChannel";
		const rawParams = this.getAttribute("channel-params") || "{}";
		const channelParams = typeof rawParams === "string" ? JSON.parse(rawParams) : rawParams;
		const disableBc = this.hasAttribute("disable-bc") ? this.getAttribute("disable-bc") !== "false" : true;
		const consumerInstance = this.consumer || consumer;
		const doc = this.doc || new Doc();
		const awareness = this.awareness || new Awareness(doc);
		const docMap = /* @__PURE__ */ new Map();
		docMap.set(id, doc);
		const provider = new WebsocketProvider(doc, consumerInstance, channelName, channelParams, {
			awareness,
			disableBc
		});
		const binding = createBinding(this.editor, provider, id, doc, docMap);
		const unsubscribeListeners = registerCollaborationListeners(this.editor, provider, binding);
		awareness.setLocalStateField("user", {
			name,
			color
		});
		awareness.setLocalStateField("lastSeen", Date.now());
		initLocalState(provider, name, color, true, {
			name,
			color
		});
		awareness.setLocalStateField("user", {
			name,
			color
		});
		awareness.setLocalStateField("lastSeen", Date.now());
		const containerElement = this.editorElement.querySelector(".lexxy-editor-container") || this.editorElement;
		this.cursorManager = new LexxyCursorManager(this.editor, provider, containerElement);
		this.unsubscribeCursorSync = syncLocalCursorPosition(this.editor, provider);
		this.provider = provider;
		this.binding = binding;
		this.unsubscribeListeners = unsubscribeListeners;
	}
};
function registerCollaborationListeners(editor, provider, binding) {
	let skipInitialUpdate = false;
	const unsubscribeUpdateListener = editor.registerUpdateListener(({ dirtyElements, dirtyLeaves, editorState, normalizedNodes, prevEditorState, tags }) => {
		if (skipInitialUpdate) {
			skipInitialUpdate = false;
			return;
		}
		editor.getEditorState().read(() => {
			if (tags.has("skip-collab") === false) syncLexicalUpdateToYjs(binding, provider, prevEditorState, editorState, dirtyElements, dirtyLeaves, normalizedNodes, tags);
		});
	});
	const observer = (events, transaction) => {
		if (transaction.origin !== binding) syncYjsChangesToLexical(binding, provider, events, false);
	};
	binding.root.getSharedType().observeDeep(observer);
	return () => {
		unsubscribeUpdateListener();
		binding.root.getSharedType().unobserveDeep(observer);
	};
}

//#endregion
//#region src/index.js
customElements.define("lexxy-collaboration", Collaboration);

//#endregion