import { createBinding, initLocalState, setLocalStateFocus, syncCursorPositions, syncLexicalUpdateToYjs, syncYjsChangesToLexical } from "@lexical/yjs";
import { $createParagraphNode, $getRoot, HISTORY_MERGE_TAG } from "lexical";
import * as Y from "yjs";
import { Doc, mergeUpdates } from "yjs";

//#region node_modules/lib0/math.js
/**
* Common Math expressions.
*
* @module math
*/
const floor = Math.floor;
/**
* @function
* @param {number} a
* @param {number} b
* @return {number} The smaller element of a and b
*/
const min = (a, b) => a < b ? a : b;
/**
* @function
* @param {number} a
* @param {number} b
* @return {number} The bigger element of a and b
*/
const max = (a, b) => a > b ? a : b;
const isNaN$1 = Number.isNaN;

//#endregion
//#region node_modules/lib0/binary.js
const BIT8 = 128;
const BIT18 = 1 << 17;
const BIT19 = 1 << 18;
const BIT20 = 1 << 19;
const BIT21 = 1 << 20;
const BIT22 = 1 << 21;
const BIT23 = 1 << 22;
const BIT24 = 1 << 23;
const BIT25 = 1 << 24;
const BIT26 = 1 << 25;
const BIT27 = 1 << 26;
const BIT28 = 1 << 27;
const BIT29 = 1 << 28;
const BIT30 = 1 << 29;
const BIT31 = 1 << 30;
const BIT32 = 1 << 31;
const BITS7 = 127;
const BITS17 = BIT18 - 1;
const BITS18 = BIT19 - 1;
const BITS19 = BIT20 - 1;
const BITS20 = BIT21 - 1;
const BITS21 = BIT22 - 1;
const BITS22 = BIT23 - 1;
const BITS23 = BIT24 - 1;
const BITS24 = BIT25 - 1;
const BITS25 = BIT26 - 1;
const BITS26 = BIT27 - 1;
const BITS27 = BIT28 - 1;
const BITS28 = BIT29 - 1;
const BITS29 = BIT30 - 1;
const BITS30 = BIT31 - 1;
/**
* @type {number}
*/
const BITS31 = 2147483647;
/**
* @type {number}
*/
const BITS32 = 4294967295;

//#endregion
//#region node_modules/lib0/number.js
/**
* Utility helpers for working with numbers.
*
* @module number
*/
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
const LOWEST_INT32 = 1 << 31;
const HIGHEST_INT32 = BITS31;
const HIGHEST_UINT32 = BITS32;
/* c8 ignore next */
const isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
const isNaN = Number.isNaN;
const parseInt = Number.parseInt;

//#endregion
//#region node_modules/lib0/set.js
/**
* Utility module to work with sets.
*
* @module set
*/
const create$2 = () => /* @__PURE__ */ new Set();

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
//#region node_modules/lib0/string.js
/**
* Utility module to work with strings.
*
* @module string
*/
const fromCharCode = String.fromCharCode;
const fromCodePoint = String.fromCodePoint;
/**
* The largest utf16 character.
* Corresponds to Uint8Array([255, 255]) or charcodeof(2x2^8)
*/
const MAX_UTF16_CHARACTER = fromCharCode(65535);
/**
* @param {string} str
* @return {Uint8Array}
*/
const _encodeUtf8Polyfill = (str) => {
	const encodedString = unescape(encodeURIComponent(str));
	const len = encodedString.length;
	const buf = new Uint8Array(len);
	for (let i = 0; i < len; i++) buf[i] = encodedString.codePointAt(i);
	return buf;
};
/* c8 ignore next */
const utf8TextEncoder = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
/**
* @param {string} str
* @return {Uint8Array}
*/
const _encodeUtf8Native = (str) => utf8TextEncoder.encode(str);
/**
* @param {string} str
* @return {Uint8Array}
*/
/* c8 ignore next */
const encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
/* c8 ignore next */
let utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", {
	fatal: true,
	ignoreBOM: true
});
/* c8 ignore start */
if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1)
 /* c8 ignore next */
utf8TextDecoder = null;

//#endregion
//#region node_modules/lib0/encoding.js
/**
* Efficient schema-less binary encoding with support for variable length encoding.
*
* Use [lib0/encoding] with [lib0/decoding]. Every encoding function has a corresponding decoding function.
*
* Encodes numbers in little-endian order (least to most significant byte order)
* and is compatible with Golang's binary encoding (https://golang.org/pkg/encoding/binary/)
* which is also used in Protocol Buffers.
*
* ```js
* // encoding step
* const encoder = encoding.createEncoder()
* encoding.writeVarUint(encoder, 256)
* encoding.writeVarString(encoder, 'Hello world!')
* const buf = encoding.toUint8Array(encoder)
* ```
*
* ```js
* // decoding step
* const decoder = decoding.createDecoder(buf)
* decoding.readVarUint(decoder) // => 256
* decoding.readVarString(decoder) // => 'Hello world!'
* decoding.hasContent(decoder) // => false - all data is read
* ```
*
* @module encoding
*/
/**
* A BinaryEncoder handles the encoding to an Uint8Array.
*/
var Encoder = class {
	constructor() {
		this.cpos = 0;
		this.cbuf = new Uint8Array(100);
		/**
		* @type {Array<Uint8Array>}
		*/
		this.bufs = [];
	}
};
/**
* @function
* @return {Encoder}
*/
const createEncoder = () => new Encoder();
/**
* The current length of the encoded data.
*
* @function
* @param {Encoder} encoder
* @return {number}
*/
const length$1 = (encoder) => {
	let len = encoder.cpos;
	for (let i = 0; i < encoder.bufs.length; i++) len += encoder.bufs[i].length;
	return len;
};
/**
* Transform to Uint8Array.
*
* @function
* @param {Encoder} encoder
* @return {Uint8Array} The created ArrayBuffer.
*/
const toUint8Array = (encoder) => {
	const uint8arr = new Uint8Array(length$1(encoder));
	let curPos = 0;
	for (let i = 0; i < encoder.bufs.length; i++) {
		const d = encoder.bufs[i];
		uint8arr.set(d, curPos);
		curPos += d.length;
	}
	uint8arr.set(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
	return uint8arr;
};
/**
* Write one byte to the encoder.
*
* @function
* @param {Encoder} encoder
* @param {number} num The byte that is to be encoded.
*/
const write = (encoder, num) => {
	const bufferLen = encoder.cbuf.length;
	if (encoder.cpos === bufferLen) {
		encoder.bufs.push(encoder.cbuf);
		encoder.cbuf = new Uint8Array(bufferLen * 2);
		encoder.cpos = 0;
	}
	encoder.cbuf[encoder.cpos++] = num;
};
/**
* Write a variable length unsigned integer. Max encodable integer is 2^53.
*
* @function
* @param {Encoder} encoder
* @param {number} num The number that is to be encoded.
*/
const writeVarUint = (encoder, num) => {
	while (num > BITS7) {
		write(encoder, BIT8 | BITS7 & num);
		num = floor(num / 128);
	}
	write(encoder, BITS7 & num);
};
/**
* A cache to store strings temporarily
*/
const _strBuffer = new Uint8Array(3e4);
const _maxStrBSize = _strBuffer.length / 3;
/**
* Write a variable length string.
*
* @function
* @param {Encoder} encoder
* @param {String} str The string that is to be encoded.
*/
const _writeVarStringNative = (encoder, str) => {
	if (str.length < _maxStrBSize) {
		/* c8 ignore next */
		const written = utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
		writeVarUint(encoder, written);
		for (let i = 0; i < written; i++) write(encoder, _strBuffer[i]);
	} else writeVarUint8Array(encoder, encodeUtf8(str));
};
/**
* Write a variable length string.
*
* @function
* @param {Encoder} encoder
* @param {String} str The string that is to be encoded.
*/
const _writeVarStringPolyfill = (encoder, str) => {
	const encodedString = unescape(encodeURIComponent(str));
	const len = encodedString.length;
	writeVarUint(encoder, len);
	for (let i = 0; i < len; i++) write(encoder, encodedString.codePointAt(i));
};
/**
* Write a variable length string.
*
* @function
* @param {Encoder} encoder
* @param {String} str The string that is to be encoded.
*/
/* c8 ignore next */
const writeVarString = utf8TextEncoder && utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
/**
* Append fixed-length Uint8Array to the encoder.
*
* @function
* @param {Encoder} encoder
* @param {Uint8Array} uint8Array
*/
const writeUint8Array = (encoder, uint8Array) => {
	const bufferLen = encoder.cbuf.length;
	const cpos = encoder.cpos;
	const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
	const rightCopyLen = uint8Array.length - leftCopyLen;
	encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
	encoder.cpos += leftCopyLen;
	if (rightCopyLen > 0) {
		encoder.bufs.push(encoder.cbuf);
		encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
		encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
		encoder.cpos = rightCopyLen;
	}
};
/**
* Append an Uint8Array to Encoder.
*
* @function
* @param {Encoder} encoder
* @param {Uint8Array} uint8Array
*/
const writeVarUint8Array = (encoder, uint8Array) => {
	writeVarUint(encoder, uint8Array.byteLength);
	writeUint8Array(encoder, uint8Array);
};

//#endregion
//#region node_modules/lib0/error.js
/**
* Error helpers.
*
* @module error
*/
/**
* @param {string} s
* @return {Error}
*/
/* c8 ignore next */
const create$1 = (s) => new Error(s);

//#endregion
//#region node_modules/lib0/decoding.js
/**
* Efficient schema-less binary decoding with support for variable length encoding.
*
* Use [lib0/decoding] with [lib0/encoding]. Every encoding function has a corresponding decoding function.
*
* Encodes numbers in little-endian order (least to most significant byte order)
* and is compatible with Golang's binary encoding (https://golang.org/pkg/encoding/binary/)
* which is also used in Protocol Buffers.
*
* ```js
* // encoding step
* const encoder = encoding.createEncoder()
* encoding.writeVarUint(encoder, 256)
* encoding.writeVarString(encoder, 'Hello world!')
* const buf = encoding.toUint8Array(encoder)
* ```
*
* ```js
* // decoding step
* const decoder = decoding.createDecoder(buf)
* decoding.readVarUint(decoder) // => 256
* decoding.readVarString(decoder) // => 'Hello world!'
* decoding.hasContent(decoder) // => false - all data is read
* ```
*
* @module decoding
*/
const errorUnexpectedEndOfArray = create$1("Unexpected end of array");
const errorIntegerOutOfRange = create$1("Integer out of Range");
/**
* A Decoder handles the decoding of an Uint8Array.
*/
var Decoder = class {
	/**
	* @param {Uint8Array} uint8Array Binary data to decode
	*/
	constructor(uint8Array) {
		/**
		* Decoding target.
		*
		* @type {Uint8Array}
		*/
		this.arr = uint8Array;
		/**
		* Current decoding position.
		*
		* @type {number}
		*/
		this.pos = 0;
	}
};
/**
* @function
* @param {Uint8Array} uint8Array
* @return {Decoder}
*/
const createDecoder = (uint8Array) => new Decoder(uint8Array);
/**
* Create an Uint8Array view of the next `len` bytes and advance the position by `len`.
*
* Important: The Uint8Array still points to the underlying ArrayBuffer. Make sure to discard the result as soon as possible to prevent any memory leaks.
*            Use `buffer.copyUint8Array` to copy the result into a new Uint8Array.
*
* @function
* @param {Decoder} decoder The decoder instance
* @param {number} len The length of bytes to read
* @return {Uint8Array}
*/
const readUint8Array = (decoder, len) => {
	const view = new Uint8Array(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
	decoder.pos += len;
	return view;
};
/**
* Read variable length Uint8Array.
*
* Important: The Uint8Array still points to the underlying ArrayBuffer. Make sure to discard the result as soon as possible to prevent any memory leaks.
*            Use `buffer.copyUint8Array` to copy the result into a new Uint8Array.
*
* @function
* @param {Decoder} decoder
* @return {Uint8Array}
*/
const readVarUint8Array = (decoder) => readUint8Array(decoder, readVarUint(decoder));
/**
* Read one byte as unsigned integer.
* @function
* @param {Decoder} decoder The decoder instance
* @return {number} Unsigned 8-bit integer
*/
const readUint8 = (decoder) => decoder.arr[decoder.pos++];
/**
* Read unsigned integer (32bit) with variable length.
* 1/8th of the storage is used as encoding overhead.
*  * numbers < 2^7 is stored in one bytlength
*  * numbers < 2^14 is stored in two bylength
*
* @function
* @param {Decoder} decoder
* @return {number} An unsigned integer.length
*/
const readVarUint = (decoder) => {
	let num = 0;
	let mult = 1;
	const len = decoder.arr.length;
	while (decoder.pos < len) {
		const r = decoder.arr[decoder.pos++];
		num = num + (r & BITS7) * mult;
		mult *= 128;
		if (r < BIT8) return num;
		/* c8 ignore start */
		if (num > MAX_SAFE_INTEGER) throw errorIntegerOutOfRange;
	}
	throw errorUnexpectedEndOfArray;
};
/**
* We don't test this function anymore as we use native decoding/encoding by default now.
* Better not modify this anymore..
*
* Transforming utf8 to a string is pretty expensive. The code performs 10x better
* when String.fromCodePoint is fed with all characters as arguments.
* But most environments have a maximum number of arguments per functions.
* For effiency reasons we apply a maximum of 10000 characters at once.
*
* @function
* @param {Decoder} decoder
* @return {String} The read String.
*/
/* c8 ignore start */
const _readVarStringPolyfill = (decoder) => {
	let remainingLen = readVarUint(decoder);
	if (remainingLen === 0) return "";
	else {
		let encodedString = String.fromCodePoint(readUint8(decoder));
		if (--remainingLen < 100) while (remainingLen--) encodedString += String.fromCodePoint(readUint8(decoder));
		else while (remainingLen > 0) {
			const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
			const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
			decoder.pos += nextLen;
			encodedString += String.fromCodePoint.apply(null, bytes);
			remainingLen -= nextLen;
		}
		return decodeURIComponent(escape(encodedString));
	}
};
/* c8 ignore stop */
/**
* @function
* @param {Decoder} decoder
* @return {String} The read String
*/
const _readVarStringNative = (decoder) => utf8TextDecoder.decode(readVarUint8Array(decoder));
/**
* Read string of variable length
* * varUint is used to store the length of the string
*
* @function
* @param {Decoder} decoder
* @return {String} The read String
*
*/
/* c8 ignore next */
const readVarString = utf8TextDecoder ? _readVarStringNative : _readVarStringPolyfill;

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
		setIfUndefined(this._observers, name, create$2).add(f);
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
/**
* @module awareness-protocol
*/
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
/**
* @param {Awareness} awareness
* @param {Array<number>} clients
* @return {Uint8Array}
*/
const encodeAwarenessUpdate = (awareness, clients, states = awareness.states) => {
	const len = clients.length;
	const encoder = createEncoder();
	writeVarUint(encoder, len);
	for (let i = 0; i < len; i++) {
		const clientID = clients[i];
		const state = states.get(clientID) || null;
		const clock = awareness.meta.get(clientID).clock;
		writeVarUint(encoder, clientID);
		writeVarUint(encoder, clock);
		writeVarString(encoder, JSON.stringify(state));
	}
	return toUint8Array(encoder);
};
/**
* @param {Awareness} awareness
* @param {Uint8Array} update
* @param {any} origin This will be added to the emitted change event
*/
const applyAwarenessUpdate = (awareness, update, origin) => {
	const decoder = createDecoder(update);
	const timestamp = getUnixTime();
	const added = [];
	const updated = [];
	const filteredUpdated = [];
	const removed = [];
	const len = readVarUint(decoder);
	for (let i = 0; i < len; i++) {
		const clientID = readVarUint(decoder);
		let clock = readVarUint(decoder);
		const state = JSON.parse(readVarString(decoder));
		const clientMeta = awareness.meta.get(clientID);
		const prevState = awareness.states.get(clientID);
		const currClock = clientMeta === void 0 ? 0 : clientMeta.clock;
		if (currClock < clock || currClock === clock && state === null && awareness.states.has(clientID)) {
			if (state === null) if (clientID === awareness.clientID && awareness.getLocalState() != null) clock++;
			else awareness.states.delete(clientID);
			else awareness.states.set(clientID, state);
			awareness.meta.set(clientID, {
				clock,
				lastUpdated: timestamp
			});
			if (clientMeta === void 0 && state !== null) added.push(clientID);
			else if (clientMeta !== void 0 && state === null) removed.push(clientID);
			else if (state !== null) {
				if (!equalityDeep(state, prevState)) filteredUpdated.push(clientID);
				updated.push(clientID);
			}
		}
	}
	if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) awareness.emit("change", [{
		added,
		updated: filteredUpdated,
		removed
	}, origin]);
	if (added.length > 0 || updated.length > 0 || removed.length > 0) awareness.emit("update", [{
		added,
		updated,
		removed
	}, origin]);
};

//#endregion
//#region node_modules/yrb-lite-reliable/dist/reliable_sync.js
const DEFAULTS = {
	resendInterval: 1e3,
	maxUnconfirmedResends: 8
};
var ReliableSync = class {
	constructor(opts) {
		/** False after the no-ack fallback trips; updates then go fire-and-forget. */
		this.reliable = true;
		/** Unacked local updates, in order. */
		this.pending = [];
		this.nextSeq = 1;
		this.everAcked = false;
		this._resendsSinceProgress = 0;
		this._connected = false;
		this._timer = void 0;
		const { send, merge, resendInterval, maxUnconfirmedResends, onFallback } = opts ?? {};
		if (typeof send !== "function") throw new TypeError("ReliableSync requires a send(update, id) function");
		if (typeof merge !== "function") throw new TypeError("ReliableSync requires a merge(updates) function");
		this._send = send;
		this._merge = merge;
		this.resendInterval = resendInterval ?? DEFAULTS.resendInterval;
		this.maxUnconfirmedResends = maxUnconfirmedResends ?? DEFAULTS.maxUnconfirmedResends;
		this._onFallback = onFallback;
		this._setInterval = opts.setInterval ?? ((fn, ms) => setInterval(fn, ms));
		this._clearInterval = opts.clearInterval ?? ((h) => clearInterval(h));
	}
	/** True while there are unacknowledged local updates. */
	get hasPending() {
		return this.pending.length > 0;
	}
	/**
	* Record a local document update. While reliable, it's queued and the unacked
	* tail is flushed; once we've fallen back, it's sent fire-and-forget.
	*/
	enqueue(update) {
		if (!this.reliable) {
			this._send(update, void 0);
			return;
		}
		this.pending.push({
			seq: this.nextSeq++,
			update
		});
		this.flush();
	}
	/**
	* Send the whole unacked tail as one merged delta. The id is the highest seq
	* in the batch, so a single { ack } cumulatively confirms everything up to it.
	* No-op while disconnected (the tail is replayed on the next onConnect).
	*/
	flush() {
		if (!this._connected || this.pending.length === 0) return;
		const updates = this.pending.map((p) => p.update);
		const merged = updates.length === 1 ? updates[0] : this._merge(updates);
		const id = this.pending[this.pending.length - 1].seq;
		this._send(merged, id);
	}
	/** Confirm delivery up to `id`: prune every queued update with seq <= id. */
	onAck(id) {
		this.everAcked = true;
		this._resendsSinceProgress = 0;
		this.pending = this.pending.filter((p) => p.seq > id);
	}
	/** Transport (re)connected: replay the unacked tail and resume retransmits. */
	onConnect() {
		this._connected = true;
		this.flush();
		this._startTimer();
	}
	/** Transport dropped: keep the queue (for reconnect replay), pause the timer. */
	onDisconnect() {
		this._connected = false;
		this._stopTimer();
	}
	/**
	* One retransmit tick. Exposed for deterministic testing; normally driven by
	* the internal timer. If we keep resending on a live connection and never get
	* an ack, the server doesn't support reliable delivery, so fall back to
	* fire-and-forget (and stop tracking, since idempotent CRDT sync covers it).
	*/
	onTick() {
		if (!this._connected || this.pending.length === 0) return;
		if (!this.everAcked && ++this._resendsSinceProgress > this.maxUnconfirmedResends) {
			this.reliable = false;
			this.pending = [];
			this._stopTimer();
			this._onFallback?.();
			return;
		}
		this.flush();
	}
	/** Stop timers and drop references. Call when the provider is destroyed. */
	destroy() {
		this._stopTimer();
		this.pending = [];
	}
	_startTimer() {
		if (this._timer !== void 0 || !this.reliable) return;
		this._timer = this._setInterval(() => this.onTick(), this.resendInterval);
		const t = this._timer;
		if (t && typeof t.unref === "function") t.unref();
	}
	_stopTimer() {
		if (this._timer !== void 0) this._clearInterval(this._timer);
		this._timer = void 0;
	}
};

//#endregion
//#region node_modules/y-protocols/sync.js
/**
* @module sync-protocol
*/
/**
* @typedef {Map<number, number>} StateMap
*/
/**
* Core Yjs defines two message types:
* • YjsSyncStep1: Includes the State Set of the sending client. When received, the client should reply with YjsSyncStep2.
* • YjsSyncStep2: Includes all missing structs and the complete delete set. When received, the client is assured that it
*   received all information from the remote client.
*
* In a peer-to-peer network, you may want to introduce a SyncDone message type. Both parties should initiate the connection
* with SyncStep1. When a client received SyncStep2, it should reply with SyncDone. When the local client received both
* SyncStep2 and SyncDone, it is assured that it is synced to the remote client.
*
* In a client-server model, you want to handle this differently: The client should initiate the connection with SyncStep1.
* When the server receives SyncStep1, it should reply with SyncStep2 immediately followed by SyncStep1. The client replies
* with SyncStep2 when it receives SyncStep1. Optionally the server may send a SyncDone after it received SyncStep2, so the
* client knows that the sync is finished.  There are two reasons for this more elaborated sync model: 1. This protocol can
* easily be implemented on top of http and websockets. 2. The server should only reply to requests, and not initiate them.
* Therefore it is necessary that the client initiates the sync.
*
* Construction of a message:
* [messageType : varUint, message definition..]
*
* Note: A message does not include information about the room name. This must to be handled by the upper layer protocol!
*
* stringify[messageType] stringifies a message definition (messageType is already read from the bufffer)
*/
const messageYjsSyncStep1 = 0;
const messageYjsSyncStep2 = 1;
const messageYjsUpdate = 2;
/**
* Create a sync step 1 message based on the state of the current shared document.
*
* @param {encoding.Encoder} encoder
* @param {Y.Doc} doc
*/
const writeSyncStep1 = (encoder, doc) => {
	writeVarUint(encoder, messageYjsSyncStep1);
	const sv = Y.encodeStateVector(doc);
	writeVarUint8Array(encoder, sv);
};
/**
* @param {encoding.Encoder} encoder
* @param {Y.Doc} doc
* @param {Uint8Array} [encodedStateVector]
*/
const writeSyncStep2 = (encoder, doc, encodedStateVector) => {
	writeVarUint(encoder, messageYjsSyncStep2);
	writeVarUint8Array(encoder, Y.encodeStateAsUpdate(doc, encodedStateVector));
};
/**
* Read SyncStep1 message and reply with SyncStep2.
*
* @param {decoding.Decoder} decoder The reply to the received message
* @param {encoding.Encoder} encoder The received message
* @param {Y.Doc} doc
*/
const readSyncStep1 = (decoder, encoder, doc) => writeSyncStep2(encoder, doc, readVarUint8Array(decoder));
/**
* Read and apply Structs and then DeleteStore to a y instance.
*
* @param {decoding.Decoder} decoder
* @param {Y.Doc} doc
* @param {any} transactionOrigin
*/
const readSyncStep2 = (decoder, doc, transactionOrigin) => {
	try {
		Y.applyUpdate(doc, readVarUint8Array(decoder), transactionOrigin);
	} catch (error) {
		console.error("Caught error while handling a Yjs update", error);
	}
};
/**
* @param {encoding.Encoder} encoder
* @param {Uint8Array} update
*/
const writeUpdate = (encoder, update) => {
	writeVarUint(encoder, messageYjsUpdate);
	writeVarUint8Array(encoder, update);
};
/**
* Read and apply Structs and then DeleteStore to a y instance.
*
* @param {decoding.Decoder} decoder
* @param {Y.Doc} doc
* @param {any} transactionOrigin
*/
const readUpdate = readSyncStep2;
/**
* @param {decoding.Decoder} decoder A message received from another client
* @param {encoding.Encoder} encoder The reply message. Does not need to be sent if empty.
* @param {Y.Doc} doc
* @param {any} transactionOrigin
*/
const readSyncMessage = (decoder, encoder, doc, transactionOrigin) => {
	const messageType = readVarUint(decoder);
	switch (messageType) {
		case messageYjsSyncStep1:
			readSyncStep1(decoder, encoder, doc);
			break;
		case messageYjsSyncStep2:
			readSyncStep2(decoder, doc, transactionOrigin);
			break;
		case messageYjsUpdate:
			readUpdate(decoder, doc, transactionOrigin);
			break;
		default: throw new Error("Unknown message type");
	}
	return messageType;
};

//#endregion
//#region node_modules/y-protocols/auth.js
const messagePermissionDenied = 0;
/**
* @callback PermissionDeniedHandler
* @param {any} y
* @param {string} reason
*/
/**
*
* @param {decoding.Decoder} decoder
* @param {Y.Doc} y
* @param {PermissionDeniedHandler} permissionDeniedHandler
*/
const readAuthMessage = (decoder, y, permissionDeniedHandler) => {
	switch (readVarUint(decoder)) {
		case messagePermissionDenied: permissionDeniedHandler(y, readVarString(decoder));
	}
};

//#endregion
//#region node_modules/yrb-lite-reliable/dist/sync_engine.js
const MessageType = {
	Sync: 0,
	Awareness: 1,
	Auth: 2,
	QueryAwareness: 3
};
var SyncEngine = class {
	constructor(doc, opts) {
		this._synced = false;
		const { send, awareness = null, reliable = true, resendInterval, maxUnconfirmedResends, onFallback, setInterval: setIntervalFn, clearInterval: clearIntervalFn } = opts ?? {};
		if (!doc) throw new TypeError("SyncEngine requires a Y.Doc");
		if (typeof send !== "function") throw new TypeError("SyncEngine requires a send(frame, id) function");
		this.doc = doc;
		this.awareness = awareness;
		this.reliable = reliable;
		this._send = send;
		this._delivery = new ReliableSync({
			merge: mergeUpdates,
			send: (update, id) => this._send(this._frameUpdate(update), id),
			resendInterval,
			maxUnconfirmedResends,
			onFallback,
			setInterval: setIntervalFn,
			clearInterval: clearIntervalFn
		});
		this._onDocUpdate = (update, origin) => {
			if (origin === this) return;
			if (this.reliable && this._delivery.reliable) this._delivery.enqueue(update);
			else this._send(this._frameUpdate(update), void 0);
		};
		this.doc.on("update", this._onDocUpdate);
		if (this.awareness) {
			this._onAwarenessUpdate = ({ added, updated, removed }) => {
				const changed = added.concat(updated, removed);
				this._send(this._frameAwareness(changed), void 0, { awareness: true });
			};
			this.awareness.on("update", this._onAwarenessUpdate);
		}
	}
	/** True once we've received the server's SyncStep2 (the document is caught up). */
	get synced() {
		return this._synced;
	}
	/** True while there are unacknowledged local document updates in flight. */
	get hasPending() {
		return this._delivery.hasPending;
	}
	/** Transport connected: send the opening handshake and replay the unacked tail. */
	onConnect() {
		this._send(this._frameSyncStep1(), void 0);
		if (this.awareness && this.awareness.getLocalState() !== null) this._send(this._frameAwareness([this.doc.clientID]), void 0, { awareness: true });
		if (this.reliable) this._delivery.onConnect();
	}
	/** Transport dropped: pause retransmits (queue kept) and clear remote presence. */
	onDisconnect() {
		this._synced = false;
		this._delivery.onDisconnect();
		if (this.awareness) {
			const remote = [...this.awareness.getStates().keys()].filter((c) => c !== this.doc.clientID);
			if (remote.length) removeAwarenessStates(this.awareness, remote, this);
		}
	}
	/** A reliable-delivery `{ ack: id }` envelope arrived. */
	ack(id) {
		this._delivery.onAck(id);
	}
	/**
	* Decode and apply one incoming binary protocol frame (document sync, awareness,
	* query, or auth). Returns a reply frame to transmit (e.g. SyncStep2 answering a
	* SyncStep1, or an awareness reply to a query), or null if there's nothing to send.
	*/
	receive(frame) {
		const decoder = createDecoder(frame);
		const encoder = createEncoder();
		switch (readVarUint(decoder)) {
			case MessageType.Sync: {
				writeVarUint(encoder, MessageType.Sync);
				const syncType = readSyncMessage(decoder, encoder, this.doc, this);
				if (!this._synced && syncType === messageYjsSyncStep2) this._synced = true;
				break;
			}
			case MessageType.Awareness:
				if (this.awareness) applyAwarenessUpdate(this.awareness, readVarUint8Array(decoder), this);
				return null;
			case MessageType.QueryAwareness:
				if (!this.awareness) return null;
				writeVarUint(encoder, MessageType.Awareness);
				writeVarUint8Array(encoder, encodeAwarenessUpdate(this.awareness, [...this.awareness.getStates().keys()]));
				break;
			case MessageType.Auth:
				readAuthMessage(decoder, this.doc, (_doc, reason) => console.warn(`[yrb-lite] auth denied: ${reason}`));
				return null;
			default: return null;
		}
		return length$1(encoder) > 1 ? toUint8Array(encoder) : null;
	}
	/** Detach doc/awareness listeners and stop retransmits. */
	destroy() {
		this.doc.off("update", this._onDocUpdate);
		if (this.awareness && this._onAwarenessUpdate) this.awareness.off("update", this._onAwarenessUpdate);
		this._delivery.destroy();
	}
	_frameSyncStep1() {
		const e = createEncoder();
		writeVarUint(e, MessageType.Sync);
		writeSyncStep1(e, this.doc);
		return toUint8Array(e);
	}
	_frameUpdate(update) {
		const e = createEncoder();
		writeVarUint(e, MessageType.Sync);
		writeUpdate(e, update);
		return toUint8Array(e);
	}
	_frameAwareness(clients) {
		const e = createEncoder();
		writeVarUint(e, MessageType.Awareness);
		writeVarUint8Array(e, encodeAwarenessUpdate(this.awareness, clients));
		return toUint8Array(e);
	}
};

//#endregion
//#region node_modules/yrb-lite-reliable/dist/base64.js
const toBase64 = (bytes) => btoa(Array.from(bytes, (b) => String.fromCharCode(b)).join(""));
const fromBase64 = (str) => Uint8Array.from(atob(str), (c) => c.charCodeAt(0));

//#endregion
//#region node_modules/yrb-lite-reliable/dist/actioncable_provider.js
var ActionCableProvider = class {
	constructor(doc, consumer, channelName, channelParams = {}, opts = {}) {
		this.subscription = null;
		this.doc = doc;
		this.consumer = consumer;
		this.channelName = channelName;
		this.channelParams = channelParams;
		this.awareness = opts.awareness ?? new Awareness(doc);
		this.awarenessWhisper = opts.awarenessWhisper ?? false;
		this.engine = new SyncEngine(doc, {
			awareness: this.awareness,
			reliable: opts.reliable,
			resendInterval: opts.resendInterval,
			maxUnconfirmedResends: opts.maxUnconfirmedResends,
			onFallback: opts.onFallback,
			send: (frame, id, sendOpts) => this._send(frame, id, sendOpts)
		});
	}
	/** True once the document has caught up with the server (received a SyncStep2). */
	get synced() {
		return this.engine.synced;
	}
	/** True while there are unacknowledged local document updates in flight. */
	get hasPending() {
		return this.engine.hasPending;
	}
	connect() {
		if (this.subscription) return;
		const provider = this;
		this.subscription = this.consumer.subscriptions.create({
			channel: this.channelName,
			...this.channelParams
		}, {
			received(message) {
				if (message && message.ack !== void 0) {
					provider.engine.ack(message.ack);
					return;
				}
				const payload = message && (message.m ?? message.update);
				if (typeof payload !== "string") return;
				const reply = provider.engine.receive(fromBase64(payload));
				if (reply) provider._send(reply, void 0);
			},
			connected() {
				provider.engine.onConnect();
			},
			disconnected() {
				provider.engine.onDisconnect();
			}
		});
	}
	disconnect() {
		if (!this.subscription) return;
		this.engine.onDisconnect();
		this.consumer.subscriptions.remove(this.subscription);
		this.subscription = null;
	}
	destroy() {
		this.disconnect();
		this.engine.destroy();
	}
	_send(frame, id, opts) {
		const sub = this.subscription;
		if (!sub) return;
		const update = toBase64(frame);
		const payload = id === void 0 ? { update } : {
			update,
			id
		};
		if ((opts?.awareness ?? frame[0] === MessageType.Awareness) && this.awarenessWhisper && typeof sub.whisper === "function") sub.whisper(payload);
		else sub.send(payload);
	}
};

//#endregion
//#region src/editor_collaboration.js
var Collaboration = class extends HTMLElement {
	#teardown = null;
	connectedCallback() {
		this.editorElement = this.closest("lexxy-editor");
		this.editor = this.editorElement.editor;
		if (this.editor) this.#init();
		else this.editorElement.addEventListener("lexxy:initialize", () => {
			this.editor = this.editorElement.editor;
			this.#init();
		}, { once: true });
	}
	disconnectedCallback() {
		this.#teardown?.();
	}
	async #init() {
		const id = this.getAttribute("id") || "main";
		const name = this.getAttribute("name") || "Example User";
		const color = this.getAttribute("color") || "#958DF1";
		const channelName = this.getAttribute("channel-name") || "SyncChannel";
		const rawParams = this.getAttribute("channel-params") || "{}";
		const channelParams = typeof rawParams === "string" ? JSON.parse(rawParams) : rawParams;
		const doc = this.doc || new Doc();
		const awareness = this.awareness || new Awareness(doc);
		const provider = this.provider || new ActionCableProvider(doc, this.consumer, channelName, channelParams, { awareness });
		const docMap = /* @__PURE__ */ new Map();
		docMap.set(id, doc);
		this.editor.update(() => $getRoot().clear(), {
			tag: HISTORY_MERGE_TAG,
			discrete: true
		});
		const binding = createBinding(this.editor, provider, id, doc, docMap);
		const unsubscribeListeners = registerCollaborationListeners(this.editor, provider, binding);
		bootstrapWhenSynced(this.editor, provider, binding);
		const cursorsContainer = this.#createCursorsContainer();
		binding.cursorsContainer = cursorsContainer;
		initLocalState(provider, name, color, true, {
			name,
			color
		});
		setLocalStateFocus(provider, name, color, true, {
			name,
			color
		});
		const rootElement = this.editor.getRootElement();
		const onFocus = () => setLocalStateFocus(provider, name, color, true, {
			name,
			color
		});
		const onBlur = () => setLocalStateFocus(provider, name, color, false, {
			name,
			color
		});
		rootElement?.addEventListener("focus", onFocus);
		rootElement?.addEventListener("blur", onBlur);
		const renderCursors = () => syncCursorPositions(binding, provider);
		awareness.on("update", renderCursors);
		const unsubscribeCursorRender = this.editor.registerUpdateListener(renderCursors);
		syncCursorPositions(binding, provider);
		this.provider = provider;
		this.binding = binding;
		this.#teardown = () => {
			this.#teardown = null;
			rootElement?.removeEventListener("focus", onFocus);
			rootElement?.removeEventListener("blur", onBlur);
			awareness.off("update", renderCursors);
			unsubscribeCursorRender();
			unsubscribeListeners();
			cursorsContainer.remove();
			provider.disconnect();
		};
	}
	#createCursorsContainer() {
		const host = this.editorElement.querySelector(".lexxy-editor-container") || this.editorElement;
		if (getComputedStyle(host).position === "static") host.style.position = "relative";
		const container = document.createElement("div");
		container.className = "lexxy-collab-cursors";
		container.style.cssText = "position:absolute;inset:0;pointer-events:none;";
		host.appendChild(container);
		return container;
	}
};
function bootstrapWhenSynced(editor, provider, binding) {
	let done = false;
	const seed = () => {
		if (done || !provider.synced) return;
		done = true;
		clearInterval(timer);
		if (binding.root.getSharedType().length === 0) editor.update(() => {
			const root = $getRoot();
			root.clear();
			root.append($createParagraphNode());
		}, { tag: HISTORY_MERGE_TAG });
	};
	const timer = setInterval(seed, 50);
	if (typeof timer?.unref === "function") timer.unref();
}
function registerCollaborationListeners(editor, provider, binding) {
	const unsubscribeUpdateListener = editor.registerUpdateListener(({ dirtyElements, dirtyLeaves, editorState, normalizedNodes, prevEditorState, tags }) => {
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
//#region src/custom_yjs_provider.js
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
function uint8ArrayToBase64(uint8Array) {
	const binaryString = Array.from(uint8Array).map((byte) => String.fromCharCode(byte)).join("");
	return btoa(binaryString);
}
function base64ToUint8Array(base64) {
	const binaryString = atob(base64);
	const bytes = new Uint8Array(binaryString.length);
	for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
	return bytes;
}
/**
* options: {
*   awareness?: Awareness
* }
*/
var CustomYjsProvider = class {
	#updateHandler;
	#awarenessUpdateHandler;
	#synced;
	constructor(doc, consumer, channelName, channelParams = {}, options = {}) {
		this.doc = doc;
		this.consumer = consumer;
		this.channelName = channelName;
		this.channelParams = channelParams;
		this.awareness = options.awareness || null;
		this.subscription = null;
		this.connected = false;
		this.#synced = false;
		this.#updateHandler = (update, origin) => {
			if (origin === this) return;
			if (this.subscription) {
				const base64Update = uint8ArrayToBase64(update);
				this.subscription.send({
					type: "update",
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
			const awarenessUpdate = encodeAwarenessUpdate(this.awareness, changedClients);
			if (this.subscription && this.connected) {
				const awarenessMessage = {
					type: "awareness",
					update: uint8ArrayToBase64(awarenessUpdate)
				};
				if (this.subscription.whisper) this.subscription.whisper(awarenessMessage);
				else this.subscription.send(awarenessMessage);
			}
		};
	}
	connect() {
		if (this.subscription) return;
		this.subscription = this.consumer.subscriptions.create({
			channel: this.channelName,
			...this.channelParams
		}, {
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
		});
		this.doc.on("update", this.#updateHandler);
		if (this.awareness) this.awareness.on("update", this.#awarenessUpdateHandler);
	}
	disconnect() {
		if (!this.subscription) return;
		this.doc.off("update", this.#updateHandler);
		if (this.awareness) this.awareness.off("update", this.#awarenessUpdateHandler);
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
			case "sync":
				this.#handleSync(data.updates);
				break;
			case "update":
				this.#handleUpdate(data.update);
				break;
			case "awareness":
				this.#handleAwareness(data.update);
				break;
			default: console.warn("CustomYjsProvider: Unknown message type", data.type);
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
		applyAwarenessUpdate(this.awareness, update, this);
	}
};

//#endregion
//#region src/index.js
if (!customElements.get("lexxy-collaboration")) customElements.define("lexxy-collaboration", Collaboration);

//#endregion
export { Collaboration, CustomYjsProvider, ActionCableProvider as YrbLiteProvider };