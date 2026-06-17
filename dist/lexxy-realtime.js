import { createBinding, initLocalState, syncLexicalUpdateToYjs, syncYjsChangesToLexical } from "@lexical/yjs";
import * as Y from "yjs";
import { Doc } from "yjs";
import { $getNodeByKey, $getSelection, $isRangeSelection } from "lexical";

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
const parseInt$1 = Number.parseInt;

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
* @param {string} s
* @return {string}
*/
const toLowerCase = (s) => s.toLowerCase();
const trimLeftRegex = /^\s*/g;
/**
* @param {string} s
* @return {string}
*/
const trimLeft = (s) => s.replace(trimLeftRegex, "");
const fromCamelCaseRegex = /([A-Z])/g;
/**
* @param {string} s
* @param {string} separator
* @return {string}
*/
const fromCamelCase = (s, separator) => trimLeft(s.replace(fromCamelCaseRegex, (match) => `${separator}${toLowerCase(match)}`));
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
		const _f = (...args$1) => {
			this.off(name, _f);
			f(...args$1);
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
	emit(name, args$1) {
		return from((this._observers.get(name) || create()).values()).forEach((f) => f(...args$1));
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
/**
* @template V
* @template {V} OPTS
*
* @param {V} value
* @param {Array<OPTS>} options
*/
const isOneOf = (value, options) => options.includes(value);
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
//#region node_modules/lib0/conditions.js
/**
* Often used conditions.
*
* @module conditions
*/
/**
* @template T
* @param {T|null|undefined} v
* @return {T|null}
*/
/* c8 ignore next */
const undefinedToNull = (v) => v === void 0 ? null : v;

//#endregion
//#region node_modules/lib0/storage.js
/**
* Isomorphic variable storage.
*
* Uses LocalStorage in the browser and falls back to in-memory storage.
*
* @module storage
*/
/* c8 ignore start */
var VarStoragePolyfill = class {
	constructor() {
		this.map = /* @__PURE__ */ new Map();
	}
	/**
	* @param {string} key
	* @param {any} newValue
	*/
	setItem(key, newValue) {
		this.map.set(key, newValue);
	}
	/**
	* @param {string} key
	*/
	getItem(key) {
		return this.map.get(key);
	}
};
/* c8 ignore stop */
/**
* @type {any}
*/
let _localStorage = new VarStoragePolyfill();
let usePolyfill = true;
/* c8 ignore start */
try {
	if (typeof localStorage !== "undefined" && localStorage) {
		_localStorage = localStorage;
		usePolyfill = false;
	}
} catch (e) {}
/* c8 ignore stop */
/**
* This is basically localStorage in browser, or a polyfill in nodejs
*/
/* c8 ignore next */
const varStorage = _localStorage;
/**
* A polyfill for `addEventListener('storage', event => {..})` that does nothing if the polyfill is being used.
*
* @param {function({ key: string, newValue: string, oldValue: string }): void} eventHandler
* @function
*/
/* c8 ignore next */
const onChange = (eventHandler) => usePolyfill || addEventListener("storage", eventHandler);
/**
* A polyfill for `removeEventListener('storage', event => {..})` that does nothing if the polyfill is being used.
*
* @param {function({ key: string, newValue: string, oldValue: string }): void} eventHandler
* @function
*/
/* c8 ignore next */
const offChange = (eventHandler) => usePolyfill || removeEventListener("storage", eventHandler);

//#endregion
//#region node_modules/lib0/environment.js
/**
* Isomorphic module to work access the environment (query params, env variables).
*
* @module environment
*/
/* c8 ignore next 2 */
const isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
/* c8 ignore next */
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && !isNode;
/* c8 ignore next 3 */
const isMac = typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
/**
* @type {Map<string,string>}
*/
let params;
const args = [];
/* c8 ignore start */
const computeParams = () => {
	if (params === void 0) if (isNode) {
		params = create();
		const pargs = process.argv;
		let currParamName = null;
		for (let i = 0; i < pargs.length; i++) {
			const parg = pargs[i];
			if (parg[0] === "-") {
				if (currParamName !== null) params.set(currParamName, "");
				currParamName = parg;
			} else if (currParamName !== null) {
				params.set(currParamName, parg);
				currParamName = null;
			} else args.push(parg);
		}
		if (currParamName !== null) params.set(currParamName, "");
	} else if (typeof location === "object") {
		params = create();
		(location.search || "?").slice(1).split("&").forEach((kv) => {
			if (kv.length !== 0) {
				const [key, value] = kv.split("=");
				params.set(`--${fromCamelCase(key, "-")}`, value);
				params.set(`-${fromCamelCase(key, "-")}`, value);
			}
		});
	} else params = create();
	return params;
};
/* c8 ignore stop */
/**
* @param {string} name
* @return {boolean}
*/
/* c8 ignore next */
const hasParam = (name) => computeParams().has(name);
/**
* @param {string} name
* @return {string|null}
*/
/* c8 ignore next 4 */
const getVariable = (name) => isNode ? undefinedToNull(process.env[name.toUpperCase().replaceAll("-", "_")]) : undefinedToNull(varStorage.getItem(name));
/**
* @param {string} name
* @return {boolean}
*/
/* c8 ignore next 2 */
const hasConf = (name) => hasParam("--" + name) || getVariable(name) !== null;
/* c8 ignore next */
const production = hasConf("production");
/* c8 ignore next 2 */
const forceColor = isNode && isOneOf(process.env.FORCE_COLOR, [
	"true",
	"1",
	"2"
]);
/* c8 ignore start */
/**
* Color is enabled by default if the terminal supports it.
*
* Explicitly enable color using `--color` parameter
* Disable color using `--no-color` parameter or using `NO_COLOR=1` environment variable.
* `FORCE_COLOR=1` enables color and takes precedence over all.
*/
const supportsColor = forceColor || !hasParam("--no-colors") && !hasConf("no-color") && (!isNode || process.stdout.isTTY) && (!isNode || hasParam("--color") || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));
/* c8 ignore stop */

//#endregion
//#region node_modules/lib0/buffer.js
/**
* Utility functions to work with buffers (Uint8Array).
*
* @module buffer
*/
/**
* @param {number} len
*/
const createUint8ArrayFromLen = (len) => new Uint8Array(len);
/**
* Create Uint8Array with initial content from buffer
*
* @param {ArrayBuffer} buffer
* @param {number} byteOffset
* @param {number} length
*/
const createUint8ArrayViewFromArrayBuffer = (buffer, byteOffset, length$2) => new Uint8Array(buffer, byteOffset, length$2);
/**
* Create Uint8Array with initial content from buffer
*
* @param {ArrayBuffer} buffer
*/
const createUint8ArrayFromArrayBuffer = (buffer) => new Uint8Array(buffer);
/* c8 ignore start */
/**
* @param {Uint8Array} bytes
* @return {string}
*/
const toBase64Browser = (bytes) => {
	let s = "";
	for (let i = 0; i < bytes.byteLength; i++) s += fromCharCode(bytes[i]);
	return btoa(s);
};
/* c8 ignore stop */
/**
* @param {Uint8Array} bytes
* @return {string}
*/
const toBase64Node = (bytes) => Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString("base64");
/* c8 ignore start */
/**
* @param {string} s
* @return {Uint8Array}
*/
const fromBase64Browser = (s) => {
	const a = atob(s);
	const bytes = createUint8ArrayFromLen(a.length);
	for (let i = 0; i < a.length; i++) bytes[i] = a.charCodeAt(i);
	return bytes;
};
/* c8 ignore stop */
/**
* @param {string} s
*/
const fromBase64Node = (s) => {
	const buf = Buffer.from(s, "base64");
	return createUint8ArrayViewFromArrayBuffer(buf.buffer, buf.byteOffset, buf.byteLength);
};
/* c8 ignore next */
const toBase64$1 = isBrowser ? toBase64Browser : toBase64Node;
/* c8 ignore next */
const fromBase64$1 = isBrowser ? fromBase64Browser : fromBase64Node;

//#endregion
//#region node_modules/lib0/broadcastchannel.js
/**
* Helpers for cross-tab communication using broadcastchannel with LocalStorage fallback.
*
* ```js
* // In browser window A:
* broadcastchannel.subscribe('my events', data => console.log(data))
* broadcastchannel.publish('my events', 'Hello world!') // => A: 'Hello world!' fires synchronously in same tab
*
* // In browser window B:
* broadcastchannel.publish('my events', 'hello from tab B') // => A: 'hello from tab B'
* ```
*
* @module broadcastchannel
*/
/**
* @typedef {Object} Channel
* @property {Set<function(any, any):any>} Channel.subs
* @property {any} Channel.bc
*/
/**
* @type {Map<string, Channel>}
*/
const channels = /* @__PURE__ */ new Map();
/* c8 ignore start */
var LocalStoragePolyfill = class {
	/**
	* @param {string} room
	*/
	constructor(room) {
		this.room = room;
		/**
		* @type {null|function({data:ArrayBuffer}):void}
		*/
		this.onmessage = null;
		/**
		* @param {any} e
		*/
		this._onChange = (e) => e.key === room && this.onmessage !== null && this.onmessage({ data: fromBase64$1(e.newValue || "") });
		onChange(this._onChange);
	}
	/**
	* @param {ArrayBuffer} buf
	*/
	postMessage(buf) {
		varStorage.setItem(this.room, toBase64$1(createUint8ArrayFromArrayBuffer(buf)));
	}
	close() {
		offChange(this._onChange);
	}
};
/* c8 ignore stop */
/* c8 ignore next */
const BC = typeof BroadcastChannel === "undefined" ? LocalStoragePolyfill : BroadcastChannel;
/**
* @param {string} room
* @return {Channel}
*/
const getChannel = (room) => setIfUndefined(channels, room, () => {
	const subs = create$2();
	const bc = new BC(room);
	/**
	* @param {{data:ArrayBuffer}} e
	*/
	/* c8 ignore next */
	bc.onmessage = (e) => subs.forEach((sub) => sub(e.data, "broadcastchannel"));
	return {
		bc,
		subs
	};
});
/**
* Subscribe to global `publish` events.
*
* @function
* @param {string} room
* @param {function(any, any):any} f
*/
const subscribe = (room, f) => {
	getChannel(room).subs.add(f);
	return f;
};
/**
* Unsubscribe from `publish` global events.
*
* @function
* @param {string} room
* @param {function(any, any):any} f
*/
const unsubscribe = (room, f) => {
	const channel = getChannel(room);
	const unsubscribed = channel.subs.delete(f);
	if (unsubscribed && channel.subs.size === 0) {
		channel.bc.close();
		channels.delete(room);
	}
	return unsubscribed;
};
/**
* Publish data to all subscribers (including subscribers on this tab)
*
* @function
* @param {string} room
* @param {any} data
* @param {any} [origin]
*/
const publish = (room, data, origin = null) => {
	const c = getChannel(room);
	c.bc.postMessage(data);
	c.subs.forEach((sub) => sub(data, origin));
};

//#endregion
//#region src/yrb_lite_provider.js
const MessageType = {
	Sync: 0,
	Awareness: 1,
	Auth: 2,
	QueryAwareness: 3
};
const toBase64 = (bin) => btoa(Array.from(bin, (b) => String.fromCharCode(b)).join(""));
const fromBase64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const messageHandlers = {
	[MessageType.Sync]: (encoder, decoder, provider, emitSynced) => {
		writeVarUint(encoder, MessageType.Sync);
		const syncMessageType = readSyncMessage(decoder, encoder, provider.doc, provider);
		if (emitSynced && syncMessageType === messageYjsSyncStep2 && !provider.synced) provider.synced = true;
	},
	[MessageType.QueryAwareness]: (encoder, _decoder, provider) => {
		writeVarUint(encoder, MessageType.Awareness);
		writeVarUint8Array(encoder, encodeAwarenessUpdate(provider.awareness, Array.from(provider.awareness.getStates().keys())));
	},
	[MessageType.Awareness]: (_encoder, decoder, provider) => {
		applyAwarenessUpdate(provider.awareness, readVarUint8Array(decoder), provider);
	},
	[MessageType.Auth]: (_encoder, decoder, provider) => {
		readAuthMessage(decoder, provider.doc, (_ydoc, reason) => console.warn(`Permission denied to access ${provider.channelName}.\n${reason}`));
	}
};
var YrbLiteProvider = class {
	constructor(doc, consumer, channelName, channelParams = {}, { awareness = new Awareness(doc), disableBc = true, reliable = true, resendInterval = 1e3, maxUnconfirmedResends = 8 } = {}) {
		this.doc = doc;
		this.consumer = consumer;
		this.channelName = channelName;
		this.channelParams = channelParams;
		this.awareness = awareness;
		this.disableBc = disableBc;
		this.bcChannelName = `${channelName}_${Object.entries(channelParams).map(([k, v]) => `${k}-${v}`).join("_")}`;
		this.subscription = null;
		this.bcconnected = false;
		this._synced = false;
		this.reliable = reliable;
		this.resendInterval = resendInterval;
		this.maxUnconfirmedResends = maxUnconfirmedResends;
		this.pending = [];
		this.nextSeq = 1;
		this.everAcked = false;
		this._resendsSinceProgress = 0;
		this._serverConnected = false;
		this._resendTimer = void 0;
		this._updateHandler = (update, origin) => {
			if (origin === this) return;
			if (this.reliable) {
				this.pending.push({
					seq: this.nextSeq++,
					update
				});
				this.flushToServer();
			} else this.send(this._syncUpdateFrame(update));
		};
		this._awarenessUpdateHandler = ({ added, updated, removed }) => {
			const changed = added.concat(updated).concat(removed);
			const encoder = createEncoder();
			writeVarUint(encoder, MessageType.Awareness);
			writeVarUint8Array(encoder, encodeAwarenessUpdate(this.awareness, changed));
			this.send(toUint8Array(encoder), { whisper: true });
		};
		this._bcSubscriber = (data, origin) => {
			if (origin === this) return;
			const reply = this._process(new Uint8Array(data), false);
			if (length$1(reply) > 1) publish(this.bcChannelName, toUint8Array(reply), this);
		};
		this.doc.on("update", this._updateHandler);
		this.awareness.on("update", this._awarenessUpdateHandler);
	}
	get synced() {
		return this._synced;
	}
	set synced(state) {
		if (this._synced !== state) this._synced = state;
	}
	connect() {
		if (this.subscription) return;
		const provider = this;
		this._synced = false;
		this.subscription = this.consumer.subscriptions.create({
			channel: this.channelName,
			...this.channelParams
		}, {
			received(message) {
				if (message && message.ack !== void 0) {
					provider.onAck(message.ack);
					return;
				}
				const payload = message && (message.m || message.update);
				if (typeof payload !== "string") return;
				const reply = provider._process(fromBase64(payload), true);
				if (length$1(reply) > 1) provider.send(toUint8Array(reply));
			},
			connected() {
				provider._serverConnected = true;
				const sync = createEncoder();
				writeVarUint(sync, MessageType.Sync);
				writeSyncStep1(sync, provider.doc);
				provider.send(toUint8Array(sync));
				if (provider.awareness.getLocalState() !== null) {
					const aw = createEncoder();
					writeVarUint(aw, MessageType.Awareness);
					writeVarUint8Array(aw, encodeAwarenessUpdate(provider.awareness, [provider.doc.clientID]));
					provider.send(toUint8Array(aw));
				}
				provider.flushToServer();
				provider.startResendTimer();
			},
			disconnected() {
				provider._serverConnected = false;
				provider._synced = false;
				provider.stopResendTimer();
				removeAwarenessStates(provider.awareness, Array.from(provider.awareness.getStates().keys()).filter((c) => c !== provider.doc.clientID), provider);
			}
		});
		this._connectBc();
	}
	disconnect() {
		if (!this.subscription) return;
		this.stopResendTimer();
		this._serverConnected = false;
		this._disconnectBc();
		this.consumer.subscriptions.remove(this.subscription);
		this.subscription = null;
		this._synced = false;
	}
	destroy() {
		this.disconnect();
		this.doc.off("update", this._updateHandler);
		this.awareness.off("update", this._awarenessUpdateHandler);
	}
	flushToServer() {
		if (this.pending.length === 0) return;
		const merged = Y.mergeUpdates(this.pending.map((p) => p.update));
		const id = this.pending[this.pending.length - 1].seq;
		this.send(this._syncUpdateFrame(merged), { id });
	}
	onAck(id) {
		this.everAcked = true;
		this._resendsSinceProgress = 0;
		this.pending = this.pending.filter((p) => p.seq > id);
	}
	onResendTick() {
		if (!this._serverConnected || this.pending.length === 0) return;
		if (!this.everAcked && ++this._resendsSinceProgress > this.maxUnconfirmedResends) {
			console.warn(`[yrb-lite] no acks from ${this.channelName} after ${this.maxUnconfirmedResends} resends; server does not support reliable delivery. Falling back to fire-and-forget.`);
			this.reliable = false;
			this.pending = [];
			this.stopResendTimer();
			return;
		}
		this.flushToServer();
	}
	startResendTimer() {
		if (this._resendTimer || !this.reliable) return;
		this._resendTimer = setInterval(() => this.onResendTick(), this.resendInterval);
		if (this._resendTimer && typeof this._resendTimer.unref === "function") this._resendTimer.unref();
	}
	stopResendTimer() {
		if (this._resendTimer) clearInterval(this._resendTimer);
		this._resendTimer = void 0;
	}
	_syncUpdateFrame(update) {
		const encoder = createEncoder();
		writeVarUint(encoder, MessageType.Sync);
		writeUpdate(encoder, update);
		return toUint8Array(encoder);
	}
	send(frame, { whisper = false, id = void 0 } = {}) {
		if (!this.subscription) {
			if (this.bcconnected) publish(this.bcChannelName, frame, this);
			return;
		}
		const update = toBase64(frame);
		const payload = id === void 0 ? { update } : {
			update,
			id
		};
		if (whisper && typeof this.subscription.whisper === "function") this.subscription.whisper(payload);
		else this.subscription.send(payload);
		if (this.bcconnected) publish(this.bcChannelName, frame, this);
	}
	_process(frame, emitSynced) {
		const decoder = createDecoder(frame);
		const encoder = createEncoder();
		const messageType = readVarUint(decoder);
		const handler = messageHandlers[messageType];
		if (handler) handler(encoder, decoder, this, emitSynced, messageType);
		else console.error("[yrb-lite] unable to handle message type", messageType);
		return encoder;
	}
	_connectBc() {
		if (this.disableBc) return;
		if (!this.bcconnected) {
			subscribe(this.bcChannelName, this._bcSubscriber);
			this.bcconnected = true;
		}
		const step1 = createEncoder();
		writeVarUint(step1, MessageType.Sync);
		writeSyncStep1(step1, this.doc);
		publish(this.bcChannelName, toUint8Array(step1), this);
		const step2 = createEncoder();
		writeVarUint(step2, MessageType.Sync);
		writeSyncStep2(step2, this.doc);
		publish(this.bcChannelName, toUint8Array(step2), this);
		const query = createEncoder();
		writeVarUint(query, MessageType.QueryAwareness);
		publish(this.bcChannelName, toUint8Array(query), this);
		const state = createEncoder();
		writeVarUint(state, MessageType.Awareness);
		writeVarUint8Array(state, encodeAwarenessUpdate(this.awareness, [this.doc.clientID]));
		publish(this.bcChannelName, toUint8Array(state), this);
	}
	_disconnectBc() {
		const encoder = createEncoder();
		writeVarUint(encoder, MessageType.Awareness);
		writeVarUint8Array(encoder, encodeAwarenessUpdate(this.awareness, [this.doc.clientID], /* @__PURE__ */ new Map()));
		this.send(toUint8Array(encoder));
		if (this.bcconnected) {
			unsubscribe(this.bcChannelName, this._bcSubscriber);
			this.bcconnected = false;
		}
	}
};

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
		if (this.editor) this.#init();
		else this.editorElement.addEventListener("lexxy:initialize", () => {
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
		const doc = this.doc || new Doc();
		const awareness = this.awareness || new Awareness(doc);
		const provider = this.provider || new YrbLiteProvider(doc, this.consumer, channelName, channelParams, {
			awareness,
			disableBc
		});
		const docMap = /* @__PURE__ */ new Map();
		docMap.set(id, doc);
		const binding = createBinding(this.editor, provider, id, doc, docMap);
		const unsubscribeListeners = registerCollaborationListeners(this.editor, provider, binding);
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
export { Collaboration, CustomYjsProvider, YrbLiteProvider };