import { createBinding, initLocalState, setLocalStateFocus, syncCursorPositions, syncLexicalUpdateToYjs, syncYjsChangesToLexical } from "@lexical/yjs";
import { $createParagraphNode, $getRoot, HISTORY_MERGE_TAG } from "lexical";
import * as Y from "yjs";
import { Doc, applyUpdate, mergeUpdates } from "yjs";

//#region node_modules/yrby-client/dist/reliable_sync.js
const DEFAULTS = { resendInterval: 1e3 };
var ReliableSync = class {
	/** Unacked local updates, in order. */
	pending = [];
	#send;
	#merge;
	#resendInterval;
	#setInterval;
	#clearInterval;
	#nextSeq = 1;
	#connected = false;
	#timer = void 0;
	#tailCache = void 0;
	constructor(opts) {
		const { send, merge, resendInterval } = opts ?? {};
		if (typeof send !== "function") throw new TypeError("ReliableSync requires a send(update, id) function");
		if (typeof merge !== "function") throw new TypeError("ReliableSync requires a merge(updates) function");
		this.#send = send;
		this.#merge = merge;
		const interval = resendInterval ?? DEFAULTS.resendInterval;
		if (!Number.isFinite(interval) || interval <= 0) throw new TypeError("ReliableSync resendInterval must be a positive number");
		this.#resendInterval = interval;
		this.#setInterval = opts.setInterval ?? ((fn, ms) => setInterval(fn, ms));
		this.#clearInterval = opts.clearInterval ?? ((h) => clearInterval(h));
	}
	/** True while there are unacknowledged local updates. */
	get hasPending() {
		return this.pending.length > 0;
	}
	/**
	* Record a local document update. It is queued and the unacked tail is
	* flushed; the update remains retained until the server acknowledges it.
	*/
	enqueue(update) {
		this.pending.push({
			seq: this.#nextSeq++,
			update
		});
		this.#tailCache = void 0;
		if (this.#connected) this.#startTimer();
		this.flush();
	}
	/**
	* Send the whole unacked tail as one merged delta. The id is the highest seq
	* in the batch, so a single { ack } cumulatively confirms everything up to it.
	* No-op while disconnected (the tail is replayed on the next onConnect).
	*/
	flush() {
		if (!this.#connected || this.pending.length === 0) return;
		this.#send(this.#mergedTail(), this.pending[this.pending.length - 1].seq);
	}
	/**
	* Confirm delivery up to `id`: prune every queued update with seq <= id.
	* Acks arrive over the wire, so validate before pruning. A malformed value
	* (NaN/string/negative) or an impossible future id must not silently drop the
	* queue; invalid acks are ignored.
	*/
	onAck(id) {
		if (!Number.isSafeInteger(id) || id < 0) return;
		if (this.pending.length > 0 && id > this.pending[this.pending.length - 1].seq) return;
		this.pending = this.pending.filter((p) => p.seq > id);
		this.#tailCache = void 0;
		if (this.pending.length === 0) this.#stopTimer();
	}
	/** Transport (re)connected: replay the unacked tail and resume retransmits. */
	onConnect() {
		this.#connected = true;
		this.flush();
		if (this.pending.length > 0) this.#startTimer();
	}
	/** Transport dropped: keep the queue (for reconnect replay), pause the timer. */
	onDisconnect() {
		this.#connected = false;
		this.#stopTimer();
	}
	/**
	* One retransmit tick. Exposed for deterministic testing; normally driven by
	* the internal timer.
	*/
	onTick() {
		if (!this.#connected || this.pending.length === 0) return;
		this.flush();
	}
	/** Stop timers and drop references. Call when the provider is destroyed. */
	destroy() {
		this.#connected = false;
		this.#stopTimer();
		this.pending = [];
		this.#tailCache = void 0;
	}
	/** The unacked tail merged into one delta (memoized between tail changes). */
	#mergedTail() {
		if (this.#tailCache === void 0) {
			const updates = this.pending.map((p) => p.update);
			this.#tailCache = updates.length === 1 ? updates[0] : this.#merge(updates);
		}
		return this.#tailCache;
	}
	#startTimer() {
		if (this.#timer !== void 0) return;
		this.#timer = this.#setInterval(() => this.onTick(), this.#resendInterval);
		const t = this.#timer;
		if (t && typeof t.unref === "function") t.unref();
	}
	#stopTimer() {
		if (this.#timer !== void 0) this.#clearInterval(this.#timer);
		this.#timer = void 0;
	}
};

//#endregion
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
* @return {Uint8Array<ArrayBuffer>}
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
* @return {Uint8Array<ArrayBuffer>}
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
const length = (encoder) => {
	let len = encoder.cpos;
	for (let i = 0; i < encoder.bufs.length; i++) len += encoder.bufs[i].length;
	return len;
};
/**
* Transform to Uint8Array.
*
* @function
* @param {Encoder} encoder
* @return {Uint8Array<ArrayBuffer>} The created ArrayBuffer.
*/
const toUint8Array = (encoder) => {
	const uint8arr = new Uint8Array(length(encoder));
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
* @template {ArrayBufferLike} [Buf=ArrayBufferLike]
*/
var Decoder = class {
	/**
	* @param {Uint8Array<Buf>} uint8Array Binary data to decode
	*/
	constructor(uint8Array) {
		/**
		* Decoding target.
		*
		* @type {Uint8Array<Buf>}
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
* @template {ArrayBufferLike} Buf
* @param {Uint8Array<Buf>} uint8Array
* @return {Decoder<Buf>}
*/
const createDecoder = (uint8Array) => new Decoder(uint8Array);
/**
* @function
* @param {Decoder} decoder
* @return {boolean}
*/
const hasContent = (decoder) => decoder.pos !== decoder.arr.length;
/**
* Create an Uint8Array view of the next `len` bytes and advance the position by `len`.
*
* Important: The Uint8Array still points to the underlying ArrayBuffer. Make sure to discard the result as soon as possible to prevent any memory leaks.
*            Use `buffer.copyUint8Array` to copy the result into a new Uint8Array.
*
* @function
* @template {ArrayBufferLike} Buf
* @param {Decoder<Buf>} decoder The decoder instance
* @param {number} len The length of bytes to read
* @return {Uint8Array<Buf>}
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
* @template {ArrayBufferLike} Buf
* @param {Decoder<Buf>} decoder
* @return {Uint8Array<Buf>}
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
* @template K
* @template V
* @typedef {Map<K,V>} GlobalMap
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
//#region node_modules/lib0/trait/equality.js
const EqualityTraitSymbol = Symbol("Equality");

//#endregion
//#region node_modules/lib0/object.js
/**
* @param {Object<string,any>} obj
*/
const keys = Object.keys;
/**
* @param {Object<string,any>} obj
* @return {number}
*/
const size = (obj) => keys(obj).length;
/**
* Calls `Object.prototype.hasOwnProperty`.
*
* @param {any} obj
* @param {string|number|symbol} key
* @return {boolean}
*/
const hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

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
	if (a == null || b == null || a.constructor !== b.constructor && (a.constructor || Object) !== (b.constructor || Object)) return false;
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
		case void 0:
		case Object:
			if (size(a) !== size(b)) return false;
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
//#region node_modules/yrby-client/dist/y_protocol_session.js
const MessageType = {
	Sync: 0,
	Awareness: 1
};
var YProtocolSession = class {
	doc;
	awareness;
	#send;
	#onError;
	#synced = false;
	#delivery;
	#onDocUpdate;
	#onAwarenessUpdate;
	constructor(doc, opts) {
		const { send, awareness = null, resendInterval, onError, setInterval: setIntervalFn, clearInterval: clearIntervalFn } = opts ?? {};
		if (!doc) throw new TypeError("YProtocolSession requires a Y.Doc");
		if (typeof send !== "function") throw new TypeError("YProtocolSession requires a send(frame, id) function");
		this.doc = doc;
		this.awareness = awareness;
		this.#send = send;
		this.#onError = onError ?? ((error, context) => console.warn(`[yrby] ${context}:`, error));
		this.#delivery = new ReliableSync({
			merge: mergeUpdates,
			send: (update, id) => this.#send(this.#frameUpdate(update), id),
			resendInterval,
			setInterval: setIntervalFn,
			clearInterval: clearIntervalFn
		});
		this.#onDocUpdate = (update, origin) => {
			if (origin === this) return;
			this.#delivery.enqueue(update);
		};
		this.doc.on("update", this.#onDocUpdate);
		if (this.awareness) {
			this.#onAwarenessUpdate = ({ added, updated, removed }, origin) => {
				if (origin === this) return;
				const changed = added.concat(updated, removed);
				this.#send(this.#frameAwareness(changed), void 0);
			};
			this.awareness.on("update", this.#onAwarenessUpdate);
		}
	}
	/** True once we've received the server's SyncStep2 (the document is caught up). */
	get synced() {
		return this.#synced;
	}
	/** True while there are unacknowledged local document updates in flight. */
	get hasPending() {
		return this.#delivery.hasPending;
	}
	/** Transport connected: send the opening handshake and replay the unacked tail. */
	onConnect() {
		this.#send(this.#frameSyncStep1(), void 0);
		if (this.awareness && this.awareness.getLocalState() !== null) this.#send(this.#frameAwareness([this.doc.clientID]), void 0);
		this.#delivery.onConnect();
	}
	/** Transport dropped: pause retransmits (queue kept) and clear remote presence. */
	onDisconnect() {
		this.#synced = false;
		this.#delivery.onDisconnect();
		if (this.awareness) {
			const remote = [...this.awareness.getStates().keys()].filter((c) => c !== this.doc.clientID);
			if (remote.length) removeAwarenessStates(this.awareness, remote, this);
		}
	}
	/**
	* Broadcast that our local presence is gone (sets local state to null, which
	* emits a removal awareness frame through `send`). Call this while the
	* transport is still live so peers drop our cursor immediately instead of
	* waiting for the awareness timeout. A no-op when there's no local state.
	*/
	removeLocalAwareness() {
		if (this.awareness && this.awareness.getLocalState() !== null) this.awareness.setLocalState(null);
	}
	/** A reliable-delivery `{ ack: id }` envelope arrived. */
	ack(id) {
		this.#delivery.onAck(id);
	}
	/**
	* Apply an update without treating it as a local edit, so it isn't queued for
	* re-delivery to the server. Use it for bootstrap/restore: initial state loaded
	* over HTTP, a server snapshot, an import. These are bytes the server already
	* has.
	*
	* The session re-sends any doc update whose origin isn't itself (that's how a
	* keystroke becomes an outbound frame), so a bare `Y.applyUpdate(doc, update)`
	* would look like a local edit and get echoed back on the next connect. Going
	* through here applies under the session's own origin, which the outbound
	* filter skips. Safe to call before `onConnect()`: the state folds into the
	* SyncStep1 handshake instead of being re-sent.
	*/
	applyRemoteUpdate(update) {
		applyUpdate(this.doc, update, this);
	}
	/**
	* Decode and apply one incoming binary protocol frame (document sync or
	* awareness). Returns a reply frame to transmit (e.g. SyncStep2 answering a
	* SyncStep1), or null if there's nothing to send.
	*/
	receive(frame) {
		try {
			if (this.#validateFrame(frame) === null) return null;
			const decoder = createDecoder(frame);
			const encoder = createEncoder();
			switch (readVarUint(decoder)) {
				case MessageType.Sync: {
					writeVarUint(encoder, MessageType.Sync);
					const syncType = readSyncMessage(decoder, encoder, this.doc, this);
					if (!this.#synced && syncType === messageYjsSyncStep2) this.#synced = true;
					break;
				}
				case MessageType.Awareness:
					if (this.awareness) applyAwarenessUpdate(this.awareness, readVarUint8Array(decoder), this);
					break;
				default: return null;
			}
			return length(encoder) > 1 ? toUint8Array(encoder) : null;
		} catch (error) {
			this.#onError(error, "receive");
			return null;
		}
	}
	/** Detach doc/awareness listeners and stop retransmits. */
	destroy() {
		this.doc.off("update", this.#onDocUpdate);
		if (this.awareness && this.#onAwarenessUpdate) this.awareness.off("update", this.#onAwarenessUpdate);
		this.#delivery.destroy();
	}
	#frameSyncStep1() {
		const e = createEncoder();
		writeVarUint(e, MessageType.Sync);
		writeSyncStep1(e, this.doc);
		return toUint8Array(e);
	}
	#frameUpdate(update) {
		const e = createEncoder();
		writeVarUint(e, MessageType.Sync);
		writeUpdate(e, update);
		return toUint8Array(e);
	}
	#frameAwareness(clients) {
		const e = createEncoder();
		writeVarUint(e, MessageType.Awareness);
		writeVarUint8Array(e, encodeAwarenessUpdate(this.awareness, clients));
		return toUint8Array(e);
	}
	#validateFrame(frame) {
		const decoder = createDecoder(frame);
		const type = readVarUint(decoder);
		switch (type) {
			case MessageType.Sync: {
				const scratchDoc = new Doc();
				try {
					const scratchEncoder = createEncoder();
					writeVarUint(scratchEncoder, MessageType.Sync);
					readSyncMessage(decoder, scratchEncoder, scratchDoc, this);
				} finally {
					scratchDoc.destroy();
				}
				break;
			}
			case MessageType.Awareness:
				{
					const payload = readVarUint8Array(decoder);
					const inner = createDecoder(payload);
					const count = readVarUint(inner);
					for (let i = 0; i < count; i++) {
						readVarUint(inner);
						readVarUint(inner);
						JSON.parse(readVarString(inner));
					}
					if (hasContent(inner)) throw new Error("awareness payload has trailing bytes");
				}
				break;
			default: return null;
		}
		if (hasContent(decoder)) throw new Error("frame has trailing bytes after a complete message");
		return type;
	}
};

//#endregion
//#region node_modules/yrby-client/dist/base64.js
const toBase64 = (bytes) => btoa(Array.from(bytes, (b) => String.fromCharCode(b)).join(""));
const fromBase64 = (str) => Uint8Array.from(atob(str), (c) => c.charCodeAt(0));

//#endregion
//#region node_modules/yrby-client/dist/actioncable_provider.js
var ActionCableProvider = class {
	doc;
	consumer;
	channelName;
	channelParams;
	awareness;
	session;
	#subscription = null;
	#onError;
	#connected = false;
	#status = "disconnected";
	#statusListeners = /* @__PURE__ */ new Set();
	#whenSynced = null;
	#everSynced = false;
	#onUnload = null;
	#onRestore = null;
	#stashedPresence = null;
	constructor(doc, consumer, channelName, channelParams = {}, opts = {}) {
		this.doc = doc;
		this.consumer = consumer;
		this.channelName = channelName;
		this.channelParams = channelParams;
		this.awareness = new Awareness(doc);
		this.#onError = opts.onError ?? ((error, context) => console.warn(`[yrby] ${context}:`, error));
		this.session = new YProtocolSession(doc, {
			awareness: this.awareness,
			resendInterval: opts.resendInterval,
			onError: this.#onError,
			send: (frame, id) => this.#send(frame, id)
		});
	}
	/** True once the document has caught up with the server (received a SyncStep2). */
	get synced() {
		return this.session.synced;
	}
	/**
	* Resolves once the document has first caught up with the server. Most
	* editor bindings seed an empty document when they mount, so binding
	* before the server's state arrives makes each client insert its own
	* top-level node. Create the editor after this resolves:
	*
	*   provider.connect();
	*   await provider.whenSynced;
	*   // now hand the doc to the editor binding
	*
	* Resolves immediately if the first catch-up has already happened, even
	* while the transport is down (`synced` is false during a reconnect;
	* whether the doc has ever synced does not change). It stays resolved
	* across later reconnects; use `onStatusChange` to track the live
	* connection. If the provider is destroyed before the first sync, the
	* promise never settles.
	*/
	get whenSynced() {
		this.#whenSynced ??= this.#everSynced ? Promise.resolve() : new Promise((resolve) => {
			const off = this.onStatusChange(({ status }) => {
				if (status !== "synced") return;
				off();
				resolve();
			});
		});
		return this.#whenSynced;
	}
	/** True while there are unacknowledged local document updates in flight. */
	get hasPending() {
		return this.session.hasPending;
	}
	/**
	* Apply a bootstrap/restore update (initial HTTP state, a server snapshot, an
	* import) without re-sending it to the server as a local edit. Call it once per
	* chunk of already-durable state when seeding the doc, before `connect()`:
	*
	*   provider.applyRemoteUpdate(fromBase64(initialState));
	*   priorUpdates.forEach((u) => provider.applyRemoteUpdate(fromBase64(u)));
	*   provider.connect();
	*
	* See {@link YProtocolSession.applyRemoteUpdate} for why a bare `Y.applyUpdate`
	* would be re-broadcast as a pending change instead.
	*/
	applyRemoteUpdate(update) {
		this.session.applyRemoteUpdate(update);
	}
	/** Current connection status. See {@link ProviderStatus}. */
	get status() {
		return this.#status;
	}
	/** Subscribe to status changes. Returns an unsubscribe function. */
	onStatusChange(listener) {
		this.#statusListeners.add(listener);
		return () => this.#statusListeners.delete(listener);
	}
	connect() {
		if (this.#subscription) return;
		const provider = this;
		this.#subscription = this.consumer.subscriptions.create({
			channel: this.channelName,
			...this.channelParams
		}, {
			received(message) {
				if (message && message.ack !== void 0) {
					provider.session.ack(message.ack);
					return;
				}
				const awarenessPayload = message && message.awareness;
				const payload = message && (awarenessPayload ?? message.update);
				if (typeof payload !== "string") return;
				let frame;
				try {
					frame = fromBase64(payload);
				} catch (error) {
					provider.#onError(error, "received");
					return;
				}
				if (awarenessPayload !== void 0 && frame[0] !== MessageType.Awareness) {
					provider.#onError(/* @__PURE__ */ new Error("awareness envelope carried a non-awareness frame"), "received");
					return;
				}
				const reply = provider.session.receive(frame);
				if (reply) provider.#send(reply, void 0);
				provider.#refreshStatus();
			},
			connected() {
				provider.#connected = true;
				provider.session.onConnect();
				provider.#refreshStatus();
			},
			disconnected() {
				provider.#connected = false;
				provider.session.onDisconnect();
				provider.#refreshStatus();
			},
			rejected() {
				provider.#onError(/* @__PURE__ */ new Error("subscription rejected by the server"), "rejected");
				provider.disconnect();
			}
		});
		this.#installUnloadHandler();
		this.#refreshStatus();
	}
	disconnect() {
		if (!this.#subscription) return;
		const sub = this.#subscription;
		this.session.removeLocalAwareness();
		this.session.onDisconnect();
		this.#connected = false;
		this.#subscription = null;
		this.#removeUnloadHandler();
		queueMicrotask(() => sub.unsubscribe?.());
		this.#refreshStatus();
	}
	destroy() {
		this.disconnect();
		this.session.destroy();
		this.awareness.destroy();
		this.#statusListeners.clear();
	}
	#computeStatus() {
		if (!this.#subscription) return "disconnected";
		if (!this.#connected) return "connecting";
		return this.session.synced ? "synced" : "connected";
	}
	#refreshStatus() {
		const next = this.#computeStatus();
		if (next === this.#status) return;
		this.#status = next;
		if (next === "synced") this.#everSynced = true;
		for (const listener of this.#statusListeners) listener({ status: next });
	}
	#installUnloadHandler() {
		if (typeof window === "undefined" || this.#onUnload) return;
		this.#onUnload = () => {
			this.#stashedPresence = this.awareness.getLocalState();
			this.session.removeLocalAwareness();
		};
		this.#onRestore = (event) => {
			if (!event.persisted || !this.#stashedPresence) return;
			if (this.awareness.getLocalState() === null) this.awareness.setLocalState(this.#stashedPresence);
			this.#stashedPresence = null;
		};
		window.addEventListener("pagehide", this.#onUnload);
		window.addEventListener("pageshow", this.#onRestore);
	}
	#removeUnloadHandler() {
		if (typeof window === "undefined") return;
		if (this.#onUnload) {
			window.removeEventListener("pagehide", this.#onUnload);
			this.#onUnload = null;
		}
		if (this.#onRestore) {
			window.removeEventListener("pageshow", this.#onRestore);
			this.#onRestore = null;
		}
	}
	#send(frame, id) {
		const sub = this.#subscription;
		if (!sub) return;
		const update = toBase64(frame);
		const isAwareness = frame[0] === MessageType.Awareness;
		try {
			if (isAwareness && typeof sub.whisper === "function") {
				this.#observe(sub.whisper({ awareness: update }));
				return;
			}
			const payload = id === void 0 ? { update } : {
				update,
				id
			};
			this.#observe(sub.send(payload));
		} catch (error) {
			this.#onError(error, "send");
		}
	}
	#observe(result) {
		if (result instanceof Promise) result.catch((error) => this.#onError(error, "send"));
	}
};

//#endregion
//#region src/editor_collaboration.js
var Collaboration = class extends HTMLElement {
	#teardown = null;
	connectedCallback() {
		this.editorElement = this.closest("lexxy-editor");
		if (!this.editorElement) {
			console.error("<lexxy-collaboration> must be placed inside a <lexxy-editor>.");
			return;
		}
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
	#init() {
		const id = this.getAttribute("doc-id") || "main";
		const name = this.getAttribute("name") || "Example User";
		const color = this.getAttribute("color") || "#958DF1";
		const channelName = this.getAttribute("channel-name") || "SyncChannel";
		const rawParams = this.getAttribute("channel-params") || "{}";
		let channelParams;
		try {
			channelParams = typeof rawParams === "string" ? JSON.parse(rawParams) : rawParams;
		} catch {
			console.error("<lexxy-collaboration>: invalid channel-params attribute (expected JSON); using {}.", rawParams);
			channelParams = {};
		}
		const ownsProvider = !this.provider;
		const doc = this.doc || new Doc();
		const provider = this.provider || new ActionCableProvider(doc, this.consumer, channelName, channelParams);
		if (ownsProvider) provider.connect();
		const awareness = provider.awareness;
		const docMap = /* @__PURE__ */ new Map();
		docMap.set(id, doc);
		this.editor.update(() => $getRoot().clear(), {
			tag: HISTORY_MERGE_TAG,
			discrete: true
		});
		const excludedProperties = attachmentExclusions(this.editor);
		const binding = createBinding(this.editor, provider, id, doc, docMap, excludedProperties);
		const unsubscribeListeners = registerCollaborationListeners(this.editor, provider, binding);
		const cancelBootstrap = bootstrapWhenSynced(this.editor, provider, binding);
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
		const renderCursors = () => syncCursorPositions(binding, provider);
		awareness.on("update", renderCursors);
		const unsubscribeCursorRender = this.editor.registerUpdateListener(renderCursors);
		syncCursorPositions(binding, provider);
		this.provider = provider;
		this.awareness = awareness;
		this.binding = binding;
		this.#teardown = () => {
			this.#teardown = null;
			awareness.off("update", renderCursors);
			unsubscribeCursorRender();
			unsubscribeListeners();
			cancelBootstrap();
			cursorsContainer.remove();
			if (ownsProvider) {
				provider.disconnect();
				this.provider = null;
			}
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
const UNSYNCABLE_ATTACHMENT_PROPERTIES = new Set([
	"editor",
	"file",
	"previewSrc",
	"uploadUrl",
	"blobUrlTemplate"
]);
const LEXXY_ATTACHMENT_NODE_TYPES = new Set([
	"action_text_attachment",
	"action_text_attachment_upload",
	"custom_action_text_attachment"
]);
function attachmentExclusions(editor) {
	const excludedProperties = /* @__PURE__ */ new Map();
	const nodes = editor?._nodes;
	if (!nodes || typeof nodes.forEach !== "function") return excludedProperties;
	nodes.forEach((info, type) => {
		if (LEXXY_ATTACHMENT_NODE_TYPES.has(type)) excludedProperties.set(info.klass, UNSYNCABLE_ATTACHMENT_PROPERTIES);
	});
	return excludedProperties;
}
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
	return () => {
		done = true;
		clearInterval(timer);
	};
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
//#region src/index.js
if (!customElements.get("lexxy-collaboration")) customElements.define("lexxy-collaboration", Collaboration);

//#endregion
export { Collaboration, ActionCableProvider as YrbyProvider };