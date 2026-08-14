import { $addUpdateTag, $caretFromPoint, $caretRangeFromSelection, $cloneWithProperties as $cloneWithProperties$1, $cloneWithPropertiesEphemeral, $createChildrenArray, $createParagraphNode, $createRangeSelection, $createTextNode, $extendCaretToRange, $findMatchingParent, $getCharacterOffsets, $getEditor, $getNodeByKey, $getNodeByKeyOrThrow, $getPreviousSelection, $getRoot, $getSelection, $getState, $getWritableNodeState, $hasAncestor, $isChildCaret, $isDecoratorNode, $isElementNode, $isExtendableTextPointCaret, $isLeafNode, $isLineBreakNode, $isRangeSelection, $isRootNode, $isRootOrShadowRoot, $isTextNode, $isTokenOrSegmented, $nodesOfType, $selectAll as $selectAll$1, $setSelection, COLLABORATION_TAG, ElementNode, HISTORIC_TAG, HISTORY_MERGE_TAG, INTERNAL_$isBlock, RootNode, SKIP_SCROLL_INTO_VIEW_TAG, TextNode, createCommand, createEditor, createState, getStyleObjectFromCSS, removeFromParent, setDOMStyleObject } from "lexical";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
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
const create$5 = () => /* @__PURE__ */ new Map();
/**
* Copy a Map object into a fresh Map object.
*
* @function
* @template K,V
* @param {Map<K,V>} m
* @return {Map<K,V>}
*/
const copy = (m) => {
	const r = create$5();
	m.forEach((v, k) => {
		r.set(k, v);
	});
	return r;
};
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
/**
* Creates an Array and populates it with the content of all key-value pairs using the `f(value, key)` function.
*
* @function
* @template K
* @template V
* @template R
* @param {Map<K,V>} m
* @param {function(V,K):R} f
* @return {Array<R>}
*/
const map = (m, f) => {
	const res = [];
	for (const [key, value] of m) res.push(f(value, key));
	return res;
};
/**
* Tests whether any key-value pairs pass the test implemented by `f(value, key)`.
*
* @todo should rename to some - similarly to Array.some
*
* @function
* @template K
* @template V
* @param {Map<K,V>} m
* @param {function(V,K):boolean} f
* @return {boolean}
*/
const any = (m, f) => {
	for (const [key, value] of m) if (f(value, key)) return true;
	return false;
};
//#endregion
//#region node_modules/lib0/set.js
/**
* Utility module to work with sets.
*
* @module set
*/
const create$4 = () => /* @__PURE__ */ new Set();
//#endregion
//#region node_modules/lib0/array.js
/**
* Return the last element of an array. The element must exist
*
* @template L
* @param {ArrayLike<L>} arr
* @return {L}
*/
const last = (arr) => arr[arr.length - 1];
/**
* Append elements from src to dest
*
* @template M
* @param {Array<M>} dest
* @param {Array<M>} src
*/
const appendTo = (dest, src) => {
	for (let i = 0; i < src.length; i++) dest.push(src[i]);
};
/**
* Transforms something array-like to an actual Array.
*
* @function
* @template T
* @param {ArrayLike<T>|Iterable<T>} arraylike
* @return {T}
*/
const from = Array.from;
/**
* True iff condition holds on every element in the Array.
*
* @function
* @template {ArrayLike<any>} ARR
*
* @param {ARR} arr
* @param {ARR extends ArrayLike<infer S> ? ((value:S, index:number, arr:ARR) => boolean) : any} f
* @return {boolean}
*/
const every$1 = (arr, f) => {
	for (let i = 0; i < arr.length; i++) if (!f(arr[i], i, arr)) return false;
	return true;
};
/**
* True iff condition holds on some element in the Array.
*
* @function
* @template {ArrayLike<any>} ARR
*
* @param {ARR} arr
* @param {ARR extends ArrayLike<infer S> ? ((value:S, index:number, arr:ARR) => boolean) : never} f
* @return {boolean}
*/
const some = (arr, f) => {
	for (let i = 0; i < arr.length; i++) if (f(arr[i], i, arr)) return true;
	return false;
};
/**
* @template T
* @param {number} len
* @param {function(number, Array<T>):T} f
* @return {Array<T>}
*/
const unfold = (len, f) => {
	const array = new Array(len);
	for (let i = 0; i < len; i++) array[i] = f(i, array);
	return array;
};
const isArray = Array.isArray;
//#endregion
//#region node_modules/lib0/observable.js
/**
* Observable class prototype.
*
* @module observable
*/
/**
* Handles named events.
* @experimental
*
* This is basically a (better typed) duplicate of Observable, which will replace Observable in the
* next release.
*
* @template {{[key in keyof EVENTS]: function(...any):void}} EVENTS
*/
var ObservableV2 = class {
	constructor() {
		/**
		* Some desc.
		* @type {Map<string, Set<any>>}
		*/
		this._observers = create$5();
	}
	/**
	* @template {keyof EVENTS & string} NAME
	* @param {NAME} name
	* @param {EVENTS[NAME]} f
	*/
	on(name, f) {
		setIfUndefined(this._observers, name, create$4).add(f);
		return f;
	}
	/**
	* @template {keyof EVENTS & string} NAME
	* @param {NAME} name
	* @param {EVENTS[NAME]} f
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
	* @template {keyof EVENTS & string} NAME
	* @param {NAME} name
	* @param {EVENTS[NAME]} f
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
	* @template {keyof EVENTS & string} NAME
	* @param {NAME} name The event name.
	* @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
	*/
	emit(name, args) {
		return from((this._observers.get(name) || create$5()).values()).forEach((f) => f(...args));
	}
	destroy() {
		this._observers = create$5();
	}
};
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
		this._observers = create$5();
	}
	/**
	* @param {N} name
	* @param {function} f
	*/
	on(name, f) {
		setIfUndefined(this._observers, name, create$4).add(f);
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
		return from((this._observers.get(name) || create$5()).values()).forEach((f) => f(...args));
	}
	destroy() {
		this._observers = create$5();
	}
};
/* c8 ignore end */
//#endregion
//#region node_modules/lib0/math.js
/**
* Common Math expressions.
*
* @module math
*/
const floor = Math.floor;
const abs = Math.abs;
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
Number.isNaN;
/**
* Check whether n is negative, while considering the -0 edge case. While `-0 < 0` is false, this
* function returns true for -0,-1,,.. and returns false for 0,1,2,...
* @param {number} n
* @return {boolean} Wether n is negative. This function also distinguishes between -0 and +0
*/
const isNegativeZero = (n) => n !== 0 ? n < 0 : 1 / n < 0;
//#endregion
//#region node_modules/lib0/number.js
/**
* Utility helpers for working with numbers.
*
* @module number
*/
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
/* c8 ignore next */
const isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
Number.isNaN;
Number.parseInt;
//#endregion
//#region node_modules/lib0/string.js
/**
* Utility module to work with strings.
*
* @module string
*/
const fromCharCode = String.fromCharCode;
String.fromCodePoint;
fromCharCode(65535);
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
if (utf8TextDecoder && utf8TextDecoder.decode(/* @__PURE__ */ new Uint8Array()).length === 1)
 /* c8 ignore next */
utf8TextDecoder = null;
/**
* @param {string} source
* @param {number} n
*/
const repeat = (source, n) => unfold(n, () => source).join("");
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
		this.cbuf = /* @__PURE__ */ new Uint8Array(100);
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
* Verify that it is possible to write `len` bytes wtihout checking. If
* necessary, a new Buffer with the required length is attached.
*
* @param {Encoder} encoder
* @param {number} len
*/
const verifyLen = (encoder, len) => {
	const bufferLen = encoder.cbuf.length;
	if (bufferLen - encoder.cpos < len) {
		encoder.bufs.push(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos));
		encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
		encoder.cpos = 0;
	}
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
* Write one byte as an unsigned integer.
*
* @function
* @param {Encoder} encoder
* @param {number} num The number that is to be encoded.
*/
const writeUint8 = write;
/**
* Write a variable length unsigned integer. Max encodable integer is 2^53.
*
* @function
* @param {Encoder} encoder
* @param {number} num The number that is to be encoded.
*/
const writeVarUint = (encoder, num) => {
	while (num > 127) {
		write(encoder, 128 | 127 & num);
		num = floor(num / 128);
	}
	write(encoder, 127 & num);
};
/**
* Write a variable length integer.
*
* We use the 7th bit instead for signaling that this is a negative number.
*
* @function
* @param {Encoder} encoder
* @param {number} num The number that is to be encoded.
*/
const writeVarInt = (encoder, num) => {
	const isNegative = isNegativeZero(num);
	if (isNegative) num = -num;
	write(encoder, (num > 63 ? 128 : 0) | (isNegative ? 64 : 0) | 63 & num);
	num = floor(num / 64);
	while (num > 0) {
		write(encoder, (num > 127 ? 128 : 0) | 127 & num);
		num = floor(num / 128);
	}
};
/**
* A cache to store strings temporarily
*/
const _strBuffer = /* @__PURE__ */ new Uint8Array(3e4);
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
/**
* Create an DataView of the next `len` bytes. Use it to write data after
* calling this function.
*
* ```js
* // write float32 using DataView
* const dv = writeOnDataView(encoder, 4)
* dv.setFloat32(0, 1.1)
* // read float32 using DataView
* const dv = readFromDataView(encoder, 4)
* dv.getFloat32(0) // => 1.100000023841858 (leaving it to the reader to find out why this is the correct result)
* ```
*
* @param {Encoder} encoder
* @param {number} len
* @return {DataView}
*/
const writeOnDataView = (encoder, len) => {
	verifyLen(encoder, len);
	const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
	encoder.cpos += len;
	return dview;
};
/**
* @param {Encoder} encoder
* @param {number} num
*/
const writeFloat32 = (encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false);
/**
* @param {Encoder} encoder
* @param {number} num
*/
const writeFloat64 = (encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false);
/**
* @param {Encoder} encoder
* @param {bigint} num
*/
const writeBigInt64 = (encoder, num) => writeOnDataView(encoder, 8).setBigInt64(0, num, false);
const floatTestBed = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4));
/**
* Check if a number can be encoded as a 32 bit float.
*
* @param {number} num
* @return {boolean}
*/
const isFloat32 = (num) => {
	floatTestBed.setFloat32(0, num);
	return floatTestBed.getFloat32(0) === num;
};
/**
* @typedef {Array<AnyEncodable>} AnyEncodableArray
*/
/**
* @typedef {undefined|null|number|bigint|boolean|string|{[k:string]:AnyEncodable}|AnyEncodableArray|Uint8Array} AnyEncodable
*/
/**
* Encode data with efficient binary format.
*
* Differences to JSON:
* • Transforms data to a binary format (not to a string)
* • Encodes undefined, NaN, and ArrayBuffer (these can't be represented in JSON)
* • Numbers are efficiently encoded either as a variable length integer, as a
*   32 bit float, as a 64 bit float, or as a 64 bit bigint.
*
* Encoding table:
*
* | Data Type           | Prefix   | Encoding Method    | Comment |
* | ------------------- | -------- | ------------------ | ------- |
* | undefined           | 127      |                    | Functions, symbol, and everything that cannot be identified is encoded as undefined |
* | null                | 126      |                    | |
* | integer             | 125      | writeVarInt        | Only encodes 32 bit signed integers |
* | float32             | 124      | writeFloat32       | |
* | float64             | 123      | writeFloat64       | |
* | bigint              | 122      | writeBigInt64      | |
* | boolean (false)     | 121      |                    | True and false are different data types so we save the following byte |
* | boolean (true)      | 120      |                    | - 0b01111000 so the last bit determines whether true or false |
* | string              | 119      | writeVarString     | |
* | object<string,any>  | 118      | custom             | Writes {length} then {length} key-value pairs |
* | array<any>          | 117      | custom             | Writes {length} then {length} json values |
* | Uint8Array          | 116      | writeVarUint8Array | We use Uint8Array for any kind of binary data |
*
* Reasons for the decreasing prefix:
* We need the first bit for extendability (later we may want to encode the
* prefix with writeVarUint). The remaining 7 bits are divided as follows:
* [0-30]   the beginning of the data range is used for custom purposes
*          (defined by the function that uses this library)
* [31-127] the end of the data range is used for data encoding by
*          lib0/encoding.js
*
* @param {Encoder} encoder
* @param {AnyEncodable} data
*/
const writeAny = (encoder, data) => {
	switch (typeof data) {
		case "string":
			write(encoder, 119);
			writeVarString(encoder, data);
			break;
		case "number":
			if (isInteger(data) && abs(data) <= 2147483647) {
				write(encoder, 125);
				writeVarInt(encoder, data);
			} else if (isFloat32(data)) {
				write(encoder, 124);
				writeFloat32(encoder, data);
			} else {
				write(encoder, 123);
				writeFloat64(encoder, data);
			}
			break;
		case "bigint":
			write(encoder, 122);
			writeBigInt64(encoder, data);
			break;
		case "object":
			if (data === null) write(encoder, 126);
			else if (isArray(data)) {
				write(encoder, 117);
				writeVarUint(encoder, data.length);
				for (let i = 0; i < data.length; i++) writeAny(encoder, data[i]);
			} else if (data instanceof Uint8Array) {
				write(encoder, 116);
				writeVarUint8Array(encoder, data);
			} else {
				write(encoder, 118);
				const keys = Object.keys(data);
				writeVarUint(encoder, keys.length);
				for (let i = 0; i < keys.length; i++) {
					const key = keys[i];
					writeVarString(encoder, key);
					writeAny(encoder, data[key]);
				}
			}
			break;
		case "boolean":
			write(encoder, data ? 120 : 121);
			break;
		default: write(encoder, 127);
	}
};
/**
* Now come a few stateful encoder that have their own classes.
*/
/**
* Basic Run Length Encoder - a basic compression implementation.
*
* Encodes [1,1,1,7] to [1,3,7,1] (3 times 1, 1 time 7). This encoder might do more harm than good if there are a lot of values that are not repeated.
*
* It was originally used for image compression. Cool .. article http://csbruce.com/cbm/transactor/pdfs/trans_v7_i06.pdf
*
* @note T must not be null!
*
* @template T
*/
var RleEncoder = class extends Encoder {
	/**
	* @param {function(Encoder, T):void} writer
	*/
	constructor(writer) {
		super();
		/**
		* The writer
		*/
		this.w = writer;
		/**
		* Current state
		* @type {T|null}
		*/
		this.s = null;
		this.count = 0;
	}
	/**
	* @param {T} v
	*/
	write(v) {
		if (this.s === v) this.count++;
		else {
			if (this.count > 0) writeVarUint(this, this.count - 1);
			this.count = 1;
			this.w(this, v);
			this.s = v;
		}
	}
};
/**
* @param {UintOptRleEncoder} encoder
*/
const flushUintOptRleEncoder = (encoder) => {
	if (encoder.count > 0) {
		writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
		if (encoder.count > 1) writeVarUint(encoder.encoder, encoder.count - 2);
	}
};
/**
* Optimized Rle encoder that does not suffer from the mentioned problem of the basic Rle encoder.
*
* Internally uses VarInt encoder to write unsigned integers. If the input occurs multiple times, we write
* write it as a negative number. The UintOptRleDecoder then understands that it needs to read a count.
*
* Encodes [1,2,3,3,3] as [1,2,-3,3] (once 1, once 2, three times 3)
*/
var UintOptRleEncoder = class {
	constructor() {
		this.encoder = new Encoder();
		/**
		* @type {number}
		*/
		this.s = 0;
		this.count = 0;
	}
	/**
	* @param {number} v
	*/
	write(v) {
		if (this.s === v) this.count++;
		else {
			flushUintOptRleEncoder(this);
			this.count = 1;
			this.s = v;
		}
	}
	/**
	* Flush the encoded state and transform this to a Uint8Array.
	*
	* Note that this should only be called once.
	*/
	toUint8Array() {
		flushUintOptRleEncoder(this);
		return toUint8Array(this.encoder);
	}
};
/**
* @param {IntDiffOptRleEncoder} encoder
*/
const flushIntDiffOptRleEncoder = (encoder) => {
	if (encoder.count > 0) {
		const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
		writeVarInt(encoder.encoder, encodedDiff);
		if (encoder.count > 1) writeVarUint(encoder.encoder, encoder.count - 2);
	}
};
/**
* A combination of the IntDiffEncoder and the UintOptRleEncoder.
*
* The count approach is similar to the UintDiffOptRleEncoder, but instead of using the negative bitflag, it encodes
* in the LSB whether a count is to be read. Therefore this Encoder only supports 31 bit integers!
*
* Encodes [1, 2, 3, 2] as [3, 1, 6, -1] (more specifically [(1 << 1) | 1, (3 << 0) | 0, -1])
*
* Internally uses variable length encoding. Contrary to normal UintVar encoding, the first byte contains:
* * 1 bit that denotes whether the next value is a count (LSB)
* * 1 bit that denotes whether this value is negative (MSB - 1)
* * 1 bit that denotes whether to continue reading the variable length integer (MSB)
*
* Therefore, only five bits remain to encode diff ranges.
*
* Use this Encoder only when appropriate. In most cases, this is probably a bad idea.
*/
var IntDiffOptRleEncoder = class {
	constructor() {
		this.encoder = new Encoder();
		/**
		* @type {number}
		*/
		this.s = 0;
		this.count = 0;
		this.diff = 0;
	}
	/**
	* @param {number} v
	*/
	write(v) {
		if (this.diff === v - this.s) {
			this.s = v;
			this.count++;
		} else {
			flushIntDiffOptRleEncoder(this);
			this.count = 1;
			this.diff = v - this.s;
			this.s = v;
		}
	}
	/**
	* Flush the encoded state and transform this to a Uint8Array.
	*
	* Note that this should only be called once.
	*/
	toUint8Array() {
		flushIntDiffOptRleEncoder(this);
		return toUint8Array(this.encoder);
	}
};
/**
* Optimized String Encoder.
*
* Encoding many small strings in a simple Encoder is not very efficient. The function call to decode a string takes some time and creates references that must be eventually deleted.
* In practice, when decoding several million small strings, the GC will kick in more and more often to collect orphaned string objects (or maybe there is another reason?).
*
* This string encoder solves the above problem. All strings are concatenated and written as a single string using a single encoding call.
*
* The lengths are encoded using a UintOptRleEncoder.
*/
var StringEncoder = class {
	constructor() {
		/**
		* @type {Array<string>}
		*/
		this.sarr = [];
		this.s = "";
		this.lensE = new UintOptRleEncoder();
	}
	/**
	* @param {string} string
	*/
	write(string) {
		this.s += string;
		if (this.s.length > 19) {
			this.sarr.push(this.s);
			this.s = "";
		}
		this.lensE.write(string.length);
	}
	toUint8Array() {
		const encoder = new Encoder();
		this.sarr.push(this.s);
		this.s = "";
		writeVarString(encoder, this.sarr.join(""));
		writeUint8Array(encoder, this.lensE.toUint8Array());
		return toUint8Array(encoder);
	}
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
const create$3 = (s) => new Error(s);
/**
* @throws {Error}
* @return {never}
*/
/* c8 ignore next 3 */
const methodUnimplemented = () => {
	throw create$3("Method unimplemented");
};
/**
* @throws {Error}
* @return {never}
*/
/* c8 ignore next 3 */
const unexpectedCase = () => {
	throw create$3("Unexpected case");
};
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
const errorUnexpectedEndOfArray = create$3("Unexpected end of array");
const errorIntegerOutOfRange = create$3("Integer out of Range");
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
		num = num + (r & 127) * mult;
		mult *= 128;
		if (r < 128) return num;
		/* c8 ignore start */
		if (num > MAX_SAFE_INTEGER) throw errorIntegerOutOfRange;
	}
	throw errorUnexpectedEndOfArray;
};
/**
* Read signed integer (32bit) with variable length.
* 1/8th of the storage is used as encoding overhead.
*  * numbers < 2^7 is stored in one bytlength
*  * numbers < 2^14 is stored in two bylength
* @todo This should probably create the inverse ~num if number is negative - but this would be a breaking change.
*
* @function
* @param {Decoder} decoder
* @return {number} An unsigned integer.length
*/
const readVarInt = (decoder) => {
	let r = decoder.arr[decoder.pos++];
	let num = r & 63;
	let mult = 64;
	const sign = (r & 64) > 0 ? -1 : 1;
	if ((r & 128) === 0) return sign * num;
	const len = decoder.arr.length;
	while (decoder.pos < len) {
		r = decoder.arr[decoder.pos++];
		num = num + (r & 127) * mult;
		mult *= 128;
		if (r < 128) return sign * num;
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
/**
* @param {Decoder} decoder
* @param {number} len
* @return {DataView}
*/
const readFromDataView = (decoder, len) => {
	const dv = new DataView(decoder.arr.buffer, decoder.arr.byteOffset + decoder.pos, len);
	decoder.pos += len;
	return dv;
};
/**
* @param {Decoder} decoder
*/
const readFloat32 = (decoder) => readFromDataView(decoder, 4).getFloat32(0, false);
/**
* @param {Decoder} decoder
*/
const readFloat64 = (decoder) => readFromDataView(decoder, 8).getFloat64(0, false);
/**
* @param {Decoder} decoder
*/
const readBigInt64 = (decoder) => readFromDataView(decoder, 8).getBigInt64(0, false);
/**
* @type {Array<function(Decoder):any>}
*/
const readAnyLookupTable = [
	(decoder) => void 0,
	(decoder) => null,
	readVarInt,
	readFloat32,
	readFloat64,
	readBigInt64,
	(decoder) => false,
	(decoder) => true,
	readVarString,
	(decoder) => {
		const len = readVarUint(decoder);
		/**
		* @type {Object<string,any>}
		*/
		const obj = {};
		for (let i = 0; i < len; i++) {
			const key = readVarString(decoder);
			obj[key] = readAny(decoder);
		}
		return obj;
	},
	(decoder) => {
		const len = readVarUint(decoder);
		const arr = [];
		for (let i = 0; i < len; i++) arr.push(readAny(decoder));
		return arr;
	},
	readVarUint8Array
];
/**
* @param {Decoder} decoder
*/
const readAny = (decoder) => readAnyLookupTable[127 - readUint8(decoder)](decoder);
/**
* T must not be null.
*
* @template T
*/
var RleDecoder = class extends Decoder {
	/**
	* @param {Uint8Array} uint8Array
	* @param {function(Decoder):T} reader
	*/
	constructor(uint8Array, reader) {
		super(uint8Array);
		/**
		* The reader
		*/
		this.reader = reader;
		/**
		* Current state
		* @type {T|null}
		*/
		this.s = null;
		this.count = 0;
	}
	read() {
		if (this.count === 0) {
			this.s = this.reader(this);
			if (hasContent(this)) this.count = readVarUint(this) + 1;
			else this.count = -1;
		}
		this.count--;
		return this.s;
	}
};
var UintOptRleDecoder = class extends Decoder {
	/**
	* @param {Uint8Array} uint8Array
	*/
	constructor(uint8Array) {
		super(uint8Array);
		/**
		* @type {number}
		*/
		this.s = 0;
		this.count = 0;
	}
	read() {
		if (this.count === 0) {
			this.s = readVarInt(this);
			const isNegative = isNegativeZero(this.s);
			this.count = 1;
			if (isNegative) {
				this.s = -this.s;
				this.count = readVarUint(this) + 2;
			}
		}
		this.count--;
		return this.s;
	}
};
var IntDiffOptRleDecoder = class extends Decoder {
	/**
	* @param {Uint8Array} uint8Array
	*/
	constructor(uint8Array) {
		super(uint8Array);
		/**
		* @type {number}
		*/
		this.s = 0;
		this.count = 0;
		this.diff = 0;
	}
	/**
	* @return {number}
	*/
	read() {
		if (this.count === 0) {
			const diff = readVarInt(this);
			const hasCount = diff & 1;
			this.diff = floor(diff / 2);
			this.count = 1;
			if (hasCount) this.count = readVarUint(this) + 2;
		}
		this.s += this.diff;
		this.count--;
		return this.s;
	}
};
var StringDecoder = class {
	/**
	* @param {Uint8Array} uint8Array
	*/
	constructor(uint8Array) {
		this.decoder = new UintOptRleDecoder(uint8Array);
		this.str = readVarString(this.decoder);
		/**
		* @type {number}
		*/
		this.spos = 0;
	}
	/**
	* @return {string}
	*/
	read() {
		const end = this.spos + this.decoder.read();
		const res = this.str.slice(this.spos, end);
		this.spos = end;
		return res;
	}
};
crypto.subtle;
const getRandomValues = crypto.getRandomValues.bind(crypto);
//#endregion
//#region node_modules/lib0/random.js
const uint32 = () => getRandomValues(/* @__PURE__ */ new Uint32Array(1))[0];
const uuidv4Template = "10000000-1000-4000-8000-100000000000";
/**
* @return {string}
*/
const uuidv4 = () => uuidv4Template.replace(
	/[018]/g,
	/** @param {number} c */
	(c) => (c ^ uint32() & 15 >> c / 4).toString(16)
);
//#endregion
//#region node_modules/lib0/time.js
/**
* Return current unix time.
*
* @return {number}
*/
const getUnixTime = Date.now;
//#endregion
//#region node_modules/lib0/promise.js
/**
* @template T
* @callback PromiseResolve
* @param {T|PromiseLike<T>} [result]
*/
/**
* @template T
* @param {function(PromiseResolve<T>,function(Error):void):any} f
* @return {Promise<T>}
*/
const create$2 = (f) => new Promise(f);
Promise.all.bind(Promise);
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
/* c8 ignore start */
try {
	if (typeof localStorage !== "undefined" && localStorage) _localStorage = localStorage;
} catch (e) {}
/* c8 ignore stop */
/**
* This is basically localStorage in browser, or a polyfill in nodejs
*/
/* c8 ignore next */
const varStorage = _localStorage;
//#endregion
//#region node_modules/lib0/trait/equality.js
const EqualityTraitSymbol = Symbol("Equality");
/**
* @typedef {{ [EqualityTraitSymbol]:(other:EqualityTrait)=>boolean }} EqualityTrait
*/
/**
*
* Utility function to compare any two objects.
*
* Note that it is expected that the first parameter is more specific than the latter one.
*
* @example js
*     class X { [traits.EqualityTraitSymbol] (other) { return other === this }  }
*     class X2 { [traits.EqualityTraitSymbol] (other) { return other === this }, x2 () { return 2 }  }
*     // this is fine
*     traits.equals(new X2(), new X())
*     // this is not, because the left type is less specific than the right one
*     traits.equals(new X(), new X2())
*
* @template {EqualityTrait} T
* @param {NoInfer<T>} a
* @param {T} b
* @return {boolean}
*/
const equals = (a, b) => a === b || !!a?.[EqualityTraitSymbol]?.(b) || false;
//#endregion
//#region node_modules/lib0/object.js
/**
* @param {any} o
* @return {o is { [k:string]:any }}
*/
const isObject$1 = (o) => typeof o === "object";
/**
* Object.assign
*/
const assign = Object.assign;
/**
* @param {Object<string,any>} obj
*/
const keys = Object.keys;
/**
* @template V
* @param {{[k:string]:V}} obj
* @param {function(V,string):any} f
*/
const forEach = (obj, f) => {
	for (const key in obj) f(obj[key], key);
};
/**
* @param {Object<string,any>} obj
* @return {number}
*/
const size = (obj) => keys(obj).length;
/**
* @param {Object|null|undefined} obj
*/
const isEmpty = (obj) => {
	for (const _k in obj) return false;
	return true;
};
/**
* @template {{ [key:string|number|symbol]: any }} T
* @param {T} obj
* @param {(v:T[keyof T],k:keyof T)=>boolean} f
* @return {boolean}
*/
const every = (obj, f) => {
	for (const key in obj) if (!f(obj[key], key)) return false;
	return true;
};
/**
* Calls `Object.prototype.hasOwnProperty`.
*
* @param {any} obj
* @param {string|number|symbol} key
* @return {boolean}
*/
const hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
/**
* @param {Object<string,any>} a
* @param {Object<string,any>} b
* @return {boolean}
*/
const equalFlat = (a, b) => a === b || size(a) === size(b) && every(a, (val, key) => (val !== void 0 || hasProperty(b, key)) && equals(b[key], val));
/**
* Make an object immutable. This hurts performance and is usually not needed if you perform good
* coding practices.
*/
const freeze = Object.freeze;
/**
* Make an object and all its children immutable.
* This *really* hurts performance and is usually not needed if you perform good coding practices.
*
* @template {any} T
* @param {T} o
* @return {Readonly<T>}
*/
const deepFreeze = (o) => {
	for (const key in o) {
		const c = o[key];
		if (typeof c === "object" || typeof c === "function") deepFreeze(o[key]);
	}
	return freeze(o);
};
//#endregion
//#region node_modules/lib0/function.js
/**
* Calls all functions in `fs` with args. Only throws after all functions were called.
*
* @param {Array<function>} fs
* @param {Array<any>} args
*/
const callAll = (fs, args, i = 0) => {
	try {
		for (; i < fs.length; i++) fs[i](...args);
	} finally {
		if (i < fs.length) callAll(fs, args, i + 1);
	}
};
/**
* @template A
*
* @param {A} a
* @return {A}
*/
const id = (a) => a;
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
/**
* @template V
* @template {V} OPTS
*
* @param {V} value
* @param {Array<OPTS>} options
*/
const isOneOf = (value, options) => options.includes(value);
//#endregion
//#region node_modules/lib0/environment.js
/**
* Isomorphic module to work access the environment (query params, env variables).
*
* @module environment
*/
/* c8 ignore next 2 */
const isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
typeof navigator !== "undefined" && /Mac/.test(navigator.platform);
/**
* @type {Map<string,string>}
*/
let params;
const args = [];
/* c8 ignore start */
const computeParams = () => {
	if (params === void 0) if (isNode) {
		params = create$5();
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
		params = create$5();
		(location.search || "?").slice(1).split("&").forEach((kv) => {
			if (kv.length !== 0) {
				const [key, value] = kv.split("=");
				params.set(`--${fromCamelCase(key, "-")}`, value);
				params.set(`-${fromCamelCase(key, "-")}`, value);
			}
		});
	} else params = create$5();
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
/* c8 ignore start */
/**
* Color is enabled by default if the terminal supports it.
*
* Explicitly enable color using `--color` parameter
* Disable color using `--no-color` parameter or using `NO_COLOR=1` environment variable.
* `FORCE_COLOR=1` enables color and takes precedence over all.
*/
const supportsColor = isNode && isOneOf(process.env.FORCE_COLOR, [
	"true",
	"1",
	"2"
]) || !hasParam("--no-colors") && !hasConf("no-color") && (!isNode || process.stdout.isTTY) && (!isNode || hasParam("--color") || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));
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
* Copy the content of an Uint8Array view to a new ArrayBuffer.
*
* @param {Uint8Array} uint8Array
* @return {Uint8Array}
*/
const copyUint8Array = (uint8Array) => {
	const newBuf = createUint8ArrayFromLen(uint8Array.byteLength);
	newBuf.set(uint8Array);
	return newBuf;
};
//#endregion
//#region node_modules/lib0/pair.js
/**
* Working with value pairs.
*
* @module pair
*/
/**
* @template L,R
*/
var Pair = class {
	/**
	* @param {L} left
	* @param {R} right
	*/
	constructor(left, right) {
		this.left = left;
		this.right = right;
	}
};
/**
* @template L,R
* @param {L} left
* @param {R} right
* @return {Pair<L,R>}
*/
const create$1 = (left, right) => new Pair(left, right);
//#endregion
//#region node_modules/lib0/prng.js
/**
* Generates a single random bool.
*
* @param {PRNG} gen A random number generator.
* @return {Boolean} A random boolean
*/
const bool = (gen) => gen.next() >= .5;
/**
* Generates a random integer with 53 bit resolution.
*
* @param {PRNG} gen A random number generator.
* @param {Number} min The lower bound of the allowed return values (inclusive).
* @param {Number} max The upper bound of the allowed return values (inclusive).
* @return {Number} A random integer on [min, max]
*/
const int53 = (gen, min, max) => floor(gen.next() * (max + 1 - min) + min);
/**
* Generates a random integer with 32 bit resolution.
*
* @param {PRNG} gen A random number generator.
* @param {Number} min The lower bound of the allowed return values (inclusive).
* @param {Number} max The upper bound of the allowed return values (inclusive).
* @return {Number} A random integer on [min, max]
*/
const int32 = (gen, min, max) => floor(gen.next() * (max + 1 - min) + min);
/**
* @deprecated
* Optimized version of prng.int32. It has the same precision as prng.int32, but should be preferred when
* openaring on smaller ranges.
*
* @param {PRNG} gen A random number generator.
* @param {Number} min The lower bound of the allowed return values (inclusive).
* @param {Number} max The upper bound of the allowed return values (inclusive). The max inclusive number is `binary.BITS31-1`
* @return {Number} A random integer on [min, max]
*/
const int31 = (gen, min, max) => int32(gen, min, max);
/**
* @param {PRNG} gen
* @return {string} A single letter (a-z)
*/
const letter = (gen) => fromCharCode(int31(gen, 97, 122));
/**
* @param {PRNG} gen
* @param {number} [minLen=0]
* @param {number} [maxLen=20]
* @return {string} A random word (0-20 characters) without spaces consisting of letters (a-z)
*/
const word = (gen, minLen = 0, maxLen = 20) => {
	const len = int31(gen, minLen, maxLen);
	let str = "";
	for (let i = 0; i < len; i++) str += letter(gen);
	return str;
};
/**
* Returns one element of a given array.
*
* @param {PRNG} gen A random number generator.
* @param {Array<T>} array Non empty Array of possible values.
* @return {T} One of the values of the supplied Array.
* @template T
*/
const oneOf = (gen, array) => array[int31(gen, 0, array.length - 1)];
/* c8 ignore stop */
//#endregion
//#region node_modules/lib0/schema.js
/**
* @experimental WIP
*
* Simple & efficient schemas for your data.
*/
/**
* @typedef {string|number|bigint|boolean|null|undefined|symbol} Primitive
*/
/**
* @typedef {{ [k:string|number|symbol]: any }} AnyObject
*/
/**
* @template T
* @typedef {T extends Schema<infer X> ? X : T} Unwrap
*/
/**
* @template T
* @typedef {T extends Schema<infer X> ? X : T} TypeOf
*/
/**
* @template {readonly unknown[]} T
* @typedef {T extends readonly [Schema<infer First>, ...infer Rest] ? [First, ...UnwrapArray<Rest>] : [] } UnwrapArray
*/
/**
* @template T
* @typedef {T extends Schema<infer S> ? Schema<S> : never} CastToSchema
*/
/**
* @template {unknown[]} Arr
* @typedef {Arr extends [...unknown[], infer L] ? L : never} TupleLast
*/
/**
* @template {unknown[]} Arr
* @typedef {Arr extends [...infer Fs, unknown] ? Fs : never} TuplePop
*/
/**
* @template {readonly unknown[]} T
* @typedef {T extends []
*   ? {}
*   : T extends [infer First]
*   ? First
*   : T extends [infer First, ...infer Rest]
*   ? First & Intersect<Rest>
*   : never
* } Intersect
*/
const schemaSymbol = Symbol("0schema");
var ValidationError = class {
	constructor() {
		/**
		* Reverse errors
		* @type {Array<{ path: string?, expected: string, has: string, message: string? }>}
		*/
		this._rerrs = [];
	}
	/**
	* @param {string?} path
	* @param {string} expected
	* @param {string} has
	* @param {string?} message
	*/
	extend(path, expected, has, message = null) {
		this._rerrs.push({
			path,
			expected,
			has,
			message
		});
	}
	toString() {
		const s = [];
		for (let i = this._rerrs.length - 1; i > 0; i--) {
			const r = this._rerrs[i];
			/* c8 ignore next */
			s.push(repeat(" ", (this._rerrs.length - i) * 2) + `${r.path != null ? `[${r.path}] ` : ""}${r.has} doesn't match ${r.expected}. ${r.message}`);
		}
		return s.join("\n");
	}
};
/**
* @param {any} a
* @param {any} b
* @return {boolean}
*/
const shapeExtends = (a, b) => {
	if (a === b) return true;
	if (a == null || b == null || a.constructor !== b.constructor) return false;
	if (a[EqualityTraitSymbol]) return equals(a, b);
	if (isArray(a)) return every$1(a, (aitem) => some(b, (bitem) => shapeExtends(aitem, bitem)));
	else if (isObject$1(a)) return every(a, (aitem, akey) => shapeExtends(aitem, b[akey]));
	/* c8 ignore next */
	return false;
};
/**
* @template T
* @implements {equalityTraits.EqualityTrait}
*/
var Schema = class {
	/**
	* If true, the more things are added to the shape the more objects this schema will accept (e.g.
	* union). By default, the more objects are added, the the fewer objects this schema will accept.
	* @protected
	*/
	static _dilutes = false;
	/**
	* @param {Schema<any>} other
	*/
	extends(other) {
		let [a, b] = [this.shape, other.shape];
		if (this.constructor._dilutes) [b, a] = [a, b];
		return shapeExtends(a, b);
	}
	/**
	* Overwrite this when necessary. By default, we only check the `shape` property which every shape
	* should have.
	* @param {Schema<any>} other
	*/
	equals(other) {
		return this.constructor === other.constructor && equalityDeep(this.shape, other.shape);
	}
	[schemaSymbol]() {
		return true;
	}
	/**
	* @param {object} other
	*/
	[EqualityTraitSymbol](other) {
		return this.equals(other);
	}
	/**
	* Use `schema.validate(obj)` with a typed parameter that is already of typed to be an instance of
	* Schema. Validate will check the structure of the parameter and return true iff the instance
	* really is an instance of Schema.
	*
	* @param {T} o
	* @return {boolean}
	*/
	validate(o) {
		return this.check(o);
	}
	/* c8 ignore start */
	/**
	* Similar to validate, but this method accepts untyped parameters.
	*
	* @param {any} _o
	* @param {ValidationError} [_err]
	* @return {_o is T}
	*/
	check(_o, _err) {
		methodUnimplemented();
	}
	/* c8 ignore stop */
	/**
	* @type {Schema<T?>}
	*/
	get nullable() {
		return $union(this, $null);
	}
	/**
	* @type {$Optional<Schema<T>>}
	*/
	get optional() {
		return new $Optional(this);
	}
	/**
	* Cast a variable to a specific type. Returns the casted value, or throws an exception otherwise.
	* Use this if you know that the type is of a specific type and you just want to convince the type
	* system.
	*
	* **Do not rely on these error messages!**
	* Performs an assertion check only if not in a production environment.
	*
	* @template OO
	* @param {OO} o
	* @return {Extract<OO, T> extends never ? T : (OO extends Array<never> ? T : Extract<OO,T>)}
	*/
	cast(o) {
		assert(o, this);
		return o;
	}
	/**
	* EXPECTO PATRONUM!! 🪄
	* This function protects against type errors. Though it may not work in the real world.
	*
	* "After all this time?"
	* "Always." - Snape, talking about type safety
	*
	* Ensures that a variable is a a specific type. Returns the value, or throws an exception if the assertion check failed.
	* Use this if you know that the type is of a specific type and you just want to convince the type
	* system.
	*
	* Can be useful when defining lambdas: `s.lambda(s.$number, s.$void).expect((n) => n + 1)`
	*
	* **Do not rely on these error messages!**
	* Performs an assertion check if not in a production environment.
	*
	* @param {T} o
	* @return {o extends T ? T : never}
	*/
	expect(o) {
		assert(o, this);
		return o;
	}
};
/**
* @template {(new (...args:any[]) => any) | ((...args:any[]) => any)} Constr
* @typedef {Constr extends ((...args:any[]) => infer T) ? T : (Constr extends (new (...args:any[]) => any) ? InstanceType<Constr> : never)} Instance
*/
/**
* @template {(new (...args:any[]) => any) | ((...args:any[]) => any)} C
* @extends {Schema<Instance<C>>}
*/
var $ConstructedBy = class extends Schema {
	/**
	* @param {C} c
	* @param {((o:Instance<C>)=>boolean)|null} check
	*/
	constructor(c, check) {
		super();
		this.shape = c;
		this._c = check;
	}
	/**
	* @param {any} o
	* @param {ValidationError} [err]
	* @return {o is C extends ((...args:any[]) => infer T) ? T : (C extends (new (...args:any[]) => any) ? InstanceType<C> : never)} o
	*/
	check(o, err = void 0) {
		const c = o?.constructor === this.shape && (this._c == null || this._c(o));
		/* c8 ignore next */
		!c && err?.extend(null, this.shape.name, o?.constructor.name, o?.constructor !== this.shape ? "Constructor match failed" : "Check failed");
		return c;
	}
};
/**
* @template {(new (...args:any[]) => any) | ((...args:any[]) => any)} C
* @param {C} c
* @param {((o:Instance<C>) => boolean)|null} check
* @return {CastToSchema<$ConstructedBy<C>>}
*/
const $constructedBy = (c, check = null) => new $ConstructedBy(c, check);
$constructedBy($ConstructedBy);
/**
* Check custom properties on any object. You may want to overwrite the generated Schema<any>.
*
* @extends {Schema<any>}
*/
var $Custom = class extends Schema {
	/**
	* @param {(o:any) => boolean} check
	*/
	constructor(check) {
		super();
		/**
		* @type {(o:any) => boolean}
		*/
		this.shape = check;
	}
	/**
	* @param {any} o
	* @param {ValidationError} err
	* @return {o is any}
	*/
	check(o, err) {
		const c = this.shape(o);
		/* c8 ignore next */
		!c && err?.extend(null, "custom prop", o?.constructor.name, "failed to check custom prop");
		return c;
	}
};
/**
* @param {(o:any) => boolean} check
* @return {Schema<any>}
*/
const $custom = (check) => new $Custom(check);
$constructedBy($Custom);
/**
* @template {Primitive} T
* @extends {Schema<T>}
*/
var $Literal = class extends Schema {
	/**
	* @param {Array<T>} literals
	*/
	constructor(literals) {
		super();
		this.shape = literals;
	}
	/**
	*
	* @param {any} o
	* @param {ValidationError} [err]
	* @return {o is T}
	*/
	check(o, err) {
		const c = this.shape.some((a) => a === o);
		/* c8 ignore next */
		!c && err?.extend(null, this.shape.join(" | "), o.toString());
		return c;
	}
};
/**
* @template {Primitive[]} T
* @param {T} literals
* @return {CastToSchema<$Literal<T[number]>>}
*/
const $literal = (...literals) => new $Literal(literals);
const $$literal = $constructedBy($Literal);
/**
* @template {Array<string|Schema<string|number>>} Ts
* @typedef {Ts extends [] ? `` : (Ts extends [infer T] ? (Unwrap<T> extends (string|number) ? Unwrap<T> : never) : (Ts extends [infer T1, ...infer Rest] ? `${Unwrap<T1> extends (string|number) ? Unwrap<T1> : never}${Rest extends Array<string|Schema<string|number>> ? CastStringTemplateArgsToTemplate<Rest> : never}` : never))} CastStringTemplateArgsToTemplate
*/
/**
* @param {string} str
* @return {string}
*/
const _regexEscape = RegExp.escape || ((str) => str.replace(/[().|&,$^[\]]/g, (s) => "\\" + s));
/**
* @param {string|Schema<any>} s
* @return {string[]}
*/
const _schemaStringTemplateToRegex = (s) => {
	if ($string.check(s)) return [_regexEscape(s)];
	if ($$literal.check(s)) return s.shape.map((v) => v + "");
	if ($$number.check(s)) return ["[+-]?\\d+.?\\d*"];
	if ($$string.check(s)) return [".*"];
	if ($$union.check(s)) return s.shape.map(_schemaStringTemplateToRegex).flat(1);
	/* c8 ignore next 2 */
	unexpectedCase();
};
/**
* @template {Array<string|Schema<string|number>>} T
* @extends {Schema<CastStringTemplateArgsToTemplate<T>>}
*/
var $StringTemplate = class extends Schema {
	/**
	* @param {T} shape
	*/
	constructor(shape) {
		super();
		this.shape = shape;
		this._r = new RegExp("^" + shape.map(_schemaStringTemplateToRegex).map((opts) => `(${opts.join("|")})`).join("") + "$");
	}
	/**
	* @param {any} o
	* @param {ValidationError} [err]
	* @return {o is CastStringTemplateArgsToTemplate<T>}
	*/
	check(o, err) {
		const c = this._r.exec(o) != null;
		/* c8 ignore next */
		!c && err?.extend(null, this._r.toString(), o.toString(), "String doesn't match string template.");
		return c;
	}
};
$constructedBy($StringTemplate);
const isOptionalSymbol = Symbol("optional");
/**
* @template {Schema<any>} S
* @extends Schema<Unwrap<S>|undefined>
*/
var $Optional = class extends Schema {
	/**
	* @param {S} shape
	*/
	constructor(shape) {
		super();
		this.shape = shape;
	}
	/**
	* @param {any} o
	* @param {ValidationError} [err]
	* @return {o is (Unwrap<S>|undefined)}
	*/
	check(o, err) {
		const c = o === void 0 || this.shape.check(o);
		/* c8 ignore next */
		!c && err?.extend(null, "undefined (optional)", "()");
		return c;
	}
	get [isOptionalSymbol]() {
		return true;
	}
};
const $$optional = $constructedBy($Optional);
/**
* @extends Schema<never>
*/
var $Never = class extends Schema {
	/**
	* @param {any} _o
	* @param {ValidationError} [err]
	* @return {_o is never}
	*/
	check(_o, err) {
		/* c8 ignore next */
		err?.extend(null, "never", typeof _o);
		return false;
	}
};
new $Never();
$constructedBy($Never);
/**
* @template {{ [key: string|symbol|number]: Schema<any> }} S
* @typedef {{ [Key in keyof S as S[Key] extends $Optional<Schema<any>> ? Key : never]?: S[Key] extends $Optional<Schema<infer Type>> ? Type : never } & { [Key in keyof S as S[Key] extends $Optional<Schema<any>> ? never : Key]: S[Key] extends Schema<infer Type> ? Type : never }} $ObjectToType
*/
/**
* @template {{[key:string|symbol|number]: Schema<any>}} S
* @extends {Schema<$ObjectToType<S>>}
*/
var $Object = class $Object extends Schema {
	/**
	* @param {S} shape
	* @param {boolean} partial
	*/
	constructor(shape, partial = false) {
		super();
		/**
		* @type {S}
		*/
		this.shape = shape;
		this._isPartial = partial;
	}
	static _dilutes = true;
	/**
	* @type {Schema<Partial<$ObjectToType<S>>>}
	*/
	get partial() {
		return new $Object(this.shape, true);
	}
	/**
	* @param {any} o
	* @param {ValidationError} err
	* @return {o is $ObjectToType<S>}
	*/
	check(o, err) {
		if (o == null) {
			/* c8 ignore next */
			err?.extend(null, "object", "null");
			return false;
		}
		return every(this.shape, (vv, vk) => {
			const c = this._isPartial && !hasProperty(o, vk) || vv.check(o[vk], err);
			!c && err?.extend(vk.toString(), vv.toString(), typeof o[vk], "Object property does not match");
			return c;
		});
	}
};
/**
* @template S
* @typedef {Schema<{ [Key in keyof S as S[Key] extends $Optional<Schema<any>> ? Key : never]?: S[Key] extends $Optional<Schema<infer Type>> ? Type : never } & { [Key in keyof S as S[Key] extends $Optional<Schema<any>> ? never : Key]: S[Key] extends Schema<infer Type> ? Type : never }>} _ObjectDefToSchema
*/
/**
* @template {{ [key:string|symbol|number]: Schema<any> }} S
* @param {S} def
* @return {_ObjectDefToSchema<S> extends Schema<infer S> ? Schema<{ [K in keyof S]: S[K] }> : never}
*/
const $object = (def) => new $Object(def);
const $$object = $constructedBy($Object);
/**
* @type {Schema<{[key:string]: any}>}
*/
const $objectAny = $custom((o) => o != null && (o.constructor === Object || o.constructor == null));
/**
* @template {Schema<string|number|symbol>} Keys
* @template {Schema<any>} Values
* @extends {Schema<{ [key in Unwrap<Keys>]: Unwrap<Values> }>}
*/
var $Record = class extends Schema {
	/**
	* @param {Keys} keys
	* @param {Values} values
	*/
	constructor(keys, values) {
		super();
		this.shape = {
			keys,
			values
		};
	}
	/**
	* @param {any} o
	* @param {ValidationError} err
	* @return {o is { [key in Unwrap<Keys>]: Unwrap<Values> }}
	*/
	check(o, err) {
		return o != null && every(o, (vv, vk) => {
			const ck = this.shape.keys.check(vk, err);
			/* c8 ignore next */
			!ck && err?.extend(vk + "", "Record", typeof o, ck ? "Key doesn't match schema" : "Value doesn't match value");
			return ck && this.shape.values.check(vv, err);
		});
	}
};
/**
* @template {Schema<string|number|symbol>} Keys
* @template {Schema<any>} Values
* @param {Keys} keys
* @param {Values} values
* @return {CastToSchema<$Record<Keys,Values>>}
*/
const $record = (keys, values) => new $Record(keys, values);
const $$record = $constructedBy($Record);
/**
* @template {Schema<any>[]} S
* @extends {Schema<{ [Key in keyof S]: S[Key] extends Schema<infer Type> ? Type : never }>}
*/
var $Tuple = class extends Schema {
	/**
	* @param {S} shape
	*/
	constructor(shape) {
		super();
		this.shape = shape;
	}
	/**
	* @param {any} o
	* @param {ValidationError} err
	* @return {o is { [K in keyof S]: S[K] extends Schema<infer Type> ? Type : never }}
	*/
	check(o, err) {
		return o != null && every(this.shape, (vv, vk) => {
			const c = vv.check(o[vk], err);
			/* c8 ignore next */
			!c && err?.extend(vk.toString(), "Tuple", typeof vv);
			return c;
		});
	}
};
/**
* @template {Array<Schema<any>>} T
* @param {T} def
* @return {CastToSchema<$Tuple<T>>}
*/
const $tuple = (...def) => new $Tuple(def);
$constructedBy($Tuple);
/**
* @template {Schema<any>} S
* @extends {Schema<Array<S extends Schema<infer T> ? T : never>>}
*/
var $Array = class extends Schema {
	/**
	* @param {Array<S>} v
	*/
	constructor(v) {
		super();
		/**
		* @type {Schema<S extends Schema<infer T> ? T : never>}
		*/
		this.shape = v.length === 1 ? v[0] : new $Union(v);
	}
	/**
	* @param {any} o
	* @param {ValidationError} [err]
	* @return {o is Array<S extends Schema<infer T> ? T : never>} o
	*/
	check(o, err) {
		const c = isArray(o) && every$1(o, (oi) => this.shape.check(oi));
		/* c8 ignore next */
		!c && err?.extend(null, "Array", "");
		return c;
	}
};
/**
* @template {Array<Schema<any>>} T
* @param {T} def
* @return {Schema<Array<T extends Array<Schema<infer S>> ? S : never>>}
*/
const $array = (...def) => new $Array(def);
const $$array = $constructedBy($Array);
/**
* @type {Schema<Array<any>>}
*/
const $arrayAny = $custom((o) => isArray(o));
/**
* @template T
* @extends {Schema<T>}
*/
var $InstanceOf = class extends Schema {
	/**
	* @param {new (...args:any) => T} constructor
	* @param {((o:T) => boolean)|null} check
	*/
	constructor(constructor, check) {
		super();
		this.shape = constructor;
		this._c = check;
	}
	/**
	* @param {any} o
	* @param {ValidationError} err
	* @return {o is T}
	*/
	check(o, err) {
		const c = o instanceof this.shape && (this._c == null || this._c(o));
		/* c8 ignore next */
		!c && err?.extend(null, this.shape.name, o?.constructor.name);
		return c;
	}
};
/**
* @template T
* @param {new (...args:any) => T} c
* @param {((o:T) => boolean)|null} check
* @return {Schema<T>}
*/
const $instanceOf = (c, check = null) => new $InstanceOf(c, check);
$constructedBy($InstanceOf);
const $$schema = $instanceOf(Schema);
/**
* @template {Schema<any>[]} Args
* @typedef {(...args:UnwrapArray<TuplePop<Args>>)=>Unwrap<TupleLast<Args>>} _LArgsToLambdaDef
*/
/**
* @template {Array<Schema<any>>} Args
* @extends {Schema<_LArgsToLambdaDef<Args>>}
*/
var $Lambda = class extends Schema {
	/**
	* @param {Args} args
	*/
	constructor(args) {
		super();
		this.len = args.length - 1;
		this.args = $tuple(...args.slice(-1));
		this.res = args[this.len];
	}
	/**
	* @param {any} f
	* @param {ValidationError} err
	* @return {f is _LArgsToLambdaDef<Args>}
	*/
	check(f, err) {
		const c = f.constructor === Function && f.length <= this.len;
		/* c8 ignore next */
		!c && err?.extend(null, "function", typeof f);
		return c;
	}
};
const $$lambda = $constructedBy($Lambda);
/**
* @type {Schema<Function>}
*/
const $function = $custom((o) => typeof o === "function");
/**
* @template {Array<Schema<any>>} T
* @extends {Schema<Intersect<UnwrapArray<T>>>}
*/
var $Intersection = class extends Schema {
	/**
	* @param {T} v
	*/
	constructor(v) {
		super();
		/**
		* @type {T}
		*/
		this.shape = v;
	}
	/**
	* @param {any} o
	* @param {ValidationError} [err]
	* @return {o is Intersect<UnwrapArray<T>>}
	*/
	check(o, err) {
		const c = every$1(this.shape, (check) => check.check(o, err));
		/* c8 ignore next */
		!c && err?.extend(null, "Intersectinon", typeof o);
		return c;
	}
};
$constructedBy($Intersection, (o) => o.shape.length > 0);
/**
* @template S
* @extends {Schema<S>}
*/
var $Union = class extends Schema {
	static _dilutes = true;
	/**
	* @param {Array<Schema<S>>} v
	*/
	constructor(v) {
		super();
		this.shape = v;
	}
	/**
	* @param {any} o
	* @param {ValidationError} [err]
	* @return {o is S}
	*/
	check(o, err) {
		const c = some(this.shape, (vv) => vv.check(o, err));
		err?.extend(null, "Union", typeof o);
		return c;
	}
};
/**
* @template {Array<any>} T
* @param {T} schemas
* @return {CastToSchema<$Union<Unwrap<ReadSchema<T>>>>}
*/
const $union = (...schemas) => schemas.findIndex(($s) => $$union.check($s)) >= 0 ? $union(...schemas.map(($s) => $($s)).map(($s) => $$union.check($s) ? $s.shape : [$s]).flat(1)) : schemas.length === 1 ? schemas[0] : new $Union(schemas);
const $$union = $constructedBy($Union);
const _t = () => true;
/**
* @type {Schema<any>}
*/
const $any = $custom(_t);
const $$any = $constructedBy($Custom, (o) => o.shape === _t);
/**
* @type {Schema<bigint>}
*/
const $bigint = $custom((o) => typeof o === "bigint");
const $$bigint = $custom((o) => o === $bigint);
/**
* @type {Schema<symbol>}
*/
const $symbol = $custom((o) => typeof o === "symbol");
$custom((o) => o === $symbol);
/**
* @type {Schema<number>}
*/
const $number = $custom((o) => typeof o === "number");
const $$number = $custom((o) => o === $number);
/**
* @type {Schema<string>}
*/
const $string = $custom((o) => typeof o === "string");
const $$string = $custom((o) => o === $string);
/**
* @type {Schema<boolean>}
*/
const $boolean = $custom((o) => typeof o === "boolean");
const $$boolean = $custom((o) => o === $boolean);
/**
* @type {Schema<undefined>}
*/
const $undefined = $literal(void 0);
$constructedBy($Literal, (o) => o.shape.length === 1 && o.shape[0] === void 0);
$literal(void 0);
const $null = $literal(null);
const $$null = $constructedBy($Literal, (o) => o.shape.length === 1 && o.shape[0] === null);
$constructedBy(Uint8Array);
$constructedBy($ConstructedBy, (o) => o.shape === Uint8Array);
/**
* @type {Schema<Primitive>}
*/
const $primitive = $union($number, $string, $null, $undefined, $bigint, $boolean, $symbol);
(() => {
	const $jsonArr = $array($any);
	const $jsonRecord = $record($string, $any);
	const $json = $union($number, $string, $null, $boolean, $jsonArr, $jsonRecord);
	$jsonArr.shape = $json;
	$jsonRecord.shape.values = $json;
	return $json;
})();
/**
* @template {any} IN
* @typedef {IN extends Schema<any> ? IN
*   : (IN extends string|number|boolean|null ? Schema<IN>
*     : (IN extends new (...args:any[])=>any ? Schema<InstanceType<IN>>
*       : (IN extends any[] ? Schema<{ [K in keyof IN]: Unwrap<ReadSchema<IN[K]>> }[number]>
*       : (IN extends object ? (_ObjectDefToSchema<{[K in keyof IN]:ReadSchema<IN[K]>}> extends Schema<infer S> ? Schema<{ [K in keyof S]: S[K] }> : never)
*         : never)
*         )
*       )
*     )
* } ReadSchemaOld
*/
/**
* @template {any} IN
* @typedef {[Extract<IN,Schema<any>>,Extract<IN,string|number|boolean|null>,Extract<IN,new (...args:any[])=>any>,Extract<IN,any[]>,Extract<Exclude<IN,Schema<any>|string|number|boolean|null|(new (...args:any[])=>any)|any[]>,object>] extends [infer Schemas, infer Primitives, infer Constructors, infer Arrs, infer Obj]
*   ? Schema<
*       (Schemas extends Schema<infer S> ? S : never)
*     | Primitives
*     | (Constructors extends new (...args:any[])=>any ? InstanceType<Constructors> : never)
*     | (Arrs extends any[] ? { [K in keyof Arrs]: Unwrap<ReadSchema<Arrs[K]>> }[number] : never)
*     | (Obj extends object ? Unwrap<(_ObjectDefToSchema<{[K in keyof Obj]:ReadSchema<Obj[K]>}> extends Schema<infer S> ? Schema<{ [K in keyof S]: S[K] }> : never)> : never)>
*   : never
* } ReadSchema
*/
/**
* @typedef {ReadSchema<{x:42}|{y:99}|Schema<string>|[1,2,{}]>} Q
*/
/**
* @template IN
* @param {IN} o
* @return {ReadSchema<IN>}
*/
const $ = (o) => {
	if ($$schema.check(o)) return o;
	else if ($objectAny.check(o)) {
		/**
		* @type {any}
		*/
		const o2 = {};
		for (const k in o) o2[k] = $(o[k]);
		return $object(o2);
	} else if ($arrayAny.check(o)) return $union(...o.map($));
	else if ($primitive.check(o)) return $literal(o);
	else if ($function.check(o)) return $constructedBy(o);
	/* c8 ignore next */
	unexpectedCase();
};
/* c8 ignore start */
/**
* Assert that a variable is of this specific type.
* The assertion check is only performed in non-production environments.
*
* @type {<T>(o:any,schema:Schema<T>) => asserts o is T}
*/
const assert = production ? () => {} : (o, schema) => {
	const err = new ValidationError();
	if (!schema.check(o, err)) throw create$3(`Expected value to be of type ${schema.constructor.name}.\n${err.toString()}`);
};
/* c8 ignore end */
/**
* @template In
* @template Out
* @typedef {{ if: Schema<In>, h: (o:In,state?:any)=>Out }} Pattern
*/
/**
* @template {Pattern<any,any>} P
* @template In
* @typedef {ReturnType<Extract<P,Pattern<In extends number ? number : (In extends string ? string : In),any>>['h']>} PatternMatchResult
*/
/**
* @todo move this to separate library
* @template {any} [State=undefined]
* @template {Pattern<any,any>} [Patterns=never]
*/
var PatternMatcher = class {
	/**
	* @param {Schema<State>} [$state]
	*/
	constructor($state) {
		/**
		* @type {Array<Patterns>}
		*/
		this.patterns = [];
		this.$state = $state;
	}
	/**
	* @template P
	* @template R
	* @param {P} pattern
	* @param {(o:NoInfer<Unwrap<ReadSchema<P>>>,s:State)=>R} handler
	* @return {PatternMatcher<State,Patterns|Pattern<Unwrap<ReadSchema<P>>,R>>}
	*/
	if(pattern, handler) {
		this.patterns.push({
			if: $(pattern),
			h: handler
		});
		return this;
	}
	/**
	* @template R
	* @param {(o:any,s:State)=>R} h
	*/
	else(h) {
		return this.if($any, h);
	}
	/**
	* @return {State extends undefined
	*   ? <In extends Unwrap<Patterns['if']>>(o:In,state?:undefined)=>PatternMatchResult<Patterns,In>
	*   : <In extends Unwrap<Patterns['if']>>(o:In,state:State)=>PatternMatchResult<Patterns,In>}
	*/
	done() {
		return (o, s) => {
			for (let i = 0; i < this.patterns.length; i++) {
				const p = this.patterns[i];
				if (p.if.check(o)) return p.h(o, s);
			}
			throw create$3("Unhandled pattern");
		};
	}
};
/**
* @template [State=undefined]
* @param {State} [state]
* @return {PatternMatcher<State extends undefined ? undefined : Unwrap<ReadSchema<State>>>}
*/
const match = (state) => new PatternMatcher(state);
/**
* Helper function to generate a (non-exhaustive) sample set from a gives schema.
*
* @type {<T>(o:T,gen:prng.PRNG)=>T}
*/
const _random = match($any).if($$number, (_o, gen) => int53(gen, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER)).if($$string, (_o, gen) => word(gen)).if($$boolean, (_o, gen) => bool(gen)).if($$bigint, (_o, gen) => BigInt(int53(gen, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER))).if($$union, (o, gen) => random(gen, oneOf(gen, o.shape))).if($$object, (o, gen) => {
	/**
	* @type {any}
	*/
	const res = {};
	for (const k in o.shape) {
		let prop = o.shape[k];
		if ($$optional.check(prop)) {
			if (bool(gen)) continue;
			prop = prop.shape;
		}
		res[k] = _random(prop, gen);
	}
	return res;
}).if($$array, (o, gen) => {
	const arr = [];
	const n = int32(gen, 0, 42);
	for (let i = 0; i < n; i++) arr.push(random(gen, o.shape));
	return arr;
}).if($$literal, (o, gen) => {
	return oneOf(gen, o.shape);
}).if($$null, (o, gen) => {
	return null;
}).if($$lambda, (o, gen) => {
	const res = random(gen, o.res);
	return () => res;
}).if($$any, (o, gen) => random(gen, oneOf(gen, [
	$number,
	$string,
	$null,
	$undefined,
	$bigint,
	$boolean,
	$array($number),
	$record($union("a", "b", "c"), $number)
]))).if($$record, (o, gen) => {
	/**
	* @type {any}
	*/
	const res = {};
	const keysN = int53(gen, 0, 3);
	for (let i = 0; i < keysN; i++) {
		const key = random(gen, o.shape.keys);
		res[key] = random(gen, o.shape.values);
	}
	return res;
}).done();
/**
* @template S
* @param {prng.PRNG} gen
* @param {S} schema
* @return {Unwrap<ReadSchema<S>>}
*/
const random = (gen, schema) => _random($(schema), gen);
//#endregion
//#region node_modules/lib0/dom.js
/* c8 ignore start */
/**
* @type {Document}
*/
const doc = typeof document !== "undefined" ? document : {};
$custom((el) => el.nodeType === DOCUMENT_FRAGMENT_NODE);
typeof DOMParser !== "undefined" && new DOMParser();
$custom((el) => el.nodeType === ELEMENT_NODE);
$custom((el) => el.nodeType === TEXT_NODE);
/**
* @param {Map<string,string>} m
* @return {string}
*/
const mapToStyleString = (m) => map(m, (value, key) => `${key}:${value};`).join("");
const ELEMENT_NODE = doc.ELEMENT_NODE;
const TEXT_NODE = doc.TEXT_NODE;
doc.CDATA_SECTION_NODE;
doc.COMMENT_NODE;
const DOCUMENT_NODE = doc.DOCUMENT_NODE;
doc.DOCUMENT_TYPE_NODE;
const DOCUMENT_FRAGMENT_NODE = doc.DOCUMENT_FRAGMENT_NODE;
$custom((el) => el.nodeType === DOCUMENT_NODE);
/* c8 ignore stop */
//#endregion
//#region node_modules/lib0/symbol.js
/**
* Utility module to work with EcmaScript Symbols.
*
* @module symbol
*/
/**
* Return fresh symbol.
*/
const create = Symbol;
//#endregion
//#region node_modules/lib0/logging.common.js
const BOLD = create();
const UNBOLD = create();
const BLUE = create();
const GREY = create();
const GREEN = create();
const RED = create();
const PURPLE = create();
const ORANGE = create();
const UNCOLOR = create();
/* c8 ignore start */
/**
* @param {Array<undefined|string|Symbol|Object|number|function():any>} args
* @return {Array<string|object|number|undefined>}
*/
const computeNoColorLoggingArgs = (args) => {
	if (args.length === 1 && args[0]?.constructor === Function) args = args[0]();
	const strBuilder = [];
	const logArgs = [];
	let i = 0;
	for (; i < args.length; i++) {
		const arg = args[i];
		if (arg === void 0) break;
		else if (arg.constructor === String || arg.constructor === Number) strBuilder.push(arg);
		else if (arg.constructor === Object) break;
	}
	if (i > 0) logArgs.push(strBuilder.join(""));
	for (; i < args.length; i++) {
		const arg = args[i];
		if (!(arg instanceof Symbol)) logArgs.push(arg);
	}
	return logArgs;
};
getUnixTime();
/* c8 ignore stop */
//#endregion
//#region node_modules/lib0/logging.js
/**
* Isomorphic logging module with support for colors!
*
* @module logging
*/
/**
* @type {Object<Symbol,pair.Pair<string,string>>}
*/
const _browserStyleMap = {
	[BOLD]: create$1("font-weight", "bold"),
	[UNBOLD]: create$1("font-weight", "normal"),
	[BLUE]: create$1("color", "blue"),
	[GREEN]: create$1("color", "green"),
	[GREY]: create$1("color", "grey"),
	[RED]: create$1("color", "red"),
	[PURPLE]: create$1("color", "purple"),
	[ORANGE]: create$1("color", "orange"),
	[UNCOLOR]: create$1("color", "black")
};
/**
* @param {Array<string|Symbol|Object|number|function():any>} args
* @return {Array<string|object|number>}
*/
/* c8 ignore start */
const computeBrowserLoggingArgs = (args) => {
	if (args.length === 1 && args[0]?.constructor === Function) args = args[0]();
	const strBuilder = [];
	const styles = [];
	const currentStyle = create$5();
	/**
	* @type {Array<string|Object|number>}
	*/
	let logArgs = [];
	let i = 0;
	for (; i < args.length; i++) {
		const arg = args[i];
		const style = _browserStyleMap[arg];
		if (style !== void 0) currentStyle.set(style.left, style.right);
		else {
			if (arg === void 0) break;
			if (arg.constructor === String || arg.constructor === Number) {
				const style = mapToStyleString(currentStyle);
				if (i > 0 || style.length > 0) {
					strBuilder.push("%c" + arg);
					styles.push(style);
				} else strBuilder.push(arg);
			} else break;
		}
	}
	if (i > 0) {
		logArgs = styles;
		logArgs.unshift(strBuilder.join(""));
	}
	for (; i < args.length; i++) {
		const arg = args[i];
		if (!(arg instanceof Symbol)) logArgs.push(arg);
	}
	return logArgs;
};
/* c8 ignore stop */
/* c8 ignore start */
const computeLoggingArgs = supportsColor ? computeBrowserLoggingArgs : computeNoColorLoggingArgs;
/* c8 ignore stop */
/**
* @param {Array<string|Symbol|Object|number>} args
*/
const print = (...args) => {
	console.log(...computeLoggingArgs(args));
	/* c8 ignore next */
	vconsoles.forEach((vc) => vc.print(args));
};
/* c8 ignore start */
/**
* @param {Array<string|Symbol|Object|number>} args
*/
const warn = (...args) => {
	console.warn(...computeLoggingArgs(args));
	args.unshift(ORANGE);
	vconsoles.forEach((vc) => vc.print(args));
};
const vconsoles = create$4();
//#endregion
//#region node_modules/lib0/iterator.js
/**
* @template T
* @param {function():IteratorResult<T>} next
* @return {IterableIterator<T>}
*/
const createIterator = (next) => ({
	/**
	* @return {IterableIterator<T>}
	*/
	[Symbol.iterator]() {
		return this;
	},
	next
});
/**
* @template T
* @param {Iterator<T>} iterator
* @param {function(T):boolean} filter
*/
const iteratorFilter = (iterator, filter) => createIterator(() => {
	let res;
	do
		res = iterator.next();
	while (!res.done && !filter(res.value));
	return res;
});
/**
* @template T,M
* @param {Iterator<T>} iterator
* @param {function(T):M} fmap
*/
const iteratorMap = (iterator, fmap) => createIterator(() => {
	const { done, value } = iterator.next();
	return {
		done,
		value: done ? void 0 : fmap(value)
	};
});
//#endregion
//#region node_modules/yjs/dist/yjs.mjs
var DeleteItem = class {
	/**
	* @param {number} clock
	* @param {number} len
	*/
	constructor(clock, len) {
		/**
		* @type {number}
		*/
		this.clock = clock;
		/**
		* @type {number}
		*/
		this.len = len;
	}
};
/**
* We no longer maintain a DeleteStore. DeleteSet is a temporary object that is created when needed.
* - When created in a transaction, it must only be accessed after sorting, and merging
*   - This DeleteSet is send to other clients
* - We do not create a DeleteSet when we send a sync message. The DeleteSet message is created directly from StructStore
* - We read a DeleteSet as part of a sync/update message. In this case the DeleteSet is already sorted and merged.
*/
var DeleteSet = class {
	constructor() {
		/**
		* @type {Map<number,Array<DeleteItem>>}
		*/
		this.clients = /* @__PURE__ */ new Map();
	}
};
/**
* Iterate over all structs that the DeleteSet gc's.
*
* @param {Transaction} transaction
* @param {DeleteSet} ds
* @param {function(GC|Item):void} f
*
* @function
*/
const iterateDeletedStructs = (transaction, ds, f) => ds.clients.forEach((deletes, clientid) => {
	const structs = transaction.doc.store.clients.get(clientid);
	if (structs != null) {
		const lastStruct = structs[structs.length - 1];
		const clockState = lastStruct.id.clock + lastStruct.length;
		for (let i = 0, del = deletes[i]; i < deletes.length && del.clock < clockState; del = deletes[++i]) iterateStructs(transaction, structs, del.clock, del.len, f);
	}
});
/**
* @param {Array<DeleteItem>} dis
* @param {number} clock
* @return {number|null}
*
* @private
* @function
*/
const findIndexDS = (dis, clock) => {
	let left = 0;
	let right = dis.length - 1;
	while (left <= right) {
		const midindex = floor((left + right) / 2);
		const mid = dis[midindex];
		const midclock = mid.clock;
		if (midclock <= clock) {
			if (clock < midclock + mid.len) return midindex;
			left = midindex + 1;
		} else right = midindex - 1;
	}
	return null;
};
/**
* @param {DeleteSet} ds
* @param {ID} id
* @return {boolean}
*
* @private
* @function
*/
const isDeleted = (ds, id) => {
	const dis = ds.clients.get(id.client);
	return dis !== void 0 && findIndexDS(dis, id.clock) !== null;
};
/**
* @param {DeleteSet} ds
*
* @private
* @function
*/
const sortAndMergeDeleteSet = (ds) => {
	ds.clients.forEach((dels) => {
		dels.sort((a, b) => a.clock - b.clock);
		let i, j;
		for (i = 1, j = 1; i < dels.length; i++) {
			const left = dels[j - 1];
			const right = dels[i];
			if (left.clock + left.len >= right.clock) dels[j - 1] = new DeleteItem(left.clock, max(left.len, right.clock + right.len - left.clock));
			else {
				if (j < i) dels[j] = right;
				j++;
			}
		}
		dels.length = j;
	});
};
/**
* @param {Array<DeleteSet>} dss
* @return {DeleteSet} A fresh DeleteSet
*/
const mergeDeleteSets = (dss) => {
	const merged = new DeleteSet();
	for (let dssI = 0; dssI < dss.length; dssI++) dss[dssI].clients.forEach((delsLeft, client) => {
		if (!merged.clients.has(client)) {
			/**
			* @type {Array<DeleteItem>}
			*/
			const dels = delsLeft.slice();
			for (let i = dssI + 1; i < dss.length; i++) appendTo(dels, dss[i].clients.get(client) || []);
			merged.clients.set(client, dels);
		}
	});
	sortAndMergeDeleteSet(merged);
	return merged;
};
/**
* @param {DeleteSet} ds
* @param {number} client
* @param {number} clock
* @param {number} length
*
* @private
* @function
*/
const addToDeleteSet = (ds, client, clock, length) => {
	setIfUndefined(ds.clients, client, () => []).push(new DeleteItem(clock, length));
};
const createDeleteSet = () => new DeleteSet();
/**
* @param {StructStore} ss
* @return {DeleteSet} Merged and sorted DeleteSet
*
* @private
* @function
*/
const createDeleteSetFromStructStore = (ss) => {
	const ds = createDeleteSet();
	ss.clients.forEach((structs, client) => {
		/**
		* @type {Array<DeleteItem>}
		*/
		const dsitems = [];
		for (let i = 0; i < structs.length; i++) {
			const struct = structs[i];
			if (struct.deleted) {
				const clock = struct.id.clock;
				let len = struct.length;
				if (i + 1 < structs.length) for (let next = structs[i + 1]; i + 1 < structs.length && next.deleted; next = structs[++i + 1]) len += next.length;
				dsitems.push(new DeleteItem(clock, len));
			}
		}
		if (dsitems.length > 0) ds.clients.set(client, dsitems);
	});
	return ds;
};
/**
* @param {DSEncoderV1 | DSEncoderV2} encoder
* @param {DeleteSet} ds
*
* @private
* @function
*/
const writeDeleteSet = (encoder, ds) => {
	writeVarUint(encoder.restEncoder, ds.clients.size);
	from(ds.clients.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, dsitems]) => {
		encoder.resetDsCurVal();
		writeVarUint(encoder.restEncoder, client);
		const len = dsitems.length;
		writeVarUint(encoder.restEncoder, len);
		for (let i = 0; i < len; i++) {
			const item = dsitems[i];
			encoder.writeDsClock(item.clock);
			encoder.writeDsLen(item.len);
		}
	});
};
/**
* @param {DSDecoderV1 | DSDecoderV2} decoder
* @return {DeleteSet}
*
* @private
* @function
*/
const readDeleteSet = (decoder) => {
	const ds = new DeleteSet();
	const numClients = readVarUint(decoder.restDecoder);
	for (let i = 0; i < numClients; i++) {
		decoder.resetDsCurVal();
		const client = readVarUint(decoder.restDecoder);
		const numberOfDeletes = readVarUint(decoder.restDecoder);
		if (numberOfDeletes > 0) {
			const dsField = setIfUndefined(ds.clients, client, () => []);
			for (let i = 0; i < numberOfDeletes; i++) dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
		}
	}
	return ds;
};
/**
* @todo YDecoder also contains references to String and other Decoders. Would make sense to exchange YDecoder.toUint8Array for YDecoder.DsToUint8Array()..
*/
/**
* @param {DSDecoderV1 | DSDecoderV2} decoder
* @param {Transaction} transaction
* @param {StructStore} store
* @return {Uint8Array|null} Returns a v2 update containing all deletes that couldn't be applied yet; or null if all deletes were applied successfully.
*
* @private
* @function
*/
const readAndApplyDeleteSet = (decoder, transaction, store) => {
	const unappliedDS = new DeleteSet();
	const numClients = readVarUint(decoder.restDecoder);
	for (let i = 0; i < numClients; i++) {
		decoder.resetDsCurVal();
		const client = readVarUint(decoder.restDecoder);
		const numberOfDeletes = readVarUint(decoder.restDecoder);
		const structs = store.clients.get(client) || [];
		const state = getState(store, client);
		for (let i = 0; i < numberOfDeletes; i++) {
			const clock = decoder.readDsClock();
			const clockEnd = clock + decoder.readDsLen();
			if (clock < state) {
				if (state < clockEnd) addToDeleteSet(unappliedDS, client, state, clockEnd - state);
				let index = findIndexSS(structs, clock);
				/**
				* We can ignore the case of GC and Delete structs, because we are going to skip them
				* @type {Item}
				*/
				let struct = structs[index];
				if (!struct.deleted && struct.id.clock < clock) {
					structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
					index++;
				}
				while (index < structs.length) {
					struct = structs[index++];
					if (struct.id.clock < clockEnd) {
						if (!struct.deleted) {
							if (clockEnd < struct.id.clock + struct.length) structs.splice(index, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
							struct.delete(transaction);
						}
					} else break;
				}
			} else addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
		}
	}
	if (unappliedDS.clients.size > 0) {
		const ds = new UpdateEncoderV2();
		writeVarUint(ds.restEncoder, 0);
		writeDeleteSet(ds, unappliedDS);
		return ds.toUint8Array();
	}
	return null;
};
/**
* @module Y
*/
const generateNewClientId = uint32;
/**
* @typedef {Object} DocOpts
* @property {boolean} [DocOpts.gc=true] Disable garbage collection (default: gc=true)
* @property {function(Item):boolean} [DocOpts.gcFilter] Will be called before an Item is garbage collected. Return false to keep the Item.
* @property {string} [DocOpts.guid] Define a globally unique identifier for this document
* @property {string | null} [DocOpts.collectionid] Associate this document with a collection. This only plays a role if your provider has a concept of collection.
* @property {any} [DocOpts.meta] Any kind of meta information you want to associate with this document. If this is a subdocument, remote peers will store the meta information as well.
* @property {boolean} [DocOpts.autoLoad] If a subdocument, automatically load document. If this is a subdocument, remote peers will load the document as well automatically.
* @property {boolean} [DocOpts.shouldLoad] Whether the document should be synced by the provider now. This is toggled to true when you call ydoc.load()
*/
/**
* @typedef {Object} DocEvents
* @property {function(Doc):void} DocEvents.destroy
* @property {function(Doc):void} DocEvents.load
* @property {function(boolean, Doc):void} DocEvents.sync
* @property {function(Uint8Array, any, Doc, Transaction):void} DocEvents.update
* @property {function(Uint8Array, any, Doc, Transaction):void} DocEvents.updateV2
* @property {function(Doc):void} DocEvents.beforeAllTransactions
* @property {function(Transaction, Doc):void} DocEvents.beforeTransaction
* @property {function(Transaction, Doc):void} DocEvents.beforeObserverCalls
* @property {function(Transaction, Doc):void} DocEvents.afterTransaction
* @property {function(Transaction, Doc):void} DocEvents.afterTransactionCleanup
* @property {function(Doc, Array<Transaction>):void} DocEvents.afterAllTransactions
* @property {function({ loaded: Set<Doc>, added: Set<Doc>, removed: Set<Doc> }, Doc, Transaction):void} DocEvents.subdocs
*/
/**
* A Yjs instance handles the state of shared data.
* @extends ObservableV2<DocEvents>
*/
var Doc = class Doc extends ObservableV2 {
	/**
	* @param {DocOpts} opts configuration
	*/
	constructor({ guid = uuidv4(), collectionid = null, gc = true, gcFilter = () => true, meta = null, autoLoad = false, shouldLoad = true } = {}) {
		super();
		this.gc = gc;
		this.gcFilter = gcFilter;
		this.clientID = generateNewClientId();
		this.guid = guid;
		this.collectionid = collectionid;
		/**
		* @type {Map<string, AbstractType<YEvent<any>>>}
		*/
		this.share = /* @__PURE__ */ new Map();
		this.store = new StructStore();
		/**
		* @type {Transaction | null}
		*/
		this._transaction = null;
		/**
		* @type {Array<Transaction>}
		*/
		this._transactionCleanups = [];
		/**
		* @type {Set<Doc>}
		*/
		this.subdocs = /* @__PURE__ */ new Set();
		/**
		* If this document is a subdocument - a document integrated into another document - then _item is defined.
		* @type {Item?}
		*/
		this._item = null;
		this.shouldLoad = shouldLoad;
		this.autoLoad = autoLoad;
		this.meta = meta;
		/**
		* This is set to true when the persistence provider loaded the document from the database or when the `sync` event fires.
		* Note that not all providers implement this feature. Provider authors are encouraged to fire the `load` event when the doc content is loaded from the database.
		*
		* @type {boolean}
		*/
		this.isLoaded = false;
		/**
		* This is set to true when the connection provider has successfully synced with a backend.
		* Note that when using peer-to-peer providers this event may not provide very useful.
		* Also note that not all providers implement this feature. Provider authors are encouraged to fire
		* the `sync` event when the doc has been synced (with `true` as a parameter) or if connection is
		* lost (with false as a parameter).
		*/
		this.isSynced = false;
		this.isDestroyed = false;
		/**
		* Promise that resolves once the document has been loaded from a persistence provider.
		*/
		this.whenLoaded = create$2((resolve) => {
			this.on("load", () => {
				this.isLoaded = true;
				resolve(this);
			});
		});
		const provideSyncedPromise = () => create$2((resolve) => {
			/**
			* @param {boolean} isSynced
			*/
			const eventHandler = (isSynced) => {
				if (isSynced === void 0 || isSynced === true) {
					this.off("sync", eventHandler);
					resolve();
				}
			};
			this.on("sync", eventHandler);
		});
		this.on("sync", (isSynced) => {
			if (isSynced === false && this.isSynced) this.whenSynced = provideSyncedPromise();
			this.isSynced = isSynced === void 0 || isSynced === true;
			if (this.isSynced && !this.isLoaded) this.emit("load", [this]);
		});
		/**
		* Promise that resolves once the document has been synced with a backend.
		* This promise is recreated when the connection is lost.
		* Note the documentation about the `isSynced` property.
		*/
		this.whenSynced = provideSyncedPromise();
	}
	/**
	* Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
	*
	* `load()` might be used in the future to request any provider to load the most current data.
	*
	* It is safe to call `load()` multiple times.
	*/
	load() {
		const item = this._item;
		if (item !== null && !this.shouldLoad) transact(
			/** @type {any} */
			item.parent.doc,
			(transaction) => {
				transaction.subdocsLoaded.add(this);
			},
			null,
			true
		);
		this.shouldLoad = true;
	}
	getSubdocs() {
		return this.subdocs;
	}
	getSubdocGuids() {
		return new Set(from(this.subdocs).map((doc) => doc.guid));
	}
	/**
	* Changes that happen inside of a transaction are bundled. This means that
	* the observer fires _after_ the transaction is finished and that all changes
	* that happened inside of the transaction are sent as one message to the
	* other peers.
	*
	* @template T
	* @param {function(Transaction):T} f The function that should be executed as a transaction
	* @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
	* @return T
	*
	* @public
	*/
	transact(f, origin = null) {
		return transact(this, f, origin);
	}
	/**
	* Define a shared data type.
	*
	* Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
	* and do not overwrite each other. I.e.
	* `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
	*
	* After this method is called, the type is also available on `ydoc.share.get(name)`.
	*
	* *Best Practices:*
	* Define all types right after the Y.Doc instance is created and store them in a separate object.
	* Also use the typed methods `getText(name)`, `getArray(name)`, ..
	*
	* @template {typeof AbstractType<any>} Type
	* @example
	*   const ydoc = new Y.Doc(..)
	*   const appState = {
	*     document: ydoc.getText('document')
	*     comments: ydoc.getArray('comments')
	*   }
	*
	* @param {string} name
	* @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
	* @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
	*
	* @public
	*/
	get(name, TypeConstructor = AbstractType) {
		const type = setIfUndefined(this.share, name, () => {
			const t = new TypeConstructor();
			t._integrate(this, null);
			return t;
		});
		const Constr = type.constructor;
		if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) if (Constr === AbstractType) {
			const t = new TypeConstructor();
			t._map = type._map;
			type._map.forEach(
				/** @param {Item?} n */
				(n) => {
					for (; n !== null; n = n.left) n.parent = t;
				}
			);
			t._start = type._start;
			for (let n = t._start; n !== null; n = n.right) n.parent = t;
			t._length = type._length;
			this.share.set(name, t);
			t._integrate(this, null);
			return t;
		} else throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
		return type;
	}
	/**
	* @template T
	* @param {string} [name]
	* @return {YArray<T>}
	*
	* @public
	*/
	getArray(name = "") {
		return this.get(name, YArray);
	}
	/**
	* @param {string} [name]
	* @return {YText}
	*
	* @public
	*/
	getText(name = "") {
		return this.get(name, YText);
	}
	/**
	* @template T
	* @param {string} [name]
	* @return {YMap<T>}
	*
	* @public
	*/
	getMap(name = "") {
		return this.get(name, YMap);
	}
	/**
	* @param {string} [name]
	* @return {YXmlElement}
	*
	* @public
	*/
	getXmlElement(name = "") {
		return this.get(name, YXmlElement);
	}
	/**
	* @param {string} [name]
	* @return {YXmlFragment}
	*
	* @public
	*/
	getXmlFragment(name = "") {
		return this.get(name, YXmlFragment);
	}
	/**
	* Converts the entire document into a js object, recursively traversing each yjs type
	* Doesn't log types that have not been defined (using ydoc.getType(..)).
	*
	* @deprecated Do not use this method and rather call toJSON directly on the shared types.
	*
	* @return {Object<string, any>}
	*/
	toJSON() {
		/**
		* @type {Object<string, any>}
		*/
		const doc = {};
		this.share.forEach((value, key) => {
			doc[key] = value.toJSON();
		});
		return doc;
	}
	/**
	* Emit `destroy` event and unregister all event handlers.
	*/
	destroy() {
		this.isDestroyed = true;
		from(this.subdocs).forEach((subdoc) => subdoc.destroy());
		const item = this._item;
		if (item !== null) {
			this._item = null;
			const content = item.content;
			content.doc = new Doc({
				guid: this.guid,
				...content.opts,
				shouldLoad: false
			});
			content.doc._item = item;
			transact(
				/** @type {any} */
				item.parent.doc,
				(transaction) => {
					const doc = content.doc;
					if (!item.deleted) transaction.subdocsAdded.add(doc);
					transaction.subdocsRemoved.add(this);
				},
				null,
				true
			);
		}
		this.emit("destroyed", [true]);
		this.emit("destroy", [this]);
		super.destroy();
	}
};
var DSDecoderV1 = class {
	/**
	* @param {decoding.Decoder} decoder
	*/
	constructor(decoder) {
		this.restDecoder = decoder;
	}
	resetDsCurVal() {}
	/**
	* @return {number}
	*/
	readDsClock() {
		return readVarUint(this.restDecoder);
	}
	/**
	* @return {number}
	*/
	readDsLen() {
		return readVarUint(this.restDecoder);
	}
};
var UpdateDecoderV1 = class extends DSDecoderV1 {
	/**
	* @return {ID}
	*/
	readLeftID() {
		return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
	}
	/**
	* @return {ID}
	*/
	readRightID() {
		return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
	}
	/**
	* Read the next client id.
	* Use this in favor of readID whenever possible to reduce the number of objects created.
	*/
	readClient() {
		return readVarUint(this.restDecoder);
	}
	/**
	* @return {number} info An unsigned 8-bit integer
	*/
	readInfo() {
		return readUint8(this.restDecoder);
	}
	/**
	* @return {string}
	*/
	readString() {
		return readVarString(this.restDecoder);
	}
	/**
	* @return {boolean} isKey
	*/
	readParentInfo() {
		return readVarUint(this.restDecoder) === 1;
	}
	/**
	* @return {number} info An unsigned 8-bit integer
	*/
	readTypeRef() {
		return readVarUint(this.restDecoder);
	}
	/**
	* Write len of a struct - well suited for Opt RLE encoder.
	*
	* @return {number} len
	*/
	readLen() {
		return readVarUint(this.restDecoder);
	}
	/**
	* @return {any}
	*/
	readAny() {
		return readAny(this.restDecoder);
	}
	/**
	* @return {Uint8Array}
	*/
	readBuf() {
		return copyUint8Array(readVarUint8Array(this.restDecoder));
	}
	/**
	* Legacy implementation uses JSON parse. We use any-decoding in v2.
	*
	* @return {any}
	*/
	readJSON() {
		return JSON.parse(readVarString(this.restDecoder));
	}
	/**
	* @return {string}
	*/
	readKey() {
		return readVarString(this.restDecoder);
	}
};
var DSDecoderV2 = class {
	/**
	* @param {decoding.Decoder} decoder
	*/
	constructor(decoder) {
		/**
		* @private
		*/
		this.dsCurrVal = 0;
		this.restDecoder = decoder;
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	/**
	* @return {number}
	*/
	readDsClock() {
		this.dsCurrVal += readVarUint(this.restDecoder);
		return this.dsCurrVal;
	}
	/**
	* @return {number}
	*/
	readDsLen() {
		const diff = readVarUint(this.restDecoder) + 1;
		this.dsCurrVal += diff;
		return diff;
	}
};
var UpdateDecoderV2 = class extends DSDecoderV2 {
	/**
	* @param {decoding.Decoder} decoder
	*/
	constructor(decoder) {
		super(decoder);
		/**
		* List of cached keys. If the keys[id] does not exist, we read a new key
		* from stringEncoder and push it to keys.
		*
		* @type {Array<string>}
		*/
		this.keys = [];
		readVarUint(decoder);
		this.keyClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
		this.clientDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
		this.leftClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
		this.rightClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
		this.infoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
		this.stringDecoder = new StringDecoder(readVarUint8Array(decoder));
		this.parentInfoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
		this.typeRefDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
		this.lenDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
	}
	/**
	* @return {ID}
	*/
	readLeftID() {
		return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
	}
	/**
	* @return {ID}
	*/
	readRightID() {
		return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
	}
	/**
	* Read the next client id.
	* Use this in favor of readID whenever possible to reduce the number of objects created.
	*/
	readClient() {
		return this.clientDecoder.read();
	}
	/**
	* @return {number} info An unsigned 8-bit integer
	*/
	readInfo() {
		return this.infoDecoder.read();
	}
	/**
	* @return {string}
	*/
	readString() {
		return this.stringDecoder.read();
	}
	/**
	* @return {boolean}
	*/
	readParentInfo() {
		return this.parentInfoDecoder.read() === 1;
	}
	/**
	* @return {number} An unsigned 8-bit integer
	*/
	readTypeRef() {
		return this.typeRefDecoder.read();
	}
	/**
	* Write len of a struct - well suited for Opt RLE encoder.
	*
	* @return {number}
	*/
	readLen() {
		return this.lenDecoder.read();
	}
	/**
	* @return {any}
	*/
	readAny() {
		return readAny(this.restDecoder);
	}
	/**
	* @return {Uint8Array}
	*/
	readBuf() {
		return readVarUint8Array(this.restDecoder);
	}
	/**
	* This is mainly here for legacy purposes.
	*
	* Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
	*
	* @return {any}
	*/
	readJSON() {
		return readAny(this.restDecoder);
	}
	/**
	* @return {string}
	*/
	readKey() {
		const keyClock = this.keyClockDecoder.read();
		if (keyClock < this.keys.length) return this.keys[keyClock];
		else {
			const key = this.stringDecoder.read();
			this.keys.push(key);
			return key;
		}
	}
};
var DSEncoderV1 = class {
	constructor() {
		this.restEncoder = createEncoder();
	}
	toUint8Array() {
		return toUint8Array(this.restEncoder);
	}
	resetDsCurVal() {}
	/**
	* @param {number} clock
	*/
	writeDsClock(clock) {
		writeVarUint(this.restEncoder, clock);
	}
	/**
	* @param {number} len
	*/
	writeDsLen(len) {
		writeVarUint(this.restEncoder, len);
	}
};
var UpdateEncoderV1 = class extends DSEncoderV1 {
	/**
	* @param {ID} id
	*/
	writeLeftID(id) {
		writeVarUint(this.restEncoder, id.client);
		writeVarUint(this.restEncoder, id.clock);
	}
	/**
	* @param {ID} id
	*/
	writeRightID(id) {
		writeVarUint(this.restEncoder, id.client);
		writeVarUint(this.restEncoder, id.clock);
	}
	/**
	* Use writeClient and writeClock instead of writeID if possible.
	* @param {number} client
	*/
	writeClient(client) {
		writeVarUint(this.restEncoder, client);
	}
	/**
	* @param {number} info An unsigned 8-bit integer
	*/
	writeInfo(info) {
		writeUint8(this.restEncoder, info);
	}
	/**
	* @param {string} s
	*/
	writeString(s) {
		writeVarString(this.restEncoder, s);
	}
	/**
	* @param {boolean} isYKey
	*/
	writeParentInfo(isYKey) {
		writeVarUint(this.restEncoder, isYKey ? 1 : 0);
	}
	/**
	* @param {number} info An unsigned 8-bit integer
	*/
	writeTypeRef(info) {
		writeVarUint(this.restEncoder, info);
	}
	/**
	* Write len of a struct - well suited for Opt RLE encoder.
	*
	* @param {number} len
	*/
	writeLen(len) {
		writeVarUint(this.restEncoder, len);
	}
	/**
	* @param {any} any
	*/
	writeAny(any) {
		writeAny(this.restEncoder, any);
	}
	/**
	* @param {Uint8Array} buf
	*/
	writeBuf(buf) {
		writeVarUint8Array(this.restEncoder, buf);
	}
	/**
	* @param {any} embed
	*/
	writeJSON(embed) {
		writeVarString(this.restEncoder, JSON.stringify(embed));
	}
	/**
	* @param {string} key
	*/
	writeKey(key) {
		writeVarString(this.restEncoder, key);
	}
};
var DSEncoderV2 = class {
	constructor() {
		this.restEncoder = createEncoder();
		this.dsCurrVal = 0;
	}
	toUint8Array() {
		return toUint8Array(this.restEncoder);
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	/**
	* @param {number} clock
	*/
	writeDsClock(clock) {
		const diff = clock - this.dsCurrVal;
		this.dsCurrVal = clock;
		writeVarUint(this.restEncoder, diff);
	}
	/**
	* @param {number} len
	*/
	writeDsLen(len) {
		if (len === 0) unexpectedCase();
		writeVarUint(this.restEncoder, len - 1);
		this.dsCurrVal += len;
	}
};
var UpdateEncoderV2 = class extends DSEncoderV2 {
	constructor() {
		super();
		/**
		* @type {Map<string,number>}
		*/
		this.keyMap = /* @__PURE__ */ new Map();
		/**
		* Refers to the next unique key-identifier to me used.
		* See writeKey method for more information.
		*
		* @type {number}
		*/
		this.keyClock = 0;
		this.keyClockEncoder = new IntDiffOptRleEncoder();
		this.clientEncoder = new UintOptRleEncoder();
		this.leftClockEncoder = new IntDiffOptRleEncoder();
		this.rightClockEncoder = new IntDiffOptRleEncoder();
		this.infoEncoder = new RleEncoder(writeUint8);
		this.stringEncoder = new StringEncoder();
		this.parentInfoEncoder = new RleEncoder(writeUint8);
		this.typeRefEncoder = new UintOptRleEncoder();
		this.lenEncoder = new UintOptRleEncoder();
	}
	toUint8Array() {
		const encoder = createEncoder();
		writeVarUint(encoder, 0);
		writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
		writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
		writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
		writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
		writeVarUint8Array(encoder, toUint8Array(this.infoEncoder));
		writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
		writeVarUint8Array(encoder, toUint8Array(this.parentInfoEncoder));
		writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
		writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
		writeUint8Array(encoder, toUint8Array(this.restEncoder));
		return toUint8Array(encoder);
	}
	/**
	* @param {ID} id
	*/
	writeLeftID(id) {
		this.clientEncoder.write(id.client);
		this.leftClockEncoder.write(id.clock);
	}
	/**
	* @param {ID} id
	*/
	writeRightID(id) {
		this.clientEncoder.write(id.client);
		this.rightClockEncoder.write(id.clock);
	}
	/**
	* @param {number} client
	*/
	writeClient(client) {
		this.clientEncoder.write(client);
	}
	/**
	* @param {number} info An unsigned 8-bit integer
	*/
	writeInfo(info) {
		this.infoEncoder.write(info);
	}
	/**
	* @param {string} s
	*/
	writeString(s) {
		this.stringEncoder.write(s);
	}
	/**
	* @param {boolean} isYKey
	*/
	writeParentInfo(isYKey) {
		this.parentInfoEncoder.write(isYKey ? 1 : 0);
	}
	/**
	* @param {number} info An unsigned 8-bit integer
	*/
	writeTypeRef(info) {
		this.typeRefEncoder.write(info);
	}
	/**
	* Write len of a struct - well suited for Opt RLE encoder.
	*
	* @param {number} len
	*/
	writeLen(len) {
		this.lenEncoder.write(len);
	}
	/**
	* @param {any} any
	*/
	writeAny(any) {
		writeAny(this.restEncoder, any);
	}
	/**
	* @param {Uint8Array} buf
	*/
	writeBuf(buf) {
		writeVarUint8Array(this.restEncoder, buf);
	}
	/**
	* This is mainly here for legacy purposes.
	*
	* Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
	*
	* @param {any} embed
	*/
	writeJSON(embed) {
		writeAny(this.restEncoder, embed);
	}
	/**
	* Property keys are often reused. For example, in y-prosemirror the key `bold` might
	* occur very often. For a 3d application, the key `position` might occur very often.
	*
	* We cache these keys in a Map and refer to them via a unique number.
	*
	* @param {string} key
	*/
	writeKey(key) {
		const clock = this.keyMap.get(key);
		if (clock === void 0) {
			/**
			* @todo uncomment to introduce this feature finally
			*
			* Background. The ContentFormat object was always encoded using writeKey, but the decoder used to use readString.
			* Furthermore, I forgot to set the keyclock. So everything was working fine.
			*
			* However, this feature here is basically useless as it is not being used (it actually only consumes extra memory).
			*
			* I don't know yet how to reintroduce this feature..
			*
			* Older clients won't be able to read updates when we reintroduce this feature. So this should probably be done using a flag.
			*
			*/
			this.keyClockEncoder.write(this.keyClock++);
			this.stringEncoder.write(key);
		} else this.keyClockEncoder.write(clock);
	}
};
/**
* @module encoding
*/
/**
* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
* @param {Array<GC|Item>} structs All structs by `client`
* @param {number} client
* @param {number} clock write structs starting with `ID(client,clock)`
*
* @function
*/
const writeStructs = (encoder, structs, client, clock) => {
	clock = max(clock, structs[0].id.clock);
	const startNewStructs = findIndexSS(structs, clock);
	writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
	encoder.writeClient(client);
	writeVarUint(encoder.restEncoder, clock);
	const firstStruct = structs[startNewStructs];
	firstStruct.write(encoder, clock - firstStruct.id.clock);
	for (let i = startNewStructs + 1; i < structs.length; i++) structs[i].write(encoder, 0);
};
/**
* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
* @param {StructStore} store
* @param {Map<number,number>} _sm
*
* @private
* @function
*/
const writeClientsStructs = (encoder, store, _sm) => {
	const sm = /* @__PURE__ */ new Map();
	_sm.forEach((clock, client) => {
		if (getState(store, client) > clock) sm.set(client, clock);
	});
	getStateVector(store).forEach((_clock, client) => {
		if (!_sm.has(client)) sm.set(client, 0);
	});
	writeVarUint(encoder.restEncoder, sm.size);
	from(sm.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
		writeStructs(encoder, store.clients.get(client), client, clock);
	});
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder The decoder object to read data from.
* @param {Doc} doc
* @return {Map<number, { i: number, refs: Array<Item | GC> }>}
*
* @private
* @function
*/
const readClientsStructRefs = (decoder, doc) => {
	/**
	* @type {Map<number, { i: number, refs: Array<Item | GC> }>}
	*/
	const clientRefs = create$5();
	const numOfStateUpdates = readVarUint(decoder.restDecoder);
	for (let i = 0; i < numOfStateUpdates; i++) {
		const numberOfStructs = readVarUint(decoder.restDecoder);
		/**
		* @type {Array<GC|Item>}
		*/
		const refs = new Array(numberOfStructs);
		const client = decoder.readClient();
		let clock = readVarUint(decoder.restDecoder);
		clientRefs.set(client, {
			i: 0,
			refs
		});
		for (let i = 0; i < numberOfStructs; i++) {
			const info = decoder.readInfo();
			switch (31 & info) {
				case 0: {
					const len = decoder.readLen();
					refs[i] = new GC(createID(client, clock), len);
					clock += len;
					break;
				}
				case 10: {
					const len = readVarUint(decoder.restDecoder);
					refs[i] = new Skip(createID(client, clock), len);
					clock += len;
					break;
				}
				default: {
					/**
					* The optimized implementation doesn't use any variables because inlining variables is faster.
					* Below a non-optimized version is shown that implements the basic algorithm with
					* a few comments
					*/
					const cantCopyParentInfo = (info & 192) === 0;
					const struct = new Item(createID(client, clock), null, (info & 128) === 128 ? decoder.readLeftID() : null, null, (info & 64) === 64 ? decoder.readRightID() : null, cantCopyParentInfo ? decoder.readParentInfo() ? doc.get(decoder.readString()) : decoder.readLeftID() : null, cantCopyParentInfo && (info & 32) === 32 ? decoder.readString() : null, readItemContent(decoder, info));
					refs[i] = struct;
					clock += struct.length;
				}
			}
		}
	}
	return clientRefs;
};
/**
* Resume computing structs generated by struct readers.
*
* While there is something to do, we integrate structs in this order
* 1. top element on stack, if stack is not empty
* 2. next element from current struct reader (if empty, use next struct reader)
*
* If struct causally depends on another struct (ref.missing), we put next reader of
* `ref.id.client` on top of stack.
*
* At some point we find a struct that has no causal dependencies,
* then we start emptying the stack.
*
* It is not possible to have circles: i.e. struct1 (from client1) depends on struct2 (from client2)
* depends on struct3 (from client1). Therefore the max stack size is equal to `structReaders.length`.
*
* This method is implemented in a way so that we can resume computation if this update
* causally depends on another update.
*
* @param {Transaction} transaction
* @param {StructStore} store
* @param {Map<number, { i: number, refs: (GC | Item)[] }>} clientsStructRefs
* @return { null | { update: Uint8Array, missing: Map<number,number> } }
*
* @private
* @function
*/
const integrateStructs = (transaction, store, clientsStructRefs) => {
	/**
	* @type {Array<Item | GC>}
	*/
	const stack = [];
	let clientsStructRefsIds = from(clientsStructRefs.keys()).sort((a, b) => a - b);
	if (clientsStructRefsIds.length === 0) return null;
	const getNextStructTarget = () => {
		if (clientsStructRefsIds.length === 0) return null;
		let nextStructsTarget = clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
		while (nextStructsTarget.refs.length === nextStructsTarget.i) {
			clientsStructRefsIds.pop();
			if (clientsStructRefsIds.length > 0) nextStructsTarget = clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
			else return null;
		}
		return nextStructsTarget;
	};
	let curStructsTarget = getNextStructTarget();
	if (curStructsTarget === null) return null;
	/**
	* @type {StructStore}
	*/
	const restStructs = new StructStore();
	const missingSV = /* @__PURE__ */ new Map();
	/**
	* @param {number} client
	* @param {number} clock
	*/
	const updateMissingSv = (client, clock) => {
		const mclock = missingSV.get(client);
		if (mclock == null || mclock > clock) missingSV.set(client, clock);
	};
	/**
	* @type {GC|Item}
	*/
	let stackHead = curStructsTarget.refs[curStructsTarget.i++];
	const state = /* @__PURE__ */ new Map();
	const addStackToRestSS = () => {
		for (const item of stack) {
			const client = item.id.client;
			const inapplicableItems = clientsStructRefs.get(client);
			if (inapplicableItems) {
				inapplicableItems.i--;
				restStructs.clients.set(client, inapplicableItems.refs.slice(inapplicableItems.i));
				clientsStructRefs.delete(client);
				inapplicableItems.i = 0;
				inapplicableItems.refs = [];
			} else restStructs.clients.set(client, [item]);
			clientsStructRefsIds = clientsStructRefsIds.filter((c) => c !== client);
		}
		stack.length = 0;
	};
	while (true) {
		if (stackHead.constructor !== Skip) {
			const offset = setIfUndefined(state, stackHead.id.client, () => getState(store, stackHead.id.client)) - stackHead.id.clock;
			if (offset < 0) {
				stack.push(stackHead);
				updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
				addStackToRestSS();
			} else {
				const missing = stackHead.getMissing(transaction, store);
				if (missing !== null) {
					stack.push(stackHead);
					/**
					* @type {{ refs: Array<GC|Item>, i: number }}
					*/
					const structRefs = clientsStructRefs.get(missing) || {
						refs: [],
						i: 0
					};
					if (structRefs.refs.length === structRefs.i) {
						updateMissingSv(missing, getState(store, missing));
						addStackToRestSS();
					} else {
						stackHead = structRefs.refs[structRefs.i++];
						continue;
					}
				} else if (offset === 0 || offset < stackHead.length) {
					stackHead.integrate(transaction, offset);
					state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
				}
			}
		}
		if (stack.length > 0) stackHead = stack.pop();
		else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) stackHead = curStructsTarget.refs[curStructsTarget.i++];
		else {
			curStructsTarget = getNextStructTarget();
			if (curStructsTarget === null) break;
			else stackHead = curStructsTarget.refs[curStructsTarget.i++];
		}
	}
	if (restStructs.clients.size > 0) {
		const encoder = new UpdateEncoderV2();
		writeClientsStructs(encoder, restStructs, /* @__PURE__ */ new Map());
		writeVarUint(encoder.restEncoder, 0);
		return {
			missing: missingSV,
			update: encoder.toUint8Array()
		};
	}
	return null;
};
/**
* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
* @param {Transaction} transaction
*
* @private
* @function
*/
const writeStructsFromTransaction = (encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
/**
* Read and apply a document update.
*
* This function has the same effect as `applyUpdate` but accepts a decoder.
*
* @param {decoding.Decoder} decoder
* @param {Doc} ydoc
* @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
* @param {UpdateDecoderV1 | UpdateDecoderV2} [structDecoder]
*
* @function
*/
const readUpdateV2 = (decoder, ydoc, transactionOrigin, structDecoder = new UpdateDecoderV2(decoder)) => transact(ydoc, (transaction) => {
	transaction.local = false;
	let retry = false;
	const doc = transaction.doc;
	const store = doc.store;
	const ss = readClientsStructRefs(structDecoder, doc);
	const restStructs = integrateStructs(transaction, store, ss);
	const pending = store.pendingStructs;
	if (pending) {
		for (const [client, clock] of pending.missing) if (clock < getState(store, client)) {
			retry = true;
			break;
		}
		if (restStructs) {
			for (const [client, clock] of restStructs.missing) {
				const mclock = pending.missing.get(client);
				if (mclock == null || mclock > clock) pending.missing.set(client, clock);
			}
			pending.update = mergeUpdatesV2([pending.update, restStructs.update]);
		}
	} else store.pendingStructs = restStructs;
	const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store);
	if (store.pendingDs) {
		const pendingDSUpdate = new UpdateDecoderV2(createDecoder(store.pendingDs));
		readVarUint(pendingDSUpdate.restDecoder);
		const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store);
		if (dsRest && dsRest2) store.pendingDs = mergeUpdatesV2([dsRest, dsRest2]);
		else store.pendingDs = dsRest || dsRest2;
	} else store.pendingDs = dsRest;
	if (retry) {
		const update = store.pendingStructs.update;
		store.pendingStructs = null;
		applyUpdateV2(transaction.doc, update);
	}
}, transactionOrigin, false);
/**
* Apply a document update created by, for example, `y.on('update', update => ..)` or `update = encodeStateAsUpdate()`.
*
* This function has the same effect as `readUpdate` but accepts an Uint8Array instead of a Decoder.
*
* @param {Doc} ydoc
* @param {Uint8Array} update
* @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
* @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} [YDecoder]
*
* @function
*/
const applyUpdateV2 = (ydoc, update, transactionOrigin, YDecoder = UpdateDecoderV2) => {
	const decoder = createDecoder(update);
	readUpdateV2(decoder, ydoc, transactionOrigin, new YDecoder(decoder));
};
/**
* Apply a document update created by, for example, `y.on('update', update => ..)` or `update = encodeStateAsUpdate()`.
*
* This function has the same effect as `readUpdate` but accepts an Uint8Array instead of a Decoder.
*
* @param {Doc} ydoc
* @param {Uint8Array} update
* @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
*
* @function
*/
const applyUpdate = (ydoc, update, transactionOrigin) => applyUpdateV2(ydoc, update, transactionOrigin, UpdateDecoderV1);
/**
* Write all the document as a single update message. If you specify the state of the remote client (`targetStateVector`) it will
* only write the operations that are missing.
*
* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
* @param {Doc} doc
* @param {Map<number,number>} [targetStateVector] The state of the target that receives the update. Leave empty to write all known structs
*
* @function
*/
const writeStateAsUpdate = (encoder, doc, targetStateVector = /* @__PURE__ */ new Map()) => {
	writeClientsStructs(encoder, doc.store, targetStateVector);
	writeDeleteSet(encoder, createDeleteSetFromStructStore(doc.store));
};
/**
* Write all the document as a single update message that can be applied on the remote document. If you specify the state of the remote client (`targetState`) it will
* only write the operations that are missing.
*
* Use `writeStateAsUpdate` instead if you are working with lib0/encoding.js#Encoder
*
* @param {Doc} doc
* @param {Uint8Array} [encodedTargetStateVector] The state of the target that receives the update. Leave empty to write all known structs
* @param {UpdateEncoderV1 | UpdateEncoderV2} [encoder]
* @return {Uint8Array}
*
* @function
*/
const encodeStateAsUpdateV2 = (doc, encodedTargetStateVector = new Uint8Array([0]), encoder = new UpdateEncoderV2()) => {
	const targetStateVector = decodeStateVector(encodedTargetStateVector);
	writeStateAsUpdate(encoder, doc, targetStateVector);
	const updates = [encoder.toUint8Array()];
	if (doc.store.pendingDs) updates.push(doc.store.pendingDs);
	if (doc.store.pendingStructs) updates.push(diffUpdateV2(doc.store.pendingStructs.update, encodedTargetStateVector));
	if (updates.length > 1) {
		if (encoder.constructor === UpdateEncoderV1) return mergeUpdates(updates.map((update, i) => i === 0 ? update : convertUpdateFormatV2ToV1(update)));
		else if (encoder.constructor === UpdateEncoderV2) return mergeUpdatesV2(updates);
	}
	return updates[0];
};
/**
* Write all the document as a single update message that can be applied on the remote document. If you specify the state of the remote client (`targetState`) it will
* only write the operations that are missing.
*
* Use `writeStateAsUpdate` instead if you are working with lib0/encoding.js#Encoder
*
* @param {Doc} doc
* @param {Uint8Array} [encodedTargetStateVector] The state of the target that receives the update. Leave empty to write all known structs
* @return {Uint8Array}
*
* @function
*/
const encodeStateAsUpdate = (doc, encodedTargetStateVector) => encodeStateAsUpdateV2(doc, encodedTargetStateVector, new UpdateEncoderV1());
/**
* Read state vector from Decoder and return as Map
*
* @param {DSDecoderV1 | DSDecoderV2} decoder
* @return {Map<number,number>} Maps `client` to the number next expected `clock` from that client.
*
* @function
*/
const readStateVector = (decoder) => {
	const ss = /* @__PURE__ */ new Map();
	const ssLength = readVarUint(decoder.restDecoder);
	for (let i = 0; i < ssLength; i++) {
		const client = readVarUint(decoder.restDecoder);
		const clock = readVarUint(decoder.restDecoder);
		ss.set(client, clock);
	}
	return ss;
};
/**
* Read decodedState and return State as Map.
*
* @param {Uint8Array} decodedState
* @return {Map<number,number>} Maps `client` to the number next expected `clock` from that client.
*
* @function
*/
/**
* Read decodedState and return State as Map.
*
* @param {Uint8Array} decodedState
* @return {Map<number,number>} Maps `client` to the number next expected `clock` from that client.
*
* @function
*/
const decodeStateVector = (decodedState) => readStateVector(new DSDecoderV1(createDecoder(decodedState)));
/**
* @param {DSEncoderV1 | DSEncoderV2} encoder
* @param {Map<number,number>} sv
* @function
*/
const writeStateVector = (encoder, sv) => {
	writeVarUint(encoder.restEncoder, sv.size);
	from(sv.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
		writeVarUint(encoder.restEncoder, client);
		writeVarUint(encoder.restEncoder, clock);
	});
	return encoder;
};
/**
* @param {DSEncoderV1 | DSEncoderV2} encoder
* @param {Doc} doc
*
* @function
*/
const writeDocumentStateVector = (encoder, doc) => writeStateVector(encoder, getStateVector(doc.store));
/**
* Encode State as Uint8Array.
*
* @param {Doc|Map<number,number>} doc
* @param {DSEncoderV1 | DSEncoderV2} [encoder]
* @return {Uint8Array}
*
* @function
*/
const encodeStateVectorV2 = (doc, encoder = new DSEncoderV2()) => {
	if (doc instanceof Map) writeStateVector(encoder, doc);
	else writeDocumentStateVector(encoder, doc);
	return encoder.toUint8Array();
};
/**
* Encode State as Uint8Array.
*
* @param {Doc|Map<number,number>} doc
* @return {Uint8Array}
*
* @function
*/
const encodeStateVector = (doc) => encodeStateVectorV2(doc, new DSEncoderV1());
/**
* General event handler implementation.
*
* @template ARG0, ARG1
*
* @private
*/
var EventHandler = class {
	constructor() {
		/**
		* @type {Array<function(ARG0, ARG1):void>}
		*/
		this.l = [];
	}
};
/**
* @template ARG0,ARG1
* @returns {EventHandler<ARG0,ARG1>}
*
* @private
* @function
*/
const createEventHandler = () => new EventHandler();
/**
* Adds an event listener that is called when
* {@link EventHandler#callEventListeners} is called.
*
* @template ARG0,ARG1
* @param {EventHandler<ARG0,ARG1>} eventHandler
* @param {function(ARG0,ARG1):void} f The event handler.
*
* @private
* @function
*/
const addEventHandlerListener = (eventHandler, f) => eventHandler.l.push(f);
/**
* Removes an event listener.
*
* @template ARG0,ARG1
* @param {EventHandler<ARG0,ARG1>} eventHandler
* @param {function(ARG0,ARG1):void} f The event handler that was added with
*                     {@link EventHandler#addEventListener}
*
* @private
* @function
*/
const removeEventHandlerListener = (eventHandler, f) => {
	const l = eventHandler.l;
	const len = l.length;
	eventHandler.l = l.filter((g) => f !== g);
	if (len === eventHandler.l.length) console.error("[yjs] Tried to remove event handler that doesn't exist.");
};
/**
* Call all event listeners that were added via
* {@link EventHandler#addEventListener}.
*
* @template ARG0,ARG1
* @param {EventHandler<ARG0,ARG1>} eventHandler
* @param {ARG0} arg0
* @param {ARG1} arg1
*
* @private
* @function
*/
const callEventHandlerListeners = (eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]);
var ID = class {
	/**
	* @param {number} client client id
	* @param {number} clock unique per client id, continuous number
	*/
	constructor(client, clock) {
		/**
		* Client id
		* @type {number}
		*/
		this.client = client;
		/**
		* unique per client id, continuous number
		* @type {number}
		*/
		this.clock = clock;
	}
};
/**
* @param {ID | null} a
* @param {ID | null} b
* @return {boolean}
*
* @function
*/
const compareIDs = (a, b) => a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock;
/**
* @param {number} client
* @param {number} clock
*
* @private
* @function
*/
const createID = (client, clock) => new ID(client, clock);
/**
* The top types are mapped from y.share.get(keyname) => type.
* `type` does not store any information about the `keyname`.
* This function finds the correct `keyname` for `type` and throws otherwise.
*
* @param {AbstractType<any>} type
* @return {string}
*
* @private
* @function
*/
const findRootTypeKey = (type) => {
	for (const [key, value] of type.doc.share.entries()) if (value === type) return key;
	throw unexpectedCase();
};
/**
* Check if `parent` is a parent of `child`.
*
* @param {AbstractType<any>} parent
* @param {Item|null} child
* @return {Boolean} Whether `parent` is a parent of `child`.
*
* @private
* @function
*/
const isParentOf = (parent, child) => {
	while (child !== null) {
		if (child.parent === parent) return true;
		child = child.parent._item;
	}
	return false;
};
var PermanentUserData = class {
	/**
	* @param {Doc} doc
	* @param {YMap<any>} [storeType]
	*/
	constructor(doc, storeType = doc.getMap("users")) {
		/**
		* @type {Map<string,DeleteSet>}
		*/
		const dss = /* @__PURE__ */ new Map();
		this.yusers = storeType;
		this.doc = doc;
		/**
		* Maps from clientid to userDescription
		*
		* @type {Map<number,string>}
		*/
		this.clients = /* @__PURE__ */ new Map();
		this.dss = dss;
		/**
		* @param {YMap<any>} user
		* @param {string} userDescription
		*/
		const initUser = (user, userDescription) => {
			/**
			* @type {YArray<Uint8Array>}
			*/
			const ds = user.get("ds");
			const ids = user.get("ids");
			const addClientId = (clientid) => this.clients.set(clientid, userDescription);
			ds.observe(
				/** @param {YArrayEvent<any>} event */
				(event) => {
					event.changes.added.forEach((item) => {
						item.content.getContent().forEach((encodedDs) => {
							if (encodedDs instanceof Uint8Array) this.dss.set(userDescription, mergeDeleteSets([this.dss.get(userDescription) || createDeleteSet(), readDeleteSet(new DSDecoderV1(createDecoder(encodedDs)))]));
						});
					});
				}
			);
			this.dss.set(userDescription, mergeDeleteSets(ds.map((encodedDs) => readDeleteSet(new DSDecoderV1(createDecoder(encodedDs))))));
			ids.observe(
				/** @param {YArrayEvent<any>} event */
				(event) => event.changes.added.forEach((item) => item.content.getContent().forEach(addClientId))
			);
			ids.forEach(addClientId);
		};
		storeType.observe((event) => {
			event.keysChanged.forEach((userDescription) => initUser(storeType.get(userDescription), userDescription));
		});
		storeType.forEach(initUser);
	}
	/**
	* @param {Doc} doc
	* @param {number} clientid
	* @param {string} userDescription
	* @param {Object} conf
	* @param {function(Transaction, DeleteSet):boolean} [conf.filter]
	*/
	setUserMapping(doc, clientid, userDescription, { filter = () => true } = {}) {
		const users = this.yusers;
		let user = users.get(userDescription);
		if (!user) {
			user = new YMap();
			user.set("ids", new YArray());
			user.set("ds", new YArray());
			users.set(userDescription, user);
		}
		user.get("ids").push([clientid]);
		users.observe((_event) => {
			setTimeout(() => {
				const userOverwrite = users.get(userDescription);
				if (userOverwrite !== user) {
					user = userOverwrite;
					this.clients.forEach((_userDescription, clientid) => {
						if (userDescription === _userDescription) user.get("ids").push([clientid]);
					});
					const encoder = new DSEncoderV1();
					const ds = this.dss.get(userDescription);
					if (ds) {
						writeDeleteSet(encoder, ds);
						user.get("ds").push([encoder.toUint8Array()]);
					}
				}
			}, 0);
		});
		doc.on(
			"afterTransaction",
			/** @param {Transaction} transaction */
			(transaction) => {
				setTimeout(() => {
					const yds = user.get("ds");
					const ds = transaction.deleteSet;
					if (transaction.local && ds.clients.size > 0 && filter(transaction, ds)) {
						const encoder = new DSEncoderV1();
						writeDeleteSet(encoder, ds);
						yds.push([encoder.toUint8Array()]);
					}
				});
			}
		);
	}
	/**
	* @param {number} clientid
	* @return {any}
	*/
	getUserByClientId(clientid) {
		return this.clients.get(clientid) || null;
	}
	/**
	* @param {ID} id
	* @return {string | null}
	*/
	getUserByDeletedId(id) {
		for (const [userDescription, ds] of this.dss.entries()) if (isDeleted(ds, id)) return userDescription;
		return null;
	}
};
/**
* A relative position is based on the Yjs model and is not affected by document changes.
* E.g. If you place a relative position before a certain character, it will always point to this character.
* If you place a relative position at the end of a type, it will always point to the end of the type.
*
* A numeric position is often unsuited for user selections, because it does not change when content is inserted
* before or after.
*
* ```Insert(0, 'x')('a|bc') = 'xa|bc'``` Where | is the relative position.
*
* One of the properties must be defined.
*
* @example
*   // Current cursor position is at position 10
*   const relativePosition = createRelativePositionFromIndex(yText, 10)
*   // modify yText
*   yText.insert(0, 'abc')
*   yText.delete(3, 10)
*   // Compute the cursor position
*   const absolutePosition = createAbsolutePositionFromRelativePosition(y, relativePosition)
*   absolutePosition.type === yText // => true
*   console.log('cursor location is ' + absolutePosition.index) // => cursor location is 3
*
*/
var RelativePosition = class {
	/**
	* @param {ID|null} type
	* @param {string|null} tname
	* @param {ID|null} item
	* @param {number} assoc
	*/
	constructor(type, tname, item, assoc = 0) {
		/**
		* @type {ID|null}
		*/
		this.type = type;
		/**
		* @type {string|null}
		*/
		this.tname = tname;
		/**
		* @type {ID | null}
		*/
		this.item = item;
		/**
		* A relative position is associated to a specific character. By default
		* assoc >= 0, the relative position is associated to the character
		* after the meant position.
		* I.e. position 1 in 'ab' is associated to character 'b'.
		*
		* If assoc < 0, then the relative position is associated to the character
		* before the meant position.
		*
		* @type {number}
		*/
		this.assoc = assoc;
	}
};
var AbsolutePosition = class {
	/**
	* @param {AbstractType<any>} type
	* @param {number} index
	* @param {number} [assoc]
	*/
	constructor(type, index, assoc = 0) {
		/**
		* @type {AbstractType<any>}
		*/
		this.type = type;
		/**
		* @type {number}
		*/
		this.index = index;
		this.assoc = assoc;
	}
};
/**
* @param {AbstractType<any>} type
* @param {number} index
* @param {number} [assoc]
*
* @function
*/
const createAbsolutePosition$1 = (type, index, assoc = 0) => new AbsolutePosition(type, index, assoc);
/**
* @param {AbstractType<any>} type
* @param {ID|null} item
* @param {number} [assoc]
*
* @function
*/
const createRelativePosition$1 = (type, item, assoc) => {
	let typeid = null;
	let tname = null;
	if (type._item === null) tname = findRootTypeKey(type);
	else typeid = createID(type._item.id.client, type._item.id.clock);
	return new RelativePosition(typeid, tname, item, assoc);
};
/**
* Create a relativePosition based on a absolute position.
*
* @param {AbstractType<any>} type The base type (e.g. YText or YArray).
* @param {number} index The absolute position.
* @param {number} [assoc]
* @return {RelativePosition}
*
* @function
*/
const createRelativePositionFromTypeIndex = (type, index, assoc = 0) => {
	let t = type._start;
	if (assoc < 0) {
		if (index === 0) return createRelativePosition$1(type, null, assoc);
		index--;
	}
	while (t !== null) {
		if (!t.deleted && t.countable) {
			if (t.length > index) return createRelativePosition$1(type, createID(t.id.client, t.id.clock + index), assoc);
			index -= t.length;
		}
		if (t.right === null && assoc < 0) return createRelativePosition$1(type, t.lastId, assoc);
		t = t.right;
	}
	return createRelativePosition$1(type, null, assoc);
};
/**
* @param {StructStore} store
* @param {ID} id
*/
const getItemWithOffset = (store, id) => {
	const item = getItem(store, id);
	return {
		item,
		diff: id.clock - item.id.clock
	};
};
/**
* Transform a relative position to an absolute position.
*
* If you want to share the relative position with other users, you should set
* `followUndoneDeletions` to false to get consistent results across all clients.
*
* When calculating the absolute position, we try to follow the "undone deletions". This yields
* better results for the user who performed undo. However, only the user who performed the undo
* will get the better results, the other users don't know which operations recreated a deleted
* range of content. There is more information in this ticket: https://github.com/yjs/yjs/issues/638
*
* @param {RelativePosition} rpos
* @param {Doc} doc
* @param {boolean} followUndoneDeletions - whether to follow undone deletions - see https://github.com/yjs/yjs/issues/638
* @return {AbsolutePosition|null}
*
* @function
*/
const createAbsolutePositionFromRelativePosition = (rpos, doc, followUndoneDeletions = true) => {
	const store = doc.store;
	const rightID = rpos.item;
	const typeID = rpos.type;
	const tname = rpos.tname;
	const assoc = rpos.assoc;
	let type = null;
	let index = 0;
	if (rightID !== null) {
		if (getState(store, rightID.client) <= rightID.clock) return null;
		const res = followUndoneDeletions ? followRedone(store, rightID) : getItemWithOffset(store, rightID);
		const right = res.item;
		if (!(right instanceof Item)) return null;
		type = right.parent;
		if (type._item === null || !type._item.deleted) {
			index = right.deleted || !right.countable ? 0 : res.diff + (assoc >= 0 ? 0 : 1);
			let n = right.left;
			while (n !== null) {
				if (!n.deleted && n.countable) index += n.length;
				n = n.left;
			}
		}
	} else {
		if (tname !== null) type = doc.get(tname);
		else if (typeID !== null) {
			if (getState(store, typeID.client) <= typeID.clock) return null;
			const { item } = followUndoneDeletions ? followRedone(store, typeID) : { item: getItem(store, typeID) };
			if (item instanceof Item && item.content instanceof ContentType) type = item.content.type;
			else return null;
		} else throw unexpectedCase();
		if (assoc >= 0) index = type._length;
		else index = 0;
	}
	return createAbsolutePosition$1(type, index, rpos.assoc);
};
/**
* @param {RelativePosition|null} a
* @param {RelativePosition|null} b
* @return {boolean}
*
* @function
*/
const compareRelativePositions = (a, b) => a === b || a !== null && b !== null && a.tname === b.tname && compareIDs(a.item, b.item) && compareIDs(a.type, b.type) && a.assoc === b.assoc;
var Snapshot = class {
	/**
	* @param {DeleteSet} ds
	* @param {Map<number,number>} sv state map
	*/
	constructor(ds, sv) {
		/**
		* @type {DeleteSet}
		*/
		this.ds = ds;
		/**
		* State Map
		* @type {Map<number,number>}
		*/
		this.sv = sv;
	}
};
/**
* @param {DeleteSet} ds
* @param {Map<number,number>} sm
* @return {Snapshot}
*/
const createSnapshot = (ds, sm) => new Snapshot(ds, sm);
const emptySnapshot = createSnapshot(createDeleteSet(), /* @__PURE__ */ new Map());
/**
* @param {Doc} doc
* @return {Snapshot}
*/
const snapshot = (doc) => createSnapshot(createDeleteSetFromStructStore(doc.store), getStateVector(doc.store));
/**
* @param {Item} item
* @param {Snapshot|undefined} snapshot
*
* @protected
* @function
*/
const isVisible = (item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
/**
* @param {Transaction} transaction
* @param {Snapshot} snapshot
*/
const splitSnapshotAffectedStructs = (transaction, snapshot) => {
	const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create$4);
	const store = transaction.doc.store;
	if (!meta.has(snapshot)) {
		snapshot.sv.forEach((clock, client) => {
			if (clock < getState(store, client)) getItemCleanStart(transaction, createID(client, clock));
		});
		iterateDeletedStructs(transaction, snapshot.ds, (_item) => {});
		meta.add(snapshot);
	}
};
var StructStore = class {
	constructor() {
		/**
		* @type {Map<number,Array<GC|Item>>}
		*/
		this.clients = /* @__PURE__ */ new Map();
		/**
		* @type {null | { missing: Map<number, number>, update: Uint8Array }}
		*/
		this.pendingStructs = null;
		/**
		* @type {null | Uint8Array}
		*/
		this.pendingDs = null;
	}
};
/**
* Return the states as a Map<client,clock>.
* Note that clock refers to the next expected clock id.
*
* @param {StructStore} store
* @return {Map<number,number>}
*
* @public
* @function
*/
const getStateVector = (store) => {
	const sm = /* @__PURE__ */ new Map();
	store.clients.forEach((structs, client) => {
		const struct = structs[structs.length - 1];
		sm.set(client, struct.id.clock + struct.length);
	});
	return sm;
};
/**
* @param {StructStore} store
* @param {number} client
* @return {number}
*
* @public
* @function
*/
const getState = (store, client) => {
	const structs = store.clients.get(client);
	if (structs === void 0) return 0;
	const lastStruct = structs[structs.length - 1];
	return lastStruct.id.clock + lastStruct.length;
};
/**
* @param {StructStore} store
* @param {GC|Item} struct
*
* @private
* @function
*/
const addStruct = (store, struct) => {
	let structs = store.clients.get(struct.id.client);
	if (structs === void 0) {
		structs = [];
		store.clients.set(struct.id.client, structs);
	} else {
		const lastStruct = structs[structs.length - 1];
		if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) throw unexpectedCase();
	}
	structs.push(struct);
};
/**
* Perform a binary search on a sorted array
* @param {Array<Item|GC>} structs
* @param {number} clock
* @return {number}
*
* @private
* @function
*/
const findIndexSS = (structs, clock) => {
	let left = 0;
	let right = structs.length - 1;
	let mid = structs[right];
	let midclock = mid.id.clock;
	if (midclock === clock) return right;
	let midindex = floor(clock / (midclock + mid.length - 1) * right);
	while (left <= right) {
		mid = structs[midindex];
		midclock = mid.id.clock;
		if (midclock <= clock) {
			if (clock < midclock + mid.length) return midindex;
			left = midindex + 1;
		} else right = midindex - 1;
		midindex = floor((left + right) / 2);
	}
	throw unexpectedCase();
};
/**
* Expects that id is actually in store. This function throws or is an infinite loop otherwise.
*
* @param {StructStore} store
* @param {ID} id
* @return {GC|Item}
*
* @private
* @function
*/
const find = (store, id) => {
	/**
	* @type {Array<GC|Item>}
	*/
	const structs = store.clients.get(id.client);
	return structs[findIndexSS(structs, id.clock)];
};
/**
* Expects that id is actually in store. This function throws or is an infinite loop otherwise.
* @private
* @function
*/
const getItem = find;
/**
* @param {Transaction} transaction
* @param {Array<Item|GC>} structs
* @param {number} clock
*/
const findIndexCleanStart = (transaction, structs, clock) => {
	const index = findIndexSS(structs, clock);
	const struct = structs[index];
	if (struct.id.clock < clock && struct instanceof Item) {
		structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
		return index + 1;
	}
	return index;
};
/**
* Expects that id is actually in store. This function throws or is an infinite loop otherwise.
*
* @param {Transaction} transaction
* @param {ID} id
* @return {Item}
*
* @private
* @function
*/
const getItemCleanStart = (transaction, id) => {
	const structs = transaction.doc.store.clients.get(id.client);
	return structs[findIndexCleanStart(transaction, structs, id.clock)];
};
/**
* Expects that id is actually in store. This function throws or is an infinite loop otherwise.
*
* @param {Transaction} transaction
* @param {StructStore} store
* @param {ID} id
* @return {Item}
*
* @private
* @function
*/
const getItemCleanEnd = (transaction, store, id) => {
	/**
	* @type {Array<Item>}
	*/
	const structs = store.clients.get(id.client);
	const index = findIndexSS(structs, id.clock);
	const struct = structs[index];
	if (id.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) structs.splice(index + 1, 0, splitItem(transaction, struct, id.clock - struct.id.clock + 1));
	return struct;
};
/**
* Replace `item` with `newitem` in store
* @param {StructStore} store
* @param {GC|Item} struct
* @param {GC|Item} newStruct
*
* @private
* @function
*/
const replaceStruct = (store, struct, newStruct) => {
	const structs = store.clients.get(struct.id.client);
	structs[findIndexSS(structs, struct.id.clock)] = newStruct;
};
/**
* Iterate over a range of structs
*
* @param {Transaction} transaction
* @param {Array<Item|GC>} structs
* @param {number} clockStart Inclusive start
* @param {number} len
* @param {function(GC|Item):void} f
*
* @function
*/
const iterateStructs = (transaction, structs, clockStart, len, f) => {
	if (len === 0) return;
	const clockEnd = clockStart + len;
	let index = findIndexCleanStart(transaction, structs, clockStart);
	let struct;
	do {
		struct = structs[index++];
		if (clockEnd < struct.id.clock + struct.length) findIndexCleanStart(transaction, structs, clockEnd);
		f(struct);
	} while (index < structs.length && structs[index].id.clock < clockEnd);
};
/**
* A transaction is created for every change on the Yjs model. It is possible
* to bundle changes on the Yjs model in a single transaction to
* minimize the number on messages sent and the number of observer calls.
* If possible the user of this library should bundle as many changes as
* possible. Here is an example to illustrate the advantages of bundling:
*
* @example
* const ydoc = new Y.Doc()
* const map = ydoc.getMap('map')
* // Log content when change is triggered
* map.observe(() => {
*   console.log('change triggered')
* })
* // Each change on the map type triggers a log message:
* map.set('a', 0) // => "change triggered"
* map.set('b', 0) // => "change triggered"
* // When put in a transaction, it will trigger the log after the transaction:
* ydoc.transact(() => {
*   map.set('a', 1)
*   map.set('b', 1)
* }) // => "change triggered"
*
* @public
*/
var Transaction = class {
	/**
	* @param {Doc} doc
	* @param {any} origin
	* @param {boolean} local
	*/
	constructor(doc, origin, local) {
		/**
		* The Yjs instance.
		* @type {Doc}
		*/
		this.doc = doc;
		/**
		* Describes the set of deleted items by ids
		* @type {DeleteSet}
		*/
		this.deleteSet = new DeleteSet();
		/**
		* Holds the state before the transaction started.
		* @type {Map<Number,Number>}
		*/
		this.beforeState = getStateVector(doc.store);
		/**
		* Holds the state after the transaction.
		* @type {Map<Number,Number>}
		*/
		this.afterState = /* @__PURE__ */ new Map();
		/**
		* All types that were directly modified (property added or child
		* inserted/deleted). New types are not included in this Set.
		* Maps from type to parentSubs (`item.parentSub = null` for YArray)
		* @type {Map<AbstractType<YEvent<any>>,Set<String|null>>}
		*/
		this.changed = /* @__PURE__ */ new Map();
		/**
		* Stores the events for the types that observe also child elements.
		* It is mainly used by `observeDeep`.
		* @type {Map<AbstractType<YEvent<any>>,Array<YEvent<any>>>}
		*/
		this.changedParentTypes = /* @__PURE__ */ new Map();
		/**
		* @type {Array<AbstractStruct>}
		*/
		this._mergeStructs = [];
		/**
		* @type {any}
		*/
		this.origin = origin;
		/**
		* Stores meta information on the transaction
		* @type {Map<any,any>}
		*/
		this.meta = /* @__PURE__ */ new Map();
		/**
		* Whether this change originates from this doc.
		* @type {boolean}
		*/
		this.local = local;
		/**
		* @type {Set<Doc>}
		*/
		this.subdocsAdded = /* @__PURE__ */ new Set();
		/**
		* @type {Set<Doc>}
		*/
		this.subdocsRemoved = /* @__PURE__ */ new Set();
		/**
		* @type {Set<Doc>}
		*/
		this.subdocsLoaded = /* @__PURE__ */ new Set();
		/**
		* @type {boolean}
		*/
		this._needFormattingCleanup = false;
	}
};
/**
* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
* @param {Transaction} transaction
* @return {boolean} Whether data was written.
*/
const writeUpdateMessageFromTransaction = (encoder, transaction) => {
	if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) return false;
	sortAndMergeDeleteSet(transaction.deleteSet);
	writeStructsFromTransaction(encoder, transaction);
	writeDeleteSet(encoder, transaction.deleteSet);
	return true;
};
/**
* If `type.parent` was added in current transaction, `type` technically
* did not change, it was just added and we should not fire events for `type`.
*
* @param {Transaction} transaction
* @param {AbstractType<YEvent<any>>} type
* @param {string|null} parentSub
*/
const addChangedTypeToTransaction = (transaction, type, parentSub) => {
	const item = type._item;
	if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) setIfUndefined(transaction.changed, type, create$4).add(parentSub);
};
/**
* @param {Array<AbstractStruct>} structs
* @param {number} pos
* @return {number} # of merged structs
*/
const tryToMergeWithLefts = (structs, pos) => {
	let right = structs[pos];
	let left = structs[pos - 1];
	let i = pos;
	for (; i > 0; right = left, left = structs[--i - 1]) {
		if (left.deleted === right.deleted && left.constructor === right.constructor) {
			if (left.mergeWith(right)) {
				if (right instanceof Item && right.parentSub !== null && right.parent._map.get(right.parentSub) === right)
 /** @type {AbstractType<any>} */ right.parent._map.set(right.parentSub, left);
				continue;
			}
		}
		break;
	}
	const merged = pos - i;
	if (merged) structs.splice(pos + 1 - merged, merged);
	return merged;
};
/**
* @param {DeleteSet} ds
* @param {StructStore} store
* @param {function(Item):boolean} gcFilter
*/
const tryGcDeleteSet = (ds, store, gcFilter) => {
	for (const [client, deleteItems] of ds.clients.entries()) {
		const structs = store.clients.get(client);
		for (let di = deleteItems.length - 1; di >= 0; di--) {
			const deleteItem = deleteItems[di];
			const endDeleteItemClock = deleteItem.clock + deleteItem.len;
			for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
				const struct = structs[si];
				if (deleteItem.clock + deleteItem.len <= struct.id.clock) break;
				if (struct instanceof Item && struct.deleted && !struct.keep && gcFilter(struct)) struct.gc(store, false);
			}
		}
	}
};
/**
* @param {DeleteSet} ds
* @param {StructStore} store
*/
const tryMergeDeleteSet = (ds, store) => {
	ds.clients.forEach((deleteItems, client) => {
		const structs = store.clients.get(client);
		for (let di = deleteItems.length - 1; di >= 0; di--) {
			const deleteItem = deleteItems[di];
			const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
			for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[si]) si -= 1 + tryToMergeWithLefts(structs, si);
		}
	});
};
/**
* @param {Array<Transaction>} transactionCleanups
* @param {number} i
*/
const cleanupTransactions = (transactionCleanups, i) => {
	if (i < transactionCleanups.length) {
		const transaction = transactionCleanups[i];
		const doc = transaction.doc;
		const store = doc.store;
		const ds = transaction.deleteSet;
		const mergeStructs = transaction._mergeStructs;
		try {
			sortAndMergeDeleteSet(ds);
			transaction.afterState = getStateVector(transaction.doc.store);
			doc.emit("beforeObserverCalls", [transaction, doc]);
			/**
			* An array of event callbacks.
			*
			* Each callback is called even if the other ones throw errors.
			*
			* @type {Array<function():void>}
			*/
			const fs = [];
			transaction.changed.forEach((subs, itemtype) => fs.push(() => {
				if (itemtype._item === null || !itemtype._item.deleted) itemtype._callObserver(transaction, subs);
			}));
			fs.push(() => {
				transaction.changedParentTypes.forEach((events, type) => {
					if (type._dEH.l.length > 0 && (type._item === null || !type._item.deleted)) {
						events = events.filter((event) => event.target._item === null || !event.target._item.deleted);
						events.forEach((event) => {
							event.currentTarget = type;
							event._path = null;
						});
						events.sort((event1, event2) => event1.path.length - event2.path.length);
						fs.push(() => {
							callEventHandlerListeners(type._dEH, events, transaction);
						});
					}
				});
				fs.push(() => doc.emit("afterTransaction", [transaction, doc]));
				fs.push(() => {
					if (transaction._needFormattingCleanup) cleanupYTextAfterTransaction(transaction);
				});
			});
			callAll(fs, []);
		} finally {
			if (doc.gc) tryGcDeleteSet(ds, store, doc.gcFilter);
			tryMergeDeleteSet(ds, store);
			transaction.afterState.forEach((clock, client) => {
				const beforeClock = transaction.beforeState.get(client) || 0;
				if (beforeClock !== clock) {
					const structs = store.clients.get(client);
					const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
					for (let i = structs.length - 1; i >= firstChangePos;) i -= 1 + tryToMergeWithLefts(structs, i);
				}
			});
			for (let i = mergeStructs.length - 1; i >= 0; i--) {
				const { client, clock } = mergeStructs[i].id;
				const structs = store.clients.get(client);
				const replacedStructPos = findIndexSS(structs, clock);
				if (replacedStructPos + 1 < structs.length) {
					if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) continue;
				}
				if (replacedStructPos > 0) tryToMergeWithLefts(structs, replacedStructPos);
			}
			if (!transaction.local && transaction.afterState.get(doc.clientID) !== transaction.beforeState.get(doc.clientID)) {
				print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
				doc.clientID = generateNewClientId();
			}
			doc.emit("afterTransactionCleanup", [transaction, doc]);
			if (doc._observers.has("update")) {
				const encoder = new UpdateEncoderV1();
				if (writeUpdateMessageFromTransaction(encoder, transaction)) doc.emit("update", [
					encoder.toUint8Array(),
					transaction.origin,
					doc,
					transaction
				]);
			}
			if (doc._observers.has("updateV2")) {
				const encoder = new UpdateEncoderV2();
				if (writeUpdateMessageFromTransaction(encoder, transaction)) doc.emit("updateV2", [
					encoder.toUint8Array(),
					transaction.origin,
					doc,
					transaction
				]);
			}
			const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
			if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
				subdocsAdded.forEach((subdoc) => {
					subdoc.clientID = doc.clientID;
					if (subdoc.collectionid == null) subdoc.collectionid = doc.collectionid;
					doc.subdocs.add(subdoc);
				});
				subdocsRemoved.forEach((subdoc) => doc.subdocs.delete(subdoc));
				doc.emit("subdocs", [
					{
						loaded: subdocsLoaded,
						added: subdocsAdded,
						removed: subdocsRemoved
					},
					doc,
					transaction
				]);
				subdocsRemoved.forEach((subdoc) => subdoc.destroy());
			}
			if (transactionCleanups.length <= i + 1) {
				doc._transactionCleanups = [];
				doc.emit("afterAllTransactions", [doc, transactionCleanups]);
			} else cleanupTransactions(transactionCleanups, i + 1);
		}
	}
};
/**
* Implements the functionality of `y.transact(()=>{..})`
*
* @template T
* @param {Doc} doc
* @param {function(Transaction):T} f
* @param {any} [origin=true]
* @return {T}
*
* @function
*/
const transact = (doc, f, origin = null, local = true) => {
	const transactionCleanups = doc._transactionCleanups;
	let initialCall = false;
	/**
	* @type {any}
	*/
	let result = null;
	if (doc._transaction === null) {
		initialCall = true;
		doc._transaction = new Transaction(doc, origin, local);
		transactionCleanups.push(doc._transaction);
		if (transactionCleanups.length === 1) doc.emit("beforeAllTransactions", [doc]);
		doc.emit("beforeTransaction", [doc._transaction, doc]);
	}
	try {
		result = f(doc._transaction);
	} finally {
		if (initialCall) {
			const finishCleanup = doc._transaction === transactionCleanups[0];
			doc._transaction = null;
			if (finishCleanup) cleanupTransactions(transactionCleanups, 0);
		}
	}
	return result;
};
var StackItem = class {
	/**
	* @param {DeleteSet} deletions
	* @param {DeleteSet} insertions
	*/
	constructor(deletions, insertions) {
		this.insertions = insertions;
		this.deletions = deletions;
		/**
		* Use this to save and restore metadata like selection range
		*/
		this.meta = /* @__PURE__ */ new Map();
	}
};
/**
* @param {Transaction} tr
* @param {UndoManager} um
* @param {StackItem} stackItem
*/
const clearUndoManagerStackItem = (tr, um, stackItem) => {
	iterateDeletedStructs(tr, stackItem.deletions, (item) => {
		if (item instanceof Item && um.scope.some((type) => type === tr.doc || isParentOf(type, item))) keepItem(item, false);
	});
};
/**
* @param {UndoManager} undoManager
* @param {Array<StackItem>} stack
* @param {'undo'|'redo'} eventType
* @return {StackItem?}
*/
const popStackItem = (undoManager, stack, eventType) => {
	/**
	* Keep a reference to the transaction so we can fire the event with the changedParentTypes
	* @type {any}
	*/
	let _tr = null;
	const doc = undoManager.doc;
	const scope = undoManager.scope;
	transact(doc, (transaction) => {
		while (stack.length > 0 && undoManager.currStackItem === null) {
			const store = doc.store;
			const stackItem = stack.pop();
			/**
			* @type {Set<Item>}
			*/
			const itemsToRedo = /* @__PURE__ */ new Set();
			/**
			* @type {Array<Item>}
			*/
			const itemsToDelete = [];
			let performedChange = false;
			iterateDeletedStructs(transaction, stackItem.insertions, (struct) => {
				if (struct instanceof Item) {
					if (struct.redone !== null) {
						let { item, diff } = followRedone(store, struct.id);
						if (diff > 0) item = getItemCleanStart(transaction, createID(item.id.client, item.id.clock + diff));
						struct = item;
					}
					if (!struct.deleted && scope.some((type) => type === transaction.doc || isParentOf(type, struct))) itemsToDelete.push(struct);
				}
			});
			iterateDeletedStructs(transaction, stackItem.deletions, (struct) => {
				if (struct instanceof Item && scope.some((type) => type === transaction.doc || isParentOf(type, struct)) && !isDeleted(stackItem.insertions, struct.id)) itemsToRedo.add(struct);
			});
			itemsToRedo.forEach((struct) => {
				performedChange = redoItem(transaction, struct, itemsToRedo, stackItem.insertions, undoManager.ignoreRemoteMapChanges, undoManager) !== null || performedChange;
			});
			for (let i = itemsToDelete.length - 1; i >= 0; i--) {
				const item = itemsToDelete[i];
				if (undoManager.deleteFilter(item)) {
					item.delete(transaction);
					performedChange = true;
				}
			}
			undoManager.currStackItem = performedChange ? stackItem : null;
		}
		transaction.changed.forEach((subProps, type) => {
			if (subProps.has(null) && type._searchMarker) type._searchMarker.length = 0;
		});
		_tr = transaction;
	}, undoManager);
	const res = undoManager.currStackItem;
	if (res != null) {
		const changedParentTypes = _tr.changedParentTypes;
		undoManager.emit("stack-item-popped", [{
			stackItem: res,
			type: eventType,
			changedParentTypes,
			origin: undoManager
		}, undoManager]);
		undoManager.currStackItem = null;
	}
	return res;
};
/**
* @typedef {Object} UndoManagerOptions
* @property {number} [UndoManagerOptions.captureTimeout=500]
* @property {function(Transaction):boolean} [UndoManagerOptions.captureTransaction] Do not capture changes of a Transaction if result false.
* @property {function(Item):boolean} [UndoManagerOptions.deleteFilter=()=>true] Sometimes
* it is necessary to filter what an Undo/Redo operation can delete. If this
* filter returns false, the type/item won't be deleted even it is in the
* undo/redo scope.
* @property {Set<any>} [UndoManagerOptions.trackedOrigins=new Set([null])]
* @property {boolean} [ignoreRemoteMapChanges] Experimental. By default, the UndoManager will never overwrite remote changes. Enable this property to enable overwriting remote changes on key-value changes (Y.Map, properties on Y.Xml, etc..).
* @property {Doc} [doc] The document that this UndoManager operates on. Only needed if typeScope is empty.
*/
/**
* @typedef {Object} StackItemEvent
* @property {StackItem} StackItemEvent.stackItem
* @property {any} StackItemEvent.origin
* @property {'undo'|'redo'} StackItemEvent.type
* @property {Map<AbstractType<YEvent<any>>,Array<YEvent<any>>>} StackItemEvent.changedParentTypes
*/
/**
* Fires 'stack-item-added' event when a stack item was added to either the undo- or
* the redo-stack. You may store additional stack information via the
* metadata property on `event.stackItem.meta` (it is a `Map` of metadata properties).
* Fires 'stack-item-popped' event when a stack item was popped from either the
* undo- or the redo-stack. You may restore the saved stack information from `event.stackItem.meta`.
*
* @extends {ObservableV2<{'stack-item-added':function(StackItemEvent, UndoManager):void, 'stack-item-popped': function(StackItemEvent, UndoManager):void, 'stack-cleared': function({ undoStackCleared: boolean, redoStackCleared: boolean }):void, 'stack-item-updated': function(StackItemEvent, UndoManager):void }>}
*/
var UndoManager = class extends ObservableV2 {
	/**
	* @param {Doc|AbstractType<any>|Array<AbstractType<any>>} typeScope Limits the scope of the UndoManager. If this is set to a ydoc instance, all changes on that ydoc will be undone. If set to a specific type, only changes on that type or its children will be undone. Also accepts an array of types.
	* @param {UndoManagerOptions} options
	*/
	constructor(typeScope, { captureTimeout = 500, captureTransaction = (_tr) => true, deleteFilter = () => true, trackedOrigins = /* @__PURE__ */ new Set([null]), ignoreRemoteMapChanges = false, doc = isArray(typeScope) ? typeScope[0].doc : typeScope instanceof Doc ? typeScope : typeScope.doc } = {}) {
		super();
		/**
		* @type {Array<AbstractType<any> | Doc>}
		*/
		this.scope = [];
		this.doc = doc;
		this.addToScope(typeScope);
		this.deleteFilter = deleteFilter;
		trackedOrigins.add(this);
		this.trackedOrigins = trackedOrigins;
		this.captureTransaction = captureTransaction;
		/**
		* @type {Array<StackItem>}
		*/
		this.undoStack = [];
		/**
		* @type {Array<StackItem>}
		*/
		this.redoStack = [];
		/**
		* Whether the client is currently undoing (calling UndoManager.undo)
		*
		* @type {boolean}
		*/
		this.undoing = false;
		this.redoing = false;
		/**
		* The currently popped stack item if UndoManager.undoing or UndoManager.redoing
		*
		* @type {StackItem|null}
		*/
		this.currStackItem = null;
		this.lastChange = 0;
		this.ignoreRemoteMapChanges = ignoreRemoteMapChanges;
		this.captureTimeout = captureTimeout;
		/**
		* @param {Transaction} transaction
		*/
		this.afterTransactionHandler = (transaction) => {
			if (!this.captureTransaction(transaction) || !this.scope.some((type) => transaction.changedParentTypes.has(type) || type === this.doc) || !this.trackedOrigins.has(transaction.origin) && (!transaction.origin || !this.trackedOrigins.has(transaction.origin.constructor))) return;
			const undoing = this.undoing;
			const redoing = this.redoing;
			const stack = undoing ? this.redoStack : this.undoStack;
			if (undoing) this.stopCapturing();
			else if (!redoing) this.clear(false, true);
			const insertions = new DeleteSet();
			transaction.afterState.forEach((endClock, client) => {
				const startClock = transaction.beforeState.get(client) || 0;
				const len = endClock - startClock;
				if (len > 0) addToDeleteSet(insertions, client, startClock, len);
			});
			const now = getUnixTime();
			let didAdd = false;
			if (this.lastChange > 0 && now - this.lastChange < this.captureTimeout && stack.length > 0 && !undoing && !redoing) {
				const lastOp = stack[stack.length - 1];
				lastOp.deletions = mergeDeleteSets([lastOp.deletions, transaction.deleteSet]);
				lastOp.insertions = mergeDeleteSets([lastOp.insertions, insertions]);
			} else {
				stack.push(new StackItem(transaction.deleteSet, insertions));
				didAdd = true;
			}
			if (!undoing && !redoing) this.lastChange = now;
			iterateDeletedStructs(
				transaction,
				transaction.deleteSet,
				/** @param {Item|GC} item */
				(item) => {
					if (item instanceof Item && this.scope.some((type) => type === transaction.doc || isParentOf(type, item))) keepItem(item, true);
				}
			);
			/**
			* @type {[StackItemEvent, UndoManager]}
			*/
			const changeEvent = [{
				stackItem: stack[stack.length - 1],
				origin: transaction.origin,
				type: undoing ? "redo" : "undo",
				changedParentTypes: transaction.changedParentTypes
			}, this];
			if (didAdd) this.emit("stack-item-added", changeEvent);
			else this.emit("stack-item-updated", changeEvent);
		};
		this.doc.on("afterTransaction", this.afterTransactionHandler);
		this.doc.on("destroy", () => {
			this.destroy();
		});
	}
	/**
	* Extend the scope.
	*
	* @param {Array<AbstractType<any> | Doc> | AbstractType<any> | Doc} ytypes
	*/
	addToScope(ytypes) {
		const tmpSet = new Set(this.scope);
		ytypes = isArray(ytypes) ? ytypes : [ytypes];
		ytypes.forEach((ytype) => {
			if (!tmpSet.has(ytype)) {
				tmpSet.add(ytype);
				if (ytype instanceof AbstractType ? ytype.doc !== this.doc : ytype !== this.doc) warn("[yjs#509] Not same Y.Doc");
				this.scope.push(ytype);
			}
		});
	}
	/**
	* @param {any} origin
	*/
	addTrackedOrigin(origin) {
		this.trackedOrigins.add(origin);
	}
	/**
	* @param {any} origin
	*/
	removeTrackedOrigin(origin) {
		this.trackedOrigins.delete(origin);
	}
	clear(clearUndoStack = true, clearRedoStack = true) {
		if (clearUndoStack && this.canUndo() || clearRedoStack && this.canRedo()) this.doc.transact((tr) => {
			if (clearUndoStack) {
				this.undoStack.forEach((item) => clearUndoManagerStackItem(tr, this, item));
				this.undoStack = [];
			}
			if (clearRedoStack) {
				this.redoStack.forEach((item) => clearUndoManagerStackItem(tr, this, item));
				this.redoStack = [];
			}
			this.emit("stack-cleared", [{
				undoStackCleared: clearUndoStack,
				redoStackCleared: clearRedoStack
			}]);
		});
	}
	/**
	* UndoManager merges Undo-StackItem if they are created within time-gap
	* smaller than `options.captureTimeout`. Call `um.stopCapturing()` so that the next
	* StackItem won't be merged.
	*
	*
	* @example
	*     // without stopCapturing
	*     ytext.insert(0, 'a')
	*     ytext.insert(1, 'b')
	*     um.undo()
	*     ytext.toString() // => '' (note that 'ab' was removed)
	*     // with stopCapturing
	*     ytext.insert(0, 'a')
	*     um.stopCapturing()
	*     ytext.insert(0, 'b')
	*     um.undo()
	*     ytext.toString() // => 'a' (note that only 'b' was removed)
	*
	*/
	stopCapturing() {
		this.lastChange = 0;
	}
	/**
	* Undo last changes on type.
	*
	* @return {StackItem?} Returns StackItem if a change was applied
	*/
	undo() {
		this.undoing = true;
		let res;
		try {
			res = popStackItem(this, this.undoStack, "undo");
		} finally {
			this.undoing = false;
		}
		return res;
	}
	/**
	* Redo last undo operation.
	*
	* @return {StackItem?} Returns StackItem if a change was applied
	*/
	redo() {
		this.redoing = true;
		let res;
		try {
			res = popStackItem(this, this.redoStack, "redo");
		} finally {
			this.redoing = false;
		}
		return res;
	}
	/**
	* Are undo steps available?
	*
	* @return {boolean} `true` if undo is possible
	*/
	canUndo() {
		return this.undoStack.length > 0;
	}
	/**
	* Are redo steps available?
	*
	* @return {boolean} `true` if redo is possible
	*/
	canRedo() {
		return this.redoStack.length > 0;
	}
	destroy() {
		this.trackedOrigins.delete(this);
		this.doc.off("afterTransaction", this.afterTransactionHandler);
		super.destroy();
	}
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
*/
function* lazyStructReaderGenerator(decoder) {
	const numOfStateUpdates = readVarUint(decoder.restDecoder);
	for (let i = 0; i < numOfStateUpdates; i++) {
		const numberOfStructs = readVarUint(decoder.restDecoder);
		const client = decoder.readClient();
		let clock = readVarUint(decoder.restDecoder);
		for (let i = 0; i < numberOfStructs; i++) {
			const info = decoder.readInfo();
			if (info === 10) {
				const len = readVarUint(decoder.restDecoder);
				yield new Skip(createID(client, clock), len);
				clock += len;
			} else if ((31 & info) !== 0) {
				const cantCopyParentInfo = (info & 192) === 0;
				const struct = new Item(createID(client, clock), null, (info & 128) === 128 ? decoder.readLeftID() : null, null, (info & 64) === 64 ? decoder.readRightID() : null, cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null, cantCopyParentInfo && (info & 32) === 32 ? decoder.readString() : null, readItemContent(decoder, info));
				yield struct;
				clock += struct.length;
			} else {
				const len = decoder.readLen();
				yield new GC(createID(client, clock), len);
				clock += len;
			}
		}
	}
}
var LazyStructReader = class {
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	* @param {boolean} filterSkips
	*/
	constructor(decoder, filterSkips) {
		this.gen = lazyStructReaderGenerator(decoder);
		/**
		* @type {null | Item | Skip | GC}
		*/
		this.curr = null;
		this.done = false;
		this.filterSkips = filterSkips;
		this.next();
	}
	/**
	* @return {Item | GC | Skip |null}
	*/
	next() {
		do
			this.curr = this.gen.next().value || null;
		while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip);
		return this.curr;
	}
};
var LazyStructWriter = class {
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	*/
	constructor(encoder) {
		this.currClient = 0;
		this.startClock = 0;
		this.written = 0;
		this.encoder = encoder;
		/**
		* We want to write operations lazily, but also we need to know beforehand how many operations we want to write for each client.
		*
		* This kind of meta-information (#clients, #structs-per-client-written) is written to the restEncoder.
		*
		* We fragment the restEncoder and store a slice of it per-client until we know how many clients there are.
		* When we flush (toUint8Array) we write the restEncoder using the fragments and the meta-information.
		*
		* @type {Array<{ written: number, restEncoder: Uint8Array }>}
		*/
		this.clientStructs = [];
	}
};
/**
* @param {Array<Uint8Array>} updates
* @return {Uint8Array}
*/
const mergeUpdates = (updates) => mergeUpdatesV2(updates, UpdateDecoderV1, UpdateEncoderV1);
/**
* This method is intended to slice any kind of struct and retrieve the right part.
* It does not handle side-effects, so it should only be used by the lazy-encoder.
*
* @param {Item | GC | Skip} left
* @param {number} diff
* @return {Item | GC}
*/
const sliceStruct = (left, diff) => {
	if (left.constructor === GC) {
		const { client, clock } = left.id;
		return new GC(createID(client, clock + diff), left.length - diff);
	} else if (left.constructor === Skip) {
		const { client, clock } = left.id;
		return new Skip(createID(client, clock + diff), left.length - diff);
	} else {
		const leftItem = left;
		const { client, clock } = leftItem.id;
		return new Item(createID(client, clock + diff), null, createID(client, clock + diff - 1), null, leftItem.rightOrigin, leftItem.parent, leftItem.parentSub, leftItem.content.splice(diff));
	}
};
/**
*
* This function works similarly to `readUpdateV2`.
*
* @param {Array<Uint8Array>} updates
* @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} [YDecoder]
* @param {typeof UpdateEncoderV1 | typeof UpdateEncoderV2} [YEncoder]
* @return {Uint8Array}
*/
const mergeUpdatesV2 = (updates, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
	if (updates.length === 1) return updates[0];
	const updateDecoders = updates.map((update) => new YDecoder(createDecoder(update)));
	let lazyStructDecoders = updateDecoders.map((decoder) => new LazyStructReader(decoder, true));
	/**
	* @todo we don't need offset because we always slice before
	* @type {null | { struct: Item | GC | Skip, offset: number }}
	*/
	let currWrite = null;
	const updateEncoder = new YEncoder();
	const lazyStructEncoder = new LazyStructWriter(updateEncoder);
	while (true) {
		lazyStructDecoders = lazyStructDecoders.filter((dec) => dec.curr !== null);
		lazyStructDecoders.sort(
			/** @type {function(any,any):number} */
			(dec1, dec2) => {
				if (dec1.curr.id.client === dec2.curr.id.client) {
					const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
					if (clockDiff === 0) return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1;
					else return clockDiff;
				} else return dec2.curr.id.client - dec1.curr.id.client;
			}
		);
		if (lazyStructDecoders.length === 0) break;
		const currDecoder = lazyStructDecoders[0];
		const firstClient = currDecoder.curr.id.client;
		if (currWrite !== null) {
			let curr = currDecoder.curr;
			let iterated = false;
			while (curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client) {
				curr = currDecoder.next();
				iterated = true;
			}
			if (curr === null || curr.id.client !== firstClient || iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length) continue;
			if (firstClient !== currWrite.struct.id.client) {
				writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
				currWrite = {
					struct: curr,
					offset: 0
				};
				currDecoder.next();
			} else if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) if (currWrite.struct.constructor === Skip) currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
			else {
				writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
				const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
				currWrite = {
					struct: new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff),
					offset: 0
				};
			}
			else {
				const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
				if (diff > 0) if (currWrite.struct.constructor === Skip) currWrite.struct.length -= diff;
				else curr = sliceStruct(curr, diff);
				if (!currWrite.struct.mergeWith(curr)) {
					writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
					currWrite = {
						struct: curr,
						offset: 0
					};
					currDecoder.next();
				}
			}
		} else {
			currWrite = {
				struct: currDecoder.curr,
				offset: 0
			};
			currDecoder.next();
		}
		for (let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()) {
			writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
			currWrite = {
				struct: next,
				offset: 0
			};
		}
	}
	if (currWrite !== null) {
		writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
		currWrite = null;
	}
	finishLazyStructWriting(lazyStructEncoder);
	const dss = updateDecoders.map((decoder) => readDeleteSet(decoder));
	const ds = mergeDeleteSets(dss);
	writeDeleteSet(updateEncoder, ds);
	return updateEncoder.toUint8Array();
};
/**
* @param {Uint8Array} update
* @param {Uint8Array} sv
* @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} [YDecoder]
* @param {typeof UpdateEncoderV1 | typeof UpdateEncoderV2} [YEncoder]
*/
const diffUpdateV2 = (update, sv, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
	const state = decodeStateVector(sv);
	const encoder = new YEncoder();
	const lazyStructWriter = new LazyStructWriter(encoder);
	const decoder = new YDecoder(createDecoder(update));
	const reader = new LazyStructReader(decoder, false);
	while (reader.curr) {
		const curr = reader.curr;
		const currClient = curr.id.client;
		const svClock = state.get(currClient) || 0;
		if (reader.curr.constructor === Skip) {
			reader.next();
			continue;
		}
		if (curr.id.clock + curr.length > svClock) {
			writeStructToLazyStructWriter(lazyStructWriter, curr, max(svClock - curr.id.clock, 0));
			reader.next();
			while (reader.curr && reader.curr.id.client === currClient) {
				writeStructToLazyStructWriter(lazyStructWriter, reader.curr, 0);
				reader.next();
			}
		} else while (reader.curr && reader.curr.id.client === currClient && reader.curr.id.clock + reader.curr.length <= svClock) reader.next();
	}
	finishLazyStructWriting(lazyStructWriter);
	const ds = readDeleteSet(decoder);
	writeDeleteSet(encoder, ds);
	return encoder.toUint8Array();
};
/**
* @param {LazyStructWriter} lazyWriter
*/
const flushLazyStructWriter = (lazyWriter) => {
	if (lazyWriter.written > 0) {
		lazyWriter.clientStructs.push({
			written: lazyWriter.written,
			restEncoder: toUint8Array(lazyWriter.encoder.restEncoder)
		});
		lazyWriter.encoder.restEncoder = createEncoder();
		lazyWriter.written = 0;
	}
};
/**
* @param {LazyStructWriter} lazyWriter
* @param {Item | GC} struct
* @param {number} offset
*/
const writeStructToLazyStructWriter = (lazyWriter, struct, offset) => {
	if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) flushLazyStructWriter(lazyWriter);
	if (lazyWriter.written === 0) {
		lazyWriter.currClient = struct.id.client;
		lazyWriter.encoder.writeClient(struct.id.client);
		writeVarUint(lazyWriter.encoder.restEncoder, struct.id.clock + offset);
	}
	struct.write(lazyWriter.encoder, offset);
	lazyWriter.written++;
};
/**
* Call this function when we collected all parts and want to
* put all the parts together. After calling this method,
* you can continue using the UpdateEncoder.
*
* @param {LazyStructWriter} lazyWriter
*/
const finishLazyStructWriting = (lazyWriter) => {
	flushLazyStructWriter(lazyWriter);
	const restEncoder = lazyWriter.encoder.restEncoder;
	/**
	* Now we put all the fragments together.
	* This works similarly to `writeClientsStructs`
	*/
	writeVarUint(restEncoder, lazyWriter.clientStructs.length);
	for (let i = 0; i < lazyWriter.clientStructs.length; i++) {
		const partStructs = lazyWriter.clientStructs[i];
		/**
		* Works similarly to `writeStructs`
		*/
		writeVarUint(restEncoder, partStructs.written);
		writeUint8Array(restEncoder, partStructs.restEncoder);
	}
};
/**
* @param {Uint8Array} update
* @param {function(Item|GC|Skip):Item|GC|Skip} blockTransformer
* @param {typeof UpdateDecoderV2 | typeof UpdateDecoderV1} YDecoder
* @param {typeof UpdateEncoderV2 | typeof UpdateEncoderV1 } YEncoder
*/
const convertUpdateFormat = (update, blockTransformer, YDecoder, YEncoder) => {
	const updateDecoder = new YDecoder(createDecoder(update));
	const lazyDecoder = new LazyStructReader(updateDecoder, false);
	const updateEncoder = new YEncoder();
	const lazyWriter = new LazyStructWriter(updateEncoder);
	for (let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()) writeStructToLazyStructWriter(lazyWriter, blockTransformer(curr), 0);
	finishLazyStructWriting(lazyWriter);
	const ds = readDeleteSet(updateDecoder);
	writeDeleteSet(updateEncoder, ds);
	return updateEncoder.toUint8Array();
};
/**
* @param {Uint8Array} update
*/
const convertUpdateFormatV2ToV1 = (update) => convertUpdateFormat(update, id, UpdateDecoderV2, UpdateEncoderV1);
const errorComputeChanges = "You must not compute changes after the event-handler fired.";
/**
* @template {AbstractType<any>} T
* YEvent describes the changes on a YType.
*/
var YEvent = class {
	/**
	* @param {T} target The changed type.
	* @param {Transaction} transaction
	*/
	constructor(target, transaction) {
		/**
		* The type on which this event was created on.
		* @type {T}
		*/
		this.target = target;
		/**
		* The current target on which the observe callback is called.
		* @type {AbstractType<any>}
		*/
		this.currentTarget = target;
		/**
		* The transaction that triggered this event.
		* @type {Transaction}
		*/
		this.transaction = transaction;
		/**
		* @type {Object|null}
		*/
		this._changes = null;
		/**
		* @type {null | Map<string, { action: 'add' | 'update' | 'delete', oldValue: any }>}
		*/
		this._keys = null;
		/**
		* @type {null | Array<{ insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any> }>}
		*/
		this._delta = null;
		/**
		* @type {Array<string|number>|null}
		*/
		this._path = null;
	}
	/**
	* Computes the path from `y` to the changed type.
	*
	* @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
	*
	* The following property holds:
	* @example
	*   let type = y
	*   event.path.forEach(dir => {
	*     type = type.get(dir)
	*   })
	*   type === event.target // => true
	*/
	get path() {
		return this._path || (this._path = getPathTo(this.currentTarget, this.target));
	}
	/**
	* Check if a struct is deleted by this event.
	*
	* In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
	*
	* @param {AbstractStruct} struct
	* @return {boolean}
	*/
	deletes(struct) {
		return isDeleted(this.transaction.deleteSet, struct.id);
	}
	/**
	* @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any }>}
	*/
	get keys() {
		if (this._keys === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw create$3(errorComputeChanges);
			const keys = /* @__PURE__ */ new Map();
			const target = this.target;
			this.transaction.changed.get(target).forEach((key) => {
				if (key !== null) {
					const item = target._map.get(key);
					/**
					* @type {'delete' | 'add' | 'update'}
					*/
					let action;
					let oldValue;
					if (this.adds(item)) {
						let prev = item.left;
						while (prev !== null && this.adds(prev)) prev = prev.left;
						if (this.deletes(item)) if (prev !== null && this.deletes(prev)) {
							action = "delete";
							oldValue = last(prev.content.getContent());
						} else return;
						else if (prev !== null && this.deletes(prev)) {
							action = "update";
							oldValue = last(prev.content.getContent());
						} else {
							action = "add";
							oldValue = void 0;
						}
					} else if (this.deletes(item)) {
						action = "delete";
						oldValue = last(
							/** @type {Item} */
							item.content.getContent()
						);
					} else return;
					keys.set(key, {
						action,
						oldValue
					});
				}
			});
			this._keys = keys;
		}
		return this._keys;
	}
	/**
	* This is a computed property. Note that this can only be safely computed during the
	* event call. Computing this property after other changes happened might result in
	* unexpected behavior (incorrect computation of deltas). A safe way to collect changes
	* is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
	*
	* @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
	*/
	get delta() {
		return this.changes.delta;
	}
	/**
	* Check if a struct is added by this event.
	*
	* In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
	*
	* @param {AbstractStruct} struct
	* @return {boolean}
	*/
	adds(struct) {
		return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
	}
	/**
	* This is a computed property. Note that this can only be safely computed during the
	* event call. Computing this property after other changes happened might result in
	* unexpected behavior (incorrect computation of deltas). A safe way to collect changes
	* is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
	*
	* @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
	*/
	get changes() {
		let changes = this._changes;
		if (changes === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw create$3(errorComputeChanges);
			const target = this.target;
			const added = create$4();
			const deleted = create$4();
			/**
			* @type {Array<{insert:Array<any>}|{delete:number}|{retain:number}>}
			*/
			const delta = [];
			changes = {
				added,
				deleted,
				delta,
				keys: this.keys
			};
			if (this.transaction.changed.get(target).has(null)) {
				/**
				* @type {any}
				*/
				let lastOp = null;
				const packOp = () => {
					if (lastOp) delta.push(lastOp);
				};
				for (let item = target._start; item !== null; item = item.right) if (item.deleted) {
					if (this.deletes(item) && !this.adds(item)) {
						if (lastOp === null || lastOp.delete === void 0) {
							packOp();
							lastOp = { delete: 0 };
						}
						lastOp.delete += item.length;
						deleted.add(item);
					}
				} else if (this.adds(item)) {
					if (lastOp === null || lastOp.insert === void 0) {
						packOp();
						lastOp = { insert: [] };
					}
					lastOp.insert = lastOp.insert.concat(item.content.getContent());
					added.add(item);
				} else {
					if (lastOp === null || lastOp.retain === void 0) {
						packOp();
						lastOp = { retain: 0 };
					}
					lastOp.retain += item.length;
				}
				if (lastOp !== null && lastOp.retain === void 0) packOp();
			}
			this._changes = changes;
		}
		return changes;
	}
};
/**
* Compute the path from this type to the specified target.
*
* @example
*   // `child` should be accessible via `type.get(path[0]).get(path[1])..`
*   const path = type.getPathTo(child)
*   // assuming `type instanceof YArray`
*   console.log(path) // might look like => [2, 'key1']
*   child === type.get(path[0]).get(path[1])
*
* @param {AbstractType<any>} parent
* @param {AbstractType<any>} child target
* @return {Array<string|number>} Path to the target
*
* @private
* @function
*/
const getPathTo = (parent, child) => {
	const path = [];
	while (child._item !== null && child !== parent) {
		if (child._item.parentSub !== null) path.unshift(child._item.parentSub);
		else {
			let i = 0;
			let c = child._item.parent._start;
			while (c !== child._item && c !== null) {
				if (!c.deleted && c.countable) i += c.length;
				c = c.right;
			}
			path.unshift(i);
		}
		child = child._item.parent;
	}
	return path;
};
/**
* https://docs.yjs.dev/getting-started/working-with-shared-types#caveats
*/
const warnPrematureAccess = () => {
	warn("Invalid access: Add Yjs type to a document before reading data.");
};
const maxSearchMarker = 80;
/**
* A unique timestamp that identifies each marker.
*
* Time is relative,.. this is more like an ever-increasing clock.
*
* @type {number}
*/
let globalSearchMarkerTimestamp = 0;
var ArraySearchMarker = class {
	/**
	* @param {Item} p
	* @param {number} index
	*/
	constructor(p, index) {
		p.marker = true;
		this.p = p;
		this.index = index;
		this.timestamp = globalSearchMarkerTimestamp++;
	}
};
/**
* @param {ArraySearchMarker} marker
*/
const refreshMarkerTimestamp = (marker) => {
	marker.timestamp = globalSearchMarkerTimestamp++;
};
/**
* This is rather complex so this function is the only thing that should overwrite a marker
*
* @param {ArraySearchMarker} marker
* @param {Item} p
* @param {number} index
*/
const overwriteMarker = (marker, p, index) => {
	marker.p.marker = false;
	marker.p = p;
	p.marker = true;
	marker.index = index;
	marker.timestamp = globalSearchMarkerTimestamp++;
};
/**
* @param {Array<ArraySearchMarker>} searchMarker
* @param {Item} p
* @param {number} index
*/
const markPosition = (searchMarker, p, index) => {
	if (searchMarker.length >= maxSearchMarker) {
		const marker = searchMarker.reduce((a, b) => a.timestamp < b.timestamp ? a : b);
		overwriteMarker(marker, p, index);
		return marker;
	} else {
		const pm = new ArraySearchMarker(p, index);
		searchMarker.push(pm);
		return pm;
	}
};
/**
* Search marker help us to find positions in the associative array faster.
*
* They speed up the process of finding a position without much bookkeeping.
*
* A maximum of `maxSearchMarker` objects are created.
*
* This function always returns a refreshed marker (updated timestamp)
*
* @param {AbstractType<any>} yarray
* @param {number} index
*/
const findMarker = (yarray, index) => {
	if (yarray._start === null || index === 0 || yarray._searchMarker === null) return null;
	const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b) => abs(index - a.index) < abs(index - b.index) ? a : b);
	let p = yarray._start;
	let pindex = 0;
	if (marker !== null) {
		p = marker.p;
		pindex = marker.index;
		refreshMarkerTimestamp(marker);
	}
	while (p.right !== null && pindex < index) {
		if (!p.deleted && p.countable) {
			if (index < pindex + p.length) break;
			pindex += p.length;
		}
		p = p.right;
	}
	while (p.left !== null && pindex > index) {
		p = p.left;
		if (!p.deleted && p.countable) pindex -= p.length;
	}
	while (p.left !== null && p.left.id.client === p.id.client && p.left.id.clock + p.left.length === p.id.clock) {
		p = p.left;
		if (!p.deleted && p.countable) pindex -= p.length;
	}
	if (marker !== null && abs(marker.index - pindex) < p.parent.length / maxSearchMarker) {
		overwriteMarker(marker, p, pindex);
		return marker;
	} else return markPosition(yarray._searchMarker, p, pindex);
};
/**
* Update markers when a change happened.
*
* This should be called before doing a deletion!
*
* @param {Array<ArraySearchMarker>} searchMarker
* @param {number} index
* @param {number} len If insertion, len is positive. If deletion, len is negative.
*/
const updateMarkerChanges = (searchMarker, index, len) => {
	for (let i = searchMarker.length - 1; i >= 0; i--) {
		const m = searchMarker[i];
		if (len > 0) {
			/**
			* @type {Item|null}
			*/
			let p = m.p;
			p.marker = false;
			while (p && (p.deleted || !p.countable)) {
				p = p.left;
				if (p && !p.deleted && p.countable) m.index -= p.length;
			}
			if (p === null || p.marker === true) {
				searchMarker.splice(i, 1);
				continue;
			}
			m.p = p;
			p.marker = true;
		}
		if (index < m.index || len > 0 && index === m.index) m.index = max(index, m.index + len);
	}
};
/**
* Call event listeners with an event. This will also add an event to all
* parents (for `.observeDeep` handlers).
*
* @template EventType
* @param {AbstractType<EventType>} type
* @param {Transaction} transaction
* @param {EventType} event
*/
const callTypeObservers = (type, transaction, event) => {
	const changedType = type;
	const changedParentTypes = transaction.changedParentTypes;
	while (true) {
		setIfUndefined(changedParentTypes, type, () => []).push(event);
		if (type._item === null) break;
		type = type._item.parent;
	}
	callEventHandlerListeners(changedType._eH, event, transaction);
};
/**
* @template EventType
* Abstract Yjs Type class
*/
var AbstractType = class {
	constructor() {
		/**
		* @type {Item|null}
		*/
		this._item = null;
		/**
		* @type {Map<string,Item>}
		*/
		this._map = /* @__PURE__ */ new Map();
		/**
		* @type {Item|null}
		*/
		this._start = null;
		/**
		* @type {Doc|null}
		*/
		this.doc = null;
		this._length = 0;
		/**
		* Event handlers
		* @type {EventHandler<EventType,Transaction>}
		*/
		this._eH = createEventHandler();
		/**
		* Deep event handlers
		* @type {EventHandler<Array<YEvent<any>>,Transaction>}
		*/
		this._dEH = createEventHandler();
		/**
		* @type {null | Array<ArraySearchMarker>}
		*/
		this._searchMarker = null;
	}
	/**
	* @return {AbstractType<any>|null}
	*/
	get parent() {
		return this._item ? this._item.parent : null;
	}
	/**
	* Integrate this type into the Yjs instance.
	*
	* * Save this struct in the os
	* * This type is sent to other client
	* * Observer functions are fired
	*
	* @param {Doc} y The Yjs instance
	* @param {Item|null} item
	*/
	_integrate(y, item) {
		this.doc = y;
		this._item = item;
	}
	/**
	* @return {AbstractType<EventType>}
	*/
	_copy() {
		throw methodUnimplemented();
	}
	/**
	* Makes a copy of this data type that can be included somewhere else.
	*
	* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
	*
	* @return {AbstractType<EventType>}
	*/
	clone() {
		throw methodUnimplemented();
	}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
	*/
	_write(_encoder) {}
	/**
	* The first non-deleted item
	*/
	get _first() {
		let n = this._start;
		while (n !== null && n.deleted) n = n.right;
		return n;
	}
	/**
	* Creates YEvent and calls all type observers.
	* Must be implemented by each type.
	*
	* @param {Transaction} transaction
	* @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
	*/
	_callObserver(transaction, _parentSubs) {
		if (!transaction.local && this._searchMarker) this._searchMarker.length = 0;
	}
	/**
	* Observe all events that are created on this type.
	*
	* @param {function(EventType, Transaction):void} f Observer function
	*/
	observe(f) {
		addEventHandlerListener(this._eH, f);
	}
	/**
	* Observe all events that are created by this type and its children.
	*
	* @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
	*/
	observeDeep(f) {
		addEventHandlerListener(this._dEH, f);
	}
	/**
	* Unregister an observer function.
	*
	* @param {function(EventType,Transaction):void} f Observer function
	*/
	unobserve(f) {
		removeEventHandlerListener(this._eH, f);
	}
	/**
	* Unregister an observer function.
	*
	* @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
	*/
	unobserveDeep(f) {
		removeEventHandlerListener(this._dEH, f);
	}
	/**
	* @abstract
	* @return {any}
	*/
	toJSON() {}
};
/**
* @param {AbstractType<any>} type
* @param {number} start
* @param {number} end
* @return {Array<any>}
*
* @private
* @function
*/
const typeListSlice = (type, start, end) => {
	type.doc ?? warnPrematureAccess();
	if (start < 0) start = type._length + start;
	if (end < 0) end = type._length + end;
	let len = end - start;
	const cs = [];
	let n = type._start;
	while (n !== null && len > 0) {
		if (n.countable && !n.deleted) {
			const c = n.content.getContent();
			if (c.length <= start) start -= c.length;
			else {
				for (let i = start; i < c.length && len > 0; i++) {
					cs.push(c[i]);
					len--;
				}
				start = 0;
			}
		}
		n = n.right;
	}
	return cs;
};
/**
* @param {AbstractType<any>} type
* @return {Array<any>}
*
* @private
* @function
*/
const typeListToArray = (type) => {
	type.doc ?? warnPrematureAccess();
	const cs = [];
	let n = type._start;
	while (n !== null) {
		if (n.countable && !n.deleted) {
			const c = n.content.getContent();
			for (let i = 0; i < c.length; i++) cs.push(c[i]);
		}
		n = n.right;
	}
	return cs;
};
/**
* @param {AbstractType<any>} type
* @param {Snapshot} snapshot
* @return {Array<any>}
*
* @private
* @function
*/
const typeListToArraySnapshot = (type, snapshot) => {
	const cs = [];
	let n = type._start;
	while (n !== null) {
		if (n.countable && isVisible(n, snapshot)) {
			const c = n.content.getContent();
			for (let i = 0; i < c.length; i++) cs.push(c[i]);
		}
		n = n.right;
	}
	return cs;
};
/**
* Executes a provided function on once on every element of this YArray.
*
* @param {AbstractType<any>} type
* @param {function(any,number,any):void} f A function to execute on every element of this YArray.
*
* @private
* @function
*/
const typeListForEach = (type, f) => {
	let index = 0;
	let n = type._start;
	type.doc ?? warnPrematureAccess();
	while (n !== null) {
		if (n.countable && !n.deleted) {
			const c = n.content.getContent();
			for (let i = 0; i < c.length; i++) f(c[i], index++, type);
		}
		n = n.right;
	}
};
/**
* @template C,R
* @param {AbstractType<any>} type
* @param {function(C,number,AbstractType<any>):R} f
* @return {Array<R>}
*
* @private
* @function
*/
const typeListMap = (type, f) => {
	/**
	* @type {Array<any>}
	*/
	const result = [];
	typeListForEach(type, (c, i) => {
		result.push(f(c, i, type));
	});
	return result;
};
/**
* @param {AbstractType<any>} type
* @return {IterableIterator<any>}
*
* @private
* @function
*/
const typeListCreateIterator = (type) => {
	let n = type._start;
	/**
	* @type {Array<any>|null}
	*/
	let currentContent = null;
	let currentContentIndex = 0;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next: () => {
			if (currentContent === null) {
				while (n !== null && n.deleted) n = n.right;
				if (n === null) return {
					done: true,
					value: void 0
				};
				currentContent = n.content.getContent();
				currentContentIndex = 0;
				n = n.right;
			}
			const value = currentContent[currentContentIndex++];
			if (currentContent.length <= currentContentIndex) currentContent = null;
			return {
				done: false,
				value
			};
		}
	};
};
/**
* @param {AbstractType<any>} type
* @param {number} index
* @return {any}
*
* @private
* @function
*/
const typeListGet = (type, index) => {
	type.doc ?? warnPrematureAccess();
	const marker = findMarker(type, index);
	let n = type._start;
	if (marker !== null) {
		n = marker.p;
		index -= marker.index;
	}
	for (; n !== null; n = n.right) if (!n.deleted && n.countable) {
		if (index < n.length) return n.content.getContent()[index];
		index -= n.length;
	}
};
/**
* @param {Transaction} transaction
* @param {AbstractType<any>} parent
* @param {Item?} referenceItem
* @param {Array<Object<string,any>|Array<any>|boolean|number|null|string|Uint8Array>} content
*
* @private
* @function
*/
const typeListInsertGenericsAfter = (transaction, parent, referenceItem, content) => {
	let left = referenceItem;
	const doc = transaction.doc;
	const ownClientId = doc.clientID;
	const store = doc.store;
	const right = referenceItem === null ? parent._start : referenceItem.right;
	/**
	* @type {Array<Object|Array<any>|number|null>}
	*/
	let jsonContent = [];
	const packJsonContent = () => {
		if (jsonContent.length > 0) {
			left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
			left.integrate(transaction, 0);
			jsonContent = [];
		}
	};
	content.forEach((c) => {
		if (c === null) jsonContent.push(c);
		else switch (c.constructor) {
			case Number:
			case Object:
			case Boolean:
			case Array:
			case String:
				jsonContent.push(c);
				break;
			default:
				packJsonContent();
				switch (c.constructor) {
					case Uint8Array:
					case ArrayBuffer:
						left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(c)));
						left.integrate(transaction, 0);
						break;
					case Doc:
						left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(c));
						left.integrate(transaction, 0);
						break;
					default: if (c instanceof AbstractType) {
						left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
						left.integrate(transaction, 0);
					} else throw new Error("Unexpected content type in insert operation");
				}
		}
	});
	packJsonContent();
};
const lengthExceeded = () => create$3("Length exceeded!");
/**
* @param {Transaction} transaction
* @param {AbstractType<any>} parent
* @param {number} index
* @param {Array<Object<string,any>|Array<any>|number|null|string|Uint8Array>} content
*
* @private
* @function
*/
const typeListInsertGenerics = (transaction, parent, index, content) => {
	if (index > parent._length) throw lengthExceeded();
	if (index === 0) {
		if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, index, content.length);
		return typeListInsertGenericsAfter(transaction, parent, null, content);
	}
	const startIndex = index;
	const marker = findMarker(parent, index);
	let n = parent._start;
	if (marker !== null) {
		n = marker.p;
		index -= marker.index;
		if (index === 0) {
			n = n.prev;
			index += n && n.countable && !n.deleted ? n.length : 0;
		}
	}
	for (; n !== null; n = n.right) if (!n.deleted && n.countable) {
		if (index <= n.length) {
			if (index < n.length) getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
			break;
		}
		index -= n.length;
	}
	if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, startIndex, content.length);
	return typeListInsertGenericsAfter(transaction, parent, n, content);
};
/**
* Pushing content is special as we generally want to push after the last item. So we don't have to update
* the search marker.
*
* @param {Transaction} transaction
* @param {AbstractType<any>} parent
* @param {Array<Object<string,any>|Array<any>|number|null|string|Uint8Array>} content
*
* @private
* @function
*/
const typeListPushGenerics = (transaction, parent, content) => {
	let n = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, {
		index: 0,
		p: parent._start
	}).p;
	if (n) while (n.right) n = n.right;
	return typeListInsertGenericsAfter(transaction, parent, n, content);
};
/**
* @param {Transaction} transaction
* @param {AbstractType<any>} parent
* @param {number} index
* @param {number} length
*
* @private
* @function
*/
const typeListDelete = (transaction, parent, index, length) => {
	if (length === 0) return;
	const startIndex = index;
	const startLength = length;
	const marker = findMarker(parent, index);
	let n = parent._start;
	if (marker !== null) {
		n = marker.p;
		index -= marker.index;
	}
	for (; n !== null && index > 0; n = n.right) if (!n.deleted && n.countable) {
		if (index < n.length) getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
		index -= n.length;
	}
	while (length > 0 && n !== null) {
		if (!n.deleted) {
			if (length < n.length) getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length));
			n.delete(transaction);
			length -= n.length;
		}
		n = n.right;
	}
	if (length > 0) throw lengthExceeded();
	if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, startIndex, -startLength + length);
};
/**
* @param {Transaction} transaction
* @param {AbstractType<any>} parent
* @param {string} key
*
* @private
* @function
*/
const typeMapDelete = (transaction, parent, key) => {
	const c = parent._map.get(key);
	if (c !== void 0) c.delete(transaction);
};
/**
* @param {Transaction} transaction
* @param {AbstractType<any>} parent
* @param {string} key
* @param {Object|number|null|Array<any>|string|Uint8Array|AbstractType<any>} value
*
* @private
* @function
*/
const typeMapSet = (transaction, parent, key, value) => {
	const left = parent._map.get(key) || null;
	const doc = transaction.doc;
	const ownClientId = doc.clientID;
	let content;
	if (value == null) content = new ContentAny([value]);
	else switch (value.constructor) {
		case Number:
		case Object:
		case Boolean:
		case Array:
		case String:
		case Date:
		case BigInt:
			content = new ContentAny([value]);
			break;
		case Uint8Array:
			content = new ContentBinary(value);
			break;
		case Doc:
			content = new ContentDoc(value);
			break;
		default: if (value instanceof AbstractType) content = new ContentType(value);
		else throw new Error("Unexpected content type");
	}
	new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
};
/**
* @param {AbstractType<any>} parent
* @param {string} key
* @return {Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined}
*
* @private
* @function
*/
const typeMapGet = (parent, key) => {
	parent.doc ?? warnPrematureAccess();
	const val = parent._map.get(key);
	return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
};
/**
* @param {AbstractType<any>} parent
* @return {Object<string,Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined>}
*
* @private
* @function
*/
const typeMapGetAll = (parent) => {
	/**
	* @type {Object<string,any>}
	*/
	const res = {};
	parent.doc ?? warnPrematureAccess();
	parent._map.forEach((value, key) => {
		if (!value.deleted) res[key] = value.content.getContent()[value.length - 1];
	});
	return res;
};
/**
* @param {AbstractType<any>} parent
* @param {string} key
* @return {boolean}
*
* @private
* @function
*/
const typeMapHas = (parent, key) => {
	parent.doc ?? warnPrematureAccess();
	const val = parent._map.get(key);
	return val !== void 0 && !val.deleted;
};
/**
* @param {AbstractType<any>} parent
* @param {Snapshot} snapshot
* @return {Object<string,Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined>}
*
* @private
* @function
*/
const typeMapGetAllSnapshot = (parent, snapshot) => {
	/**
	* @type {Object<string,any>}
	*/
	const res = {};
	parent._map.forEach((value, key) => {
		/**
		* @type {Item|null}
		*/
		let v = value;
		while (v !== null && (!snapshot.sv.has(v.id.client) || v.id.clock >= (snapshot.sv.get(v.id.client) || 0))) v = v.left;
		if (v !== null && isVisible(v, snapshot)) res[key] = v.content.getContent()[v.length - 1];
	});
	return res;
};
/**
* @param {AbstractType<any> & { _map: Map<string, Item> }} type
* @return {IterableIterator<Array<any>>}
*
* @private
* @function
*/
const createMapIterator = (type) => {
	type.doc ?? warnPrematureAccess();
	return iteratorFilter(
		type._map.entries(),
		/** @param {any} entry */
		(entry) => !entry[1].deleted
	);
};
/**
* @module YArray
*/
/**
* Event that describes the changes on a YArray
* @template T
* @extends YEvent<YArray<T>>
*/
var YArrayEvent = class extends YEvent {};
/**
* A shared Array implementation.
* @template T
* @extends AbstractType<YArrayEvent<T>>
* @implements {Iterable<T>}
*/
var YArray = class YArray extends AbstractType {
	constructor() {
		super();
		/**
		* @type {Array<any>?}
		* @private
		*/
		this._prelimContent = [];
		/**
		* @type {Array<ArraySearchMarker>}
		*/
		this._searchMarker = [];
	}
	/**
	* Construct a new YArray containing the specified items.
	* @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
	* @param {Array<T>} items
	* @return {YArray<T>}
	*/
	static from(items) {
		/**
		* @type {YArray<T>}
		*/
		const a = new YArray();
		a.push(items);
		return a;
	}
	/**
	* Integrate this type into the Yjs instance.
	*
	* * Save this struct in the os
	* * This type is sent to other client
	* * Observer functions are fired
	*
	* @param {Doc} y The Yjs instance
	* @param {Item} item
	*/
	_integrate(y, item) {
		super._integrate(y, item);
		this.insert(0, this._prelimContent);
		this._prelimContent = null;
	}
	/**
	* @return {YArray<T>}
	*/
	_copy() {
		return new YArray();
	}
	/**
	* Makes a copy of this data type that can be included somewhere else.
	*
	* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
	*
	* @return {YArray<T>}
	*/
	clone() {
		/**
		* @type {YArray<T>}
		*/
		const arr = new YArray();
		arr.insert(0, this.toArray().map((el) => el instanceof AbstractType ? el.clone() : el));
		return arr;
	}
	get length() {
		this.doc ?? warnPrematureAccess();
		return this._length;
	}
	/**
	* Creates YArrayEvent and calls observers.
	*
	* @param {Transaction} transaction
	* @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
	*/
	_callObserver(transaction, parentSubs) {
		super._callObserver(transaction, parentSubs);
		callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
	}
	/**
	* Inserts new content at an index.
	*
	* Important: This function expects an array of content. Not just a content
	* object. The reason for this "weirdness" is that inserting several elements
	* is very efficient when it is done as a single operation.
	*
	* @example
	*  // Insert character 'a' at position 0
	*  yarray.insert(0, ['a'])
	*  // Insert numbers 1, 2 at position 1
	*  yarray.insert(1, [1, 2])
	*
	* @param {number} index The index to insert content at.
	* @param {Array<T>} content The array of content
	*/
	insert(index, content) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeListInsertGenerics(transaction, this, index, content);
		});
		else
 /** @type {Array<any>} */ this._prelimContent.splice(index, 0, ...content);
	}
	/**
	* Appends content to this YArray.
	*
	* @param {Array<T>} content Array of content to append.
	*
	* @todo Use the following implementation in all types.
	*/
	push(content) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeListPushGenerics(transaction, this, content);
		});
		else
 /** @type {Array<any>} */ this._prelimContent.push(...content);
	}
	/**
	* Prepends content to this YArray.
	*
	* @param {Array<T>} content Array of content to prepend.
	*/
	unshift(content) {
		this.insert(0, content);
	}
	/**
	* Deletes elements starting from an index.
	*
	* @param {number} index Index at which to start deleting elements
	* @param {number} length The number of elements to remove. Defaults to 1.
	*/
	delete(index, length = 1) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeListDelete(transaction, this, index, length);
		});
		else
 /** @type {Array<any>} */ this._prelimContent.splice(index, length);
	}
	/**
	* Returns the i-th element from a YArray.
	*
	* @param {number} index The index of the element to return from the YArray
	* @return {T}
	*/
	get(index) {
		return typeListGet(this, index);
	}
	/**
	* Transforms this YArray to a JavaScript Array.
	*
	* @return {Array<T>}
	*/
	toArray() {
		return typeListToArray(this);
	}
	/**
	* Returns a portion of this YArray into a JavaScript Array selected
	* from start to end (end not included).
	*
	* @param {number} [start]
	* @param {number} [end]
	* @return {Array<T>}
	*/
	slice(start = 0, end = this.length) {
		return typeListSlice(this, start, end);
	}
	/**
	* Transforms this Shared Type to a JSON object.
	*
	* @return {Array<any>}
	*/
	toJSON() {
		return this.map((c) => c instanceof AbstractType ? c.toJSON() : c);
	}
	/**
	* Returns an Array with the result of calling a provided function on every
	* element of this YArray.
	*
	* @template M
	* @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
	* @return {Array<M>} A new array with each element being the result of the
	*                 callback function
	*/
	map(f) {
		return typeListMap(this, f);
	}
	/**
	* Executes a provided function once on every element of this YArray.
	*
	* @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
	*/
	forEach(f) {
		typeListForEach(this, f);
	}
	/**
	* @return {IterableIterator<T>}
	*/
	[Symbol.iterator]() {
		return typeListCreateIterator(this);
	}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	*/
	_write(encoder) {
		encoder.writeTypeRef(YArrayRefID);
	}
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
*
* @private
* @function
*/
const readYArray = (_decoder) => new YArray();
/**
* @module YMap
*/
/**
* @template T
* @extends YEvent<YMap<T>>
* Event that describes the changes on a YMap.
*/
var YMapEvent = class extends YEvent {
	/**
	* @param {YMap<T>} ymap The YArray that changed.
	* @param {Transaction} transaction
	* @param {Set<any>} subs The keys that changed.
	*/
	constructor(ymap, transaction, subs) {
		super(ymap, transaction);
		this.keysChanged = subs;
	}
};
/**
* @template MapType
* A shared Map implementation.
*
* @extends AbstractType<YMapEvent<MapType>>
* @implements {Iterable<[string, MapType]>}
*/
var YMap = class YMap extends AbstractType {
	/**
	*
	* @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
	*/
	constructor(entries) {
		super();
		/**
		* @type {Map<string,any>?}
		* @private
		*/
		this._prelimContent = null;
		if (entries === void 0) this._prelimContent = /* @__PURE__ */ new Map();
		else this._prelimContent = new Map(entries);
	}
	/**
	* Integrate this type into the Yjs instance.
	*
	* * Save this struct in the os
	* * This type is sent to other client
	* * Observer functions are fired
	*
	* @param {Doc} y The Yjs instance
	* @param {Item} item
	*/
	_integrate(y, item) {
		super._integrate(y, item);
		/** @type {Map<string, any>} */ this._prelimContent.forEach((value, key) => {
			this.set(key, value);
		});
		this._prelimContent = null;
	}
	/**
	* @return {YMap<MapType>}
	*/
	_copy() {
		return new YMap();
	}
	/**
	* Makes a copy of this data type that can be included somewhere else.
	*
	* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
	*
	* @return {YMap<MapType>}
	*/
	clone() {
		/**
		* @type {YMap<MapType>}
		*/
		const map = new YMap();
		this.forEach((value, key) => {
			map.set(key, value instanceof AbstractType ? value.clone() : value);
		});
		return map;
	}
	/**
	* Creates YMapEvent and calls observers.
	*
	* @param {Transaction} transaction
	* @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
	*/
	_callObserver(transaction, parentSubs) {
		callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
	}
	/**
	* Transforms this Shared Type to a JSON object.
	*
	* @return {Object<string,any>}
	*/
	toJSON() {
		this.doc ?? warnPrematureAccess();
		/**
		* @type {Object<string,MapType>}
		*/
		const map = {};
		this._map.forEach((item, key) => {
			if (!item.deleted) {
				const v = item.content.getContent()[item.length - 1];
				map[key] = v instanceof AbstractType ? v.toJSON() : v;
			}
		});
		return map;
	}
	/**
	* Returns the size of the YMap (count of key/value pairs)
	*
	* @return {number}
	*/
	get size() {
		return [...createMapIterator(this)].length;
	}
	/**
	* Returns the keys for each element in the YMap Type.
	*
	* @return {IterableIterator<string>}
	*/
	keys() {
		return iteratorMap(
			createMapIterator(this),
			/** @param {any} v */
			(v) => v[0]
		);
	}
	/**
	* Returns the values for each element in the YMap Type.
	*
	* @return {IterableIterator<MapType>}
	*/
	values() {
		return iteratorMap(
			createMapIterator(this),
			/** @param {any} v */
			(v) => v[1].content.getContent()[v[1].length - 1]
		);
	}
	/**
	* Returns an Iterator of [key, value] pairs
	*
	* @return {IterableIterator<[string, MapType]>}
	*/
	entries() {
		return iteratorMap(
			createMapIterator(this),
			/** @param {any} v */
			(v) => [v[0], v[1].content.getContent()[v[1].length - 1]]
		);
	}
	/**
	* Executes a provided function on once on every key-value pair.
	*
	* @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
	*/
	forEach(f) {
		this.doc ?? warnPrematureAccess();
		this._map.forEach((item, key) => {
			if (!item.deleted) f(item.content.getContent()[item.length - 1], key, this);
		});
	}
	/**
	* Returns an Iterator of [key, value] pairs
	*
	* @return {IterableIterator<[string, MapType]>}
	*/
	[Symbol.iterator]() {
		return this.entries();
	}
	/**
	* Remove a specified element from this YMap.
	*
	* @param {string} key The key of the element to remove.
	*/
	delete(key) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeMapDelete(transaction, this, key);
		});
		else
 /** @type {Map<string, any>} */ this._prelimContent.delete(key);
	}
	/**
	* Adds or updates an element with a specified key and value.
	* @template {MapType} VAL
	*
	* @param {string} key The key of the element to add to this YMap
	* @param {VAL} value The value of the element to add
	* @return {VAL}
	*/
	set(key, value) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeMapSet(transaction, this, key, value);
		});
		else
 /** @type {Map<string, any>} */ this._prelimContent.set(key, value);
		return value;
	}
	/**
	* Returns a specified element from this YMap.
	*
	* @param {string} key
	* @return {MapType|undefined}
	*/
	get(key) {
		return typeMapGet(this, key);
	}
	/**
	* Returns a boolean indicating whether the specified key exists or not.
	*
	* @param {string} key The key to test.
	* @return {boolean}
	*/
	has(key) {
		return typeMapHas(this, key);
	}
	/**
	* Removes all elements from this YMap.
	*/
	clear() {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			this.forEach(function(_value, key, map) {
				typeMapDelete(transaction, map, key);
			});
		});
		else
 /** @type {Map<string, any>} */ this._prelimContent.clear();
	}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	*/
	_write(encoder) {
		encoder.writeTypeRef(YMapRefID);
	}
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
*
* @private
* @function
*/
const readYMap = (_decoder) => new YMap();
/**
* @module YText
*/
/**
* @param {any} a
* @param {any} b
* @return {boolean}
*/
const equalAttrs$1 = (a, b) => a === b || typeof a === "object" && typeof b === "object" && a && b && equalFlat(a, b);
var ItemTextListPosition = class {
	/**
	* @param {Item|null} left
	* @param {Item|null} right
	* @param {number} index
	* @param {Map<string,any>} currentAttributes
	*/
	constructor(left, right, index, currentAttributes) {
		this.left = left;
		this.right = right;
		this.index = index;
		this.currentAttributes = currentAttributes;
	}
	/**
	* Only call this if you know that this.right is defined
	*/
	forward() {
		if (this.right === null) unexpectedCase();
		switch (this.right.content.constructor) {
			case ContentFormat:
				if (!this.right.deleted) updateCurrentAttributes(this.currentAttributes, this.right.content);
				break;
			default: if (!this.right.deleted) this.index += this.right.length;
		}
		this.left = this.right;
		this.right = this.right.right;
	}
};
/**
* @param {Transaction} transaction
* @param {ItemTextListPosition} pos
* @param {number} count steps to move forward
* @return {ItemTextListPosition}
*
* @private
* @function
*/
const findNextPosition = (transaction, pos, count) => {
	while (pos.right !== null && count > 0) {
		switch (pos.right.content.constructor) {
			case ContentFormat:
				if (!pos.right.deleted) updateCurrentAttributes(pos.currentAttributes, pos.right.content);
				break;
			default: if (!pos.right.deleted) {
				if (count < pos.right.length) getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
				pos.index += pos.right.length;
				count -= pos.right.length;
			}
		}
		pos.left = pos.right;
		pos.right = pos.right.right;
	}
	return pos;
};
/**
* @param {Transaction} transaction
* @param {AbstractType<any>} parent
* @param {number} index
* @param {boolean} useSearchMarker
* @return {ItemTextListPosition}
*
* @private
* @function
*/
const findPosition = (transaction, parent, index, useSearchMarker) => {
	const currentAttributes = /* @__PURE__ */ new Map();
	const marker = useSearchMarker ? findMarker(parent, index) : null;
	if (marker) {
		const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
		return findNextPosition(transaction, pos, index - marker.index);
	} else {
		const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
		return findNextPosition(transaction, pos, index);
	}
};
/**
* Negate applied formats
*
* @param {Transaction} transaction
* @param {AbstractType<any>} parent
* @param {ItemTextListPosition} currPos
* @param {Map<string,any>} negatedAttributes
*
* @private
* @function
*/
const insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes) => {
	while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs$1(
		negatedAttributes.get(
			/** @type {ContentFormat} */
			currPos.right.content.key
		),
		/** @type {ContentFormat} */
		currPos.right.content.value
	))) {
		if (!currPos.right.deleted) negatedAttributes.delete(
			/** @type {ContentFormat} */
			currPos.right.content.key
		);
		currPos.forward();
	}
	const doc = transaction.doc;
	const ownClientId = doc.clientID;
	negatedAttributes.forEach((val, key) => {
		const left = currPos.left;
		const right = currPos.right;
		const nextFormat = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
		nextFormat.integrate(transaction, 0);
		currPos.right = nextFormat;
		currPos.forward();
	});
};
/**
* @param {Map<string,any>} currentAttributes
* @param {ContentFormat} format
*
* @private
* @function
*/
const updateCurrentAttributes = (currentAttributes, format) => {
	const { key, value } = format;
	if (value === null) currentAttributes.delete(key);
	else currentAttributes.set(key, value);
};
/**
* @param {ItemTextListPosition} currPos
* @param {Object<string,any>} attributes
*
* @private
* @function
*/
const minimizeAttributeChanges = (currPos, attributes) => {
	while (true) {
		if (currPos.right === null) break;
		else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs$1(
			attributes[currPos.right.content.key] ?? null,
			/** @type {ContentFormat} */
			currPos.right.content.value
		));
		else break;
		currPos.forward();
	}
};
/**
* @param {Transaction} transaction
* @param {AbstractType<any>} parent
* @param {ItemTextListPosition} currPos
* @param {Object<string,any>} attributes
* @return {Map<string,any>}
*
* @private
* @function
**/
const insertAttributes = (transaction, parent, currPos, attributes) => {
	const doc = transaction.doc;
	const ownClientId = doc.clientID;
	const negatedAttributes = /* @__PURE__ */ new Map();
	for (const key in attributes) {
		const val = attributes[key];
		const currentVal = currPos.currentAttributes.get(key) ?? null;
		if (!equalAttrs$1(currentVal, val)) {
			negatedAttributes.set(key, currentVal);
			const { left, right } = currPos;
			currPos.right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
			currPos.right.integrate(transaction, 0);
			currPos.forward();
		}
	}
	return negatedAttributes;
};
/**
* @param {Transaction} transaction
* @param {AbstractType<any>} parent
* @param {ItemTextListPosition} currPos
* @param {string|object|AbstractType<any>} text
* @param {Object<string,any>} attributes
*
* @private
* @function
**/
const insertText = (transaction, parent, currPos, text, attributes) => {
	currPos.currentAttributes.forEach((_val, key) => {
		if (attributes[key] === void 0) attributes[key] = null;
	});
	const doc = transaction.doc;
	const ownClientId = doc.clientID;
	minimizeAttributeChanges(currPos, attributes);
	const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
	const content = text.constructor === String ? new ContentString(text) : text instanceof AbstractType ? new ContentType(text) : new ContentEmbed(text);
	let { left, right, index } = currPos;
	if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
	right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
	right.integrate(transaction, 0);
	currPos.right = right;
	currPos.index = index;
	currPos.forward();
	insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
/**
* @param {Transaction} transaction
* @param {AbstractType<any>} parent
* @param {ItemTextListPosition} currPos
* @param {number} length
* @param {Object<string,any>} attributes
*
* @private
* @function
*/
const formatText = (transaction, parent, currPos, length, attributes) => {
	const doc = transaction.doc;
	const ownClientId = doc.clientID;
	minimizeAttributeChanges(currPos, attributes);
	const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
	iterationLoop: while (currPos.right !== null && (length > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
		if (!currPos.right.deleted) switch (currPos.right.content.constructor) {
			case ContentFormat: {
				const { key, value } = currPos.right.content;
				const attr = attributes[key];
				if (attr !== void 0) {
					if (equalAttrs$1(attr, value)) negatedAttributes.delete(key);
					else {
						if (length === 0) break iterationLoop;
						negatedAttributes.set(key, value);
					}
					currPos.right.delete(transaction);
				} else currPos.currentAttributes.set(key, value);
				break;
			}
			default:
				if (length < currPos.right.length) getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length));
				length -= currPos.right.length;
		}
		currPos.forward();
	}
	if (length > 0) {
		let newlines = "";
		for (; length > 0; length--) newlines += "\n";
		currPos.right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
		currPos.right.integrate(transaction, 0);
		currPos.forward();
	}
	insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
/**
* Call this function after string content has been deleted in order to
* clean up formatting Items.
*
* @param {Transaction} transaction
* @param {Item} start
* @param {Item|null} curr exclusive end, automatically iterates to the next Content Item
* @param {Map<string,any>} startAttributes
* @param {Map<string,any>} currAttributes
* @return {number} The amount of formatting Items deleted.
*
* @function
*/
const cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes) => {
	/**
	* @type {Item|null}
	*/
	let end = start;
	/**
	* @type {Map<string,ContentFormat>}
	*/
	const endFormats = create$5();
	while (end && (!end.countable || end.deleted)) {
		if (!end.deleted && end.content.constructor === ContentFormat) {
			const cf = end.content;
			endFormats.set(cf.key, cf);
		}
		end = end.right;
	}
	let cleanups = 0;
	let reachedCurr = false;
	while (start !== end) {
		if (curr === start) reachedCurr = true;
		if (!start.deleted) {
			const content = start.content;
			switch (content.constructor) {
				case ContentFormat: {
					const { key, value } = content;
					const startAttrValue = startAttributes.get(key) ?? null;
					if (endFormats.get(key) !== content || startAttrValue === value) {
						start.delete(transaction);
						cleanups++;
						if (!reachedCurr && (currAttributes.get(key) ?? null) === value && startAttrValue !== value) if (startAttrValue === null) currAttributes.delete(key);
						else currAttributes.set(key, startAttrValue);
					}
					if (!reachedCurr && !start.deleted) updateCurrentAttributes(currAttributes, content);
					break;
				}
			}
		}
		start = start.right;
	}
	return cleanups;
};
/**
* @param {Transaction} transaction
* @param {Item | null} item
*/
const cleanupContextlessFormattingGap = (transaction, item) => {
	while (item && item.right && (item.right.deleted || !item.right.countable)) item = item.right;
	const attrs = /* @__PURE__ */ new Set();
	while (item && (item.deleted || !item.countable)) {
		if (!item.deleted && item.content.constructor === ContentFormat) {
			const key = item.content.key;
			if (attrs.has(key)) item.delete(transaction);
			else attrs.add(key);
		}
		item = item.left;
	}
};
/**
* This function is experimental and subject to change / be removed.
*
* Ideally, we don't need this function at all. Formatting attributes should be cleaned up
* automatically after each change. This function iterates twice over the complete YText type
* and removes unnecessary formatting attributes. This is also helpful for testing.
*
* This function won't be exported anymore as soon as there is confidence that the YText type works as intended.
*
* @param {YText} type
* @return {number} How many formatting attributes have been cleaned up.
*/
const cleanupYTextFormatting = (type) => {
	let res = 0;
	transact(type.doc, (transaction) => {
		let start = type._start;
		let end = type._start;
		let startAttributes = create$5();
		const currentAttributes = copy(startAttributes);
		while (end) {
			if (end.deleted === false) switch (end.content.constructor) {
				case ContentFormat:
					updateCurrentAttributes(currentAttributes, end.content);
					break;
				default:
					res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
					startAttributes = copy(currentAttributes);
					start = end;
			}
			end = end.right;
		}
	});
	return res;
};
/**
* This will be called by the transaction once the event handlers are called to potentially cleanup
* formatting attributes.
*
* @param {Transaction} transaction
*/
const cleanupYTextAfterTransaction = (transaction) => {
	/**
	* @type {Set<YText>}
	*/
	const needFullCleanup = /* @__PURE__ */ new Set();
	const doc = transaction.doc;
	for (const [client, afterClock] of transaction.afterState.entries()) {
		const clock = transaction.beforeState.get(client) || 0;
		if (afterClock === clock) continue;
		iterateStructs(transaction, doc.store.clients.get(client), clock, afterClock, (item) => {
			if (!item.deleted && item.content.constructor === ContentFormat && item.constructor !== GC) needFullCleanup.add(
				/** @type {any} */
				item.parent
			);
		});
	}
	transact(doc, (t) => {
		iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
			if (item instanceof GC || !item.parent._hasFormatting || needFullCleanup.has(item.parent)) return;
			const parent = item.parent;
			if (item.content.constructor === ContentFormat) needFullCleanup.add(parent);
			else cleanupContextlessFormattingGap(t, item);
		});
		for (const yText of needFullCleanup) cleanupYTextFormatting(yText);
	});
};
/**
* @param {Transaction} transaction
* @param {ItemTextListPosition} currPos
* @param {number} length
* @return {ItemTextListPosition}
*
* @private
* @function
*/
const deleteText = (transaction, currPos, length) => {
	const startLength = length;
	const startAttrs = copy(currPos.currentAttributes);
	const start = currPos.right;
	while (length > 0 && currPos.right !== null) {
		if (currPos.right.deleted === false) switch (currPos.right.content.constructor) {
			case ContentType:
			case ContentEmbed:
			case ContentString:
				if (length < currPos.right.length) getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length));
				length -= currPos.right.length;
				currPos.right.delete(transaction);
		}
		currPos.forward();
	}
	if (start) cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
	const parent = (currPos.left || currPos.right).parent;
	if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length);
	return currPos;
};
/**
* The Quill Delta format represents changes on a text document with
* formatting information. For more information visit {@link https://quilljs.com/docs/delta/|Quill Delta}
*
* @example
*   {
*     ops: [
*       { insert: 'Gandalf', attributes: { bold: true } },
*       { insert: ' the ' },
*       { insert: 'Grey', attributes: { color: '#cccccc' } }
*     ]
*   }
*
*/
/**
* Attributes that can be assigned to a selection of text.
*
* @example
*   {
*     bold: true,
*     font-size: '40px'
*   }
*
* @typedef {Object} TextAttributes
*/
/**
* @extends YEvent<YText>
* Event that describes the changes on a YText type.
*/
var YTextEvent = class extends YEvent {
	/**
	* @param {YText} ytext
	* @param {Transaction} transaction
	* @param {Set<any>} subs The keys that changed
	*/
	constructor(ytext, transaction, subs) {
		super(ytext, transaction);
		/**
		* Whether the children changed.
		* @type {Boolean}
		* @private
		*/
		this.childListChanged = false;
		/**
		* Set of all changed attributes.
		* @type {Set<string>}
		*/
		this.keysChanged = /* @__PURE__ */ new Set();
		subs.forEach((sub) => {
			if (sub === null) this.childListChanged = true;
			else this.keysChanged.add(sub);
		});
	}
	/**
	* @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
	*/
	get changes() {
		if (this._changes === null) {
			/**
			* @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string|AbstractType<any>|object, delete?:number, retain?:number}>}}
			*/
			const changes = {
				keys: this.keys,
				delta: this.delta,
				added: /* @__PURE__ */ new Set(),
				deleted: /* @__PURE__ */ new Set()
			};
			this._changes = changes;
		}
		return this._changes;
	}
	/**
	* Compute the changes in the delta format.
	* A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
	*
	* @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
	*
	* @public
	*/
	get delta() {
		if (this._delta === null) {
			const y = this.target.doc;
			/**
			* @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
			*/
			const delta = [];
			transact(y, (transaction) => {
				const currentAttributes = /* @__PURE__ */ new Map();
				const oldAttributes = /* @__PURE__ */ new Map();
				let item = this.target._start;
				/**
				* @type {string?}
				*/
				let action = null;
				/**
				* @type {Object<string,any>}
				*/
				const attributes = {};
				/**
				* @type {string|object}
				*/
				let insert = "";
				let retain = 0;
				let deleteLen = 0;
				const addOp = () => {
					if (action !== null) {
						/**
						* @type {any}
						*/
						let op = null;
						switch (action) {
							case "delete":
								if (deleteLen > 0) op = { delete: deleteLen };
								deleteLen = 0;
								break;
							case "insert":
								if (typeof insert === "object" || insert.length > 0) {
									op = { insert };
									if (currentAttributes.size > 0) {
										op.attributes = {};
										currentAttributes.forEach((value, key) => {
											if (value !== null) op.attributes[key] = value;
										});
									}
								}
								insert = "";
								break;
							case "retain":
								if (retain > 0) {
									op = { retain };
									if (!isEmpty(attributes)) op.attributes = assign({}, attributes);
								}
								retain = 0;
						}
						if (op) delta.push(op);
						action = null;
					}
				};
				while (item !== null) {
					switch (item.content.constructor) {
						case ContentType:
						case ContentEmbed:
							if (this.adds(item)) {
								if (!this.deletes(item)) {
									addOp();
									action = "insert";
									insert = item.content.getContent()[0];
									addOp();
								}
							} else if (this.deletes(item)) {
								if (action !== "delete") {
									addOp();
									action = "delete";
								}
								deleteLen += 1;
							} else if (!item.deleted) {
								if (action !== "retain") {
									addOp();
									action = "retain";
								}
								retain += 1;
							}
							break;
						case ContentString:
							if (this.adds(item)) {
								if (!this.deletes(item)) {
									if (action !== "insert") {
										addOp();
										action = "insert";
									}
									insert += item.content.str;
								}
							} else if (this.deletes(item)) {
								if (action !== "delete") {
									addOp();
									action = "delete";
								}
								deleteLen += item.length;
							} else if (!item.deleted) {
								if (action !== "retain") {
									addOp();
									action = "retain";
								}
								retain += item.length;
							}
							break;
						case ContentFormat: {
							const { key, value } = item.content;
							if (this.adds(item)) {
								if (!this.deletes(item)) {
									const curVal = currentAttributes.get(key) ?? null;
									if (!equalAttrs$1(curVal, value)) {
										if (action === "retain") addOp();
										if (equalAttrs$1(value, oldAttributes.get(key) ?? null)) delete attributes[key];
										else attributes[key] = value;
									} else if (value !== null) item.delete(transaction);
								}
							} else if (this.deletes(item)) {
								oldAttributes.set(key, value);
								const curVal = currentAttributes.get(key) ?? null;
								if (!equalAttrs$1(curVal, value)) {
									if (action === "retain") addOp();
									attributes[key] = curVal;
								}
							} else if (!item.deleted) {
								oldAttributes.set(key, value);
								const attr = attributes[key];
								if (attr !== void 0) {
									if (!equalAttrs$1(attr, value)) {
										if (action === "retain") addOp();
										if (value === null) delete attributes[key];
										else attributes[key] = value;
									} else if (attr !== null) item.delete(transaction);
								}
							}
							if (!item.deleted) {
								if (action === "insert") addOp();
								updateCurrentAttributes(currentAttributes, item.content);
							}
							break;
						}
					}
					item = item.right;
				}
				addOp();
				while (delta.length > 0) {
					const lastOp = delta[delta.length - 1];
					if (lastOp.retain !== void 0 && lastOp.attributes === void 0) delta.pop();
					else break;
				}
			});
			this._delta = delta;
		}
		return this._delta;
	}
};
/**
* Type that represents text with formatting information.
*
* This type replaces y-richtext as this implementation is able to handle
* block formats (format information on a paragraph), embeds (complex elements
* like pictures and videos), and text formats (**bold**, *italic*).
*
* @extends AbstractType<YTextEvent>
*/
var YText = class YText extends AbstractType {
	/**
	* @param {String} [string] The initial value of the YText.
	*/
	constructor(string) {
		super();
		/**
		* Array of pending operations on this type
		* @type {Array<function():void>?}
		*/
		this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
		/**
		* @type {Array<ArraySearchMarker>|null}
		*/
		this._searchMarker = [];
		/**
		* Whether this YText contains formatting attributes.
		* This flag is updated when a formatting item is integrated (see ContentFormat.integrate)
		*/
		this._hasFormatting = false;
	}
	/**
	* Number of characters of this text type.
	*
	* @type {number}
	*/
	get length() {
		this.doc ?? warnPrematureAccess();
		return this._length;
	}
	/**
	* @param {Doc} y
	* @param {Item} item
	*/
	_integrate(y, item) {
		super._integrate(y, item);
		try {
			/** @type {Array<function>} */ this._pending.forEach((f) => f());
		} catch (e) {
			console.error(e);
		}
		this._pending = null;
	}
	_copy() {
		return new YText();
	}
	/**
	* Makes a copy of this data type that can be included somewhere else.
	*
	* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
	*
	* @return {YText}
	*/
	clone() {
		const text = new YText();
		text.applyDelta(this.toDelta());
		return text;
	}
	/**
	* Creates YTextEvent and calls observers.
	*
	* @param {Transaction} transaction
	* @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
	*/
	_callObserver(transaction, parentSubs) {
		super._callObserver(transaction, parentSubs);
		const event = new YTextEvent(this, transaction, parentSubs);
		callTypeObservers(this, transaction, event);
		if (!transaction.local && this._hasFormatting) transaction._needFormattingCleanup = true;
	}
	/**
	* Returns the unformatted string representation of this YText type.
	*
	* @public
	*/
	toString() {
		this.doc ?? warnPrematureAccess();
		let str = "";
		/**
		* @type {Item|null}
		*/
		let n = this._start;
		while (n !== null) {
			if (!n.deleted && n.countable && n.content.constructor === ContentString) str += n.content.str;
			n = n.right;
		}
		return str;
	}
	/**
	* Returns the unformatted string representation of this YText type.
	*
	* @return {string}
	* @public
	*/
	toJSON() {
		return this.toString();
	}
	/**
	* Apply a {@link Delta} on this shared YText type.
	*
	* @param {Array<any>} delta The changes to apply on this element.
	* @param {object}  opts
	* @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
	*
	*
	* @public
	*/
	applyDelta(delta, { sanitize = true } = {}) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
			for (let i = 0; i < delta.length; i++) {
				const op = delta[i];
				if (op.insert !== void 0) {
					const ins = !sanitize && typeof op.insert === "string" && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
					if (typeof ins !== "string" || ins.length > 0) insertText(transaction, this, currPos, ins, op.attributes || {});
				} else if (op.retain !== void 0) formatText(transaction, this, currPos, op.retain, op.attributes || {});
				else if (op.delete !== void 0) deleteText(transaction, currPos, op.delete);
			}
		});
		else
 /** @type {Array<function>} */ this._pending.push(() => this.applyDelta(delta));
	}
	/**
	* Returns the Delta representation of this YText type.
	*
	* @param {Snapshot} [snapshot]
	* @param {Snapshot} [prevSnapshot]
	* @param {function('removed' | 'added', ID):any} [computeYChange]
	* @return {any} The Delta representation of this type.
	*
	* @public
	*/
	toDelta(snapshot, prevSnapshot, computeYChange) {
		this.doc ?? warnPrematureAccess();
		/**
		* @type{Array<any>}
		*/
		const ops = [];
		const currentAttributes = /* @__PURE__ */ new Map();
		const doc = this.doc;
		let str = "";
		let n = this._start;
		function packStr() {
			if (str.length > 0) {
				/**
				* @type {Object<string,any>}
				*/
				const attributes = {};
				let addAttributes = false;
				currentAttributes.forEach((value, key) => {
					addAttributes = true;
					attributes[key] = value;
				});
				/**
				* @type {Object<string,any>}
				*/
				const op = { insert: str };
				if (addAttributes) op.attributes = attributes;
				ops.push(op);
				str = "";
			}
		}
		const computeDelta = () => {
			while (n !== null) {
				if (isVisible(n, snapshot) || prevSnapshot !== void 0 && isVisible(n, prevSnapshot)) switch (n.content.constructor) {
					case ContentString: {
						const cur = currentAttributes.get("ychange");
						if (snapshot !== void 0 && !isVisible(n, snapshot)) {
							if (cur === void 0 || cur.user !== n.id.client || cur.type !== "removed") {
								packStr();
								currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n.id) : { type: "removed" });
							}
						} else if (prevSnapshot !== void 0 && !isVisible(n, prevSnapshot)) {
							if (cur === void 0 || cur.user !== n.id.client || cur.type !== "added") {
								packStr();
								currentAttributes.set("ychange", computeYChange ? computeYChange("added", n.id) : { type: "added" });
							}
						} else if (cur !== void 0) {
							packStr();
							currentAttributes.delete("ychange");
						}
						str += n.content.str;
						break;
					}
					case ContentType:
					case ContentEmbed: {
						packStr();
						/**
						* @type {Object<string,any>}
						*/
						const op = { insert: n.content.getContent()[0] };
						if (currentAttributes.size > 0) {
							const attrs = {};
							op.attributes = attrs;
							currentAttributes.forEach((value, key) => {
								attrs[key] = value;
							});
						}
						ops.push(op);
						break;
					}
					case ContentFormat: if (isVisible(n, snapshot)) {
						packStr();
						updateCurrentAttributes(currentAttributes, n.content);
					}
				}
				n = n.right;
			}
			packStr();
		};
		if (snapshot || prevSnapshot) transact(doc, (transaction) => {
			if (snapshot) splitSnapshotAffectedStructs(transaction, snapshot);
			if (prevSnapshot) splitSnapshotAffectedStructs(transaction, prevSnapshot);
			computeDelta();
		}, "cleanup");
		else computeDelta();
		return ops;
	}
	/**
	* Insert text at a given index.
	*
	* @param {number} index The index at which to start inserting.
	* @param {String} text The text to insert at the specified position.
	* @param {TextAttributes} [attributes] Optionally define some formatting
	*                                    information to apply on the inserted
	*                                    Text.
	* @public
	*/
	insert(index, text, attributes) {
		if (text.length <= 0) return;
		const y = this.doc;
		if (y !== null) transact(y, (transaction) => {
			const pos = findPosition(transaction, this, index, !attributes);
			if (!attributes) {
				attributes = {};
				pos.currentAttributes.forEach((v, k) => {
					attributes[k] = v;
				});
			}
			insertText(transaction, this, pos, text, attributes);
		});
		else
 /** @type {Array<function>} */ this._pending.push(() => this.insert(index, text, attributes));
	}
	/**
	* Inserts an embed at a index.
	*
	* @param {number} index The index to insert the embed at.
	* @param {Object | AbstractType<any>} embed The Object that represents the embed.
	* @param {TextAttributes} [attributes] Attribute information to apply on the
	*                                    embed
	*
	* @public
	*/
	insertEmbed(index, embed, attributes) {
		const y = this.doc;
		if (y !== null) transact(y, (transaction) => {
			const pos = findPosition(transaction, this, index, !attributes);
			insertText(transaction, this, pos, embed, attributes || {});
		});
		else
 /** @type {Array<function>} */ this._pending.push(() => this.insertEmbed(index, embed, attributes || {}));
	}
	/**
	* Deletes text starting from an index.
	*
	* @param {number} index Index at which to start deleting.
	* @param {number} length The number of characters to remove. Defaults to 1.
	*
	* @public
	*/
	delete(index, length) {
		if (length === 0) return;
		const y = this.doc;
		if (y !== null) transact(y, (transaction) => {
			deleteText(transaction, findPosition(transaction, this, index, true), length);
		});
		else
 /** @type {Array<function>} */ this._pending.push(() => this.delete(index, length));
	}
	/**
	* Assigns properties to a range of text.
	*
	* @param {number} index The position where to start formatting.
	* @param {number} length The amount of characters to assign properties to.
	* @param {TextAttributes} attributes Attribute information to apply on the
	*                                    text.
	*
	* @public
	*/
	format(index, length, attributes) {
		if (length === 0) return;
		const y = this.doc;
		if (y !== null) transact(y, (transaction) => {
			const pos = findPosition(transaction, this, index, false);
			if (pos.right === null) return;
			formatText(transaction, this, pos, length, attributes);
		});
		else
 /** @type {Array<function>} */ this._pending.push(() => this.format(index, length, attributes));
	}
	/**
	* Removes an attribute.
	*
	* @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
	*
	* @param {String} attributeName The attribute name that is to be removed.
	*
	* @public
	*/
	removeAttribute(attributeName) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeMapDelete(transaction, this, attributeName);
		});
		else
 /** @type {Array<function>} */ this._pending.push(() => this.removeAttribute(attributeName));
	}
	/**
	* Sets or updates an attribute.
	*
	* @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
	*
	* @param {String} attributeName The attribute name that is to be set.
	* @param {any} attributeValue The attribute value that is to be set.
	*
	* @public
	*/
	setAttribute(attributeName, attributeValue) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeMapSet(transaction, this, attributeName, attributeValue);
		});
		else
 /** @type {Array<function>} */ this._pending.push(() => this.setAttribute(attributeName, attributeValue));
	}
	/**
	* Returns an attribute value that belongs to the attribute name.
	*
	* @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
	*
	* @param {String} attributeName The attribute name that identifies the
	*                               queried value.
	* @return {any} The queried attribute value.
	*
	* @public
	*/
	getAttribute(attributeName) {
		return typeMapGet(this, attributeName);
	}
	/**
	* Returns all attribute name/value pairs in a JSON Object.
	*
	* @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
	*
	* @return {Object<string, any>} A JSON Object that describes the attributes.
	*
	* @public
	*/
	getAttributes() {
		return typeMapGetAll(this);
	}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	*/
	_write(encoder) {
		encoder.writeTypeRef(YTextRefID);
	}
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
* @return {YText}
*
* @private
* @function
*/
const readYText = (_decoder) => new YText();
/**
* @module YXml
*/
/**
* Define the elements to which a set of CSS queries apply.
* {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors|CSS_Selectors}
*
* @example
*   query = '.classSelector'
*   query = 'nodeSelector'
*   query = '#idSelector'
*
* @typedef {string} CSS_Selector
*/
/**
* Dom filter function.
*
* @callback domFilter
* @param {string} nodeName The nodeName of the element
* @param {Map} attributes The map of attributes.
* @return {boolean} Whether to include the Dom node in the YXmlElement.
*/
/**
* Represents a subset of the nodes of a YXmlElement / YXmlFragment and a
* position within them.
*
* Can be created with {@link YXmlFragment#createTreeWalker}
*
* @public
* @implements {Iterable<YXmlElement|YXmlText|YXmlElement|YXmlHook>}
*/
var YXmlTreeWalker = class {
	/**
	* @param {YXmlFragment | YXmlElement} root
	* @param {function(AbstractType<any>):boolean} [f]
	*/
	constructor(root, f = () => true) {
		this._filter = f;
		this._root = root;
		/**
		* @type {Item}
		*/
		this._currentNode = root._start;
		this._firstCall = true;
		root.doc ?? warnPrematureAccess();
	}
	[Symbol.iterator]() {
		return this;
	}
	/**
	* Get the next node.
	*
	* @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
	*
	* @public
	*/
	next() {
		/**
		* @type {Item|null}
		*/
		let n = this._currentNode;
		let type = n && n.content && n.content.type;
		if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) do {
			type = n.content.type;
			if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) n = type._start;
			else while (n !== null) {
				/**
				* @type {Item | null}
				*/
				const nxt = n.next;
				if (nxt !== null) {
					n = nxt;
					break;
				} else if (n.parent === this._root) n = null;
				else n = n.parent._item;
			}
		} while (n !== null && (n.deleted || !this._filter(
			/** @type {ContentType} */
			n.content.type
		)));
		this._firstCall = false;
		if (n === null) return {
			value: void 0,
			done: true
		};
		this._currentNode = n;
		return {
			value: /** @type {any} */ n.content.type,
			done: false
		};
	}
};
/**
* Represents a list of {@link YXmlElement}.and {@link YXmlText} types.
* A YxmlFragment is similar to a {@link YXmlElement}, but it does not have a
* nodeName and it does not have attributes. Though it can be bound to a DOM
* element - in this case the attributes and the nodeName are not shared.
*
* @public
* @extends AbstractType<YXmlEvent>
*/
var YXmlFragment = class YXmlFragment extends AbstractType {
	constructor() {
		super();
		/**
		* @type {Array<any>|null}
		*/
		this._prelimContent = [];
	}
	/**
	* @type {YXmlElement|YXmlText|null}
	*/
	get firstChild() {
		const first = this._first;
		return first ? first.content.getContent()[0] : null;
	}
	/**
	* Integrate this type into the Yjs instance.
	*
	* * Save this struct in the os
	* * This type is sent to other client
	* * Observer functions are fired
	*
	* @param {Doc} y The Yjs instance
	* @param {Item} item
	*/
	_integrate(y, item) {
		super._integrate(y, item);
		this.insert(0, this._prelimContent);
		this._prelimContent = null;
	}
	_copy() {
		return new YXmlFragment();
	}
	/**
	* Makes a copy of this data type that can be included somewhere else.
	*
	* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
	*
	* @return {YXmlFragment}
	*/
	clone() {
		const el = new YXmlFragment();
		el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
		return el;
	}
	get length() {
		this.doc ?? warnPrematureAccess();
		return this._prelimContent === null ? this._length : this._prelimContent.length;
	}
	/**
	* Create a subtree of childNodes.
	*
	* @example
	* const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
	* for (let node in walker) {
	*   // `node` is a div node
	*   nop(node)
	* }
	*
	* @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
	*                          returns a Boolean indicating whether the child
	*                          is to be included in the subtree.
	* @return {YXmlTreeWalker} A subtree and a position within it.
	*
	* @public
	*/
	createTreeWalker(filter) {
		return new YXmlTreeWalker(this, filter);
	}
	/**
	* Returns the first YXmlElement that matches the query.
	* Similar to DOM's {@link querySelector}.
	*
	* Query support:
	*   - tagname
	* TODO:
	*   - id
	*   - attribute
	*
	* @param {CSS_Selector} query The query on the children.
	* @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
	*
	* @public
	*/
	querySelector(query) {
		query = query.toUpperCase();
		const next = new YXmlTreeWalker(this, (element) => element.nodeName && element.nodeName.toUpperCase() === query).next();
		if (next.done) return null;
		else return next.value;
	}
	/**
	* Returns all YXmlElements that match the query.
	* Similar to Dom's {@link querySelectorAll}.
	*
	* @todo Does not yet support all queries. Currently only query by tagName.
	*
	* @param {CSS_Selector} query The query on the children
	* @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
	*
	* @public
	*/
	querySelectorAll(query) {
		query = query.toUpperCase();
		return from(new YXmlTreeWalker(this, (element) => element.nodeName && element.nodeName.toUpperCase() === query));
	}
	/**
	* Creates YXmlEvent and calls observers.
	*
	* @param {Transaction} transaction
	* @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
	*/
	_callObserver(transaction, parentSubs) {
		callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
	}
	/**
	* Get the string representation of all the children of this YXmlFragment.
	*
	* @return {string} The string representation of all children.
	*/
	toString() {
		return typeListMap(this, (xml) => xml.toString()).join("");
	}
	/**
	* @return {string}
	*/
	toJSON() {
		return this.toString();
	}
	/**
	* Creates a Dom Element that mirrors this YXmlElement.
	*
	* @param {Document} [_document=document] The document object (you must define
	*                                        this when calling this method in
	*                                        nodejs)
	* @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
	*                                             are presented in the DOM
	* @param {any} [binding] You should not set this property. This is
	*                               used if DomBinding wants to create a
	*                               association to the created DOM type.
	* @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
	*
	* @public
	*/
	toDOM(_document = document, hooks = {}, binding) {
		const fragment = _document.createDocumentFragment();
		if (binding !== void 0) binding._createAssociation(fragment, this);
		typeListForEach(this, (xmlType) => {
			fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
		});
		return fragment;
	}
	/**
	* Inserts new content at an index.
	*
	* @example
	*  // Insert character 'a' at position 0
	*  xml.insert(0, [new Y.XmlText('text')])
	*
	* @param {number} index The index to insert content at
	* @param {Array<YXmlElement|YXmlText>} content The array of content
	*/
	insert(index, content) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeListInsertGenerics(transaction, this, index, content);
		});
		else this._prelimContent.splice(index, 0, ...content);
	}
	/**
	* Inserts new content at an index.
	*
	* @example
	*  // Insert character 'a' at position 0
	*  xml.insert(0, [new Y.XmlText('text')])
	*
	* @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
	* @param {Array<YXmlElement|YXmlText>} content The array of content
	*/
	insertAfter(ref, content) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
			typeListInsertGenericsAfter(transaction, this, refItem, content);
		});
		else {
			const pc = this._prelimContent;
			const index = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
			if (index === 0 && ref !== null) throw create$3("Reference item not found");
			pc.splice(index, 0, ...content);
		}
	}
	/**
	* Deletes elements starting from an index.
	*
	* @param {number} index Index at which to start deleting elements
	* @param {number} [length=1] The number of elements to remove. Defaults to 1.
	*/
	delete(index, length = 1) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeListDelete(transaction, this, index, length);
		});
		else this._prelimContent.splice(index, length);
	}
	/**
	* Transforms this YArray to a JavaScript Array.
	*
	* @return {Array<YXmlElement|YXmlText|YXmlHook>}
	*/
	toArray() {
		return typeListToArray(this);
	}
	/**
	* Appends content to this YArray.
	*
	* @param {Array<YXmlElement|YXmlText>} content Array of content to append.
	*/
	push(content) {
		this.insert(this.length, content);
	}
	/**
	* Prepends content to this YArray.
	*
	* @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
	*/
	unshift(content) {
		this.insert(0, content);
	}
	/**
	* Returns the i-th element from a YArray.
	*
	* @param {number} index The index of the element to return from the YArray
	* @return {YXmlElement|YXmlText}
	*/
	get(index) {
		return typeListGet(this, index);
	}
	/**
	* Returns a portion of this YXmlFragment into a JavaScript Array selected
	* from start to end (end not included).
	*
	* @param {number} [start]
	* @param {number} [end]
	* @return {Array<YXmlElement|YXmlText>}
	*/
	slice(start = 0, end = this.length) {
		return typeListSlice(this, start, end);
	}
	/**
	* Executes a provided function on once on every child element.
	*
	* @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
	*/
	forEach(f) {
		typeListForEach(this, f);
	}
	/**
	* Transform the properties of this type to binary and write it to an
	* BinaryEncoder.
	*
	* This is called when this Item is sent to a remote peer.
	*
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
	*/
	_write(encoder) {
		encoder.writeTypeRef(YXmlFragmentRefID);
	}
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
* @return {YXmlFragment}
*
* @private
* @function
*/
const readYXmlFragment = (_decoder) => new YXmlFragment();
/**
* @typedef {Object|number|null|Array<any>|string|Uint8Array|AbstractType<any>} ValueTypes
*/
/**
* An YXmlElement imitates the behavior of a
* https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element
*
* * An YXmlElement has attributes (key value pairs)
* * An YXmlElement has childElements that must inherit from YXmlElement
*
* @template {{ [key: string]: ValueTypes }} [KV={ [key: string]: string }]
*/
var YXmlElement = class YXmlElement extends YXmlFragment {
	constructor(nodeName = "UNDEFINED") {
		super();
		this.nodeName = nodeName;
		/**
		* @type {Map<string, any>|null}
		*/
		this._prelimAttrs = /* @__PURE__ */ new Map();
	}
	/**
	* @type {YXmlElement|YXmlText|null}
	*/
	get nextSibling() {
		const n = this._item ? this._item.next : null;
		return n ? n.content.type : null;
	}
	/**
	* @type {YXmlElement|YXmlText|null}
	*/
	get prevSibling() {
		const n = this._item ? this._item.prev : null;
		return n ? n.content.type : null;
	}
	/**
	* Integrate this type into the Yjs instance.
	*
	* * Save this struct in the os
	* * This type is sent to other client
	* * Observer functions are fired
	*
	* @param {Doc} y The Yjs instance
	* @param {Item} item
	*/
	_integrate(y, item) {
		super._integrate(y, item);
		this._prelimAttrs.forEach((value, key) => {
			this.setAttribute(key, value);
		});
		this._prelimAttrs = null;
	}
	/**
	* Creates an Item with the same effect as this Item (without position effect)
	*
	* @return {YXmlElement}
	*/
	_copy() {
		return new YXmlElement(this.nodeName);
	}
	/**
	* Makes a copy of this data type that can be included somewhere else.
	*
	* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
	*
	* @return {YXmlElement<KV>}
	*/
	clone() {
		/**
		* @type {YXmlElement<KV>}
		*/
		const el = new YXmlElement(this.nodeName);
		const attrs = this.getAttributes();
		forEach(attrs, (value, key) => {
			el.setAttribute(key, value);
		});
		el.insert(0, this.toArray().map((v) => v instanceof AbstractType ? v.clone() : v));
		return el;
	}
	/**
	* Returns the XML serialization of this YXmlElement.
	* The attributes are ordered by attribute-name, so you can easily use this
	* method to compare YXmlElements
	*
	* @return {string} The string representation of this type.
	*
	* @public
	*/
	toString() {
		const attrs = this.getAttributes();
		const stringBuilder = [];
		const keys = [];
		for (const key in attrs) keys.push(key);
		keys.sort();
		const keysLen = keys.length;
		for (let i = 0; i < keysLen; i++) {
			const key = keys[i];
			stringBuilder.push(key + "=\"" + attrs[key] + "\"");
		}
		const nodeName = this.nodeName.toLocaleLowerCase();
		return `<${nodeName}${stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : ""}>${super.toString()}</${nodeName}>`;
	}
	/**
	* Removes an attribute from this YXmlElement.
	*
	* @param {string} attributeName The attribute name that is to be removed.
	*
	* @public
	*/
	removeAttribute(attributeName) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeMapDelete(transaction, this, attributeName);
		});
		else
 /** @type {Map<string,any>} */ this._prelimAttrs.delete(attributeName);
	}
	/**
	* Sets or updates an attribute.
	*
	* @template {keyof KV & string} KEY
	*
	* @param {KEY} attributeName The attribute name that is to be set.
	* @param {KV[KEY]} attributeValue The attribute value that is to be set.
	*
	* @public
	*/
	setAttribute(attributeName, attributeValue) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeMapSet(transaction, this, attributeName, attributeValue);
		});
		else
 /** @type {Map<string, any>} */ this._prelimAttrs.set(attributeName, attributeValue);
	}
	/**
	* Returns an attribute value that belongs to the attribute name.
	*
	* @template {keyof KV & string} KEY
	*
	* @param {KEY} attributeName The attribute name that identifies the
	*                               queried value.
	* @return {KV[KEY]|undefined} The queried attribute value.
	*
	* @public
	*/
	getAttribute(attributeName) {
		return typeMapGet(this, attributeName);
	}
	/**
	* Returns whether an attribute exists
	*
	* @param {string} attributeName The attribute name to check for existence.
	* @return {boolean} whether the attribute exists.
	*
	* @public
	*/
	hasAttribute(attributeName) {
		return typeMapHas(this, attributeName);
	}
	/**
	* Returns all attribute name/value pairs in a JSON Object.
	*
	* @param {Snapshot} [snapshot]
	* @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
	*
	* @public
	*/
	getAttributes(snapshot) {
		return snapshot ? typeMapGetAllSnapshot(this, snapshot) : typeMapGetAll(this);
	}
	/**
	* Creates a Dom Element that mirrors this YXmlElement.
	*
	* @param {Document} [_document=document] The document object (you must define
	*                                        this when calling this method in
	*                                        nodejs)
	* @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
	*                                             are presented in the DOM
	* @param {any} [binding] You should not set this property. This is
	*                               used if DomBinding wants to create a
	*                               association to the created DOM type.
	* @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
	*
	* @public
	*/
	toDOM(_document = document, hooks = {}, binding) {
		const dom = _document.createElement(this.nodeName);
		const attrs = this.getAttributes();
		for (const key in attrs) {
			const value = attrs[key];
			if (typeof value === "string") dom.setAttribute(key, value);
		}
		typeListForEach(this, (yxml) => {
			dom.appendChild(yxml.toDOM(_document, hooks, binding));
		});
		if (binding !== void 0) binding._createAssociation(dom, this);
		return dom;
	}
	/**
	* Transform the properties of this type to binary and write it to an
	* BinaryEncoder.
	*
	* This is called when this Item is sent to a remote peer.
	*
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
	*/
	_write(encoder) {
		encoder.writeTypeRef(YXmlElementRefID);
		encoder.writeKey(this.nodeName);
	}
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
* @return {YXmlElement}
*
* @function
*/
const readYXmlElement = (decoder) => new YXmlElement(decoder.readKey());
/**
* @extends YEvent<YXmlElement|YXmlText|YXmlFragment>
* An Event that describes changes on a YXml Element or Yxml Fragment
*/
var YXmlEvent = class extends YEvent {
	/**
	* @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
	* @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
	*                   child list changed.
	* @param {Transaction} transaction The transaction instance with which the
	*                                  change was created.
	*/
	constructor(target, subs, transaction) {
		super(target, transaction);
		/**
		* Whether the children changed.
		* @type {Boolean}
		* @private
		*/
		this.childListChanged = false;
		/**
		* Set of all changed attributes.
		* @type {Set<string>}
		*/
		this.attributesChanged = /* @__PURE__ */ new Set();
		subs.forEach((sub) => {
			if (sub === null) this.childListChanged = true;
			else this.attributesChanged.add(sub);
		});
	}
};
/**
* You can manage binding to a custom type with YXmlHook.
*
* @extends {YMap<any>}
*/
var YXmlHook = class YXmlHook extends YMap {
	/**
	* @param {string} hookName nodeName of the Dom Node.
	*/
	constructor(hookName) {
		super();
		/**
		* @type {string}
		*/
		this.hookName = hookName;
	}
	/**
	* Creates an Item with the same effect as this Item (without position effect)
	*/
	_copy() {
		return new YXmlHook(this.hookName);
	}
	/**
	* Makes a copy of this data type that can be included somewhere else.
	*
	* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
	*
	* @return {YXmlHook}
	*/
	clone() {
		const el = new YXmlHook(this.hookName);
		this.forEach((value, key) => {
			el.set(key, value);
		});
		return el;
	}
	/**
	* Creates a Dom Element that mirrors this YXmlElement.
	*
	* @param {Document} [_document=document] The document object (you must define
	*                                        this when calling this method in
	*                                        nodejs)
	* @param {Object.<string, any>} [hooks] Optional property to customize how hooks
	*                                             are presented in the DOM
	* @param {any} [binding] You should not set this property. This is
	*                               used if DomBinding wants to create a
	*                               association to the created DOM type
	* @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
	*
	* @public
	*/
	toDOM(_document = document, hooks = {}, binding) {
		const hook = hooks[this.hookName];
		let dom;
		if (hook !== void 0) dom = hook.createDom(this);
		else dom = document.createElement(this.hookName);
		dom.setAttribute("data-yjs-hook", this.hookName);
		if (binding !== void 0) binding._createAssociation(dom, this);
		return dom;
	}
	/**
	* Transform the properties of this type to binary and write it to an
	* BinaryEncoder.
	*
	* This is called when this Item is sent to a remote peer.
	*
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
	*/
	_write(encoder) {
		encoder.writeTypeRef(YXmlHookRefID);
		encoder.writeKey(this.hookName);
	}
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
* @return {YXmlHook}
*
* @private
* @function
*/
const readYXmlHook = (decoder) => new YXmlHook(decoder.readKey());
/**
* Represents text in a Dom Element. In the future this type will also handle
* simple formatting information like bold and italic.
*/
var YXmlText = class YXmlText extends YText {
	/**
	* @type {YXmlElement|YXmlText|null}
	*/
	get nextSibling() {
		const n = this._item ? this._item.next : null;
		return n ? n.content.type : null;
	}
	/**
	* @type {YXmlElement|YXmlText|null}
	*/
	get prevSibling() {
		const n = this._item ? this._item.prev : null;
		return n ? n.content.type : null;
	}
	_copy() {
		return new YXmlText();
	}
	/**
	* Makes a copy of this data type that can be included somewhere else.
	*
	* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
	*
	* @return {YXmlText}
	*/
	clone() {
		const text = new YXmlText();
		text.applyDelta(this.toDelta());
		return text;
	}
	/**
	* Creates a Dom Element that mirrors this YXmlText.
	*
	* @param {Document} [_document=document] The document object (you must define
	*                                        this when calling this method in
	*                                        nodejs)
	* @param {Object<string, any>} [hooks] Optional property to customize how hooks
	*                                             are presented in the DOM
	* @param {any} [binding] You should not set this property. This is
	*                               used if DomBinding wants to create a
	*                               association to the created DOM type.
	* @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
	*
	* @public
	*/
	toDOM(_document = document, hooks, binding) {
		const dom = _document.createTextNode(this.toString());
		if (binding !== void 0) binding._createAssociation(dom, this);
		return dom;
	}
	toString() {
		return this.toDelta().map((delta) => {
			const nestedNodes = [];
			for (const nodeName in delta.attributes) {
				const attrs = [];
				for (const key in delta.attributes[nodeName]) attrs.push({
					key,
					value: delta.attributes[nodeName][key]
				});
				attrs.sort((a, b) => a.key < b.key ? -1 : 1);
				nestedNodes.push({
					nodeName,
					attrs
				});
			}
			nestedNodes.sort((a, b) => a.nodeName < b.nodeName ? -1 : 1);
			let str = "";
			for (let i = 0; i < nestedNodes.length; i++) {
				const node = nestedNodes[i];
				str += `<${node.nodeName}`;
				for (let j = 0; j < node.attrs.length; j++) {
					const attr = node.attrs[j];
					str += ` ${attr.key}="${attr.value}"`;
				}
				str += ">";
			}
			str += delta.insert;
			for (let i = nestedNodes.length - 1; i >= 0; i--) str += `</${nestedNodes[i].nodeName}>`;
			return str;
		}).join("");
	}
	/**
	* @return {string}
	*/
	toJSON() {
		return this.toString();
	}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	*/
	_write(encoder) {
		encoder.writeTypeRef(YXmlTextRefID);
	}
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
* @return {YXmlText}
*
* @private
* @function
*/
const readYXmlText = (decoder) => new YXmlText();
var AbstractStruct = class {
	/**
	* @param {ID} id
	* @param {number} length
	*/
	constructor(id, length) {
		this.id = id;
		this.length = length;
	}
	/**
	* @type {boolean}
	*/
	get deleted() {
		throw methodUnimplemented();
	}
	/**
	* Merge this struct with the item to the right.
	* This method is already assuming that `this.id.clock + this.length === this.id.clock`.
	* Also this method does *not* remove right from StructStore!
	* @param {AbstractStruct} right
	* @return {boolean} whether this merged with right
	*/
	mergeWith(right) {
		return false;
	}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
	* @param {number} offset
	* @param {number} encodingRef
	*/
	write(encoder, offset, encodingRef) {
		throw methodUnimplemented();
	}
	/**
	* @param {Transaction} transaction
	* @param {number} offset
	*/
	integrate(transaction, offset) {
		throw methodUnimplemented();
	}
};
const structGCRefNumber = 0;
/**
* @private
*/
var GC = class extends AbstractStruct {
	get deleted() {
		return true;
	}
	delete() {}
	/**
	* @param {GC} right
	* @return {boolean}
	*/
	mergeWith(right) {
		if (this.constructor !== right.constructor) return false;
		this.length += right.length;
		return true;
	}
	/**
	* @param {Transaction} transaction
	* @param {number} offset
	*/
	integrate(transaction, offset) {
		if (offset > 0) {
			this.id.clock += offset;
			this.length -= offset;
		}
		addStruct(transaction.doc.store, this);
	}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {number} offset
	*/
	write(encoder, offset) {
		encoder.writeInfo(structGCRefNumber);
		encoder.writeLen(this.length - offset);
	}
	/**
	* @param {Transaction} transaction
	* @param {StructStore} store
	* @return {null | number}
	*/
	getMissing(transaction, store) {
		return null;
	}
};
var ContentBinary = class ContentBinary {
	/**
	* @param {Uint8Array} content
	*/
	constructor(content) {
		this.content = content;
	}
	/**
	* @return {number}
	*/
	getLength() {
		return 1;
	}
	/**
	* @return {Array<any>}
	*/
	getContent() {
		return [this.content];
	}
	/**
	* @return {boolean}
	*/
	isCountable() {
		return true;
	}
	/**
	* @return {ContentBinary}
	*/
	copy() {
		return new ContentBinary(this.content);
	}
	/**
	* @param {number} offset
	* @return {ContentBinary}
	*/
	splice(offset) {
		throw methodUnimplemented();
	}
	/**
	* @param {ContentBinary} right
	* @return {boolean}
	*/
	mergeWith(right) {
		return false;
	}
	/**
	* @param {Transaction} transaction
	* @param {Item} item
	*/
	integrate(transaction, item) {}
	/**
	* @param {Transaction} transaction
	*/
	delete(transaction) {}
	/**
	* @param {StructStore} store
	*/
	gc(store) {}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {number} offset
	*/
	write(encoder, offset) {
		encoder.writeBuf(this.content);
	}
	/**
	* @return {number}
	*/
	getRef() {
		return 3;
	}
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2 } decoder
* @return {ContentBinary}
*/
const readContentBinary = (decoder) => new ContentBinary(decoder.readBuf());
var ContentDeleted = class ContentDeleted {
	/**
	* @param {number} len
	*/
	constructor(len) {
		this.len = len;
	}
	/**
	* @return {number}
	*/
	getLength() {
		return this.len;
	}
	/**
	* @return {Array<any>}
	*/
	getContent() {
		return [];
	}
	/**
	* @return {boolean}
	*/
	isCountable() {
		return false;
	}
	/**
	* @return {ContentDeleted}
	*/
	copy() {
		return new ContentDeleted(this.len);
	}
	/**
	* @param {number} offset
	* @return {ContentDeleted}
	*/
	splice(offset) {
		const right = new ContentDeleted(this.len - offset);
		this.len = offset;
		return right;
	}
	/**
	* @param {ContentDeleted} right
	* @return {boolean}
	*/
	mergeWith(right) {
		this.len += right.len;
		return true;
	}
	/**
	* @param {Transaction} transaction
	* @param {Item} item
	*/
	integrate(transaction, item) {
		addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
		item.markDeleted();
	}
	/**
	* @param {Transaction} transaction
	*/
	delete(transaction) {}
	/**
	* @param {StructStore} store
	*/
	gc(store) {}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {number} offset
	*/
	write(encoder, offset) {
		encoder.writeLen(this.len - offset);
	}
	/**
	* @return {number}
	*/
	getRef() {
		return 1;
	}
};
/**
* @private
*
* @param {UpdateDecoderV1 | UpdateDecoderV2 } decoder
* @return {ContentDeleted}
*/
const readContentDeleted = (decoder) => new ContentDeleted(decoder.readLen());
/**
* @param {string} guid
* @param {Object<string, any>} opts
*/
const createDocFromOpts = (guid, opts) => new Doc({
	guid,
	...opts,
	shouldLoad: opts.shouldLoad || opts.autoLoad || false
});
/**
* @private
*/
var ContentDoc = class ContentDoc {
	/**
	* @param {Doc} doc
	*/
	constructor(doc) {
		if (doc._item) console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
		/**
		* @type {Doc}
		*/
		this.doc = doc;
		/**
		* @type {any}
		*/
		const opts = {};
		this.opts = opts;
		if (!doc.gc) opts.gc = false;
		if (doc.autoLoad) opts.autoLoad = true;
		if (doc.meta !== null) opts.meta = doc.meta;
	}
	/**
	* @return {number}
	*/
	getLength() {
		return 1;
	}
	/**
	* @return {Array<any>}
	*/
	getContent() {
		return [this.doc];
	}
	/**
	* @return {boolean}
	*/
	isCountable() {
		return true;
	}
	/**
	* @return {ContentDoc}
	*/
	copy() {
		return new ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
	}
	/**
	* @param {number} offset
	* @return {ContentDoc}
	*/
	splice(offset) {
		throw methodUnimplemented();
	}
	/**
	* @param {ContentDoc} right
	* @return {boolean}
	*/
	mergeWith(right) {
		return false;
	}
	/**
	* @param {Transaction} transaction
	* @param {Item} item
	*/
	integrate(transaction, item) {
		this.doc._item = item;
		transaction.subdocsAdded.add(this.doc);
		if (this.doc.shouldLoad) transaction.subdocsLoaded.add(this.doc);
	}
	/**
	* @param {Transaction} transaction
	*/
	delete(transaction) {
		if (transaction.subdocsAdded.has(this.doc)) transaction.subdocsAdded.delete(this.doc);
		else transaction.subdocsRemoved.add(this.doc);
	}
	/**
	* @param {StructStore} store
	*/
	gc(store) {}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {number} offset
	*/
	write(encoder, offset) {
		encoder.writeString(this.doc.guid);
		encoder.writeAny(this.opts);
	}
	/**
	* @return {number}
	*/
	getRef() {
		return 9;
	}
};
/**
* @private
*
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
* @return {ContentDoc}
*/
const readContentDoc = (decoder) => new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny()));
/**
* @private
*/
var ContentEmbed = class ContentEmbed {
	/**
	* @param {Object} embed
	*/
	constructor(embed) {
		this.embed = embed;
	}
	/**
	* @return {number}
	*/
	getLength() {
		return 1;
	}
	/**
	* @return {Array<any>}
	*/
	getContent() {
		return [this.embed];
	}
	/**
	* @return {boolean}
	*/
	isCountable() {
		return true;
	}
	/**
	* @return {ContentEmbed}
	*/
	copy() {
		return new ContentEmbed(this.embed);
	}
	/**
	* @param {number} offset
	* @return {ContentEmbed}
	*/
	splice(offset) {
		throw methodUnimplemented();
	}
	/**
	* @param {ContentEmbed} right
	* @return {boolean}
	*/
	mergeWith(right) {
		return false;
	}
	/**
	* @param {Transaction} transaction
	* @param {Item} item
	*/
	integrate(transaction, item) {}
	/**
	* @param {Transaction} transaction
	*/
	delete(transaction) {}
	/**
	* @param {StructStore} store
	*/
	gc(store) {}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {number} offset
	*/
	write(encoder, offset) {
		encoder.writeJSON(this.embed);
	}
	/**
	* @return {number}
	*/
	getRef() {
		return 5;
	}
};
/**
* @private
*
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
* @return {ContentEmbed}
*/
const readContentEmbed = (decoder) => new ContentEmbed(decoder.readJSON());
/**
* @private
*/
var ContentFormat = class ContentFormat {
	/**
	* @param {string} key
	* @param {Object} value
	*/
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
	/**
	* @return {number}
	*/
	getLength() {
		return 1;
	}
	/**
	* @return {Array<any>}
	*/
	getContent() {
		return [];
	}
	/**
	* @return {boolean}
	*/
	isCountable() {
		return false;
	}
	/**
	* @return {ContentFormat}
	*/
	copy() {
		return new ContentFormat(this.key, this.value);
	}
	/**
	* @param {number} _offset
	* @return {ContentFormat}
	*/
	splice(_offset) {
		throw methodUnimplemented();
	}
	/**
	* @param {ContentFormat} _right
	* @return {boolean}
	*/
	mergeWith(_right) {
		return false;
	}
	/**
	* @param {Transaction} _transaction
	* @param {Item} item
	*/
	integrate(_transaction, item) {
		const p = item.parent;
		p._searchMarker = null;
		p._hasFormatting = true;
	}
	/**
	* @param {Transaction} transaction
	*/
	delete(transaction) {}
	/**
	* @param {StructStore} store
	*/
	gc(store) {}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {number} offset
	*/
	write(encoder, offset) {
		encoder.writeKey(this.key);
		encoder.writeJSON(this.value);
	}
	/**
	* @return {number}
	*/
	getRef() {
		return 6;
	}
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
* @return {ContentFormat}
*/
const readContentFormat = (decoder) => new ContentFormat(decoder.readKey(), decoder.readJSON());
/**
* @private
*/
var ContentJSON = class ContentJSON {
	/**
	* @param {Array<any>} arr
	*/
	constructor(arr) {
		/**
		* @type {Array<any>}
		*/
		this.arr = arr;
	}
	/**
	* @return {number}
	*/
	getLength() {
		return this.arr.length;
	}
	/**
	* @return {Array<any>}
	*/
	getContent() {
		return this.arr;
	}
	/**
	* @return {boolean}
	*/
	isCountable() {
		return true;
	}
	/**
	* @return {ContentJSON}
	*/
	copy() {
		return new ContentJSON(this.arr);
	}
	/**
	* @param {number} offset
	* @return {ContentJSON}
	*/
	splice(offset) {
		const right = new ContentJSON(this.arr.slice(offset));
		this.arr = this.arr.slice(0, offset);
		return right;
	}
	/**
	* @param {ContentJSON} right
	* @return {boolean}
	*/
	mergeWith(right) {
		this.arr = this.arr.concat(right.arr);
		return true;
	}
	/**
	* @param {Transaction} transaction
	* @param {Item} item
	*/
	integrate(transaction, item) {}
	/**
	* @param {Transaction} transaction
	*/
	delete(transaction) {}
	/**
	* @param {StructStore} store
	*/
	gc(store) {}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {number} offset
	*/
	write(encoder, offset) {
		const len = this.arr.length;
		encoder.writeLen(len - offset);
		for (let i = offset; i < len; i++) {
			const c = this.arr[i];
			encoder.writeString(c === void 0 ? "undefined" : JSON.stringify(c));
		}
	}
	/**
	* @return {number}
	*/
	getRef() {
		return 2;
	}
};
/**
* @private
*
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
* @return {ContentJSON}
*/
const readContentJSON = (decoder) => {
	const len = decoder.readLen();
	const cs = [];
	for (let i = 0; i < len; i++) {
		const c = decoder.readString();
		if (c === "undefined") cs.push(void 0);
		else cs.push(JSON.parse(c));
	}
	return new ContentJSON(cs);
};
const isDevMode = getVariable("node_env") === "development";
var ContentAny = class ContentAny {
	/**
	* @param {Array<any>} arr
	*/
	constructor(arr) {
		/**
		* @type {Array<any>}
		*/
		this.arr = arr;
		isDevMode && deepFreeze(arr);
	}
	/**
	* @return {number}
	*/
	getLength() {
		return this.arr.length;
	}
	/**
	* @return {Array<any>}
	*/
	getContent() {
		return this.arr;
	}
	/**
	* @return {boolean}
	*/
	isCountable() {
		return true;
	}
	/**
	* @return {ContentAny}
	*/
	copy() {
		return new ContentAny(this.arr);
	}
	/**
	* @param {number} offset
	* @return {ContentAny}
	*/
	splice(offset) {
		const right = new ContentAny(this.arr.slice(offset));
		this.arr = this.arr.slice(0, offset);
		return right;
	}
	/**
	* @param {ContentAny} right
	* @return {boolean}
	*/
	mergeWith(right) {
		this.arr = this.arr.concat(right.arr);
		return true;
	}
	/**
	* @param {Transaction} transaction
	* @param {Item} item
	*/
	integrate(transaction, item) {}
	/**
	* @param {Transaction} transaction
	*/
	delete(transaction) {}
	/**
	* @param {StructStore} store
	*/
	gc(store) {}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {number} offset
	*/
	write(encoder, offset) {
		const len = this.arr.length;
		encoder.writeLen(len - offset);
		for (let i = offset; i < len; i++) {
			const c = this.arr[i];
			encoder.writeAny(c);
		}
	}
	/**
	* @return {number}
	*/
	getRef() {
		return 8;
	}
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
* @return {ContentAny}
*/
const readContentAny = (decoder) => {
	const len = decoder.readLen();
	const cs = [];
	for (let i = 0; i < len; i++) cs.push(decoder.readAny());
	return new ContentAny(cs);
};
/**
* @private
*/
var ContentString = class ContentString {
	/**
	* @param {string} str
	*/
	constructor(str) {
		/**
		* @type {string}
		*/
		this.str = str;
	}
	/**
	* @return {number}
	*/
	getLength() {
		return this.str.length;
	}
	/**
	* @return {Array<any>}
	*/
	getContent() {
		return this.str.split("");
	}
	/**
	* @return {boolean}
	*/
	isCountable() {
		return true;
	}
	/**
	* @return {ContentString}
	*/
	copy() {
		return new ContentString(this.str);
	}
	/**
	* @param {number} offset
	* @return {ContentString}
	*/
	splice(offset) {
		const right = new ContentString(this.str.slice(offset));
		this.str = this.str.slice(0, offset);
		const firstCharCode = this.str.charCodeAt(offset - 1);
		if (firstCharCode >= 55296 && firstCharCode <= 56319) {
			this.str = this.str.slice(0, offset - 1) + "�";
			right.str = "�" + right.str.slice(1);
		}
		return right;
	}
	/**
	* @param {ContentString} right
	* @return {boolean}
	*/
	mergeWith(right) {
		this.str += right.str;
		return true;
	}
	/**
	* @param {Transaction} transaction
	* @param {Item} item
	*/
	integrate(transaction, item) {}
	/**
	* @param {Transaction} transaction
	*/
	delete(transaction) {}
	/**
	* @param {StructStore} store
	*/
	gc(store) {}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {number} offset
	*/
	write(encoder, offset) {
		encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
	}
	/**
	* @return {number}
	*/
	getRef() {
		return 4;
	}
};
/**
* @private
*
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
* @return {ContentString}
*/
const readContentString = (decoder) => new ContentString(decoder.readString());
/**
* @type {Array<function(UpdateDecoderV1 | UpdateDecoderV2):AbstractType<any>>}
* @private
*/
const typeRefs = [
	readYArray,
	readYMap,
	readYText,
	readYXmlElement,
	readYXmlFragment,
	readYXmlHook,
	readYXmlText
];
const YArrayRefID = 0;
const YMapRefID = 1;
const YTextRefID = 2;
const YXmlElementRefID = 3;
const YXmlFragmentRefID = 4;
const YXmlHookRefID = 5;
const YXmlTextRefID = 6;
/**
* @private
*/
var ContentType = class ContentType {
	/**
	* @param {AbstractType<any>} type
	*/
	constructor(type) {
		/**
		* @type {AbstractType<any>}
		*/
		this.type = type;
	}
	/**
	* @return {number}
	*/
	getLength() {
		return 1;
	}
	/**
	* @return {Array<any>}
	*/
	getContent() {
		return [this.type];
	}
	/**
	* @return {boolean}
	*/
	isCountable() {
		return true;
	}
	/**
	* @return {ContentType}
	*/
	copy() {
		return new ContentType(this.type._copy());
	}
	/**
	* @param {number} offset
	* @return {ContentType}
	*/
	splice(offset) {
		throw methodUnimplemented();
	}
	/**
	* @param {ContentType} right
	* @return {boolean}
	*/
	mergeWith(right) {
		return false;
	}
	/**
	* @param {Transaction} transaction
	* @param {Item} item
	*/
	integrate(transaction, item) {
		this.type._integrate(transaction.doc, item);
	}
	/**
	* @param {Transaction} transaction
	*/
	delete(transaction) {
		let item = this.type._start;
		while (item !== null) {
			if (!item.deleted) item.delete(transaction);
			else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) transaction._mergeStructs.push(item);
			item = item.right;
		}
		this.type._map.forEach((item) => {
			if (!item.deleted) item.delete(transaction);
			else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) transaction._mergeStructs.push(item);
		});
		transaction.changed.delete(this.type);
	}
	/**
	* @param {StructStore} store
	*/
	gc(store) {
		let item = this.type._start;
		while (item !== null) {
			item.gc(store, true);
			item = item.right;
		}
		this.type._start = null;
		this.type._map.forEach(
			/** @param {Item | null} item */
			(item) => {
				while (item !== null) {
					item.gc(store, true);
					item = item.left;
				}
			}
		);
		this.type._map = /* @__PURE__ */ new Map();
	}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {number} offset
	*/
	write(encoder, offset) {
		this.type._write(encoder);
	}
	/**
	* @return {number}
	*/
	getRef() {
		return 7;
	}
};
/**
* @private
*
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
* @return {ContentType}
*/
const readContentType = (decoder) => new ContentType(typeRefs[decoder.readTypeRef()](decoder));
/**
* @todo This should return several items
*
* @param {StructStore} store
* @param {ID} id
* @return {{item:Item, diff:number}}
*/
const followRedone = (store, id) => {
	/**
	* @type {ID|null}
	*/
	let nextID = id;
	let diff = 0;
	let item;
	do {
		if (diff > 0) nextID = createID(nextID.client, nextID.clock + diff);
		item = getItem(store, nextID);
		diff = nextID.clock - item.id.clock;
		nextID = item.redone;
	} while (nextID !== null && item instanceof Item);
	return {
		item,
		diff
	};
};
/**
* Make sure that neither item nor any of its parents is ever deleted.
*
* This property does not persist when storing it into a database or when
* sending it to other peers
*
* @param {Item|null} item
* @param {boolean} keep
*/
const keepItem = (item, keep) => {
	while (item !== null && item.keep !== keep) {
		item.keep = keep;
		item = item.parent._item;
	}
};
/**
* Split leftItem into two items
* @param {Transaction} transaction
* @param {Item} leftItem
* @param {number} diff
* @return {Item}
*
* @function
* @private
*/
const splitItem = (transaction, leftItem, diff) => {
	const { client, clock } = leftItem.id;
	const rightItem = new Item(createID(client, clock + diff), leftItem, createID(client, clock + diff - 1), leftItem.right, leftItem.rightOrigin, leftItem.parent, leftItem.parentSub, leftItem.content.splice(diff));
	if (leftItem.deleted) rightItem.markDeleted();
	if (leftItem.keep) rightItem.keep = true;
	if (leftItem.redone !== null) rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
	leftItem.right = rightItem;
	if (rightItem.right !== null) rightItem.right.left = rightItem;
	transaction._mergeStructs.push(rightItem);
	if (rightItem.parentSub !== null && rightItem.right === null)
 /** @type {AbstractType<any>} */ rightItem.parent._map.set(rightItem.parentSub, rightItem);
	leftItem.length = diff;
	return rightItem;
};
/**
* @param {Array<StackItem>} stack
* @param {ID} id
*/
const isDeletedByUndoStack = (stack, id) => some(
	stack,
	/** @param {StackItem} s */
	(s) => isDeleted(s.deletions, id)
);
/**
* Redoes the effect of this operation.
*
* @param {Transaction} transaction The Yjs instance.
* @param {Item} item
* @param {Set<Item>} redoitems
* @param {DeleteSet} itemsToDelete
* @param {boolean} ignoreRemoteMapChanges
* @param {import('../utils/UndoManager.js').UndoManager} um
*
* @return {Item|null}
*
* @private
*/
const redoItem = (transaction, item, redoitems, itemsToDelete, ignoreRemoteMapChanges, um) => {
	const doc = transaction.doc;
	const store = doc.store;
	const ownClientID = doc.clientID;
	const redone = item.redone;
	if (redone !== null) return getItemCleanStart(transaction, redone);
	let parentItem = item.parent._item;
	/**
	* @type {Item|null}
	*/
	let left = null;
	/**
	* @type {Item|null}
	*/
	let right;
	if (parentItem !== null && parentItem.deleted === true) {
		if (parentItem.redone === null && (!redoitems.has(parentItem) || redoItem(transaction, parentItem, redoitems, itemsToDelete, ignoreRemoteMapChanges, um) === null)) return null;
		while (parentItem.redone !== null) parentItem = getItemCleanStart(transaction, parentItem.redone);
	}
	const parentType = parentItem === null ? item.parent : /** @type {ContentType} */ parentItem.content.type;
	if (item.parentSub === null) {
		left = item.left;
		right = item;
		while (left !== null) {
			/**
			* @type {Item|null}
			*/
			let leftTrace = left;
			while (leftTrace !== null && leftTrace.parent._item !== parentItem) leftTrace = leftTrace.redone === null ? null : getItemCleanStart(transaction, leftTrace.redone);
			if (leftTrace !== null && leftTrace.parent._item === parentItem) {
				left = leftTrace;
				break;
			}
			left = left.left;
		}
		while (right !== null) {
			/**
			* @type {Item|null}
			*/
			let rightTrace = right;
			while (rightTrace !== null && rightTrace.parent._item !== parentItem) rightTrace = rightTrace.redone === null ? null : getItemCleanStart(transaction, rightTrace.redone);
			if (rightTrace !== null && rightTrace.parent._item === parentItem) {
				right = rightTrace;
				break;
			}
			right = right.right;
		}
	} else {
		right = null;
		if (item.right && !ignoreRemoteMapChanges) {
			left = item;
			while (left !== null && left.right !== null && (left.right.redone || isDeleted(itemsToDelete, left.right.id) || isDeletedByUndoStack(um.undoStack, left.right.id) || isDeletedByUndoStack(um.redoStack, left.right.id))) {
				left = left.right;
				while (left.redone) left = getItemCleanStart(transaction, left.redone);
			}
			if (left && left.right !== null) return null;
		} else left = parentType._map.get(item.parentSub) || null;
		if (left !== null && left.parent._item !== parentItem) left = parentType._map.get(item.parentSub) || null;
	}
	const nextClock = getState(store, ownClientID);
	const nextId = createID(ownClientID, nextClock);
	const redoneItem = new Item(nextId, left, left && left.lastId, right, right && right.id, parentType, item.parentSub, item.content.copy());
	item.redone = nextId;
	keepItem(redoneItem, true);
	redoneItem.integrate(transaction, 0);
	return redoneItem;
};
/**
* Abstract class that represents any content.
*/
var Item = class Item extends AbstractStruct {
	/**
	* @param {ID} id
	* @param {Item | null} left
	* @param {ID | null} origin
	* @param {Item | null} right
	* @param {ID | null} rightOrigin
	* @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
	* @param {string | null} parentSub
	* @param {AbstractContent} content
	*/
	constructor(id, left, origin, right, rightOrigin, parent, parentSub, content) {
		super(id, content.getLength());
		/**
		* The item that was originally to the left of this item.
		* @type {ID | null}
		*/
		this.origin = origin;
		/**
		* The item that is currently to the left of this item.
		* @type {Item | null}
		*/
		this.left = left;
		/**
		* The item that is currently to the right of this item.
		* @type {Item | null}
		*/
		this.right = right;
		/**
		* The item that was originally to the right of this item.
		* @type {ID | null}
		*/
		this.rightOrigin = rightOrigin;
		/**
		* @type {AbstractType<any>|ID|null}
		*/
		this.parent = parent;
		/**
		* If the parent refers to this item with some kind of key (e.g. YMap, the
		* key is specified here. The key is then used to refer to the list in which
		* to insert this item. If `parentSub = null` type._start is the list in
		* which to insert to. Otherwise it is `parent._map`.
		* @type {String | null}
		*/
		this.parentSub = parentSub;
		/**
		* If this type's effect is redone this type refers to the type that undid
		* this operation.
		* @type {ID | null}
		*/
		this.redone = null;
		/**
		* @type {AbstractContent}
		*/
		this.content = content;
		/**
		* bit1: keep
		* bit2: countable
		* bit3: deleted
		* bit4: mark - mark node as fast-search-marker
		* @type {number} byte
		*/
		this.info = this.content.isCountable() ? 2 : 0;
	}
	/**
	* This is used to mark the item as an indexed fast-search marker
	*
	* @type {boolean}
	*/
	set marker(isMarked) {
		if ((this.info & 8) > 0 !== isMarked) this.info ^= 8;
	}
	get marker() {
		return (this.info & 8) > 0;
	}
	/**
	* If true, do not garbage collect this Item.
	*/
	get keep() {
		return (this.info & 1) > 0;
	}
	set keep(doKeep) {
		if (this.keep !== doKeep) this.info ^= 1;
	}
	get countable() {
		return (this.info & 2) > 0;
	}
	/**
	* Whether this item was deleted or not.
	* @type {Boolean}
	*/
	get deleted() {
		return (this.info & 4) > 0;
	}
	set deleted(doDelete) {
		if (this.deleted !== doDelete) this.info ^= 4;
	}
	markDeleted() {
		this.info |= 4;
	}
	/**
	* Return the creator clientID of the missing op or define missing items and return null.
	*
	* @param {Transaction} transaction
	* @param {StructStore} store
	* @return {null | number}
	*/
	getMissing(transaction, store) {
		if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) return this.origin.client;
		if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) return this.rightOrigin.client;
		if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) return this.parent.client;
		if (this.origin) {
			this.left = getItemCleanEnd(transaction, store, this.origin);
			this.origin = this.left.lastId;
		}
		if (this.rightOrigin) {
			this.right = getItemCleanStart(transaction, this.rightOrigin);
			this.rightOrigin = this.right.id;
		}
		if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) this.parent = null;
		else if (!this.parent) {
			if (this.left && this.left.constructor === Item) {
				this.parent = this.left.parent;
				this.parentSub = this.left.parentSub;
			} else if (this.right && this.right.constructor === Item) {
				this.parent = this.right.parent;
				this.parentSub = this.right.parentSub;
			}
		} else if (this.parent.constructor === ID) {
			const parentItem = getItem(store, this.parent);
			if (parentItem.constructor === GC) this.parent = null;
			else this.parent = parentItem.content.type;
		}
		return null;
	}
	/**
	* @param {Transaction} transaction
	* @param {number} offset
	*/
	integrate(transaction, offset) {
		if (offset > 0) {
			this.id.clock += offset;
			this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
			this.origin = this.left.lastId;
			this.content = this.content.splice(offset);
			this.length -= offset;
		}
		if (this.parent) {
			if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
				/**
				* @type {Item|null}
				*/
				let left = this.left;
				/**
				* @type {Item|null}
				*/
				let o;
				if (left !== null) o = left.right;
				else if (this.parentSub !== null) {
					o = this.parent._map.get(this.parentSub) || null;
					while (o !== null && o.left !== null) o = o.left;
				} else o = this.parent._start;
				/**
				* @type {Set<Item>}
				*/
				const conflictingItems = /* @__PURE__ */ new Set();
				/**
				* @type {Set<Item>}
				*/
				const itemsBeforeOrigin = /* @__PURE__ */ new Set();
				while (o !== null && o !== this.right) {
					itemsBeforeOrigin.add(o);
					conflictingItems.add(o);
					if (compareIDs(this.origin, o.origin)) {
						if (o.id.client < this.id.client) {
							left = o;
							conflictingItems.clear();
						} else if (compareIDs(this.rightOrigin, o.rightOrigin)) break;
					} else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) {
						if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
							left = o;
							conflictingItems.clear();
						}
					} else break;
					o = o.right;
				}
				this.left = left;
			}
			if (this.left !== null) {
				const right = this.left.right;
				this.right = right;
				this.left.right = this;
			} else {
				let r;
				if (this.parentSub !== null) {
					r = this.parent._map.get(this.parentSub) || null;
					while (r !== null && r.left !== null) r = r.left;
				} else {
					r = this.parent._start;
					/** @type {AbstractType<any>} */ this.parent._start = this;
				}
				this.right = r;
			}
			if (this.right !== null) this.right.left = this;
			else if (this.parentSub !== null) {
				/** @type {AbstractType<any>} */ this.parent._map.set(this.parentSub, this);
				if (this.left !== null) this.left.delete(transaction);
			}
			if (this.parentSub === null && this.countable && !this.deleted)
 /** @type {AbstractType<any>} */ this.parent._length += this.length;
			addStruct(transaction.doc.store, this);
			this.content.integrate(transaction, this);
			addChangedTypeToTransaction(transaction, this.parent, this.parentSub);
			if (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) this.delete(transaction);
		} else new GC(this.id, this.length).integrate(transaction, 0);
	}
	/**
	* Returns the next non-deleted item
	*/
	get next() {
		let n = this.right;
		while (n !== null && n.deleted) n = n.right;
		return n;
	}
	/**
	* Returns the previous non-deleted item
	*/
	get prev() {
		let n = this.left;
		while (n !== null && n.deleted) n = n.left;
		return n;
	}
	/**
	* Computes the last content address of this Item.
	*/
	get lastId() {
		return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
	}
	/**
	* Try to merge two items
	*
	* @param {Item} right
	* @return {boolean}
	*/
	mergeWith(right) {
		if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
			const searchMarker = this.parent._searchMarker;
			if (searchMarker) searchMarker.forEach((marker) => {
				if (marker.p === right) {
					marker.p = this;
					if (!this.deleted && this.countable) marker.index -= this.length;
				}
			});
			if (right.keep) this.keep = true;
			this.right = right.right;
			if (this.right !== null) this.right.left = this;
			this.length += right.length;
			return true;
		}
		return false;
	}
	/**
	* Mark this Item as deleted.
	*
	* @param {Transaction} transaction
	*/
	delete(transaction) {
		if (!this.deleted) {
			const parent = this.parent;
			if (this.countable && this.parentSub === null) parent._length -= this.length;
			this.markDeleted();
			addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
			addChangedTypeToTransaction(transaction, parent, this.parentSub);
			this.content.delete(transaction);
		}
	}
	/**
	* @param {StructStore} store
	* @param {boolean} parentGCd
	*/
	gc(store, parentGCd) {
		if (!this.deleted) throw unexpectedCase();
		this.content.gc(store);
		if (parentGCd) replaceStruct(store, this, new GC(this.id, this.length));
		else this.content = new ContentDeleted(this.length);
	}
	/**
	* Transform the properties of this type to binary and write it to an
	* BinaryEncoder.
	*
	* This is called when this Item is sent to a remote peer.
	*
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
	* @param {number} offset
	*/
	write(encoder, offset) {
		const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
		const rightOrigin = this.rightOrigin;
		const parentSub = this.parentSub;
		const info = this.content.getRef() & 31 | (origin === null ? 0 : 128) | (rightOrigin === null ? 0 : 64) | (parentSub === null ? 0 : 32);
		encoder.writeInfo(info);
		if (origin !== null) encoder.writeLeftID(origin);
		if (rightOrigin !== null) encoder.writeRightID(rightOrigin);
		if (origin === null && rightOrigin === null) {
			const parent = this.parent;
			if (parent._item !== void 0) {
				const parentItem = parent._item;
				if (parentItem === null) {
					const ykey = findRootTypeKey(parent);
					encoder.writeParentInfo(true);
					encoder.writeString(ykey);
				} else {
					encoder.writeParentInfo(false);
					encoder.writeLeftID(parentItem.id);
				}
			} else if (parent.constructor === String) {
				encoder.writeParentInfo(true);
				encoder.writeString(parent);
			} else if (parent.constructor === ID) {
				encoder.writeParentInfo(false);
				encoder.writeLeftID(parent);
			} else unexpectedCase();
			if (parentSub !== null) encoder.writeString(parentSub);
		}
		this.content.write(encoder, offset);
	}
};
/**
* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
* @param {number} info
*/
const readItemContent = (decoder, info) => contentRefs[info & 31](decoder);
/**
* A lookup map for reading Item content.
*
* @type {Array<function(UpdateDecoderV1 | UpdateDecoderV2):AbstractContent>}
*/
const contentRefs = [
	() => {
		unexpectedCase();
	},
	readContentDeleted,
	readContentJSON,
	readContentBinary,
	readContentString,
	readContentEmbed,
	readContentFormat,
	readContentType,
	readContentAny,
	readContentDoc,
	() => {
		unexpectedCase();
	}
];
const structSkipRefNumber = 10;
/**
* @private
*/
var Skip = class extends AbstractStruct {
	get deleted() {
		return true;
	}
	delete() {}
	/**
	* @param {Skip} right
	* @return {boolean}
	*/
	mergeWith(right) {
		if (this.constructor !== right.constructor) return false;
		this.length += right.length;
		return true;
	}
	/**
	* @param {Transaction} transaction
	* @param {number} offset
	*/
	integrate(transaction, offset) {
		unexpectedCase();
	}
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {number} offset
	*/
	write(encoder, offset) {
		encoder.writeInfo(structSkipRefNumber);
		writeVarUint(encoder.restEncoder, this.length - offset);
	}
	/**
	* @param {Transaction} transaction
	* @param {StructStore} store
	* @return {null | number}
	*/
	getMissing(transaction, store) {
		return null;
	}
};
/** eslint-env browser */
const glo = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
const importIdentifier = "__ $YJS$ __";
if (glo[importIdentifier] === true)
 /**
* Dear reader of this message. Please take this seriously.
*
* If you see this message, make sure that you only import one version of Yjs. In many cases,
* your package manager installs two versions of Yjs that are used by different packages within your project.
* Another reason for this message is that some parts of your project use the commonjs version of Yjs
* and others use the EcmaScript version of Yjs.
*
* This often leads to issues that are hard to debug. We often need to perform constructor checks,
* e.g. `struct instanceof GC`. If you imported different versions of Yjs, it is impossible for us to
* do the constructor checks anymore - which might break the CRDT algorithm.
*
* https://github.com/yjs/yjs/issues/438
*/
console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
glo[importIdentifier] = true;
//#endregion
//#region node_modules/@lexical/selection/LexicalSelection.dev.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var LexicalSelection_dev_exports = /* @__PURE__ */ __exportAll({
	$addNodeStyle: () => $addNodeStyle$1,
	$cloneWithProperties: () => $cloneWithProperties$1,
	$copyBlockFormatIndent: () => $copyBlockFormatIndent$1,
	$ensureForwardRangeSelection: () => $ensureForwardRangeSelection$1,
	$forEachSelectedTextNode: () => $forEachSelectedTextNode$1,
	$getComputedStyleForElement: () => $getComputedStyleForElement$1,
	$getComputedStyleForParent: () => $getComputedStyleForParent$1,
	$getSelectionStyleValueForProperty: () => $getSelectionStyleValueForProperty$1,
	$isAtNodeEnd: () => $isAtNodeEnd$1,
	$isParentElementRTL: () => $isParentElementRTL$1,
	$isParentRTL: () => $isParentRTL$1,
	$moveCaretSelection: () => $moveCaretSelection$1,
	$moveCharacter: () => $moveCharacter$1,
	$patchStyleText: () => $patchStyleText$1,
	$selectAll: () => $selectAll$1,
	$setBlocksType: () => $setBlocksType$1,
	$shouldOverrideDefaultCharacterSelection: () => $shouldOverrideDefaultCharacterSelection$1,
	$sliceSelectedTextNodeContent: () => $sliceSelectedTextNodeContent$1,
	$trimTextContentFromAnchor: () => $trimTextContentFromAnchor$1,
	$wrapNodes: () => $wrapNodes$1,
	createDOMRange: () => createDOMRange$1,
	createRectsFromDOMRange: () => createRectsFromDOMRange$1,
	getCSSFromStyleObject: () => getCSSFromStyleObject$1,
	getStyleObjectFromCSS: () => getStyleObjectFromCSS$2,
	trimTextContentFromAnchor: () => trimTextContentFromAnchor$1
});
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function formatDevErrorMessage$1(message) {
	throw new Error(message);
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function warnOnlyOnce(message) {
	{
		let run = false;
		return () => {
			if (!run) console.warn(message);
			run = true;
		};
	}
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function getDOMTextNode(element) {
	let node = element;
	while (node != null) {
		if (node.nodeType === Node.TEXT_NODE) return node;
		node = node.firstChild;
	}
	return null;
}
function getDOMIndexWithinParent(node) {
	const parent = node.parentNode;
	if (parent == null) throw new Error("Should never happen");
	return [parent, Array.from(parent.childNodes).indexOf(node)];
}
/**
* Creates a selection range for the DOM.
* @param editor - The lexical editor.
* @param anchorNode - The anchor node of a selection.
* @param _anchorOffset - The amount of space offset from the anchor to the focus.
* @param focusNode - The current focus.
* @param _focusOffset - The amount of space offset from the focus to the anchor.
* @returns The range of selection for the DOM that was created.
*/
function createDOMRange$1(editor, anchorNode, _anchorOffset, focusNode, _focusOffset) {
	const anchorKey = anchorNode.getKey();
	const focusKey = focusNode.getKey();
	const range = document.createRange();
	let anchorDOM = editor.getElementByKey(anchorKey);
	let focusDOM = editor.getElementByKey(focusKey);
	let anchorOffset = _anchorOffset;
	let focusOffset = _focusOffset;
	if ($isTextNode(anchorNode)) anchorDOM = getDOMTextNode(anchorDOM);
	if ($isTextNode(focusNode)) focusDOM = getDOMTextNode(focusDOM);
	if (anchorNode === void 0 || focusNode === void 0 || anchorDOM === null || focusDOM === null) return null;
	if (anchorDOM.nodeName === "BR") [anchorDOM, anchorOffset] = getDOMIndexWithinParent(anchorDOM);
	if (focusDOM.nodeName === "BR") [focusDOM, focusOffset] = getDOMIndexWithinParent(focusDOM);
	const firstChild = anchorDOM.firstChild;
	if (anchorDOM === focusDOM && firstChild != null && firstChild.nodeName === "BR" && anchorOffset === 0 && focusOffset === 0) focusOffset = 1;
	try {
		range.setStart(anchorDOM, anchorOffset);
		range.setEnd(focusDOM, focusOffset);
	} catch (_e) {
		return null;
	}
	if (range.collapsed && (anchorOffset !== focusOffset || anchorKey !== focusKey)) {
		range.setStart(focusDOM, focusOffset);
		range.setEnd(anchorDOM, anchorOffset);
	}
	return range;
}
/**
* Creates DOMRects, generally used to help the editor find a specific location on the screen.
* @param editor - The lexical editor
* @param range - A fragment of a document that can contain nodes and parts of text nodes.
* @returns The selectionRects as an array.
*/
function createRectsFromDOMRange$1(editor, range) {
	const rootElement = editor.getRootElement();
	if (rootElement === null) return [];
	const rootRect = rootElement.getBoundingClientRect();
	const computedStyle = getComputedStyle(rootElement);
	const rootPadding = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
	const selectionRects = Array.from(range.getClientRects());
	let selectionRectsLength = selectionRects.length;
	selectionRects.sort((a, b) => {
		const top = a.top - b.top;
		if (Math.abs(top) <= 3) return a.left - b.left;
		return top;
	});
	let prevRect;
	for (let i = 0; i < selectionRectsLength; i++) {
		const selectionRect = selectionRects[i];
		const isOverlappingRect = prevRect && prevRect.top <= selectionRect.top && prevRect.top + prevRect.height > selectionRect.top && prevRect.left + prevRect.width > selectionRect.left;
		const selectionSpansElement = selectionRect.width + rootPadding === rootRect.width;
		if (isOverlappingRect || selectionSpansElement) {
			selectionRects.splice(i--, 1);
			selectionRectsLength--;
			continue;
		}
		prevRect = selectionRect;
	}
	return selectionRects;
}
/**
* Given a CSS string, returns the parsed style object.
* @param css - The CSS property as a string.
* @returns The value of the given CSS property.
*/
function getCSSFromStyleObject$1(styles) {
	let css = "";
	for (const style in styles) if (style) css += `${style}: ${styles[style]};`;
	return css;
}
/**
* Gets the computed DOM styles of the element.
* @param element - The node to check the styles for.
* @returns the computed styles of the element or null if there is no DOM element or no default view for the document.
*/
function $getComputedStyleForElement$1(element) {
	const domElement = $getEditor().getElementByKey(element.getKey());
	if (domElement === null) return null;
	const view = domElement.ownerDocument.defaultView;
	if (view === null) return null;
	return view.getComputedStyle(domElement);
}
/**
* Gets the computed DOM styles of the parent of the node.
* @param node - The node to check its parent's styles for.
* @returns the computed styles of the node or null if there is no DOM element or no default view for the document.
*/
function $getComputedStyleForParent$1(node) {
	return $getComputedStyleForElement$1($isRootNode(node) ? node : node.getParentOrThrow());
}
/**
* Determines whether a node's parent is RTL.
* @param node - The node to check whether it is RTL.
* @returns whether the node is RTL.
*/
function $isParentRTL$1(node) {
	const styles = $getComputedStyleForParent$1(node);
	return styles !== null && styles.direction === "rtl";
}
/**
* Generally used to append text content to HTML and JSON. Grabs the text content and "slices"
* it to be generated into the new TextNode.
* @param selection - The selection containing the node whose TextNode is to be edited.
* @param textNode - The TextNode to be edited.
* @param mutates - 'clone' to return a clone before mutating, 'self' to update in-place
* @returns The updated TextNode or clone.
*/
function $sliceSelectedTextNodeContent$1(selection, textNode, mutates = "self") {
	const anchorAndFocus = selection.getStartEndPoints();
	if (textNode.isSelected(selection) && !$isTokenOrSegmented(textNode) && anchorAndFocus !== null) {
		const [anchor, focus] = anchorAndFocus;
		const isBackward = selection.isBackward();
		const anchorNode = anchor.getNode();
		const focusNode = focus.getNode();
		const isAnchor = textNode.is(anchorNode);
		const isFocus = textNode.is(focusNode);
		if (isAnchor || isFocus) {
			const [anchorOffset, focusOffset] = $getCharacterOffsets(selection);
			const isSame = anchorNode.is(focusNode);
			const isFirst = textNode.is(isBackward ? focusNode : anchorNode);
			const isLast = textNode.is(isBackward ? anchorNode : focusNode);
			let startOffset = 0;
			let endOffset = void 0;
			if (isSame) {
				startOffset = anchorOffset > focusOffset ? focusOffset : anchorOffset;
				endOffset = anchorOffset > focusOffset ? anchorOffset : focusOffset;
			} else if (isFirst) {
				startOffset = isBackward ? focusOffset : anchorOffset;
				endOffset = void 0;
			} else if (isLast) {
				const offset = isBackward ? anchorOffset : focusOffset;
				startOffset = 0;
				endOffset = offset;
			}
			const text = textNode.__text.slice(startOffset, endOffset);
			if (text !== textNode.__text) {
				if (mutates === "clone") textNode = $cloneWithPropertiesEphemeral(textNode);
				textNode.__text = text;
			}
		}
	}
	return textNode;
}
/**
* Determines if the current selection is at the end of the node.
* @param point - The point of the selection to test.
* @returns true if the provided point offset is in the last possible position, false otherwise.
*/
function $isAtNodeEnd$1(point) {
	if (point.type === "text") return point.offset === point.getNode().getTextContentSize();
	const node = point.getNode();
	if (!$isElementNode(node)) formatDevErrorMessage$1(`isAtNodeEnd: node must be a TextNode or ElementNode`);
	return point.offset === node.getChildrenSize();
}
/**
* Trims text from a node in order to shorten it, eg. to enforce a text's max length. If it deletes text
* that is an ancestor of the anchor then it will leave 2 indents, otherwise, if no text content exists, it deletes
* the TextNode. It will move the focus to either the end of any left over text or beginning of a new TextNode.
* @param editor - The lexical editor.
* @param anchor - The anchor of the current selection, where the selection should be pointing.
* @param delCount - The amount of characters to delete. Useful as a dynamic variable eg. textContentSize - maxLength;
*/
function $trimTextContentFromAnchor$1(editor, anchor, delCount) {
	let currentNode = anchor.getNode();
	let remaining = delCount;
	if ($isElementNode(currentNode)) {
		const descendantNode = currentNode.getDescendantByIndex(anchor.offset);
		if (descendantNode !== null) currentNode = descendantNode;
	}
	while (remaining > 0 && currentNode !== null) {
		if ($isElementNode(currentNode)) {
			const lastDescendant = currentNode.getLastDescendant();
			if (lastDescendant !== null) currentNode = lastDescendant;
		}
		let nextNode = currentNode.getPreviousSibling();
		let additionalElementWhitespace = 0;
		if (nextNode === null) {
			let parent = currentNode.getParentOrThrow();
			let parentSibling = parent.getPreviousSibling();
			while (parentSibling === null) {
				parent = parent.getParent();
				if (parent === null) {
					nextNode = null;
					break;
				}
				parentSibling = parent.getPreviousSibling();
			}
			if (parent !== null) {
				additionalElementWhitespace = parent.isInline() ? 0 : 2;
				nextNode = parentSibling;
			}
		}
		let text = currentNode.getTextContent();
		if (text === "" && $isElementNode(currentNode) && !currentNode.isInline()) text = "\n\n";
		const currentNodeSize = text.length;
		if (!$isTextNode(currentNode) || remaining >= currentNodeSize) {
			const parent = currentNode.getParent();
			currentNode.remove();
			if (parent != null && parent.getChildrenSize() === 0 && !$isRootNode(parent)) parent.remove();
			remaining -= currentNodeSize + additionalElementWhitespace;
			currentNode = nextNode;
		} else {
			const key = currentNode.getKey();
			const prevTextContent = editor.getEditorState().read(() => {
				const prevNode = $getNodeByKey(key);
				if ($isTextNode(prevNode) && prevNode.isSimpleText()) return prevNode.getTextContent();
				return null;
			});
			const offset = currentNodeSize - remaining;
			const slicedText = text.slice(0, offset);
			if (prevTextContent !== null && prevTextContent !== text) {
				const prevSelection = $getPreviousSelection();
				let target = currentNode;
				if (!currentNode.isSimpleText()) {
					const textNode = $createTextNode(prevTextContent);
					currentNode.replace(textNode);
					target = textNode;
				} else currentNode.setTextContent(prevTextContent);
				if ($isRangeSelection(prevSelection) && prevSelection.isCollapsed()) {
					const prevOffset = prevSelection.anchor.offset;
					target.select(prevOffset, prevOffset);
				}
			} else if (currentNode.isSimpleText()) {
				const isSelected = anchor.key === key;
				let anchorOffset = anchor.offset;
				if (anchorOffset < remaining) anchorOffset = currentNodeSize;
				const splitStart = isSelected ? anchorOffset - remaining : 0;
				const splitEnd = isSelected ? anchorOffset : offset;
				if (isSelected && splitStart === 0) {
					const [excessNode] = currentNode.splitText(splitStart, splitEnd);
					excessNode.remove();
				} else {
					const [, excessNode] = currentNode.splitText(splitStart, splitEnd);
					excessNode.remove();
				}
			} else {
				const textNode = $createTextNode(slicedText);
				currentNode.replace(textNode);
			}
			remaining = 0;
		}
	}
}
/**
* @deprecated node styles are parsed on demand and not cached eternally
*/
const $addNodeStyle$1 = warnOnlyOnce("$addNodeStyle is a deprecated no-op and calls should be removed");
/**
* Applies the provided styles to the given TextNode, ElementNode, or
* collapsed RangeSelection.
*
* @param target - The TextNode, ElementNode, or collapsed RangeSelection to apply the styles to
* @param patch - The patch to apply, which can include multiple styles. \\{CSSProperty: value\\} . Can also accept a function that returns the new property value.
*/
function $patchStyle(target, patch) {
	if (!($isRangeSelection(target) ? target.isCollapsed() : $isTextNode(target) || $isElementNode(target))) formatDevErrorMessage$1(`$patchStyle must only be called with a TextNode, ElementNode, or collapsed RangeSelection`);
	const prevStyles = getStyleObjectFromCSS($isRangeSelection(target) ? target.style : $isTextNode(target) ? target.getStyle() : target.getTextStyle());
	const newCSSText = getCSSFromStyleObject$1(Object.entries(patch).reduce((styles, [key, value]) => {
		if (typeof value === "function") styles[key] = value(prevStyles[key], target);
		else if (value === null) delete styles[key];
		else styles[key] = value;
		return styles;
	}, { ...prevStyles }));
	if ($isRangeSelection(target) || $isTextNode(target)) target.setStyle(newCSSText);
	else target.setTextStyle(newCSSText);
}
/**
* Applies the provided styles to the TextNodes in the provided Selection.
* Will update partially selected TextNodes by splitting the TextNode and applying
* the styles to the appropriate one.
* @param selection - The selected node(s) to update.
* @param patch - The patch to apply, which can include multiple styles. \\{CSSProperty: value\\} . Can also accept a function that returns the new property value.
*/
function $patchStyleText$1(selection, patch) {
	if ($isRangeSelection(selection) && selection.isCollapsed()) {
		$patchStyle(selection, patch);
		const emptyNode = selection.anchor.getNode();
		if ($isElementNode(emptyNode) && emptyNode.isEmpty()) $patchStyle(emptyNode, patch);
	}
	$forEachSelectedTextNode$1((textNode) => {
		$patchStyle(textNode, patch);
	});
	const nodes = selection.getNodes();
	if (nodes.length > 0) {
		const patchedElementKeys = /* @__PURE__ */ new Set();
		for (const node of nodes) {
			if (!$isElementNode(node) || !node.canBeEmpty() || node.getChildrenSize() !== 0) continue;
			const key = node.getKey();
			if (patchedElementKeys.has(key)) continue;
			patchedElementKeys.add(key);
			$patchStyle(node, patch);
		}
	}
}
function $forEachSelectedTextNode$1(fn) {
	const selection = $getSelection();
	if (!selection) return;
	const slicedTextNodes = /* @__PURE__ */ new Map();
	const getSliceIndices = (node) => slicedTextNodes.get(node.getKey()) || [0, node.getTextContentSize()];
	if ($isRangeSelection(selection)) {
		for (const slice of $caretRangeFromSelection(selection).getTextSlices()) if (slice) slicedTextNodes.set(slice.caret.origin.getKey(), slice.getSliceIndices());
	}
	const selectedNodes = selection.getNodes();
	for (const selectedNode of selectedNodes) {
		if (!($isTextNode(selectedNode) && selectedNode.canHaveFormat())) continue;
		const [startOffset, endOffset] = getSliceIndices(selectedNode);
		if (endOffset === startOffset) continue;
		if ($isTokenOrSegmented(selectedNode) || startOffset === 0 && endOffset === selectedNode.getTextContentSize()) fn(selectedNode);
		else {
			const replacement = selectedNode.splitText(startOffset, endOffset)[startOffset === 0 ? 0 : 1];
			fn(replacement);
		}
	}
	if ($isRangeSelection(selection) && selection.anchor.type === "text" && selection.focus.type === "text" && selection.anchor.key === selection.focus.key) $ensureForwardRangeSelection$1(selection);
}
/**
* Ensure that the given RangeSelection is not backwards. If it
* is backwards, then the anchor and focus points will be swapped
* in-place. Ensuring that the selection is a writable RangeSelection
* is the responsibility of the caller (e.g. in a read-only context
* you will want to clone $getSelection() before using this).
*
* @param selection a writable RangeSelection
*/
function $ensureForwardRangeSelection$1(selection) {
	if (selection.isBackward()) {
		const { anchor, focus } = selection;
		const { key, offset, type } = anchor;
		anchor.set(focus.key, focus.offset, focus.type);
		focus.set(key, offset, type);
	}
}
function $copyBlockFormatIndent$1(srcNode, destNode) {
	const format = srcNode.getFormatType();
	const indent = srcNode.getIndent();
	if (format !== destNode.getFormatType()) destNode.setFormat(format);
	if (indent !== destNode.getIndent()) destNode.setIndent(indent);
}
/**
* Converts all nodes in the selection that are of one block type to another.
* @param selection - The selected blocks to be converted.
* @param $createElement - The function that creates the node. eg. $createParagraphNode.
* @param $afterCreateElement - The function that updates the new node based on the previous one ($copyBlockFormatIndent by default)
*/
function $setBlocksType$1(selection, $createElement, $afterCreateElement = $copyBlockFormatIndent$1) {
	if (selection === null) return;
	const anchorAndFocus = selection.getStartEndPoints();
	const blockMap = /* @__PURE__ */ new Map();
	let newSelection = null;
	if (anchorAndFocus) {
		const [anchor, focus] = anchorAndFocus;
		newSelection = $createRangeSelection();
		newSelection.anchor.set(anchor.key, anchor.offset, anchor.type);
		newSelection.focus.set(focus.key, focus.offset, focus.type);
		const anchorBlock = $findMatchingParent(anchor.getNode(), INTERNAL_$isBlock);
		const focusBlock = $findMatchingParent(focus.getNode(), INTERNAL_$isBlock);
		if ($isElementNode(anchorBlock)) blockMap.set(anchorBlock.getKey(), anchorBlock);
		if ($isElementNode(focusBlock)) blockMap.set(focusBlock.getKey(), focusBlock);
	}
	for (const node of selection.getNodes()) if ($isElementNode(node) && INTERNAL_$isBlock(node)) blockMap.set(node.getKey(), node);
	else if (anchorAndFocus === null) {
		const ancestorBlock = $findMatchingParent(node, INTERNAL_$isBlock);
		if ($isElementNode(ancestorBlock)) blockMap.set(ancestorBlock.getKey(), ancestorBlock);
	}
	for (const [key, prevNode] of blockMap) {
		const element = $createElement();
		$afterCreateElement(prevNode, element);
		prevNode.replace(element, true);
		if (newSelection) {
			if (key === newSelection.anchor.key) newSelection.anchor.set(element.getKey(), newSelection.anchor.offset, newSelection.anchor.type);
			if (key === newSelection.focus.key) newSelection.focus.set(element.getKey(), newSelection.focus.offset, newSelection.focus.type);
		}
	}
	if (newSelection && selection.is($getSelection())) $setSelection(newSelection);
}
function isPointAttached(point) {
	return point.getNode().isAttached();
}
function $removeParentEmptyElements(startingNode) {
	let node = startingNode;
	while (node !== null && !$isRootOrShadowRoot(node)) {
		const latest = node.getLatest();
		const parentNode = node.getParent();
		if (latest.getChildrenSize() === 0) node.remove(true);
		node = parentNode;
	}
}
/**
* @deprecated In favor of $setBlockTypes
* Wraps all nodes in the selection into another node of the type returned by createElement.
* @param selection - The selection of nodes to be wrapped.
* @param createElement - A function that creates the wrapping ElementNode. eg. $createParagraphNode.
* @param wrappingElement - An element to append the wrapped selection and its children to.
*/
function $wrapNodes$1(selection, createElement, wrappingElement = null) {
	const anchorAndFocus = selection.getStartEndPoints();
	const anchor = anchorAndFocus ? anchorAndFocus[0] : null;
	const nodes = selection.getNodes();
	const nodesLength = nodes.length;
	if (anchor !== null && (nodesLength === 0 || nodesLength === 1 && anchor.type === "element" && anchor.getNode().getChildrenSize() === 0)) {
		const target = anchor.type === "text" ? anchor.getNode().getParentOrThrow() : anchor.getNode();
		const children = target.getChildren();
		let element = createElement();
		element.setFormat(target.getFormatType());
		element.setIndent(target.getIndent());
		children.forEach((child) => element.append(child));
		if (wrappingElement) element = wrappingElement.append(element);
		target.replace(element);
		return;
	}
	let topLevelNode = null;
	let descendants = [];
	for (let i = 0; i < nodesLength; i++) {
		const node = nodes[i];
		if ($isRootOrShadowRoot(node)) {
			$wrapNodesImpl(selection, descendants, descendants.length, createElement, wrappingElement);
			descendants = [];
			topLevelNode = node;
		} else if (topLevelNode === null || topLevelNode !== null && $hasAncestor(node, topLevelNode)) descendants.push(node);
		else {
			$wrapNodesImpl(selection, descendants, descendants.length, createElement, wrappingElement);
			descendants = [node];
		}
	}
	$wrapNodesImpl(selection, descendants, descendants.length, createElement, wrappingElement);
}
/**
* Wraps each node into a new ElementNode.
* @param selection - The selection of nodes to wrap.
* @param nodes - An array of nodes, generally the descendants of the selection.
* @param nodesLength - The length of nodes.
* @param createElement - A function that creates the wrapping ElementNode. eg. $createParagraphNode.
* @param wrappingElement - An element to wrap all the nodes into.
* @returns
*/
function $wrapNodesImpl(selection, nodes, nodesLength, createElement, wrappingElement = null) {
	if (nodes.length === 0) return;
	const firstNode = nodes[0];
	const elementMapping = /* @__PURE__ */ new Map();
	const elements = [];
	let target = $isElementNode(firstNode) ? firstNode : firstNode.getParentOrThrow();
	if (target.isInline()) target = target.getParentOrThrow();
	let targetIsPrevSibling = false;
	while (target !== null) {
		const prevSibling = target.getPreviousSibling();
		if (prevSibling !== null) {
			target = prevSibling;
			targetIsPrevSibling = true;
			break;
		}
		target = target.getParentOrThrow();
		if ($isRootOrShadowRoot(target)) break;
	}
	const emptyElements = /* @__PURE__ */ new Set();
	for (let i = 0; i < nodesLength; i++) {
		const node = nodes[i];
		if ($isElementNode(node) && node.getChildrenSize() === 0) emptyElements.add(node.getKey());
	}
	const movedNodes = /* @__PURE__ */ new Set();
	for (let i = 0; i < nodesLength; i++) {
		const node = nodes[i];
		let parent = node.getParent();
		if (parent !== null && parent.isInline()) parent = parent.getParent();
		if (parent !== null && $isLeafNode(node) && !movedNodes.has(node.getKey())) {
			const parentKey = parent.getKey();
			if (elementMapping.get(parentKey) === void 0) {
				const targetElement = createElement();
				targetElement.setFormat(parent.getFormatType());
				targetElement.setIndent(parent.getIndent());
				elements.push(targetElement);
				elementMapping.set(parentKey, targetElement);
				parent.getChildren().forEach((child) => {
					targetElement.append(child);
					movedNodes.add(child.getKey());
					if ($isElementNode(child)) child.getChildrenKeys().forEach((key) => movedNodes.add(key));
				});
				$removeParentEmptyElements(parent);
			}
		} else if (emptyElements.has(node.getKey())) {
			if (!$isElementNode(node)) formatDevErrorMessage$1(`Expected node in emptyElements to be an ElementNode`);
			const targetElement = createElement();
			targetElement.setFormat(node.getFormatType());
			targetElement.setIndent(node.getIndent());
			elements.push(targetElement);
			node.remove(true);
		}
	}
	if (wrappingElement !== null) for (let i = 0; i < elements.length; i++) {
		const element = elements[i];
		wrappingElement.append(element);
	}
	let lastElement = null;
	if ($isRootOrShadowRoot(target)) if (targetIsPrevSibling) if (wrappingElement !== null) target.insertAfter(wrappingElement);
	else for (let i = elements.length - 1; i >= 0; i--) {
		const element = elements[i];
		target.insertAfter(element);
	}
	else {
		const firstChild = target.getFirstChild();
		if ($isElementNode(firstChild)) target = firstChild;
		if (firstChild === null) if (wrappingElement) target.append(wrappingElement);
		else for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			target.append(element);
			lastElement = element;
		}
		else if (wrappingElement !== null) firstChild.insertBefore(wrappingElement);
		else for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			firstChild.insertBefore(element);
			lastElement = element;
		}
	}
	else if (wrappingElement) target.insertAfter(wrappingElement);
	else for (let i = elements.length - 1; i >= 0; i--) {
		const element = elements[i];
		target.insertAfter(element);
		lastElement = element;
	}
	const prevSelection = $getPreviousSelection();
	if ($isRangeSelection(prevSelection) && isPointAttached(prevSelection.anchor) && isPointAttached(prevSelection.focus)) $setSelection(prevSelection.clone());
	else if (lastElement !== null) lastElement.selectEnd();
	else selection.dirty = true;
}
/**
* Tests if the selection's parent element has vertical writing mode.
* @param selection - The selection whose parent to test.
* @returns true if the selection's parent has vertical writing mode (writing-mode: vertical-rl), false otherwise.
*/
function $isEditorVerticalOrientation(selection) {
	const computedStyle = $getComputedStyle(selection);
	return computedStyle !== null && computedStyle.writingMode === "vertical-rl";
}
/**
* Gets the computed DOM styles of the parent of the selection's anchor node.
* @param selection - The selection to check the styles for.
* @returns the computed styles of the node or null if there is no DOM element or no default view for the document.
*/
function $getComputedStyle(selection) {
	const anchorNode = selection.anchor.getNode();
	if ($isElementNode(anchorNode)) return $getComputedStyleForElement$1(anchorNode);
	return $getComputedStyleForParent$1(anchorNode);
}
/**
* Determines if the default character selection should be overridden. Used with DecoratorNodes
* @param selection - The selection whose default character selection may need to be overridden.
* @param isBackward - Is the selection backwards (the focus comes before the anchor)?
* @returns true if it should be overridden, false if not.
*/
function $shouldOverrideDefaultCharacterSelection$1(selection, isBackward) {
	let adjustedIsBackward = $isEditorVerticalOrientation(selection) ? !isBackward : isBackward;
	if ($isParentElementRTL$1(selection)) adjustedIsBackward = !adjustedIsBackward;
	const focusCaret = $caretFromPoint(selection.focus, adjustedIsBackward ? "previous" : "next");
	if ($isExtendableTextPointCaret(focusCaret)) return false;
	for (const nextCaret of $extendCaretToRange(focusCaret)) {
		if ($isChildCaret(nextCaret)) return !nextCaret.origin.isInline();
		else if ($isElementNode(nextCaret.origin)) continue;
		else if ($isDecoratorNode(nextCaret.origin)) return true;
		break;
	}
	return false;
}
/**
* Moves the selection according to the arguments.
* @param selection - The selected text or nodes.
* @param isHoldingShift - Is the shift key being held down during the operation.
* @param isBackward - Is the selection selected backwards (the focus comes before the anchor)?
* @param granularity - The distance to adjust the current selection.
*/
function $moveCaretSelection$1(selection, isHoldingShift, isBackward, granularity) {
	selection.modify(isHoldingShift ? "extend" : "move", isBackward, granularity);
}
/**
* Tests a parent element for right to left direction.
* @param selection - The selection whose parent is to be tested.
* @returns true if the selections' parent element has a direction of 'rtl' (right to left), false otherwise.
*/
function $isParentElementRTL$1(selection) {
	const computedStyle = $getComputedStyle(selection);
	return computedStyle !== null && computedStyle.direction === "rtl";
}
/**
* Moves selection by character according to arguments.
* @param selection - The selection of the characters to move.
* @param isHoldingShift - Is the shift key being held down during the operation.
* @param isBackward - Is the selection backward (the focus comes before the anchor)?
*/
function $moveCharacter$1(selection, isHoldingShift, isBackward) {
	const isRTL = $isParentElementRTL$1(selection);
	const isVertical = $isEditorVerticalOrientation(selection);
	let adjustedIsBackward;
	if (isVertical) adjustedIsBackward = !isBackward;
	else if (isRTL) adjustedIsBackward = !isBackward;
	else adjustedIsBackward = isBackward;
	$moveCaretSelection$1(selection, isHoldingShift, adjustedIsBackward, "character");
}
/**
* Returns the current value of a CSS property for Nodes, if set. If not set, it returns the defaultValue.
* @param node - The node whose style value to get.
* @param styleProperty - The CSS style property.
* @param defaultValue - The default value for the property.
* @returns The value of the property for node.
*/
function $getNodeStyleValueForProperty(node, styleProperty, defaultValue) {
	const css = node.getStyle();
	const styleObject = getStyleObjectFromCSS(css);
	if (styleObject !== null) return styleObject[styleProperty] || defaultValue;
	return defaultValue;
}
/**
* Returns the current value of a CSS property for TextNodes in the Selection, if set. If not set, it returns the defaultValue.
* If all TextNodes do not have the same value, it returns an empty string.
* @param selection - The selection of TextNodes whose value to find.
* @param styleProperty - The CSS style property.
* @param defaultValue - The default value for the property, defaults to an empty string.
* @returns The value of the property for the selected TextNodes.
*/
function $getSelectionStyleValueForProperty$1(selection, styleProperty, defaultValue = "") {
	let styleValue = null;
	const nodes = selection.getNodes();
	const anchor = selection.anchor;
	const focus = selection.focus;
	const isBackward = selection.isBackward();
	const startNode = isBackward ? focus.getNode() : anchor.getNode();
	const endNode = isBackward ? anchor.getNode() : focus.getNode();
	const startOffset = isBackward ? focus.offset : anchor.offset;
	const endOffset = isBackward ? anchor.offset : focus.offset;
	if ($isRangeSelection(selection) && selection.isCollapsed() && selection.style !== "") {
		const css = selection.style;
		const styleObject = getStyleObjectFromCSS(css);
		if (styleObject !== null && styleProperty in styleObject) return styleObject[styleProperty];
	}
	for (let i = 0; i < nodes.length; i++) {
		const node = nodes[i];
		if (i === 0 && node.is(startNode) && $isTextNode(node) && startOffset === node.getTextContentSize()) continue;
		if (i !== 0 && node.is(endNode) && endOffset === 0) continue;
		if ($isTextNode(node)) {
			const nodeStyleValue = $getNodeStyleValueForProperty(node, styleProperty, defaultValue);
			if (styleValue === null) styleValue = nodeStyleValue;
			else if (styleValue !== nodeStyleValue) {
				styleValue = "";
				break;
			}
		}
	}
	return styleValue === null ? defaultValue : styleValue;
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
/** @deprecated moved to the `lexical` package */
const getStyleObjectFromCSS$2 = getStyleObjectFromCSS;
/** @deprecated renamed to {@link $trimTextContentFromAnchor} by @lexical/eslint-plugin rules-of-lexical */
const trimTextContentFromAnchor$1 = $trimTextContentFromAnchor$1;
//#endregion
//#region node_modules/@lexical/selection/LexicalSelection.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
const mod$1 = LexicalSelection_dev_exports;
mod$1.$addNodeStyle;
mod$1.$cloneWithProperties;
mod$1.$copyBlockFormatIndent;
mod$1.$ensureForwardRangeSelection;
mod$1.$forEachSelectedTextNode;
mod$1.$getComputedStyleForElement;
mod$1.$getComputedStyleForParent;
mod$1.$getSelectionStyleValueForProperty;
mod$1.$isAtNodeEnd;
mod$1.$isParentElementRTL;
mod$1.$isParentRTL;
mod$1.$moveCaretSelection;
mod$1.$moveCharacter;
mod$1.$patchStyleText;
mod$1.$selectAll;
mod$1.$setBlocksType;
mod$1.$shouldOverrideDefaultCharacterSelection;
mod$1.$sliceSelectedTextNodeContent;
mod$1.$trimTextContentFromAnchor;
mod$1.$wrapNodes;
const createDOMRange = mod$1.createDOMRange;
const createRectsFromDOMRange = mod$1.createRectsFromDOMRange;
mod$1.getCSSFromStyleObject;
mod$1.getStyleObjectFromCSS;
mod$1.trimTextContentFromAnchor;
//#endregion
//#region node_modules/@lexical/yjs/LexicalYjs.dev.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var LexicalYjs_dev_exports = /* @__PURE__ */ __exportAll({
	$getYChangeState: () => $getYChangeState$1,
	CLEAR_DIFF_VERSIONS_COMMAND__EXPERIMENTAL: () => CLEAR_DIFF_VERSIONS_COMMAND__EXPERIMENTAL$1,
	CONNECTED_COMMAND: () => CONNECTED_COMMAND$1,
	DIFF_VERSIONS_COMMAND__EXPERIMENTAL: () => DIFF_VERSIONS_COMMAND__EXPERIMENTAL$1,
	TOGGLE_CONNECT_COMMAND: () => TOGGLE_CONNECT_COMMAND$1,
	createBinding: () => createBinding$1,
	createBindingV2__EXPERIMENTAL: () => createBindingV2__EXPERIMENTAL$1,
	createUndoManager: () => createUndoManager$1,
	getAnchorAndFocusCollabNodesForUserState: () => getAnchorAndFocusCollabNodesForUserState$1,
	initLocalState: () => initLocalState$1,
	renderSnapshot__EXPERIMENTAL: () => renderSnapshot__EXPERIMENTAL$1,
	setLocalStateFocus: () => setLocalStateFocus$1,
	syncCursorPositions: () => syncCursorPositions$1,
	syncLexicalUpdateToYjs: () => syncLexicalUpdateToYjs$1,
	syncLexicalUpdateToYjsV2__EXPERIMENTAL: () => syncLexicalUpdateToYjsV2__EXPERIMENTAL$1,
	syncYjsChangesToLexical: () => syncYjsChangesToLexical$1,
	syncYjsChangesToLexicalV2__EXPERIMENTAL: () => syncYjsChangesToLexicalV2__EXPERIMENTAL$1,
	syncYjsStateToLexicalV2__EXPERIMENTAL: () => syncYjsStateToLexicalV2__EXPERIMENTAL$1
});
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function formatDevErrorMessage(message) {
	throw new Error(message);
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function simpleDiffWithCursor(a, b, cursor) {
	const aLength = a.length;
	const bLength = b.length;
	let left = 0;
	let right = 0;
	while (left < aLength && left < bLength && a[left] === b[left] && left < cursor) left++;
	while (right + left < aLength && right + left < bLength && a[aLength - right - 1] === b[bLength - right - 1]) right++;
	while (right + left < aLength && right + left < bLength && a[left] === b[left]) left++;
	return {
		index: left,
		insert: b.slice(left, bLength - right),
		remove: aLength - left - right
	};
}
var CollabDecoratorNode = class {
	_xmlElem;
	_key;
	_parent;
	_type;
	constructor(xmlElem, parent, type) {
		this._key = "";
		this._xmlElem = xmlElem;
		this._parent = parent;
		this._type = type;
	}
	getPrevNode(nodeMap) {
		if (nodeMap === null) return null;
		const node = nodeMap.get(this._key);
		return $isDecoratorNode(node) ? node : null;
	}
	getNode() {
		const node = $getNodeByKey(this._key);
		return $isDecoratorNode(node) ? node : null;
	}
	getSharedType() {
		return this._xmlElem;
	}
	getType() {
		return this._type;
	}
	getKey() {
		return this._key;
	}
	getSize() {
		return 1;
	}
	getOffset() {
		return this._parent.getChildOffset(this);
	}
	syncPropertiesFromLexical(binding, nextLexicalNode, prevNodeMap) {
		const prevLexicalNode = this.getPrevNode(prevNodeMap);
		const xmlElem = this._xmlElem;
		syncPropertiesFromLexical(binding, xmlElem, prevLexicalNode, nextLexicalNode);
	}
	syncPropertiesFromYjs(binding, keysChanged) {
		const lexicalNode = this.getNode();
		if (!(lexicalNode !== null)) formatDevErrorMessage(`syncPropertiesFromYjs: could not find decorator node`);
		const xmlElem = this._xmlElem;
		$syncPropertiesFromYjs(binding, xmlElem, lexicalNode, keysChanged);
	}
	destroy(binding) {
		const collabNodeMap = binding.collabNodeMap;
		if (collabNodeMap.get(this._key) === this) collabNodeMap.delete(this._key);
	}
};
function $createCollabDecoratorNode(xmlElem, parent, type) {
	const collabNode = new CollabDecoratorNode(xmlElem, parent, type);
	xmlElem._collabNode = collabNode;
	return collabNode;
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var CollabLineBreakNode = class {
	_map;
	_key;
	_parent;
	_type;
	constructor(map, parent) {
		this._key = "";
		this._map = map;
		this._parent = parent;
		this._type = "linebreak";
	}
	getNode() {
		const node = $getNodeByKey(this._key);
		return $isLineBreakNode(node) ? node : null;
	}
	getKey() {
		return this._key;
	}
	getSharedType() {
		return this._map;
	}
	getType() {
		return this._type;
	}
	getSize() {
		return 1;
	}
	getOffset() {
		return this._parent.getChildOffset(this);
	}
	destroy(binding) {
		const collabNodeMap = binding.collabNodeMap;
		if (collabNodeMap.get(this._key) === this) collabNodeMap.delete(this._key);
	}
};
function $createCollabLineBreakNode(map, parent) {
	const collabNode = new CollabLineBreakNode(map, parent);
	map._collabNode = collabNode;
	return collabNode;
}
function $diffTextContentAndApplyDelta(collabNode, key, prevText, nextText) {
	const selection = $getSelection();
	let cursorOffset = nextText.length;
	if ($isRangeSelection(selection) && selection.isCollapsed()) {
		const anchor = selection.anchor;
		if (anchor.key === key) cursorOffset = anchor.offset;
	}
	const diff = simpleDiffWithCursor(prevText, nextText, cursorOffset);
	collabNode.spliceText(diff.index, diff.remove, diff.insert);
}
var CollabTextNode = class {
	_map;
	_key;
	_parent;
	_text;
	_type;
	_normalized;
	constructor(map, text, parent, type) {
		this._key = "";
		this._map = map;
		this._parent = parent;
		this._text = text;
		this._type = type;
		this._normalized = false;
	}
	getPrevNode(nodeMap) {
		if (nodeMap === null) return null;
		const node = nodeMap.get(this._key);
		return $isTextNode(node) ? node : null;
	}
	getNode() {
		const node = $getNodeByKey(this._key);
		return $isTextNode(node) ? node : null;
	}
	getSharedType() {
		return this._map;
	}
	getType() {
		return this._type;
	}
	getKey() {
		return this._key;
	}
	getSize() {
		return this._text.length + (this._normalized ? 0 : 1);
	}
	getOffset() {
		return this._parent.getChildOffset(this);
	}
	spliceText(index, delCount, newText) {
		const xmlText = this._parent._xmlText;
		const offset = this.getOffset() + 1 + index;
		if (delCount !== 0) xmlText.delete(offset, delCount);
		if (newText !== "") xmlText.insert(offset, newText);
	}
	syncPropertiesAndTextFromLexical(binding, nextLexicalNode, prevNodeMap) {
		const prevLexicalNode = this.getPrevNode(prevNodeMap);
		const nextText = nextLexicalNode.__text;
		syncPropertiesFromLexical(binding, this._map, prevLexicalNode, nextLexicalNode);
		if (prevLexicalNode !== null) {
			const prevText = prevLexicalNode.__text;
			if (prevText !== nextText) {
				const key = nextLexicalNode.__key;
				$diffTextContentAndApplyDelta(this, key, prevText, nextText);
				this._text = nextText;
			}
		}
	}
	syncPropertiesAndTextFromYjs(binding, keysChanged) {
		const lexicalNode = this.getNode();
		if (!(lexicalNode !== null)) formatDevErrorMessage(`syncPropertiesAndTextFromYjs: could not find decorator node`);
		$syncPropertiesFromYjs(binding, this._map, lexicalNode, keysChanged);
		const collabText = this._text;
		if (lexicalNode.__text !== collabText) lexicalNode.setTextContent(collabText);
	}
	destroy(binding) {
		const collabNodeMap = binding.collabNodeMap;
		if (collabNodeMap.get(this._key) === this) collabNodeMap.delete(this._key);
	}
};
function $createCollabTextNode(map, text, parent, type) {
	const collabNode = new CollabTextNode(map, text, parent, type);
	map._collabNode = collabNode;
	return collabNode;
}
var CollabElementNode = class CollabElementNode {
	_key;
	_children;
	_xmlText;
	_type;
	_parent;
	constructor(xmlText, parent, type) {
		this._key = "";
		this._children = [];
		this._xmlText = xmlText;
		this._type = type;
		this._parent = parent;
	}
	getPrevNode(nodeMap) {
		if (nodeMap === null) return null;
		const node = nodeMap.get(this._key);
		return $isElementNode(node) ? node : null;
	}
	getNode() {
		const node = $getNodeByKey(this._key);
		return $isElementNode(node) ? node : null;
	}
	getSharedType() {
		return this._xmlText;
	}
	getType() {
		return this._type;
	}
	getKey() {
		return this._key;
	}
	isEmpty() {
		return this._children.length === 0;
	}
	getSize() {
		return 1;
	}
	getOffset() {
		const collabElementNode = this._parent;
		if (!(collabElementNode !== null)) formatDevErrorMessage(`getOffset: could not find collab element node`);
		return collabElementNode.getChildOffset(this);
	}
	syncPropertiesFromYjs(binding, keysChanged) {
		const lexicalNode = this.getNode();
		if (!(lexicalNode !== null)) formatDevErrorMessage(`syncPropertiesFromYjs: could not find element node`);
		$syncPropertiesFromYjs(binding, this._xmlText, lexicalNode, keysChanged);
	}
	applyChildrenYjsDelta(binding, deltas) {
		const children = this._children;
		let currIndex = 0;
		let pendingSplitText = null;
		for (let i = 0; i < deltas.length; i++) {
			const delta = deltas[i];
			const insertDelta = delta.insert;
			const deleteDelta = delta.delete;
			if (delta.retain != null) currIndex += delta.retain;
			else if (typeof deleteDelta === "number") {
				let deletionSize = deleteDelta;
				while (deletionSize > 0) {
					const { node, nodeIndex, offset, length } = getPositionFromElementAndOffset(this, currIndex, false);
					if (node instanceof CollabElementNode || node instanceof CollabLineBreakNode || node instanceof CollabDecoratorNode) {
						children.splice(nodeIndex, 1);
						deletionSize -= 1;
					} else if (node instanceof CollabTextNode) {
						const delCount = Math.min(deletionSize, length);
						const prevCollabNode = nodeIndex !== 0 ? children[nodeIndex - 1] : null;
						const nodeSize = node.getSize();
						if (offset === 0 && length === nodeSize) {
							children.splice(nodeIndex, 1);
							const danglingText = spliceString(node._text, offset, delCount - 1, "");
							if (danglingText.length > 0) if (prevCollabNode instanceof CollabTextNode) prevCollabNode._text += danglingText;
							else this._xmlText.delete(offset, danglingText.length);
						} else node._text = spliceString(node._text, offset, delCount, "");
						deletionSize -= delCount;
					} else break;
				}
			} else if (insertDelta != null) if (typeof insertDelta === "string") {
				const { node, offset } = getPositionFromElementAndOffset(this, currIndex, true);
				if (node instanceof CollabTextNode) node._text = spliceString(node._text, offset, 0, insertDelta);
				else this._xmlText.delete(offset, insertDelta.length);
				currIndex += insertDelta.length;
			} else {
				const sharedType = insertDelta;
				const { node, nodeIndex, length } = getPositionFromElementAndOffset(this, currIndex, false);
				const collabNode = $getOrInitCollabNodeFromSharedType(binding, sharedType, this);
				if (node instanceof CollabTextNode && length > 0 && length < node._text.length) {
					const text = node._text;
					const splitIdx = text.length - length;
					node._text = spliceString(text, splitIdx, length, "");
					children.splice(nodeIndex + 1, 0, collabNode);
					pendingSplitText = spliceString(text, 0, splitIdx, "");
				} else children.splice(nodeIndex, 0, collabNode);
				if (pendingSplitText !== null && collabNode instanceof CollabTextNode) {
					collabNode._text = pendingSplitText + collabNode._text;
					pendingSplitText = null;
				}
				currIndex += 1;
			}
			else throw new Error("Unexpected delta format");
		}
	}
	syncChildrenFromYjs(binding) {
		const lexicalNode = this.getNode();
		if (!(lexicalNode !== null)) formatDevErrorMessage(`syncChildrenFromYjs: could not find element node`);
		const key = lexicalNode.__key;
		const prevLexicalChildrenKeys = $createChildrenArray(lexicalNode, null);
		const lexicalChildrenKeysLength = prevLexicalChildrenKeys.length;
		const collabChildren = this._children;
		const collabChildrenLength = collabChildren.length;
		const collabNodeMap = binding.collabNodeMap;
		const visitedKeys = /* @__PURE__ */ new Set();
		let collabKeys;
		let writableLexicalNode;
		let prevIndex = 0;
		let prevChildNode = null;
		if (collabChildrenLength !== lexicalChildrenKeysLength) writableLexicalNode = lexicalNode.getWritable();
		for (let i = 0; i < collabChildrenLength; i++) {
			const lexicalChildKey = prevLexicalChildrenKeys[prevIndex];
			const childCollabNode = collabChildren[i];
			const collabLexicalChildNode = childCollabNode.getNode();
			const collabKey = childCollabNode._key;
			if (collabLexicalChildNode !== null && lexicalChildKey === collabKey) {
				const childNeedsUpdating = $isTextNode(collabLexicalChildNode);
				visitedKeys.add(lexicalChildKey);
				if (childNeedsUpdating) {
					childCollabNode._key = lexicalChildKey;
					if (childCollabNode instanceof CollabElementNode) {
						const xmlText = childCollabNode._xmlText;
						childCollabNode.syncPropertiesFromYjs(binding, null);
						childCollabNode.applyChildrenYjsDelta(binding, xmlText.toDelta());
						childCollabNode.syncChildrenFromYjs(binding);
					} else if (childCollabNode instanceof CollabTextNode) childCollabNode.syncPropertiesAndTextFromYjs(binding, null);
					else if (childCollabNode instanceof CollabDecoratorNode) childCollabNode.syncPropertiesFromYjs(binding, null);
					else if (!(childCollabNode instanceof CollabLineBreakNode)) formatDevErrorMessage(`syncChildrenFromYjs: expected text, element, decorator, or linebreak collab node`);
				}
				prevChildNode = collabLexicalChildNode;
				prevIndex++;
			} else {
				if (collabKeys === void 0) {
					collabKeys = /* @__PURE__ */ new Set();
					for (let s = 0; s < collabChildrenLength; s++) {
						const childKey = collabChildren[s]._key;
						if (childKey !== "") collabKeys.add(childKey);
					}
				}
				if (collabLexicalChildNode !== null && lexicalChildKey !== void 0 && !collabKeys.has(lexicalChildKey)) {
					const nodeToRemove = $getNodeByKeyOrThrow(lexicalChildKey);
					removeFromParent(nodeToRemove);
					i--;
					prevIndex++;
					continue;
				}
				writableLexicalNode = lexicalNode.getWritable();
				const lexicalChildNode = createLexicalNodeFromCollabNode(binding, childCollabNode, key);
				const childKey = lexicalChildNode.__key;
				collabNodeMap.set(childKey, childCollabNode);
				if (prevChildNode === null) {
					const nextSibling = writableLexicalNode.getFirstChild();
					writableLexicalNode.__first = childKey;
					if (nextSibling !== null) {
						const writableNextSibling = nextSibling.getWritable();
						writableNextSibling.__prev = childKey;
						lexicalChildNode.__next = writableNextSibling.__key;
					}
				} else {
					const writablePrevChildNode = prevChildNode.getWritable();
					const nextSibling = prevChildNode.getNextSibling();
					writablePrevChildNode.__next = childKey;
					lexicalChildNode.__prev = prevChildNode.__key;
					if (nextSibling !== null) {
						const writableNextSibling = nextSibling.getWritable();
						writableNextSibling.__prev = childKey;
						lexicalChildNode.__next = writableNextSibling.__key;
					}
				}
				if (i === collabChildrenLength - 1) writableLexicalNode.__last = childKey;
				writableLexicalNode.__size++;
				prevChildNode = lexicalChildNode;
			}
		}
		for (let i = 0; i < lexicalChildrenKeysLength; i++) {
			const lexicalChildKey = prevLexicalChildrenKeys[i];
			if (!visitedKeys.has(lexicalChildKey)) {
				const lexicalChildNode = $getNodeByKeyOrThrow(lexicalChildKey);
				const collabNode = binding.collabNodeMap.get(lexicalChildKey);
				if (collabNode !== void 0) collabNode.destroy(binding);
				removeFromParent(lexicalChildNode);
			}
		}
	}
	syncPropertiesFromLexical(binding, nextLexicalNode, prevNodeMap) {
		syncPropertiesFromLexical(binding, this._xmlText, this.getPrevNode(prevNodeMap), nextLexicalNode);
	}
	_syncChildFromLexical(binding, index, key, prevNodeMap, dirtyElements, dirtyLeaves) {
		const childCollabNode = this._children[index];
		const nextChildNode = $getNodeByKeyOrThrow(key);
		if (childCollabNode instanceof CollabElementNode && $isElementNode(nextChildNode)) {
			childCollabNode.syncPropertiesFromLexical(binding, nextChildNode, prevNodeMap);
			childCollabNode.syncChildrenFromLexical(binding, nextChildNode, prevNodeMap, dirtyElements, dirtyLeaves);
		} else if (childCollabNode instanceof CollabTextNode && $isTextNode(nextChildNode)) childCollabNode.syncPropertiesAndTextFromLexical(binding, nextChildNode, prevNodeMap);
		else if (childCollabNode instanceof CollabDecoratorNode && $isDecoratorNode(nextChildNode)) childCollabNode.syncPropertiesFromLexical(binding, nextChildNode, prevNodeMap);
	}
	syncChildrenFromLexical(binding, nextLexicalNode, prevNodeMap, dirtyElements, dirtyLeaves) {
		const prevLexicalNode = this.getPrevNode(prevNodeMap);
		const prevChildren = prevLexicalNode === null ? [] : $createChildrenArray(prevLexicalNode, prevNodeMap);
		const nextChildren = $createChildrenArray(nextLexicalNode, null);
		const prevEndIndex = prevChildren.length - 1;
		const nextEndIndex = nextChildren.length - 1;
		const collabNodeMap = binding.collabNodeMap;
		let prevChildrenSet;
		let nextChildrenSet;
		let prevIndex = 0;
		let nextIndex = 0;
		while (prevIndex <= prevEndIndex && nextIndex <= nextEndIndex) {
			const prevKey = prevChildren[prevIndex];
			const nextKey = nextChildren[nextIndex];
			if (prevKey === nextKey) {
				this._syncChildFromLexical(binding, nextIndex, nextKey, prevNodeMap, dirtyElements, dirtyLeaves);
				prevIndex++;
				nextIndex++;
			} else {
				if (prevChildrenSet === void 0) prevChildrenSet = new Set(prevChildren);
				if (nextChildrenSet === void 0) nextChildrenSet = new Set(nextChildren);
				const nextHasPrevKey = nextChildrenSet.has(prevKey);
				const prevHasNextKey = prevChildrenSet.has(nextKey);
				if (!nextHasPrevKey) {
					this.splice(binding, nextIndex, 1);
					prevIndex++;
				} else {
					const collabNode = $createCollabNodeFromLexicalNode(binding, $getNodeByKeyOrThrow(nextKey), this);
					collabNodeMap.set(nextKey, collabNode);
					if (prevHasNextKey) {
						this.splice(binding, nextIndex, 1, collabNode);
						prevIndex++;
						nextIndex++;
					} else {
						this.splice(binding, nextIndex, 0, collabNode);
						nextIndex++;
					}
				}
			}
		}
		const appendNewChildren = prevIndex > prevEndIndex;
		const removeOldChildren = nextIndex > nextEndIndex;
		if (appendNewChildren && !removeOldChildren) for (; nextIndex <= nextEndIndex; ++nextIndex) {
			const key = nextChildren[nextIndex];
			const collabNode = $createCollabNodeFromLexicalNode(binding, $getNodeByKeyOrThrow(key), this);
			this.append(collabNode);
			collabNodeMap.set(key, collabNode);
		}
		else if (removeOldChildren && !appendNewChildren) for (let i = this._children.length - 1; i >= nextIndex; i--) this.splice(binding, i, 1);
	}
	append(collabNode) {
		const xmlText = this._xmlText;
		const children = this._children;
		const lastChild = children[children.length - 1];
		const offset = lastChild !== void 0 ? lastChild.getOffset() + lastChild.getSize() : 0;
		if (collabNode instanceof CollabElementNode) xmlText.insertEmbed(offset, collabNode._xmlText);
		else if (collabNode instanceof CollabTextNode) {
			const map = collabNode._map;
			if (map.parent === null) xmlText.insertEmbed(offset, map);
			xmlText.insert(offset + 1, collabNode._text);
		} else if (collabNode instanceof CollabLineBreakNode) xmlText.insertEmbed(offset, collabNode._map);
		else if (collabNode instanceof CollabDecoratorNode) xmlText.insertEmbed(offset, collabNode._xmlElem);
		this._children.push(collabNode);
	}
	splice(binding, index, delCount, collabNode) {
		const children = this._children;
		const child = children[index];
		if (child === void 0) {
			if (!(collabNode !== void 0)) formatDevErrorMessage(`splice: could not find collab element node`);
			this.append(collabNode);
			return;
		}
		const offset = child.getOffset();
		if (!(offset !== -1)) formatDevErrorMessage(`splice: expected offset to be greater than zero`);
		const xmlText = this._xmlText;
		if (delCount !== 0) xmlText.delete(offset, child.getSize());
		if (collabNode instanceof CollabElementNode) xmlText.insertEmbed(offset, collabNode._xmlText);
		else if (collabNode instanceof CollabTextNode) {
			const map = collabNode._map;
			if (map.parent === null) xmlText.insertEmbed(offset, map);
			xmlText.insert(offset + 1, collabNode._text);
		} else if (collabNode instanceof CollabLineBreakNode) xmlText.insertEmbed(offset, collabNode._map);
		else if (collabNode instanceof CollabDecoratorNode) xmlText.insertEmbed(offset, collabNode._xmlElem);
		if (delCount !== 0) {
			const childrenToDelete = children.slice(index, index + delCount);
			for (let i = 0; i < childrenToDelete.length; i++) childrenToDelete[i].destroy(binding);
		}
		if (collabNode !== void 0) children.splice(index, delCount, collabNode);
		else children.splice(index, delCount);
	}
	getChildOffset(collabNode) {
		let offset = 0;
		const children = this._children;
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (child === collabNode) return offset;
			offset += child.getSize();
		}
		return -1;
	}
	destroy(binding) {
		const collabNodeMap = binding.collabNodeMap;
		const children = this._children;
		for (let i = 0; i < children.length; i++) children[i].destroy(binding);
		if (collabNodeMap.get(this._key) === this) collabNodeMap.delete(this._key);
	}
};
function $createCollabElementNode(xmlText, parent, type) {
	const collabNode = new CollabElementNode(xmlText, parent, type);
	xmlText._collabNode = collabNode;
	return collabNode;
}
var CollabV2Mapping = class {
	_nodeMap = /* @__PURE__ */ new Map();
	_sharedTypeToNodeKeys = /* @__PURE__ */ new Map();
	_nodeKeyToSharedType = /* @__PURE__ */ new Map();
	set(sharedType, node) {
		const isArray = node instanceof Array;
		this.delete(sharedType);
		const nodes = isArray ? node : [node];
		for (const n of nodes) {
			const key = n.getKey();
			if (this._nodeKeyToSharedType.has(key)) {
				const otherSharedType = this._nodeKeyToSharedType.get(key);
				const keyIndex = this._sharedTypeToNodeKeys.get(otherSharedType).indexOf(key);
				if (keyIndex !== -1) this._sharedTypeToNodeKeys.get(otherSharedType).splice(keyIndex, 1);
				this._nodeKeyToSharedType.delete(key);
				this._nodeMap.delete(key);
			}
		}
		if (sharedType instanceof YXmlText) {
			if (!isArray) formatDevErrorMessage(`Text nodes must be mapped as an array`);
			if (node.length === 0) return;
			this._sharedTypeToNodeKeys.set(sharedType, node.map((n) => n.getKey()));
			for (const n of node) {
				this._nodeMap.set(n.getKey(), n);
				this._nodeKeyToSharedType.set(n.getKey(), sharedType);
			}
		} else {
			if (!!isArray) formatDevErrorMessage(`Element nodes must be mapped as a single node`);
			if (!!$isTextNode(node)) formatDevErrorMessage(`Text nodes must be mapped to XmlText`);
			this._sharedTypeToNodeKeys.set(sharedType, [node.getKey()]);
			this._nodeMap.set(node.getKey(), node);
			this._nodeKeyToSharedType.set(node.getKey(), sharedType);
		}
	}
	get(sharedType) {
		const nodes = this._sharedTypeToNodeKeys.get(sharedType);
		if (nodes === void 0) return;
		if (sharedType instanceof YXmlText) {
			const arr = Array.from(nodes.map((nodeKey) => this._nodeMap.get(nodeKey)));
			return arr.length > 0 ? arr : void 0;
		}
		return this._nodeMap.get(nodes[0]);
	}
	getSharedType(node) {
		return this._nodeKeyToSharedType.get(node.getKey());
	}
	delete(sharedType) {
		const nodeKeys = this._sharedTypeToNodeKeys.get(sharedType);
		if (nodeKeys === void 0) return;
		for (const nodeKey of nodeKeys) {
			this._nodeMap.delete(nodeKey);
			this._nodeKeyToSharedType.delete(nodeKey);
		}
		this._sharedTypeToNodeKeys.delete(sharedType);
	}
	deleteNode(nodeKey) {
		const sharedType = this._nodeKeyToSharedType.get(nodeKey);
		if (sharedType) this.delete(sharedType);
		this._nodeMap.delete(nodeKey);
	}
	has(sharedType) {
		return this._sharedTypeToNodeKeys.has(sharedType);
	}
	clear() {
		this._nodeMap.clear();
		this._sharedTypeToNodeKeys.clear();
		this._nodeKeyToSharedType.clear();
	}
};
function createBaseBinding(editor, id, doc, docMap, excludedProperties) {
	if (!(doc !== void 0 && doc !== null)) formatDevErrorMessage(`createBinding: doc is null or undefined`);
	const binding = {
		clientID: doc.clientID,
		cursors: /* @__PURE__ */ new Map(),
		cursorsContainer: null,
		doc,
		docMap,
		editor,
		excludedProperties: excludedProperties || /* @__PURE__ */ new Map(),
		id,
		nodeProperties: /* @__PURE__ */ new Map()
	};
	initializeNodeProperties(binding);
	return binding;
}
function createBinding$1(editor, provider, id, doc, docMap, excludedProperties) {
	if (!(doc !== void 0 && doc !== null)) formatDevErrorMessage(`createBinding: doc is null or undefined`);
	const root = $createCollabElementNode(doc.get("root", YXmlText), null, "root");
	root._key = "root";
	return {
		...createBaseBinding(editor, id, doc, docMap, excludedProperties),
		collabNodeMap: /* @__PURE__ */ new Map(),
		root
	};
}
function createBindingV2__EXPERIMENTAL$1(editor, id, doc, docMap, options = {}) {
	if (!(doc !== void 0 && doc !== null)) formatDevErrorMessage(`createBinding: doc is null or undefined`);
	const { excludedProperties, rootName = "root-v2" } = options;
	return {
		...createBaseBinding(editor, id, doc, docMap, excludedProperties),
		mapping: new CollabV2Mapping(),
		root: doc.get(rootName, YXmlElement)
	};
}
function isBindingV1(binding) {
	return Object.hasOwn(binding, "collabNodeMap");
}
const baseExcludedProperties = /* @__PURE__ */ new Set([
	"__key",
	"__parent",
	"__next",
	"__prev",
	"__state"
]);
const elementExcludedProperties = /* @__PURE__ */ new Set([
	"__first",
	"__last",
	"__size"
]);
const rootExcludedProperties = /* @__PURE__ */ new Set(["__cachedText"]);
const textExcludedProperties = /* @__PURE__ */ new Set(["__text"]);
function isExcludedProperty(name, node, binding) {
	if (baseExcludedProperties.has(name) || typeof node[name] === "function") return true;
	if ($isTextNode(node)) {
		if (textExcludedProperties.has(name)) return true;
	} else if ($isElementNode(node)) {
		if (elementExcludedProperties.has(name) || $isRootNode(node) && rootExcludedProperties.has(name)) return true;
	}
	const nodeKlass = node.constructor;
	const excludedProperties = binding.excludedProperties.get(nodeKlass);
	return excludedProperties != null && excludedProperties.has(name);
}
function initializeNodeProperties(binding) {
	const { editor, nodeProperties } = binding;
	editor.update(() => {
		editor._nodes.forEach((nodeInfo) => {
			const node = new nodeInfo.klass();
			const defaultProperties = {};
			for (const [property, value] of Object.entries(node)) if (!isExcludedProperty(property, node, binding)) defaultProperties[property] = value;
			nodeProperties.set(node.__type, Object.freeze(defaultProperties));
		});
	});
}
function getDefaultNodeProperties(node, binding) {
	const type = node.__type;
	const { nodeProperties } = binding;
	const properties = nodeProperties.get(type);
	if (!(properties !== void 0)) formatDevErrorMessage(`Node properties for ${type} not initialized for sync`);
	return properties;
}
function $createCollabNodeFromLexicalNode(binding, lexicalNode, parent) {
	const nodeType = lexicalNode.__type;
	let collabNode;
	if ($isElementNode(lexicalNode)) {
		collabNode = $createCollabElementNode(new YXmlText(), parent, nodeType);
		collabNode.syncPropertiesFromLexical(binding, lexicalNode, null);
		collabNode.syncChildrenFromLexical(binding, lexicalNode, null, null, null);
	} else if ($isTextNode(lexicalNode)) {
		collabNode = $createCollabTextNode(new YMap(), lexicalNode.__text, parent, nodeType);
		collabNode.syncPropertiesAndTextFromLexical(binding, lexicalNode, null);
	} else if ($isLineBreakNode(lexicalNode)) {
		const map = new YMap();
		map.set("__type", "linebreak");
		collabNode = $createCollabLineBreakNode(map, parent);
	} else if ($isDecoratorNode(lexicalNode)) {
		collabNode = $createCollabDecoratorNode(new YXmlElement(), parent, nodeType);
		collabNode.syncPropertiesFromLexical(binding, lexicalNode, null);
	} else formatDevErrorMessage(`Expected text, element, decorator, or linebreak node`);
	collabNode._key = lexicalNode.__key;
	return collabNode;
}
function getNodeTypeFromSharedType(sharedType) {
	const type = sharedTypeGet(sharedType, "__type");
	if (!(typeof type === "string" || typeof type === "undefined")) formatDevErrorMessage(`Expected shared type to include type attribute`);
	return type;
}
function $getOrInitCollabNodeFromSharedType(binding, sharedType, parent) {
	const collabNode = sharedType._collabNode;
	if (collabNode === void 0) {
		const registeredNodes = binding.editor._nodes;
		const type = getNodeTypeFromSharedType(sharedType);
		if (!(typeof type === "string")) formatDevErrorMessage(`Expected shared type to include type attribute`);
		if (!(registeredNodes.get(type) !== void 0)) formatDevErrorMessage(`Node ${type} is not registered`);
		const sharedParent = sharedType.parent;
		const targetParent = parent === void 0 && sharedParent !== null ? $getOrInitCollabNodeFromSharedType(binding, sharedParent) : parent || null;
		if (!(targetParent instanceof CollabElementNode)) formatDevErrorMessage(`Expected parent to be a collab element node`);
		if (sharedType instanceof YXmlText) return $createCollabElementNode(sharedType, targetParent, type);
		else if (sharedType instanceof YMap) {
			if (type === "linebreak") return $createCollabLineBreakNode(sharedType, targetParent);
			return $createCollabTextNode(sharedType, "", targetParent, type);
		} else if (sharedType instanceof YXmlElement) return $createCollabDecoratorNode(sharedType, targetParent, type);
	}
	return collabNode;
}
function createLexicalNodeFromCollabNode(binding, collabNode, parentKey) {
	const type = collabNode.getType();
	const nodeInfo = binding.editor._nodes.get(type);
	if (!(nodeInfo !== void 0)) formatDevErrorMessage(`Node ${type} is not registered`);
	const lexicalNode = new nodeInfo.klass();
	lexicalNode.__parent = parentKey;
	collabNode._key = lexicalNode.__key;
	if (collabNode instanceof CollabElementNode) {
		const xmlText = collabNode._xmlText;
		collabNode.syncPropertiesFromYjs(binding, null);
		collabNode.applyChildrenYjsDelta(binding, xmlText.toDelta());
		collabNode.syncChildrenFromYjs(binding);
	} else if (collabNode instanceof CollabTextNode) collabNode.syncPropertiesAndTextFromYjs(binding, null);
	else if (collabNode instanceof CollabDecoratorNode) collabNode.syncPropertiesFromYjs(binding, null);
	binding.collabNodeMap.set(lexicalNode.__key, collabNode);
	return lexicalNode;
}
function $syncPropertiesFromYjs(binding, sharedType, lexicalNode, keysChanged) {
	const properties = keysChanged === null ? sharedType instanceof YMap ? Array.from(sharedType.keys()) : sharedType instanceof YXmlText || sharedType instanceof YXmlElement ? Object.keys(sharedType.getAttributes()) : Object.keys(sharedType) : Array.from(keysChanged);
	let writableNode;
	for (let i = 0; i < properties.length; i++) {
		const property = properties[i];
		if (isExcludedProperty(property, lexicalNode, binding)) {
			if (property === "__state" && isBindingV1(binding)) {
				if (!writableNode) writableNode = lexicalNode.getWritable();
				$syncNodeStateToLexical(sharedType, writableNode);
			}
			continue;
		}
		const prevValue = lexicalNode[property];
		let nextValue = sharedTypeGet(sharedType, property);
		if (prevValue !== nextValue) {
			if (nextValue instanceof Doc) {
				const yjsDocMap = binding.docMap;
				if (prevValue instanceof Doc) yjsDocMap.delete(prevValue.guid);
				const nestedEditor = createEditor();
				const key = nextValue.guid;
				nestedEditor._key = key;
				yjsDocMap.set(key, nextValue);
				nextValue = nestedEditor;
			}
			if (writableNode === void 0) writableNode = lexicalNode.getWritable();
			writableNode[property] = nextValue;
		}
	}
}
function sharedTypeGet(sharedType, property) {
	if (sharedType instanceof YMap) return sharedType.get(property);
	else if (sharedType instanceof YXmlText || sharedType instanceof YXmlElement) return sharedType.getAttribute(property);
	else return sharedType[property];
}
function sharedTypeSet(sharedType, property, nextValue) {
	if (sharedType instanceof YMap) sharedType.set(property, nextValue);
	else sharedType.setAttribute(property, nextValue);
}
function $syncNodeStateToLexical(sharedType, lexicalNode) {
	const existingState = sharedTypeGet(sharedType, "__state");
	if (!(existingState instanceof YMap)) return;
	$getWritableNodeState(lexicalNode).updateFromJSON(existingState.toJSON());
}
function syncNodeStateFromLexical(binding, sharedType, prevLexicalNode, nextLexicalNode) {
	const nextState = nextLexicalNode.__state;
	const existingState = sharedType.doc === null ? void 0 : sharedTypeGet(sharedType, "__state");
	if (!nextState) return;
	const [unknown, known] = nextState.getInternalState();
	const prevState = prevLexicalNode && prevLexicalNode.__state;
	const stateMap = existingState instanceof YMap ? existingState : new YMap();
	if (prevState === nextState) return;
	const [prevUnknown, prevKnown] = prevState && stateMap.doc ? prevState.getInternalState() : [void 0, /* @__PURE__ */ new Map()];
	if (unknown) {
		for (const [k, v] of Object.entries(unknown)) if (prevUnknown && v !== prevUnknown[k]) stateMap.set(k, v);
	}
	for (const [stateConfig, v] of known) if (prevKnown.get(stateConfig) !== v) stateMap.set(stateConfig.key, stateConfig.unparse(v));
	if (!existingState) sharedTypeSet(sharedType, "__state", stateMap);
}
function syncPropertiesFromLexical(binding, sharedType, prevLexicalNode, nextLexicalNode) {
	const properties = Object.keys(getDefaultNodeProperties(nextLexicalNode, binding));
	const EditorClass = binding.editor.constructor;
	syncNodeStateFromLexical(binding, sharedType, prevLexicalNode, nextLexicalNode);
	for (let i = 0; i < properties.length; i++) {
		const property = properties[i];
		const prevValue = prevLexicalNode === null ? void 0 : prevLexicalNode[property];
		let nextValue = nextLexicalNode[property];
		if (prevValue !== nextValue) {
			if (nextValue instanceof EditorClass) {
				const yjsDocMap = binding.docMap;
				let prevDoc;
				if (prevValue instanceof EditorClass) {
					const prevKey = prevValue._key;
					prevDoc = yjsDocMap.get(prevKey);
					yjsDocMap.delete(prevKey);
				}
				const doc = prevDoc || new Doc();
				const key = doc.guid;
				nextValue._key = key;
				yjsDocMap.set(key, doc);
				nextValue = doc;
				binding.editor.update(() => {
					nextLexicalNode.markDirty();
				});
			}
			sharedTypeSet(sharedType, property, nextValue);
		}
	}
}
function spliceString(str, index, delCount, newText) {
	return str.slice(0, index) + newText + str.slice(index + delCount);
}
function getPositionFromElementAndOffset(node, offset, boundaryIsEdge) {
	let index = 0;
	let i = 0;
	const children = node._children;
	const childrenLength = children.length;
	for (; i < childrenLength; i++) {
		const child = children[i];
		const childOffset = index;
		const size = child.getSize();
		index += size;
		if ((boundaryIsEdge ? index >= offset : index > offset) && child instanceof CollabTextNode) {
			let textOffset = offset - childOffset - 1;
			if (textOffset < 0) textOffset = 0;
			return {
				length: index - offset,
				node: child,
				nodeIndex: i,
				offset: textOffset
			};
		}
		if (index > offset) return {
			length: 0,
			node: child,
			nodeIndex: i,
			offset: childOffset
		};
		else if (i === childrenLength - 1) return {
			length: 0,
			node: null,
			nodeIndex: i + 1,
			offset: childOffset + 1
		};
	}
	return {
		length: 0,
		node: null,
		nodeIndex: 0,
		offset: 0
	};
}
function doesSelectionNeedRecovering(selection) {
	const anchor = selection.anchor;
	const focus = selection.focus;
	let recoveryNeeded = false;
	try {
		const anchorNode = anchor.getNode();
		const focusNode = focus.getNode();
		if (!anchorNode.isAttached() || !focusNode.isAttached() || $isTextNode(anchorNode) && anchor.offset > anchorNode.getTextContentSize() || $isTextNode(focusNode) && focus.offset > focusNode.getTextContentSize()) recoveryNeeded = true;
	} catch (_e) {
		recoveryNeeded = true;
	}
	return recoveryNeeded;
}
function syncWithTransaction(binding, fn) {
	binding.doc.transact(fn, binding);
}
function $moveSelectionToPreviousNode(anchorNodeKey, currentEditorState) {
	const anchorNode = currentEditorState._nodeMap.get(anchorNodeKey);
	if (!anchorNode) {
		$getRoot().selectStart();
		return;
	}
	const prevNodeKey = anchorNode.__prev;
	let prevNode = null;
	if (prevNodeKey) prevNode = $getNodeByKey(prevNodeKey);
	if (prevNode === null && anchorNode.__parent !== null) prevNode = $getNodeByKey(anchorNode.__parent);
	if (prevNode === null) {
		$getRoot().selectStart();
		return;
	}
	if (prevNode !== null && prevNode.isAttached()) {
		prevNode.selectEnd();
		return;
	} else $moveSelectionToPreviousNode(prevNode.__key, currentEditorState);
}
const isRootElement = (el) => el.nodeName === "UNDEFINED";
const $createOrUpdateNodeFromYElement = (el, binding, keysChanged, childListChanged, snapshot, prevSnapshot, computeYChange) => {
	let node = binding.mapping.get(el);
	if (node && keysChanged && keysChanged.size === 0 && !childListChanged) return node;
	const type = isRootElement(el) ? RootNode.getType() : el.nodeName;
	const nodeInfo = binding.editor._nodes.get(type);
	if (nodeInfo === void 0) throw new Error(`$createOrUpdateNodeFromYElement: Node ${type} is not registered`);
	if (!node) {
		node = new nodeInfo.klass();
		keysChanged = null;
		childListChanged = true;
	}
	if (childListChanged && node instanceof ElementNode) {
		const children = [];
		const $createChildren = (childType) => {
			if (childType instanceof YXmlElement) {
				const n = $createOrUpdateNodeFromYElement(childType, binding, /* @__PURE__ */ new Set(), false, snapshot, prevSnapshot, computeYChange);
				if (n !== null) children.push(n);
			} else if (childType instanceof YXmlText) {
				const ns = $createOrUpdateTextNodesFromYText(childType, binding, snapshot, prevSnapshot, computeYChange);
				if (ns !== null) ns.forEach((textchild) => {
					if (textchild !== null) children.push(textchild);
				});
			} else formatDevErrorMessage(`XmlHook is not supported`);
		};
		if (snapshot === void 0 || prevSnapshot === void 0) el.toArray().forEach($createChildren);
		else typeListToArraySnapshot(el, new Snapshot(prevSnapshot.ds, snapshot.sv)).filter((childType) => !childType._item.deleted || isItemVisible(childType._item, snapshot) || isItemVisible(childType._item, prevSnapshot)).forEach($createChildren);
		$spliceChildren(node, children);
	}
	const attrs = el.getAttributes(snapshot);
	if (!isRootElement(el) && snapshot !== void 0) {
		if (!isItemVisible(el._item, snapshot)) attrs[stateKeyToAttrKey("ychange")] = computeYChange ? computeYChange("removed", el._item.id) : { type: "removed" };
		else if (!isItemVisible(el._item, prevSnapshot)) attrs[stateKeyToAttrKey("ychange")] = computeYChange ? computeYChange("added", el._item.id) : { type: "added" };
	}
	const properties = { ...getDefaultNodeProperties(node, binding) };
	const state = {};
	for (const k in attrs) if (k.startsWith(STATE_KEY_PREFIX)) state[attrKeyToStateKey(k)] = attrs[k];
	else properties[k] = attrs[k];
	$syncPropertiesFromYjs(binding, properties, node, keysChanged);
	if (!keysChanged) $getWritableNodeState(node).updateFromJSON(state);
	else {
		const stateKeysChanged = Object.keys(state).filter((k) => keysChanged.has(stateKeyToAttrKey(k)));
		if (stateKeysChanged.length > 0) {
			const writableState = $getWritableNodeState(node);
			for (const k of stateKeysChanged) writableState.updateFromUnknown(k, state[k]);
		}
	}
	const latestNode = node.getLatest();
	binding.mapping.set(el, latestNode);
	return latestNode;
};
const $spliceChildren = (node, nextChildren) => {
	const prevChildren = node.getChildren();
	const prevChildrenKeySet = new Set(prevChildren.map((child) => child.getKey()));
	const nextChildrenKeySet = new Set(nextChildren.map((child) => child.getKey()));
	const prevEndIndex = prevChildren.length - 1;
	const nextEndIndex = nextChildren.length - 1;
	let prevIndex = 0;
	let nextIndex = 0;
	while (prevIndex <= prevEndIndex && nextIndex <= nextEndIndex) {
		const prevKey = prevChildren[prevIndex].getKey();
		const nextKey = nextChildren[nextIndex].getKey();
		if (prevKey === nextKey) {
			prevIndex++;
			nextIndex++;
			continue;
		}
		const nextHasPrevKey = nextChildrenKeySet.has(prevKey);
		const prevHasNextKey = prevChildrenKeySet.has(nextKey);
		if (!nextHasPrevKey) {
			if (nextIndex === 0 && node.getChildrenSize() === 1) {
				node.splice(nextIndex, 1, nextChildren.slice(nextIndex));
				return;
			}
			node.splice(nextIndex, 1, []);
			prevIndex++;
			continue;
		}
		const nextChildNode = nextChildren[nextIndex];
		if (prevHasNextKey) {
			node.splice(nextIndex, 1, [nextChildNode]);
			prevIndex++;
			nextIndex++;
		} else {
			node.splice(nextIndex, 0, [nextChildNode]);
			nextIndex++;
		}
	}
	const appendNewChildren = prevIndex > prevEndIndex;
	const removeOldChildren = nextIndex > nextEndIndex;
	if (appendNewChildren && !removeOldChildren) node.append(...nextChildren.slice(nextIndex));
	else if (removeOldChildren && !appendNewChildren) node.splice(nextChildren.length, node.getChildrenSize() - nextChildren.length, []);
};
const isItemVisible = (item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && snapshot.sv.get(item.id.client) > item.id.clock && !isDeleted(snapshot.ds, item.id);
const $createOrUpdateTextNodesFromYText = (text, binding, snapshot, prevSnapshot, computeYChange) => {
	const deltas = toDelta(text, snapshot, prevSnapshot, computeYChange);
	let nodes = binding.mapping.get(text) ?? [];
	const nodeTypes = deltas.map((delta) => delta.attributes.t ?? TextNode.getType());
	if (!(nodes.length === nodeTypes.length && nodes.every((node, i) => node.getType() === nodeTypes[i]))) {
		const registeredNodes = binding.editor._nodes;
		nodes = nodeTypes.map((type) => {
			const nodeInfo = registeredNodes.get(type);
			if (nodeInfo === void 0) throw new Error(`$createTextNodesFromYText: Node ${type} is not registered`);
			const node = new nodeInfo.klass();
			if (!$isTextNode(node)) throw new Error(`$createTextNodesFromYText: Node ${type} is not a TextNode`);
			return node;
		});
	}
	for (let i = 0; i < deltas.length; i++) {
		const node = nodes[i];
		const { attributes, insert } = deltas[i];
		if (node.__text !== insert) node.setTextContent(insert);
		const properties = {
			...getDefaultNodeProperties(node, binding),
			...attributes.p
		};
		const state = Object.fromEntries(Object.entries(attributes).filter(([k]) => k.startsWith(STATE_KEY_PREFIX)).map(([k, v]) => [attrKeyToStateKey(k), v]));
		$syncPropertiesFromYjs(binding, properties, node, null);
		$getWritableNodeState(node).updateFromJSON(state);
	}
	const latestNodes = nodes.map((node) => node.getLatest());
	binding.mapping.set(text, latestNodes);
	return latestNodes;
};
const $createTypeFromTextNodes = (nodes, binding) => {
	const type = new YXmlText();
	$updateYText(type, nodes, binding);
	return type;
};
const createTypeFromElementNode = (node, binding) => {
	const type = new YXmlElement(node.getType());
	const attrs = {
		...propertiesToAttributes(node, binding),
		...stateToAttributes(node)
	};
	for (const key in attrs) {
		const val = attrs[key];
		if (val !== null) type.setAttribute(key, val);
	}
	if (!(node instanceof ElementNode)) return type;
	type.insert(0, normalizeNodeContent(node).map((n) => $createTypeFromTextOrElementNode(n, binding)));
	binding.mapping.set(type, node);
	return type;
};
const $createTypeFromTextOrElementNode = (node, meta) => node instanceof Array ? $createTypeFromTextNodes(node, meta) : createTypeFromElementNode(node, meta);
const isObject = (val) => typeof val === "object" && val != null;
const equalAttrs = (pattrs, yattrs) => {
	const keys = Object.keys(pattrs).filter((key) => pattrs[key] !== null);
	if (yattrs == null) return keys.length === 0;
	let eq = keys.length === Object.keys(yattrs).filter((key) => yattrs[key] !== null).length;
	for (let i = 0; i < keys.length && eq; i++) {
		const key = keys[i];
		const l = pattrs[key];
		const r = yattrs[key];
		eq = key === "ychange" || l === r || isObject(l) && isObject(r) && equalAttrs(l, r);
	}
	return eq;
};
const normalizeNodeContent = (node) => {
	if (!(node instanceof ElementNode)) return [];
	const c = node.getChildren();
	const res = [];
	for (let i = 0; i < c.length; i++) {
		const n = c[i];
		if ($isTextNode(n)) {
			const textNodes = [];
			for (let maybeTextNode = c[i]; i < c.length && $isTextNode(maybeTextNode); maybeTextNode = c[++i]) textNodes.push(maybeTextNode);
			i--;
			res.push(textNodes);
		} else res.push(n);
	}
	return res;
};
const equalYTextLText = (ytext, ltexts, binding) => {
	const deltas = toDelta(ytext);
	return deltas.length === ltexts.length && deltas.every((d, i) => {
		const ltext = ltexts[i];
		const type = d.attributes.t ?? TextNode.getType();
		const propertyAttrs = d.attributes.p ?? {};
		const stateAttrs = Object.fromEntries(Object.entries(d.attributes).filter(([k]) => k.startsWith(STATE_KEY_PREFIX)));
		return d.insert === ltext.getTextContent() && type === ltext.getType() && equalAttrs(propertyAttrs, propertiesToAttributes(ltext, binding)) && equalAttrs(stateAttrs, stateToAttributes(ltext));
	});
};
const equalYTypePNode = (ytype, lnode, binding) => {
	if (ytype instanceof YXmlElement && !(lnode instanceof Array) && matchNodeName(ytype, lnode)) {
		const normalizedContent = normalizeNodeContent(lnode);
		return ytype._length === normalizedContent.length && equalAttrs(ytype.getAttributes(), {
			...propertiesToAttributes(lnode, binding),
			...stateToAttributes(lnode)
		}) && ytype.toArray().every((ychild, i) => equalYTypePNode(ychild, normalizedContent[i], binding));
	}
	return ytype instanceof YXmlText && lnode instanceof Array && equalYTextLText(ytype, lnode, binding);
};
const mappedIdentity = (mapped, lcontent) => mapped === lcontent || mapped instanceof Array && lcontent instanceof Array && mapped.length === lcontent.length && mapped.every((a, i) => lcontent[i] === a);
const computeChildEqualityFactor = (ytype, lnode, binding) => {
	const yChildren = ytype.toArray();
	const pChildren = normalizeNodeContent(lnode);
	const pChildCnt = pChildren.length;
	const yChildCnt = yChildren.length;
	const minCnt = Math.min(yChildCnt, pChildCnt);
	let left = 0;
	let right = 0;
	let foundMappedChild = false;
	for (; left < minCnt; left++) {
		const leftY = yChildren[left];
		const leftP = pChildren[left];
		if (leftY instanceof YXmlHook) break;
		else if (mappedIdentity(binding.mapping.get(leftY), leftP)) foundMappedChild = true;
		else if (!equalYTypePNode(leftY, leftP, binding)) break;
	}
	for (; left + right < minCnt; right++) {
		const rightY = yChildren[yChildCnt - right - 1];
		const rightP = pChildren[pChildCnt - right - 1];
		if (rightY instanceof YXmlHook) break;
		else if (mappedIdentity(binding.mapping.get(rightY), rightP)) foundMappedChild = true;
		else if (!equalYTypePNode(rightY, rightP, binding)) break;
	}
	return {
		equalityFactor: left + right,
		foundMappedChild
	};
};
const ytextTrans = (ytext) => {
	let str = "";
	let n = ytext._start;
	const nAttrs = {};
	while (n !== null) {
		if (!n.deleted) {
			if (n.countable && n.content instanceof ContentString) str += n.content.str;
			else if (n.content instanceof ContentFormat) nAttrs[n.content.key] = null;
		}
		n = n.right;
	}
	return {
		nAttrs,
		str
	};
};
const $updateYText = (ytext, ltexts, binding) => {
	binding.mapping.set(ytext, ltexts);
	const { nAttrs, str } = ytextTrans(ytext);
	const content = ltexts.map((node, i) => {
		const nodeType = node.getType();
		let p = propertiesToAttributes(node, binding);
		if (Object.keys(p).length === 0) p = null;
		return {
			attributes: Object.assign({}, nAttrs, {
				...nodeType !== TextNode.getType() && { t: nodeType },
				p,
				...stateToAttributes(node),
				...i > 0 && { i }
			}),
			insert: node.getTextContent(),
			nodeKey: node.getKey()
		};
	});
	const nextText = content.map((c) => c.insert).join("");
	const selection = $getSelection();
	let cursorOffset;
	if ($isRangeSelection(selection) && selection.isCollapsed()) {
		cursorOffset = 0;
		for (const c of content) {
			if (c.nodeKey === selection.anchor.key) {
				cursorOffset += selection.anchor.offset;
				break;
			}
			cursorOffset += c.insert.length;
		}
	} else cursorOffset = nextText.length;
	const { insert, remove, index } = simpleDiffWithCursor(str, nextText, cursorOffset);
	ytext.delete(index, remove);
	ytext.insert(index, insert);
	ytext.applyDelta(content.map((c) => ({
		attributes: c.attributes,
		retain: c.insert.length
	})));
};
const toDelta = (ytext, snapshot, prevSnapshot, computeYChange) => {
	return ytext.toDelta(snapshot, prevSnapshot, computeYChange).map((delta) => {
		const attributes = delta.attributes ?? {};
		if ("ychange" in attributes) {
			attributes[stateKeyToAttrKey("ychange")] = attributes.ychange;
			delete attributes.ychange;
		}
		return {
			...delta,
			attributes
		};
	});
};
const propertiesToAttributes = (node, meta) => {
	const defaultProperties = getDefaultNodeProperties(node, meta);
	const attrs = {};
	Object.entries(defaultProperties).forEach(([property, defaultValue]) => {
		const value = node[property];
		if (value !== defaultValue) attrs[property] = value;
	});
	return attrs;
};
const STATE_KEY_PREFIX = "s_";
const stateKeyToAttrKey = (key) => `s_${key}`;
const attrKeyToStateKey = (key) => {
	if (!key.startsWith(STATE_KEY_PREFIX)) throw new Error(`Invalid state key: ${key}`);
	return key.slice(2);
};
const stateToAttributes = (node) => {
	const state = node.__state;
	if (!state) return {};
	const [unknown = {}, known] = state.getInternalState();
	const attrs = {};
	for (const [k, v] of Object.entries(unknown)) attrs[stateKeyToAttrKey(k)] = v;
	for (const [stateConfig, v] of known) attrs[stateKeyToAttrKey(stateConfig.key)] = stateConfig.unparse(v);
	return attrs;
};
const $updateYFragment = (y, yDomFragment, node, binding, dirtyElements) => {
	if (yDomFragment instanceof YXmlElement && yDomFragment.nodeName !== node.getType() && !(isRootElement(yDomFragment) && node.getType() === RootNode.getType())) throw new Error("node name mismatch!");
	binding.mapping.set(yDomFragment, node);
	if (yDomFragment instanceof YXmlElement) {
		const yDomAttrs = yDomFragment.getAttributes();
		const lexicalAttrs = {
			...propertiesToAttributes(node, binding),
			...stateToAttributes(node)
		};
		for (const key in lexicalAttrs) if (lexicalAttrs[key] != null) {
			if (!(yDomAttrs[key] === lexicalAttrs[key] || isObject(yDomAttrs[key]) && isObject(lexicalAttrs[key]) && equalAttrs(yDomAttrs[key], lexicalAttrs[key])) && key !== "ychange") yDomFragment.setAttribute(key, lexicalAttrs[key]);
		} else yDomFragment.removeAttribute(key);
		for (const key in yDomAttrs) if (lexicalAttrs[key] === void 0) yDomFragment.removeAttribute(key);
	}
	const lChildren = normalizeNodeContent(node);
	const lChildCnt = lChildren.length;
	const yChildren = yDomFragment.toArray();
	const yChildCnt = yChildren.length;
	const minCnt = Math.min(lChildCnt, yChildCnt);
	let left = 0;
	let right = 0;
	for (; left < minCnt; left++) {
		const leftY = yChildren[left];
		const leftL = lChildren[left];
		if (leftY instanceof YXmlHook) break;
		else if (mappedIdentity(binding.mapping.get(leftY), leftL)) {
			if (leftL instanceof ElementNode && dirtyElements.has(leftL.getKey())) $updateYFragment(y, leftY, leftL, binding, dirtyElements);
		} else if (equalYTypePNode(leftY, leftL, binding)) binding.mapping.set(leftY, leftL);
		else break;
	}
	for (; right + left < minCnt; right++) {
		const rightY = yChildren[yChildCnt - right - 1];
		const rightL = lChildren[lChildCnt - right - 1];
		if (rightY instanceof YXmlHook) break;
		else if (mappedIdentity(binding.mapping.get(rightY), rightL)) {
			if (rightL instanceof ElementNode && dirtyElements.has(rightL.getKey())) $updateYFragment(y, rightY, rightL, binding, dirtyElements);
		} else if (equalYTypePNode(rightY, rightL, binding)) binding.mapping.set(rightY, rightL);
		else break;
	}
	while (yChildCnt - left - right > 0 && lChildCnt - left - right > 0) {
		const leftY = yChildren[left];
		const leftL = lChildren[left];
		const rightY = yChildren[yChildCnt - right - 1];
		const rightL = lChildren[lChildCnt - right - 1];
		if (leftY instanceof YXmlText && leftL instanceof Array) {
			if (!equalYTextLText(leftY, leftL, binding)) $updateYText(leftY, leftL, binding);
			left += 1;
		} else {
			let updateLeft = leftY instanceof YXmlElement && matchNodeName(leftY, leftL);
			let updateRight = rightY instanceof YXmlElement && matchNodeName(rightY, rightL);
			if (updateLeft && updateRight) {
				const equalityLeft = computeChildEqualityFactor(leftY, leftL, binding);
				const equalityRight = computeChildEqualityFactor(rightY, rightL, binding);
				if (equalityLeft.foundMappedChild && !equalityRight.foundMappedChild) updateRight = false;
				else if (!equalityLeft.foundMappedChild && equalityRight.foundMappedChild) updateLeft = false;
				else if (equalityLeft.equalityFactor < equalityRight.equalityFactor) updateLeft = false;
				else updateRight = false;
			}
			if (updateLeft) {
				$updateYFragment(y, leftY, leftL, binding, dirtyElements);
				left += 1;
			} else if (updateRight) {
				$updateYFragment(y, rightY, rightL, binding, dirtyElements);
				right += 1;
			} else {
				binding.mapping.delete(yDomFragment.get(left));
				yDomFragment.delete(left, 1);
				yDomFragment.insert(left, [$createTypeFromTextOrElementNode(leftL, binding)]);
				left += 1;
			}
		}
	}
	const yDelLen = yChildCnt - left - right;
	if (yChildCnt === 1 && lChildCnt === 0 && yChildren[0] instanceof YXmlText) {
		binding.mapping.delete(yChildren[0]);
		yChildren[0].delete(0, yChildren[0].length);
	} else if (yDelLen > 0) {
		yDomFragment.slice(left, left + yDelLen).forEach((type) => binding.mapping.delete(type));
		yDomFragment.delete(left, yDelLen);
	}
	if (left + right < lChildCnt) {
		const ins = [];
		for (let i = left; i < lChildCnt - right; i++) ins.push($createTypeFromTextOrElementNode(lChildren[i], binding));
		yDomFragment.insert(left, ins);
	}
};
const matchNodeName = (yElement, lnode) => !(lnode instanceof Array) && yElement.nodeName === lnode.getType();
const ychangeState = createState("ychange", {
	isEqual: (a, b) => a === b,
	parse: (value) => value ?? null
});
function $getYChangeState$1(node) {
	return $getState(node, ychangeState);
}
/**
* Replaces the editor content with a view that compares the state between two given snapshots.
* Any added or removed nodes between the two snapshots will have {@link YChange} attached to them.
*
* @param binding Yjs binding
* @param snapshot Ending snapshot state (default: current state of the Yjs document)
* @param prevSnapshot Starting snapshot state (default: empty snapshot)
*/
const renderSnapshot__EXPERIMENTAL$1 = (binding, snapshot$1 = snapshot(binding.doc), prevSnapshot = emptySnapshot) => {
	const { doc } = binding;
	if (!!doc.gc) formatDevErrorMessage(`GC must be disabled to render snapshot`);
	doc.transact((transaction) => {
		const pud = new PermanentUserData(doc);
		if (pud) pud.dss.forEach((ds) => {
			iterateDeletedStructs(transaction, ds, (_item) => {});
		});
		const computeYChange = (type, id) => {
			return {
				id,
				type,
				user: (type === "added" ? pud.getUserByClientId(id.client) : pud.getUserByDeletedId(id)) ?? null
			};
		};
		binding.mapping.clear();
		binding.editor.update(() => {
			$getRoot().clear();
			$createOrUpdateNodeFromYElement(binding.root, binding, null, true, snapshot$1, prevSnapshot, computeYChange);
		});
	}, binding);
};
function createRelativePosition(point, binding) {
	const collabNode = binding.collabNodeMap.get(point.key);
	if (collabNode === void 0) return null;
	let offset = point.offset;
	let sharedType = collabNode.getSharedType();
	if (collabNode instanceof CollabTextNode) {
		sharedType = collabNode._parent._xmlText;
		const currentOffset = collabNode.getOffset();
		if (currentOffset === -1) return null;
		offset = currentOffset + 1 + offset;
	} else if (collabNode instanceof CollabElementNode && point.type === "element") {
		const parent = point.getNode();
		if (!$isElementNode(parent)) formatDevErrorMessage(`Element point must be an element node`);
		let accumulatedOffset = 0;
		let i = 0;
		let node = parent.getFirstChild();
		while (node !== null && i++ < offset) {
			if ($isTextNode(node)) accumulatedOffset += node.getTextContentSize() + 1;
			else accumulatedOffset++;
			node = node.getNextSibling();
		}
		offset = accumulatedOffset;
	}
	return createRelativePositionFromTypeIndex(sharedType, offset);
}
function createRelativePositionV2(point, binding) {
	const { mapping } = binding;
	const { offset } = point;
	const node = point.getNode();
	const yType = mapping.getSharedType(node);
	if (yType === void 0) return null;
	if (point.type === "text") {
		if (!$isTextNode(node)) formatDevErrorMessage(`Text point must be a text node`);
		let prevSibling = node.getPreviousSibling();
		let adjustedOffset = offset;
		while ($isTextNode(prevSibling)) {
			adjustedOffset += prevSibling.getTextContentSize();
			prevSibling = prevSibling.getPreviousSibling();
		}
		return createRelativePositionFromTypeIndex(yType, adjustedOffset);
	} else if (point.type === "element") {
		if (!$isElementNode(node)) formatDevErrorMessage(`Element point must be an element node`);
		let i = 0;
		let child = node.getFirstChild();
		while (child !== null && i < offset) {
			if ($isTextNode(child)) {
				let nextSibling = child.getNextSibling();
				while ($isTextNode(nextSibling)) nextSibling = nextSibling.getNextSibling();
			}
			i++;
			child = child.getNextSibling();
		}
		return createRelativePositionFromTypeIndex(yType, i);
	}
	return null;
}
function createAbsolutePosition(relativePosition, binding) {
	return createAbsolutePositionFromRelativePosition(relativePosition, binding.doc);
}
function shouldUpdatePosition(currentPos, pos) {
	if (currentPos == null) {
		if (pos != null) return true;
	} else if (pos == null || !compareRelativePositions(currentPos, pos)) return true;
	return false;
}
function createCursor(name, color) {
	return {
		color,
		name,
		selection: null
	};
}
function destroySelection(binding, selection) {
	const cursorsContainer = binding.cursorsContainer;
	if (cursorsContainer !== null) {
		const selections = selection.selections;
		const selectionsLength = selections.length;
		for (let i = 0; i < selectionsLength; i++) cursorsContainer.removeChild(selections[i]);
	}
}
function destroyCursor(binding, cursor) {
	const selection = cursor.selection;
	if (selection !== null) destroySelection(binding, selection);
}
function createCursorSelection(cursor, anchorKey, anchorOffset, focusKey, focusOffset, theme = {}) {
	const color = cursor.color;
	const caret = document.createElement("span");
	if (theme.cursor) {
		caret.className = theme.cursor;
		setDOMStyleObject(caret.style, {
			"--lexical-cursor-color": color,
			bottom: "0",
			position: "absolute",
			right: "-1px",
			top: "0"
		});
	} else setDOMStyleObject(caret.style, {
		"background-color": color,
		bottom: "0",
		position: "absolute",
		right: "-1px",
		top: "0",
		width: "1px",
		"z-index": "10"
	});
	const name = document.createElement("span");
	name.textContent = cursor.name;
	if (theme.cursorName) name.className = theme.cursorName;
	else setDOMStyleObject(name.style, {
		"background-color": color,
		color: "#fff",
		"font-family": "Arial",
		"font-size": "12px",
		"font-weight": "bold",
		left: "-2px",
		"line-height": "12px",
		padding: "2px",
		position: "absolute",
		top: "-16px",
		"white-space": "nowrap"
	});
	caret.appendChild(name);
	return {
		anchor: {
			key: anchorKey,
			offset: anchorOffset
		},
		caret,
		color,
		focus: {
			key: focusKey,
			offset: focusOffset
		},
		name,
		selections: []
	};
}
function updateCursor(binding, cursor, nextSelection, nodeMap, theme = {}) {
	const editor = binding.editor;
	const rootElement = editor.getRootElement();
	const cursorsContainer = binding.cursorsContainer;
	if (cursorsContainer === null || rootElement === null) return;
	const cursorsContainerOffsetParent = cursorsContainer.offsetParent;
	if (cursorsContainerOffsetParent === null) return;
	const containerRect = cursorsContainerOffsetParent.getBoundingClientRect();
	const prevSelection = cursor.selection;
	if (nextSelection === null) if (prevSelection === null) return;
	else {
		cursor.selection = null;
		destroySelection(binding, prevSelection);
		return;
	}
	else cursor.selection = nextSelection;
	const caret = nextSelection.caret;
	const color = nextSelection.color;
	const selections = nextSelection.selections;
	const anchor = nextSelection.anchor;
	const focus = nextSelection.focus;
	const anchorKey = anchor.key;
	const focusKey = focus.key;
	const anchorNode = nodeMap.get(anchorKey);
	const focusNode = nodeMap.get(focusKey);
	if (anchorNode == null || focusNode == null) return;
	let selectionRects;
	if (anchorNode === focusNode && $isLineBreakNode(anchorNode)) selectionRects = [editor.getElementByKey(anchorKey).getBoundingClientRect()];
	else {
		const range = createDOMRange(editor, anchorNode, anchor.offset, focusNode, focus.offset);
		if (range === null) return;
		selectionRects = createRectsFromDOMRange(editor, range);
	}
	const selectionsLength = selections.length;
	const selectionRectsLength = selectionRects.length;
	for (let i = 0; i < selectionRectsLength; i++) {
		const selectionRect = selectionRects[i];
		let selection = selections[i];
		if (selection === void 0) {
			selection = document.createElement("span");
			selections[i] = selection;
			const selectionBg = document.createElement("span");
			if (theme.selectionBg) selectionBg.className = theme.selectionBg;
			selection.appendChild(selectionBg);
			cursorsContainer.appendChild(selection);
		}
		const top = selectionRect.top - containerRect.top;
		const left = selectionRect.left - containerRect.left;
		const positionStyle = {
			height: `${selectionRect.height}px`,
			left: `${left}px`,
			"pointer-events": "none",
			position: "absolute",
			top: `${top}px`,
			width: `${selectionRect.width}px`
		};
		if (theme.selection) {
			selection.className = theme.selection;
			setDOMStyleObject(selection.style, {
				...positionStyle,
				"--lexical-cursor-color": color
			});
			setDOMStyleObject(selection.firstChild.style, {
				height: "100%",
				left: "0",
				position: "absolute",
				top: "0",
				width: "100%"
			});
		} else {
			setDOMStyleObject(selection.style, positionStyle);
			setDOMStyleObject(selection.firstChild.style, {
				...positionStyle,
				"background-color": color,
				left: "0",
				opacity: "0.3",
				top: "0",
				"z-index": "5"
			});
		}
		if (i === selectionRectsLength - 1) {
			if (caret.parentNode !== selection) selection.appendChild(caret);
		}
	}
	for (let i = selectionsLength - 1; i >= selectionRectsLength; i--) {
		const selection = selections[i];
		cursorsContainer.removeChild(selection);
		selections.pop();
	}
}
/**
* @deprecated Use `$getAnchorAndFocusForUserState` instead.
*/
function getAnchorAndFocusCollabNodesForUserState$1(binding, userState) {
	const { anchorPos, focusPos } = userState;
	let anchorCollabNode = null;
	let anchorOffset = 0;
	let focusCollabNode = null;
	let focusOffset = 0;
	if (anchorPos !== null && focusPos !== null) {
		const anchorAbsPos = createAbsolutePosition(anchorPos, binding);
		const focusAbsPos = createAbsolutePosition(focusPos, binding);
		if (anchorAbsPos !== null && focusAbsPos !== null) {
			[anchorCollabNode, anchorOffset] = getCollabNodeAndOffset(anchorAbsPos.type, anchorAbsPos.index);
			[focusCollabNode, focusOffset] = getCollabNodeAndOffset(focusAbsPos.type, focusAbsPos.index);
		}
	}
	return {
		anchorCollabNode,
		anchorOffset,
		focusCollabNode,
		focusOffset
	};
}
function $getAnchorAndFocusForUserState(binding, userState) {
	const { anchorPos, focusPos } = userState;
	const anchorAbsPos = anchorPos ? createAbsolutePosition(anchorPos, binding) : null;
	const focusAbsPos = focusPos ? createAbsolutePosition(focusPos, binding) : null;
	if (anchorAbsPos === null || focusAbsPos === null) return {
		anchorKey: null,
		anchorOffset: 0,
		focusKey: null,
		focusOffset: 0
	};
	if (isBindingV1(binding)) {
		const [anchorCollabNode, anchorOffset] = getCollabNodeAndOffset(anchorAbsPos.type, anchorAbsPos.index);
		const [focusCollabNode, focusOffset] = getCollabNodeAndOffset(focusAbsPos.type, focusAbsPos.index);
		return {
			anchorKey: anchorCollabNode !== null ? anchorCollabNode.getKey() : null,
			anchorOffset,
			focusKey: focusCollabNode !== null ? focusCollabNode.getKey() : null,
			focusOffset
		};
	}
	let [anchorNode, anchorOffset] = $getNodeAndOffsetV2(binding.mapping, anchorAbsPos);
	let [focusNode, focusOffset] = $getNodeAndOffsetV2(binding.mapping, focusAbsPos);
	if (focusNode && anchorNode && (focusNode !== anchorNode || focusOffset !== anchorOffset)) {
		const isBackwards = focusNode.isBefore(anchorNode);
		const startNode = isBackwards ? focusNode : anchorNode;
		const startOffset = isBackwards ? focusOffset : anchorOffset;
		if ($isTextNode(startNode) && $isTextNode(startNode.getNextSibling()) && startOffset === startNode.getTextContentSize()) if (isBackwards) {
			focusNode = startNode.getNextSibling();
			focusOffset = 0;
		} else {
			anchorNode = startNode.getNextSibling();
			anchorOffset = 0;
		}
	}
	return {
		anchorKey: anchorNode !== null ? anchorNode.getKey() : null,
		anchorOffset,
		focusKey: focusNode !== null ? focusNode.getKey() : null,
		focusOffset
	};
}
function $syncLocalCursorPosition(binding, provider) {
	const localState = provider.awareness.getLocalState();
	if (localState === null) return;
	const { anchorKey, anchorOffset, focusKey, focusOffset } = $getAnchorAndFocusForUserState(binding, localState);
	if (anchorKey !== null && focusKey !== null) {
		const selection = $getSelection();
		if (!$isRangeSelection(selection)) return;
		$setPoint(selection.anchor, anchorKey, anchorOffset);
		$setPoint(selection.focus, focusKey, focusOffset);
	}
}
function $setPoint(point, key, offset) {
	if (point.key !== key || point.offset !== offset) {
		let anchorNode = $getNodeByKey(key);
		if (anchorNode !== null && !$isElementNode(anchorNode) && !$isTextNode(anchorNode)) {
			const parent = anchorNode.getParentOrThrow();
			key = parent.getKey();
			offset = anchorNode.getIndexWithinParent();
			anchorNode = parent;
		}
		point.set(key, offset, $isElementNode(anchorNode) ? "element" : "text");
	}
}
function getCollabNodeAndOffset(sharedType, offset) {
	const collabNode = sharedType._collabNode;
	if (collabNode === void 0) return [null, 0];
	if (collabNode instanceof CollabElementNode) {
		const { node, offset: collabNodeOffset } = getPositionFromElementAndOffset(collabNode, offset, true);
		if (node === null) return [collabNode, 0];
		else return [node, collabNodeOffset];
	}
	return [null, 0];
}
function $getNodeAndOffsetV2(mapping, absolutePosition) {
	const yType = absolutePosition.type;
	const yOffset = absolutePosition.index;
	if (yType instanceof YXmlElement) {
		const node = mapping.get(yType);
		if (node === void 0) return [null, 0];
		if (!$isElementNode(node)) return [node, yOffset];
		let remainingYOffset = yOffset;
		let lexicalOffset = 0;
		const children = node.getChildren();
		while (remainingYOffset > 0 && lexicalOffset < children.length) {
			const child = children[lexicalOffset];
			remainingYOffset -= 1;
			lexicalOffset += 1;
			if ($isTextNode(child)) while (lexicalOffset < children.length && $isTextNode(children[lexicalOffset])) lexicalOffset += 1;
		}
		return [node, lexicalOffset];
	} else {
		const nodes = mapping.get(yType);
		if (nodes === void 0) return [null, 0];
		let i = 0;
		let adjustedOffset = yOffset;
		while (adjustedOffset > nodes[i].getTextContentSize() && i + 1 < nodes.length) {
			adjustedOffset -= nodes[i].getTextContentSize();
			i++;
		}
		const textNode = nodes[i];
		return [textNode, Math.min(adjustedOffset, textNode.getTextContentSize())];
	}
}
function getAwarenessStatesDefault(_binding, provider) {
	return provider.awareness.getStates();
}
function syncCursorPositions$1(binding, provider, options) {
	const { getAwarenessStates = getAwarenessStatesDefault } = options ?? {};
	const awarenessStates = Array.from(getAwarenessStates(binding, provider));
	const localClientID = binding.clientID;
	const cursors = binding.cursors;
	const editor = binding.editor;
	const collabTheme = editor._config.theme.collaboration;
	const nodeMap = editor._editorState._nodeMap;
	const visitedClientIDs = /* @__PURE__ */ new Set();
	for (let i = 0; i < awarenessStates.length; i++) {
		const [clientID, awareness] = awarenessStates[i];
		if (clientID !== 0 && clientID !== localClientID) {
			visitedClientIDs.add(clientID);
			const { name, color, focusing } = awareness;
			let selection = null;
			let cursor = cursors.get(clientID);
			if (cursor === void 0) {
				cursor = createCursor(name, color);
				cursors.set(clientID, cursor);
			}
			if (focusing) {
				const { anchorKey, anchorOffset, focusKey, focusOffset } = editor.read(() => $getAnchorAndFocusForUserState(binding, awareness));
				if (anchorKey !== null && focusKey !== null) {
					selection = cursor.selection;
					if (selection === null) selection = createCursorSelection(cursor, anchorKey, anchorOffset, focusKey, focusOffset, collabTheme);
					else {
						const anchor = selection.anchor;
						const focus = selection.focus;
						anchor.key = anchorKey;
						anchor.offset = anchorOffset;
						focus.key = focusKey;
						focus.offset = focusOffset;
					}
				}
			}
			updateCursor(binding, cursor, selection, nodeMap, collabTheme);
		}
	}
	const allClientIDs = Array.from(cursors.keys());
	for (let i = 0; i < allClientIDs.length; i++) {
		const clientID = allClientIDs[i];
		if (!visitedClientIDs.has(clientID)) {
			const cursor = cursors.get(clientID);
			if (cursor !== void 0) {
				destroyCursor(binding, cursor);
				cursors.delete(clientID);
			}
		}
	}
}
function syncLexicalSelectionToYjs(binding, provider, prevSelection, nextSelection) {
	const awareness = provider.awareness;
	const localState = awareness.getLocalState();
	if (localState === null) return;
	const { anchorPos: currentAnchorPos, focusPos: currentFocusPos, name, color, focusing, awarenessData } = localState;
	let anchorPos = null;
	let focusPos = null;
	if (nextSelection === null || currentAnchorPos !== null && !nextSelection.is(prevSelection)) {
		if (prevSelection === null) return;
	}
	if ($isRangeSelection(nextSelection)) if (isBindingV1(binding)) {
		anchorPos = createRelativePosition(nextSelection.anchor, binding);
		focusPos = createRelativePosition(nextSelection.focus, binding);
	} else {
		anchorPos = createRelativePositionV2(nextSelection.anchor, binding);
		focusPos = createRelativePositionV2(nextSelection.focus, binding);
	}
	if (shouldUpdatePosition(currentAnchorPos, anchorPos) || shouldUpdatePosition(currentFocusPos, focusPos)) awareness.setLocalState({
		...localState,
		anchorPos,
		awarenessData,
		color,
		focusPos,
		focusing,
		name
	});
}
function $syncStateEvent(binding, event) {
	const { target } = event;
	if (!(target._item && target._item.parentSub === "__state" && getNodeTypeFromSharedType(target) === void 0 && (target.parent instanceof YXmlText || target.parent instanceof YXmlElement || target.parent instanceof YMap))) return false;
	const node = $getOrInitCollabNodeFromSharedType(binding, target.parent).getNode();
	if (node) {
		const state = $getWritableNodeState(node.getWritable());
		for (const k of event.keysChanged) state.updateFromUnknown(k, target.get(k));
	}
	return true;
}
function $syncEvent(binding, event) {
	if (event instanceof YMapEvent && $syncStateEvent(binding, event)) return;
	const { target } = event;
	const collabNode = $getOrInitCollabNodeFromSharedType(binding, target);
	if (collabNode instanceof CollabElementNode && event instanceof YTextEvent) {
		const { keysChanged, childListChanged, delta } = event;
		if (keysChanged.size > 0) collabNode.syncPropertiesFromYjs(binding, keysChanged);
		if (childListChanged) {
			collabNode.applyChildrenYjsDelta(binding, delta);
			collabNode.syncChildrenFromYjs(binding);
		}
	} else if (collabNode instanceof CollabTextNode && event instanceof YMapEvent) {
		const { keysChanged } = event;
		if (keysChanged.size > 0) collabNode.syncPropertiesAndTextFromYjs(binding, keysChanged);
	} else if (collabNode instanceof CollabDecoratorNode && event instanceof YXmlEvent) {
		const { attributesChanged } = event;
		if (attributesChanged.size > 0) collabNode.syncPropertiesFromYjs(binding, attributesChanged);
	} else formatDevErrorMessage(`Expected text, element, or decorator event`);
}
function syncYjsChangesToLexical$1(binding, provider, events, isFromUndoManger, syncCursorPositionsFn = syncCursorPositions$1) {
	const editor = binding.editor;
	const currentEditorState = editor._editorState;
	events.forEach((event) => event.delta);
	editor.update(() => {
		for (let i = 0; i < events.length; i++) {
			const event = events[i];
			$syncEvent(binding, event);
		}
		$syncCursorFromYjs(currentEditorState, binding, provider);
		if (!isFromUndoManger) $addUpdateTag(SKIP_SCROLL_INTO_VIEW_TAG);
	}, {
		onUpdate: () => {
			syncCursorPositionsFn(binding, provider);
			editor.update(() => $ensureEditorNotEmpty());
		},
		skipTransforms: true,
		tag: isFromUndoManger ? HISTORIC_TAG : COLLABORATION_TAG
	});
}
function $syncCursorFromYjs(editorState, binding, provider) {
	const selection = $getSelection();
	if ($isRangeSelection(selection)) if (doesSelectionNeedRecovering(selection)) {
		const prevSelection = editorState._selection;
		if ($isRangeSelection(prevSelection)) {
			$syncLocalCursorPosition(binding, provider);
			if (doesSelectionNeedRecovering(selection)) {
				const anchorNodeKey = selection.anchor.key;
				$moveSelectionToPreviousNode(anchorNodeKey, editorState);
			}
		}
		syncLexicalSelectionToYjs(binding, provider, prevSelection, $getSelection());
	} else $syncLocalCursorPosition(binding, provider);
}
function $handleNormalizationMergeConflicts(binding, normalizedNodes) {
	const normalizedNodesKeys = Array.from(normalizedNodes);
	const collabNodeMap = binding.collabNodeMap;
	const mergedNodes = [];
	const removedNodes = [];
	for (let i = 0; i < normalizedNodesKeys.length; i++) {
		const nodeKey = normalizedNodesKeys[i];
		const lexicalNode = $getNodeByKey(nodeKey);
		const collabNode = collabNodeMap.get(nodeKey);
		if (collabNode instanceof CollabTextNode) if ($isTextNode(lexicalNode)) mergedNodes.push([collabNode, lexicalNode.__text]);
		else {
			const offset = collabNode.getOffset();
			if (offset === -1) continue;
			const parent = collabNode._parent;
			collabNode._normalized = true;
			parent._xmlText.delete(offset, 1);
			removedNodes.push(collabNode);
		}
	}
	for (let i = 0; i < removedNodes.length; i++) {
		const collabNode = removedNodes[i];
		const nodeKey = collabNode.getKey();
		collabNodeMap.delete(nodeKey);
		const parentChildren = collabNode._parent._children;
		const index = parentChildren.indexOf(collabNode);
		parentChildren.splice(index, 1);
	}
	for (let i = 0; i < mergedNodes.length; i++) {
		const [collabNode, text] = mergedNodes[i];
		collabNode._text = text;
	}
}
function $ensureEditorNotEmpty() {
	if ($getRoot().getChildrenSize() === 0) $getRoot().append($createParagraphNode());
}
function syncLexicalUpdateToYjs$1(binding, provider, prevEditorState, currEditorState, dirtyElements, dirtyLeaves, normalizedNodes, tags) {
	syncWithTransaction(binding, () => {
		currEditorState.read(() => {
			if (tags.has(COLLABORATION_TAG) || tags.has(HISTORIC_TAG)) {
				if (normalizedNodes.size > 0) $handleNormalizationMergeConflicts(binding, normalizedNodes);
				return;
			}
			if (dirtyElements.has("root")) {
				const prevNodeMap = prevEditorState._nodeMap;
				const nextLexicalRoot = $getRoot();
				const collabRoot = binding.root;
				collabRoot.syncPropertiesFromLexical(binding, nextLexicalRoot, prevNodeMap);
				collabRoot.syncChildrenFromLexical(binding, nextLexicalRoot, prevNodeMap, dirtyElements, dirtyLeaves);
			}
			const selection = $getSelection();
			const prevSelection = prevEditorState._selection;
			syncLexicalSelectionToYjs(binding, provider, prevSelection, selection);
		});
	});
}
function $syncEventV2(binding, event) {
	const { target } = event;
	if (target instanceof YXmlElement && event instanceof YXmlEvent) $createOrUpdateNodeFromYElement(target, binding, event.attributesChanged, event.childListChanged);
	else if (target instanceof YXmlText && event instanceof YTextEvent) {
		const parent = target.parent;
		if (parent instanceof YXmlElement) $createOrUpdateNodeFromYElement(parent, binding, /* @__PURE__ */ new Set(), true);
		else formatDevErrorMessage(`Expected XmlElement parent for XmlText`);
	} else formatDevErrorMessage(`Expected xml or text event`);
}
function syncYjsChangesToLexicalV2__EXPERIMENTAL$1(binding, provider, events, transaction, isFromUndoManger) {
	const editor = binding.editor;
	const editorState = editor._editorState;
	iterateDeletedStructs(transaction, transaction.deleteSet, (struct) => {
		if (struct.constructor === Item) {
			const type = struct.content.type;
			if (type) binding.mapping.delete(type);
		}
	});
	events.forEach((event) => event.delta);
	editor.update(() => {
		for (let i = 0; i < events.length; i++) {
			const event = events[i];
			$syncEventV2(binding, event);
		}
		$syncCursorFromYjs(editorState, binding, provider);
		if (!isFromUndoManger) $addUpdateTag(SKIP_SCROLL_INTO_VIEW_TAG);
	}, {
		discrete: true,
		onUpdate: () => {
			syncCursorPositions$1(binding, provider);
			editor.update(() => $ensureEditorNotEmpty());
		},
		skipTransforms: true,
		tag: isFromUndoManger ? HISTORIC_TAG : COLLABORATION_TAG
	});
}
function syncYjsStateToLexicalV2__EXPERIMENTAL$1(binding, provider) {
	binding.mapping.clear();
	const editor = binding.editor;
	editor.update(() => {
		$getRoot().clear();
		$createOrUpdateNodeFromYElement(binding.root, binding, null, true);
		$addUpdateTag(COLLABORATION_TAG);
	}, {
		discrete: true,
		onUpdate: () => {
			syncCursorPositions$1(binding, provider);
			editor.update(() => $ensureEditorNotEmpty());
		},
		skipTransforms: true,
		tag: COLLABORATION_TAG
	});
}
function syncLexicalUpdateToYjsV2__EXPERIMENTAL$1(binding, provider, prevEditorState, currEditorState, dirtyElements, normalizedNodes, tags) {
	if ((tags.has(COLLABORATION_TAG) || tags.has(HISTORIC_TAG)) && normalizedNodes.size === 0) return;
	normalizedNodes.forEach((nodeKey) => {
		binding.mapping.deleteNode(nodeKey);
	});
	syncWithTransaction(binding, () => {
		currEditorState.read(() => {
			if (dirtyElements.has("root")) $updateYFragment(binding.doc, binding.root, $getRoot(), binding, new Set(dirtyElements.keys()));
			const selection = $getSelection();
			const prevSelection = prevEditorState._selection;
			syncLexicalSelectionToYjs(binding, provider, prevSelection, selection);
		});
	});
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
const CONNECTED_COMMAND$1 = createCommand("CONNECTED_COMMAND");
const TOGGLE_CONNECT_COMMAND$1 = createCommand("TOGGLE_CONNECT_COMMAND");
const DIFF_VERSIONS_COMMAND__EXPERIMENTAL$1 = createCommand("DIFF_VERSIONS_COMMAND");
const CLEAR_DIFF_VERSIONS_COMMAND__EXPERIMENTAL$1 = createCommand("CLEAR_DIFF_VERSIONS_COMMAND");
function createUndoManager$1(binding, root) {
	return new UndoManager(root, { trackedOrigins: /* @__PURE__ */ new Set([binding, null]) });
}
function initLocalState$1(provider, name, color, focusing, awarenessData) {
	provider.awareness.setLocalState({
		anchorPos: null,
		awarenessData,
		color,
		focusPos: null,
		focusing,
		name
	});
}
function setLocalStateFocus$1(provider, name, color, focusing, awarenessData) {
	const { awareness } = provider;
	let localState = awareness.getLocalState();
	if (localState === null) localState = {
		anchorPos: null,
		awarenessData,
		color,
		focusPos: null,
		focusing,
		name
	};
	localState.focusing = focusing;
	awareness.setLocalState(localState);
}
//#endregion
//#region node_modules/@lexical/yjs/LexicalYjs.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
const mod = LexicalYjs_dev_exports;
mod.$getYChangeState;
mod.CLEAR_DIFF_VERSIONS_COMMAND__EXPERIMENTAL;
mod.CONNECTED_COMMAND;
mod.DIFF_VERSIONS_COMMAND__EXPERIMENTAL;
mod.TOGGLE_CONNECT_COMMAND;
const createBinding = mod.createBinding;
mod.createBindingV2__EXPERIMENTAL;
mod.createUndoManager;
mod.getAnchorAndFocusCollabNodesForUserState;
const initLocalState = mod.initLocalState;
mod.renderSnapshot__EXPERIMENTAL;
const setLocalStateFocus = mod.setLocalStateFocus;
const syncCursorPositions = mod.syncCursorPositions;
const syncLexicalUpdateToYjs = mod.syncLexicalUpdateToYjs;
mod.syncLexicalUpdateToYjsV2__EXPERIMENTAL;
const syncYjsChangesToLexical = mod.syncYjsChangesToLexical;
mod.syncYjsChangesToLexicalV2__EXPERIMENTAL;
mod.syncYjsStateToLexicalV2__EXPERIMENTAL;
//#endregion
//#region node_modules/@rails/actioncable/app/assets/javascripts/actioncable.esm.js
var adapters = {
	logger: typeof console !== "undefined" ? console : void 0,
	WebSocket: typeof WebSocket !== "undefined" ? WebSocket : void 0
};
var logger = { log(...messages) {
	if (this.enabled) {
		messages.push(Date.now());
		adapters.logger.log("[ActionCable]", ...messages);
	}
} };
const now = () => (/* @__PURE__ */ new Date()).getTime();
const secondsSince = (time) => (now() - time) / 1e3;
var ConnectionMonitor = class {
	constructor(connection) {
		this.visibilityDidChange = this.visibilityDidChange.bind(this);
		this.connection = connection;
		this.reconnectAttempts = 0;
	}
	start() {
		if (!this.isRunning()) {
			this.startedAt = now();
			delete this.stoppedAt;
			this.startPolling();
			addEventListener("visibilitychange", this.visibilityDidChange);
			logger.log(`ConnectionMonitor started. stale threshold = ${this.constructor.staleThreshold} s`);
		}
	}
	stop() {
		if (this.isRunning()) {
			this.stoppedAt = now();
			this.stopPolling();
			removeEventListener("visibilitychange", this.visibilityDidChange);
			logger.log("ConnectionMonitor stopped");
		}
	}
	isRunning() {
		return this.startedAt && !this.stoppedAt;
	}
	recordMessage() {
		this.pingedAt = now();
	}
	recordConnect() {
		this.reconnectAttempts = 0;
		delete this.disconnectedAt;
		logger.log("ConnectionMonitor recorded connect");
	}
	recordDisconnect() {
		this.disconnectedAt = now();
		logger.log("ConnectionMonitor recorded disconnect");
	}
	startPolling() {
		this.stopPolling();
		this.poll();
	}
	stopPolling() {
		clearTimeout(this.pollTimeout);
	}
	poll() {
		this.pollTimeout = setTimeout((() => {
			this.reconnectIfStale();
			this.poll();
		}), this.getPollInterval());
	}
	getPollInterval() {
		const { staleThreshold, reconnectionBackoffRate } = this.constructor;
		const backoff = Math.pow(1 + reconnectionBackoffRate, Math.min(this.reconnectAttempts, 10));
		const jitter = (this.reconnectAttempts === 0 ? 1 : reconnectionBackoffRate) * Math.random();
		return staleThreshold * 1e3 * backoff * (1 + jitter);
	}
	reconnectIfStale() {
		if (this.connectionIsStale()) {
			logger.log(`ConnectionMonitor detected stale connection. reconnectAttempts = ${this.reconnectAttempts}, time stale = ${secondsSince(this.refreshedAt)} s, stale threshold = ${this.constructor.staleThreshold} s`);
			this.reconnectAttempts++;
			if (this.disconnectedRecently()) logger.log(`ConnectionMonitor skipping reopening recent disconnect. time disconnected = ${secondsSince(this.disconnectedAt)} s`);
			else {
				logger.log("ConnectionMonitor reopening");
				this.connection.reopen();
			}
		}
	}
	get refreshedAt() {
		return this.pingedAt ? this.pingedAt : this.startedAt;
	}
	connectionIsStale() {
		return secondsSince(this.refreshedAt) > this.constructor.staleThreshold;
	}
	disconnectedRecently() {
		return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
	}
	visibilityDidChange() {
		if (document.visibilityState === "visible") setTimeout((() => {
			if (this.connectionIsStale() || !this.connection.isOpen()) {
				logger.log(`ConnectionMonitor reopening stale connection on visibilitychange. visibilityState = ${document.visibilityState}`);
				this.connection.reopen();
			}
		}), 200);
	}
};
ConnectionMonitor.staleThreshold = 6;
ConnectionMonitor.reconnectionBackoffRate = .15;
var INTERNAL = {
	message_types: {
		welcome: "welcome",
		disconnect: "disconnect",
		ping: "ping",
		confirmation: "confirm_subscription",
		rejection: "reject_subscription"
	},
	disconnect_reasons: {
		unauthorized: "unauthorized",
		invalid_request: "invalid_request",
		server_restart: "server_restart",
		remote: "remote"
	},
	default_mount_path: "/cable",
	protocols: ["actioncable-v1-json", "actioncable-unsupported"]
};
const { message_types, protocols } = INTERNAL;
const supportedProtocols = protocols.slice(0, protocols.length - 1);
const indexOf = [].indexOf;
var Connection = class {
	constructor(consumer) {
		this.open = this.open.bind(this);
		this.consumer = consumer;
		this.subscriptions = this.consumer.subscriptions;
		this.monitor = new ConnectionMonitor(this);
		this.disconnected = true;
	}
	send(data) {
		if (this.isOpen()) {
			this.webSocket.send(JSON.stringify(data));
			return true;
		} else return false;
	}
	open() {
		if (this.isActive()) {
			logger.log(`Attempted to open WebSocket, but existing socket is ${this.getState()}`);
			return false;
		} else {
			const socketProtocols = [...protocols, ...this.consumer.subprotocols || []];
			logger.log(`Opening WebSocket, current state is ${this.getState()}, subprotocols: ${socketProtocols}`);
			if (this.webSocket) this.uninstallEventHandlers();
			this.webSocket = new adapters.WebSocket(this.consumer.url, socketProtocols);
			this.installEventHandlers();
			this.monitor.start();
			return true;
		}
	}
	close({ allowReconnect } = { allowReconnect: true }) {
		if (!allowReconnect) this.monitor.stop();
		if (this.isOpen()) return this.webSocket.close();
	}
	reopen() {
		logger.log(`Reopening WebSocket, current state is ${this.getState()}`);
		if (this.isActive()) try {
			return this.close();
		} catch (error) {
			logger.log("Failed to reopen WebSocket", error);
		} finally {
			logger.log(`Reopening WebSocket in ${this.constructor.reopenDelay}ms`);
			setTimeout(this.open, this.constructor.reopenDelay);
		}
		else return this.open();
	}
	getProtocol() {
		if (this.webSocket) return this.webSocket.protocol;
	}
	isOpen() {
		return this.isState("open");
	}
	isActive() {
		return this.isState("open", "connecting");
	}
	triedToReconnect() {
		return this.monitor.reconnectAttempts > 0;
	}
	isProtocolSupported() {
		return indexOf.call(supportedProtocols, this.getProtocol()) >= 0;
	}
	isState(...states) {
		return indexOf.call(states, this.getState()) >= 0;
	}
	getState() {
		if (this.webSocket) {
			for (let state in adapters.WebSocket) if (adapters.WebSocket[state] === this.webSocket.readyState) return state.toLowerCase();
		}
		return null;
	}
	installEventHandlers() {
		for (let eventName in this.events) {
			const handler = this.events[eventName].bind(this);
			this.webSocket[`on${eventName}`] = handler;
		}
	}
	uninstallEventHandlers() {
		for (let eventName in this.events) this.webSocket[`on${eventName}`] = function() {};
	}
};
Connection.reopenDelay = 500;
Connection.prototype.events = {
	message(event) {
		if (!this.isProtocolSupported()) return;
		const { identifier, message, reason, reconnect, type } = JSON.parse(event.data);
		this.monitor.recordMessage();
		switch (type) {
			case message_types.welcome:
				if (this.triedToReconnect()) this.reconnectAttempted = true;
				this.monitor.recordConnect();
				return this.subscriptions.reload();
			case message_types.disconnect:
				logger.log(`Disconnecting. Reason: ${reason}`);
				return this.close({ allowReconnect: reconnect });
			case message_types.ping: return null;
			case message_types.confirmation:
				this.subscriptions.confirmSubscription(identifier);
				if (this.reconnectAttempted) {
					this.reconnectAttempted = false;
					return this.subscriptions.notify(identifier, "connected", { reconnected: true });
				} else return this.subscriptions.notify(identifier, "connected", { reconnected: false });
			case message_types.rejection: return this.subscriptions.reject(identifier);
			default: return this.subscriptions.notify(identifier, "received", message);
		}
	},
	open() {
		logger.log(`WebSocket onopen event, using '${this.getProtocol()}' subprotocol`);
		this.disconnected = false;
		if (!this.isProtocolSupported()) {
			logger.log("Protocol is unsupported. Stopping monitor and disconnecting.");
			return this.close({ allowReconnect: false });
		}
	},
	close(event) {
		logger.log("WebSocket onclose event");
		if (this.disconnected) return;
		this.disconnected = true;
		this.monitor.recordDisconnect();
		return this.subscriptions.notifyAll("disconnected", { willAttemptReconnect: this.monitor.isRunning() });
	},
	error() {
		logger.log("WebSocket onerror event");
	}
};
const extend = function(object, properties) {
	if (properties != null) for (let key in properties) object[key] = properties[key];
	return object;
};
var Subscription = class {
	constructor(consumer, params = {}, mixin) {
		this.consumer = consumer;
		this.identifier = JSON.stringify(params);
		extend(this, mixin);
	}
	perform(action, data = {}) {
		data.action = action;
		return this.send(data);
	}
	send(data) {
		return this.consumer.send({
			command: "message",
			identifier: this.identifier,
			data: JSON.stringify(data)
		});
	}
	unsubscribe() {
		return this.consumer.subscriptions.remove(this);
	}
};
var SubscriptionGuarantor = class {
	constructor(subscriptions) {
		this.subscriptions = subscriptions;
		this.pendingSubscriptions = [];
	}
	guarantee(subscription) {
		if (this.pendingSubscriptions.indexOf(subscription) == -1) {
			logger.log(`SubscriptionGuarantor guaranteeing ${subscription.identifier}`);
			this.pendingSubscriptions.push(subscription);
		} else logger.log(`SubscriptionGuarantor already guaranteeing ${subscription.identifier}`);
		this.startGuaranteeing();
	}
	forget(subscription) {
		logger.log(`SubscriptionGuarantor forgetting ${subscription.identifier}`);
		this.pendingSubscriptions = this.pendingSubscriptions.filter(((s) => s !== subscription));
	}
	startGuaranteeing() {
		this.stopGuaranteeing();
		this.retrySubscribing();
	}
	stopGuaranteeing() {
		clearTimeout(this.retryTimeout);
	}
	retrySubscribing() {
		this.retryTimeout = setTimeout((() => {
			if (this.subscriptions && typeof this.subscriptions.subscribe === "function") this.pendingSubscriptions.map(((subscription) => {
				logger.log(`SubscriptionGuarantor resubscribing ${subscription.identifier}`);
				this.subscriptions.subscribe(subscription);
			}));
		}), 500);
	}
};
var Subscriptions = class {
	constructor(consumer) {
		this.consumer = consumer;
		this.guarantor = new SubscriptionGuarantor(this);
		this.subscriptions = [];
	}
	create(channelName, mixin) {
		const channel = channelName;
		const params = typeof channel === "object" ? channel : { channel };
		const subscription = new Subscription(this.consumer, params, mixin);
		return this.add(subscription);
	}
	add(subscription) {
		this.subscriptions.push(subscription);
		this.consumer.ensureActiveConnection();
		this.notify(subscription, "initialized");
		this.subscribe(subscription);
		return subscription;
	}
	remove(subscription) {
		this.forget(subscription);
		if (!this.findAll(subscription.identifier).length) this.sendCommand(subscription, "unsubscribe");
		return subscription;
	}
	reject(identifier) {
		return this.findAll(identifier).map(((subscription) => {
			this.forget(subscription);
			this.notify(subscription, "rejected");
			return subscription;
		}));
	}
	forget(subscription) {
		this.guarantor.forget(subscription);
		this.subscriptions = this.subscriptions.filter(((s) => s !== subscription));
		return subscription;
	}
	findAll(identifier) {
		return this.subscriptions.filter(((s) => s.identifier === identifier));
	}
	reload() {
		return this.subscriptions.map(((subscription) => this.subscribe(subscription)));
	}
	notifyAll(callbackName, ...args) {
		return this.subscriptions.map(((subscription) => this.notify(subscription, callbackName, ...args)));
	}
	notify(subscription, callbackName, ...args) {
		let subscriptions;
		if (typeof subscription === "string") subscriptions = this.findAll(subscription);
		else subscriptions = [subscription];
		return subscriptions.map(((subscription) => typeof subscription[callbackName] === "function" ? subscription[callbackName](...args) : void 0));
	}
	subscribe(subscription) {
		if (this.sendCommand(subscription, "subscribe")) this.guarantor.guarantee(subscription);
	}
	confirmSubscription(identifier) {
		logger.log(`Subscription confirmed ${identifier}`);
		this.findAll(identifier).map(((subscription) => this.guarantor.forget(subscription)));
	}
	sendCommand(subscription, command) {
		const { identifier } = subscription;
		return this.consumer.send({
			command,
			identifier
		});
	}
};
var Consumer = class {
	constructor(url) {
		this._url = url;
		this.subscriptions = new Subscriptions(this);
		this.connection = new Connection(this);
		this.subprotocols = [];
	}
	get url() {
		return createWebSocketURL(this._url);
	}
	send(data) {
		return this.connection.send(data);
	}
	connect() {
		return this.connection.open();
	}
	disconnect() {
		return this.connection.close({ allowReconnect: false });
	}
	ensureActiveConnection() {
		if (!this.connection.isActive()) return this.connection.open();
	}
	addSubProtocol(subprotocol) {
		this.subprotocols = [...this.subprotocols, subprotocol];
	}
};
function createWebSocketURL(url) {
	if (typeof url === "function") url = url();
	if (url && !/^wss?:/i.test(url)) {
		const a = document.createElement("a");
		a.href = url;
		a.href = a.href;
		a.protocol = a.protocol.replace("http", "ws");
		return a.href;
	} else return url;
}
function createConsumer(url = getConfig("url") || INTERNAL.default_mount_path) {
	return new Consumer(url);
}
function getConfig(name) {
	const element = document.head.querySelector(`meta[name='action-cable-${name}']`);
	if (element) return element.getAttribute("content");
}
//#endregion
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
/**
* Create a sync step 1 message based on the state of the current shared document.
*
* @param {encoding.Encoder} encoder
* @param {Y.Doc} doc
*/
const writeSyncStep1 = (encoder, doc) => {
	writeVarUint(encoder, 0);
	const sv = encodeStateVector(doc);
	writeVarUint8Array(encoder, sv);
};
/**
* @param {encoding.Encoder} encoder
* @param {Y.Doc} doc
* @param {Uint8Array} [encodedStateVector]
*/
const writeSyncStep2 = (encoder, doc, encodedStateVector) => {
	writeVarUint(encoder, 1);
	writeVarUint8Array(encoder, encodeStateAsUpdate(doc, encodedStateVector));
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
* @param {(error:Error)=>any} [errorHandler]
*/
const readSyncStep2 = (decoder, doc, transactionOrigin, errorHandler) => {
	try {
		applyUpdate(doc, readVarUint8Array(decoder), transactionOrigin);
	} catch (error) {
		if (errorHandler != null) errorHandler(error);
		console.error("Caught error while handling a Yjs update", error);
	}
};
/**
* @param {encoding.Encoder} encoder
* @param {Uint8Array} update
*/
const writeUpdate = (encoder, update) => {
	writeVarUint(encoder, 2);
	writeVarUint8Array(encoder, update);
};
/**
* Read and apply Structs and then DeleteStore to a y instance.
*
* @param {decoding.Decoder} decoder
* @param {Y.Doc} doc
* @param {any} transactionOrigin
* @param {(error:Error)=>any} [errorHandler]
*/
const readUpdate = readSyncStep2;
/**
* @param {decoding.Decoder} decoder A message received from another client
* @param {encoding.Encoder} encoder The reply message. Does not need to be sent if empty.
* @param {Y.Doc} doc
* @param {any} transactionOrigin
* @param {(error:Error)=>any} [errorHandler] Optional error handler that catches errors when reading Yjs messages.
*/
const readSyncMessage = (decoder, encoder, doc, transactionOrigin, errorHandler) => {
	const messageType = readVarUint(decoder);
	switch (messageType) {
		case 0:
			readSyncStep1(decoder, encoder, doc);
			break;
		case 1:
			readSyncStep2(decoder, doc, transactionOrigin, errorHandler);
			break;
		case 2:
			readUpdate(decoder, doc, transactionOrigin, errorHandler);
			break;
		default: throw new Error("Unknown message type");
	}
	return messageType;
};
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
			if (this.getLocalState() !== null && 3e4 / 2 <= now - this.meta.get(this.clientID).lastUpdated) this.setLocalState(this.getLocalState());
			/**
			* @type {Array<number>}
			*/
			const remove = [];
			this.meta.forEach((meta, clientid) => {
				if (clientid !== this.clientID && 3e4 <= now - meta.lastUpdated && this.states.has(clientid)) remove.push(clientid);
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
					if (!this.#synced && syncType === 1) this.#synced = true;
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
//#region src/attachment_sync.js
const UNSYNCABLE_ATTACHMENT_PROPERTIES = /* @__PURE__ */ new Set([
	"editor",
	"file",
	"previewSrc",
	"uploadUrl",
	"blobUrlTemplate"
]);
const LEXXY_ATTACHMENT_NODE_TYPES = /* @__PURE__ */ new Set([
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
function patchCollabElementSplice(binding) {
	const proto = binding?.root?.constructor?.prototype;
	if (!proto || typeof proto.splice !== "function" || proto.__yrbySplicePatched) return;
	const original = proto.splice;
	proto.splice = function(b, index, delCount, collabNode) {
		if (this._children[index] === void 0 && collabNode === void 0) return;
		return original.call(this, b, index, delCount, collabNode);
	};
	proto.__yrbySplicePatched = true;
}
//#endregion
//#region src/upload_cleanup.js
function registerUploadCleanup(editorElement, editor, provider, awareness) {
	const removeOwnPendingUploads = (event) => {
		if (event?.persisted) return;
		removePendingUploadNodes(editor);
	};
	window.addEventListener("pagehide", removeOwnPendingUploads);
	const removeUploadsBeforeTurboDiscard = (event) => {
		if (editorElement.closest("[data-turbo-permanent]")) return;
		if (event.type === "turbo:before-frame-render" && !event.target.contains(editorElement)) return;
		removePendingUploadNodes(editor);
	};
	document.addEventListener("turbo:before-cache", removeUploadsBeforeTurboDiscard);
	document.addEventListener("turbo:before-frame-render", removeUploadsBeforeTurboDiscard);
	const cancelOrphanSweep = removeOrphanedUploadsWhenAlone(editor, provider, awareness);
	return () => {
		window.removeEventListener("pagehide", removeOwnPendingUploads);
		document.removeEventListener("turbo:before-cache", removeUploadsBeforeTurboDiscard);
		document.removeEventListener("turbo:before-frame-render", removeUploadsBeforeTurboDiscard);
		cancelOrphanSweep();
	};
}
const ORPHAN_SWEEP_SETTLE_MS = 25e3;
function removeOrphanedUploadsWhenAlone(editor, provider, awareness) {
	let timer = null;
	let cancelled = false;
	const alone = () => awareness.getStates().size <= 1;
	const sweep = () => {
		timer = null;
		if (cancelled || !alone()) return;
		if (!provider.synced) {
			schedule();
			return;
		}
		const info = editor?._nodes?.get?.("action_text_attachment_upload");
		if (!info) return;
		editor.update(() => {
			for (const node of $nodesOfType(info.klass)) if (node.getType() === "action_text_attachment_upload" && !node.file) node.remove();
		}, {
			discrete: true,
			tag: HISTORY_MERGE_TAG
		});
	};
	const schedule = () => {
		if (!cancelled && !timer && alone()) timer = setTimeout(sweep, ORPHAN_SWEEP_SETTLE_MS);
	};
	const onAwarenessChange = () => {
		if (alone()) schedule();
		else if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	};
	awareness.on("change", onAwarenessChange);
	provider.doc?.on?.("update", schedule);
	provider.whenSynced?.then?.(schedule);
	schedule();
	return () => {
		cancelled = true;
		clearTimeout(timer);
		timer = null;
		awareness.off("change", onAwarenessChange);
		provider.doc?.off?.("update", schedule);
	};
}
function removePendingUploadNodes(editor) {
	const uploadType = "action_text_attachment_upload";
	const info = editor?._nodes?.get?.(uploadType);
	if (!info) return;
	editor.update(() => {
		for (const node of $nodesOfType(info.klass)) if (node.getType() === uploadType && node.file) node.remove();
	}, {
		discrete: true,
		tag: HISTORY_MERGE_TAG
	});
}
//#endregion
//#region src/cursor_theme.js
const CURSOR_CSS = `
.lexxy-collab-cursor {
  background-color: var(--lexical-cursor-color);
  width: 2px;
  border-radius: 1px;
  z-index: 10;
}

.lexxy-collab-cursor__name {
  position: absolute;
  top: 0;
  left: -2px;
  transform: translateY(calc(-100% - 3px));
  background-color: var(--lexical-cursor-color);
  color: white;
  font-family: var(--lexxy-font-base, system-ui, sans-serif);
  font-size: 0.6875rem;
  font-weight: 600;
  line-height: 1;
  padding: 0.3em 0.7em;
  border-radius: calc(var(--lexxy-radius, 0.5ch) * 1.5);
  white-space: nowrap;
  box-shadow: 0 1px 3px oklch(0% 0 0 / 0.25);
  z-index: 11;
}

.lexxy-collab-selection {
  z-index: 5;
}

.lexxy-collab-selection__bg {
  background-color: var(--lexical-cursor-color);
  opacity: 0.2;
  border-radius: 2px;
}
`;
function registerCursorTheme(editor) {
	const theme = editor._config.theme;
	if (theme.collaboration) return;
	theme.collaboration = {
		cursor: "lexxy-collab-cursor",
		cursorName: "lexxy-collab-cursor__name",
		selection: "lexxy-collab-selection",
		selectionBg: "lexxy-collab-selection__bg"
	};
	if (getComputedStyle(document.documentElement).getPropertyValue("--lexxy-realtime-cursor-styles").trim() !== "" || document.getElementById("lexxy-realtime-cursor-styles")) return;
	const style = document.createElement("style");
	style.id = "lexxy-realtime-cursor-styles";
	style.textContent = CURSOR_CSS;
	document.head.appendChild(style);
}
//#endregion
//#region src/editor_collaboration.js
let sharedConsumer;
let configuredConsumer;
function setConsumer(consumerOrFactory) {
	configuredConsumer = consumerOrFactory;
}
function resolveConsumer() {
	if (typeof configuredConsumer === "function") configuredConsumer = configuredConsumer();
	return configuredConsumer || (sharedConsumer ??= createConsumer());
}
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
		const ownsDoc = !this.doc;
		const doc = this.doc || new Doc();
		const provider = this.provider || new ActionCableProvider(doc, this.consumer || resolveConsumer(), channelName, channelParams);
		if (ownsProvider) provider.connect();
		const awareness = provider.awareness;
		const docMap = /* @__PURE__ */ new Map();
		docMap.set(id, doc);
		const initialEditorState = this.editor.getEditorState();
		this.editor.update(() => $getRoot().clear(), {
			tag: HISTORY_MERGE_TAG,
			discrete: true
		});
		const excludedProperties = attachmentExclusions(this.editor);
		const binding = createBinding(this.editor, provider, id, doc, docMap, excludedProperties);
		patchCollabElementSplice(binding);
		const unsubscribeListeners = registerCollaborationListeners(this.editor, provider, binding);
		const cancelBootstrap = bootstrapWhenSynced(this.editor, provider, binding, initialEditorState);
		registerCursorTheme(this.editor);
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
		const cancelUploadCleanup = registerUploadCleanup(this.editorElement, this.editor, provider, awareness);
		const renderCursors = () => syncCursorPositions(binding, provider);
		awareness.on("update", renderCursors);
		const unsubscribeCursorRender = this.editor.registerUpdateListener(renderCursors);
		syncCursorPositions(binding, provider);
		this.provider = provider;
		this.doc = doc;
		this.awareness = awareness;
		this.binding = binding;
		this.#teardown = () => {
			this.#teardown = null;
			cancelUploadCleanup();
			awareness.off("update", renderCursors);
			unsubscribeCursorRender();
			unsubscribeListeners();
			cancelBootstrap();
			cursorsContainer.remove();
			if (ownsProvider) {
				provider.disconnect();
				this.provider = null;
			}
			if (ownsDoc) this.doc = null;
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
function emptyEditorState(state) {
	return state.read(() => {
		const root = $getRoot();
		if (root.getChildrenSize() === 0) return true;
		const only = root.getChildrenSize() === 1 && root.getFirstChild();
		return !!only && only.getType() === "paragraph" && only.getChildrenSize() === 0;
	});
}
function bootstrapWhenSynced(editor, provider, binding, initialEditorState) {
	let done = false;
	const seed = () => {
		if (done || !provider.synced) return;
		done = true;
		if (timer) clearInterval(timer);
		if (binding.root.getSharedType().length === 0) {
			if (initialEditorState && !emptyEditorState(initialEditorState)) {
				editor.setEditorState(initialEditorState, { tag: HISTORY_MERGE_TAG });
				return;
			}
			editor.update(() => {
				const root = $getRoot();
				root.clear();
				root.append($createParagraphNode());
			}, { tag: HISTORY_MERGE_TAG });
		}
	};
	let timer;
	if (provider.whenSynced?.then) provider.whenSynced.then(seed, () => {});
	else {
		timer = setInterval(seed, 50);
		if (typeof timer?.unref === "function") timer.unref();
	}
	return () => {
		done = true;
		if (timer) clearInterval(timer);
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
export { Collaboration, ActionCableProvider as YrbyProvider, setConsumer };

//# sourceMappingURL=lexxy-realtime.js.map