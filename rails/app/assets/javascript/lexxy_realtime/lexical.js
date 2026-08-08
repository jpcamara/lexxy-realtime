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
//#region node_modules/lexical/Lexical.dev.mjs
var Lexical_dev_exports = /* @__PURE__ */ __exportAll({
	$addUpdateTag: () => $addUpdateTag$1,
	$applyNodeReplacement: () => $applyNodeReplacement$1,
	$caretFromPoint: () => $caretFromPoint$1,
	$caretRangeFromSelection: () => $caretRangeFromSelection$1,
	$cloneWithProperties: () => $cloneWithProperties$1,
	$cloneWithPropertiesEphemeral: () => $cloneWithPropertiesEphemeral$1,
	$comparePointCaretNext: () => $comparePointCaretNext$1,
	$copyNode: () => $copyNode$1,
	$create: () => $create$1,
	$createChildrenArray: () => $createChildrenArray$1,
	$createLineBreakNode: () => $createLineBreakNode$1,
	$createNodeSelection: () => $createNodeSelection$1,
	$createParagraphNode: () => $createParagraphNode$1,
	$createPoint: () => $createPoint$1,
	$createRangeSelection: () => $createRangeSelection$1,
	$createRangeSelectionFromDom: () => $createRangeSelectionFromDom$1,
	$createTabNode: () => $createTabNode$1,
	$createTextNode: () => $createTextNode$1,
	$extendCaretToRange: () => $extendCaretToRange$1,
	$findMatchingParent: () => $findMatchingParent$1,
	$getAdjacentChildCaret: () => $getAdjacentChildCaret$1,
	$getAdjacentNode: () => $getAdjacentNode$1,
	$getAdjacentSiblingOrParentSiblingCaret: () => $getAdjacentSiblingOrParentSiblingCaret$1,
	$getCaretInDirection: () => $getCaretInDirection$1,
	$getCaretRange: () => $getCaretRange$1,
	$getCaretRangeInDirection: () => $getCaretRangeInDirection$1,
	$getCharacterOffsets: () => $getCharacterOffsets$1,
	$getChildCaret: () => $getChildCaret$1,
	$getChildCaretAtIndex: () => $getChildCaretAtIndex$1,
	$getChildCaretOrSelf: () => $getChildCaretOrSelf$1,
	$getCollapsedCaretRange: () => $getCollapsedCaretRange$1,
	$getCommonAncestor: () => $getCommonAncestor$1,
	$getCommonAncestorResultBranchOrder: () => $getCommonAncestorResultBranchOrder$1,
	$getEditor: () => $getEditor$1,
	$getEditorDOMRenderConfig: () => $getEditorDOMRenderConfig$1,
	$getNearestNodeFromDOMNode: () => $getNearestNodeFromDOMNode$1,
	$getNearestRootOrShadowRoot: () => $getNearestRootOrShadowRoot$1,
	$getNodeByKey: () => $getNodeByKey$1,
	$getNodeByKeyOrThrow: () => $getNodeByKeyOrThrow$1,
	$getNodeFromDOMNode: () => $getNodeFromDOMNode$1,
	$getPreviousSelection: () => $getPreviousSelection$1,
	$getRoot: () => $getRoot$1,
	$getSelection: () => $getSelection$1,
	$getSiblingCaret: () => $getSiblingCaret$1,
	$getState: () => $getState$1,
	$getStateChange: () => $getStateChange$1,
	$getTextContent: () => $getTextContent$1,
	$getTextNodeOffset: () => $getTextNodeOffset$1,
	$getTextPointCaret: () => $getTextPointCaret$1,
	$getTextPointCaretSlice: () => $getTextPointCaretSlice$1,
	$getWritableNodeState: () => $getWritableNodeState$1,
	$hasAncestor: () => $hasAncestor$1,
	$hasUpdateTag: () => $hasUpdateTag$1,
	$insertNodes: () => $insertNodes$1,
	$isBlockElementNode: () => $isBlockElementNode$1,
	$isChildCaret: () => $isChildCaret$1,
	$isDecoratorNode: () => $isDecoratorNode$1,
	$isEditorState: () => $isEditorState$1,
	$isElementNode: () => $isElementNode$1,
	$isExtendableTextPointCaret: () => $isExtendableTextPointCaret$1,
	$isInlineElementOrDecoratorNode: () => $isInlineElementOrDecoratorNode$1,
	$isLeafNode: () => $isLeafNode$1,
	$isLexicalNode: () => $isLexicalNode$1,
	$isLineBreakNode: () => $isLineBreakNode$1,
	$isNodeCaret: () => $isNodeCaret$1,
	$isNodeSelection: () => $isNodeSelection$1,
	$isParagraphNode: () => $isParagraphNode$1,
	$isRangeSelection: () => $isRangeSelection$1,
	$isRootNode: () => $isRootNode$1,
	$isRootOrShadowRoot: () => $isRootOrShadowRoot$1,
	$isSiblingCaret: () => $isSiblingCaret$1,
	$isTabNode: () => $isTabNode$1,
	$isTextNode: () => $isTextNode$1,
	$isTextPointCaret: () => $isTextPointCaret$1,
	$isTextPointCaretSlice: () => $isTextPointCaretSlice$1,
	$isTokenOrSegmented: () => $isTokenOrSegmented$1,
	$isTokenOrTab: () => $isTokenOrTab$1,
	$nodesOfType: () => $nodesOfType$1,
	$normalizeCaret: () => $normalizeCaret$1,
	$normalizeSelection__EXPERIMENTAL: () => $normalizeSelection,
	$onUpdate: () => $onUpdate$1,
	$parseSerializedNode: () => $parseSerializedNode$1,
	$removeTextFromCaretRange: () => $removeTextFromCaretRange$1,
	$rewindSiblingCaret: () => $rewindSiblingCaret$1,
	$selectAll: () => $selectAll$1,
	$setCompositionKey: () => $setCompositionKey$1,
	$setPointFromCaret: () => $setPointFromCaret$1,
	$setSelection: () => $setSelection$1,
	$setSelectionFromCaretRange: () => $setSelectionFromCaretRange$1,
	$setState: () => $setState$1,
	$splitAtPointCaretNext: () => $splitAtPointCaretNext$1,
	$splitNode: () => $splitNode$1,
	$updateRangeSelectionFromCaretRange: () => $updateRangeSelectionFromCaretRange$1,
	ArtificialNode__DO_NOT_USE: () => ArtificialNode__DO_NOT_USE$1,
	BEFORE_INPUT_COMMAND: () => BEFORE_INPUT_COMMAND$1,
	BLUR_COMMAND: () => BLUR_COMMAND$1,
	CAN_REDO_COMMAND: () => CAN_REDO_COMMAND$1,
	CAN_UNDO_COMMAND: () => CAN_UNDO_COMMAND$1,
	CLEAR_EDITOR_COMMAND: () => CLEAR_EDITOR_COMMAND$1,
	CLEAR_HISTORY_COMMAND: () => CLEAR_HISTORY_COMMAND$1,
	CLICK_COMMAND: () => CLICK_COMMAND$1,
	COLLABORATION_TAG: () => COLLABORATION_TAG$1,
	COMMAND_PRIORITY_BEFORE_CRITICAL: () => -4,
	COMMAND_PRIORITY_BEFORE_EDITOR: () => -8,
	COMMAND_PRIORITY_BEFORE_HIGH: () => -5,
	COMMAND_PRIORITY_BEFORE_LOW: () => -7,
	COMMAND_PRIORITY_BEFORE_NORMAL: () => -6,
	COMMAND_PRIORITY_CRITICAL: () => 4,
	COMMAND_PRIORITY_EDITOR: () => 0,
	COMMAND_PRIORITY_HIGH: () => 3,
	COMMAND_PRIORITY_LOW: () => 1,
	COMMAND_PRIORITY_NORMAL: () => 2,
	COMPOSITION_END_COMMAND: () => COMPOSITION_END_COMMAND$1,
	COMPOSITION_END_TAG: () => COMPOSITION_END_TAG$1,
	COMPOSITION_START_COMMAND: () => COMPOSITION_START_COMMAND$1,
	COMPOSITION_START_TAG: () => COMPOSITION_START_TAG$1,
	CONTROLLED_TEXT_INSERTION_COMMAND: () => CONTROLLED_TEXT_INSERTION_COMMAND$1,
	COPY_COMMAND: () => COPY_COMMAND$1,
	CUT_COMMAND: () => CUT_COMMAND$1,
	DEFAULT_EDITOR_DOM_CONFIG: () => DEFAULT_EDITOR_DOM_CONFIG$1,
	DELETE_CHARACTER_COMMAND: () => DELETE_CHARACTER_COMMAND$1,
	DELETE_LINE_COMMAND: () => DELETE_LINE_COMMAND$1,
	DELETE_WORD_COMMAND: () => DELETE_WORD_COMMAND$1,
	DRAGEND_COMMAND: () => DRAGEND_COMMAND$1,
	DRAGOVER_COMMAND: () => DRAGOVER_COMMAND$1,
	DRAGSTART_COMMAND: () => DRAGSTART_COMMAND$1,
	DROP_COMMAND: () => DROP_COMMAND$1,
	DecoratorNode: () => DecoratorNode$1,
	ElementNode: () => ElementNode$1,
	FOCUS_COMMAND: () => FOCUS_COMMAND$1,
	FORMAT_ELEMENT_COMMAND: () => FORMAT_ELEMENT_COMMAND$1,
	FORMAT_TEXT_COMMAND: () => FORMAT_TEXT_COMMAND$1,
	HISTORIC_TAG: () => HISTORIC_TAG$1,
	HISTORY_MERGE_TAG: () => HISTORY_MERGE_TAG$1,
	HISTORY_PUSH_TAG: () => HISTORY_PUSH_TAG$1,
	INDENT_CONTENT_COMMAND: () => INDENT_CONTENT_COMMAND$1,
	INPUT_COMMAND: () => INPUT_COMMAND$1,
	INSERT_LINE_BREAK_COMMAND: () => INSERT_LINE_BREAK_COMMAND$1,
	INSERT_PARAGRAPH_COMMAND: () => INSERT_PARAGRAPH_COMMAND$1,
	INSERT_TAB_COMMAND: () => INSERT_TAB_COMMAND$1,
	INTERNAL_$isBlock: () => INTERNAL_$isBlock$1,
	IS_ALL_FORMATTING: () => IS_ALL_FORMATTING$1,
	IS_BOLD: () => 1,
	IS_CODE: () => 16,
	IS_HIGHLIGHT: () => 128,
	IS_ITALIC: () => 2,
	IS_STRIKETHROUGH: () => 4,
	IS_SUBSCRIPT: () => 32,
	IS_SUPERSCRIPT: () => 64,
	IS_UNDERLINE: () => 8,
	KEY_ARROW_DOWN_COMMAND: () => KEY_ARROW_DOWN_COMMAND$1,
	KEY_ARROW_LEFT_COMMAND: () => KEY_ARROW_LEFT_COMMAND$1,
	KEY_ARROW_RIGHT_COMMAND: () => KEY_ARROW_RIGHT_COMMAND$1,
	KEY_ARROW_UP_COMMAND: () => KEY_ARROW_UP_COMMAND$1,
	KEY_BACKSPACE_COMMAND: () => KEY_BACKSPACE_COMMAND$1,
	KEY_DELETE_COMMAND: () => KEY_DELETE_COMMAND$1,
	KEY_DOWN_COMMAND: () => KEY_DOWN_COMMAND$1,
	KEY_ENTER_COMMAND: () => KEY_ENTER_COMMAND$1,
	KEY_ESCAPE_COMMAND: () => KEY_ESCAPE_COMMAND$1,
	KEY_MODIFIER_COMMAND: () => KEY_MODIFIER_COMMAND$1,
	KEY_SPACE_COMMAND: () => KEY_SPACE_COMMAND$1,
	KEY_TAB_COMMAND: () => KEY_TAB_COMMAND$1,
	LineBreakNode: () => LineBreakNode$1,
	MOVE_TO_END: () => MOVE_TO_END$1,
	MOVE_TO_START: () => MOVE_TO_START$1,
	NODE_STATE_KEY: () => "$",
	OUTDENT_CONTENT_COMMAND: () => OUTDENT_CONTENT_COMMAND$1,
	PASTE_COMMAND: () => PASTE_COMMAND$1,
	PASTE_TAG: () => PASTE_TAG$1,
	ParagraphNode: () => ParagraphNode$1,
	REDO_COMMAND: () => REDO_COMMAND$1,
	REMOVE_TEXT_COMMAND: () => REMOVE_TEXT_COMMAND$1,
	RootNode: () => RootNode$1,
	SELECTION_CHANGE_COMMAND: () => SELECTION_CHANGE_COMMAND$1,
	SELECTION_INSERT_CLIPBOARD_NODES_COMMAND: () => SELECTION_INSERT_CLIPBOARD_NODES_COMMAND$1,
	SELECT_ALL_COMMAND: () => SELECT_ALL_COMMAND$1,
	SKIP_COLLAB_TAG: () => SKIP_COLLAB_TAG$1,
	SKIP_DOM_SELECTION_TAG: () => SKIP_DOM_SELECTION_TAG$1,
	SKIP_SCROLL_INTO_VIEW_TAG: () => SKIP_SCROLL_INTO_VIEW_TAG$1,
	SKIP_SELECTION_FOCUS_TAG: () => SKIP_SELECTION_FOCUS_TAG$1,
	TEXT_TYPE_TO_FORMAT: () => TEXT_TYPE_TO_FORMAT$1,
	TabNode: () => TabNode$1,
	TextNode: () => TextNode$1,
	UNDO_COMMAND: () => UNDO_COMMAND$1,
	addClassNamesToElement: () => addClassNamesToElement$1,
	buildImportMap: () => buildImportMap$1,
	configExtension: () => configExtension$1,
	createCommand: () => createCommand$1,
	createEditor: () => createEditor$1,
	createSharedNodeState: () => createSharedNodeState$1,
	createState: () => createState$1,
	declarePeerDependency: () => declarePeerDependency$1,
	defineExtension: () => defineExtension$1,
	flipDirection: () => flipDirection$1,
	getDOMOwnerDocument: () => getDOMOwnerDocument$1,
	getDOMSelection: () => getDOMSelection$1,
	getDOMSelectionFromTarget: () => getDOMSelectionFromTarget$1,
	getDOMTextNode: () => getDOMTextNode$1,
	getEditorPropertyFromDOMNode: () => getEditorPropertyFromDOMNode$1,
	getNearestEditorFromDOMNode: () => getNearestEditorFromDOMNode$1,
	getRegisteredNode: () => getRegisteredNode$1,
	getRegisteredNodeOrThrow: () => getRegisteredNodeOrThrow$1,
	getStaticNodeConfig: () => getStaticNodeConfig$1,
	getStyleObjectFromCSS: () => getStyleObjectFromCSS$1,
	getTextDirection: () => getTextDirection$1,
	getTransformSetFromKlass: () => getTransformSetFromKlass$1,
	isBlockDomNode: () => isBlockDomNode$1,
	isCurrentlyReadOnlyMode: () => isCurrentlyReadOnlyMode$1,
	isDOMDocumentNode: () => isDOMDocumentNode$1,
	isDOMNode: () => isDOMNode$1,
	isDOMTextNode: () => isDOMTextNode$1,
	isDOMUnmanaged: () => isDOMUnmanaged$1,
	isDocumentFragment: () => isDocumentFragment$1,
	isExactShortcutMatch: () => isExactShortcutMatch$1,
	isHTMLAnchorElement: () => isHTMLAnchorElement$1,
	isHTMLElement: () => isHTMLElement$1,
	isInlineDomNode: () => isInlineDomNode$1,
	isLexicalEditor: () => isLexicalEditor$1,
	isModifierMatch: () => isModifierMatch$1,
	isSelectionCapturedInDecoratorInput: () => isSelectionCapturedInDecoratorInput$1,
	isSelectionWithinEditor: () => isSelectionWithinEditor$1,
	makeStepwiseIterator: () => makeStepwiseIterator$1,
	mergeRegister: () => mergeRegister$1,
	normalizeClassNames: () => normalizeClassNames$1,
	removeClassNamesFromElement: () => removeClassNamesFromElement$1,
	removeFromParent: () => removeFromParent$1,
	resetRandomKey: () => resetRandomKey$1,
	safeCast: () => safeCast$1,
	setDOMStyleFromCSS: () => setDOMStyleFromCSS$1,
	setDOMStyleObject: () => setDOMStyleObject$1,
	setDOMUnmanaged: () => setDOMUnmanaged$1,
	setNodeIndentFromDOM: () => setNodeIndentFromDOM$1,
	shallowMergeConfig: () => shallowMergeConfig$1,
	toggleTextFormatType: () => toggleTextFormatType$1
});
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
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
const CAN_USE_DOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
const documentMode = CAN_USE_DOM && "documentMode" in document ? document.documentMode : null;
const IS_APPLE = CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const IS_FIREFOX = CAN_USE_DOM && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
const CAN_USE_BEFORE_INPUT = CAN_USE_DOM && "InputEvent" in window && !documentMode ? "getTargetRanges" in new window.InputEvent("input") : false;
const IS_IOS = CAN_USE_DOM && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const IS_ANDROID = CAN_USE_DOM && /Android/.test(navigator.userAgent);
const IS_SAFARI = CAN_USE_DOM && /Version\/[\d.]+.*Safari/.test(navigator.userAgent) && !IS_ANDROID;
const IS_CHROME = CAN_USE_DOM && /^(?=.*Chrome).*/i.test(navigator.userAgent);
const IS_ANDROID_CHROME = CAN_USE_DOM && IS_ANDROID && IS_CHROME;
const IS_APPLE_WEBKIT = CAN_USE_DOM && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && IS_APPLE && !IS_CHROME;
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
const DOM_ELEMENT_TYPE = 1;
const DOM_TEXT_TYPE = 3;
const DOM_DOCUMENT_TYPE = 9;
const DOM_DOCUMENT_FRAGMENT_TYPE = 11;
const NO_DIRTY_NODES = 0;
const HAS_DIRTY_NODES = 1;
const FULL_RECONCILE = 2;
const IS_NORMAL = 0;
const IS_TOKEN = 1;
const IS_SEGMENTED = 2;
const IS_LOWERCASE = 256;
const IS_UPPERCASE = 512;
const IS_CAPITALIZE = 1024;
const IS_ALL_FORMATTING$1 = 2047;
const IS_DIRECTIONLESS = 1;
const IS_UNMERGEABLE = 2;
const IS_ALIGN_LEFT = 1;
const IS_ALIGN_CENTER = 2;
const IS_ALIGN_RIGHT = 3;
const IS_ALIGN_JUSTIFY = 4;
const IS_ALIGN_START = 5;
const IS_ALIGN_END = 6;
const NON_BREAKING_SPACE = "\xA0";
const COMPOSITION_SUFFIX = IS_SAFARI || IS_IOS || IS_APPLE_WEBKIT ? NON_BREAKING_SPACE : "​";
const DOUBLE_LINE_BREAK = "\n\n";
const COMPOSITION_START_CHAR = IS_FIREFOX ? NON_BREAKING_SPACE : COMPOSITION_SUFFIX;
const RTL_REGEX = /* @__PURE__ */ new RegExp("^[^A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]");
const LTR_REGEX = /* @__PURE__ */ new RegExp("^[^֑-߿יִ-﷽ﹰ-ﻼ]*[A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿]");
const TEXT_TYPE_TO_FORMAT$1 = {
	bold: 1,
	capitalize: IS_CAPITALIZE,
	code: 16,
	highlight: 128,
	italic: 2,
	lowercase: IS_LOWERCASE,
	strikethrough: 4,
	subscript: 32,
	superscript: 64,
	underline: 8,
	uppercase: IS_UPPERCASE
};
const DETAIL_TYPE_TO_DETAIL = {
	directionless: IS_DIRECTIONLESS,
	unmergeable: IS_UNMERGEABLE
};
const ELEMENT_TYPE_TO_FORMAT = {
	center: IS_ALIGN_CENTER,
	end: IS_ALIGN_END,
	justify: IS_ALIGN_JUSTIFY,
	left: IS_ALIGN_LEFT,
	right: IS_ALIGN_RIGHT,
	start: IS_ALIGN_START
};
const ELEMENT_FORMAT_TO_TYPE = {
	[IS_ALIGN_CENTER]: "center",
	[IS_ALIGN_END]: "end",
	[IS_ALIGN_JUSTIFY]: "justify",
	[IS_ALIGN_LEFT]: "left",
	[IS_ALIGN_RIGHT]: "right",
	[IS_ALIGN_START]: "start"
};
const TEXT_MODE_TO_TYPE = {
	normal: IS_NORMAL,
	segmented: IS_SEGMENTED,
	token: IS_TOKEN
};
const TEXT_TYPE_TO_MODE = {
	[IS_NORMAL]: "normal",
	[IS_SEGMENTED]: "segmented",
	[IS_TOKEN]: "token"
};
const PROTOTYPE_CONFIG_METHOD = "$config";
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var DequeSet = class {
	_front = /* @__PURE__ */ new Set();
	_back = /* @__PURE__ */ new Set();
	_cache;
	get size() {
		return this._front.size + this._back.size;
	}
	addBack(v) {
		delete this._cache;
		if (!this._front.has(v)) this._back.add(v);
		return this;
	}
	addFront(v) {
		delete this._cache;
		if (!this._back.has(v)) this._front.add(v);
		return this;
	}
	delete(v) {
		delete this._cache;
		return this._front.delete(v) || this._back.delete(v);
	}
	toArray() {
		const arr = Array.from(this._front).reverse();
		for (const v of this._back) arr.push(v);
		return arr;
	}
	toReadonlyArray() {
		this._cache = this._cache || this.toArray();
		return this._cache;
	}
	[Symbol.iterator]() {
		return this.toReadonlyArray()[Symbol.iterator]();
	}
};
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function $garbageCollectDetachedDecorators(editor, pendingEditorState) {
	const currentDecorators = editor._decorators;
	let decorators = editor._pendingDecorators || currentDecorators;
	const nodeMap = pendingEditorState._nodeMap;
	let key;
	for (key in decorators) if (!nodeMap.has(key)) {
		if (decorators === currentDecorators) decorators = cloneDecorators(editor);
		delete decorators[key];
	}
}
function $garbageCollectDetachedDeepChildNodes(node, parentKey, prevNodeMap, nodeMap, nodeMapDelete, dirtyNodes) {
	let child = node.getFirstChild();
	while (child !== null) {
		const childKey = child.__key;
		if (child.__parent === parentKey) {
			if ($isElementNode$1(child)) $garbageCollectDetachedDeepChildNodes(child, childKey, prevNodeMap, nodeMap, nodeMapDelete, dirtyNodes);
			if (!prevNodeMap.has(childKey)) dirtyNodes.delete(childKey);
			nodeMapDelete.push(childKey);
		}
		child = child.getNextSibling();
	}
}
function $garbageCollectDetachedNodes(prevEditorState, editorState, dirtyLeaves, dirtyElements) {
	const prevNodeMap = prevEditorState._nodeMap;
	const nodeMap = editorState._nodeMap;
	const nodeMapDelete = [];
	for (const [nodeKey] of dirtyElements) {
		const node = nodeMap.get(nodeKey);
		if (node !== void 0) {
			if (!node.isAttached()) {
				if ($isElementNode$1(node)) $garbageCollectDetachedDeepChildNodes(node, nodeKey, prevNodeMap, nodeMap, nodeMapDelete, dirtyElements);
				if (!prevNodeMap.has(nodeKey)) dirtyElements.delete(nodeKey);
				nodeMapDelete.push(nodeKey);
			}
		}
	}
	for (const nodeKey of nodeMapDelete) nodeMap.delete(nodeKey);
	for (const nodeKey of dirtyLeaves) {
		const node = nodeMap.get(nodeKey);
		if (node !== void 0 && !node.isAttached()) {
			if (!prevNodeMap.has(nodeKey)) dirtyLeaves.delete(nodeKey);
			nodeMap.delete(nodeKey);
		}
	}
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
const TEXT_MUTATION_VARIANCE = 100;
let isProcessingMutations = false;
let lastTextEntryTimeStamp = 0;
function getIsProcessingMutations() {
	return isProcessingMutations;
}
function updateTimeStamp(event) {
	lastTextEntryTimeStamp = event.timeStamp;
}
function initTextEntryListener(editor) {
	if (lastTextEntryTimeStamp === 0) getWindow(editor).addEventListener("textInput", updateTimeStamp, true);
}
function isManagedLineBreak(dom, target, editor) {
	const isBR = dom.nodeName === "BR";
	const lexicalLineBreak = target.__lexicalLineBreak;
	return lexicalLineBreak && (dom === lexicalLineBreak || isBR && dom.previousSibling === lexicalLineBreak) || isBR && getNodeKeyFromDOMNode(dom, editor) !== void 0;
}
function getLastSelection(editor) {
	return editor.getEditorState().read(() => {
		const selection = $getSelection$1();
		return selection !== null ? selection.clone() : null;
	});
}
function $handleTextMutation(target, node, editor) {
	const domSelection = getDOMSelection$1(getWindow(editor));
	let anchorOffset = null;
	let focusOffset = null;
	if (domSelection !== null && domSelection.anchorNode === target) {
		anchorOffset = domSelection.anchorOffset;
		focusOffset = domSelection.focusOffset;
	}
	const text = target.nodeValue;
	if (text !== null) $updateTextNodeFromDOMContent(node, text, anchorOffset, focusOffset, false);
}
function shouldUpdateTextNodeFromMutation(selection, targetDOM, targetNode) {
	if ($isRangeSelection$1(selection)) {
		const anchorNode = selection.anchor.getNode();
		if (anchorNode.is(targetNode) && selection.format !== anchorNode.getFormat()) return false;
	}
	return isDOMTextNode$1(targetDOM) && targetNode.isAttached();
}
function $getNearestManagedNodePairFromDOMNode(startingDOM, editor, editorState, rootElement) {
	for (let dom = startingDOM; dom && !isDOMUnmanaged$1(dom); dom = getParentElement(dom)) {
		const key = getNodeKeyFromDOMNode(dom, editor);
		if (key !== void 0) {
			const node = $getNodeByKey$1(key, editorState);
			if (node) return $isDecoratorNode$1(node) || !isHTMLElement$1(dom) ? void 0 : [dom, node];
		} else if (dom === rootElement) return [rootElement, internalGetRoot(editorState)];
	}
}
function flushMutations(editor, mutations, observer) {
	isProcessingMutations = true;
	const shouldFlushTextMutations = performance.now() - lastTextEntryTimeStamp > TEXT_MUTATION_VARIANCE;
	try {
		updateEditorSync(editor, () => {
			const selection = $getSelection$1() || getLastSelection(editor);
			const badDOMTargets = /* @__PURE__ */ new Map();
			const rootElement = editor.getRootElement();
			const currentEditorState = editor._editorState;
			const blockCursorElement = editor._blockCursorElement;
			let shouldRevertSelection = false;
			let possibleTextForFirefoxPaste = "";
			for (let i = 0; i < mutations.length; i++) {
				const mutation = mutations[i];
				const type = mutation.type;
				const targetDOM = mutation.target;
				const pair = $getNearestManagedNodePairFromDOMNode(targetDOM, editor, currentEditorState, rootElement);
				if (!pair) continue;
				const [nodeDOM, targetNode] = pair;
				if (type === "characterData") {
					if (shouldFlushTextMutations && $isTextNode$1(targetNode) && isDOMTextNode$1(targetDOM) && shouldUpdateTextNodeFromMutation(selection, targetDOM, targetNode)) $handleTextMutation(targetDOM, targetNode, editor);
				} else if (type === "childList") {
					shouldRevertSelection = true;
					const addedDOMs = mutation.addedNodes;
					for (let s = 0; s < addedDOMs.length; s++) {
						const addedDOM = addedDOMs[s];
						const node = $getNodeFromDOMNode$1(addedDOM);
						const parentDOM = addedDOM.parentNode;
						if (parentDOM != null && addedDOM !== blockCursorElement && node === null && !isManagedLineBreak(addedDOM, parentDOM, editor)) {
							if (IS_FIREFOX) {
								const possibleText = (isHTMLElement$1(addedDOM) ? addedDOM.innerText : null) || addedDOM.nodeValue;
								if (possibleText) possibleTextForFirefoxPaste += possibleText;
							}
							parentDOM.removeChild(addedDOM);
						}
					}
					const removedDOMs = mutation.removedNodes;
					const removedDOMsLength = removedDOMs.length;
					if (removedDOMsLength > 0) {
						let unremovedBRs = 0;
						for (let s = 0; s < removedDOMsLength; s++) {
							const removedDOM = removedDOMs[s];
							if (isManagedLineBreak(removedDOM, targetDOM, editor) || blockCursorElement === removedDOM) {
								targetDOM.appendChild(removedDOM);
								unremovedBRs++;
							}
						}
						if (removedDOMsLength !== unremovedBRs) badDOMTargets.set(nodeDOM, targetNode);
					}
				}
			}
			if (badDOMTargets.size > 0) for (const [nodeDOM, targetNode] of badDOMTargets) targetNode.reconcileObservedMutation(nodeDOM, editor);
			const records = observer.takeRecords();
			if (records.length > 0) {
				for (let i = 0; i < records.length; i++) {
					const record = records[i];
					const addedNodes = record.addedNodes;
					const target = record.target;
					for (let s = 0; s < addedNodes.length; s++) {
						const addedDOM = addedNodes[s];
						const parentDOM = addedDOM.parentNode;
						if (parentDOM != null && addedDOM.nodeName === "BR" && !isManagedLineBreak(addedDOM, target, editor)) parentDOM.removeChild(addedDOM);
					}
				}
				observer.takeRecords();
			}
			if (selection !== null) {
				if (shouldRevertSelection) $setSelection$1(selection);
				if (IS_FIREFOX && isFirefoxClipboardEvents(editor)) selection.insertRawText(possibleTextForFirefoxPaste);
			}
		});
	} finally {
		isProcessingMutations = false;
	}
}
function flushRootMutations(editor) {
	const observer = editor._observer;
	if (observer !== null) flushMutations(editor, observer.takeRecords(), observer);
}
function initMutationObserver(editor) {
	initTextEntryListener(editor);
	editor._observer = new MutationObserver((mutations, observer) => {
		flushMutations(editor, mutations, observer);
	});
}
/**
* Get the value type (V) from a StateConfig
*/
/**
* Get the key type (K) from a StateConfig
*/
/**
* A value type, or an updater for that value type. For use with
* {@link $setState} or any user-defined wrappers around it.
*/
/**
* A type alias to make it easier to define setter methods on your node class
*
* @example
* ```ts
* const fooState = createState("foo", { parse: ... });
* class MyClass extends TextNode {
*   // ...
*   setFoo(valueOrUpdater: StateValueOrUpdater<typeof fooState>): this {
*     return $setState(this, fooState, valueOrUpdater);
*   }
* }
* ```
*/
/**
* The NodeState JSON produced by this LexicalNode
*/
/**
* Configure a value to be used with StateConfig.
*
* The value type should be inferred from the definition of parse.
*
* If the value type is not JSON serializable, then unparse must also be provided.
*
* Values should be treated as immutable, much like React.useState. Mutating
* stored values directly will cause unpredictable behavior, is not supported,
* and may trigger errors in the future.
*
* @example
* ```ts
* const numberOrNullState = createState('numberOrNull', {parse: (v) => typeof v === 'number' ? v : null});
* //    ^? State<'numberOrNull', StateValueConfig<number | null>>
* const numberState = createState('number', {parse: (v) => typeof v === 'number' ? v : 0});
* //    ^? State<'number', StateValueConfig<number>>
* ```
*
* Only the parse option is required, it is generally not useful to
* override `unparse` or `isEqual`. However, if you are using
* non-primitive types such as Array, Object, Date, or something
* more exotic then you would want to override this. In these
* cases you might want to reach for third party libraries.
*
* @example
* ```ts
* const isoDateState = createState('isoDate', {
*   parse: (v): null | Date => {
*     const date = typeof v === 'string' ? new Date(v) : null;
*     return date && !isNaN(date.valueOf()) ? date : null;
*   }
*   isEqual: (a, b) => a === b || (a && b && a.valueOf() === b.valueOf()),
*   unparse: (v) => v && v.toString()
* });
* ```
*
* You may find it easier to write a parse function using libraries like
* zod, valibot, ajv, Effect, TypeBox, etc. perhaps with a wrapper function.
*/
/**
* The return value of {@link createState}, for use with
* {@link $getState} and {@link $setState}.
*/
var StateConfig = class {
	/** The string key used when serializing this state to JSON */
	key;
	/** The parse function from the StateValueConfig passed to createState */
	parse;
	/**
	* The unparse function from the StateValueConfig passed to createState,
	* with a default that is simply a pass-through that assumes the value is
	* JSON serializable.
	*/
	unparse;
	/**
	* An equality function from the StateValueConfig, with a default of
	* Object.is.
	*/
	isEqual;
	/**
	* The result of `stateValueConfig.parse(undefined)`, which is computed only
	* once and used as the default value. When the current value `isEqual` to
	* the `defaultValue`, it will not be serialized to JSON.
	*/
	defaultValue;
	resetOnCopyNode;
	constructor(key, stateValueConfig) {
		this.key = key;
		this.parse = stateValueConfig.parse.bind(stateValueConfig);
		this.unparse = (stateValueConfig.unparse || coerceToJSON).bind(stateValueConfig);
		this.isEqual = (stateValueConfig.isEqual || Object.is).bind(stateValueConfig);
		this.defaultValue = this.parse(void 0);
		this.resetOnCopyNode = stateValueConfig.resetOnCopyNode || false;
	}
};
/**
* For advanced use cases, using this type is not recommended unless
* it is required (due to TypeScript's lack of features like
* higher-kinded types).
*
* A {@link StateConfig} type with any key and any value that can be
* used in situations where the key and value type can not be known,
* such as in a generic constraint when working with a collection of
* StateConfig.
*
* {@link StateConfigKey} and {@link StateConfigValue} will be
* useful when this is used as a generic constraint.
*/
/**
* Create a StateConfig for the given string key and StateValueConfig.
*
* The key must be locally unique. In dev you will get a key collision error
* when you use two separate StateConfig on the same node with the same key.
*
* The returned StateConfig value should be used with {@link $getState} and
* {@link $setState}.
*
* @param key The key to use
* @param valueConfig Configuration for the value type
* @returns a StateConfig
*
* @__NO_SIDE_EFFECTS__
*/
function createState$1(key, valueConfig) {
	return new StateConfig(key, valueConfig);
}
/**
* The accessor for working with node state. This will read the value for the
* state on the given node, and will return `stateConfig.defaultValue` if the
* state has never been set on this node.
*
* The `version` parameter is optional and should generally be `'latest'`,
* consistent with the behavior of other node methods and functions,
* but for certain use cases such as `updateDOM` you may have a need to
* use `'direct'` to read the state from a previous version of the node.
*
* For very advanced use cases, you can expect that 'direct' does not
* require an editor state, just like directly accessing other properties
* of a node without an accessor (e.g. `textNode.__text`).
*
* @param node Any LexicalNode
* @param stateConfig The configuration of the state to read
* @param version The default value 'latest' will read the latest version of the node state, 'direct' will read the version that is stored on this LexicalNode which not reflect the version used in the current editor state
* @returns The current value from the state, or the default value provided by the configuration.
*/
function $getState$1(node, stateConfig, version = "latest") {
	const state = (version === "latest" ? node.getLatest() : node).__state;
	if (state) {
		$checkCollision(node, stateConfig, state);
		return state.getValue(stateConfig);
	}
	return stateConfig.defaultValue;
}
/**
* Given two versions of a node and a stateConfig, compare their state values
* using `$getState(nodeVersion, stateConfig, 'direct')`.
* If the values are equal according to `stateConfig.isEqual`, return `null`,
* otherwise return `[value, prevValue]`.
*
* This is useful for implementing updateDOM. Note that the `'direct'`
* version argument is used for both nodes.
*
* @param node Any LexicalNode
* @param prevNode A previous version of node
* @param stateConfig The configuration of the state to read
* @returns `[value, prevValue]` if changed, otherwise `null`
*/
function $getStateChange$1(node, prevNode, stateConfig) {
	const value = $getState$1(node, stateConfig, "direct");
	const prevValue = $getState$1(prevNode, stateConfig, "direct");
	return stateConfig.isEqual(value, prevValue) ? null : [value, prevValue];
}
/**
* Set the state defined by stateConfig on node. Like with `React.useState`
* you may directly specify the value or use an updater function that will
* be called with the previous value of the state on that node (which will
* be the `stateConfig.defaultValue` if not set).
*
* When an updater function is used, the node will only be marked dirty if
* `stateConfig.isEqual(prevValue, value)` is false.
*
* @example
* ```ts
* const toggle = createState('toggle', {parse: Boolean});
* // set it direction
* $setState(node, counterState, true);
* // use an updater
* $setState(node, counterState, (prev) => !prev);
* ```
*
* @param node The LexicalNode to set the state on
* @param stateConfig The configuration for this state
* @param valueOrUpdater The value or updater function
* @returns node
*/
function $setState$1(node, stateConfig, valueOrUpdater) {
	errorOnReadOnly();
	let value;
	if (typeof valueOrUpdater === "function") {
		const latest = node.getLatest();
		const prevValue = $getState$1(latest, stateConfig);
		value = valueOrUpdater(prevValue);
		if (stateConfig.isEqual(prevValue, value)) return latest;
	} else value = valueOrUpdater;
	const writable = node.getWritable();
	const state = $getWritableNodeState$1(writable);
	$checkCollision(node, stateConfig, state);
	state.updateFromKnown(stateConfig, value);
	return writable;
}
/**
* @internal
*
* Register the config to this node's sharedConfigMap and throw an exception in
* `true` when a collision is detected.
*/
function $checkCollision(node, stateConfig, state) {
	{
		const collision = state.sharedNodeState.sharedConfigMap.get(stateConfig.key);
		if (collision !== void 0 && collision !== stateConfig) formatDevErrorMessage(`$setState: State key collision ${JSON.stringify(stateConfig.key)} detected in ${node.constructor.name} node with type ${node.getType()} and key ${node.getKey()}. Only one StateConfig with a given key should be used on a node.`);
	}
}
/**
* @internal
*
* Opaque state to be stored on the editor's RegisterNode for use by NodeState
*/
/**
* @internal
*
* Create the state to store on RegisteredNode
*/
function createSharedNodeState$1(nodeConfig) {
	const sharedConfigMap = /* @__PURE__ */ new Map();
	const flatKeys = /* @__PURE__ */ new Set();
	for (let klass = typeof nodeConfig === "function" ? nodeConfig : nodeConfig.replace; klass.prototype && klass.prototype.getType !== void 0; klass = Object.getPrototypeOf(klass)) {
		const { ownNodeConfig } = getStaticNodeConfig$1(klass);
		if (ownNodeConfig && ownNodeConfig.stateConfigs) for (const requiredStateConfig of ownNodeConfig.stateConfigs) {
			let stateConfig;
			if ("stateConfig" in requiredStateConfig) {
				stateConfig = requiredStateConfig.stateConfig;
				if (requiredStateConfig.flat) flatKeys.add(stateConfig.key);
			} else stateConfig = requiredStateConfig;
			sharedConfigMap.set(stateConfig.key, stateConfig);
		}
	}
	return {
		flatKeys,
		sharedConfigMap
	};
}
/**
* @internal
*
* A Map of string keys to state configurations to be shared across nodes
* and/or node versions.
*/
/**
* @internal
*/
var NodeState = class NodeState {
	/**
	* @internal
	*
	* Track the (versioned) node that this NodeState was created for, to
	* facilitate copy-on-write for NodeState. When a LexicalNode is cloned,
	* it will *reference* the NodeState from its prevNode. From the nextNode
	* you can continue to read state without copying, but the first $setState
	* will trigger a copy of the prevNode's NodeState with the node property
	* updated.
	*/
	node;
	/**
	* @internal
	*
	* State that has already been parsed in a get state, so it is safe. (can be returned with
	* just a cast since the proof was given before).
	*
	* Note that it uses StateConfig, so in addition to (1) the CURRENT VALUE, it has access to
	* (2) the State key (3) the DEFAULT VALUE and (4) the PARSE FUNCTION
	*/
	knownState;
	/**
	* @internal
	*
	* A copy of serializedNode[NODE_STATE_KEY] that is made when JSON is
	* imported but has not been parsed yet.
	*
	* It stays here until a get state requires us to parse it, and since we
	* then know the value is safe we move it to knownState.
	*
	* Note that since only string keys are used here, we can only allow this
	* state to pass-through on export or on the next version since there is
	* no known value configuration. This pass-through is to support scenarios
	* where multiple versions of the editor code are working in parallel so
	* an old version of your code doesnt erase metadata that was
	* set by a newer version of your code.
	*/
	unknownState;
	/**
	* @internal
	*
	* This sharedNodeState is preserved across all instances of a given
	* node type in an editor and remains writable. It is how keys are resolved
	* to configuration.
	*/
	sharedNodeState;
	/**
	* @internal
	*
	* The count of known or unknown keys in this state, ignoring the
	* intersection between the two sets.
	*/
	size;
	/**
	* @internal
	*/
	constructor(node, sharedNodeState, unknownState = void 0, knownState = /* @__PURE__ */ new Map(), size = void 0) {
		this.node = node;
		this.sharedNodeState = sharedNodeState;
		this.unknownState = unknownState;
		this.knownState = knownState;
		const { sharedConfigMap } = this.sharedNodeState;
		const computedSize = size !== void 0 ? size : computeSize(sharedConfigMap, unknownState, knownState);
		if (!(size === void 0 || computedSize === size)) formatDevErrorMessage(`NodeState: size != computedSize (${String(size)} != ${String(computedSize)})`);
		for (const stateConfig of knownState.keys()) if (!sharedConfigMap.has(stateConfig.key)) formatDevErrorMessage(`NodeState: sharedConfigMap missing knownState key ${stateConfig.key}`);
		this.size = computedSize;
	}
	/**
	* @internal
	*
	* Get the value from knownState, or parse it from unknownState
	* if it contains the given key.
	*
	* Updates the sharedConfigMap when no known state is found.
	* Updates unknownState and knownState when an unknownState is parsed.
	*/
	getValue(stateConfig) {
		const known = this.knownState.get(stateConfig);
		if (known !== void 0) return known;
		this.sharedNodeState.sharedConfigMap.set(stateConfig.key, stateConfig);
		let parsed = stateConfig.defaultValue;
		if (this.unknownState && stateConfig.key in this.unknownState) {
			const jsonValue = this.unknownState[stateConfig.key];
			if (jsonValue !== void 0) parsed = stateConfig.parse(jsonValue);
			this.updateFromKnown(stateConfig, parsed);
		}
		return parsed;
	}
	/**
	* @internal
	*
	* Used only for advanced use cases, such as collab. The intent here is to
	* allow you to diff states with a more stable interface than the properties
	* of this class.
	*/
	getInternalState() {
		return [this.unknownState, this.knownState];
	}
	/**
	* Encode this NodeState to JSON in the format that its node expects.
	* This returns `{[NODE_STATE_KEY]?: UnknownStateRecord}` rather than
	* `UnknownStateRecord | undefined` so that we can support flattening
	* specific entries in the future when nodes can declare what
	* their required StateConfigs are.
	*/
	toJSON() {
		const state = { ...this.unknownState };
		const flatState = {};
		for (const [stateConfig, v] of this.knownState) if (stateConfig.isEqual(v, stateConfig.defaultValue)) delete state[stateConfig.key];
		else state[stateConfig.key] = stateConfig.unparse(v);
		for (const key of this.sharedNodeState.flatKeys) if (key in state) {
			flatState[key] = state[key];
			delete state[key];
		}
		if (undefinedIfEmpty(state)) flatState["$"] = state;
		return flatState;
	}
	/**
	* @internal
	*
	* A NodeState is writable when the node to update matches
	* the node associated with the NodeState. This basically
	* mirrors how the EditorState NodeMap works, but in a
	* bottom-up organization rather than a top-down organization.
	*
	* This allows us to implement the same "copy on write"
	* pattern for state, without having the state version
	* update every time the node version changes (e.g. when
	* its parent or siblings change).
	*
	* @param node The node to associate with the state
	* @returns The next writable state
	*/
	getWritable(node) {
		if (this.node === node) return this;
		const { sharedNodeState, unknownState } = this;
		const nextKnownState = new Map(this.knownState);
		return new NodeState(node, sharedNodeState, parseAndPruneNextUnknownState(sharedNodeState.sharedConfigMap, nextKnownState, unknownState), nextKnownState, this.size);
	}
	/** @internal */
	resetOnCopyNode() {
		for (const stateConfig of this.knownState.keys()) if (stateConfig.resetOnCopyNode) this.knownState.set(stateConfig, stateConfig.defaultValue);
		return this;
	}
	/** @internal */
	updateFromKnown(stateConfig, value) {
		const key = stateConfig.key;
		this.sharedNodeState.sharedConfigMap.set(key, stateConfig);
		const { knownState, unknownState } = this;
		if (!(knownState.has(stateConfig) || unknownState && key in unknownState)) {
			if (unknownState) {
				delete unknownState[key];
				this.unknownState = undefinedIfEmpty(unknownState);
			}
			this.size++;
		}
		knownState.set(stateConfig, value);
	}
	/**
	* @internal
	*
	* This is intended for advanced use cases only, such
	* as collab or dev tools.
	*
	* Update a single key value pair from unknown state,
	* parsing it if the key is known to this node. This is
	* basically like updateFromJSON, but the effect is
	* isolated to a single entry.
	*
	* @param k The string key from an UnknownStateRecord
	* @param v The unknown value from an UnknownStateRecord
	*/
	updateFromUnknown(k, v) {
		const stateConfig = this.sharedNodeState.sharedConfigMap.get(k);
		if (stateConfig) this.updateFromKnown(stateConfig, stateConfig.parse(v));
		else {
			this.unknownState = this.unknownState || {};
			if (!(k in this.unknownState)) this.size++;
			this.unknownState[k] = v;
		}
	}
	/**
	* @internal
	*
	* Reset all existing state to default or empty values,
	* and perform any updates from the given unknownState.
	*
	* This is used when initializing a node's state from JSON,
	* or when resetting a node's state from JSON.
	*
	* @param unknownState The new state in serialized form
	*/
	updateFromJSON(unknownState) {
		const { knownState } = this;
		for (const stateConfig of knownState.keys()) knownState.set(stateConfig, stateConfig.defaultValue);
		this.size = knownState.size;
		this.unknownState = void 0;
		if (unknownState) for (const [k, v] of Object.entries(unknownState)) this.updateFromUnknown(k, v);
	}
};
/**
* @internal
*
* Only for direct use in very advanced integrations, such as lexical-yjs.
* Typically you would only use {@link createState}, {@link $getState}, and
* {@link $setState}. This is effectively the preamble for {@link $setState}.
*/
function $getWritableNodeState$1(node) {
	const writable = node.getWritable();
	const state = writable.__state ? writable.__state.getWritable(writable) : new NodeState(writable, $getSharedNodeState(writable));
	writable.__state = state;
	return state;
}
/**
* @internal
*
* Get the SharedNodeState for a node on this editor
*/
function $getSharedNodeState(node) {
	return node.__state ? node.__state.sharedNodeState : getRegisteredNodeOrThrow$1($getEditor$1(), node.getType()).sharedNodeState;
}
/**
* @internal
*
* This is used to implement LexicalNode.updateFromJSON and is
* not intended to be exported from the package.
*
* @param node any LexicalNode
* @param unknownState undefined or a serialized State
* @returns A writable version of node, with the state set.
*/
function $updateStateFromJSON(node, serialized) {
	const writable = node.getWritable();
	const unknownState = serialized["$"];
	let parseState = unknownState;
	for (const k of $getSharedNodeState(writable).flatKeys) if (k in serialized) {
		if (parseState === void 0 || parseState === unknownState) parseState = { ...unknownState };
		parseState[k] = serialized[k];
	}
	if (writable.__state || parseState) $getWritableNodeState$1(node).updateFromJSON(parseState);
	return writable;
}
/**
* @internal
*
* Return true if the two nodes have equivalent NodeState, to be used
* to determine when TextNode are being merged, not a lot of use cases
* otherwise.
*/
function nodeStatesAreEquivalent(a, b) {
	if (a === b) return true;
	const keys = /* @__PURE__ */ new Set();
	return !(a && hasUnequalMapEntry(keys, a, b) || b && hasUnequalMapEntry(keys, b, a) || a && hasUnequalRecordEntry(keys, a, b) || b && hasUnequalRecordEntry(keys, b, a));
}
/**
* Compute the number of distinct keys that will be in a NodeState
*/
function computeSize(sharedConfigMap, unknownState, knownState) {
	let size = knownState.size;
	if (unknownState) for (const k in unknownState) {
		const sharedConfig = sharedConfigMap.get(k);
		if (!sharedConfig || !knownState.has(sharedConfig)) size++;
	}
	return size;
}
/**
* @internal
*
* Return obj if it is an object with at least one property, otherwise
* return undefined.
*/
function undefinedIfEmpty(obj) {
	if (obj) for (const key in obj) return obj;
}
/**
* @internal
*
* Cast the given v to unknown
*/
function coerceToJSON(v) {
	return v;
}
/**
* @internal
*
* Parse all knowable values in an UnknownStateRecord into nextKnownState
* and return the unparsed values in a new UnknownStateRecord. Returns
* undefined if no unknown values remain.
*/
function parseAndPruneNextUnknownState(sharedConfigMap, nextKnownState, unknownState) {
	let nextUnknownState = void 0;
	if (unknownState) for (const [k, v] of Object.entries(unknownState)) {
		const stateConfig = sharedConfigMap.get(k);
		if (stateConfig) {
			if (!nextKnownState.has(stateConfig)) nextKnownState.set(stateConfig, stateConfig.parse(v));
		} else {
			nextUnknownState = nextUnknownState || {};
			nextUnknownState[k] = v;
		}
	}
	return nextUnknownState;
}
/**
* @internal
*
* Compare each entry of sourceState.knownState that is not in keys to
* otherState (or the default value if otherState is undefined.
* Note that otherState will return the defaultValue as well if it
* has never been set. Any checked entry's key will be added to keys.
*
* @returns true if any difference is found, false otherwise
*/
function hasUnequalMapEntry(keys, sourceState, otherState) {
	for (const [stateConfig, value] of sourceState.knownState) {
		if (keys.has(stateConfig.key)) continue;
		keys.add(stateConfig.key);
		const otherValue = otherState ? otherState.getValue(stateConfig) : stateConfig.defaultValue;
		if (otherValue !== value && !stateConfig.isEqual(otherValue, value)) return true;
	}
	return false;
}
/**
* @internal
*
* Compare each entry of sourceState.unknownState that is not in keys to
* otherState.unknownState (or undefined if otherState is undefined).
* Any checked entry's key will be added to keys.
*
* Notably since we have already checked hasUnequalMapEntry on both sides,
* we do not do any parsing or checking of knownState.
*
* @returns true if any difference is found, false otherwise
*/
function hasUnequalRecordEntry(keys, sourceState, otherState) {
	const { unknownState } = sourceState;
	const otherUnknownState = otherState ? otherState.unknownState : void 0;
	if (unknownState) for (const [key, value] of Object.entries(unknownState)) {
		if (keys.has(key)) continue;
		keys.add(key);
		if (value !== (otherUnknownState ? otherUnknownState[key] : void 0)) return true;
	}
	return false;
}
/**
* @internal
*
* Clones the NodeState for a given node. Handles aliasing if the state references the from node.
*/
function $cloneNodeState(from, to) {
	const state = from.__state;
	return state && state.node === from ? state.getWritable(to) : state;
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function $canSimpleTextNodesBeMerged(node1, node2) {
	const node1Mode = node1.__mode;
	const node1Format = node1.__format;
	const node1Style = node1.__style;
	const node2Mode = node2.__mode;
	const node2Format = node2.__format;
	const node2Style = node2.__style;
	const node1State = node1.__state;
	const node2State = node2.__state;
	return (node1Mode === null || node1Mode === node2Mode) && (node1Format === null || node1Format === node2Format) && (node1Style === null || node1Style === node2Style) && (node1.__state === null || node1State === node2State || nodeStatesAreEquivalent(node1State, node2State));
}
function $mergeTextNodes(node1, node2) {
	const writableNode1 = node1.mergeWithSibling(node2);
	const normalizedNodes = getActiveEditor()._normalizedNodes;
	normalizedNodes.add(node1.__key);
	normalizedNodes.add(node2.__key);
	return writableNode1;
}
function $normalizeTextNode(textNode) {
	let node = textNode;
	if (node.__text === "" && node.isSimpleText() && !node.isUnmergeable()) {
		node.remove();
		return;
	}
	let previousNode;
	while ((previousNode = node.getPreviousSibling()) !== null && $isTextNode$1(previousNode) && previousNode.isSimpleText() && !previousNode.isUnmergeable()) if (previousNode.__text === "") previousNode.remove();
	else if ($canSimpleTextNodesBeMerged(previousNode, node)) {
		node = $mergeTextNodes(previousNode, node);
		break;
	} else break;
	let nextNode;
	while ((nextNode = node.getNextSibling()) !== null && $isTextNode$1(nextNode) && nextNode.isSimpleText() && !nextNode.isUnmergeable()) if (nextNode.__text === "") nextNode.remove();
	else if ($canSimpleTextNodesBeMerged(node, nextNode)) {
		node = $mergeTextNodes(node, nextNode);
		break;
	} else break;
}
function $normalizeSelection(selection) {
	$normalizePoint(selection.anchor);
	$normalizePoint(selection.focus);
	return selection;
}
function $normalizePoint(point) {
	while (point.type === "element") {
		const node = point.getNode();
		const offset = point.offset;
		let nextNode;
		let nextOffsetAtEnd;
		if (offset === node.getChildrenSize()) {
			nextNode = node.getChildAtIndex(offset - 1);
			nextOffsetAtEnd = true;
		} else {
			nextNode = node.getChildAtIndex(offset);
			nextOffsetAtEnd = false;
		}
		if ($isTextNode$1(nextNode)) {
			point.set(nextNode.__key, nextOffsetAtEnd ? nextNode.getTextContentSize() : 0, "text", true);
			break;
		} else if (!$isElementNode$1(nextNode)) break;
		point.set(nextNode.__key, nextOffsetAtEnd ? nextNode.getChildrenSize() : 0, "element", true);
	}
}
let subTreeTextContent = "";
let subTreeTextFormat = null;
let subTreeTextStyle = null;
let activeEditorConfig;
let activeEditor$1;
let activeEditorNodes;
let treatAllNodesAsDirty = false;
let activeEditorStateReadOnly = false;
let activeMutationListeners;
let activeDirtyElements;
let activeDirtyLeaves;
let activePrevNodeMap;
let activeNextNodeMap;
let activePrevKeyToDOMMap;
let mutatedNodes;
let activeEditorDOMRenderConfig;
function $destroyNode(key, parentDOM) {
	const node = activePrevNodeMap.get(key);
	if (parentDOM !== null) {
		const dom = getPrevElementByKeyOrThrow(key);
		if (dom.parentNode === parentDOM) parentDOM.removeChild(dom);
	}
	if (!activeNextNodeMap.has(key)) activeEditor$1._keyToDOMMap.delete(key);
	if ($isElementNode$1(node)) {
		const children = $createChildrenArray$1(node, activePrevNodeMap);
		$destroyChildren(children, 0, children.length - 1, null);
	}
	if (node !== void 0) setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, node, "destroyed");
}
function $destroyChildren(children, _startIndex, endIndex, dom) {
	for (let startIndex = _startIndex; startIndex <= endIndex; ++startIndex) {
		const child = children[startIndex];
		if (child !== void 0) $destroyNode(child, dom);
	}
}
function setTextAlign(domStyle, value) {
	domStyle.setProperty("text-align", value);
}
const DEFAULT_INDENT_VALUE = "40px";
function setElementIndent(dom, indent) {
	const indentClassName = activeEditorConfig.theme.indent;
	if (typeof indentClassName === "string") {
		const elementHasClassName = dom.classList.contains(indentClassName);
		if (indent > 0 && !elementHasClassName) dom.classList.add(indentClassName);
		else if (indent < 1 && elementHasClassName) dom.classList.remove(indentClassName);
	}
	if (indent === 0) {
		dom.style.setProperty("padding-inline-start", "");
		return;
	}
	const indentationBaseValue = getComputedStyle(activeEditor$1._rootElement || dom).getPropertyValue("--lexical-indent-base-value") || DEFAULT_INDENT_VALUE;
	dom.style.setProperty("padding-inline-start", `calc(${indent} * ${indentationBaseValue})`);
}
function setElementFormat(dom, format) {
	const domStyle = dom.style;
	if (format === 0) setTextAlign(domStyle, "");
	else if (format === IS_ALIGN_LEFT) setTextAlign(domStyle, "left");
	else if (format === IS_ALIGN_CENTER) setTextAlign(domStyle, "center");
	else if (format === IS_ALIGN_RIGHT) setTextAlign(domStyle, "right");
	else if (format === IS_ALIGN_JUSTIFY) setTextAlign(domStyle, "justify");
	else if (format === IS_ALIGN_START) setTextAlign(domStyle, "start");
	else if (format === IS_ALIGN_END) setTextAlign(domStyle, "end");
}
function $getReconciledDirection(node) {
	const direction = node.__dir;
	if (direction !== null) return direction;
	if ($isRootNode$1(node)) return null;
	const parent = node.getParentOrThrow();
	if (!$isRootNode$1(parent) || parent.__dir !== null) return null;
	return "auto";
}
function $setElementDirection(dom, node) {
	const direction = $getReconciledDirection(node);
	if (direction !== null) dom.dir = direction;
	else dom.removeAttribute("dir");
}
function $createNode(key, slot) {
	const node = activeNextNodeMap.get(key);
	if (node === void 0) formatDevErrorMessage(`createNode: node does not exist in nodeMap`);
	const dom = activeEditorDOMRenderConfig.$createDOM(node, activeEditor$1);
	storeDOMWithKey(key, dom, activeEditor$1);
	if ($isTextNode$1(node)) dom.setAttribute("data-lexical-text", "true");
	else if ($isDecoratorNode$1(node)) dom.setAttribute("data-lexical-decorator", "true");
	if ($isElementNode$1(node)) {
		const indent = node.__indent;
		const childrenSize = node.__size;
		$setElementDirection(dom, node);
		if (indent !== 0) setElementIndent(dom, indent);
		if (childrenSize !== 0) {
			const endIndex = childrenSize - 1;
			$createChildren($createChildrenArray$1(node, activeNextNodeMap), node, 0, endIndex, activeEditorDOMRenderConfig.$getDOMSlot(node, dom, activeEditor$1));
		}
		const format = node.__format;
		if (format !== 0) setElementFormat(dom, format);
		if (!node.isInline()) $reconcileElementTerminatingLineBreak(null, node, dom);
	} else {
		const text = node.getTextContent();
		if ($isDecoratorNode$1(node)) {
			const decorator = node.decorate(activeEditor$1, activeEditorConfig);
			if (decorator !== null) reconcileDecorator(key, decorator);
			dom.contentEditable = "false";
		}
		subTreeTextContent += text;
	}
	if (slot !== null) slot.insertChild(dom);
	activeEditorDOMRenderConfig.$decorateDOM(node, null, dom, activeEditor$1);
	Object.freeze(node);
	setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, node, "created");
	return dom;
}
function $createChildren(children, element, _startIndex, endIndex, slot) {
	const previousSubTreeTextContent = subTreeTextContent;
	subTreeTextContent = "";
	let startIndex = _startIndex;
	for (; startIndex <= endIndex; ++startIndex) {
		$createNode(children[startIndex], slot);
		const node = activeNextNodeMap.get(children[startIndex]);
		if (node !== null && $isTextNode$1(node)) {
			if (subTreeTextFormat === null) {
				subTreeTextFormat = node.getFormat();
				subTreeTextStyle = node.getStyle();
			}
		} else if ($isElementNode$1(node) && startIndex < endIndex && !node.isInline()) subTreeTextContent += DOUBLE_LINE_BREAK;
	}
	const dom = slot.element;
	dom.__lexicalTextContent = subTreeTextContent;
	subTreeTextContent = previousSubTreeTextContent + subTreeTextContent;
}
function isLastChildLineBreakOrDecorator(element, nodeMap) {
	if (element) {
		const lastKey = element.__last;
		if (lastKey) {
			const node = nodeMap.get(lastKey);
			if (node) return $isLineBreakNode$1(node) ? "line-break" : $isDecoratorNode$1(node) && node.isInline() ? "decorator" : null;
		}
		return "empty";
	}
	return null;
}
function $reconcileElementTerminatingLineBreak(prevElement, nextElement, dom) {
	const prevLineBreak = isLastChildLineBreakOrDecorator(prevElement, activePrevNodeMap);
	const nextLineBreak = isLastChildLineBreakOrDecorator(nextElement, activeNextNodeMap);
	if (prevLineBreak !== nextLineBreak) activeEditorDOMRenderConfig.$getDOMSlot(nextElement, dom, activeEditor$1).setManagedLineBreak(nextLineBreak);
}
function reconcileTextFormat(element) {
	if (subTreeTextFormat != null && subTreeTextFormat !== element.__textFormat && !activeEditorStateReadOnly) element.setTextFormat(subTreeTextFormat);
}
function reconcileTextStyle(element) {
	if (subTreeTextStyle != null && subTreeTextStyle !== element.__textStyle && !activeEditorStateReadOnly) element.setTextStyle(subTreeTextStyle);
}
function $reconcileChildrenWithDirection(prevElement, nextElement, dom) {
	subTreeTextFormat = null;
	subTreeTextStyle = null;
	$reconcileChildren(prevElement, nextElement, activeEditorDOMRenderConfig.$getDOMSlot(nextElement, dom, activeEditor$1));
	reconcileTextFormat(nextElement);
	reconcileTextStyle(nextElement);
}
function $reconcileChildren(prevElement, nextElement, slot) {
	const previousSubTreeTextContent = subTreeTextContent;
	const prevChildrenSize = prevElement.__size;
	const nextChildrenSize = nextElement.__size;
	subTreeTextContent = "";
	const dom = slot.element;
	if (prevChildrenSize === 1 && nextChildrenSize === 1) {
		const prevFirstChildKey = prevElement.__first;
		const nextFirstChildKey = nextElement.__first;
		if (prevFirstChildKey === nextFirstChildKey) $reconcileNode(prevFirstChildKey, dom);
		else {
			const lastDOM = getPrevElementByKeyOrThrow(prevFirstChildKey);
			const replacementDOM = $createNode(nextFirstChildKey, null);
			try {
				dom.replaceChild(replacementDOM, lastDOM);
			} catch (error) {
				if (typeof error === "object" && error != null) {
					const msg = `${error.toString()} Parent: ${dom.tagName}, new child: {tag: ${replacementDOM.tagName} key: ${nextFirstChildKey}}, old child: {tag: ${lastDOM.tagName}, key: ${prevFirstChildKey}}.`;
					throw new Error(msg);
				} else throw error;
			}
			$destroyNode(prevFirstChildKey, null);
		}
		const nextChildNode = activeNextNodeMap.get(nextFirstChildKey);
		if ($isTextNode$1(nextChildNode)) {
			if (subTreeTextFormat === null) {
				subTreeTextFormat = nextChildNode.getFormat();
				subTreeTextStyle = nextChildNode.getStyle();
			}
		}
	} else {
		const prevChildren = $createChildrenArray$1(prevElement, activePrevNodeMap);
		const nextChildren = $createChildrenArray$1(nextElement, activeNextNodeMap);
		if (!(prevChildren.length === prevChildrenSize)) formatDevErrorMessage(`$reconcileChildren: prevChildren.length !== prevChildrenSize`);
		if (!(nextChildren.length === nextChildrenSize)) formatDevErrorMessage(`$reconcileChildren: nextChildren.length !== nextChildrenSize`);
		if (prevChildrenSize === 0) {
			if (nextChildrenSize !== 0) $createChildren(nextChildren, nextElement, 0, nextChildrenSize - 1, slot);
		} else if (nextChildrenSize === 0) {
			if (prevChildrenSize !== 0) {
				const canUseFastPath = slot.after == null && slot.before == null && slot.element.__lexicalLineBreak == null;
				$destroyChildren(prevChildren, 0, prevChildrenSize - 1, canUseFastPath ? null : dom);
				if (canUseFastPath) dom.textContent = "";
			}
		} else $reconcileNodeChildren(nextElement, prevChildren, nextChildren, prevChildrenSize, nextChildrenSize, slot);
	}
	dom.__lexicalTextContent = subTreeTextContent;
	subTreeTextContent = previousSubTreeTextContent + subTreeTextContent;
}
function $reconcileNode(key, parentDOM) {
	const prevNode = activePrevNodeMap.get(key);
	let nextNode = activeNextNodeMap.get(key);
	if (prevNode === void 0 || nextNode === void 0) formatDevErrorMessage(`reconcileNode: prevNode or nextNode does not exist in nodeMap`);
	const isDirty = treatAllNodesAsDirty || activeDirtyLeaves.has(key) || activeDirtyElements.has(key);
	const dom = getElementByKeyOrThrow(activeEditor$1, key);
	if (prevNode === nextNode && !isDirty) {
		let text;
		if ($isElementNode$1(prevNode)) {
			const previousSubTreeTextContent = dom.__lexicalTextContent;
			if (typeof previousSubTreeTextContent === "string") text = previousSubTreeTextContent;
			else {
				text = prevNode.getTextContent();
				dom.__lexicalTextContent = text;
			}
		} else text = prevNode.getTextContent();
		subTreeTextContent += text;
		return dom;
	}
	if (prevNode !== nextNode && isDirty) setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, nextNode, "updated");
	if (activeEditorDOMRenderConfig.$updateDOM(nextNode, prevNode, dom, activeEditor$1)) {
		const replacementDOM = $createNode(key, null);
		if (parentDOM === null) formatDevErrorMessage(`reconcileNode: parentDOM is null`);
		parentDOM.replaceChild(replacementDOM, dom);
		$destroyNode(key, null);
		return replacementDOM;
	}
	if ($isElementNode$1(prevNode)) {
		if (!$isElementNode$1(nextNode)) formatDevErrorMessage(`Node with key ${key} changed from ElementNode to !ElementNode`);
		const nextIndent = nextNode.__indent;
		if (treatAllNodesAsDirty || nextIndent !== prevNode.__indent) setElementIndent(dom, nextIndent);
		const nextFormat = nextNode.__format;
		if (treatAllNodesAsDirty || nextFormat !== prevNode.__format) setElementFormat(dom, nextFormat);
		if (isDirty) {
			$reconcileChildrenWithDirection(prevNode, nextNode, dom);
			if (!$isRootNode$1(nextNode) && !nextNode.isInline()) $reconcileElementTerminatingLineBreak(prevNode, nextNode, dom);
		} else {
			const previousSubTreeTextContent = dom.__lexicalTextContent;
			let text;
			if (typeof previousSubTreeTextContent === "string") text = previousSubTreeTextContent;
			else {
				text = prevNode.getTextContent();
				dom.__lexicalTextContent = text;
			}
			subTreeTextContent += text;
		}
		if (treatAllNodesAsDirty || nextNode.__dir !== prevNode.__dir) {
			$setElementDirection(dom, nextNode);
			if ($isRootNode$1(nextNode) && !treatAllNodesAsDirty) {
				for (const child of nextNode.getChildren()) if ($isElementNode$1(child)) $setElementDirection(getElementByKeyOrThrow(activeEditor$1, child.getKey()), child);
			}
		}
	} else {
		const text = nextNode.getTextContent();
		if ($isDecoratorNode$1(nextNode)) {
			const decorator = nextNode.decorate(activeEditor$1, activeEditorConfig);
			if (decorator !== null) reconcileDecorator(key, decorator);
		}
		subTreeTextContent += text;
	}
	if (!activeEditorStateReadOnly && $isRootNode$1(nextNode) && nextNode.__cachedText !== subTreeTextContent) {
		const nextRootNode = nextNode.getWritable();
		nextRootNode.__cachedText = subTreeTextContent;
		nextNode = nextRootNode;
	}
	activeEditorDOMRenderConfig.$decorateDOM(nextNode, prevNode, dom, activeEditor$1);
	Object.freeze(nextNode);
	return dom;
}
function reconcileDecorator(key, decorator) {
	let pendingDecorators = activeEditor$1._pendingDecorators;
	const currentDecorators = activeEditor$1._decorators;
	if (pendingDecorators === null) {
		if (currentDecorators[key] === decorator) return;
		pendingDecorators = cloneDecorators(activeEditor$1);
	}
	pendingDecorators[key] = decorator;
}
function getNextSibling(element) {
	let nextSibling = element.nextSibling;
	if (nextSibling !== null && nextSibling === activeEditor$1._blockCursorElement) nextSibling = nextSibling.nextSibling;
	return nextSibling;
}
function childrenSet(children, start) {
	const s = /* @__PURE__ */ new Set();
	for (let i = start; i < children.length; i++) s.add(children[i]);
	return s;
}
function $reconcileNodeChildren(nextElement, prevChildren, nextChildren, prevChildrenLength, nextChildrenLength, slot) {
	const prevEndIndex = prevChildrenLength - 1;
	const nextEndIndex = nextChildrenLength - 1;
	let prevChildrenSet;
	let nextChildrenSet;
	let siblingDOM = slot.getFirstChild();
	let prevIndex = 0;
	let nextIndex = 0;
	while (prevIndex <= prevEndIndex && nextIndex <= nextEndIndex) {
		const prevKey = prevChildren[prevIndex];
		const nextKey = nextChildren[nextIndex];
		if (prevKey === nextKey) {
			siblingDOM = getNextSibling($reconcileNode(nextKey, slot.element));
			prevIndex++;
			nextIndex++;
		} else {
			if (nextChildrenSet === void 0) nextChildrenSet = childrenSet(nextChildren, nextIndex);
			if (prevChildrenSet === void 0) prevChildrenSet = childrenSet(prevChildren, prevIndex);
			else if (!prevChildrenSet.has(prevKey)) {
				prevIndex++;
				continue;
			}
			if (!nextChildrenSet.has(prevKey)) {
				siblingDOM = getNextSibling(getPrevElementByKeyOrThrow(prevKey));
				$destroyNode(prevKey, slot.element);
				prevIndex++;
				prevChildrenSet.delete(prevKey);
				continue;
			}
			if (!prevChildrenSet.has(nextKey)) {
				$createNode(nextKey, slot.withBefore(siblingDOM));
				nextIndex++;
			} else {
				const childDOM = getElementByKeyOrThrow(activeEditor$1, nextKey);
				if (childDOM !== siblingDOM) slot.withBefore(siblingDOM).insertChild(childDOM);
				siblingDOM = getNextSibling($reconcileNode(nextKey, slot.element));
				prevIndex++;
				nextIndex++;
			}
		}
		const node = activeNextNodeMap.get(nextKey);
		if (node !== null && $isTextNode$1(node)) {
			if (subTreeTextFormat === null) {
				subTreeTextFormat = node.getFormat();
				subTreeTextStyle = node.getStyle();
			}
		} else if ($isElementNode$1(node) && nextIndex <= nextEndIndex && !node.isInline()) subTreeTextContent += DOUBLE_LINE_BREAK;
	}
	const appendNewChildren = prevIndex > prevEndIndex;
	const removeOldChildren = nextIndex > nextEndIndex;
	if (appendNewChildren && !removeOldChildren) {
		const previousNode = nextChildren[nextEndIndex + 1];
		const insertDOM = previousNode === void 0 ? null : activeEditor$1.getElementByKey(previousNode);
		$createChildren(nextChildren, nextElement, nextIndex, nextEndIndex, slot.withBefore(insertDOM));
	} else if (removeOldChildren && !appendNewChildren) $destroyChildren(prevChildren, prevIndex, prevEndIndex, slot.element);
}
function $reconcileRoot(prevEditorState, nextEditorState, editor, dirtyType, dirtyElements, dirtyLeaves) {
	subTreeTextContent = "";
	treatAllNodesAsDirty = dirtyType === FULL_RECONCILE;
	activeEditor$1 = editor;
	activeEditorConfig = editor._config;
	activeEditorDOMRenderConfig = editor._config.dom || DEFAULT_EDITOR_DOM_CONFIG$1;
	activeEditorNodes = editor._nodes;
	activeMutationListeners = activeEditor$1._listeners.mutation;
	activeDirtyElements = dirtyElements;
	activeDirtyLeaves = dirtyLeaves;
	activePrevNodeMap = prevEditorState._nodeMap;
	activeNextNodeMap = nextEditorState._nodeMap;
	activeEditorStateReadOnly = nextEditorState._readOnly;
	activePrevKeyToDOMMap = new Map(editor._keyToDOMMap);
	const currentMutatedNodes = /* @__PURE__ */ new Map();
	mutatedNodes = currentMutatedNodes;
	$reconcileNode("root", null);
	activeEditor$1 = void 0;
	activeEditorNodes = void 0;
	activeDirtyElements = void 0;
	activeDirtyLeaves = void 0;
	activePrevNodeMap = void 0;
	activeNextNodeMap = void 0;
	activeEditorConfig = void 0;
	activePrevKeyToDOMMap = void 0;
	mutatedNodes = void 0;
	activeEditorDOMRenderConfig = DEFAULT_EDITOR_DOM_CONFIG$1;
	return currentMutatedNodes;
}
function storeDOMWithKey(key, dom, editor) {
	const keyToDOMMap = editor._keyToDOMMap;
	setNodeKeyOnDOMNode(dom, editor, key);
	keyToDOMMap.set(key, dom);
}
function getPrevElementByKeyOrThrow(key) {
	const element = activePrevKeyToDOMMap.get(key);
	if (element === void 0) formatDevErrorMessage(`Reconciliation: could not find DOM element for node key ${key}`);
	return element;
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
/**
* Crete a command that can be used with `editor.dispatchCommand` and
* `editor.registerCommand`. Commands are used by unique reference, not by
* name.
*
* @param type A string to identify the command, very helpful for debugging
* @returns A new LexicalCommand
*
* @__NO_SIDE_EFFECTS__
*/
function createCommand$1(type) {
	return { type };
}
const SELECTION_CHANGE_COMMAND$1 = createCommand$1("SELECTION_CHANGE_COMMAND");
const SELECTION_INSERT_CLIPBOARD_NODES_COMMAND$1 = createCommand$1("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND");
const CLICK_COMMAND$1 = createCommand$1("CLICK_COMMAND");
const BEFORE_INPUT_COMMAND$1 = createCommand$1("BEFORE_INPUT_COMMAND");
const INPUT_COMMAND$1 = createCommand$1("INPUT_COMMAND");
const COMPOSITION_START_COMMAND$1 = createCommand$1("COMPOSITION_START_COMMAND");
const COMPOSITION_END_COMMAND$1 = createCommand$1("COMPOSITION_END_COMMAND");
/**
* Dispatched to delete a character, the payload will be `true` if the deletion
* is backwards (backspace or delete on macOS) and `false` if forwards
* (delete or Fn+Delete on macOS).
*/
const DELETE_CHARACTER_COMMAND$1 = createCommand$1("DELETE_CHARACTER_COMMAND");
/**
* Dispatched to insert a line break. With a false payload the
* cursor moves to the new line (Shift+Enter), with a true payload the cursor
* does not move (Ctrl+O on macOS).
*/
const INSERT_LINE_BREAK_COMMAND$1 = createCommand$1("INSERT_LINE_BREAK_COMMAND");
const INSERT_PARAGRAPH_COMMAND$1 = createCommand$1("INSERT_PARAGRAPH_COMMAND");
const CONTROLLED_TEXT_INSERTION_COMMAND$1 = createCommand$1("CONTROLLED_TEXT_INSERTION_COMMAND");
const PASTE_COMMAND$1 = createCommand$1("PASTE_COMMAND");
const REMOVE_TEXT_COMMAND$1 = createCommand$1("REMOVE_TEXT_COMMAND");
/**
* Dispatched to delete a word, the payload will be `true` if the deletion is
* backwards (Ctrl+Backspace or Opt+Delete on macOS), and `false` if
* forwards (Ctrl+Delete or Fn+Opt+Delete on macOS).
*/
const DELETE_WORD_COMMAND$1 = createCommand$1("DELETE_WORD_COMMAND");
/**
* Dispatched to delete a line, the payload will be `true` if the deletion is
* backwards (Cmd+Delete on macOS), and `false` if forwards
* (Fn+Cmd+Delete on macOS).
*/
const DELETE_LINE_COMMAND$1 = createCommand$1("DELETE_LINE_COMMAND");
/**
* Dispatched to format the selected text.
*/
const FORMAT_TEXT_COMMAND$1 = createCommand$1("FORMAT_TEXT_COMMAND");
/**
* Dispatched on undo (Cmd+Z on macOS, Ctrl+Z elsewhere).
*/
const UNDO_COMMAND$1 = createCommand$1("UNDO_COMMAND");
/**
* Dispatched on redo (Shift+Cmd+Z on macOS, Shift+Ctrl+Z or Ctrl+Y elsewhere).
*/
const REDO_COMMAND$1 = createCommand$1("REDO_COMMAND");
/**
* Dispatched when any key is pressed.
*/
const KEY_DOWN_COMMAND$1 = createCommand$1("KEYDOWN_COMMAND");
/**
* Dispatched when the `'ArrowRight'` key is pressed.
* The shift modifier key may also be down.
*/
const KEY_ARROW_RIGHT_COMMAND$1 = createCommand$1("KEY_ARROW_RIGHT_COMMAND");
/**
* Dispatched when the move to end keyboard shortcut is pressed,
* (Cmd+Right on macOS; Ctrl+Right elsewhere).
*/
const MOVE_TO_END$1 = createCommand$1("MOVE_TO_END");
/**
* Dispatched when the `'ArrowLeft'` key is pressed.
* The shift modifier key may also be down.
*/
const KEY_ARROW_LEFT_COMMAND$1 = createCommand$1("KEY_ARROW_LEFT_COMMAND");
/**
* Dispatched when the move to start keyboard shortcut is pressed,
* (Cmd+Left on macOS; Ctrl+Left elsewhere).
*/
const MOVE_TO_START$1 = createCommand$1("MOVE_TO_START");
/**
* Dispatched when the `'ArrowUp'` key is pressed.
* The shift and/or alt (option) modifier keys may also be down.
*/
const KEY_ARROW_UP_COMMAND$1 = createCommand$1("KEY_ARROW_UP_COMMAND");
/**
* Dispatched when the `'ArrowDown'` key is pressed.
* The shift and/or alt (option) modifier keys may also be down.
*/
const KEY_ARROW_DOWN_COMMAND$1 = createCommand$1("KEY_ARROW_DOWN_COMMAND");
/**
* Dispatched when the enter key is pressed, may also be called with a null
* payload when the intent is to insert a newline. The shift modifier key
* must be down, any other modifier keys may also be down.
*/
const KEY_ENTER_COMMAND$1 = createCommand$1("KEY_ENTER_COMMAND");
/**
* Dispatched whenever the space (`' '`) key is pressed, any modifier
* keys may be down.
*/
const KEY_SPACE_COMMAND$1 = createCommand$1("KEY_SPACE_COMMAND");
/**
* Dispatched whenever the `'Backspace'` key is pressed, the shift
* modifier key may be down.
*/
const KEY_BACKSPACE_COMMAND$1 = createCommand$1("KEY_BACKSPACE_COMMAND");
/**
* Dispatched whenever the `'Escape'` key is pressed, any modifier
* keys may be down.
*/
const KEY_ESCAPE_COMMAND$1 = createCommand$1("KEY_ESCAPE_COMMAND");
/**
* Dispatched whenever the `'Delete'` key is pressed (Fn+Delete on macOS).
*/
const KEY_DELETE_COMMAND$1 = createCommand$1("KEY_DELETE_COMMAND");
/**
* Dispatched whenever the `'Tab'` key is pressed. The shift modifier key
* may be down.
*/
const KEY_TAB_COMMAND$1 = createCommand$1("KEY_TAB_COMMAND");
const INSERT_TAB_COMMAND$1 = createCommand$1("INSERT_TAB_COMMAND");
const INDENT_CONTENT_COMMAND$1 = createCommand$1("INDENT_CONTENT_COMMAND");
const OUTDENT_CONTENT_COMMAND$1 = createCommand$1("OUTDENT_CONTENT_COMMAND");
const DROP_COMMAND$1 = createCommand$1("DROP_COMMAND");
const FORMAT_ELEMENT_COMMAND$1 = createCommand$1("FORMAT_ELEMENT_COMMAND");
const DRAGSTART_COMMAND$1 = createCommand$1("DRAGSTART_COMMAND");
const DRAGOVER_COMMAND$1 = createCommand$1("DRAGOVER_COMMAND");
const DRAGEND_COMMAND$1 = createCommand$1("DRAGEND_COMMAND");
/**
* Dispatched on a copy event, either via the clipboard or a KeyboardEvent
* (Cmd+C on macOS, Ctrl+C elsewhere).
*/
const COPY_COMMAND$1 = createCommand$1("COPY_COMMAND");
/**
* Dispatched on a cut event, either via the clipboard or a KeyboardEvent
* (Cmd+X on macOS, Ctrl+X elsewhere).
*/
const CUT_COMMAND$1 = createCommand$1("CUT_COMMAND");
/**
* Dispatched on the select all keyboard shortcut
* (Cmd+A on macOS, Ctrl+A elsehwere).
*/
const SELECT_ALL_COMMAND$1 = createCommand$1("SELECT_ALL_COMMAND");
const CLEAR_EDITOR_COMMAND$1 = createCommand$1("CLEAR_EDITOR_COMMAND");
const CLEAR_HISTORY_COMMAND$1 = createCommand$1("CLEAR_HISTORY_COMMAND");
const CAN_REDO_COMMAND$1 = createCommand$1("CAN_REDO_COMMAND");
const CAN_UNDO_COMMAND$1 = createCommand$1("CAN_UNDO_COMMAND");
const FOCUS_COMMAND$1 = createCommand$1("FOCUS_COMMAND");
const BLUR_COMMAND$1 = createCommand$1("BLUR_COMMAND");
/**
* @deprecated in v0.31.0, use KEY_DOWN_COMMAND and check for modifiers
* directly.
*
* Dispatched after any KeyboardEvent when modifiers are pressed
*/
const KEY_MODIFIER_COMMAND$1 = createCommand$1("KEY_MODIFIER_COMMAND");
const PASS_THROUGH_COMMAND = Object.freeze({});
const ANDROID_COMPOSITION_LATENCY = 30;
const rootElementEvents = [
	["keydown", onKeyDown],
	["pointerdown", onPointerDown],
	["compositionstart", onCompositionStart],
	["compositionend", onCompositionEnd],
	["input", onInput],
	["click", onClick],
	["cut", PASS_THROUGH_COMMAND],
	["copy", PASS_THROUGH_COMMAND],
	["dragstart", PASS_THROUGH_COMMAND],
	["dragover", PASS_THROUGH_COMMAND],
	["dragend", PASS_THROUGH_COMMAND],
	["paste", PASS_THROUGH_COMMAND],
	["focus", PASS_THROUGH_COMMAND],
	["blur", PASS_THROUGH_COMMAND],
	["drop", PASS_THROUGH_COMMAND]
];
if (CAN_USE_BEFORE_INPUT) rootElementEvents.push(["beforeinput", (event, editor) => onBeforeInput(event, editor)]);
let lastKeyDownTimeStamp = 0;
let lastKeyCode = null;
let lastBeforeInputInsertTextTimeStamp = 0;
let unprocessedBeforeInputData = null;
const rootElementToDocument = /* @__PURE__ */ new WeakMap();
const rootElementsRegistered = /* @__PURE__ */ new WeakMap();
let isSelectionChangeFromDOMUpdate = false;
let isSelectionChangeFromMouseDown = false;
let isInsertLineBreak = false;
let isFirefoxEndingComposition = false;
let isSafariEndingComposition = false;
let safariEndCompositionEventData = "";
let postDeleteSelectionToRestore = null;
let collapsedSelectionFormat = [
	0,
	"",
	0,
	"root",
	0
];
function $shouldPreventDefaultAndInsertText(selection, domTargetRange, text, timeStamp, isBeforeInput) {
	const anchor = selection.anchor;
	const focus = selection.focus;
	const anchorNode = anchor.getNode();
	const editor = getActiveEditor();
	const domSelection = getDOMSelection$1(getWindow(editor));
	const domAnchorNode = domSelection !== null ? domSelection.anchorNode : null;
	const anchorKey = anchor.key;
	const backingAnchorElement = editor.getElementByKey(anchorKey);
	const textLength = text.length;
	return anchorKey !== focus.key || !$isTextNode$1(anchorNode) || (!isBeforeInput && (!CAN_USE_BEFORE_INPUT || lastBeforeInputInsertTextTimeStamp < timeStamp + 50) || anchorNode.isDirty() && textLength < 2 || doesContainSurrogatePair(text)) && anchor.offset !== focus.offset && !anchorNode.isComposing() || $isTokenOrSegmented$1(anchorNode) || anchorNode.isDirty() && textLength > 1 || (isBeforeInput || !CAN_USE_BEFORE_INPUT) && backingAnchorElement !== null && !anchorNode.isComposing() && domAnchorNode !== getDOMTextNode$1(backingAnchorElement) || domSelection !== null && domTargetRange !== null && (!domTargetRange.collapsed || domTargetRange.startContainer !== domSelection.anchorNode || domTargetRange.startOffset !== domSelection.anchorOffset) || !anchorNode.isComposing() && (anchorNode.getFormat() !== selection.format || anchorNode.getStyle() !== selection.style) || $shouldInsertTextAfterOrBeforeTextNode(selection, anchorNode);
}
function shouldSkipSelectionChange(domNode, offset) {
	return isDOMTextNode$1(domNode) && domNode.nodeValue !== null && offset !== 0 && offset !== domNode.nodeValue.length;
}
function onSelectionChange(domSelection, editor, isActive) {
	const { anchorNode: anchorDOM, anchorOffset, focusNode: focusDOM, focusOffset } = domSelection;
	if (isSelectionChangeFromDOMUpdate) {
		isSelectionChangeFromDOMUpdate = false;
		if (shouldSkipSelectionChange(anchorDOM, anchorOffset) && shouldSkipSelectionChange(focusDOM, focusOffset) && !postDeleteSelectionToRestore) return;
	}
	updateEditorSync(editor, () => {
		if (!isActive) {
			$setSelection$1(null);
			return;
		}
		if (!isSelectionWithinEditor$1(editor, anchorDOM, focusDOM)) return;
		let selection = $getSelection$1();
		if (postDeleteSelectionToRestore && $isRangeSelection$1(selection) && selection.isCollapsed()) {
			const curAnchor = selection.anchor;
			const prevAnchor = postDeleteSelectionToRestore.anchor;
			if (curAnchor.key === prevAnchor.key && curAnchor.offset === prevAnchor.offset + 1 || curAnchor.offset === 1 && prevAnchor.getNode().is(curAnchor.getNode().getPreviousSibling())) {
				selection = postDeleteSelectionToRestore.clone();
				$setSelection$1(selection);
			}
		}
		postDeleteSelectionToRestore = null;
		if ($isRangeSelection$1(selection)) {
			const anchor = selection.anchor;
			const anchorNode = anchor.getNode();
			if (selection.isCollapsed()) {
				if (domSelection.type === "Range" && domSelection.anchorNode === domSelection.focusNode) selection.dirty = true;
				const windowEvent = getWindow(editor).event;
				const currentTimeStamp = windowEvent ? windowEvent.timeStamp : performance.now();
				const [lastFormat, lastStyle, lastOffset, lastKey, timeStamp] = collapsedSelectionFormat;
				const root = $getRoot$1();
				const isRootTextContentEmpty = editor.isComposing() === false && root.getTextContent() === "";
				if (currentTimeStamp < timeStamp + 200 && anchor.offset === lastOffset && anchor.key === lastKey) $updateSelectionFormatStyle(selection, lastFormat, lastStyle);
				else if (anchor.type === "text") {
					if (!$isTextNode$1(anchorNode)) formatDevErrorMessage(`Point.getNode() must return TextNode when type is text`);
					$updateSelectionFormatStyleFromTextNode(selection, anchorNode);
				} else if (anchor.type === "element" && !isRootTextContentEmpty) {
					if (!$isElementNode$1(anchorNode)) formatDevErrorMessage(`Point.getNode() must return ElementNode when type is element`);
					const lastNode = anchor.getNode();
					if (lastNode.isEmpty()) $updateSelectionFormatStyleFromElementNode(selection, lastNode);
					else $updateSelectionFormatStyle(selection, selection.format, "");
				}
			} else {
				const anchorKey = anchor.key;
				const focusKey = selection.focus.key;
				const nodes = selection.getNodes();
				const nodesLength = nodes.length;
				const isBackward = selection.isBackward();
				const startOffset = isBackward ? focusOffset : anchorOffset;
				const endOffset = isBackward ? anchorOffset : focusOffset;
				const startKey = isBackward ? focusKey : anchorKey;
				const endKey = isBackward ? anchorKey : focusKey;
				let combinedFormat = IS_ALL_FORMATTING$1;
				let hasTextNodes = false;
				for (let i = 0; i < nodesLength; i++) {
					const node = nodes[i];
					const textContentSize = node.getTextContentSize();
					if ($isTextNode$1(node) && textContentSize !== 0 && !(i === 0 && node.__key === startKey && startOffset === textContentSize || i === nodesLength - 1 && node.__key === endKey && endOffset === 0)) {
						hasTextNodes = true;
						combinedFormat &= node.getFormat();
						if (combinedFormat === 0) break;
					}
				}
				selection.format = hasTextNodes ? combinedFormat : 0;
			}
		}
		dispatchCommand(editor, SELECTION_CHANGE_COMMAND$1, void 0);
	});
}
function $updateSelectionFormatStyle(selection, format, style) {
	if (selection.format !== format || selection.style !== style) {
		selection.format = format;
		selection.style = style;
		selection.dirty = true;
	}
}
function $updateSelectionFormatStyleFromTextNode(selection, node) {
	$updateSelectionFormatStyle(selection, node.getFormat(), node.getStyle());
}
function $updateSelectionFormatStyleFromElementNode(selection, node) {
	$updateSelectionFormatStyle(selection, node.getTextFormat(), node.getTextStyle());
}
function onClick(event, editor) {
	updateEditorSync(editor, () => {
		const selection = $getSelection$1();
		const domSelection = getDOMSelection$1(getWindow(editor));
		const lastSelection = $getPreviousSelection$1();
		if (domSelection) {
			if ($isRangeSelection$1(selection)) {
				const anchor = selection.anchor;
				const anchorNode = anchor.getNode();
				if (anchor.type === "element" && anchor.offset === 0 && selection.isCollapsed() && !$isRootNode$1(anchorNode) && $getRoot$1().getChildrenSize() === 1 && anchorNode.getTopLevelElementOrThrow().isEmpty() && lastSelection !== null && selection.is(lastSelection)) {
					domSelection.removeAllRanges();
					selection.dirty = true;
				} else if (event.detail === 3 && !selection.isCollapsed()) {
					if (anchorNode !== selection.focus.getNode()) {
						const parentNode = $findMatchingParent$1(anchorNode, (node) => $isElementNode$1(node) && !node.isInline());
						if ($isElementNode$1(parentNode)) parentNode.select(0);
					}
				}
			} else if (event.pointerType === "touch" || event.pointerType === "pen") {
				const domAnchorNode = domSelection.anchorNode;
				if (isHTMLElement$1(domAnchorNode) || isDOMTextNode$1(domAnchorNode)) $setSelection$1($internalCreateRangeSelection(lastSelection, domSelection, editor, event));
			}
		}
		dispatchCommand(editor, CLICK_COMMAND$1, event);
	});
}
function onPointerDown(event, editor) {
	const target = event.target;
	const pointerType = event.pointerType;
	if (isDOMNode$1(target) && pointerType !== "touch" && pointerType !== "pen" && event.button === 0) updateEditorSync(editor, () => {
		if (!$isSelectionCapturedInDecorator(target)) isSelectionChangeFromMouseDown = true;
	});
}
function getTargetRange(event) {
	if (!event.getTargetRanges) return null;
	const targetRanges = event.getTargetRanges();
	if (targetRanges.length === 0) return null;
	return targetRanges[0];
}
function $canRemoveText(anchorNode, focusNode) {
	return anchorNode !== focusNode || $isElementNode$1(anchorNode) || $isElementNode$1(focusNode) || !$isTokenOrTab$1(anchorNode) || !$isTokenOrTab$1(focusNode);
}
function isPossiblyAndroidKeyPress(timeStamp) {
	return lastKeyCode === "MediaLast" && timeStamp < lastKeyDownTimeStamp + ANDROID_COMPOSITION_LATENCY;
}
function registerDefaultCommandHandlers(editor) {
	editor.registerCommand(BEFORE_INPUT_COMMAND$1, $handleBeforeInput, 0);
	editor.registerCommand(INPUT_COMMAND$1, $handleInput, 0);
	editor.registerCommand(COMPOSITION_START_COMMAND$1, $handleCompositionStart, 0);
	editor.registerCommand(COMPOSITION_END_COMMAND$1, $handleCompositionEnd, 0);
	editor.registerCommand(KEY_DOWN_COMMAND$1, $handleKeyDown, 0);
}
function onBeforeInput(event, editor) {
	const inputType = event.inputType;
	if (inputType === "deleteCompositionText" || IS_FIREFOX && isFirefoxClipboardEvents(editor)) return;
	else if (inputType === "insertCompositionText") return;
	dispatchCommand(editor, BEFORE_INPUT_COMMAND$1, event);
}
function $handleBeforeInput(event) {
	const inputType = event.inputType;
	const targetRange = getTargetRange(event);
	const editor = getActiveEditor();
	const selection = $getSelection$1();
	if (inputType === "deleteContentBackward") {
		if (selection === null) {
			const prevSelection = $getPreviousSelection$1();
			if (!$isRangeSelection$1(prevSelection)) return true;
			$setSelection$1(prevSelection.clone());
		}
		if ($isRangeSelection$1(selection)) {
			const isSelectionAnchorSameAsFocus = selection.anchor.key === selection.focus.key;
			if (isPossiblyAndroidKeyPress(event.timeStamp) && editor.isComposing() && isSelectionAnchorSameAsFocus) {
				$setCompositionKey$1(null);
				lastKeyDownTimeStamp = 0;
				setTimeout(() => {
					updateEditorSync(editor, () => {
						$setCompositionKey$1(null);
					});
				}, ANDROID_COMPOSITION_LATENCY);
				if ($isRangeSelection$1(selection)) {
					const anchorNode = selection.anchor.getNode();
					anchorNode.markDirty();
					if (!$isTextNode$1(anchorNode)) formatDevErrorMessage(`Anchor node must be a TextNode`);
					$updateSelectionFormatStyleFromTextNode(selection, anchorNode);
				}
			} else {
				$setCompositionKey$1(null);
				event.preventDefault();
				const selectedNode = selection.anchor.getNode();
				const selectedNodeText = selectedNode.getTextContent();
				const selectedNodeCanInsertTextAfter = selectedNode.canInsertTextAfter();
				const hasSelectedAllTextInNode = selection.anchor.offset === 0 && selection.focus.offset === selectedNodeText.length;
				let shouldLetBrowserHandleDelete = IS_ANDROID_CHROME && isSelectionAnchorSameAsFocus && !hasSelectedAllTextInNode && selectedNodeCanInsertTextAfter;
				if (shouldLetBrowserHandleDelete && selection.isCollapsed()) shouldLetBrowserHandleDelete = !$isDecoratorNode$1($getAdjacentNode$1(selection.anchor, true));
				if (!shouldLetBrowserHandleDelete) {
					dispatchCommand(editor, DELETE_CHARACTER_COMMAND$1, true);
					const selectionAfterDelete = $getSelection$1();
					if (IS_ANDROID_CHROME && $isRangeSelection$1(selectionAfterDelete) && selectionAfterDelete.isCollapsed()) {
						postDeleteSelectionToRestore = selectionAfterDelete;
						setTimeout(() => postDeleteSelectionToRestore = null);
					}
				}
			}
			return true;
		}
	}
	if (!$isRangeSelection$1(selection)) return true;
	const data = event.data;
	if (unprocessedBeforeInputData !== null) $updateSelectedTextFromDOM(false, editor, unprocessedBeforeInputData);
	if ((!selection.dirty || unprocessedBeforeInputData !== null) && selection.isCollapsed() && !$isRootNode$1(selection.anchor.getNode()) && targetRange !== null) selection.applyDOMRange(targetRange);
	unprocessedBeforeInputData = null;
	const anchor = selection.anchor;
	const focus = selection.focus;
	const anchorNode = anchor.getNode();
	const focusNode = focus.getNode();
	if (inputType === "insertText" || inputType === "insertTranspose") {
		if (data === "\n") {
			event.preventDefault();
			dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND$1, false);
		} else if (data === DOUBLE_LINE_BREAK) {
			event.preventDefault();
			dispatchCommand(editor, INSERT_PARAGRAPH_COMMAND$1, void 0);
		} else if (data == null && event.dataTransfer) {
			const text = event.dataTransfer.getData("text/plain");
			event.preventDefault();
			selection.insertRawText(text);
		} else if (data != null && $shouldPreventDefaultAndInsertText(selection, targetRange, data, event.timeStamp, true)) {
			event.preventDefault();
			dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND$1, data);
		} else unprocessedBeforeInputData = data;
		lastBeforeInputInsertTextTimeStamp = event.timeStamp;
		return true;
	}
	event.preventDefault();
	switch (inputType) {
		case "insertFromYank":
		case "insertFromDrop":
		case "insertReplacementText":
			dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND$1, event);
			break;
		case "insertFromComposition":
			$setCompositionKey$1(null);
			dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND$1, event);
			break;
		case "insertLineBreak":
			$setCompositionKey$1(null);
			dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND$1, false);
			break;
		case "insertParagraph":
			$setCompositionKey$1(null);
			if (isInsertLineBreak && !IS_IOS) {
				isInsertLineBreak = false;
				dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND$1, false);
			} else dispatchCommand(editor, INSERT_PARAGRAPH_COMMAND$1, void 0);
			break;
		case "insertFromPaste":
		case "insertFromPasteAsQuotation":
			dispatchCommand(editor, PASTE_COMMAND$1, event);
			break;
		case "deleteByComposition":
			if ($canRemoveText(anchorNode, focusNode)) dispatchCommand(editor, REMOVE_TEXT_COMMAND$1, event);
			break;
		case "deleteByDrag":
			$addUpdateTag$1(SKIP_SELECTION_FOCUS_TAG$1);
			dispatchCommand(editor, REMOVE_TEXT_COMMAND$1, event);
			break;
		case "deleteByCut":
			dispatchCommand(editor, REMOVE_TEXT_COMMAND$1, event);
			break;
		case "deleteContent":
			dispatchCommand(editor, DELETE_CHARACTER_COMMAND$1, false);
			break;
		case "deleteWordBackward":
			dispatchCommand(editor, DELETE_WORD_COMMAND$1, true);
			break;
		case "deleteWordForward":
			dispatchCommand(editor, DELETE_WORD_COMMAND$1, false);
			break;
		case "deleteHardLineBackward":
		case "deleteSoftLineBackward":
			dispatchCommand(editor, DELETE_LINE_COMMAND$1, true);
			break;
		case "deleteContentForward":
		case "deleteHardLineForward":
		case "deleteSoftLineForward":
			dispatchCommand(editor, DELETE_LINE_COMMAND$1, false);
			break;
		case "formatStrikeThrough":
			dispatchCommand(editor, FORMAT_TEXT_COMMAND$1, "strikethrough");
			break;
		case "formatBold":
			dispatchCommand(editor, FORMAT_TEXT_COMMAND$1, "bold");
			break;
		case "formatItalic":
			dispatchCommand(editor, FORMAT_TEXT_COMMAND$1, "italic");
			break;
		case "formatUnderline":
			dispatchCommand(editor, FORMAT_TEXT_COMMAND$1, "underline");
			break;
		case "historyUndo":
			dispatchCommand(editor, UNDO_COMMAND$1, void 0);
			break;
		case "historyRedo": dispatchCommand(editor, REDO_COMMAND$1, void 0);
	}
	return true;
}
function onInput(event, editor) {
	event.stopPropagation();
	updateEditorSync(editor, () => {
		editor.dispatchCommand(INPUT_COMMAND$1, event);
	}, { event });
	unprocessedBeforeInputData = null;
}
function $handleInput(event) {
	if (isHTMLElement$1(event.target) && $isSelectionCapturedInDecorator(event.target)) return true;
	const editor = getActiveEditor();
	const selection = $getSelection$1();
	const data = event.data;
	const targetRange = getTargetRange(event);
	if (data != null && $isRangeSelection$1(selection) && $shouldPreventDefaultAndInsertText(selection, targetRange, data, event.timeStamp, false)) {
		if (isFirefoxEndingComposition) {
			$onCompositionEndImpl(editor, data);
			isFirefoxEndingComposition = false;
		}
		const anchorNode = selection.anchor.getNode();
		const domSelection = getDOMSelection$1(getWindow(editor));
		if (domSelection === null) return true;
		const isBackward = selection.isBackward();
		const startOffset = isBackward ? selection.anchor.offset : selection.focus.offset;
		const endOffset = isBackward ? selection.focus.offset : selection.anchor.offset;
		if (!CAN_USE_BEFORE_INPUT || selection.isCollapsed() || !$isTextNode$1(anchorNode) || domSelection.anchorNode === null || anchorNode.getTextContent().slice(0, startOffset) + data + anchorNode.getTextContent().slice(startOffset + endOffset) !== getAnchorTextFromDOM(domSelection.anchorNode)) dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND$1, data);
		const textLength = data.length;
		if (IS_FIREFOX && textLength > 1 && event.inputType === "insertCompositionText" && !editor.isComposing()) selection.anchor.offset -= textLength;
		if (IS_ANDROID_CHROME && editor.isComposing()) {
			lastKeyDownTimeStamp = 0;
			$setCompositionKey$1(null);
		}
	} else {
		$updateSelectedTextFromDOM(false, editor, data !== null ? data : void 0);
		if (isFirefoxEndingComposition) {
			$onCompositionEndImpl(editor, data || void 0);
			isFirefoxEndingComposition = false;
		}
	}
	$flushMutations();
	return true;
}
function onCompositionStart(event, editor) {
	dispatchCommand(editor, COMPOSITION_START_COMMAND$1, event);
}
function $handleCompositionStart(event) {
	const editor = getActiveEditor();
	const selection = $getSelection$1();
	if ($isRangeSelection$1(selection) && !editor.isComposing()) {
		const anchor = selection.anchor;
		const node = selection.anchor.getNode();
		$setCompositionKey$1(anchor.key);
		$addUpdateTag$1(COMPOSITION_START_TAG$1);
		if (event.timeStamp < lastKeyDownTimeStamp + ANDROID_COMPOSITION_LATENCY || anchor.type === "element" || !selection.isCollapsed() || node.getFormat() !== selection.format || $isTextNode$1(node) && node.getStyle() !== selection.style) dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND$1, COMPOSITION_START_CHAR);
	}
	return true;
}
function $handleCompositionEnd(event) {
	$onCompositionEndImpl(getActiveEditor(), event.data);
	$addUpdateTag$1(COMPOSITION_END_TAG$1);
	return true;
}
function $onCompositionEndImpl(editor, data) {
	const compositionKey = editor._compositionKey;
	$setCompositionKey$1(null);
	if (compositionKey !== null && data != null) {
		if (data === "") {
			const node = $getNodeByKey$1(compositionKey);
			const textNode = getDOMTextNode$1(editor.getElementByKey(compositionKey));
			if (textNode !== null && textNode.nodeValue !== null && $isTextNode$1(node)) {
				const domSelection = getDOMSelection$1(getWindow(editor));
				let anchorOffset = null;
				let focusOffset = null;
				if (domSelection !== null && domSelection.anchorNode === textNode) {
					anchorOffset = domSelection.anchorOffset;
					focusOffset = domSelection.focusOffset;
				}
				$updateTextNodeFromDOMContent(node, textNode.nodeValue, anchorOffset, focusOffset, true);
			}
			return;
		} else if (data[data.length - 1] === "\n") {
			const selection = $getSelection$1();
			if ($isRangeSelection$1(selection) || $isNodeSelection$1(selection)) {
				if ($isRangeSelection$1(selection)) {
					const focus = selection.focus;
					selection.anchor.set(focus.key, focus.offset, focus.type);
				}
				dispatchCommand(editor, KEY_ENTER_COMMAND$1, null);
				return;
			}
		}
	}
	$updateSelectedTextFromDOM(true, editor, data);
}
function onCompositionEnd(event, editor) {
	if (IS_FIREFOX) isFirefoxEndingComposition = true;
	else if (!IS_IOS && (IS_SAFARI || IS_APPLE_WEBKIT)) {
		isSafariEndingComposition = true;
		safariEndCompositionEventData = event.data;
	} else dispatchCommand(editor, COMPOSITION_END_COMMAND$1, event);
}
function onKeyDown(event, editor) {
	lastKeyDownTimeStamp = event.timeStamp;
	lastKeyCode = event.key;
	if (editor.isComposing()) return;
	dispatchCommand(editor, KEY_DOWN_COMMAND$1, event);
}
function $handleKeyDown(event) {
	const editor = getActiveEditor();
	if (event.key == null) return true;
	if (isSafariEndingComposition) {
		if (isBackspace(event)) {
			updateEditorSync(editor, () => {
				$onCompositionEndImpl(editor, safariEndCompositionEventData);
			});
			isSafariEndingComposition = false;
			safariEndCompositionEventData = "";
			return true;
		}
		isSafariEndingComposition = false;
		safariEndCompositionEventData = "";
	}
	if (isMoveForward(event)) dispatchCommand(editor, KEY_ARROW_RIGHT_COMMAND$1, event);
	else if (isMoveToEnd(event)) dispatchCommand(editor, MOVE_TO_END$1, event);
	else if (isMoveBackward(event)) dispatchCommand(editor, KEY_ARROW_LEFT_COMMAND$1, event);
	else if (isMoveToStart(event)) dispatchCommand(editor, MOVE_TO_START$1, event);
	else if (isMoveUp(event)) dispatchCommand(editor, KEY_ARROW_UP_COMMAND$1, event);
	else if (isMoveDown(event)) dispatchCommand(editor, KEY_ARROW_DOWN_COMMAND$1, event);
	else if (isLineBreak(event)) {
		isInsertLineBreak = true;
		dispatchCommand(editor, KEY_ENTER_COMMAND$1, event);
	} else if (isSpace(event)) dispatchCommand(editor, KEY_SPACE_COMMAND$1, event);
	else if (isOpenLineBreak(event)) {
		event.preventDefault();
		isInsertLineBreak = true;
		dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND$1, true);
	} else if (isParagraph(event)) {
		isInsertLineBreak = false;
		dispatchCommand(editor, KEY_ENTER_COMMAND$1, event);
	} else if (isDeleteBackward(event)) if (isBackspace(event)) dispatchCommand(editor, KEY_BACKSPACE_COMMAND$1, event);
	else {
		event.preventDefault();
		dispatchCommand(editor, DELETE_CHARACTER_COMMAND$1, true);
	}
	else if (isEscape(event)) dispatchCommand(editor, KEY_ESCAPE_COMMAND$1, event);
	else if (isDeleteForward(event)) if (isDelete(event)) dispatchCommand(editor, KEY_DELETE_COMMAND$1, event);
	else {
		event.preventDefault();
		dispatchCommand(editor, DELETE_CHARACTER_COMMAND$1, false);
	}
	else if (isDeleteWordBackward(event)) {
		event.preventDefault();
		dispatchCommand(editor, DELETE_WORD_COMMAND$1, true);
	} else if (isDeleteWordForward(event)) {
		event.preventDefault();
		dispatchCommand(editor, DELETE_WORD_COMMAND$1, false);
	} else if (isDeleteLineBackward(event)) {
		event.preventDefault();
		dispatchCommand(editor, DELETE_LINE_COMMAND$1, true);
	} else if (isDeleteLineForward(event)) {
		event.preventDefault();
		dispatchCommand(editor, DELETE_LINE_COMMAND$1, false);
	} else if (isBold(event)) {
		event.preventDefault();
		dispatchCommand(editor, FORMAT_TEXT_COMMAND$1, "bold");
	} else if (isUnderline(event)) {
		event.preventDefault();
		dispatchCommand(editor, FORMAT_TEXT_COMMAND$1, "underline");
	} else if (isItalic(event)) {
		event.preventDefault();
		dispatchCommand(editor, FORMAT_TEXT_COMMAND$1, "italic");
	} else if (isTab(event)) dispatchCommand(editor, KEY_TAB_COMMAND$1, event);
	else if (isUndo(event)) {
		event.preventDefault();
		dispatchCommand(editor, UNDO_COMMAND$1, void 0);
	} else if (isRedo(event)) {
		event.preventDefault();
		dispatchCommand(editor, REDO_COMMAND$1, void 0);
	} else {
		const prevSelection = editor._editorState._selection;
		if (prevSelection !== null && !$isRangeSelection$1(prevSelection)) {
			if (isCopy(event)) {
				event.preventDefault();
				dispatchCommand(editor, COPY_COMMAND$1, event);
			} else if (isCut(event)) {
				event.preventDefault();
				dispatchCommand(editor, CUT_COMMAND$1, event);
			} else if (isSelectAll(event)) {
				event.preventDefault();
				dispatchCommand(editor, SELECT_ALL_COMMAND$1, event);
			}
		} else if (isSelectAll(event)) {
			event.preventDefault();
			dispatchCommand(editor, SELECT_ALL_COMMAND$1, event);
		}
	}
	if (isModifier(event)) editor.dispatchCommand(KEY_MODIFIER_COMMAND$1, event);
	return true;
}
function getRootElementRemoveHandles(rootElement) {
	let eventHandles = rootElement.__lexicalEventHandles;
	if (eventHandles === void 0) {
		eventHandles = [];
		rootElement.__lexicalEventHandles = eventHandles;
	}
	return eventHandles;
}
const activeNestedEditorsMap = /* @__PURE__ */ new Map();
function onDocumentSelectionChange(event) {
	const domSelection = getDOMSelectionFromTarget$1(event.target);
	if (domSelection === null) return;
	const nextActiveEditor = getNearestEditorFromDOMNode$1(domSelection.anchorNode);
	if (nextActiveEditor === null) return;
	if (isSelectionChangeFromMouseDown) {
		isSelectionChangeFromMouseDown = false;
		updateEditorSync(nextActiveEditor, () => {
			const lastSelection = $getPreviousSelection$1();
			const domAnchorNode = domSelection.anchorNode;
			if (isHTMLElement$1(domAnchorNode) || isDOMTextNode$1(domAnchorNode)) $setSelection$1($internalCreateRangeSelection(lastSelection, domSelection, nextActiveEditor, event));
		});
	}
	const editors = getEditorsToPropagate(nextActiveEditor);
	const rootEditor = editors[editors.length - 1];
	const rootEditorKey = rootEditor._key;
	const activeNestedEditor = activeNestedEditorsMap.get(rootEditorKey);
	const prevActiveEditor = activeNestedEditor || rootEditor;
	if (prevActiveEditor !== nextActiveEditor) onSelectionChange(domSelection, prevActiveEditor, false);
	onSelectionChange(domSelection, nextActiveEditor, true);
	if (nextActiveEditor !== rootEditor) activeNestedEditorsMap.set(rootEditorKey, nextActiveEditor);
	else if (activeNestedEditor) activeNestedEditorsMap.delete(rootEditorKey);
}
function stopLexicalPropagation(event) {
	event._lexicalHandled = true;
}
function hasStoppedLexicalPropagation(event) {
	return event._lexicalHandled === true;
}
function addRootElementEvents(rootElement, editor) {
	const doc = rootElement.ownerDocument;
	rootElementToDocument.set(rootElement, doc);
	const documentRootElementsCount = rootElementsRegistered.get(doc) ?? 0;
	if (documentRootElementsCount < 1) doc.addEventListener("selectionchange", onDocumentSelectionChange);
	rootElementsRegistered.set(doc, documentRootElementsCount + 1);
	rootElement.__lexicalEditor = editor;
	const removeHandles = getRootElementRemoveHandles(rootElement);
	for (let i = 0; i < rootElementEvents.length; i++) {
		const [eventName, onEvent] = rootElementEvents[i];
		const eventHandler = typeof onEvent === "function" ? (event) => {
			if (hasStoppedLexicalPropagation(event)) return;
			stopLexicalPropagation(event);
			if (editor.isEditable() || eventName === "click") onEvent(event, editor);
		} : (event) => {
			if (hasStoppedLexicalPropagation(event)) return;
			stopLexicalPropagation(event);
			const isEditable = editor.isEditable();
			switch (eventName) {
				case "cut": return isEditable && dispatchCommand(editor, CUT_COMMAND$1, event);
				case "copy": return dispatchCommand(editor, COPY_COMMAND$1, event);
				case "paste": return isEditable && dispatchCommand(editor, PASTE_COMMAND$1, event);
				case "dragstart": return isEditable && dispatchCommand(editor, DRAGSTART_COMMAND$1, event);
				case "dragover": return isEditable && dispatchCommand(editor, DRAGOVER_COMMAND$1, event);
				case "dragend": return isEditable && dispatchCommand(editor, DRAGEND_COMMAND$1, event);
				case "focus": return isEditable && dispatchCommand(editor, FOCUS_COMMAND$1, event);
				case "blur": return isEditable && dispatchCommand(editor, BLUR_COMMAND$1, event);
				case "drop": return isEditable && dispatchCommand(editor, DROP_COMMAND$1, event);
			}
		};
		rootElement.addEventListener(eventName, eventHandler);
		removeHandles.push(() => {
			rootElement.removeEventListener(eventName, eventHandler);
		});
	}
}
const rootElementNotRegisteredWarning = warnOnlyOnce("Root element not registered");
function removeRootElementEvents(rootElement) {
	const doc = rootElementToDocument.get(rootElement);
	if (doc === void 0) {
		rootElementNotRegisteredWarning();
		return;
	}
	const documentRootElementsCount = rootElementsRegistered.get(doc);
	if (documentRootElementsCount === void 0) {
		rootElementNotRegisteredWarning();
		return;
	}
	const newCount = documentRootElementsCount - 1;
	if (!(newCount >= 0)) formatDevErrorMessage(`Root element count less than 0`);
	rootElementToDocument.delete(rootElement);
	rootElementsRegistered.set(doc, newCount);
	if (newCount === 0) doc.removeEventListener("selectionchange", onDocumentSelectionChange);
	const editor = getEditorPropertyFromDOMNode$1(rootElement);
	if (isLexicalEditor$1(editor)) {
		cleanActiveNestedEditorsMap(editor);
		rootElement.__lexicalEditor = null;
	} else if (editor) formatDevErrorMessage(`Attempted to remove event handlers from a node that does not belong to this build of Lexical`);
	const removeHandles = getRootElementRemoveHandles(rootElement);
	for (let i = 0; i < removeHandles.length; i++) removeHandles[i]();
	rootElement.__lexicalEventHandles = [];
}
function cleanActiveNestedEditorsMap(editor) {
	if (editor._parentEditor !== null) {
		const editors = getEditorsToPropagate(editor);
		const rootEditorKey = editors[editors.length - 1]._key;
		if (activeNestedEditorsMap.get(rootEditorKey) === editor) activeNestedEditorsMap.delete(rootEditorKey);
	} else activeNestedEditorsMap.delete(editor._key);
}
function markSelectionChangeFromDOMUpdate() {
	isSelectionChangeFromDOMUpdate = true;
}
function markCollapsedSelectionFormat(format, style, offset, key, timeStamp) {
	collapsedSelectionFormat = [
		format,
		style,
		offset,
		key,
		timeStamp
	];
}
/**
* The base type for all serialized nodes
*/
/**
* EXPERIMENTAL
* The configuration of a node returned by LexicalNode.$config()
*
* @example
* ```ts
* class CustomText extends TextNode {
*   $config() {
*     return this.config('custom-text', {extends: TextNode}};
*   }
* }
* ```
*/
/**
* This is the type of LexicalNode.$config() that can be
* overridden by subclasses.
*/
/**
* Used to extract the node and type from a StaticNodeConfigRecord
*/
/**
* Any StaticNodeConfigValue (for generics and collections)
*/
/**
* @internal
*
* This is the more specific type than BaseStaticNodeConfig that a subclass
* should return from $config()
*/
/**
* Extract the type from a node based on its $config
*
* @example
* ```ts
* type TextNodeType = GetStaticNodeType<TextNode>;
*      // ? 'text'
* ```
*/
/**
* The most precise type we can infer for the JSON that will
* be produced by T.exportJSON().
*
* Do not use this for the return type of T.exportJSON()! It must be
* a more generic type to be compatible with subclassing.
*/
/**
* Omit the children, type, and version properties from the given SerializedLexicalNode definition.
*/
/** @internal */
function $removeNode(nodeToRemove, restoreSelection, preserveEmptyParent) {
	errorOnReadOnly();
	const key = nodeToRemove.__key;
	const parent = nodeToRemove.getParent();
	if (parent === null) return;
	const selection = $maybeMoveChildrenSelectionToParent(nodeToRemove);
	let selectionMoved = false;
	if ($isRangeSelection$1(selection) && restoreSelection) {
		const anchor = selection.anchor;
		const focus = selection.focus;
		if (anchor.key === key) {
			moveSelectionPointToSibling(anchor, nodeToRemove, parent, nodeToRemove.getPreviousSibling(), nodeToRemove.getNextSibling());
			selectionMoved = true;
		}
		if (focus.key === key) {
			moveSelectionPointToSibling(focus, nodeToRemove, parent, nodeToRemove.getPreviousSibling(), nodeToRemove.getNextSibling());
			selectionMoved = true;
		}
	} else if ($isNodeSelection$1(selection) && restoreSelection && nodeToRemove.isSelected()) nodeToRemove.selectPrevious();
	if ($isRangeSelection$1(selection) && restoreSelection && !selectionMoved) {
		const index = nodeToRemove.getIndexWithinParent();
		removeFromParent$1(nodeToRemove);
		$updateElementSelectionOnCreateDeleteNode(selection, parent, index, -1);
	} else removeFromParent$1(nodeToRemove);
	if (!preserveEmptyParent && !$isRootOrShadowRoot$1(parent) && !parent.canBeEmpty() && parent.isEmpty()) $removeNode(parent, restoreSelection);
	if (restoreSelection && selection && $isRootNode$1(parent) && parent.isEmpty()) parent.selectEnd();
}
/**
* An identity function that will infer the type of DOM nodes
* based on tag names to make it easier to construct a
* DOMConversionMap.
*/
function buildImportMap$1(importMap) {
	return importMap;
}
const EPHEMERAL = Symbol.for("ephemeral");
/**
* @internal
* @param node any LexicalNode
* @returns true if the node was created with {@link $cloneWithPropertiesEphemeral}
*/
function $isEphemeral(node) {
	return node[EPHEMERAL] || false;
}
/**
* @internal
* Mark this node as ephemeral, its instance always returns this
* for getLatest and getWritable. It must not be added to an EditorState.
*/
function $markEphemeral(node) {
	node[EPHEMERAL] = true;
	return node;
}
var LexicalNode = class {
	/** @internal Allow us to look up the type including static props */
	/** @internal */
	__type;
	/** @internal */
	__key;
	/** @internal */
	__parent;
	/** @internal */
	__prev;
	/** @internal */
	__next;
	/** @internal */
	__state;
	/**
	* Returns the string type of this node. Every node must
	* implement this and it MUST BE UNIQUE amongst nodes registered
	* on the editor.
	*
	*/
	static getType() {
		const { ownNodeType } = getStaticNodeConfig$1(this);
		if (!(ownNodeType !== void 0)) formatDevErrorMessage(`LexicalNode: Node ${this.name} does not implement .getType().`);
		return ownNodeType;
	}
	/**
	* Clones this node, creating a new node with a different key
	* and adding it to the EditorState (but not attaching it anywhere!). All nodes must
	* implement this method.
	*
	*/
	static clone(_data) {
		formatDevErrorMessage(`LexicalNode: Node ${this.name} does not implement .clone().`);
	}
	/**
	* Override this to implement the new static node configuration protocol,
	* this method is called directly on the prototype and must not depend
	* on anything initialized in the constructor. Generally it should be
	* a trivial implementation.
	*
	* @example
	* ```ts
	* class MyNode extends TextNode {
	*   $config() {
	*     return this.config('my-node', {extends: TextNode});
	*   }
	* }
	* ```
	*/
	$config() {
		return {};
	}
	/**
	* This is a convenience method for $config that
	* aids in type inference. See {@link LexicalNode.$config}
	* for example usage.
	*/
	config(type, config) {
		const parentKlass = config.extends || Object.getPrototypeOf(this.constructor);
		Object.assign(config, {
			extends: parentKlass,
			type
		});
		return { [type]: config };
	}
	/**
	* Perform any state updates on the clone of prevNode that are not already
	* handled by the constructor call in the static clone method. If you have
	* state to update in your clone that is not handled directly by the
	* constructor, it is advisable to override this method but it is required
	* to include a call to `super.afterCloneFrom(prevNode)` in your
	* implementation. This is only intended to be called by
	* {@link $cloneWithProperties} function or via a super call.
	*
	* @example
	* ```ts
	* class ClassesTextNode extends TextNode {
	*   // Not shown: static getType, static importJSON, exportJSON, createDOM, updateDOM
	*   __classes = new Set<string>();
	*   static clone(node: ClassesTextNode): ClassesTextNode {
	*     // The inherited TextNode constructor is used here, so
	*     // classes is not set by this method.
	*     return new ClassesTextNode(node.__text, node.__key);
	*   }
	*   afterCloneFrom(node: this): void {
	*     // This calls TextNode.afterCloneFrom and LexicalNode.afterCloneFrom
	*     // for necessary state updates
	*     super.afterCloneFrom(node);
	*     this.__addClasses(node.__classes);
	*   }
	*   // This method is a private implementation detail, it is not
	*   // suitable for the public API because it does not call getWritable
	*   __addClasses(classNames: Iterable<string>): this {
	*     for (const className of classNames) {
	*       this.__classes.add(className);
	*     }
	*     return this;
	*   }
	*   addClass(...classNames: string[]): this {
	*     return this.getWritable().__addClasses(classNames);
	*   }
	*   removeClass(...classNames: string[]): this {
	*     const node = this.getWritable();
	*     for (const className of classNames) {
	*       this.__classes.delete(className);
	*     }
	*     return this;
	*   }
	*   getClasses(): Set<string> {
	*     return this.getLatest().__classes;
	*   }
	* }
	* ```
	*
	*/
	afterCloneFrom(prevNode) {
		if (this.__key === prevNode.__key) {
			this.__parent = prevNode.__parent;
			this.__next = prevNode.__next;
			this.__prev = prevNode.__prev;
			this.__state = prevNode.__state;
		} else if (prevNode.__state) this.__state = prevNode.__state.getWritable(this);
	}
	/**
	* Reset state in this copy of originalNode, if necessary
	*
	* @param originalNode
	*/
	resetOnCopyNodeFrom(originalNode) {
		if (this.__state) this.__state = this.__state.getWritable(this).resetOnCopyNode();
	}
	static importDOM;
	constructor(key) {
		this.__type = this.constructor.getType();
		this.__parent = null;
		this.__prev = null;
		this.__next = null;
		Object.defineProperty(this, "__state", {
			configurable: true,
			enumerable: false,
			value: void 0,
			writable: true
		});
		$setNodeKey(this, key);
		if (this.__type !== "root") errorOnTypeKlassMismatch(this.__type, this.constructor);
	}
	/**
	* Returns the string type of this node.
	*/
	getType() {
		return this.__type;
	}
	isInline() {
		formatDevErrorMessage(`LexicalNode: Node ${this.constructor.name} does not implement .isInline().`);
	}
	/**
	* Returns true if there is a path between this node and the RootNode, false otherwise.
	* This is a way of determining if the node is "attached" EditorState. Unattached nodes
	* won't be reconciled and will ultimately be cleaned up by the Lexical GC.
	*/
	isAttached() {
		let nodeKey = this.__key;
		while (nodeKey !== null) {
			if (nodeKey === "root") return true;
			const node = $getNodeByKey$1(nodeKey);
			if (node === null) break;
			nodeKey = node.__parent;
		}
		return false;
	}
	/**
	* Returns true if this node is contained within the provided Selection., false otherwise.
	* Relies on the algorithms implemented in {@link BaseSelection.getNodes} to determine
	* what's included.
	*
	* @param selection - The selection that we want to determine if the node is in.
	*/
	isSelected(selection) {
		const targetSelection = selection || $getSelection$1();
		if (targetSelection == null) return false;
		const isSelected = targetSelection.getNodes().some((n) => n.__key === this.__key);
		if ($isTextNode$1(this)) return isSelected;
		if ($isRangeSelection$1(targetSelection) && targetSelection.anchor.type === "element" && targetSelection.focus.type === "element") {
			if (targetSelection.isCollapsed()) return false;
			const parentNode = this.getParent();
			if ($isDecoratorNode$1(this) && this.isInline() && parentNode) {
				const firstPoint = targetSelection.isBackward() ? targetSelection.focus : targetSelection.anchor;
				if (parentNode.is(firstPoint.getNode()) && firstPoint.offset === parentNode.getChildrenSize() && this.is(parentNode.getLastChild())) return false;
			}
		}
		return isSelected;
	}
	/**
	* Returns this nodes key.
	*/
	getKey() {
		return this.__key;
	}
	/**
	* Returns the zero-based index of this node within the parent.
	*/
	getIndexWithinParent() {
		const parent = this.getParent();
		if (parent === null) return -1;
		let node = parent.getFirstChild();
		let index = 0;
		while (node !== null) {
			if (this.is(node)) return index;
			index++;
			node = node.getNextSibling();
		}
		return -1;
	}
	/**
	* Returns the parent of this node, or null if none is found.
	*/
	getParent() {
		const parent = this.getLatest().__parent;
		if (parent === null) return null;
		return $getNodeByKey$1(parent);
	}
	/**
	* Returns the parent of this node, or throws if none is found.
	*/
	getParentOrThrow() {
		const parent = this.getParent();
		if (parent === null) formatDevErrorMessage(`Expected node ${this.__key} to have a parent.`);
		return parent;
	}
	/**
	* Returns the highest (in the EditorState tree)
	* non-root ancestor of this node, or null if none is found. See {@link lexical!$isRootOrShadowRoot}
	* for more information on which Elements comprise "roots".
	*/
	getTopLevelElement() {
		let node = this;
		while (node !== null) {
			const parent = node.getParent();
			if ($isRootOrShadowRoot$1(parent)) {
				if (!($isElementNode$1(node) || node === this && $isDecoratorNode$1(node))) formatDevErrorMessage(`Children of root nodes must be elements or decorators`);
				return node;
			}
			node = parent;
		}
		return null;
	}
	/**
	* Returns the highest (in the EditorState tree)
	* non-root ancestor of this node, or throws if none is found. See {@link lexical!$isRootOrShadowRoot}
	* for more information on which Elements comprise "roots".
	*/
	getTopLevelElementOrThrow() {
		const parent = this.getTopLevelElement();
		if (parent === null) formatDevErrorMessage(`Expected node ${this.__key} to have a top parent element.`);
		return parent;
	}
	/**
	* Returns a list of the every ancestor of this node,
	* all the way up to the RootNode.
	*
	*/
	getParents() {
		const parents = [];
		let node = this.getParent();
		while (node !== null) {
			parents.push(node);
			node = node.getParent();
		}
		return parents;
	}
	/**
	* Returns a list of the keys of every ancestor of this node,
	* all the way up to the RootNode.
	*
	*/
	getParentKeys() {
		const parents = [];
		let node = this.getParent();
		while (node !== null) {
			parents.push(node.__key);
			node = node.getParent();
		}
		return parents;
	}
	/**
	* Returns the "previous" siblings - that is, the node that comes
	* before this one in the same parent.
	*
	*/
	getPreviousSibling() {
		const prevKey = this.getLatest().__prev;
		return prevKey === null ? null : $getNodeByKey$1(prevKey);
	}
	/**
	* Returns the "previous" siblings - that is, the nodes that come between
	* this one and the first child of it's parent, inclusive.
	*
	*/
	getPreviousSiblings() {
		const siblings = [];
		const parent = this.getParent();
		if (parent === null) return siblings;
		let node = parent.getFirstChild();
		while (node !== null) {
			if (node.is(this)) break;
			siblings.push(node);
			node = node.getNextSibling();
		}
		return siblings;
	}
	/**
	* Returns the "next" siblings - that is, the node that comes
	* after this one in the same parent
	*
	*/
	getNextSibling() {
		const nextKey = this.getLatest().__next;
		return nextKey === null ? null : $getNodeByKey$1(nextKey);
	}
	/**
	* Returns all "next" siblings - that is, the nodes that come between this
	* one and the last child of it's parent, inclusive.
	*
	*/
	getNextSiblings() {
		const siblings = [];
		let node = this.getNextSibling();
		while (node !== null) {
			siblings.push(node);
			node = node.getNextSibling();
		}
		return siblings;
	}
	/**
	* @deprecated use {@link $getCommonAncestor}
	*
	* Returns the closest common ancestor of this node and the provided one or null
	* if one cannot be found.
	*
	* @param node - the other node to find the common ancestor of.
	*/
	getCommonAncestor(node) {
		const a = $isElementNode$1(this) ? this : this.getParent();
		const b = $isElementNode$1(node) ? node : node.getParent();
		const result = a && b ? $getCommonAncestor$1(a, b) : null;
		return result ? result.commonAncestor : null;
	}
	/**
	* Returns true if the provided node is the exact same one as this node, from Lexical's perspective.
	* Always use this instead of referential equality.
	*
	* @param object - the node to perform the equality comparison on.
	*/
	is(object) {
		if (object == null) return false;
		return this.__key === object.__key;
	}
	/**
	* Returns true if this node logically precedes the target node in the
	* editor state, false otherwise (including if there is no common ancestor).
	*
	* Note that this notion of isBefore is based on post-order; a descendant
	* node is always before its ancestors. See also
	* {@link $getCommonAncestor} and {@link $comparePointCaretNext} for
	* more flexible ways to determine the relative positions of nodes.
	*
	* @param targetNode - the node we're testing to see if it's after this one.
	*/
	isBefore(targetNode) {
		const compare = $getCommonAncestor$1(this, targetNode);
		if (compare === null) return false;
		if (compare.type === "descendant") return true;
		if (compare.type === "branch") return $getCommonAncestorResultBranchOrder$1(compare) === -1;
		if (!(compare.type === "same" || compare.type === "ancestor")) formatDevErrorMessage(`LexicalNode.isBefore: exhaustiveness check`);
		return false;
	}
	/**
	* Returns true if this node is an ancestor of and distinct from the target node, false otherwise.
	*
	* @param targetNode - the would-be child node.
	*/
	isParentOf(targetNode) {
		const result = $getCommonAncestor$1(this, targetNode);
		return result !== null && result.type === "ancestor";
	}
	/**
	* Returns a list of nodes that are between this node and
	* the target node in the EditorState.
	*
	* @param targetNode - the node that marks the other end of the range of nodes to be returned.
	*/
	getNodesBetween(targetNode) {
		const isBefore = this.isBefore(targetNode);
		const nodes = [];
		const visited = /* @__PURE__ */ new Set();
		let node = this;
		while (true) {
			if (node === null) break;
			const key = node.__key;
			if (!visited.has(key)) {
				visited.add(key);
				nodes.push(node);
			}
			if (node === targetNode) break;
			const child = $isElementNode$1(node) ? isBefore ? node.getFirstChild() : node.getLastChild() : null;
			if (child !== null) {
				node = child;
				continue;
			}
			const nextSibling = isBefore ? node.getNextSibling() : node.getPreviousSibling();
			if (nextSibling !== null) {
				node = nextSibling;
				continue;
			}
			const parent = node.getParentOrThrow();
			if (!visited.has(parent.__key)) nodes.push(parent);
			if (parent === targetNode) break;
			let parentSibling = null;
			let ancestor = parent;
			do {
				if (ancestor === null) formatDevErrorMessage(`getNodesBetween: ancestor is null`);
				parentSibling = isBefore ? ancestor.getNextSibling() : ancestor.getPreviousSibling();
				ancestor = ancestor.getParent();
				if (ancestor !== null) {
					if (parentSibling === null && !visited.has(ancestor.__key)) nodes.push(ancestor);
				} else break;
			} while (parentSibling === null);
			node = parentSibling;
		}
		if (!isBefore) nodes.reverse();
		return nodes;
	}
	/**
	* Returns true if this node has been marked dirty during this update cycle.
	*
	*/
	isDirty() {
		const dirtyLeaves = getActiveEditor()._dirtyLeaves;
		return dirtyLeaves !== null && dirtyLeaves.has(this.__key);
	}
	/**
	* Returns the latest version of the node from the active EditorState.
	* This is used to avoid getting values from stale node references.
	*
	*/
	getLatest() {
		if ($isEphemeral(this)) return this;
		const latest = $getNodeByKey$1(this.__key);
		if (latest === null) formatDevErrorMessage(`Lexical node does not exist in active editor state. Avoid using the same node references between nested closures from editorState.read/editor.update.`);
		return latest;
	}
	/**
	* Returns a mutable version of the node using {@link $cloneWithProperties}
	* if necessary. Will throw an error if called outside of a Lexical Editor
	* {@link LexicalEditor.update} callback.
	*
	*/
	getWritable() {
		if ($isEphemeral(this)) return this;
		errorOnReadOnly();
		const editorState = getActiveEditorState();
		const editor = getActiveEditor();
		const nodeMap = editorState._nodeMap;
		const key = this.__key;
		const latestNode = this.getLatest();
		const cloneNotNeeded = editor._cloneNotNeeded;
		const selection = $getSelection$1();
		if (selection !== null) selection.setCachedNodes(null);
		if (cloneNotNeeded.has(key)) {
			internalMarkNodeAsDirty(latestNode);
			return latestNode;
		}
		const mutableNode = $cloneWithProperties$1(latestNode);
		cloneNotNeeded.add(key);
		internalMarkNodeAsDirty(mutableNode);
		nodeMap.set(key, mutableNode);
		return mutableNode;
	}
	/**
	* Returns the text content of the node. Override this for
	* custom nodes that should have a representation in plain text
	* format (for copy + paste, for example)
	*
	*/
	getTextContent() {
		return "";
	}
	/**
	* Returns the length of the string produced by calling getTextContent on this node.
	*
	*/
	getTextContentSize() {
		return this.getTextContent().length;
	}
	/**
	* Called during the reconciliation process to determine which nodes
	* to insert into the DOM for this Lexical Node.
	*
	* This method must return exactly one HTMLElement. Nested elements are not supported.
	*
	* Do not attempt to update the Lexical EditorState during this phase of the update lifecycle.
	*
	* @param _config - allows access to things like the EditorTheme (to apply classes) during reconciliation.
	* @param _editor - allows access to the editor for context during reconciliation.
	*
	* */
	createDOM(_config, _editor) {
		formatDevErrorMessage(`createDOM: base method not extended`);
	}
	/**
	* Called when a node changes and should update the DOM
	* in whatever way is necessary to make it align with any changes that might
	* have happened during the update.
	*
	* Returning "true" here will cause lexical to unmount and recreate the DOM node
	* (by calling createDOM). You would need to do this if the element tag changes,
	* for instance.
	*
	* */
	updateDOM(_prevNode, _dom, _config) {
		formatDevErrorMessage(`updateDOM: base method not extended`);
	}
	/**
	* Controls how the this node is serialized to HTML. This is important for
	* copy and paste between Lexical and non-Lexical editors, or Lexical editors with different namespaces,
	* in which case the primary transfer format is HTML. It's also important if you're serializing
	* to HTML for any other reason via {@link @lexical/html!$generateHtmlFromNodes}. You could
	* also use this method to build your own HTML renderer.
	*
	* */
	exportDOM(editor) {
		return { element: this.createDOM(editor._config, editor) };
	}
	/**
	* Controls how the this node is serialized to JSON. This is important for
	* copy and paste between Lexical editors sharing the same namespace. It's also important
	* if you're serializing to JSON for persistent storage somewhere.
	* See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).
	*
	* */
	exportJSON() {
		const state = this.__state ? this.__state.toJSON() : void 0;
		return {
			type: this.__type,
			version: 1,
			...state
		};
	}
	/**
	* Controls how the this node is deserialized from JSON. This is usually boilerplate,
	* but provides an abstraction between the node implementation and serialized interface that can
	* be important if you ever make breaking changes to a node schema (by adding or removing properties).
	* See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).
	*
	* */
	static importJSON(_serializedNode) {
		formatDevErrorMessage(`LexicalNode: Node ${this.name} does not implement .importJSON().`);
	}
	/**
	* Update this LexicalNode instance from serialized JSON. It's recommended
	* to implement as much logic as possible in this method instead of the
	* static importJSON method, so that the functionality can be inherited in subclasses.
	*
	* The LexicalUpdateJSON utility type should be used to ignore any type, version,
	* or children properties in the JSON so that the extended JSON from subclasses
	* are acceptable parameters for the super call.
	*
	* If overridden, this method must call super.
	*
	* @example
	* ```ts
	* class MyTextNode extends TextNode {
	*   // ...
	*   static importJSON(serializedNode: SerializedMyTextNode): MyTextNode {
	*     return $createMyTextNode()
	*       .updateFromJSON(serializedNode);
	*   }
	*   updateFromJSON(
	*     serializedNode: LexicalUpdateJSON<SerializedMyTextNode>,
	*   ): this {
	*     return super.updateFromJSON(serializedNode)
	*       .setMyProperty(serializedNode.myProperty);
	*   }
	* }
	* ```
	**/
	updateFromJSON(serializedNode) {
		return $updateStateFromJSON(this, serializedNode);
	}
	/**
	* @experimental
	*
	* Registers the returned function as a transform on the node during
	* Editor initialization. Most such use cases should be addressed via
	* the {@link LexicalEditor.registerNodeTransform} API.
	*
	* Experimental - use at your own risk.
	*/
	static transform() {
		return null;
	}
	/**
	* Removes this LexicalNode from the EditorState. If the node isn't re-inserted
	* somewhere, the Lexical garbage collector will eventually clean it up.
	*
	* @param preserveEmptyParent - If falsy, the node's parent will be removed if
	* it's empty after the removal operation. This is the default behavior, subject to
	* other node heuristics such as {@link ElementNode#canBeEmpty}
	* */
	remove(preserveEmptyParent) {
		$removeNode(this, true, preserveEmptyParent);
	}
	/**
	* Replaces this LexicalNode with the provided node, optionally transferring the children
	* of the replaced node to the replacing node.
	*
	* @param replaceWith - The node to replace this one with.
	* @param includeChildren - Whether or not to transfer the children of this node to the replacing node.
	* */
	replace(replaceWith, includeChildren) {
		errorOnReadOnly();
		let selection = $getSelection$1();
		if (selection !== null) selection = selection.clone();
		errorOnInsertTextNodeOnRoot(this, replaceWith);
		const self = this.getLatest();
		const toReplaceKey = this.__key;
		const key = replaceWith.__key;
		const writableReplaceWith = replaceWith.getWritable();
		const writableParent = this.getParentOrThrow().getWritable();
		const size = writableParent.__size;
		removeFromParent$1(writableReplaceWith);
		const prevSibling = self.getPreviousSibling();
		const nextSibling = self.getNextSibling();
		const prevKey = self.__prev;
		const nextKey = self.__next;
		const parentKey = self.__parent;
		$removeNode(self, false, true);
		if (prevSibling === null) writableParent.__first = key;
		else {
			const writablePrevSibling = prevSibling.getWritable();
			writablePrevSibling.__next = key;
		}
		writableReplaceWith.__prev = prevKey;
		if (nextSibling === null) writableParent.__last = key;
		else {
			const writableNextSibling = nextSibling.getWritable();
			writableNextSibling.__prev = key;
		}
		writableReplaceWith.__next = nextKey;
		writableReplaceWith.__parent = parentKey;
		writableParent.__size = size;
		if (includeChildren) {
			if (!($isElementNode$1(this) && $isElementNode$1(writableReplaceWith))) formatDevErrorMessage(`includeChildren should only be true for ElementNodes`);
			this.getChildren().forEach((child) => {
				writableReplaceWith.append(child);
			});
		}
		if ($isRangeSelection$1(selection)) {
			$setSelection$1(selection);
			const anchor = selection.anchor;
			const focus = selection.focus;
			if (anchor.key === toReplaceKey) $moveSelectionPointToEnd(anchor, writableReplaceWith);
			if (focus.key === toReplaceKey) $moveSelectionPointToEnd(focus, writableReplaceWith);
		}
		if ($getCompositionKey() === toReplaceKey) $setCompositionKey$1(key);
		return writableReplaceWith;
	}
	/**
	* Inserts a node after this LexicalNode (as the next sibling).
	*
	* @param nodeToInsert - The node to insert after this one.
	* @param restoreSelection - Whether or not to attempt to resolve the
	* selection to the appropriate place after the operation is complete.
	* */
	insertAfter(nodeToInsert, restoreSelection = true) {
		errorOnReadOnly();
		errorOnInsertTextNodeOnRoot(this, nodeToInsert);
		const writableSelf = this.getWritable();
		const writableNodeToInsert = nodeToInsert.getWritable();
		const oldParent = writableNodeToInsert.getParent();
		const selection = $getSelection$1();
		let elementAnchorSelectionOnNode = false;
		let elementFocusSelectionOnNode = false;
		if (oldParent !== null) {
			const oldIndex = nodeToInsert.getIndexWithinParent();
			removeFromParent$1(writableNodeToInsert);
			if ($isRangeSelection$1(selection)) {
				const oldParentKey = oldParent.__key;
				const anchor = selection.anchor;
				const focus = selection.focus;
				elementAnchorSelectionOnNode = anchor.type === "element" && anchor.key === oldParentKey && anchor.offset === oldIndex + 1;
				elementFocusSelectionOnNode = focus.type === "element" && focus.key === oldParentKey && focus.offset === oldIndex + 1;
			}
		}
		const nextSibling = this.getNextSibling();
		const writableParent = this.getParentOrThrow().getWritable();
		const insertKey = writableNodeToInsert.__key;
		const nextKey = writableSelf.__next;
		if (nextSibling === null) writableParent.__last = insertKey;
		else {
			const writableNextSibling = nextSibling.getWritable();
			writableNextSibling.__prev = insertKey;
		}
		writableParent.__size++;
		writableSelf.__next = insertKey;
		writableNodeToInsert.__next = nextKey;
		writableNodeToInsert.__prev = writableSelf.__key;
		writableNodeToInsert.__parent = writableSelf.__parent;
		if (restoreSelection && $isRangeSelection$1(selection)) {
			const index = this.getIndexWithinParent();
			$updateElementSelectionOnCreateDeleteNode(selection, writableParent, index + 1);
			const writableParentKey = writableParent.__key;
			if (elementAnchorSelectionOnNode) selection.anchor.set(writableParentKey, index + 2, "element");
			if (elementFocusSelectionOnNode) selection.focus.set(writableParentKey, index + 2, "element");
		}
		return nodeToInsert;
	}
	/**
	* Inserts a node before this LexicalNode (as the previous sibling).
	*
	* @param nodeToInsert - The node to insert before this one.
	* @param restoreSelection - Whether or not to attempt to resolve the
	* selection to the appropriate place after the operation is complete.
	* */
	insertBefore(nodeToInsert, restoreSelection = true) {
		errorOnReadOnly();
		errorOnInsertTextNodeOnRoot(this, nodeToInsert);
		const writableSelf = this.getWritable();
		const writableNodeToInsert = nodeToInsert.getWritable();
		const insertKey = writableNodeToInsert.__key;
		removeFromParent$1(writableNodeToInsert);
		const prevSibling = this.getPreviousSibling();
		const writableParent = this.getParentOrThrow().getWritable();
		const prevKey = writableSelf.__prev;
		const index = this.getIndexWithinParent();
		if (prevSibling === null) writableParent.__first = insertKey;
		else {
			const writablePrevSibling = prevSibling.getWritable();
			writablePrevSibling.__next = insertKey;
		}
		writableParent.__size++;
		writableSelf.__prev = insertKey;
		writableNodeToInsert.__prev = prevKey;
		writableNodeToInsert.__next = writableSelf.__key;
		writableNodeToInsert.__parent = writableSelf.__parent;
		const selection = $getSelection$1();
		if (restoreSelection && $isRangeSelection$1(selection)) $updateElementSelectionOnCreateDeleteNode(selection, this.getParentOrThrow(), index);
		return nodeToInsert;
	}
	/**
	* Whether or not this node has a required parent. Used during copy + paste operations
	* to normalize nodes that would otherwise be orphaned. For example, ListItemNodes without
	* a ListNode parent or TextNodes with a ParagraphNode parent.
	*
	* */
	isParentRequired() {
		return false;
	}
	/**
	* The creation logic for any required parent. Should be implemented if {@link isParentRequired} returns true.
	*
	* */
	createParentElementNode() {
		return $createParagraphNode$1();
	}
	selectStart() {
		return this.selectPrevious();
	}
	selectEnd() {
		return this.selectNext(0, 0);
	}
	/**
	* Moves selection to the previous sibling of this node, at the specified offsets.
	*
	* @param anchorOffset - The anchor offset for selection.
	* @param focusOffset -  The focus offset for selection
	* */
	selectPrevious(anchorOffset, focusOffset) {
		errorOnReadOnly();
		const prevSibling = this.getPreviousSibling();
		const parent = this.getParentOrThrow();
		if (prevSibling === null) return parent.select(0, 0);
		if ($isElementNode$1(prevSibling)) return prevSibling.select();
		else if (!$isTextNode$1(prevSibling)) {
			const index = prevSibling.getIndexWithinParent() + 1;
			return parent.select(index, index);
		}
		return prevSibling.select(anchorOffset, focusOffset);
	}
	/**
	* Moves selection to the next sibling of this node, at the specified offsets.
	*
	* @param anchorOffset - The anchor offset for selection.
	* @param focusOffset -  The focus offset for selection
	* */
	selectNext(anchorOffset, focusOffset) {
		errorOnReadOnly();
		const nextSibling = this.getNextSibling();
		const parent = this.getParentOrThrow();
		if (nextSibling === null) return parent.select();
		if ($isElementNode$1(nextSibling)) return nextSibling.select(0, 0);
		else if (!$isTextNode$1(nextSibling)) {
			const index = nextSibling.getIndexWithinParent();
			return parent.select(index, index);
		}
		return nextSibling.select(anchorOffset, focusOffset);
	}
	/**
	* Marks a node dirty, triggering transforms and
	* forcing it to be reconciled during the update cycle.
	*
	* */
	markDirty() {
		this.getWritable();
	}
	/**
	* @internal
	*
	* When the reconciler detects that a node was mutated, this method
	* may be called to restore the node to a known good state.
	*/
	reconcileObservedMutation(dom, editor) {
		this.markDirty();
	}
};
function errorOnTypeKlassMismatch(type, klass) {
	const registeredNode = getRegisteredNode$1(getActiveEditor(), type);
	if (registeredNode === void 0) formatDevErrorMessage(`Create node: Attempted to create node ${klass.name} that was not configured to be used on the editor.`);
	const editorKlass = registeredNode.klass;
	if (editorKlass !== klass) formatDevErrorMessage(`Create node: Type ${type} in node ${klass.name} does not match registered node ${editorKlass.name} with the same type`);
}
/**
* Insert a series of nodes after this LexicalNode (as next siblings)
*
* @param firstToInsert - The first node to insert after this one.
* @param lastToInsert - The last node to insert after this one. Must be a
* later sibling of FirstNode. If not provided, it will be its last sibling.
*/
function insertRangeAfter(node, firstToInsert, lastToInsert) {
	const lastToInsert2 = firstToInsert.getParentOrThrow().getLastChild();
	let current = firstToInsert;
	const nodesToInsert = [firstToInsert];
	while (current !== lastToInsert2) {
		if (!current.getNextSibling()) formatDevErrorMessage(`insertRangeAfter: lastToInsert must be a later sibling of firstToInsert`);
		current = current.getNextSibling();
		nodesToInsert.push(current);
	}
	let currentNode = node;
	for (const nodeToInsert of nodesToInsert) currentNode = currentNode.insertAfter(nodeToInsert);
}
/**
* Returns true if the given value is a {@link LexicalNode} instance.
*/
function $isLexicalNode$1(node) {
	return node instanceof LexicalNode;
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
/**
* Common update tags used in Lexical. These tags can be used with editor.update() or $addUpdateTag()
* to indicate the type/purpose of an update. Multiple tags can be used in a single update.
*/
/**
* Indicates that the update is related to history operations (undo/redo)
*/
const HISTORIC_TAG$1 = "historic";
/**
* Indicates that a new history entry should be pushed to the history stack
*/
const HISTORY_PUSH_TAG$1 = "history-push";
/**
* Indicates that the current update should be merged with the previous history entry
*/
const HISTORY_MERGE_TAG$1 = "history-merge";
/**
* Indicates that the update is related to a paste operation
*/
const PASTE_TAG$1 = "paste";
/**
* Indicates that the update is related to collaborative editing
*/
const COLLABORATION_TAG$1 = "collaboration";
/**
* Indicates that the update should skip collaborative sync
*/
const SKIP_COLLAB_TAG$1 = "skip-collab";
/**
* Indicates that the update should skip scrolling the selection into view
*/
const SKIP_SCROLL_INTO_VIEW_TAG$1 = "skip-scroll-into-view";
/**
* Indicates that the update should skip updating the DOM selection
* This is useful when you want to make updates without changing the selection or focus
*/
const SKIP_DOM_SELECTION_TAG$1 = "skip-dom-selection";
/**
* Indicates that after changing the selection, the editor should not focus itself
* This tag is ignored if {@link SKIP_DOM_SELECTION_TAG} is used
*/
const SKIP_SELECTION_FOCUS_TAG$1 = "skip-selection-focus";
/**
* The update was triggered by editor.focus()
*/
const FOCUS_TAG = "focus";
/**
* The update was triggered by composition-start
*/
const COMPOSITION_START_TAG$1 = "composition-start";
/**
* The update was triggered by composition-end
*/
const COMPOSITION_END_TAG$1 = "composition-end";
/**
* The set of known update tags to help with TypeScript suggestions.
*/
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
const IMPORTANT_REG_EXP = /\s*!important\s*$/i;
/**
* Parses inline CSS text into an object that is compatible with
* `CSSStyleDeclaration.setProperty()`.
*
* Property names are expected to be kebab-case, such as `font-size`, and
* values are expected to include explicit units where needed, such as `12px`.
*/
function getStyleObjectFromCSS$1(css) {
	const styles = {};
	if (!css) return styles;
	let currentProperty = "";
	let currentValue = "";
	let currentQuote = null;
	let inComment = false;
	let isEscaped = false;
	let isParsingValue = false;
	let parenthesisDepth = 0;
	for (let i = 0; i < css.length; i++) {
		const char = css[i];
		if (inComment) {
			if (char === "*" && css[i + 1] === "/") {
				inComment = false;
				i++;
			}
			continue;
		}
		if (isEscaped) {
			if (isParsingValue) currentValue += char;
			else currentProperty += char;
			isEscaped = false;
			continue;
		}
		if (currentQuote !== null) {
			if (isParsingValue) currentValue += char;
			else currentProperty += char;
			if (char === "\\") isEscaped = true;
			else if (char === currentQuote) currentQuote = null;
			continue;
		}
		if (char === "/" && css[i + 1] === "*") {
			inComment = true;
			i++;
			continue;
		}
		if (char === "\"" || char === "'") {
			currentQuote = char;
			if (isParsingValue) currentValue += char;
			else currentProperty += char;
			continue;
		}
		if (char === "(") {
			parenthesisDepth++;
			if (isParsingValue) currentValue += char;
			else currentProperty += char;
			continue;
		}
		if (char === ")") {
			parenthesisDepth = Math.max(0, parenthesisDepth - 1);
			if (isParsingValue) currentValue += char;
			else currentProperty += char;
			continue;
		}
		if (!isParsingValue && char === ":" && parenthesisDepth === 0) {
			isParsingValue = true;
			continue;
		}
		if (char === ";" && parenthesisDepth === 0) {
			const property = currentProperty.trim();
			const value = currentValue.trim();
			if (property !== "" && value !== "") styles[property] = value;
			currentProperty = "";
			currentValue = "";
			isParsingValue = false;
			continue;
		}
		if (isParsingValue) currentValue += char;
		else currentProperty += char;
	}
	const property = currentProperty.trim();
	const value = currentValue.trim();
	if (property !== "" && value !== "") styles[property] = value;
	return styles;
}
function setDOMStyleProperty(domStyle, property, value) {
	const priority = IMPORTANT_REG_EXP.test(value) ? "important" : "";
	const nextValue = priority === "" ? value : value.replace(IMPORTANT_REG_EXP, "").trim();
	domStyle.setProperty(property, nextValue, priority);
}
/**
* Applies a style object to a DOM style declaration using
* `CSSStyleDeclaration.setProperty()`.
*
* Property names are expected to be kebab-case, such as `font-size`, and
* values are expected to include explicit units where needed, such as `12px`.
*/
function setDOMStyleObject$1(domStyle, styleObject) {
	for (const property in styleObject) {
		const value = styleObject[property];
		if (value == null) domStyle.removeProperty(property);
		else setDOMStyleProperty(domStyle, property, value);
	}
}
/**
* Applies inline CSS text to a DOM style declaration using
* `CSSStyleDeclaration.setProperty()`.
*
* Property names are expected to be kebab-case, such as `font-size`, and
* values are expected to include explicit units where needed, such as `12px`.
*/
function setDOMStyleFromCSS$1(domStyle, cssText, prevCSSText = "") {
	if (cssText === prevCSSText) return;
	const prevCSS = getStyleObjectFromCSS$1(prevCSSText);
	const nextCSS = getStyleObjectFromCSS$1(cssText);
	for (const property in nextCSS) {
		delete prevCSS[property];
		setDOMStyleProperty(domStyle, property, nextCSS[property]);
	}
	for (const property in prevCSS) domStyle.removeProperty(property);
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
/** @noInheritDoc */
var LineBreakNode$1 = class LineBreakNode$1 extends LexicalNode {
	/** @internal */
	static getType() {
		return "linebreak";
	}
	static clone(node) {
		return new LineBreakNode$1(node.__key);
	}
	constructor(key) {
		super(key);
	}
	getTextContent() {
		return "\n";
	}
	createDOM() {
		return document.createElement("br");
	}
	updateDOM() {
		return false;
	}
	isInline() {
		return true;
	}
	static importDOM() {
		return { br: (node) => {
			if (isOnlyChildInBlockNode(node) || isLastChildInBlockNode(node)) return null;
			return {
				conversion: $convertLineBreakElement,
				priority: 0
			};
		} };
	}
	static importJSON(serializedLineBreakNode) {
		return $createLineBreakNode$1().updateFromJSON(serializedLineBreakNode);
	}
};
function $convertLineBreakElement(node) {
	return { node: $createLineBreakNode$1() };
}
function $createLineBreakNode$1() {
	return $applyNodeReplacement$1(new LineBreakNode$1());
}
function $isLineBreakNode$1(node) {
	return node instanceof LineBreakNode$1;
}
function isOnlyChildInBlockNode(node) {
	const parentElement = node.parentElement;
	if (parentElement !== null && isBlockDomNode$1(parentElement)) {
		const firstChild = parentElement.firstChild;
		if (firstChild === node || firstChild.nextSibling === node && isWhitespaceDomTextNode(firstChild)) {
			const lastChild = parentElement.lastChild;
			if (lastChild === node || lastChild.previousSibling === node && isWhitespaceDomTextNode(lastChild)) return true;
		}
	}
	return false;
}
function isLastChildInBlockNode(node) {
	const parentElement = node.parentElement;
	if (parentElement !== null && isBlockDomNode$1(parentElement)) {
		const firstChild = parentElement.firstChild;
		if (firstChild === node || firstChild.nextSibling === node && isWhitespaceDomTextNode(firstChild)) return false;
		const lastChild = parentElement.lastChild;
		if (lastChild === node || lastChild.previousSibling === node && isWhitespaceDomTextNode(lastChild)) return true;
	}
	return false;
}
function isWhitespaceDomTextNode(node) {
	return isDOMTextNode$1(node) && /^( |\t|\r?\n)+$/.test(node.textContent || "");
}
function getElementOuterTag(node, format) {
	if (format & 16) return "code";
	if (format & 128) return "mark";
	if (format & 32) return "sub";
	if (format & 64) return "sup";
	return null;
}
function getElementInnerTag(node, format) {
	if (format & 1) return "strong";
	if (format & 2) return "em";
	return "span";
}
function setTextThemeClassNames(tag, prevFormat, nextFormat, dom, textClassNames) {
	const domClassList = dom.classList;
	let classNames = getCachedClassNameArray(textClassNames, "base");
	if (classNames !== void 0) domClassList.add(...classNames);
	classNames = getCachedClassNameArray(textClassNames, "underlineStrikethrough");
	let hasUnderlineStrikethrough = false;
	const prevUnderlineStrikethrough = prevFormat & 8 && prevFormat & 4;
	const nextUnderlineStrikethrough = nextFormat & 8 && nextFormat & 4;
	if (classNames !== void 0) {
		if (nextUnderlineStrikethrough) {
			hasUnderlineStrikethrough = true;
			if (!prevUnderlineStrikethrough) domClassList.add(...classNames);
		} else if (prevUnderlineStrikethrough) domClassList.remove(...classNames);
	}
	for (const key in TEXT_TYPE_TO_FORMAT$1) {
		const flag = TEXT_TYPE_TO_FORMAT$1[key];
		classNames = getCachedClassNameArray(textClassNames, key);
		if (classNames !== void 0) {
			if (nextFormat & flag) {
				if (hasUnderlineStrikethrough && (key === "underline" || key === "strikethrough")) {
					if (prevFormat & flag) domClassList.remove(...classNames);
					continue;
				}
				if ((prevFormat & flag) === 0 || prevUnderlineStrikethrough && key === "underline" || key === "strikethrough") domClassList.add(...classNames);
			} else if (prevFormat & flag) domClassList.remove(...classNames);
		}
	}
}
function diffComposedText(a, b) {
	const aLength = a.length;
	const bLength = b.length;
	let left = 0;
	let right = 0;
	while (left < aLength && left < bLength && a[left] === b[left]) left++;
	while (right + left < aLength && right + left < bLength && a[aLength - right - 1] === b[bLength - right - 1]) right++;
	return [
		left,
		aLength - left - right,
		b.slice(left, bLength - right)
	];
}
function setTextContent(nextText, dom, node) {
	const firstChild = dom.firstChild;
	const isComposing = node.isComposing();
	const text = nextText + (isComposing ? COMPOSITION_SUFFIX : "");
	if (firstChild == null) dom.textContent = text;
	else {
		const nodeValue = firstChild.nodeValue;
		if (nodeValue !== text) if (isComposing || IS_FIREFOX) {
			const [index, remove, insert] = diffComposedText(nodeValue, text);
			if (remove !== 0) firstChild.deleteData(index, remove);
			firstChild.insertData(index, insert);
		} else firstChild.nodeValue = text;
	}
}
function createTextInnerDOM(innerDOM, node, innerTag, format, text, config) {
	setTextContent(text, innerDOM, node);
	const textClassNames = config.theme.text;
	if (textClassNames !== void 0) setTextThemeClassNames(innerTag, 0, format, innerDOM, textClassNames);
}
function wrapElementWith(element, tag) {
	const el = document.createElement(tag);
	el.appendChild(element);
	return el;
}
/** @noInheritDoc */
var TextNode$1 = class TextNode$1 extends LexicalNode {
	/** @internal */
	__text;
	/** @internal */
	__format;
	/** @internal */
	__style;
	/** @internal */
	__mode;
	/** @internal */
	__detail;
	static getType() {
		return "text";
	}
	static clone(node) {
		return new TextNode$1(node.__text, node.__key);
	}
	afterCloneFrom(prevNode) {
		super.afterCloneFrom(prevNode);
		this.__text = prevNode.__text;
		this.__format = prevNode.__format;
		this.__style = prevNode.__style;
		this.__mode = prevNode.__mode;
		this.__detail = prevNode.__detail;
	}
	constructor(text = "", key) {
		super(key);
		this.__text = text;
		this.__format = 0;
		this.__style = "";
		this.__mode = 0;
		this.__detail = 0;
	}
	/**
	* Returns a 32-bit integer that represents the TextFormatTypes currently applied to the
	* TextNode. You probably don't want to use this method directly - consider using TextNode.hasFormat instead.
	*
	* @returns a number representing the format of the text node.
	*/
	getFormat() {
		return this.getLatest().__format;
	}
	/**
	* Returns a 32-bit integer that represents the TextDetailTypes currently applied to the
	* TextNode. You probably don't want to use this method directly - consider using TextNode.isDirectionless
	* or TextNode.isUnmergeable instead.
	*
	* @returns a number representing the detail of the text node.
	*/
	getDetail() {
		return this.getLatest().__detail;
	}
	/**
	* Returns the mode (TextModeType) of the TextNode, which may be "normal", "token", or "segmented"
	*
	* @returns TextModeType.
	*/
	getMode() {
		const self = this.getLatest();
		return TEXT_TYPE_TO_MODE[self.__mode];
	}
	/**
	* Returns the styles currently applied to the node. This is analogous to CSSText in the DOM.
	*
	* @returns CSSText-like string of styles applied to the underlying DOM node.
	*/
	getStyle() {
		return this.getLatest().__style;
	}
	/**
	* Returns whether or not the node is in "token" mode. TextNodes in token mode can be navigated through character-by-character
	* with a RangeSelection, but are deleted as a single entity (not individually by character).
	*
	* @returns true if the node is in token mode, false otherwise.
	*/
	isToken() {
		return this.getLatest().__mode === IS_TOKEN;
	}
	/**
	*
	* @returns true if Lexical detects that an IME or other 3rd-party script is attempting to
	* mutate the TextNode, false otherwise.
	*/
	isComposing() {
		return this.__key === $getCompositionKey();
	}
	/**
	* Returns whether or not the node is in "segmented" mode. TextNodes in segmented mode can be navigated through character-by-character
	* with a RangeSelection, but are deleted in space-delimited "segments".
	*
	* @returns true if the node is in segmented mode, false otherwise.
	*/
	isSegmented() {
		return this.getLatest().__mode === IS_SEGMENTED;
	}
	/**
	* Returns whether or not the node is "directionless". Directionless nodes don't respect changes between RTL and LTR modes.
	*
	* @returns true if the node is directionless, false otherwise.
	*/
	isDirectionless() {
		return (this.getLatest().__detail & IS_DIRECTIONLESS) !== 0;
	}
	/**
	* Returns whether or not the node is unmergeable. In some scenarios, Lexical tries to merge
	* adjacent TextNodes into a single TextNode. If a TextNode is unmergeable, this won't happen.
	*
	* @returns true if the node is unmergeable, false otherwise.
	*/
	isUnmergeable() {
		return (this.getLatest().__detail & IS_UNMERGEABLE) !== 0;
	}
	/**
	* Returns whether or not the node has the provided format applied. Use this with the human-readable TextFormatType
	* string values to get the format of a TextNode.
	*
	* @param type - the TextFormatType to check for.
	*
	* @returns true if the node has the provided format, false otherwise.
	*/
	hasFormat(type) {
		const formatFlag = TEXT_TYPE_TO_FORMAT$1[type];
		return (this.getFormat() & formatFlag) !== 0;
	}
	/**
	* Returns whether or not the node is simple text. Simple text is defined as a TextNode that has the string type "text"
	* (i.e., not a subclass) and has no mode applied to it (i.e., not segmented or token).
	*
	* @returns true if the node is simple text, false otherwise.
	*/
	isSimpleText() {
		return this.__type === "text" && this.__mode === 0;
	}
	/**
	* Returns the text content of the node as a string.
	*
	* @returns a string representing the text content of the node.
	*/
	getTextContent() {
		return this.getLatest().__text;
	}
	/**
	* Returns the format flags applied to the node as a 32-bit integer.
	*
	* @returns a number representing the TextFormatTypes applied to the node.
	*/
	getFormatFlags(type, alignWithFormat) {
		const format = this.getLatest().__format;
		return toggleTextFormatType$1(format, type, alignWithFormat);
	}
	/**
	*
	* @returns true if the text node supports font styling, false otherwise.
	*/
	canHaveFormat() {
		return true;
	}
	/**
	* @returns true if the text node is inline, false otherwise.
	*/
	isInline() {
		return true;
	}
	createDOM(config, editor) {
		const format = this.__format;
		const outerTag = getElementOuterTag(this, format);
		const innerTag = getElementInnerTag(this, format);
		const tag = outerTag === null ? innerTag : outerTag;
		const dom = document.createElement(tag);
		let innerDOM = dom;
		if (this.hasFormat("code")) dom.setAttribute("spellcheck", "false");
		if (outerTag !== null) {
			innerDOM = document.createElement(innerTag);
			dom.appendChild(innerDOM);
		}
		const text = this.__text;
		createTextInnerDOM(innerDOM, this, innerTag, format, text, config);
		const style = this.__style;
		if (style !== "") setDOMStyleFromCSS$1(dom.style, style);
		return dom;
	}
	updateDOM(prevNode, dom, config) {
		const nextText = this.__text;
		const prevFormat = prevNode.__format;
		const nextFormat = this.__format;
		const prevOuterTag = getElementOuterTag(this, prevFormat);
		const nextOuterTag = getElementOuterTag(this, nextFormat);
		const prevInnerTag = getElementInnerTag(this, prevFormat);
		const nextInnerTag = getElementInnerTag(this, nextFormat);
		if ((prevOuterTag === null ? prevInnerTag : prevOuterTag) !== (nextOuterTag === null ? nextInnerTag : nextOuterTag)) return true;
		if (prevOuterTag === nextOuterTag && prevInnerTag !== nextInnerTag) {
			const prevInnerDOM = dom.firstChild;
			if (prevInnerDOM == null) formatDevErrorMessage(`updateDOM: prevInnerDOM is null or undefined`);
			const nextInnerDOM = document.createElement(nextInnerTag);
			createTextInnerDOM(nextInnerDOM, this, nextInnerTag, nextFormat, nextText, config);
			dom.replaceChild(nextInnerDOM, prevInnerDOM);
			return false;
		}
		let innerDOM = dom;
		if (nextOuterTag !== null) {
			if (prevOuterTag !== null) {
				innerDOM = dom.firstChild;
				if (innerDOM == null) formatDevErrorMessage(`updateDOM: innerDOM is null or undefined`);
			}
		}
		setTextContent(nextText, innerDOM, this);
		const textClassNames = config.theme.text;
		if (textClassNames !== void 0 && prevFormat !== nextFormat) setTextThemeClassNames(nextInnerTag, prevFormat, nextFormat, innerDOM, textClassNames);
		const prevStyle = prevNode.__style;
		const nextStyle = this.__style;
		if (prevStyle !== nextStyle) setDOMStyleFromCSS$1(dom.style, nextStyle, prevStyle);
		return false;
	}
	static importDOM() {
		return {
			"#text": () => ({
				conversion: $convertTextDOMNode,
				priority: 0
			}),
			b: () => ({
				conversion: convertBringAttentionToElement,
				priority: 0
			}),
			code: () => ({
				conversion: convertTextFormatElement,
				priority: 0
			}),
			em: () => ({
				conversion: convertTextFormatElement,
				priority: 0
			}),
			i: () => ({
				conversion: convertTextFormatElement,
				priority: 0
			}),
			mark: () => ({
				conversion: convertTextFormatElement,
				priority: 0
			}),
			s: () => ({
				conversion: convertTextFormatElement,
				priority: 0
			}),
			span: () => ({
				conversion: convertSpanElement,
				priority: 0
			}),
			strong: () => ({
				conversion: convertTextFormatElement,
				priority: 0
			}),
			sub: () => ({
				conversion: convertTextFormatElement,
				priority: 0
			}),
			sup: () => ({
				conversion: convertTextFormatElement,
				priority: 0
			}),
			u: () => ({
				conversion: convertTextFormatElement,
				priority: 0
			})
		};
	}
	static importJSON(serializedNode) {
		return $createTextNode$1().updateFromJSON(serializedNode);
	}
	updateFromJSON(serializedNode) {
		return super.updateFromJSON(serializedNode).setTextContent(serializedNode.text).setFormat(serializedNode.format).setDetail(serializedNode.detail).setMode(serializedNode.mode).setStyle(serializedNode.style);
	}
	exportDOM(editor) {
		let { element } = super.exportDOM(editor);
		if (!isHTMLElement$1(element)) formatDevErrorMessage(`Expected TextNode createDOM to always return a HTMLElement`);
		element.style.whiteSpace = "pre-wrap";
		if (this.hasFormat("lowercase")) element.style.textTransform = "lowercase";
		else if (this.hasFormat("uppercase")) element.style.textTransform = "uppercase";
		else if (this.hasFormat("capitalize")) element.style.textTransform = "capitalize";
		if (this.hasFormat("bold")) element = wrapElementWith(element, "b");
		if (this.hasFormat("italic")) element = wrapElementWith(element, "i");
		if (this.hasFormat("strikethrough")) element = wrapElementWith(element, "s");
		if (this.hasFormat("underline")) element = wrapElementWith(element, "u");
		return { element };
	}
	exportJSON() {
		return {
			detail: this.getDetail(),
			format: this.getFormat(),
			mode: this.getMode(),
			style: this.getStyle(),
			text: this.getTextContent(),
			...super.exportJSON()
		};
	}
	selectionTransform(prevSelection, nextSelection) {}
	/**
	* Sets the node format to the provided TextFormatType or 32-bit integer. Note that the TextFormatType
	* version of the argument can only specify one format and doing so will remove all other formats that
	* may be applied to the node. For toggling behavior, consider using {@link TextNode.toggleFormat}
	*
	* @param format - TextFormatType or 32-bit integer representing the node format.
	*
	* @returns this TextNode.
	* // TODO 0.12 This should just be a `string`.
	*/
	setFormat(format) {
		const self = this.getWritable();
		self.__format = typeof format === "string" ? TEXT_TYPE_TO_FORMAT$1[format] : format;
		return self;
	}
	/**
	* Sets the node detail to the provided TextDetailType or 32-bit integer. Note that the TextDetailType
	* version of the argument can only specify one detail value and doing so will remove all other detail values that
	* may be applied to the node. For toggling behavior, consider using {@link TextNode.toggleDirectionless}
	* or {@link TextNode.toggleUnmergeable}
	*
	* @param detail - TextDetailType or 32-bit integer representing the node detail.
	*
	* @returns this TextNode.
	* // TODO 0.12 This should just be a `string`.
	*/
	setDetail(detail) {
		const self = this.getWritable();
		self.__detail = typeof detail === "string" ? DETAIL_TYPE_TO_DETAIL[detail] : detail;
		return self;
	}
	/**
	* Sets the node style to the provided CSSText-like string. Set this property as you
	* would an HTMLElement style attribute to apply inline styles to the underlying DOM Element.
	*
	* @param style - CSSText to be applied to the underlying HTMLElement.
	*
	* @returns this TextNode.
	*/
	setStyle(style) {
		const self = this.getWritable();
		self.__style = style;
		return self;
	}
	/**
	* Applies the provided format to this TextNode if it's not present. Removes it if it's present.
	* The subscript and superscript formats are mutually exclusive.
	* Prefer using this method to turn specific formats on and off.
	*
	* @param type - TextFormatType to toggle.
	*
	* @returns this TextNode.
	*/
	toggleFormat(type) {
		const newFormat = toggleTextFormatType$1(this.getFormat(), type, null);
		return this.setFormat(newFormat);
	}
	/**
	* Toggles the directionless detail value of the node. Prefer using this method over setDetail.
	*
	* @returns this TextNode.
	*/
	toggleDirectionless() {
		const self = this.getWritable();
		self.__detail ^= IS_DIRECTIONLESS;
		return self;
	}
	/**
	* Toggles the unmergeable detail value of the node. Prefer using this method over setDetail.
	*
	* @returns this TextNode.
	*/
	toggleUnmergeable() {
		const self = this.getWritable();
		self.__detail ^= IS_UNMERGEABLE;
		return self;
	}
	/**
	* Sets the mode of the node.
	*
	* @returns this TextNode.
	*/
	setMode(type) {
		const mode = TEXT_MODE_TO_TYPE[type];
		if (this.__mode === mode) return this;
		const self = this.getWritable();
		self.__mode = mode;
		return self;
	}
	/**
	* Sets the text content of the node.
	*
	* @param text - the string to set as the text value of the node.
	*
	* @returns this TextNode.
	*/
	setTextContent(text) {
		if (this.__text === text) return this;
		const self = this.getWritable();
		self.__text = text;
		return self;
	}
	/**
	* Sets the current Lexical selection to be a RangeSelection with anchor and focus on this TextNode at the provided offsets.
	*
	* @param _anchorOffset - the offset at which the Selection anchor will be placed.
	* @param _focusOffset - the offset at which the Selection focus will be placed.
	*
	* @returns the new RangeSelection.
	*/
	select(_anchorOffset, _focusOffset) {
		errorOnReadOnly();
		let anchorOffset = _anchorOffset;
		let focusOffset = _focusOffset;
		const selection = $getSelection$1();
		const text = this.getTextContent();
		const key = this.__key;
		if (typeof text === "string") {
			const lastOffset = text.length;
			if (anchorOffset === void 0) anchorOffset = lastOffset;
			if (focusOffset === void 0) focusOffset = lastOffset;
		} else {
			anchorOffset = 0;
			focusOffset = 0;
		}
		if (!$isRangeSelection$1(selection)) return $internalMakeRangeSelection(key, anchorOffset, key, focusOffset, "text", "text");
		else {
			const compositionKey = $getCompositionKey();
			if (compositionKey === selection.anchor.key || compositionKey === selection.focus.key) $setCompositionKey$1(key);
			selection.setTextNodeRange(this, anchorOffset, this, focusOffset);
		}
		return selection;
	}
	selectStart() {
		return this.select(0, 0);
	}
	selectEnd() {
		const size = this.getTextContentSize();
		return this.select(size, size);
	}
	/**
	* Inserts the provided text into this TextNode at the provided offset, deleting the number of characters
	* specified. Can optionally calculate a new selection after the operation is complete.
	*
	* @param offset - the offset at which the splice operation should begin.
	* @param delCount - the number of characters to delete, starting from the offset.
	* @param newText - the text to insert into the TextNode at the offset.
	* @param moveSelection - optional, whether or not to move selection to the end of the inserted substring.
	*
	* @returns this TextNode.
	*/
	spliceText(offset, delCount, newText, moveSelection) {
		const writableSelf = this.getWritable();
		const text = writableSelf.__text;
		const handledTextLength = newText.length;
		let index = offset;
		if (index < 0) {
			index = handledTextLength + index;
			if (index < 0) index = 0;
		}
		const selection = $getSelection$1();
		if (moveSelection && $isRangeSelection$1(selection)) {
			const newOffset = offset + handledTextLength;
			selection.setTextNodeRange(writableSelf, newOffset, writableSelf, newOffset);
		}
		writableSelf.__text = text.slice(0, index) + newText + text.slice(index + delCount);
		return writableSelf;
	}
	/**
	* This method is meant to be overridden by TextNode subclasses to control the behavior of those nodes
	* when a user event would cause text to be inserted before them in the editor. If true, Lexical will attempt
	* to insert text into this node. If false, it will insert the text in a new sibling node.
	*
	* @returns true if text can be inserted before the node, false otherwise.
	*/
	canInsertTextBefore() {
		return true;
	}
	/**
	* This method is meant to be overridden by TextNode subclasses to control the behavior of those nodes
	* when a user event would cause text to be inserted after them in the editor. If true, Lexical will attempt
	* to insert text into this node. If false, it will insert the text in a new sibling node.
	*
	* @returns true if text can be inserted after the node, false otherwise.
	*/
	canInsertTextAfter() {
		return true;
	}
	/**
	* Splits this TextNode at the provided character offsets, forming new TextNodes from the substrings
	* formed by the split, and inserting those new TextNodes into the editor, replacing the one that was split.
	*
	* @param splitOffsets - rest param of the text content character offsets at which this node should be split.
	*
	* @returns an Array containing the newly-created TextNodes.
	*/
	splitText(...splitOffsets) {
		errorOnReadOnly();
		const self = this.getLatest();
		const textContent = self.getTextContent();
		if (textContent === "") return [];
		const key = self.__key;
		const compositionKey = $getCompositionKey();
		const textLength = textContent.length;
		splitOffsets.sort((a, b) => a - b);
		splitOffsets.push(textLength);
		const parts = [];
		const splitOffsetsLength = splitOffsets.length;
		for (let start = 0, offsetIndex = 0; start < textLength && offsetIndex <= splitOffsetsLength; offsetIndex++) {
			const end = splitOffsets[offsetIndex];
			if (end > start) {
				parts.push(textContent.slice(start, end));
				start = end;
			}
		}
		const partsLength = parts.length;
		if (partsLength === 1) return [self];
		const firstPart = parts[0];
		const parent = self.getParent();
		let writableNode;
		const format = self.getFormat();
		const style = self.getStyle();
		const detail = self.__detail;
		let hasReplacedSelf = false;
		let startTextPoint = null;
		let endTextPoint = null;
		const selection = $getSelection$1();
		if ($isRangeSelection$1(selection)) {
			const [startPoint, endPoint] = selection.isBackward() ? [selection.focus, selection.anchor] : [selection.anchor, selection.focus];
			if (startPoint.type === "text" && startPoint.key === key) startTextPoint = startPoint;
			if (endPoint.type === "text" && endPoint.key === key) endTextPoint = endPoint;
		}
		if (self.isSegmented()) {
			writableNode = $createTextNode$1(firstPart);
			writableNode.__format = format;
			writableNode.__style = style;
			writableNode.__detail = detail;
			writableNode.__state = $cloneNodeState(self, writableNode);
			hasReplacedSelf = true;
		} else writableNode = self.setTextContent(firstPart);
		const splitNodes = [writableNode];
		for (let i = 1; i < partsLength; i++) {
			const part = parts[i];
			const sibling = $createTextNode$1(part);
			sibling.__format = format;
			sibling.__style = style;
			sibling.__detail = detail;
			sibling.__state = $cloneNodeState(self, sibling);
			const siblingKey = sibling.__key;
			if (compositionKey === key) $setCompositionKey$1(siblingKey);
			splitNodes.push(sibling);
		}
		const originalStartOffset = startTextPoint ? startTextPoint.offset : null;
		const originalEndOffset = endTextPoint ? endTextPoint.offset : null;
		let startOffset = 0;
		for (const node of splitNodes) {
			if (!(startTextPoint || endTextPoint)) break;
			const endOffset = startOffset + node.getTextContentSize();
			if (startTextPoint !== null && originalStartOffset !== null && originalStartOffset <= endOffset && originalStartOffset >= startOffset) {
				startTextPoint.set(node.getKey(), originalStartOffset - startOffset, "text");
				if (originalStartOffset < endOffset) startTextPoint = null;
			}
			if (endTextPoint !== null && originalEndOffset !== null && originalEndOffset <= endOffset && originalEndOffset >= startOffset) {
				endTextPoint.set(node.getKey(), originalEndOffset - startOffset, "text");
				break;
			}
			startOffset = endOffset;
		}
		if (parent !== null) {
			internalMarkSiblingsAsDirty(this);
			const writableParent = parent.getWritable();
			const insertionIndex = this.getIndexWithinParent();
			if (hasReplacedSelf) {
				writableParent.splice(insertionIndex, 0, splitNodes);
				this.remove();
			} else writableParent.splice(insertionIndex, 1, splitNodes);
			if ($isRangeSelection$1(selection)) $updateElementSelectionOnCreateDeleteNode(selection, parent, insertionIndex, partsLength - 1);
		}
		return splitNodes;
	}
	/**
	* Merges the target TextNode into this TextNode, removing the target node.
	*
	* @param target - the TextNode to merge into this one.
	*
	* @returns this TextNode.
	*/
	mergeWithSibling(target) {
		const isBefore = target === this.getPreviousSibling();
		if (!isBefore && target !== this.getNextSibling()) formatDevErrorMessage(`mergeWithSibling: sibling must be a previous or next sibling`);
		const key = this.__key;
		const targetKey = target.__key;
		const text = this.__text;
		const textLength = text.length;
		if ($getCompositionKey() === targetKey) $setCompositionKey$1(key);
		const selection = $getSelection$1();
		if ($isRangeSelection$1(selection)) {
			const anchor = selection.anchor;
			const focus = selection.focus;
			if (anchor !== null && anchor.key === targetKey) adjustPointOffsetForMergedSibling(anchor, isBefore, key, target, textLength);
			if (focus !== null && focus.key === targetKey) adjustPointOffsetForMergedSibling(focus, isBefore, key, target, textLength);
		}
		const targetText = target.__text;
		const newText = isBefore ? targetText + text : text + targetText;
		this.setTextContent(newText);
		const writableSelf = this.getWritable();
		target.remove();
		return writableSelf;
	}
	/**
	* This method is meant to be overridden by TextNode subclasses to control the behavior of those nodes
	* when used with the registerLexicalTextEntity function. If you're using registerLexicalTextEntity, the
	* node class that you create and replace matched text with should return true from this method.
	*
	* @returns true if the node is to be treated as a "text entity", false otherwise.
	*/
	isTextEntity() {
		return false;
	}
};
function convertSpanElement(domNode) {
	const style = domNode.style;
	return {
		forChild: applyTextFormatFromStyle(style),
		node: null
	};
}
function convertBringAttentionToElement(domNode) {
	const b = domNode;
	const hasNormalFontWeight = b.style.fontWeight === "normal";
	return {
		forChild: applyTextFormatFromStyle(b.style, hasNormalFontWeight ? void 0 : "bold"),
		node: null
	};
}
const preParentCache = /* @__PURE__ */ new WeakMap();
function isNodePre(node) {
	if (!isHTMLElement$1(node)) return false;
	else if (node.nodeName === "PRE") return true;
	const whiteSpace = node.style.whiteSpace;
	return typeof whiteSpace === "string" && whiteSpace.startsWith("pre");
}
function findParentPreDOMNode(node) {
	let cached;
	let parent = node.parentNode;
	const visited = [node];
	while (parent !== null && (cached = preParentCache.get(parent)) === void 0 && !isNodePre(parent)) {
		visited.push(parent);
		parent = parent.parentNode;
	}
	const resultNode = cached === void 0 ? parent : cached;
	for (let i = 0; i < visited.length; i++) preParentCache.set(visited[i], resultNode);
	return resultNode;
}
function $convertTextDOMNode(domNode) {
	const domNode_ = domNode;
	if (!(domNode.parentElement !== null)) formatDevErrorMessage(`Expected parentElement of Text not to be null`);
	let textContent = domNode_.textContent || "";
	if (findParentPreDOMNode(domNode_) !== null) {
		const parts = textContent.split(/(\r?\n|\t)/);
		const nodes = [];
		const length = parts.length;
		for (let i = 0; i < length; i++) {
			const part = parts[i];
			if (part === "\n" || part === "\r\n") nodes.push($createLineBreakNode$1());
			else if (part === "	") nodes.push($createTabNode$1());
			else if (part !== "") nodes.push($createTextNode$1(part));
		}
		return { node: nodes };
	}
	textContent = textContent.replace(/\r/g, "").replace(/[ \t\n]+/g, " ");
	if (textContent === "") return { node: null };
	if (textContent[0] === " ") {
		let previousText = domNode_;
		let isStartOfLine = true;
		while (previousText !== null && (previousText = findTextInLine(previousText, false)) !== null) {
			const previousTextContent = previousText.textContent || "";
			if (previousTextContent.length > 0) {
				if (/[ \t\n]$/.test(previousTextContent)) textContent = textContent.slice(1);
				isStartOfLine = false;
				break;
			}
		}
		if (isStartOfLine) textContent = textContent.slice(1);
	}
	if (textContent[textContent.length - 1] === " ") {
		let nextText = domNode_;
		let isEndOfLine = true;
		while (nextText !== null && (nextText = findTextInLine(nextText, true)) !== null) if ((nextText.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
			isEndOfLine = false;
			break;
		}
		if (isEndOfLine) textContent = textContent.slice(0, textContent.length - 1);
	}
	if (textContent === "") return { node: null };
	return { node: $createTextNode$1(textContent) };
}
function findTextInLine(text, forward) {
	let node = text;
	while (true) {
		let sibling;
		while ((sibling = forward ? node.nextSibling : node.previousSibling) === null) {
			const parentElement = node.parentElement;
			if (parentElement === null) return null;
			node = parentElement;
		}
		node = sibling;
		if (isHTMLElement$1(node)) {
			const display = node.style.display;
			if (display === "" && !isInlineDomNode$1(node) || display !== "" && !display.startsWith("inline")) return null;
		}
		let descendant = node;
		while ((descendant = forward ? node.firstChild : node.lastChild) !== null) node = descendant;
		if (isDOMTextNode$1(node)) return node;
		else if (node.nodeName === "BR") return null;
	}
}
const nodeNameToTextFormat = {
	code: "code",
	em: "italic",
	i: "italic",
	mark: "highlight",
	s: "strikethrough",
	strong: "bold",
	sub: "subscript",
	sup: "superscript",
	u: "underline"
};
function convertTextFormatElement(domNode) {
	const format = nodeNameToTextFormat[domNode.nodeName.toLowerCase()];
	if (format === void 0) return { node: null };
	return {
		forChild: applyTextFormatFromStyle(domNode.style, format),
		node: null
	};
}
function $createTextNode$1(text = "") {
	return $applyNodeReplacement$1(new TextNode$1(text));
}
function $isTextNode$1(node) {
	return node instanceof TextNode$1;
}
function applyTextFormatFromStyle(style, shouldApply) {
	const fontWeight = style.fontWeight;
	const textDecoration = style.textDecoration.split(" ");
	const hasBoldFontWeight = fontWeight === "700" || fontWeight === "bold";
	const hasLinethroughTextDecoration = textDecoration.includes("line-through");
	const hasItalicFontStyle = style.fontStyle === "italic";
	const hasUnderlineTextDecoration = textDecoration.includes("underline");
	const verticalAlign = style.verticalAlign;
	return (lexicalNode) => {
		if (!$isTextNode$1(lexicalNode)) return lexicalNode;
		if (hasBoldFontWeight && !lexicalNode.hasFormat("bold")) lexicalNode.toggleFormat("bold");
		if (hasLinethroughTextDecoration && !lexicalNode.hasFormat("strikethrough")) lexicalNode.toggleFormat("strikethrough");
		if (hasItalicFontStyle && !lexicalNode.hasFormat("italic")) lexicalNode.toggleFormat("italic");
		if (hasUnderlineTextDecoration && !lexicalNode.hasFormat("underline")) lexicalNode.toggleFormat("underline");
		if (verticalAlign === "sub" && !lexicalNode.hasFormat("subscript")) lexicalNode.toggleFormat("subscript");
		if (verticalAlign === "super" && !lexicalNode.hasFormat("superscript")) lexicalNode.toggleFormat("superscript");
		if (shouldApply && !lexicalNode.hasFormat(shouldApply)) lexicalNode.toggleFormat(shouldApply);
		return lexicalNode;
	};
}
/** @noInheritDoc */
var TabNode$1 = class TabNode$1 extends TextNode$1 {
	static getType() {
		return "tab";
	}
	static clone(node) {
		return new TabNode$1(node.__key);
	}
	constructor(key) {
		super("	", key);
		this.__detail = IS_UNMERGEABLE;
	}
	static importDOM() {
		return null;
	}
	createDOM(config) {
		const dom = super.createDOM(config);
		const classNames = getCachedClassNameArray(config.theme, "tab");
		if (classNames !== void 0) dom.classList.add(...classNames);
		return dom;
	}
	static importJSON(serializedTabNode) {
		return $createTabNode$1().updateFromJSON(serializedTabNode);
	}
	setTextContent(text) {
		if (!(text === "	" || text === "")) formatDevErrorMessage(`TabNode does not support setTextContent`);
		return super.setTextContent("	");
	}
	spliceText(offset, delCount, newText, moveSelection) {
		if (!(newText === "" && delCount === 0 || newText === "	" && delCount === 1)) formatDevErrorMessage(`TabNode does not support spliceText`);
		return this;
	}
	setDetail(detail) {
		if (!(detail === IS_UNMERGEABLE)) formatDevErrorMessage(`TabNode does not support setDetail`);
		return this;
	}
	setMode(type) {
		if (!(type === "normal")) formatDevErrorMessage(`TabNode does not support setMode`);
		return this;
	}
	canInsertTextBefore() {
		return false;
	}
	canInsertTextAfter() {
		return false;
	}
};
function $createTabNode$1() {
	return $applyNodeReplacement$1(new TabNode$1());
}
function $isTabNode$1(node) {
	return node instanceof TabNode$1;
}
var Point = class {
	key;
	offset;
	type;
	_selection;
	constructor(key, offset, type) {
		Object.defineProperty(this, "_selection", {
			enumerable: false,
			writable: true
		});
		this._selection = null;
		this.key = key;
		this.offset = offset;
		this.type = type;
	}
	is(point) {
		return this.key === point.key && this.offset === point.offset && this.type === point.type;
	}
	isBefore(b) {
		if (this.key === b.key) return this.offset < b.offset;
		return $comparePointCaretNext$1($normalizeCaret$1($caretFromPoint$1(this, "next")), $normalizeCaret$1($caretFromPoint$1(b, "next"))) < 0;
	}
	getNode() {
		const key = this.key;
		const node = $getNodeByKey$1(key);
		if (node === null) formatDevErrorMessage(`Point.getNode: node not found`);
		return node;
	}
	set(key, offset, type, onlyIfChanged) {
		const selection = this._selection;
		const oldKey = this.key;
		if (onlyIfChanged && this.key === key && this.offset === offset && this.type === type) return;
		this.key = key;
		this.offset = offset;
		this.type = type;
		{
			const node = $getNodeByKey$1(key);
			if (!(type === "text" ? $isTextNode$1(node) : $isElementNode$1(node))) formatDevErrorMessage(`PointType.set: node with key ${key} is ${node ? node.__type : "[not found]"} and can not be used for a ${type} point`);
		}
		if (!isCurrentlyReadOnlyMode$1()) {
			if ($getCompositionKey() === oldKey) $setCompositionKey$1(key);
			if (selection !== null) {
				selection.setCachedNodes(null);
				selection.dirty = true;
			}
		}
	}
};
function $createPoint$1(key, offset, type) {
	return new Point(key, offset, type);
}
function selectPointOnNode(point, node) {
	let key = node.__key;
	let offset = point.offset;
	let type = "element";
	if ($isTextNode$1(node)) {
		type = "text";
		const textContentLength = node.getTextContentSize();
		if (offset > textContentLength) offset = textContentLength;
	} else if (!$isElementNode$1(node)) {
		const nextSibling = node.getNextSibling();
		if ($isTextNode$1(nextSibling)) {
			key = nextSibling.__key;
			offset = 0;
			type = "text";
		} else {
			const parentNode = node.getParent();
			if (parentNode) {
				key = parentNode.__key;
				offset = node.getIndexWithinParent() + 1;
			}
		}
	}
	point.set(key, offset, type);
}
function $moveSelectionPointToEnd(point, node) {
	if ($isElementNode$1(node)) {
		const lastNode = node.getLastDescendant();
		if ($isElementNode$1(lastNode) || $isTextNode$1(lastNode)) selectPointOnNode(point, lastNode);
		else selectPointOnNode(point, node);
	} else selectPointOnNode(point, node);
}
function $transferStartingElementPointToTextPoint(start, end, format, style) {
	const element = start.getNode();
	const placementNode = element.getChildAtIndex(start.offset);
	const textNode = $createTextNode$1();
	textNode.setFormat(format);
	textNode.setStyle(style);
	if ($isParagraphNode$1(placementNode)) placementNode.splice(0, 0, [textNode]);
	else {
		const target = $isRootNode$1(element) ? $createParagraphNode$1().append(textNode) : textNode;
		if (placementNode === null) element.append(target);
		else placementNode.insertBefore(target);
	}
	if (start.is(end)) end.set(textNode.__key, 0, "text");
	start.set(textNode.__key, 0, "text");
}
var NodeSelection = class NodeSelection {
	_nodes;
	_cachedNodes;
	dirty;
	constructor(objects) {
		this._cachedNodes = null;
		this._nodes = objects;
		this.dirty = false;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(nodes) {
		this._cachedNodes = nodes;
	}
	is(selection) {
		if (!$isNodeSelection$1(selection)) return false;
		const a = this._nodes;
		const b = selection._nodes;
		return a.size === b.size && Array.from(a).every((key) => b.has(key));
	}
	isCollapsed() {
		return false;
	}
	isBackward() {
		return false;
	}
	getStartEndPoints() {
		return null;
	}
	add(key) {
		this.dirty = true;
		this._nodes.add(key);
		this._cachedNodes = null;
	}
	delete(key) {
		this.dirty = true;
		this._nodes.delete(key);
		this._cachedNodes = null;
	}
	clear() {
		this.dirty = true;
		this._nodes.clear();
		this._cachedNodes = null;
	}
	has(key) {
		return this._nodes.has(key);
	}
	clone() {
		return new NodeSelection(new Set(this._nodes));
	}
	extract() {
		return this.getNodes();
	}
	insertRawText(text) {}
	insertText() {}
	insertNodes(nodes) {
		const selectedNodes = this.getNodes();
		const selectedNodesLength = selectedNodes.length;
		const lastSelectedNode = selectedNodes[selectedNodesLength - 1];
		let selectionAtEnd;
		if ($isTextNode$1(lastSelectedNode)) selectionAtEnd = lastSelectedNode.select();
		else {
			const index = lastSelectedNode.getIndexWithinParent() + 1;
			selectionAtEnd = lastSelectedNode.getParentOrThrow().select(index, index);
		}
		selectionAtEnd.insertNodes(nodes);
		for (let i = 0; i < selectedNodesLength; i++) selectedNodes[i].remove();
	}
	getNodes() {
		const cachedNodes = this._cachedNodes;
		if (cachedNodes !== null) return cachedNodes;
		const objects = this._nodes;
		const nodes = [];
		for (const object of objects) {
			const node = $getNodeByKey$1(object);
			if (node !== null) nodes.push(node);
		}
		if (!isCurrentlyReadOnlyMode$1()) this._cachedNodes = nodes;
		return nodes;
	}
	getTextContent() {
		const nodes = this.getNodes();
		let textContent = "";
		for (let i = 0; i < nodes.length; i++) textContent += nodes[i].getTextContent();
		return textContent;
	}
	/**
	* Remove all nodes in the NodeSelection. If there were any nodes,
	* replace the selection with a new RangeSelection at the previous
	* location of the first node.
	*/
	deleteNodes() {
		const nodes = this.getNodes();
		if (($getSelection$1() || $getPreviousSelection$1()) === this && nodes[0]) {
			const firstCaret = $getSiblingCaret$1(nodes[0], "next");
			$setSelectionFromCaretRange$1($getCaretRange$1(firstCaret, firstCaret));
		}
		for (const node of nodes) node.remove();
	}
};
function $isRangeSelection$1(x) {
	return x instanceof RangeSelection;
}
var RangeSelection = class RangeSelection {
	format;
	style;
	anchor;
	focus;
	_cachedNodes;
	dirty;
	constructor(anchor, focus, format, style) {
		this.anchor = anchor;
		this.focus = focus;
		anchor._selection = this;
		focus._selection = this;
		this._cachedNodes = null;
		this.format = format;
		this.style = style;
		this.dirty = false;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(nodes) {
		this._cachedNodes = nodes;
	}
	/**
	* Used to check if the provided selections is equal to this one by value,
	* including anchor, focus, format, and style properties.
	* @param selection - the Selection to compare this one to.
	* @returns true if the Selections are equal, false otherwise.
	*/
	is(selection) {
		if (!$isRangeSelection$1(selection)) return false;
		return this.anchor.is(selection.anchor) && this.focus.is(selection.focus) && this.format === selection.format && this.style === selection.style;
	}
	/**
	* Returns whether the Selection is "collapsed", meaning the anchor and focus are
	* the same node and have the same offset.
	*
	* @returns true if the Selection is collapsed, false otherwise.
	*/
	isCollapsed() {
		return this.anchor.is(this.focus);
	}
	/**
	* Gets all the nodes in the Selection. Uses caching to make it generally suitable
	* for use in hot paths.
	*
	* See also the {@link CaretRange} APIs (starting with
	* {@link $caretRangeFromSelection}), which are likely to provide a better
	* foundation for any operation where partial selection is relevant
	* (e.g. the anchor or focus are inside an ElementNode and TextNode)
	*
	* @returns an Array containing all the nodes in the Selection
	*/
	getNodes() {
		const cachedNodes = this._cachedNodes;
		if (cachedNodes !== null) return cachedNodes;
		const nodes = $getNodesFromCaretRangeCompat($getCaretRangeInDirection$1($caretRangeFromSelection$1(this), "next"));
		if (this.isCollapsed() && nodes.length > 1) formatDevErrorMessage(`RangeSelection.getNodes() returned ${String(nodes.length)} > 1 nodes in a collapsed selection`);
		if (!isCurrentlyReadOnlyMode$1()) this._cachedNodes = nodes;
		return nodes;
	}
	/**
	* Sets this Selection to be of type "text" at the provided anchor and focus values.
	*
	* @param anchorNode - the anchor node to set on the Selection
	* @param anchorOffset - the offset to set on the Selection
	* @param focusNode - the focus node to set on the Selection
	* @param focusOffset - the focus offset to set on the Selection
	*/
	setTextNodeRange(anchorNode, anchorOffset, focusNode, focusOffset) {
		this.anchor.set(anchorNode.__key, anchorOffset, "text");
		this.focus.set(focusNode.__key, focusOffset, "text");
	}
	/**
	* Gets the (plain) text content of all the nodes in the selection.
	*
	* @returns a string representing the text content of all the nodes in the Selection
	*/
	getTextContent() {
		const nodes = this.getNodes();
		if (nodes.length === 0) return "";
		const firstNode = nodes[0];
		const lastNode = nodes[nodes.length - 1];
		const anchor = this.anchor;
		const focus = this.focus;
		const isBefore = anchor.isBefore(focus);
		const [anchorOffset, focusOffset] = $getCharacterOffsets$1(this);
		let textContent = "";
		let prevWasElement = true;
		for (let i = 0; i < nodes.length; i++) {
			const node = nodes[i];
			if ($isElementNode$1(node) && !node.isInline()) {
				if (!prevWasElement) textContent += "\n";
				if (node.isEmpty()) prevWasElement = false;
				else prevWasElement = true;
			} else {
				prevWasElement = false;
				if ($isTextNode$1(node)) {
					let text = node.getTextContent();
					if (node === firstNode) if (node === lastNode) {
						if (anchor.type !== "element" || focus.type !== "element" || focus.offset === anchor.offset) text = anchorOffset < focusOffset ? text.slice(anchorOffset, focusOffset) : text.slice(focusOffset, anchorOffset);
					} else text = isBefore ? text.slice(anchorOffset) : text.slice(focusOffset);
					else if (node === lastNode) text = isBefore ? text.slice(0, focusOffset) : text.slice(0, anchorOffset);
					textContent += text;
				} else if (($isDecoratorNode$1(node) || $isLineBreakNode$1(node)) && (node !== lastNode || !this.isCollapsed())) textContent += node.getTextContent();
			}
		}
		return textContent;
	}
	/**
	* Attempts to map a DOM selection range onto this Lexical Selection,
	* setting the anchor, focus, and type accordingly
	*
	* @param range a DOM Selection range conforming to the StaticRange interface.
	*/
	applyDOMRange(range) {
		const editor = getActiveEditor();
		const lastSelection = editor.getEditorState()._selection;
		const resolvedSelectionPoints = $internalResolveSelectionPoints(range.startContainer, range.startOffset, range.endContainer, range.endOffset, editor, lastSelection);
		if (resolvedSelectionPoints === null) return;
		const [anchorPoint, focusPoint] = resolvedSelectionPoints;
		this.anchor.set(anchorPoint.key, anchorPoint.offset, anchorPoint.type, true);
		this.focus.set(focusPoint.key, focusPoint.offset, focusPoint.type, true);
		$normalizeSelection(this);
	}
	/**
	* Creates a new RangeSelection, copying over all the property values from this one.
	*
	* @returns a new RangeSelection with the same property values as this one.
	*/
	clone() {
		const anchor = this.anchor;
		const focus = this.focus;
		return new RangeSelection($createPoint$1(anchor.key, anchor.offset, anchor.type), $createPoint$1(focus.key, focus.offset, focus.type), this.format, this.style);
	}
	/**
	* Toggles the provided format on all the TextNodes in the Selection.
	*
	* @param format a string TextFormatType to toggle on the TextNodes in the selection
	*/
	toggleFormat(format) {
		this.format = toggleTextFormatType$1(this.format, format, null);
		this.dirty = true;
	}
	/**
	* Sets the value of the format property on the Selection
	*
	* @param format - the format to set at the value of the format property.
	*/
	setFormat(format) {
		this.format = format;
		this.dirty = true;
	}
	/**
	* Sets the value of the style property on the Selection
	*
	* @param style - the style to set at the value of the style property.
	*/
	setStyle(style) {
		this.style = style;
		this.dirty = true;
	}
	/**
	* Returns whether the provided TextFormatType is present on the Selection. This will be true if any node in the Selection
	* has the specified format.
	*
	* @param type the TextFormatType to check for.
	* @returns true if the provided format is currently toggled on on the Selection, false otherwise.
	*/
	hasFormat(type) {
		const formatFlag = TEXT_TYPE_TO_FORMAT$1[type];
		return (this.format & formatFlag) !== 0;
	}
	/**
	* Attempts to insert the provided text into the EditorState at the current Selection.
	* converts tabs, newlines, and carriage returns into LexicalNodes.
	*
	* @param text the text to insert into the Selection
	*/
	insertRawText(text) {
		const parts = text.split(/(\r?\n|\t)/);
		const nodes = [];
		const length = parts.length;
		for (let i = 0; i < length; i++) {
			const part = parts[i];
			if (part === "\n" || part === "\r\n") nodes.push($createLineBreakNode$1());
			else if (part === "	") nodes.push($createTabNode$1());
			else nodes.push($createTextNode$1(part));
		}
		this.insertNodes(nodes);
	}
	/**
	* Insert the provided text into the EditorState at the current Selection.
	*
	* @param text the text to insert into the Selection
	*/
	insertText(text) {
		const anchor = this.anchor;
		const focus = this.focus;
		const format = this.format;
		const style = this.style;
		let firstPoint = anchor;
		let endPoint = focus;
		if (!this.isCollapsed() && focus.isBefore(anchor)) {
			firstPoint = focus;
			endPoint = anchor;
		}
		if (firstPoint.type === "element") $transferStartingElementPointToTextPoint(firstPoint, endPoint, format, style);
		if (endPoint.type === "element") $setPointFromCaret$1(endPoint, $normalizeCaret$1($caretFromPoint$1(endPoint, "next")));
		const startOffset = firstPoint.offset;
		let endOffset = endPoint.offset;
		const selectedNodes = this.getNodes();
		const selectedNodesLength = selectedNodes.length;
		let firstNode = selectedNodes[0];
		if (!$isTextNode$1(firstNode)) formatDevErrorMessage(`insertText: first node is not a text node`);
		const firstNodeTextLength = firstNode.getTextContent().length;
		const firstNodeParent = firstNode.getParentOrThrow();
		let lastNode = selectedNodes[selectedNodesLength - 1];
		if (selectedNodesLength === 1 && endPoint.type === "element") {
			endOffset = firstNodeTextLength;
			endPoint.set(firstPoint.key, endOffset, "text");
		}
		if (this.isCollapsed() && startOffset === firstNodeTextLength && ($isTokenOrSegmented$1(firstNode) || !firstNode.canInsertTextAfter() || !firstNodeParent.canInsertTextAfter() && firstNode.getNextSibling() === null)) {
			let nextSibling = firstNode.getNextSibling();
			if (!$isTextNode$1(nextSibling) || !nextSibling.canInsertTextBefore() || $isTokenOrSegmented$1(nextSibling)) {
				nextSibling = $createTextNode$1();
				nextSibling.setFormat(format);
				nextSibling.setStyle(style);
				if (!firstNodeParent.canInsertTextAfter()) firstNodeParent.insertAfter(nextSibling);
				else firstNode.insertAfter(nextSibling);
			}
			nextSibling.select(0, 0);
			firstNode = nextSibling;
			if (text !== "") {
				this.insertText(text);
				return;
			}
		} else if (this.isCollapsed() && startOffset === 0 && ($isTokenOrSegmented$1(firstNode) || !firstNode.canInsertTextBefore() || !firstNodeParent.canInsertTextBefore() && firstNode.getPreviousSibling() === null)) {
			let prevSibling = firstNode.getPreviousSibling();
			if (!$isTextNode$1(prevSibling) || $isTokenOrSegmented$1(prevSibling)) {
				prevSibling = $createTextNode$1();
				prevSibling.setFormat(format);
				if (!firstNodeParent.canInsertTextBefore()) firstNodeParent.insertBefore(prevSibling);
				else firstNode.insertBefore(prevSibling);
			}
			prevSibling.select();
			firstNode = prevSibling;
			if (text !== "") {
				this.insertText(text);
				return;
			}
		} else if (firstNode.isSegmented() && startOffset !== firstNodeTextLength) {
			const textNode = $createTextNode$1(firstNode.getTextContent());
			textNode.setFormat(format);
			firstNode.replace(textNode);
			firstNode = textNode;
		} else if (!this.isCollapsed() && text !== "") {
			const lastNodeParent = lastNode.getParent();
			if (!firstNodeParent.canInsertTextBefore() || !firstNodeParent.canInsertTextAfter() || $isElementNode$1(lastNodeParent) && (!lastNodeParent.canInsertTextBefore() || !lastNodeParent.canInsertTextAfter())) {
				this.insertText("");
				$normalizeSelectionPointsForBoundaries(this.anchor, this.focus);
				this.insertText(text);
				return;
			}
		}
		if (selectedNodesLength === 1) {
			if ($isTokenOrTab$1(firstNode)) {
				const textNode = $createTextNode$1(text);
				textNode.select();
				firstNode.replace(textNode);
				return;
			}
			const firstNodeFormat = firstNode.getFormat();
			const firstNodeStyle = firstNode.getStyle();
			if (startOffset === endOffset && (firstNodeFormat !== format || firstNodeStyle !== style)) if (firstNode.getTextContent() === "") {
				firstNode.setFormat(format);
				firstNode.setStyle(style);
			} else {
				const textNode = $createTextNode$1(text);
				textNode.setFormat(format);
				textNode.setStyle(style);
				textNode.select();
				if (startOffset === 0) firstNode.insertBefore(textNode, false);
				else {
					const [targetNode] = firstNode.splitText(startOffset);
					targetNode.insertAfter(textNode, false);
				}
				if (textNode.isComposing() && this.anchor.type === "text") this.anchor.offset -= text.length;
				return;
			}
			else if ($isTabNode$1(firstNode)) {
				const textNode = $createTextNode$1(text);
				textNode.setFormat(format);
				textNode.setStyle(style);
				textNode.select();
				firstNode.replace(textNode);
				return;
			}
			const delCount = endOffset - startOffset;
			firstNode = firstNode.spliceText(startOffset, delCount, text, true);
			if (firstNode.getTextContent() === "") firstNode.remove();
			else if (this.anchor.type === "text") {
				this.format = firstNodeFormat;
				this.style = firstNodeStyle;
				if (firstNode.isComposing()) this.anchor.offset -= text.length;
			}
		} else {
			const markedNodeKeysForKeep = /* @__PURE__ */ new Set([...firstNode.getParentKeys(), ...lastNode.getParentKeys()]);
			const firstElement = $isElementNode$1(firstNode) ? firstNode : firstNode.getParentOrThrow();
			let lastElement = $isElementNode$1(lastNode) ? lastNode : lastNode.getParentOrThrow();
			let lastElementChild = lastNode;
			if (!firstElement.is(lastElement) && lastElement.isInline()) do {
				lastElementChild = lastElement;
				lastElement = lastElement.getParentOrThrow();
			} while (lastElement.isInline());
			if (endPoint.type === "text" && (endOffset !== 0 || lastNode.getTextContent() === "") || endPoint.type === "element" && lastNode.getIndexWithinParent() < endOffset) if ($isTextNode$1(lastNode) && !$isTokenOrTab$1(lastNode) && endOffset !== lastNode.getTextContentSize()) {
				if (lastNode.isSegmented()) {
					const textNode = $createTextNode$1(lastNode.getTextContent());
					lastNode.replace(textNode);
					lastNode = textNode;
				}
				if (!$isRootNode$1(endPoint.getNode()) && endPoint.type === "text") lastNode = lastNode.spliceText(0, endOffset, "");
				markedNodeKeysForKeep.add(lastNode.__key);
			} else {
				const lastNodeParent = lastNode.getParentOrThrow();
				if (!lastNodeParent.canBeEmpty() && lastNodeParent.getChildrenSize() === 1) lastNodeParent.remove();
				else lastNode.remove();
			}
			else markedNodeKeysForKeep.add(lastNode.__key);
			const lastNodeChildren = lastElement.getChildren();
			const selectedNodesSet = new Set(selectedNodes);
			const firstAndLastElementsAreEqual = firstElement.is(lastElement);
			const insertionTarget = firstElement.isInline() && firstNode.getNextSibling() === null ? firstElement : firstNode;
			for (let i = lastNodeChildren.length - 1; i >= 0; i--) {
				const lastNodeChild = lastNodeChildren[i];
				if (lastNodeChild.is(firstNode) || $isElementNode$1(lastNodeChild) && lastNodeChild.isParentOf(firstNode)) break;
				if (lastNodeChild.isAttached()) if (!selectedNodesSet.has(lastNodeChild) || lastNodeChild.is(lastElementChild)) {
					if (!firstAndLastElementsAreEqual) insertionTarget.insertAfter(lastNodeChild, false);
				} else lastNodeChild.remove();
			}
			if (!firstAndLastElementsAreEqual) {
				let parent = lastElement;
				let lastRemovedParent = null;
				while (parent !== null) {
					const children = parent.getChildren();
					const childrenLength = children.length;
					if (childrenLength === 0 || children[childrenLength - 1].is(lastRemovedParent)) {
						markedNodeKeysForKeep.delete(parent.__key);
						lastRemovedParent = parent;
					}
					parent = parent.getParent();
				}
			}
			if (!$isTokenOrTab$1(firstNode)) {
				firstNode = firstNode.spliceText(startOffset, firstNodeTextLength - startOffset, text, true);
				if (firstNode.getTextContent() === "") firstNode.remove();
				else if (this.anchor.type === "text") {
					this.format = firstNode.getFormat();
					this.style = firstNode.getStyle();
					if (firstNode.isComposing()) this.anchor.offset -= text.length;
				}
			} else if (startOffset === firstNodeTextLength) firstNode.select();
			else {
				const textNode = $createTextNode$1(text);
				textNode.select();
				firstNode.replace(textNode);
			}
			for (let i = 1; i < selectedNodesLength; i++) {
				const selectedNode = selectedNodes[i];
				const key = selectedNode.__key;
				if (!markedNodeKeysForKeep.has(key)) selectedNode.remove();
			}
		}
	}
	/**
	* Removes the text in the Selection, adjusting the EditorState accordingly.
	*/
	removeText() {
		const isCurrentSelection = $getSelection$1() === this;
		const newRange = $removeTextFromCaretRange$1($caretRangeFromSelection$1(this));
		$updateRangeSelectionFromCaretRange$1(this, newRange);
		if (isCurrentSelection && $getSelection$1() !== this) $setSelection$1(this);
	}
	/**
	* Applies the provided format to the TextNodes in the Selection, splitting or
	* merging nodes as necessary.
	*
	* @param formatType the format type to apply to the nodes in the Selection.
	* @param alignWithFormat a 32-bit integer representing formatting flags to align with.
	*/
	formatText(formatType, alignWithFormat = null) {
		if (this.isCollapsed()) {
			this.toggleFormat(formatType);
			$setCompositionKey$1(null);
			return;
		}
		const selectedNodes = this.getNodes();
		const selectedTextNodes = [];
		for (const selectedNode of selectedNodes) if ($isTextNode$1(selectedNode)) selectedTextNodes.push(selectedNode);
		const applyFormatToElements = (alignWith) => {
			selectedNodes.forEach((node) => {
				if ($isElementNode$1(node)) {
					const newFormat = node.getFormatFlags(formatType, alignWith);
					node.setTextFormat(newFormat);
				}
			});
		};
		const selectedTextNodesLength = selectedTextNodes.length;
		if (selectedTextNodesLength === 0) {
			this.toggleFormat(formatType);
			$setCompositionKey$1(null);
			applyFormatToElements(alignWithFormat);
			return;
		}
		const anchor = this.anchor;
		const focus = this.focus;
		const isBackward = this.isBackward();
		const startPoint = isBackward ? focus : anchor;
		const endPoint = isBackward ? anchor : focus;
		let firstIndex = 0;
		let firstNode = selectedTextNodes[0];
		let startOffset = startPoint.type === "element" ? 0 : startPoint.offset;
		if (startPoint.type === "text" && startOffset === firstNode.getTextContentSize()) {
			firstIndex = 1;
			firstNode = selectedTextNodes[1];
			startOffset = 0;
		}
		if (firstNode == null) return;
		const firstNextFormat = firstNode.getFormatFlags(formatType, alignWithFormat);
		applyFormatToElements(firstNextFormat);
		const lastIndex = selectedTextNodesLength - 1;
		let lastNode = selectedTextNodes[lastIndex];
		const endOffset = endPoint.type === "text" ? endPoint.offset : lastNode.getTextContentSize();
		if (firstNode.is(lastNode)) {
			if (startOffset === endOffset) return;
			if ($isTokenOrSegmented$1(firstNode) || startOffset === 0 && endOffset === firstNode.getTextContentSize()) firstNode.setFormat(firstNextFormat);
			else {
				const splitNodes = firstNode.splitText(startOffset, endOffset);
				const replacement = startOffset === 0 ? splitNodes[0] : splitNodes[1];
				replacement.setFormat(firstNextFormat);
				if (startPoint.type === "text") startPoint.set(replacement.__key, 0, "text");
				if (endPoint.type === "text") endPoint.set(replacement.__key, endOffset - startOffset, "text");
			}
			this.format = firstNextFormat;
			return;
		}
		if (startOffset !== 0 && !$isTokenOrSegmented$1(firstNode)) {
			[, firstNode] = firstNode.splitText(startOffset);
			startOffset = 0;
		}
		firstNode.setFormat(firstNextFormat);
		const lastNextFormat = lastNode.getFormatFlags(formatType, firstNextFormat);
		if (endOffset > 0) {
			if (endOffset !== lastNode.getTextContentSize() && !$isTokenOrSegmented$1(lastNode)) [lastNode] = lastNode.splitText(endOffset);
			lastNode.setFormat(lastNextFormat);
		}
		for (let i = firstIndex + 1; i < lastIndex; i++) {
			const textNode = selectedTextNodes[i];
			const nextFormat = textNode.getFormatFlags(formatType, lastNextFormat);
			textNode.setFormat(nextFormat);
		}
		if (startPoint.type === "text") startPoint.set(firstNode.__key, startOffset, "text");
		if (endPoint.type === "text") endPoint.set(lastNode.__key, endOffset, "text");
		this.format = firstNextFormat | lastNextFormat;
	}
	/**
	* Attempts to "intelligently" insert an arbitrary list of Lexical nodes into the EditorState at the
	* current Selection according to a set of heuristics that determine how surrounding nodes
	* should be changed, replaced, or moved to accommodate the incoming ones.
	*
	* @param nodes - the nodes to insert
	*/
	insertNodes(nodes) {
		if (nodes.length === 0) return;
		if (!this.isCollapsed()) this.removeText();
		if (this.anchor.key === "root") {
			this.insertParagraph();
			const selection = $getSelection$1();
			if (!$isRangeSelection$1(selection)) formatDevErrorMessage(`Expected RangeSelection after insertParagraph`);
			return selection.insertNodes(nodes);
		}
		const firstNode = (this.isBackward() ? this.focus : this.anchor).getNode();
		const firstBlock = $findMatchingParent$1(firstNode, INTERNAL_$isBlock$1);
		const last = nodes[nodes.length - 1];
		if ($isElementNode$1(firstBlock) && "__language" in firstBlock) {
			if ("__language" in nodes[0]) this.insertText(nodes[0].getTextContent());
			else {
				const index = $removeTextAndSplitBlock(this);
				firstBlock.splice(index, 0, nodes);
				last.selectEnd();
			}
			return;
		}
		const notInline = (node) => ($isElementNode$1(node) || $isDecoratorNode$1(node)) && !node.isInline();
		if (!nodes.some(notInline)) {
			if (!$isElementNode$1(firstBlock)) formatDevErrorMessage(`Expected node ${firstNode.constructor.name} of type ${firstNode.getType()} to have a block ElementNode ancestor`);
			const index = $removeTextAndSplitBlock(this);
			firstBlock.splice(index, 0, nodes);
			last.selectEnd();
			return;
		}
		const blocksParent = $wrapInlineNodes(nodes);
		const nodeToSelect = blocksParent.getLastDescendant();
		const blocks = blocksParent.getChildren();
		const isMergeable = (node) => $isElementNode$1(node) && INTERNAL_$isBlock$1(node) && !node.isEmpty() && $isElementNode$1(firstBlock) && (!firstBlock.isEmpty() || firstBlock.canMergeWhenEmpty());
		const insertedParagraph = !$isElementNode$1(firstBlock) || !firstBlock.isEmpty() ? this.insertParagraph() : null;
		const lastToInsert = blocks[blocks.length - 1];
		let firstToInsert = blocks[0];
		if (isMergeable(firstToInsert)) {
			if (!$isElementNode$1(firstBlock)) formatDevErrorMessage(`Expected node ${firstNode.constructor.name} of type ${firstNode.getType()} to have a block ElementNode ancestor`);
			firstBlock.append(...firstToInsert.getChildren());
			firstToInsert = blocks[1];
		}
		if (firstToInsert) {
			if (!(firstBlock !== null)) formatDevErrorMessage(`Expected node ${firstNode.constructor.name} of type ${firstNode.getType()} to have a block ancestor`);
			insertRangeAfter(firstBlock, firstToInsert);
		}
		const lastInsertedBlock = $findMatchingParent$1(nodeToSelect, INTERNAL_$isBlock$1);
		if (insertedParagraph && $isElementNode$1(lastInsertedBlock) && (insertedParagraph.canMergeWhenEmpty() || INTERNAL_$isBlock$1(lastToInsert))) {
			lastInsertedBlock.append(...insertedParagraph.getChildren());
			insertedParagraph.remove();
		}
		if ($isElementNode$1(firstBlock) && firstBlock.isEmpty()) firstBlock.remove();
		nodeToSelect.selectEnd();
		const lastChild = $isElementNode$1(firstBlock) ? firstBlock.getLastChild() : null;
		if ($isLineBreakNode$1(lastChild) && lastInsertedBlock !== firstBlock) lastChild.remove();
	}
	/**
	* Inserts a new ParagraphNode into the EditorState at the current Selection
	*
	* @returns the newly inserted node.
	*/
	insertParagraph() {
		if (this.anchor.key === "root") {
			const paragraph = $createParagraphNode$1();
			$getRoot$1().splice(this.anchor.offset, 0, [paragraph]);
			paragraph.select();
			return paragraph;
		}
		const index = $removeTextAndSplitBlock(this);
		const block = $findMatchingParent$1(this.anchor.getNode(), INTERNAL_$isBlock$1);
		if (!$isElementNode$1(block)) formatDevErrorMessage(`Expected ancestor to be a block ElementNode`);
		const firstToAppend = block.getChildAtIndex(index);
		const nodesToInsert = firstToAppend ? [firstToAppend, ...firstToAppend.getNextSiblings()] : [];
		const newBlock = block.insertNewAfter(this, false);
		if (newBlock) {
			newBlock.append(...nodesToInsert);
			newBlock.selectStart();
			return newBlock;
		}
		return null;
	}
	/**
	* Inserts a logical linebreak, which may be a new LineBreakNode or a new ParagraphNode, into the EditorState at the
	* current Selection.
	*/
	insertLineBreak(selectStart) {
		const lineBreak = $createLineBreakNode$1();
		this.insertNodes([lineBreak]);
		if (selectStart) {
			const parent = lineBreak.getParentOrThrow();
			const index = lineBreak.getIndexWithinParent();
			parent.select(index, index);
		}
	}
	/**
	* Extracts the nodes in the Selection, splitting nodes where necessary
	* to get offset-level precision.
	*
	* @returns The nodes in the Selection
	*/
	extract() {
		const selectedNodes = [...this.getNodes()];
		const selectedNodesLength = selectedNodes.length;
		let firstNode = selectedNodes[0];
		let lastNode = selectedNodes[selectedNodesLength - 1];
		const [anchorOffset, focusOffset] = $getCharacterOffsets$1(this);
		const isBackward = this.isBackward();
		const [startPoint, endPoint] = isBackward ? [this.focus, this.anchor] : [this.anchor, this.focus];
		const [startOffset, endOffset] = isBackward ? [focusOffset, anchorOffset] : [anchorOffset, focusOffset];
		if (selectedNodesLength === 0) return [];
		else if (selectedNodesLength === 1) {
			if ($isTextNode$1(firstNode) && !this.isCollapsed()) {
				const splitNodes = firstNode.splitText(startOffset, endOffset);
				const node = startOffset === 0 ? splitNodes[0] : splitNodes[1];
				if (node) {
					startPoint.set(node.getKey(), 0, "text");
					endPoint.set(node.getKey(), node.getTextContentSize(), "text");
					return [node];
				}
				return [];
			}
			return [firstNode];
		}
		if ($isTextNode$1(firstNode)) {
			if (startOffset === firstNode.getTextContentSize()) selectedNodes.shift();
			else if (startOffset !== 0) {
				[, firstNode] = firstNode.splitText(startOffset);
				selectedNodes[0] = firstNode;
				startPoint.set(firstNode.getKey(), 0, "text");
			}
		}
		if ($isTextNode$1(lastNode)) {
			const lastNodeTextLength = lastNode.getTextContent().length;
			if (endOffset === 0) selectedNodes.pop();
			else if (endOffset !== lastNodeTextLength) {
				[lastNode] = lastNode.splitText(endOffset);
				selectedNodes[selectedNodes.length - 1] = lastNode;
				endPoint.set(lastNode.getKey(), lastNode.getTextContentSize(), "text");
			}
		}
		return selectedNodes;
	}
	/**
	* Modifies the Selection according to the parameters and a set of heuristics that account for
	* various node types. Can be used to safely move or extend selection by one logical "unit" without
	* dealing explicitly with all the possible node types.
	*
	* @param alter the type of modification to perform
	* @param isBackward whether or not selection is backwards
	* @param granularity the granularity at which to apply the modification
	*/
	modify(alter, isBackward, granularity) {
		if ($modifySelectionAroundDecoratorsAndBlocks(this, alter, isBackward, granularity)) return;
		const collapse = alter === "move";
		const editor = getActiveEditor();
		const domSelection = getDOMSelection$1(getWindow(editor));
		if (!domSelection) return;
		const blockCursorElement = editor._blockCursorElement;
		const rootElement = editor._rootElement;
		const focusNode = this.focus.getNode();
		if (rootElement !== null && blockCursorElement !== null && $isElementNode$1(focusNode) && !focusNode.isInline() && !focusNode.canBeEmpty()) removeDOMBlockCursorElement(blockCursorElement, editor, rootElement);
		if (this.dirty) {
			let nextAnchorDOM = getElementByKeyOrThrow(editor, this.anchor.key);
			let nextFocusDOM = getElementByKeyOrThrow(editor, this.focus.key);
			if (this.anchor.type === "text") nextAnchorDOM = getDOMTextNode$1(nextAnchorDOM);
			if (this.focus.type === "text") nextFocusDOM = getDOMTextNode$1(nextFocusDOM);
			if (nextAnchorDOM && nextFocusDOM) setDOMSelectionBaseAndExtent(domSelection, nextAnchorDOM, this.anchor.offset, nextFocusDOM, this.focus.offset);
		}
		moveNativeSelection(domSelection, alter, isBackward ? "backward" : "forward", granularity);
		if (domSelection.rangeCount > 0) {
			const range = domSelection.getRangeAt(0);
			const anchorNode = this.anchor.getNode();
			const root = $isRootNode$1(anchorNode) ? anchorNode : $getNearestRootOrShadowRoot$1(anchorNode);
			this.applyDOMRange(range);
			this.dirty = true;
			if (!collapse) {
				const nodes = this.getNodes();
				const validNodes = [];
				let shrinkSelection = false;
				for (let i = 0; i < nodes.length; i++) {
					const nextNode = nodes[i];
					if ($hasAncestor$1(nextNode, root)) validNodes.push(nextNode);
					else shrinkSelection = true;
				}
				if (shrinkSelection && validNodes.length > 0) if (isBackward) {
					const firstValidNode = validNodes[0];
					if ($isElementNode$1(firstValidNode)) firstValidNode.selectStart();
					else firstValidNode.getParentOrThrow().selectStart();
				} else {
					const lastValidNode = validNodes[validNodes.length - 1];
					if ($isElementNode$1(lastValidNode)) lastValidNode.selectEnd();
					else lastValidNode.getParentOrThrow().selectEnd();
				}
				if (domSelection.anchorNode !== range.startContainer || domSelection.anchorOffset !== range.startOffset) $swapPoints(this);
			}
		}
		if (granularity === "lineboundary") $modifySelectionAroundDecoratorsAndBlocks(this, alter, isBackward, granularity, "decorators");
	}
	/**
	* Helper for handling forward character and word deletion that prevents element nodes
	* like a table, columns layout being destroyed
	*
	* @param anchor the anchor
	* @param anchorNode the anchor node in the selection
	* @param isBackward whether or not selection is backwards
	*/
	forwardDeletion(anchor, anchorNode, isBackward) {
		if (!isBackward && (anchor.type === "element" && $isElementNode$1(anchorNode) && anchor.offset === anchorNode.getChildrenSize() || anchor.type === "text" && anchor.offset === anchorNode.getTextContentSize())) {
			const parent = anchorNode.getParent();
			const nextSibling = anchorNode.getNextSibling() || (parent === null ? null : parent.getNextSibling());
			if ($isElementNode$1(nextSibling) && nextSibling.isShadowRoot()) return true;
		}
		return false;
	}
	/**
	* Performs one logical character deletion operation on the EditorState based on the current Selection.
	* Handles different node types.
	*
	* @param isBackward whether or not the selection is backwards.
	*/
	deleteCharacter(isBackward) {
		const wasCollapsed = this.isCollapsed();
		if (this.isCollapsed()) {
			const anchor = this.anchor;
			let anchorNode = anchor.getNode();
			if (this.forwardDeletion(anchor, anchorNode, isBackward)) return;
			const initialRange = $extendCaretToRange$1($caretFromPoint$1(anchor, isBackward ? "previous" : "next"));
			if (initialRange.getTextSlices().every((slice) => slice === null || slice.distance === 0)) {
				let state = { type: "initial" };
				for (const caret of initialRange.iterNodeCarets("shadowRoot")) if ($isChildCaret$1(caret)) {
					if (caret.origin.isInline());
					else if (caret.origin.isShadowRoot()) {
						if (state.type === "merge-block") break;
						if ($isElementNode$1(initialRange.anchor.origin) && initialRange.anchor.origin.isEmpty()) {
							const normCaret = $normalizeCaret$1(caret);
							$updateRangeSelectionFromCaretRange$1(this, $getCaretRange$1(normCaret, normCaret));
							initialRange.anchor.origin.remove();
						}
						return;
					} else if (state.type === "merge-next-block" || state.type === "merge-block") state = {
						block: state.block,
						caret,
						type: "merge-block"
					};
				} else if (state.type === "merge-block") break;
				else if ($isSiblingCaret$1(caret)) {
					if ($isElementNode$1(caret.origin)) {
						if (!caret.origin.isInline()) state = {
							block: caret.origin,
							type: "merge-next-block"
						};
						else if (!caret.origin.isParentOf(initialRange.anchor.origin)) break;
						continue;
					} else if ($isDecoratorNode$1(caret.origin)) {
						if (caret.origin.isIsolated());
						else if (state.type === "merge-next-block" && (caret.origin.isKeyboardSelectable() || !caret.origin.isInline()) && $isElementNode$1(initialRange.anchor.origin) && initialRange.anchor.origin.isEmpty()) {
							initialRange.anchor.origin.remove();
							const nodeSelection = $createNodeSelection$1();
							nodeSelection.add(caret.origin.getKey());
							$setSelection$1(nodeSelection);
						} else caret.origin.remove();
						return;
					}
					break;
				}
				if (state.type === "merge-block") {
					const { caret, block } = state;
					$updateRangeSelectionFromCaretRange$1(this, $getCaretRange$1(!caret.origin.isEmpty() && block.isEmpty() ? $rewindSiblingCaret$1($getSiblingCaret$1(block, caret.direction)) : initialRange.anchor, caret));
					return this.removeText();
				}
			}
			const focus = this.focus;
			this.modify("extend", isBackward, "character");
			if (!this.isCollapsed()) {
				const focusNode = focus.type === "text" ? focus.getNode() : null;
				anchorNode = anchor.type === "text" ? anchor.getNode() : null;
				if (focusNode !== null && focusNode.isSegmented()) {
					const offset = focus.offset;
					const textContentSize = focusNode.getTextContentSize();
					if (focusNode.is(anchorNode) || isBackward && offset !== textContentSize || !isBackward && offset !== 0) {
						$removeSegment(focusNode, isBackward, offset);
						return;
					}
				} else if (anchorNode !== null && anchorNode.isSegmented()) {
					const offset = anchor.offset;
					const textContentSize = anchorNode.getTextContentSize();
					if (anchorNode.is(focusNode) || isBackward && offset !== 0 || !isBackward && offset !== textContentSize) {
						$removeSegment(anchorNode, isBackward, offset);
						return;
					}
				}
				$updateCaretSelectionForUnicodeCharacter(this, isBackward);
			} else if (isBackward && anchor.offset === 0) {
				if ($collapseAtStart(this, anchor.getNode())) return;
			}
		}
		this.removeText();
		if (isBackward && !wasCollapsed && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
			const anchorNode = this.anchor.getNode();
			if (anchorNode.isEmpty() && $isRootNode$1(anchorNode.getParent()) && anchorNode.getPreviousSibling() === null) $collapseAtStart(this, anchorNode);
		}
	}
	/**
	* Performs one logical line deletion operation on the EditorState based on the current Selection.
	* Handles different node types.
	*
	* @param isBackward whether or not the selection is backwards.
	*/
	deleteLine(isBackward) {
		if (this.isCollapsed()) this.modify("extend", isBackward, "lineboundary");
		if (this.isCollapsed()) this.deleteCharacter(isBackward);
		else this.removeText();
	}
	/**
	* Performs one logical word deletion operation on the EditorState based on the current Selection.
	* Handles different node types.
	*
	* @param isBackward whether or not the selection is backwards.
	*/
	deleteWord(isBackward) {
		if (this.isCollapsed()) {
			const anchor = this.anchor;
			const anchorNode = anchor.getNode();
			if (this.forwardDeletion(anchor, anchorNode, isBackward)) return;
			this.modify("extend", isBackward, "word");
		}
		if (this.isCollapsed()) this.deleteCharacter(isBackward);
		else this.removeText();
	}
	/**
	* Returns whether the Selection is "backwards", meaning the focus
	* logically precedes the anchor in the EditorState.
	* @returns true if the Selection is backwards, false otherwise.
	*/
	isBackward() {
		return this.focus.isBefore(this.anchor);
	}
	getStartEndPoints() {
		return [this.anchor, this.focus];
	}
};
function $isNodeSelection$1(x) {
	return x instanceof NodeSelection;
}
function getCharacterOffset(point) {
	const offset = point.offset;
	if (point.type === "text") return offset;
	const parent = point.getNode();
	return offset === parent.getChildrenSize() ? parent.getTextContent().length : 0;
}
function $getCharacterOffsets$1(selection) {
	const anchorAndFocus = selection.getStartEndPoints();
	if (anchorAndFocus === null) return [0, 0];
	const [anchor, focus] = anchorAndFocus;
	if (anchor.type === "element" && focus.type === "element" && anchor.key === focus.key && anchor.offset === focus.offset) return [0, 0];
	return [getCharacterOffset(anchor), getCharacterOffset(focus)];
}
function $collapseAtStart(selection, startNode) {
	for (let node = startNode; node; node = node.getParent()) {
		if ($isElementNode$1(node)) {
			if (node.collapseAtStart(selection)) return true;
			if ($isRootOrShadowRoot$1(node)) break;
		}
		if (node.getPreviousSibling()) break;
	}
	return false;
}
function $swapPoints(selection) {
	const focus = selection.focus;
	const anchor = selection.anchor;
	const anchorKey = anchor.key;
	const anchorOffset = anchor.offset;
	const anchorType = anchor.type;
	anchor.set(focus.key, focus.offset, focus.type, true);
	focus.set(anchorKey, anchorOffset, anchorType, true);
}
function moveNativeSelection(domSelection, alter, direction, granularity) {
	domSelection.modify(alter, direction, granularity);
}
/**
* Called by `RangeSelection.deleteCharacter` to determine if
* `this.modify('extend', isBackward, 'character')` extended the selection
* further than a user would expect for that operation.
*
* A short(?) JavaScript string vs. Unicode primer:
*
* Strings in JavaScript use an UTF-16 encoding, and the offsets into a
* string are based on those UTF-16 *code units*. This is basically a
* historical mistake (though logical at that time, decades ago), but
* can never really be fixed for compatibility reasons.
*
* In Unicode, a *code point* is the combination of one or more *code units*.
* and the range of a *code point* can fit into 21 bits.
*
* Every valid *code point* can be represented with one or two
* *UTF-16 code units*. One unit is used when the code point is in the
* Basic Multilingual Plane (BMP) and is `< 0xFFFF`. Anything outside
* of that plane is encoded with a *surrogate pair* of *code units* and
* `/[\uD800-\uDBFF][\uDC00-\uDFFF]/` is a regex that you could use to
* find any valid *surrogate pair*. As far as Unicode is concerned, these
* pairs represent a single *code point*, but in JavaScript, these pairs
* have a length of 2 (`pair.charCodeAt(n)` is really returning a
* UTF-16 *code unit*, not a unicode *code point*). It is possible to request
* a *code point* with `pair.codePointAt(0)` and enumerate code points
* in a string with `[...string]` but the offsets we work with, and
* the string length, are based in *code units* so that functionality
* is unfortunately not very useful here.
*
* This only gets us as far as *code points*. We now know that we must
* consider that each *code point* can have a length of 1 or 2 in JavaScript
* string distance. It gets even trickier because the visual representation
* of a character is a *grapheme* (approximately what the user thinks of
* as a character). A *grapheme* is one or more *code points*, and can
* essentially be arbitrarily long, as there are many ways to combine
* them.
*
* The `this.modify(…)` call has already extended our selection by one
* *grapheme* in the direction we want to delete. Sounds great, it's done
* a lot of awfully tricky work for us because this functionality has only
* recently become available in JavaScript via `Intl.Segmenter`. The
* problem is that in many cases the expected behavior of backspace or
* delete is *not always to delete a whole grapheme*. In some languages
* it's always expected that backspace ought to delete one code point, not the
* whole grapheme. In other situations such as emoji that use variation
* selectors you *do* want to delete the whole *grapheme*.
*
* In a few situations the behavior is even application dependent, such as
* with latin languages where you have multiple ways to represent the same
* character visually (e.g. a letter with an accent in one code point, or a
* letter followed by a combining mark in a second code point); some apps will
* delete the whole grapheme and others will delete only the combining mark,
* probably based on whether they perform some sort of *normalization* on their
* input to ensure that only one form is used when two sequences of code points
* can represent the same visual character. Lexical currently chooses not
* to perform any normalization so this type of combining marks will be
* deleted as a *code point* without deleting the whole *grapheme*.
*
* See also:
* https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-2/#G25564
* https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-3/#G30602
* https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-3/#G49537
* https://mathiasbynens.be/notes/javascript-unicode
*/
function $updateCaretSelectionForUnicodeCharacter(selection, isBackward) {
	const anchor = selection.anchor;
	const focus = selection.focus;
	const anchorNode = anchor.getNode();
	if (anchorNode === focus.getNode() && anchor.type === "text" && focus.type === "text") {
		const anchorOffset = anchor.offset;
		const focusOffset = focus.offset;
		const isBefore = anchorOffset < focusOffset;
		const startOffset = isBefore ? anchorOffset : focusOffset;
		const endOffset = isBefore ? focusOffset : anchorOffset;
		const characterOffset = endOffset - 1;
		if (startOffset !== characterOffset) {
			if (shouldDeleteExactlyOneCodeUnit(anchorNode.getTextContent().slice(startOffset, endOffset))) if (isBackward) focus.set(focus.key, characterOffset, focus.type);
			else anchor.set(anchor.key, characterOffset, anchor.type);
		}
	}
}
function shouldDeleteExactlyOneCodeUnit(text) {
	if (!(text.length > 1)) formatDevErrorMessage(`shouldDeleteExactlyOneCodeUnit: expecting to be called only with sequences of two or more code units`);
	return !(doesContainSurrogatePair(text) || doesContainEmoji(text));
}
/**
* Given the wall of text in $updateCaretSelectionForUnicodeCharacter, you'd
* think that the solution might be complex, but the only currently known
* cases given the above constraints where we want to delete a whole grapheme
* are when emoji is involved. Since ES6 we can use unicode character classes
* in regexp which makes this simple.
*
* It may make sense to add to this heuristic in the future if other
* edge cases are discovered, which is why detailed notes remain.
*
* This is implemented with runtime feature detection and will always
* return false on pre-2020 platforms that do not have unicode character
* class support.
*/
const doesContainEmoji = (() => {
	try {
		const re = new RegExp("\\p{Emoji}", "u");
		const test = re.test.bind(re);
		if (test("❤️") && test("#️⃣") && test("👍")) return test;
	} catch (_e) {}
	return () => false;
})();
function $removeSegment(node, isBackward, offset) {
	const textNode = node;
	const split = textNode.getTextContent().split(/(?=\s)/g);
	const splitLength = split.length;
	let segmentOffset = 0;
	let restoreOffset = 0;
	for (let i = 0; i < splitLength; i++) {
		const text = split[i];
		const isLast = i === splitLength - 1;
		restoreOffset = segmentOffset;
		segmentOffset += text.length;
		if (isBackward && segmentOffset === offset || segmentOffset > offset || isLast) {
			split.splice(i, 1);
			if (isLast) restoreOffset = void 0;
			break;
		}
	}
	const nextTextContent = split.join("").trim();
	if (nextTextContent === "") textNode.remove();
	else {
		textNode.setTextContent(nextTextContent);
		textNode.select(restoreOffset, restoreOffset);
	}
}
function shouldResolveAncestor(resolvedElement, resolvedOffset, lastPoint) {
	const parent = resolvedElement.getParent();
	return lastPoint === null || parent === null || !parent.canBeEmpty() || parent !== lastPoint.getNode();
}
function $internalResolveSelectionPoint(dom, offset, lastPoint, editor) {
	let resolvedOffset = offset;
	let resolvedNode;
	if (isHTMLElement$1(dom)) {
		let moveSelectionToEnd = false;
		const childNodes = dom.childNodes;
		const childNodesLength = childNodes.length;
		const blockCursorElement = editor._blockCursorElement;
		if (resolvedOffset === childNodesLength) {
			moveSelectionToEnd = true;
			resolvedOffset = childNodesLength - 1;
		}
		let childDOM = childNodes[resolvedOffset];
		let hasBlockCursor = false;
		if (childDOM === blockCursorElement) {
			childDOM = childNodes[resolvedOffset + 1];
			hasBlockCursor = true;
		} else if (blockCursorElement !== null) {
			const blockCursorElementParent = blockCursorElement.parentNode;
			if (dom === blockCursorElementParent) {
				if (offset > Array.prototype.indexOf.call(blockCursorElementParent.children, blockCursorElement)) resolvedOffset--;
			}
		}
		resolvedNode = $getNodeFromDOM(childDOM);
		if ($isTextNode$1(resolvedNode)) resolvedOffset = $getTextNodeOffset$1(resolvedNode, moveSelectionToEnd ? "next" : "previous");
		else {
			let resolvedElement = $getNodeFromDOM(dom);
			if (resolvedElement === null) return null;
			if ($isElementNode$1(resolvedElement)) {
				const elementDOM = editor.getElementByKey(resolvedElement.getKey());
				if (!(elementDOM !== null)) formatDevErrorMessage(`$internalResolveSelectionPoint: node in DOM but not keyToDOMMap`);
				const slot = $getEditorDOMRenderConfig$1(editor).$getDOMSlot(resolvedElement, elementDOM, editor);
				[resolvedElement, resolvedOffset] = slot.resolveChildIndex(resolvedElement, elementDOM, dom, offset);
				if (!$isElementNode$1(resolvedElement)) formatDevErrorMessage(`$internalResolveSelectionPoint: resolvedElement is not an ElementNode`);
				if (moveSelectionToEnd && resolvedOffset >= resolvedElement.getChildrenSize()) resolvedOffset = Math.max(0, resolvedElement.getChildrenSize() - 1);
				let child = resolvedElement.getChildAtIndex(resolvedOffset);
				if ($isElementNode$1(child) && shouldResolveAncestor(child, resolvedOffset, lastPoint)) {
					const descendant = moveSelectionToEnd ? child.getLastDescendant() : child.getFirstDescendant();
					if (descendant === null) resolvedElement = child;
					else {
						child = descendant;
						resolvedElement = $isElementNode$1(child) ? child : child.getParentOrThrow();
					}
					resolvedOffset = 0;
				}
				if ($isTextNode$1(child)) {
					resolvedNode = child;
					resolvedElement = null;
					resolvedOffset = $getTextNodeOffset$1(child, moveSelectionToEnd ? "next" : "previous");
				} else if (child !== resolvedElement && moveSelectionToEnd && !hasBlockCursor) {
					if (!$isElementNode$1(resolvedElement)) formatDevErrorMessage(`invariant`);
					resolvedOffset = Math.min(resolvedElement.getChildrenSize(), resolvedOffset + 1);
				}
			} else {
				const index = resolvedElement.getIndexWithinParent();
				if (offset === 0 && $isDecoratorNode$1(resolvedElement) && $getNodeFromDOM(dom) === resolvedElement) resolvedOffset = index;
				else resolvedOffset = index + 1;
				resolvedElement = resolvedElement.getParentOrThrow();
			}
			if ($isElementNode$1(resolvedElement)) return $createPoint$1(resolvedElement.__key, resolvedOffset, "element");
		}
	} else resolvedNode = $getNodeFromDOM(dom);
	if (!$isTextNode$1(resolvedNode)) return null;
	return $createPoint$1(resolvedNode.__key, $getTextNodeOffset$1(resolvedNode, resolvedOffset, "clamp"), "text");
}
function resolveSelectionPointOnBoundary(point, isBackward, isCollapsed) {
	const offset = point.offset;
	const node = point.getNode();
	if (offset === 0) {
		const prevSibling = node.getPreviousSibling();
		const parent = node.getParent();
		if (!isBackward) {
			if ($isElementNode$1(prevSibling) && !isCollapsed && prevSibling.isInline()) point.set(prevSibling.__key, prevSibling.getChildrenSize(), "element");
			else if ($isTextNode$1(prevSibling)) point.set(prevSibling.__key, prevSibling.getTextContent().length, "text");
		} else if ((isCollapsed || !isBackward) && prevSibling === null && $isElementNode$1(parent) && parent.isInline()) {
			const parentSibling = parent.getPreviousSibling();
			if ($isTextNode$1(parentSibling)) point.set(parentSibling.__key, parentSibling.getTextContent().length, "text");
		}
	} else if (offset === node.getTextContent().length) {
		const nextSibling = node.getNextSibling();
		const parent = node.getParent();
		if (isBackward && $isElementNode$1(nextSibling) && nextSibling.isInline()) point.set(nextSibling.__key, 0, "element");
		else if ((isCollapsed || isBackward) && nextSibling === null && $isElementNode$1(parent) && parent.isInline() && !parent.canInsertTextAfter()) {
			const parentSibling = parent.getNextSibling();
			if ($isTextNode$1(parentSibling)) point.set(parentSibling.__key, 0, "text");
		}
	}
}
function $normalizeSelectionPointsForBoundaries(anchor, focus, lastSelection) {
	if (anchor.type === "text" && focus.type === "text") {
		const isBackward = anchor.isBefore(focus);
		const isCollapsed = anchor.is(focus);
		resolveSelectionPointOnBoundary(anchor, isBackward, isCollapsed);
		resolveSelectionPointOnBoundary(focus, !isBackward, isCollapsed);
		if (isCollapsed) focus.set(anchor.key, anchor.offset, anchor.type);
	}
}
function $internalResolveSelectionPoints(anchorDOM, anchorOffset, focusDOM, focusOffset, editor, lastSelection) {
	if (anchorDOM === null || focusDOM === null || !isSelectionWithinEditor$1(editor, anchorDOM, focusDOM)) return null;
	const resolvedAnchorPoint = $internalResolveSelectionPoint(anchorDOM, anchorOffset, $isRangeSelection$1(lastSelection) ? lastSelection.anchor : null, editor);
	if (resolvedAnchorPoint === null) return null;
	const resolvedFocusPoint = $internalResolveSelectionPoint(focusDOM, focusOffset, $isRangeSelection$1(lastSelection) ? lastSelection.focus : null, editor);
	if (resolvedFocusPoint === null) return null;
	$validatePoint("anchor", resolvedAnchorPoint);
	$validatePoint("focus", resolvedFocusPoint);
	if (resolvedAnchorPoint.type === "element" && resolvedFocusPoint.type === "element") {
		const anchorNode = $getNodeFromDOM(anchorDOM);
		const focusNode = $getNodeFromDOM(focusDOM);
		if ($isDecoratorNode$1(anchorNode) && $isDecoratorNode$1(focusNode)) return null;
	}
	$normalizeSelectionPointsForBoundaries(resolvedAnchorPoint, resolvedFocusPoint);
	return [resolvedAnchorPoint, resolvedFocusPoint];
}
function $isBlockElementNode$1(node) {
	return $isElementNode$1(node) && !node.isInline();
}
function $internalMakeRangeSelection(anchorKey, anchorOffset, focusKey, focusOffset, anchorType, focusType) {
	const editorState = getActiveEditorState();
	const selection = new RangeSelection($createPoint$1(anchorKey, anchorOffset, anchorType), $createPoint$1(focusKey, focusOffset, focusType), 0, "");
	selection.dirty = true;
	editorState._selection = selection;
	return selection;
}
function $createRangeSelection$1() {
	return new RangeSelection($createPoint$1("root", 0, "element"), $createPoint$1("root", 0, "element"), 0, "");
}
function $createNodeSelection$1() {
	return new NodeSelection(/* @__PURE__ */ new Set());
}
function $internalCreateSelection(editor, event) {
	const lastSelection = editor.getEditorState()._selection;
	const domSelection = getDOMSelection$1(getWindow(editor));
	if ($isRangeSelection$1(lastSelection) || lastSelection == null) return $internalCreateRangeSelection(lastSelection, domSelection, editor, event);
	return lastSelection.clone();
}
function $createRangeSelectionFromDom$1(domSelection, editor) {
	return $internalCreateRangeSelection(null, domSelection, editor, null);
}
function $internalCreateRangeSelection(lastSelection, domSelection, editor, event) {
	const windowObj = editor._window;
	if (windowObj === null) return null;
	const windowEvent = event || windowObj.event;
	const eventType = windowEvent ? windowEvent.type : void 0;
	const isSelectionChange = eventType === "selectionchange";
	const useDOMSelection = !getIsProcessingMutations() && (isSelectionChange || eventType === "beforeinput" || eventType === "compositionstart" || eventType === "compositionend" || eventType === "click" && windowEvent && windowEvent.detail === 3 || eventType === "drop" || eventType === void 0);
	let anchorDOM, focusDOM, anchorOffset, focusOffset;
	if (!$isRangeSelection$1(lastSelection) || useDOMSelection) {
		if (domSelection === null) return null;
		anchorDOM = domSelection.anchorNode;
		focusDOM = domSelection.focusNode;
		anchorOffset = domSelection.anchorOffset;
		focusOffset = domSelection.focusOffset;
		if ((isSelectionChange || eventType === void 0) && $isRangeSelection$1(lastSelection) && !isSelectionWithinEditor$1(editor, anchorDOM, focusDOM)) return lastSelection.clone();
	} else return lastSelection.clone();
	const resolvedSelectionPoints = $internalResolveSelectionPoints(anchorDOM, anchorOffset, focusDOM, focusOffset, editor, lastSelection);
	if (resolvedSelectionPoints === null) return null;
	const [resolvedAnchorPoint, resolvedFocusPoint] = resolvedSelectionPoints;
	let format = 0;
	let style = "";
	if ($isRangeSelection$1(lastSelection)) {
		const lastAnchor = lastSelection.anchor;
		if (resolvedAnchorPoint.key === lastAnchor.key) {
			format = lastSelection.format;
			style = lastSelection.style;
		} else {
			const anchorNode = resolvedAnchorPoint.getNode();
			if ($isTextNode$1(anchorNode)) {
				format = anchorNode.getFormat();
				style = anchorNode.getStyle();
			} else if ($isElementNode$1(anchorNode)) {
				format = anchorNode.getTextFormat();
				style = anchorNode.getTextStyle();
			}
		}
	}
	return new RangeSelection(resolvedAnchorPoint, resolvedFocusPoint, format, style);
}
function $validatePoint(name, point) {
	const node = $getNodeByKey$1(point.key);
	if (!(node !== void 0)) formatDevErrorMessage(`$validatePoint: ${name} key ${point.key} not found in current editorState`);
	if (point.type === "text") {
		if (!$isTextNode$1(node)) formatDevErrorMessage(`$validatePoint: ${name} key ${point.key} is not a TextNode`);
		const size = node.getTextContentSize();
		if (!(point.offset <= size)) formatDevErrorMessage(`$validatePoint: ${name} point.offset > node.getTextContentSize() (${String(point.offset)} > ${String(size)})`);
	} else {
		if (!$isElementNode$1(node)) formatDevErrorMessage(`$validatePoint: ${name} key ${point.key} is not an ElementNode`);
		const size = node.getChildrenSize();
		if (!(point.offset <= size)) formatDevErrorMessage(`$validatePoint: ${name} point.offset > node.getChildrenSize() (${String(point.offset)} > ${String(size)})`);
	}
}
function $getSelection$1() {
	return getActiveEditorState()._selection;
}
function $getPreviousSelection$1() {
	return getActiveEditor()._editorState._selection;
}
function $updateElementSelectionOnCreateDeleteNode(selection, parentNode, nodeOffset, times = 1) {
	const anchor = selection.anchor;
	const focus = selection.focus;
	const anchorNode = anchor.getNode();
	const focusNode = focus.getNode();
	if (!parentNode.is(anchorNode) && !parentNode.is(focusNode)) return;
	const parentKey = parentNode.__key;
	if (selection.isCollapsed()) {
		const selectionOffset = anchor.offset;
		if (nodeOffset <= selectionOffset && times > 0 || nodeOffset < selectionOffset && times < 0) {
			const newSelectionOffset = Math.max(0, selectionOffset + times);
			anchor.set(parentKey, newSelectionOffset, "element");
			focus.set(parentKey, newSelectionOffset, "element");
			$updateSelectionResolveTextNodes(selection);
		}
	} else {
		const isBackward = selection.isBackward();
		const firstPoint = isBackward ? focus : anchor;
		const firstPointNode = firstPoint.getNode();
		const lastPoint = isBackward ? anchor : focus;
		const lastPointNode = lastPoint.getNode();
		if (parentNode.is(firstPointNode)) {
			const firstPointOffset = firstPoint.offset;
			if (nodeOffset <= firstPointOffset && times > 0 || nodeOffset < firstPointOffset && times < 0) firstPoint.set(parentKey, Math.max(0, firstPointOffset + times), "element");
		}
		if (parentNode.is(lastPointNode)) {
			const lastPointOffset = lastPoint.offset;
			if (nodeOffset <= lastPointOffset && times > 0 || nodeOffset < lastPointOffset && times < 0) lastPoint.set(parentKey, Math.max(0, lastPointOffset + times), "element");
		}
	}
	$updateSelectionResolveTextNodes(selection);
}
function $updateSelectionResolveTextNodes(selection) {
	const anchor = selection.anchor;
	const anchorOffset = anchor.offset;
	const focus = selection.focus;
	const focusOffset = focus.offset;
	const anchorNode = anchor.getNode();
	const focusNode = focus.getNode();
	if (selection.isCollapsed()) {
		if (!$isElementNode$1(anchorNode)) return;
		const childSize = anchorNode.getChildrenSize();
		const anchorOffsetAtEnd = anchorOffset >= childSize;
		const child = anchorOffsetAtEnd ? anchorNode.getChildAtIndex(childSize - 1) : anchorNode.getChildAtIndex(anchorOffset);
		if ($isTextNode$1(child)) {
			let newOffset = 0;
			if (anchorOffsetAtEnd) newOffset = child.getTextContentSize();
			anchor.set(child.__key, newOffset, "text");
			focus.set(child.__key, newOffset, "text");
		}
		return;
	}
	if ($isElementNode$1(anchorNode)) {
		const childSize = anchorNode.getChildrenSize();
		const anchorOffsetAtEnd = anchorOffset >= childSize;
		const child = anchorOffsetAtEnd ? anchorNode.getChildAtIndex(childSize - 1) : anchorNode.getChildAtIndex(anchorOffset);
		if ($isTextNode$1(child)) {
			let newOffset = 0;
			if (anchorOffsetAtEnd) newOffset = child.getTextContentSize();
			anchor.set(child.__key, newOffset, "text");
		}
	}
	if ($isElementNode$1(focusNode)) {
		const childSize = focusNode.getChildrenSize();
		const focusOffsetAtEnd = focusOffset >= childSize;
		const child = focusOffsetAtEnd ? focusNode.getChildAtIndex(childSize - 1) : focusNode.getChildAtIndex(focusOffset);
		if ($isTextNode$1(child)) {
			let newOffset = 0;
			if (focusOffsetAtEnd) newOffset = child.getTextContentSize();
			focus.set(child.__key, newOffset, "text");
		}
	}
}
function applySelectionTransforms(nextEditorState, editor) {
	const prevSelection = editor.getEditorState()._selection;
	const nextSelection = nextEditorState._selection;
	if ($isRangeSelection$1(nextSelection)) {
		const anchor = nextSelection.anchor;
		const focus = nextSelection.focus;
		let anchorNode;
		if (anchor.type === "text") {
			anchorNode = anchor.getNode();
			anchorNode.selectionTransform(prevSelection, nextSelection);
		}
		if (focus.type === "text") {
			const focusNode = focus.getNode();
			if (anchorNode !== focusNode) focusNode.selectionTransform(prevSelection, nextSelection);
		}
	}
}
function moveSelectionPointToSibling(point, node, parent, prevSibling, nextSibling) {
	let siblingKey = null;
	let offset = 0;
	let type = null;
	if (prevSibling !== null) {
		siblingKey = prevSibling.__key;
		if ($isTextNode$1(prevSibling)) {
			offset = prevSibling.getTextContentSize();
			type = "text";
		} else if ($isElementNode$1(prevSibling)) {
			offset = prevSibling.getChildrenSize();
			type = "element";
		}
	} else if (nextSibling !== null) {
		siblingKey = nextSibling.__key;
		if ($isTextNode$1(nextSibling)) type = "text";
		else if ($isElementNode$1(nextSibling)) type = "element";
	}
	if (siblingKey !== null && type !== null) point.set(siblingKey, offset, type);
	else {
		offset = node.getIndexWithinParent();
		if (offset === -1) offset = parent.getChildrenSize();
		point.set(parent.__key, offset, "element");
	}
}
function adjustPointOffsetForMergedSibling(point, isBefore, key, target, textLength) {
	if (point.type === "text") point.set(key, point.offset + (isBefore ? 0 : textLength), "text");
	else if (point.offset > target.getIndexWithinParent()) point.set(point.key, point.offset - 1, "element");
}
function setDOMSelectionBaseAndExtent(domSelection, nextAnchorDOM, nextAnchorOffset, nextFocusDOM, nextFocusOffset) {
	try {
		domSelection.setBaseAndExtent(nextAnchorDOM, nextAnchorOffset, nextFocusDOM, nextFocusOffset);
	} catch (error) {
		console.warn(error);
	}
}
function $getElementAndOffsetForPoint(editor, node, offset) {
	const element = getElementByKeyOrThrow(editor, node.getKey());
	if ($isElementNode$1(node)) {
		const slot = $getEditorDOMRenderConfig$1(editor).$getDOMSlot(node, element, editor);
		return [slot.element, offset + slot.getFirstChildOffset()];
	}
	return [element, offset];
}
function $updateDOMSelection(prevSelection, nextSelection, editor, domSelection, tags, rootElement, nodeCount) {
	const anchorDOMNode = domSelection.anchorNode;
	const focusDOMNode = domSelection.focusNode;
	const anchorOffset = domSelection.anchorOffset;
	const focusOffset = domSelection.focusOffset;
	const activeElement = document.activeElement;
	if (tags.has("collaboration") && activeElement !== rootElement || activeElement !== null && isSelectionCapturedInDecoratorInput$1(activeElement)) return;
	if (!$isRangeSelection$1(nextSelection)) {
		if (prevSelection !== null && isSelectionWithinEditor$1(editor, anchorDOMNode, focusDOMNode)) domSelection.removeAllRanges();
		return;
	}
	const anchor = nextSelection.anchor;
	const focus = nextSelection.focus;
	const anchorNode = anchor.getNode();
	const focusNode = focus.getNode();
	const [anchorDOM, nextAnchorOffset] = $getElementAndOffsetForPoint(editor, anchorNode, anchor.offset);
	const [focusDOM, nextFocusOffset] = $getElementAndOffsetForPoint(editor, focusNode, focus.offset);
	const nextFormat = nextSelection.format;
	const nextStyle = nextSelection.style;
	const isCollapsed = nextSelection.isCollapsed();
	let nextAnchorNode = anchorDOM;
	let nextFocusNode = focusDOM;
	let anchorFormatOrStyleChanged = false;
	if (anchor.type === "text") {
		nextAnchorNode = getDOMTextNode$1(anchorDOM);
		anchorFormatOrStyleChanged = anchorNode.getFormat() !== nextFormat || anchorNode.getStyle() !== nextStyle;
	} else if ($isRangeSelection$1(prevSelection) && prevSelection.anchor.type === "text") anchorFormatOrStyleChanged = true;
	if (focus.type === "text") nextFocusNode = getDOMTextNode$1(focusDOM);
	if (nextAnchorNode === null || nextFocusNode === null) return;
	if (isCollapsed && (prevSelection === null || anchorFormatOrStyleChanged || $isRangeSelection$1(prevSelection) && (prevSelection.format !== nextFormat || prevSelection.style !== nextStyle))) markCollapsedSelectionFormat(nextFormat, nextStyle, nextAnchorOffset, anchor.key, performance.now());
	if (anchorOffset === nextAnchorOffset && focusOffset === nextFocusOffset && anchorDOMNode === nextAnchorNode && focusDOMNode === nextFocusNode && !(domSelection.type === "Range" && isCollapsed)) {
		if (activeElement === null || !rootElement.contains(activeElement)) {
			if (!tags.has("skip-selection-focus")) rootElement.focus({ preventScroll: true });
		}
		if (anchor.type !== "element") return;
	}
	setDOMSelectionBaseAndExtent(domSelection, nextAnchorNode, nextAnchorOffset, nextFocusNode, nextFocusOffset);
	if (IS_FIREFOX && nextSelection.isCollapsed() && rootElement !== null && !tags.has("skip-selection-focus") && (document.activeElement === null || !rootElement.contains(document.activeElement))) rootElement.focus({ preventScroll: true });
	if (!tags.has("skip-scroll-into-view") && nextSelection.isCollapsed() && rootElement !== null && rootElement === document.activeElement) {
		const selectionTarget = $isRangeSelection$1(nextSelection) && nextSelection.anchor.type === "element" ? nextAnchorNode.childNodes[nextAnchorOffset] || null : domSelection.rangeCount > 0 ? domSelection.getRangeAt(0) : null;
		if (selectionTarget !== null) {
			let selectionRect;
			if (selectionTarget instanceof Text) {
				const range = document.createRange();
				range.selectNode(selectionTarget);
				selectionRect = range.getBoundingClientRect();
			} else selectionRect = selectionTarget.getBoundingClientRect();
			scrollIntoViewIfNeeded(editor, selectionRect, rootElement);
		}
	}
	markSelectionChangeFromDOMUpdate();
}
function $insertNodes$1(nodes) {
	let selection = $getSelection$1() || $getPreviousSelection$1();
	if (selection === null) selection = $getRoot$1().selectEnd();
	selection.insertNodes(nodes);
}
function $getTextContent$1() {
	const selection = $getSelection$1();
	if (selection === null) return "";
	return selection.getTextContent();
}
function $removeTextAndSplitBlock(selection) {
	let selection_ = selection;
	if (!selection.isCollapsed()) selection_.removeText();
	const newSelection = $getSelection$1();
	if ($isRangeSelection$1(newSelection)) selection_ = newSelection;
	if (!$isRangeSelection$1(selection_)) formatDevErrorMessage(`Unexpected dirty selection to be null`);
	const anchor = selection_.anchor;
	let node = anchor.getNode();
	let offset = anchor.offset;
	while (!INTERNAL_$isBlock$1(node)) {
		const prevNode = node;
		[node, offset] = $splitNodeAtPoint(node, offset);
		if (prevNode.is(node)) break;
	}
	return offset;
}
function $splitNodeAtPoint(node, offset) {
	const parent = node.getParent();
	if (!parent) {
		const paragraph = $createParagraphNode$1();
		$getRoot$1().append(paragraph);
		paragraph.select();
		return [$getRoot$1(), 0];
	}
	if ($isTextNode$1(node)) {
		const split = node.splitText(offset);
		if (split.length === 0) return [parent, node.getIndexWithinParent()];
		const x = offset === 0 ? 0 : 1;
		return [parent, split[0].getIndexWithinParent() + x];
	}
	if (!$isElementNode$1(node) || offset === 0) return [parent, node.getIndexWithinParent()];
	const firstToAppend = node.getChildAtIndex(offset);
	if (firstToAppend) {
		const insertPoint = new RangeSelection($createPoint$1(node.__key, offset, "element"), $createPoint$1(node.__key, offset, "element"), 0, "");
		const newElement = node.insertNewAfter(insertPoint);
		if (newElement) newElement.append(firstToAppend, ...firstToAppend.getNextSiblings());
	}
	return [parent, node.getIndexWithinParent() + 1];
}
function $wrapInlineNodes(nodes) {
	const virtualRoot = $createParagraphNode$1();
	let currentBlock = null;
	for (let i = 0; i < nodes.length; i++) {
		const node = nodes[i];
		const isLineBreakNode = $isLineBreakNode$1(node);
		if (isLineBreakNode || $isDecoratorNode$1(node) && node.isInline() || $isElementNode$1(node) && node.isInline() || $isTextNode$1(node) || node.isParentRequired()) {
			if (currentBlock === null) {
				currentBlock = node.createParentElementNode();
				virtualRoot.append(currentBlock);
				if (isLineBreakNode) continue;
			}
			if (currentBlock !== null) currentBlock.append(node);
		} else {
			virtualRoot.append(node);
			currentBlock = null;
		}
	}
	return virtualRoot;
}
/**
* Get all nodes in a CaretRange in a way that complies with all of the
* quirks of the original RangeSelection.getNodes().
*
* @param range The CaretRange
*/
function $getNodesFromCaretRangeCompat(range) {
	const nodes = [];
	const [beforeSlice, afterSlice] = range.getTextSlices();
	if (beforeSlice) nodes.push(beforeSlice.caret.origin);
	const seenAncestors = /* @__PURE__ */ new Set();
	const seenElements = /* @__PURE__ */ new Set();
	for (const caret of range) if ($isChildCaret$1(caret)) {
		const { origin } = caret;
		if (nodes.length === 0) seenAncestors.add(origin);
		else {
			seenElements.add(origin);
			nodes.push(origin);
		}
	} else {
		const { origin } = caret;
		if (!$isElementNode$1(origin) || !seenElements.has(origin)) nodes.push(origin);
	}
	if (afterSlice) nodes.push(afterSlice.caret.origin);
	if ($isSiblingCaret$1(range.focus) && $isElementNode$1(range.focus.origin) && range.focus.getNodeAtCaret() === null) for (let reverseCaret = $getChildCaret$1(range.focus.origin, "previous"); $isChildCaret$1(reverseCaret) && seenAncestors.has(reverseCaret.origin) && !reverseCaret.origin.isEmpty() && reverseCaret.origin.is(nodes[nodes.length - 1]); reverseCaret = $getAdjacentChildCaret$1(reverseCaret)) {
		seenAncestors.delete(reverseCaret.origin);
		nodes.pop();
	}
	while (nodes.length > 1) {
		const lastIncludedNode = nodes[nodes.length - 1];
		if ($isElementNode$1(lastIncludedNode)) if (seenElements.has(lastIncludedNode) || lastIncludedNode.isEmpty() || seenAncestors.has(lastIncludedNode));
		else {
			nodes.pop();
			continue;
		}
		break;
	}
	if (nodes.length === 0 && range.isCollapsed()) {
		const normCaret = $normalizeCaret$1(range.anchor);
		const flippedNormCaret = $normalizeCaret$1(range.anchor.getFlipped());
		const $getCandidate = (caret) => $isTextPointCaret$1(caret) ? caret.origin : caret.getNodeAtCaret();
		const node = $getCandidate(normCaret) || $getCandidate(flippedNormCaret) || (range.anchor.getNodeAtCaret() ? normCaret.origin : flippedNormCaret.origin);
		nodes.push(node);
	}
	return nodes;
}
/**
* @internal
*
* Modify the focus of the focus around possible decorators and blocks and return true
* if the movement is done.
*/
function $modifySelectionAroundDecoratorsAndBlocks(selection, alter, isBackward, granularity, mode = "decorators-and-blocks") {
	if (alter === "move" && granularity === "character" && !selection.isCollapsed()) {
		const [src, dst] = isBackward === selection.isBackward() ? [selection.focus, selection.anchor] : [selection.anchor, selection.focus];
		dst.set(src.key, src.offset, src.type);
		return true;
	}
	const initialFocus = $caretFromPoint$1(selection.focus, isBackward ? "previous" : "next");
	const isLineBoundary = granularity === "lineboundary";
	const collapse = alter === "move";
	let focus = initialFocus;
	let checkForBlock = mode === "decorators-and-blocks";
	if (!$isExtendableTextPointCaret$1(focus)) {
		for (const siblingCaret of focus) {
			checkForBlock = false;
			const { origin } = siblingCaret;
			if ($isDecoratorNode$1(origin) && !origin.isIsolated()) {
				focus = siblingCaret;
				if (isLineBoundary && origin.isInline()) continue;
			}
			break;
		}
		if (checkForBlock) for (const nextCaret of $extendCaretToRange$1(initialFocus).iterNodeCarets(alter === "extend" ? "shadowRoot" : "root")) {
			if ($isChildCaret$1(nextCaret)) {
				if (!nextCaret.origin.isInline()) focus = nextCaret;
			} else if ($isElementNode$1(nextCaret.origin)) continue;
			else if ($isDecoratorNode$1(nextCaret.origin) && !nextCaret.origin.isInline()) focus = nextCaret;
			break;
		}
	}
	if (focus === initialFocus) return false;
	if (collapse && !isLineBoundary && $isDecoratorNode$1(focus.origin) && focus.origin.isKeyboardSelectable()) {
		const nodeSelection = $createNodeSelection$1();
		nodeSelection.add(focus.origin.getKey());
		$setSelection$1(nodeSelection);
		return true;
	}
	focus = $normalizeCaret$1(focus);
	if (collapse) $setPointFromCaret$1(selection.anchor, focus);
	$setPointFromCaret$1(selection.focus, focus);
	return checkForBlock || !isLineBoundary;
}
let activeEditorState = null;
let activeEditor = null;
let isReadOnlyMode = false;
let isAttemptingToRecoverFromReconcilerError = false;
let infiniteTransformCount = 0;
const observerOptions = {
	characterData: true,
	childList: true,
	subtree: true
};
function isCurrentlyReadOnlyMode$1() {
	return isReadOnlyMode || activeEditorState !== null && activeEditorState._readOnly;
}
function errorOnReadOnly() {
	if (isReadOnlyMode) formatDevErrorMessage(`Cannot use method in read-only mode.`);
}
function errorOnInfiniteTransforms() {
	if (infiniteTransformCount > 99) formatDevErrorMessage(`One or more transforms are endlessly triggering additional transforms. May have encountered infinite recursion caused by transforms that have their preconditions too lose and/or conflict with each other.`);
}
function getActiveEditorState() {
	if (activeEditorState === null) formatDevErrorMessage(`Unable to find an active editor state. State helpers or node methods can only be used synchronously during the callback of editor.update(), editor.read(), or editorState.read().${collectBuildInformation()}`);
	return activeEditorState;
}
function getActiveEditor() {
	if (activeEditor === null) formatDevErrorMessage(`Unable to find an active editor. This method can only be used synchronously during the callback of editor.update(), editor.read(), or editor.getEditorState().read(..., {editor}).${collectBuildInformation()}`);
	return activeEditor;
}
function collectBuildInformation() {
	let compatibleEditors = 0;
	const incompatibleEditors = /* @__PURE__ */ new Set();
	const thisVersion = LexicalEditor.version;
	if (typeof window !== "undefined") for (const node of document.querySelectorAll("[contenteditable]")) {
		const editor = getEditorPropertyFromDOMNode$1(node);
		if (isLexicalEditor$1(editor)) compatibleEditors++;
		else if (editor) {
			let version = String(editor.constructor.version || "<0.17.1");
			if (version === thisVersion) version += " (separately built, likely a bundler configuration issue)";
			incompatibleEditors.add(version);
		}
	}
	let output = ` Detected on the page: ${compatibleEditors} compatible editor(s) with version ${thisVersion}`;
	if (incompatibleEditors.size) output += ` and incompatible editors with versions ${Array.from(incompatibleEditors).join(", ")}`;
	return output;
}
function internalGetActiveEditor() {
	return activeEditor;
}
function internalGetActiveEditorState() {
	return activeEditorState;
}
function $applyTransforms(editor, node, transformsCache) {
	const type = node.__type;
	const registeredNode = getRegisteredNodeOrThrow$1(editor, type);
	let transformsArr = transformsCache.get(type);
	if (transformsArr === void 0) {
		transformsArr = Array.from(registeredNode.transforms);
		transformsCache.set(type, transformsArr);
	}
	const transformsArrLength = transformsArr.length;
	for (let i = 0; i < transformsArrLength; i++) {
		transformsArr[i](node);
		if (!node.isAttached()) break;
	}
}
function $isNodeValidForTransform(node, compositionKey) {
	return node !== void 0 && node.__key !== compositionKey && node.isAttached();
}
function $normalizeAllDirtyTextNodes(editorState, editor) {
	const dirtyLeaves = editor._dirtyLeaves;
	const nodeMap = editorState._nodeMap;
	for (const nodeKey of dirtyLeaves) {
		const node = nodeMap.get(nodeKey);
		if ($isTextNode$1(node) && node.isAttached() && node.isSimpleText() && !node.isUnmergeable()) $normalizeTextNode(node);
	}
}
function addTags(editor, tags) {
	if (!tags) return;
	const updateTags = editor._updateTags;
	let tags_ = tags;
	if (!Array.isArray(tags)) tags_ = [tags];
	for (const tag of tags_) updateTags.add(tag);
}
/**
* Transform heuristic:
* 1. We transform leaves first. If transforms generate additional dirty nodes we repeat step 1.
* The reasoning behind this is that marking a leaf as dirty marks all its parent elements as dirty too.
* 2. We transform elements. If element transforms generate additional dirty nodes we repeat step 1.
* If element transforms only generate additional dirty elements we only repeat step 2.
*
* Note that to keep track of newly dirty nodes and subtrees we leverage the editor._dirtyNodes and
* editor._subtrees which we reset in every loop.
*/
function $applyAllTransforms(editorState, editor) {
	const dirtyLeaves = editor._dirtyLeaves;
	const dirtyElements = editor._dirtyElements;
	const nodeMap = editorState._nodeMap;
	const compositionKey = $getCompositionKey();
	const transformsCache = /* @__PURE__ */ new Map();
	let untransformedDirtyLeaves = dirtyLeaves;
	let untransformedDirtyLeavesLength = untransformedDirtyLeaves.size;
	let untransformedDirtyElements = dirtyElements;
	let untransformedDirtyElementsLength = untransformedDirtyElements.size;
	while (untransformedDirtyLeavesLength > 0 || untransformedDirtyElementsLength > 0) {
		if (untransformedDirtyLeavesLength > 0) {
			editor._dirtyLeaves = /* @__PURE__ */ new Set();
			for (const nodeKey of untransformedDirtyLeaves) {
				const node = nodeMap.get(nodeKey);
				if ($isTextNode$1(node) && node.isAttached() && node.isSimpleText() && !node.isUnmergeable()) $normalizeTextNode(node);
				if (node !== void 0 && $isNodeValidForTransform(node, compositionKey)) $applyTransforms(editor, node, transformsCache);
				dirtyLeaves.add(nodeKey);
			}
			untransformedDirtyLeaves = editor._dirtyLeaves;
			untransformedDirtyLeavesLength = untransformedDirtyLeaves.size;
			if (untransformedDirtyLeavesLength > 0) {
				infiniteTransformCount++;
				continue;
			}
		}
		editor._dirtyLeaves = /* @__PURE__ */ new Set();
		editor._dirtyElements = /* @__PURE__ */ new Map();
		if (untransformedDirtyElements.delete("root")) untransformedDirtyElements.set("root", true);
		for (const currentUntransformedDirtyElement of untransformedDirtyElements) {
			const nodeKey = currentUntransformedDirtyElement[0];
			const intentionallyMarkedAsDirty = currentUntransformedDirtyElement[1];
			dirtyElements.set(nodeKey, intentionallyMarkedAsDirty);
			if (!intentionallyMarkedAsDirty) continue;
			const node = nodeMap.get(nodeKey);
			if (node !== void 0 && $isNodeValidForTransform(node, compositionKey)) $applyTransforms(editor, node, transformsCache);
		}
		untransformedDirtyLeaves = editor._dirtyLeaves;
		untransformedDirtyLeavesLength = untransformedDirtyLeaves.size;
		untransformedDirtyElements = editor._dirtyElements;
		untransformedDirtyElementsLength = untransformedDirtyElements.size;
		infiniteTransformCount++;
	}
	editor._dirtyLeaves = dirtyLeaves;
	editor._dirtyElements = dirtyElements;
}
function $parseSerializedNode$1(serializedNode) {
	return $parseSerializedNodeImpl(serializedNode, getActiveEditor()._nodes);
}
function $parseSerializedNodeImpl(serializedNode, registeredNodes) {
	const type = serializedNode.type;
	const registeredNode = registeredNodes.get(type);
	if (registeredNode === void 0) formatDevErrorMessage(`parseEditorState: type "${type}" + not found`);
	const nodeClass = registeredNode.klass;
	if (serializedNode.type !== nodeClass.getType()) formatDevErrorMessage(`LexicalNode: Node ${nodeClass.name} does not implement .importJSON().`);
	const node = nodeClass.importJSON(serializedNode);
	const children = serializedNode.children;
	if ($isElementNode$1(node) && Array.isArray(children)) for (let i = 0; i < children.length; i++) {
		const serializedJSONChildNode = children[i];
		const childNode = $parseSerializedNodeImpl(serializedJSONChildNode, registeredNodes);
		node.append(childNode);
	}
	return node;
}
function parseEditorState(serializedEditorState, editor, updateFn) {
	const editorState = createEmptyEditorState();
	const previousActiveEditorState = activeEditorState;
	const previousReadOnlyMode = isReadOnlyMode;
	const previousActiveEditor = activeEditor;
	const previousDirtyElements = editor._dirtyElements;
	const previousDirtyLeaves = editor._dirtyLeaves;
	const previousCloneNotNeeded = editor._cloneNotNeeded;
	const previousDirtyType = editor._dirtyType;
	editor._dirtyElements = /* @__PURE__ */ new Map();
	editor._dirtyLeaves = /* @__PURE__ */ new Set();
	editor._cloneNotNeeded = /* @__PURE__ */ new Set();
	editor._dirtyType = 0;
	activeEditorState = editorState;
	isReadOnlyMode = false;
	activeEditor = editor;
	setPendingNodeToClone(null);
	try {
		const registeredNodes = editor._nodes;
		const serializedNode = serializedEditorState.root;
		$parseSerializedNodeImpl(serializedNode, registeredNodes);
		if (updateFn) updateFn();
		editorState._readOnly = true;
		handleDEVOnlyPendingUpdateGuarantees(editorState);
	} catch (error) {
		if (error instanceof Error) editor._onError(error);
	} finally {
		editor._dirtyElements = previousDirtyElements;
		editor._dirtyLeaves = previousDirtyLeaves;
		editor._cloneNotNeeded = previousCloneNotNeeded;
		editor._dirtyType = previousDirtyType;
		activeEditorState = previousActiveEditorState;
		isReadOnlyMode = previousReadOnlyMode;
		activeEditor = previousActiveEditor;
	}
	return editorState;
}
function readEditorState(editor, editorState, callbackFn) {
	const previousActiveEditorState = activeEditorState;
	const previousReadOnlyMode = isReadOnlyMode;
	const previousActiveEditor = activeEditor;
	activeEditorState = editorState;
	isReadOnlyMode = true;
	activeEditor = editor;
	try {
		return callbackFn();
	} finally {
		activeEditorState = previousActiveEditorState;
		isReadOnlyMode = previousReadOnlyMode;
		activeEditor = previousActiveEditor;
	}
}
function handleDEVOnlyPendingUpdateGuarantees(pendingEditorState) {
	const nodeMap = pendingEditorState._nodeMap;
	nodeMap.set = () => {
		throw new Error("Cannot call set() on a frozen Lexical node map");
	};
	nodeMap.clear = () => {
		throw new Error("Cannot call clear() on a frozen Lexical node map");
	};
	nodeMap.delete = () => {
		throw new Error("Cannot call delete() on a frozen Lexical node map");
	};
}
function $commitPendingUpdates(editor, recoveryEditorState) {
	const pendingEditorState = editor._pendingEditorState;
	const rootElement = editor._rootElement;
	const shouldSkipDOM = editor._headless || rootElement === null;
	if (pendingEditorState === null) {
		if (editor._deferred.length > 0) triggerDeferredUpdateCallbacks(editor, editor._deferred);
		return;
	}
	const currentEditorState = editor._editorState;
	const currentSelection = currentEditorState._selection;
	const pendingSelection = pendingEditorState._selection;
	const needsUpdate = editor._dirtyType !== NO_DIRTY_NODES;
	const previousActiveEditorState = activeEditorState;
	const previousReadOnlyMode = isReadOnlyMode;
	const previousActiveEditor = activeEditor;
	const previouslyUpdating = editor._updating;
	const observer = editor._observer;
	let mutatedNodes = null;
	editor._pendingEditorState = null;
	editor._editorState = pendingEditorState;
	if (!shouldSkipDOM && needsUpdate && observer !== null) {
		activeEditor = editor;
		activeEditorState = pendingEditorState;
		isReadOnlyMode = false;
		editor._updating = true;
		try {
			const dirtyType = editor._dirtyType;
			const dirtyElements = editor._dirtyElements;
			const dirtyLeaves = editor._dirtyLeaves;
			observer.disconnect();
			mutatedNodes = $reconcileRoot(currentEditorState, pendingEditorState, editor, dirtyType, dirtyElements, dirtyLeaves);
		} catch (error) {
			if (error instanceof Error) editor._onError(error);
			if (!isAttemptingToRecoverFromReconcilerError) {
				resetEditor(editor, null, rootElement, pendingEditorState);
				initMutationObserver(editor);
				editor._dirtyType = FULL_RECONCILE;
				isAttemptingToRecoverFromReconcilerError = true;
				$commitPendingUpdates(editor, currentEditorState);
				isAttemptingToRecoverFromReconcilerError = false;
			} else throw error;
			return;
		} finally {
			observer.observe(rootElement, observerOptions);
			editor._updating = previouslyUpdating;
			activeEditorState = previousActiveEditorState;
			isReadOnlyMode = previousReadOnlyMode;
			activeEditor = previousActiveEditor;
		}
	}
	if (!pendingEditorState._readOnly) {
		pendingEditorState._readOnly = true;
		handleDEVOnlyPendingUpdateGuarantees(pendingEditorState);
		if ($isRangeSelection$1(pendingSelection)) {
			Object.freeze(pendingSelection.anchor);
			Object.freeze(pendingSelection.focus);
		}
		Object.freeze(pendingSelection);
	}
	const dirtyLeaves = editor._dirtyLeaves;
	const dirtyElements = editor._dirtyElements;
	const normalizedNodes = editor._normalizedNodes;
	const tags = editor._updateTags;
	const deferred = editor._deferred;
	if (needsUpdate) {
		editor._dirtyType = NO_DIRTY_NODES;
		editor._cloneNotNeeded.clear();
		editor._dirtyLeaves = /* @__PURE__ */ new Set();
		editor._dirtyElements = /* @__PURE__ */ new Map();
		editor._normalizedNodes = /* @__PURE__ */ new Set();
		editor._updateTags = /* @__PURE__ */ new Set();
	}
	$garbageCollectDetachedDecorators(editor, pendingEditorState);
	const domSelection = shouldSkipDOM ? null : getDOMSelection$1(getWindow(editor));
	if (editor._editable && domSelection !== null && (needsUpdate || pendingSelection === null || pendingSelection.dirty || !pendingSelection.is(currentSelection)) && rootElement !== null && !tags.has("skip-dom-selection")) {
		activeEditor = editor;
		activeEditorState = pendingEditorState;
		try {
			if (observer !== null) observer.disconnect();
			if (needsUpdate || pendingSelection === null || pendingSelection.dirty) {
				const blockCursorElement = editor._blockCursorElement;
				if (blockCursorElement !== null) removeDOMBlockCursorElement(blockCursorElement, editor, rootElement);
				$updateDOMSelection(currentSelection, pendingSelection, editor, domSelection, tags, rootElement);
			}
			updateDOMBlockCursorElement(editor, rootElement, pendingSelection);
		} finally {
			if (observer !== null) observer.observe(rootElement, observerOptions);
			activeEditor = previousActiveEditor;
			activeEditorState = previousActiveEditorState;
		}
	}
	if (mutatedNodes !== null) triggerMutationListeners(editor, mutatedNodes, tags, dirtyLeaves, currentEditorState);
	if (!$isRangeSelection$1(pendingSelection) && pendingSelection !== null && (currentSelection === null || !currentSelection.is(pendingSelection))) editor.dispatchCommand(SELECTION_CHANGE_COMMAND$1, void 0);
	/**
	* Capture pendingDecorators after garbage collecting detached decorators
	*/
	const pendingDecorators = editor._pendingDecorators;
	if (pendingDecorators !== null) {
		editor._decorators = pendingDecorators;
		editor._pendingDecorators = null;
		triggerListeners("decorator", editor, true, pendingDecorators);
	}
	triggerTextContentListeners(editor, recoveryEditorState || currentEditorState, pendingEditorState);
	triggerListeners("update", editor, true, {
		dirtyElements,
		dirtyLeaves,
		editorState: pendingEditorState,
		mutatedNodes,
		normalizedNodes,
		prevEditorState: recoveryEditorState || currentEditorState,
		tags
	});
	triggerDeferredUpdateCallbacks(editor, deferred);
	$triggerEnqueuedUpdates(editor);
}
function triggerTextContentListeners(editor, currentEditorState, pendingEditorState) {
	const currentTextContent = getEditorStateTextContent(currentEditorState);
	const latestTextContent = getEditorStateTextContent(pendingEditorState);
	if (currentTextContent !== latestTextContent) triggerListeners("textcontent", editor, true, latestTextContent);
}
function triggerMutationListeners(editor, mutatedNodes, updateTags, dirtyLeaves, prevEditorState) {
	const listeners = Array.from(editor._listeners.mutation);
	const listenersLength = listeners.length;
	for (let i = 0; i < listenersLength; i++) {
		const [listener, klassSet] = listeners[i];
		for (const klass of klassSet) {
			const mutatedNodesByType = mutatedNodes.get(klass);
			if (mutatedNodesByType !== void 0) listener(mutatedNodesByType, {
				dirtyLeaves,
				prevEditorState,
				updateTags
			});
		}
	}
}
function triggerListeners(type, editor, isCurrentlyEnqueuingUpdates, ...payload) {
	const previouslyUpdating = editor._updating;
	editor._updating = isCurrentlyEnqueuingUpdates;
	try {
		const listenerMap = editor._listeners[type];
		const listeners = Array.from(listenerMap);
		for (const [listener, unregister] of listeners) {
			if (unregister) unregister();
			const nextUnregister = listener(...payload);
			if (listenerMap.has(listener)) listenerMap.set(listener, nextUnregister);
			else if (nextUnregister) nextUnregister();
		}
	} finally {
		editor._updating = previouslyUpdating;
	}
}
function triggerCommandListeners(editor, type, payload, fromEditor) {
	const editors = getEditorsToPropagate(editor);
	let updatingParentEditor;
	for (let i = 4; i >= 0; i--) for (let e = 0; e < editors.length; e++) {
		const currentEditor = editors[e];
		if (e > 0 && currentEditor._updating) {
			updatingParentEditor = currentEditor;
			break;
		}
		const listenerInPriorityOrder = currentEditor._commands.get(type);
		if (listenerInPriorityOrder !== void 0) {
			const listenersSet = listenerInPriorityOrder[i];
			if (listenersSet.size > 0) {
				let returnVal = false;
				updateEditorSync(currentEditor, () => {
					for (const listener of listenersSet) if (listener(payload, fromEditor)) {
						returnVal = true;
						return;
					}
				});
				if (returnVal) return returnVal;
			}
		}
	}
	if (updatingParentEditor) updatingParentEditor.update(() => {
		triggerCommandListeners(updatingParentEditor, type, payload, fromEditor);
	});
	return false;
}
function $triggerEnqueuedUpdates(editor) {
	const queuedUpdates = editor._updates;
	if (queuedUpdates.length !== 0) {
		const queuedUpdate = queuedUpdates.shift();
		if (queuedUpdate) {
			const [updateFn, options] = queuedUpdate;
			$beginUpdate(editor, updateFn, options);
		}
	}
}
function triggerDeferredUpdateCallbacks(editor, deferred) {
	editor._deferred = [];
	if (deferred.length !== 0) {
		const previouslyUpdating = editor._updating;
		editor._updating = true;
		try {
			for (let i = 0; i < deferred.length; i++) deferred[i]();
		} finally {
			editor._updating = previouslyUpdating;
		}
	}
}
function $processNestedUpdates(editor, initialSkipTransforms) {
	const queuedUpdates = editor._updates;
	let skipTransforms = initialSkipTransforms || false;
	while (queuedUpdates.length !== 0) {
		const queuedUpdate = queuedUpdates.shift();
		if (queuedUpdate) {
			const [nextUpdateFn, options] = queuedUpdate;
			const pendingEditorState = editor._pendingEditorState;
			let onUpdate;
			if (options !== void 0) {
				onUpdate = options.onUpdate;
				if (options.skipTransforms) skipTransforms = true;
				if (options.discrete) {
					if (!(pendingEditorState !== null)) formatDevErrorMessage(`Unexpected empty pending editor state on discrete nested update`);
					pendingEditorState._flushSync = true;
				}
				if (onUpdate) editor._deferred.push(onUpdate);
				addTags(editor, options.tag);
			}
			if (pendingEditorState == null) $beginUpdate(editor, nextUpdateFn, options);
			else nextUpdateFn();
		}
	}
	return skipTransforms;
}
function $beginUpdate(editor, updateFn, options) {
	const updateTags = editor._updateTags;
	let onUpdate;
	let skipTransforms = false;
	let discrete = false;
	if (options !== void 0) {
		onUpdate = options.onUpdate;
		addTags(editor, options.tag);
		skipTransforms = options.skipTransforms || false;
		discrete = options.discrete || false;
	}
	if (onUpdate) editor._deferred.push(onUpdate);
	const currentEditorState = editor._editorState;
	let pendingEditorState = editor._pendingEditorState;
	let editorStateWasCloned = false;
	if (pendingEditorState === null || pendingEditorState._readOnly) {
		pendingEditorState = editor._pendingEditorState = cloneEditorState(pendingEditorState || currentEditorState);
		editorStateWasCloned = true;
	}
	pendingEditorState._flushSync = discrete;
	const previousActiveEditorState = activeEditorState;
	const previousReadOnlyMode = isReadOnlyMode;
	const previousActiveEditor = activeEditor;
	const previouslyUpdating = editor._updating;
	activeEditorState = pendingEditorState;
	isReadOnlyMode = false;
	editor._updating = true;
	activeEditor = editor;
	const headless = editor._headless || editor.getRootElement() === null;
	setPendingNodeToClone(null);
	try {
		if (editorStateWasCloned) if (headless) {
			if (currentEditorState._selection !== null) pendingEditorState._selection = currentEditorState._selection.clone();
		} else pendingEditorState._selection = $internalCreateSelection(editor, options && options.event || null);
		const startingCompositionKey = editor._compositionKey;
		updateFn();
		skipTransforms = $processNestedUpdates(editor, skipTransforms);
		applySelectionTransforms(pendingEditorState, editor);
		if (editor._dirtyType !== NO_DIRTY_NODES) {
			if (skipTransforms) $normalizeAllDirtyTextNodes(pendingEditorState, editor);
			else $applyAllTransforms(pendingEditorState, editor);
			$processNestedUpdates(editor);
			$garbageCollectDetachedNodes(currentEditorState, pendingEditorState, editor._dirtyLeaves, editor._dirtyElements);
		}
		if (startingCompositionKey !== editor._compositionKey) pendingEditorState._flushSync = true;
		const pendingSelection = pendingEditorState._selection;
		if ($isRangeSelection$1(pendingSelection)) {
			const pendingNodeMap = pendingEditorState._nodeMap;
			const anchorKey = pendingSelection.anchor.key;
			const focusKey = pendingSelection.focus.key;
			if (pendingNodeMap.get(anchorKey) === void 0 || pendingNodeMap.get(focusKey) === void 0) formatDevErrorMessage(`updateEditor: selection has been lost because the previously selected nodes have been removed and selection wasn't moved to another node. Ensure selection changes after removing/replacing a selected node.`);
		} else if ($isNodeSelection$1(pendingSelection)) {
			if (pendingSelection._nodes.size === 0) pendingEditorState._selection = null;
		}
	} catch (error) {
		if (error instanceof Error) editor._onError(error);
		editor._pendingEditorState = currentEditorState;
		editor._dirtyType = FULL_RECONCILE;
		editor._cloneNotNeeded.clear();
		editor._dirtyLeaves = /* @__PURE__ */ new Set();
		editor._dirtyElements.clear();
		$commitPendingUpdates(editor);
		return;
	} finally {
		activeEditorState = previousActiveEditorState;
		isReadOnlyMode = previousReadOnlyMode;
		activeEditor = previousActiveEditor;
		editor._updating = previouslyUpdating;
		infiniteTransformCount = 0;
	}
	if (editor._dirtyType !== NO_DIRTY_NODES || editor._deferred.length > 0 || editorStateHasDirtySelection(pendingEditorState, editor)) {
		if (pendingEditorState._flushSync) {
			pendingEditorState._flushSync = false;
			$commitPendingUpdates(editor);
		} else if (editorStateWasCloned) scheduleMicroTask(() => {
			$commitPendingUpdates(editor);
		});
	} else {
		pendingEditorState._flushSync = false;
		if (editorStateWasCloned) {
			updateTags.clear();
			editor._deferred = [];
			editor._pendingEditorState = null;
		}
	}
}
/**
* A variant of updateEditor that will not defer if it is nested in an update
* to the same editor, much like if it was an editor.dispatchCommand issued
* within an update
*/
function updateEditorSync(editor, updateFn, options) {
	if (activeEditor === editor && options === void 0) updateFn();
	else $beginUpdate(editor, updateFn, options);
}
function updateEditor(editor, updateFn, options) {
	if (editor._updating) editor._updates.push([updateFn, options]);
	else $beginUpdate(editor, updateFn, options);
}
/**
* A utility class for managing the DOM children of an ElementNode
*/
var ElementDOMSlot = class ElementDOMSlot {
	element;
	before;
	after;
	constructor(element, before, after) {
		this.element = element;
		this.before = before || null;
		this.after = after || null;
	}
	/**
	* Return a new ElementDOMSlot where all managed children will be inserted before this node
	*/
	withBefore(before) {
		return new ElementDOMSlot(this.element, before, this.after);
	}
	/**
	* Return a new ElementDOMSlot where all managed children will be inserted after this node
	*/
	withAfter(after) {
		return new ElementDOMSlot(this.element, this.before, after);
	}
	/**
	* Return a new ElementDOMSlot with an updated root element
	*/
	withElement(element) {
		if (this.element === element) return this;
		return new ElementDOMSlot(element, this.before, this.after);
	}
	/**
	* Insert the given child before this.before and any reconciler managed line break node,
	* or append it if this.before is not defined
	*/
	insertChild(dom) {
		const before = this.before || this.getManagedLineBreak();
		if (!(before === null || before.parentElement === this.element)) formatDevErrorMessage(`ElementDOMSlot.insertChild: before is not in element`);
		this.element.insertBefore(dom, before);
		return this;
	}
	/**
	* Remove the managed child from this container, will throw if it was not already there
	*/
	removeChild(dom) {
		if (!(dom.parentElement === this.element)) formatDevErrorMessage(`ElementDOMSlot.removeChild: dom is not in element`);
		this.element.removeChild(dom);
		return this;
	}
	/**
	* Replace managed child prevDom with dom. Will throw if prevDom is not a child
	*
	* @param dom The new node to replace prevDom
	* @param prevDom the node that will be replaced
	*/
	replaceChild(dom, prevDom) {
		if (!(prevDom.parentElement === this.element)) formatDevErrorMessage(`ElementDOMSlot.replaceChild: prevDom is not in element`);
		this.element.replaceChild(dom, prevDom);
		return this;
	}
	/**
	* Returns the first managed child of this node,
	* which will either be this.after.nextSibling or this.element.firstChild,
	* and will never be this.before if it is defined.
	*/
	getFirstChild() {
		const firstChild = this.after ? this.after.nextSibling : this.element.firstChild;
		return firstChild === this.before || firstChild === this.getManagedLineBreak() ? null : firstChild;
	}
	/**
	* @internal
	*/
	getManagedLineBreak() {
		return this.element.__lexicalLineBreak || null;
	}
	/** @internal */
	setManagedLineBreak(lineBreakType) {
		if (lineBreakType === null) this.removeManagedLineBreak();
		else {
			const webkitHack = lineBreakType === "decorator" && (IS_APPLE_WEBKIT || IS_IOS || IS_SAFARI);
			this.insertManagedLineBreak(webkitHack);
		}
	}
	/** @internal */
	removeManagedLineBreak() {
		const br = this.getManagedLineBreak();
		if (br) {
			const element = this.element;
			const sibling = br.nodeName === "IMG" ? br.nextSibling : null;
			if (sibling) element.removeChild(sibling);
			element.removeChild(br);
			element.__lexicalLineBreak = void 0;
		}
	}
	/** @internal */
	insertManagedLineBreak(webkitHack) {
		const prevBreak = this.getManagedLineBreak();
		if (prevBreak) {
			if (webkitHack === (prevBreak.nodeName === "IMG")) return;
			this.removeManagedLineBreak();
		}
		const element = this.element;
		const before = this.before;
		const br = document.createElement("br");
		element.insertBefore(br, before);
		if (webkitHack) {
			const img = document.createElement("img");
			img.setAttribute("data-lexical-linebreak", "true");
			img.style.setProperty("display", "inline", "important");
			img.style.setProperty("border", "0px", "important");
			img.style.setProperty("margin", "0px", "important");
			img.alt = "";
			element.insertBefore(img, br);
			element.__lexicalLineBreak = img;
		} else element.__lexicalLineBreak = br;
	}
	/**
	* @internal
	*
	* Returns the offset of the first child
	*/
	getFirstChildOffset() {
		let i = 0;
		for (let node = this.after; node !== null; node = node.previousSibling) i++;
		return i;
	}
	/**
	* @internal
	*/
	resolveChildIndex(element, elementDOM, initialDOM, initialOffset) {
		if (initialDOM === this.element) {
			const firstChildOffset = this.getFirstChildOffset();
			return [element, Math.min(firstChildOffset + element.getChildrenSize(), Math.max(firstChildOffset, initialOffset))];
		}
		const initialPath = indexPath(elementDOM, initialDOM);
		initialPath.push(initialOffset);
		const elementPath = indexPath(elementDOM, this.element);
		let offset = element.getIndexWithinParent();
		for (let i = 0; i < elementPath.length; i++) {
			const target = initialPath[i];
			const source = elementPath[i];
			if (target === void 0 || target < source) break;
			else if (target > source) {
				offset += 1;
				break;
			}
		}
		return [element.getParentOrThrow(), offset];
	}
};
function indexPath(root, child) {
	const path = [];
	let node = child;
	for (; node !== root && node !== null; node = node.parentNode) {
		let i = 0;
		for (let sibling = node.previousSibling; sibling !== null; sibling = sibling.previousSibling) i++;
		path.push(i);
	}
	if (!(node === root)) formatDevErrorMessage(`indexPath: root is not a parent of child`);
	return path.reverse();
}
/** @noInheritDoc */
var ElementNode$1 = class extends LexicalNode {
	/** @internal */
	/** @internal */
	__first;
	/** @internal */
	__last;
	/** @internal */
	__size;
	/** @internal */
	__format;
	/** @internal */
	__style;
	/** @internal */
	__indent;
	/** @internal */
	__dir;
	/** @internal */
	__textFormat;
	/** @internal */
	__textStyle;
	constructor(key) {
		super(key);
		this.__first = null;
		this.__last = null;
		this.__size = 0;
		this.__format = 0;
		this.__style = "";
		this.__indent = 0;
		this.__dir = null;
		this.__textFormat = 0;
		this.__textStyle = "";
	}
	afterCloneFrom(prevNode) {
		super.afterCloneFrom(prevNode);
		if (this.__key === prevNode.__key) {
			this.__first = prevNode.__first;
			this.__last = prevNode.__last;
			this.__size = prevNode.__size;
		}
		this.__indent = prevNode.__indent;
		this.__format = prevNode.__format;
		this.__style = prevNode.__style;
		this.__dir = prevNode.__dir;
		this.__textFormat = prevNode.__textFormat;
		this.__textStyle = prevNode.__textStyle;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getFormatType() {
		const format = this.getFormat();
		return ELEMENT_FORMAT_TO_TYPE[format] || "";
	}
	getStyle() {
		return this.getLatest().__style;
	}
	getIndent() {
		return this.getLatest().__indent;
	}
	getChildren() {
		const children = [];
		let child = this.getFirstChild();
		while (child !== null) {
			children.push(child);
			child = child.getNextSibling();
		}
		return children;
	}
	getChildrenKeys() {
		const children = [];
		let child = this.getFirstChild();
		while (child !== null) {
			children.push(child.__key);
			child = child.getNextSibling();
		}
		return children;
	}
	getChildrenSize() {
		return this.getLatest().__size;
	}
	isEmpty() {
		return this.getChildrenSize() === 0;
	}
	isDirty() {
		const dirtyElements = getActiveEditor()._dirtyElements;
		return dirtyElements !== null && dirtyElements.has(this.__key);
	}
	isLastChild() {
		const self = this.getLatest();
		const parentLastChild = this.getParentOrThrow().getLastChild();
		return parentLastChild !== null && parentLastChild.is(self);
	}
	getAllTextNodes() {
		const textNodes = [];
		let child = this.getFirstChild();
		while (child !== null) {
			if ($isTextNode$1(child)) textNodes.push(child);
			if ($isElementNode$1(child)) {
				const subChildrenNodes = child.getAllTextNodes();
				textNodes.push(...subChildrenNodes);
			}
			child = child.getNextSibling();
		}
		return textNodes;
	}
	getFirstDescendant() {
		let node = this.getFirstChild();
		while ($isElementNode$1(node)) {
			const child = node.getFirstChild();
			if (child === null) break;
			node = child;
		}
		return node;
	}
	getLastDescendant() {
		let node = this.getLastChild();
		while ($isElementNode$1(node)) {
			const child = node.getLastChild();
			if (child === null) break;
			node = child;
		}
		return node;
	}
	getDescendantByIndex(index) {
		const children = this.getChildren();
		const childrenLength = children.length;
		if (index >= childrenLength) {
			const resolvedNode = children[childrenLength - 1];
			return $isElementNode$1(resolvedNode) && resolvedNode.getLastDescendant() || resolvedNode || null;
		}
		const resolvedNode = children[index];
		return $isElementNode$1(resolvedNode) && resolvedNode.getFirstDescendant() || resolvedNode || null;
	}
	getFirstChild() {
		const firstKey = this.getLatest().__first;
		return firstKey === null ? null : $getNodeByKey$1(firstKey);
	}
	getFirstChildOrThrow() {
		const firstChild = this.getFirstChild();
		if (firstChild === null) formatDevErrorMessage(`Expected node ${this.__key} to have a first child.`);
		return firstChild;
	}
	getLastChild() {
		const lastKey = this.getLatest().__last;
		return lastKey === null ? null : $getNodeByKey$1(lastKey);
	}
	getLastChildOrThrow() {
		const lastChild = this.getLastChild();
		if (lastChild === null) formatDevErrorMessage(`Expected node ${this.__key} to have a last child.`);
		return lastChild;
	}
	getChildAtIndex(index) {
		const size = this.getChildrenSize();
		let node;
		let i;
		if (index < size / 2) {
			node = this.getFirstChild();
			i = 0;
			while (node !== null && i <= index) {
				if (i === index) return node;
				node = node.getNextSibling();
				i++;
			}
			return null;
		}
		node = this.getLastChild();
		i = size - 1;
		while (node !== null && i >= index) {
			if (i === index) return node;
			node = node.getPreviousSibling();
			i--;
		}
		return null;
	}
	getTextContent() {
		let textContent = "";
		const children = this.getChildren();
		const childrenLength = children.length;
		for (let i = 0; i < childrenLength; i++) {
			const child = children[i];
			textContent += child.getTextContent();
			if ($isElementNode$1(child) && i !== childrenLength - 1 && !child.isInline()) textContent += DOUBLE_LINE_BREAK;
		}
		return textContent;
	}
	getTextContentSize() {
		let textContentSize = 0;
		const children = this.getChildren();
		const childrenLength = children.length;
		for (let i = 0; i < childrenLength; i++) {
			const child = children[i];
			textContentSize += child.getTextContentSize();
			if ($isElementNode$1(child) && i !== childrenLength - 1 && !child.isInline()) textContentSize += 2;
		}
		return textContentSize;
	}
	getDirection() {
		return this.getLatest().__dir;
	}
	getTextFormat() {
		return this.getLatest().__textFormat;
	}
	hasFormat(type) {
		if (type !== "") {
			const formatFlag = ELEMENT_TYPE_TO_FORMAT[type];
			return (this.getFormat() & formatFlag) !== 0;
		}
		return false;
	}
	hasTextFormat(type) {
		const formatFlag = TEXT_TYPE_TO_FORMAT$1[type];
		return (this.getTextFormat() & formatFlag) !== 0;
	}
	/**
	* Returns the format flags applied to the node as a 32-bit integer.
	*
	* @returns a number representing the TextFormatTypes applied to the node.
	*/
	getFormatFlags(type, alignWithFormat) {
		const format = this.getLatest().__textFormat;
		return toggleTextFormatType$1(format, type, alignWithFormat);
	}
	getTextStyle() {
		return this.getLatest().__textStyle;
	}
	select(_anchorOffset, _focusOffset) {
		errorOnReadOnly();
		const selection = $getSelection$1();
		let anchorOffset = _anchorOffset;
		let focusOffset = _focusOffset;
		const childrenCount = this.getChildrenSize();
		if (!this.canBeEmpty()) {
			if (_anchorOffset === 0 && _focusOffset === 0) {
				const firstChild = this.getFirstChild();
				if ($isTextNode$1(firstChild) || $isElementNode$1(firstChild)) return firstChild.select(0, 0);
			} else if ((_anchorOffset === void 0 || _anchorOffset === childrenCount) && (_focusOffset === void 0 || _focusOffset === childrenCount)) {
				const lastChild = this.getLastChild();
				if ($isTextNode$1(lastChild) || $isElementNode$1(lastChild)) return lastChild.select();
			}
		}
		if (anchorOffset === void 0) anchorOffset = childrenCount;
		if (focusOffset === void 0) focusOffset = childrenCount;
		const key = this.__key;
		if (!$isRangeSelection$1(selection)) return $internalMakeRangeSelection(key, anchorOffset, key, focusOffset, "element", "element");
		else {
			selection.anchor.set(key, anchorOffset, "element");
			selection.focus.set(key, focusOffset, "element");
			selection.dirty = true;
		}
		return selection;
	}
	selectStart() {
		const firstNode = this.getFirstDescendant();
		return firstNode ? firstNode.selectStart() : this.select();
	}
	selectEnd() {
		const lastNode = this.getLastDescendant();
		return lastNode ? lastNode.selectEnd() : this.select();
	}
	clear() {
		const writableSelf = this.getWritable();
		this.getChildren().forEach((child) => child.remove());
		return writableSelf;
	}
	append(...nodesToAppend) {
		return this.splice(this.getChildrenSize(), 0, nodesToAppend);
	}
	setDirection(direction) {
		const self = this.getWritable();
		self.__dir = direction;
		return self;
	}
	setFormat(type) {
		const self = this.getWritable();
		self.__format = type !== "" ? ELEMENT_TYPE_TO_FORMAT[type] || 0 : 0;
		return this;
	}
	setStyle(style) {
		const self = this.getWritable();
		self.__style = style || "";
		return this;
	}
	setTextFormat(type) {
		const self = this.getWritable();
		self.__textFormat = type;
		return self;
	}
	setTextStyle(style) {
		const self = this.getWritable();
		self.__textStyle = style;
		return self;
	}
	setIndent(indentLevel) {
		const self = this.getWritable();
		self.__indent = indentLevel;
		return this;
	}
	splice(start, deleteCount, nodesToInsert) {
		if (!!$isEphemeral(this)) formatDevErrorMessage(`ElementNode.splice: Ephemeral nodes can not mutate their children (key ${this.__key} type ${this.__type})`);
		const oldSize = this.getChildrenSize();
		const writableSelf = this.getWritable();
		if (!(start + deleteCount <= oldSize)) formatDevErrorMessage(`ElementNode.splice: start + deleteCount > oldSize (${String(start)} + ${String(deleteCount)} > ${String(oldSize)})`);
		const writableSelfKey = writableSelf.__key;
		const nodesToInsertKeys = [];
		const nodesToRemoveKeys = [];
		const nodeAfterRange = this.getChildAtIndex(start + deleteCount);
		let nodeBeforeRange = null;
		let newSize = oldSize - deleteCount + nodesToInsert.length;
		if (start !== 0) if (start === oldSize) nodeBeforeRange = this.getLastChild();
		else {
			const node = this.getChildAtIndex(start);
			if (node !== null) nodeBeforeRange = node.getPreviousSibling();
		}
		if (deleteCount > 0) {
			let nodeToDelete = nodeBeforeRange === null ? this.getFirstChild() : nodeBeforeRange.getNextSibling();
			for (let i = 0; i < deleteCount; i++) {
				if (nodeToDelete === null) formatDevErrorMessage(`splice: sibling not found`);
				const nextSibling = nodeToDelete.getNextSibling();
				const nodeKeyToDelete = nodeToDelete.__key;
				removeFromParent$1(nodeToDelete.getWritable());
				nodesToRemoveKeys.push(nodeKeyToDelete);
				nodeToDelete = nextSibling;
			}
		}
		let prevNode = nodeBeforeRange;
		for (const nodeToInsert of nodesToInsert) {
			if (prevNode !== null && nodeToInsert.is(prevNode)) nodeBeforeRange = prevNode = prevNode.getPreviousSibling();
			const writableNodeToInsert = nodeToInsert.getWritable();
			if (writableNodeToInsert.__parent === writableSelfKey) newSize--;
			removeFromParent$1(writableNodeToInsert);
			const nodeKeyToInsert = nodeToInsert.__key;
			if (prevNode === null) {
				writableSelf.__first = nodeKeyToInsert;
				writableNodeToInsert.__prev = null;
			} else {
				const writablePrevNode = prevNode.getWritable();
				writablePrevNode.__next = nodeKeyToInsert;
				writableNodeToInsert.__prev = writablePrevNode.__key;
			}
			if (nodeToInsert.__key === writableSelfKey) formatDevErrorMessage(`append: attempting to append self`);
			writableNodeToInsert.__parent = writableSelfKey;
			nodesToInsertKeys.push(nodeKeyToInsert);
			prevNode = nodeToInsert;
		}
		if (start + deleteCount === oldSize) {
			if (prevNode !== null) {
				const writablePrevNode = prevNode.getWritable();
				writablePrevNode.__next = null;
				writableSelf.__last = prevNode.__key;
			}
		} else if (nodeAfterRange !== null) {
			const writableNodeAfterRange = nodeAfterRange.getWritable();
			if (prevNode !== null) {
				const writablePrevNode = prevNode.getWritable();
				writableNodeAfterRange.__prev = prevNode.__key;
				writablePrevNode.__next = nodeAfterRange.__key;
			} else writableNodeAfterRange.__prev = null;
		}
		writableSelf.__size = newSize;
		if (nodesToRemoveKeys.length) {
			const selection = $getSelection$1();
			if ($isRangeSelection$1(selection)) {
				const nodesToRemoveKeySet = new Set(nodesToRemoveKeys);
				const nodesToInsertKeySet = new Set(nodesToInsertKeys);
				const { anchor, focus } = selection;
				if (isPointRemoved(anchor, nodesToRemoveKeySet, nodesToInsertKeySet)) moveSelectionPointToSibling(anchor, anchor.getNode(), this, nodeBeforeRange, nodeAfterRange);
				if (isPointRemoved(focus, nodesToRemoveKeySet, nodesToInsertKeySet)) moveSelectionPointToSibling(focus, focus.getNode(), this, nodeBeforeRange, nodeAfterRange);
				if (newSize === 0 && !this.canBeEmpty() && !$isRootOrShadowRoot$1(this)) this.remove();
			}
		}
		return writableSelf;
	}
	/**
	* @internal
	*
	* An experimental API that an ElementNode can override to control where its
	* children are inserted into the DOM, this is useful to add a wrapping node
	* or accessory nodes before or after the children. The root of the node returned
	* by createDOM must still be exactly one HTMLElement.
	*/
	getDOMSlot(element) {
		return new ElementDOMSlot(element);
	}
	exportDOM(editor) {
		const { element } = super.exportDOM(editor);
		if (isHTMLElement$1(element)) {
			const indent = this.getIndent();
			if (indent > 0) element.style.paddingInlineStart = `${indent * 40}px`;
			const direction = this.getDirection();
			if (direction) element.dir = direction;
		}
		return { element };
	}
	exportJSON() {
		const json = {
			children: [],
			direction: this.getDirection(),
			format: this.getFormatType(),
			indent: this.getIndent(),
			...super.exportJSON()
		};
		const textFormat = this.getTextFormat();
		const textStyle = this.getTextStyle();
		if ((textFormat !== 0 || textStyle !== "") && !$isRootOrShadowRoot$1(this) && !this.getChildren().some($isTextNode$1)) {
			if (textFormat !== 0) json.textFormat = textFormat;
			if (textStyle !== "") json.textStyle = textStyle;
		}
		return json;
	}
	updateFromJSON(serializedNode) {
		return super.updateFromJSON(serializedNode).setFormat(serializedNode.format).setIndent(serializedNode.indent).setDirection(serializedNode.direction).setTextFormat(serializedNode.textFormat || 0).setTextStyle(serializedNode.textStyle || "");
	}
	insertNewAfter(selection, restoreSelection) {
		return null;
	}
	canIndent() {
		return true;
	}
	collapseAtStart(selection) {
		return false;
	}
	excludeFromCopy(destination) {
		return false;
	}
	/** @deprecated @internal */
	canReplaceWith(replacement) {
		return true;
	}
	/** @deprecated @internal */
	canInsertAfter(node) {
		return true;
	}
	canBeEmpty() {
		return true;
	}
	canInsertTextBefore() {
		return true;
	}
	canInsertTextAfter() {
		return true;
	}
	isInline() {
		return false;
	}
	isShadowRoot() {
		return false;
	}
	/** @deprecated @internal */
	canMergeWith(node) {
		return false;
	}
	extractWithChild(child, selection, destination) {
		return false;
	}
	/**
	* Determines whether this node, when empty, can merge with a first block
	* of nodes being inserted.
	*
	* This method is specifically called in {@link RangeSelection.insertNodes}
	* to determine merging behavior during nodes insertion.
	*
	* @example
	* // In a ListItemNode or QuoteNode implementation:
	* canMergeWhenEmpty(): true {
	*  return true;
	* }
	*/
	canMergeWhenEmpty() {
		return false;
	}
	/** @internal */
	reconcileObservedMutation(dom, editor) {
		const slot = $getEditorDOMRenderConfig$1(editor).$getDOMSlot(this, dom, editor);
		let currentDOM = slot.getFirstChild();
		for (let currentNode = this.getFirstChild(); currentNode; currentNode = currentNode.getNextSibling()) {
			const correctDOM = editor.getElementByKey(currentNode.getKey());
			if (correctDOM === null) continue;
			if (currentDOM == null) {
				slot.insertChild(correctDOM);
				currentDOM = correctDOM;
			} else if (currentDOM !== correctDOM) slot.replaceChild(correctDOM, currentDOM);
			currentDOM = currentDOM.nextSibling;
		}
	}
};
function $isElementNode$1(node) {
	return node instanceof ElementNode$1;
}
function isPointRemoved(point, nodesToRemoveKeySet, nodesToInsertKeySet) {
	let node = point.getNode();
	while (node) {
		const nodeKey = node.__key;
		if (nodesToRemoveKeySet.has(nodeKey) && !nodesToInsertKeySet.has(nodeKey)) return true;
		node = node.getParent();
	}
	return false;
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
/** @noInheritDoc */
var DecoratorNode$1 = class extends LexicalNode {
	/** @internal */
	/**
	* The returned value is added to the LexicalEditor._decorators
	*/
	decorate(editor, config) {
		return null;
	}
	isIsolated() {
		return false;
	}
	isInline() {
		return true;
	}
	isKeyboardSelectable() {
		return true;
	}
};
function $isDecoratorNode$1(node) {
	return node instanceof DecoratorNode$1;
}
/** @noInheritDoc */
var RootNode$1 = class RootNode$1 extends ElementNode$1 {
	/** @internal */
	__cachedText;
	static getType() {
		return "root";
	}
	static clone() {
		return new RootNode$1();
	}
	constructor() {
		super("root");
		this.__cachedText = null;
	}
	getTopLevelElementOrThrow() {
		formatDevErrorMessage(`getTopLevelElementOrThrow: root nodes are not top level elements`);
	}
	getTextContent() {
		const cachedText = this.__cachedText;
		if (isCurrentlyReadOnlyMode$1() || getActiveEditor()._dirtyType === NO_DIRTY_NODES) {
			if (cachedText !== null) return cachedText;
		}
		return super.getTextContent();
	}
	remove() {
		formatDevErrorMessage(`remove: cannot be called on root nodes`);
	}
	replace(node) {
		formatDevErrorMessage(`replace: cannot be called on root nodes`);
	}
	insertBefore(nodeToInsert) {
		formatDevErrorMessage(`insertBefore: cannot be called on root nodes`);
	}
	insertAfter(nodeToInsert) {
		formatDevErrorMessage(`insertAfter: cannot be called on root nodes`);
	}
	updateDOM(prevNode, dom) {
		return false;
	}
	splice(start, deleteCount, nodesToInsert) {
		for (const node of nodesToInsert) if (!($isElementNode$1(node) || $isDecoratorNode$1(node))) formatDevErrorMessage(`rootNode.splice: Only element or decorator nodes can be inserted to the root node`);
		return super.splice(start, deleteCount, nodesToInsert);
	}
	static importJSON(serializedNode) {
		return $getRoot$1().updateFromJSON(serializedNode);
	}
	collapseAtStart() {
		return true;
	}
};
function $createRootNode() {
	return new RootNode$1();
}
function $isRootNode$1(node) {
	return node instanceof RootNode$1;
}
function editorStateHasDirtySelection(editorState, editor) {
	const currentSelection = editor.getEditorState()._selection;
	const pendingSelection = editorState._selection;
	if (pendingSelection !== null) {
		if (pendingSelection.dirty || !pendingSelection.is(currentSelection)) return true;
	} else if (currentSelection !== null) return true;
	return false;
}
function cloneEditorState(current) {
	return new EditorState(new Map(current._nodeMap));
}
function createEmptyEditorState() {
	return new EditorState(/* @__PURE__ */ new Map([["root", $createRootNode()]]));
}
function exportNodeToJSON(node) {
	const serializedNode = node.exportJSON();
	const nodeClass = node.constructor;
	if (serializedNode.type !== nodeClass.getType()) formatDevErrorMessage(`LexicalNode: Node ${nodeClass.name} does not match the serialized type. Check if .exportJSON() is implemented and it is returning the correct type.`);
	if ($isElementNode$1(node)) {
		const serializedChildren = serializedNode.children;
		if (!Array.isArray(serializedChildren)) formatDevErrorMessage(`LexicalNode: Node ${nodeClass.name} is an element but .exportJSON() does not have a children array.`);
		const children = node.getChildren();
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			const serializedChildNode = exportNodeToJSON(child);
			serializedChildren.push(serializedChildNode);
		}
	}
	return serializedNode;
}
/**
* Type guard that returns true if the argument is an EditorState
*/
function $isEditorState$1(x) {
	return x instanceof EditorState;
}
var EditorState = class EditorState {
	_nodeMap;
	_selection;
	_flushSync;
	_readOnly;
	constructor(nodeMap, selection) {
		this._nodeMap = nodeMap;
		this._selection = selection || null;
		this._flushSync = false;
		this._readOnly = false;
	}
	isEmpty() {
		return this._nodeMap.size === 1 && this._selection === null;
	}
	read(callbackFn, options) {
		return readEditorState(options && options.editor || null, this, callbackFn);
	}
	clone(selection) {
		const editorState = new EditorState(this._nodeMap, selection === void 0 ? this._selection : selection);
		editorState._readOnly = true;
		return editorState;
	}
	toJSON() {
		return readEditorState(null, this, () => ({ root: exportNodeToJSON($getRoot$1()) }));
	}
};
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
/** @internal */
var ArtificialNode__DO_NOT_USE$1 = class extends ElementNode$1 {
	static getType() {
		return "artificial";
	}
	createDOM(config) {
		return document.createElement("div");
	}
};
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
/** @noInheritDoc */
var ParagraphNode$1 = class ParagraphNode$1 extends ElementNode$1 {
	/** @internal */
	static getType() {
		return "paragraph";
	}
	static clone(node) {
		return new ParagraphNode$1(node.__key);
	}
	createDOM(config) {
		const dom = document.createElement("p");
		const classNames = getCachedClassNameArray(config.theme, "paragraph");
		if (classNames !== void 0) dom.classList.add(...classNames);
		return dom;
	}
	updateDOM(prevNode, dom, config) {
		return false;
	}
	static importDOM() {
		return { p: (node) => ({
			conversion: $convertParagraphElement,
			priority: 0
		}) };
	}
	exportDOM(editor) {
		const { element } = super.exportDOM(editor);
		if (isHTMLElement$1(element)) {
			if (this.isEmpty()) element.append(document.createElement("br"));
			const formatType = this.getFormatType();
			if (formatType) element.style.textAlign = formatType;
		}
		return { element };
	}
	static importJSON(serializedNode) {
		return $createParagraphNode$1().updateFromJSON(serializedNode);
	}
	exportJSON() {
		const json = super.exportJSON();
		if (json.textFormat === void 0 || json.textStyle === void 0) {
			const firstTextNode = this.getChildren().find($isTextNode$1);
			if (firstTextNode) {
				json.textFormat = firstTextNode.getFormat();
				json.textStyle = firstTextNode.getStyle();
			} else {
				json.textFormat = this.getTextFormat();
				json.textStyle = this.getTextStyle();
			}
		}
		return json;
	}
	insertNewAfter(rangeSelection, restoreSelection) {
		const newElement = $createParagraphNode$1();
		newElement.setTextFormat(rangeSelection.format);
		newElement.setTextStyle(rangeSelection.style);
		const direction = this.getDirection();
		newElement.setDirection(direction);
		newElement.setFormat(this.getFormatType());
		newElement.setStyle(this.getStyle());
		this.insertAfter(newElement, restoreSelection);
		return newElement;
	}
	collapseAtStart() {
		const children = this.getChildren();
		if (children.length === 0 || $isTextNode$1(children[0]) && children[0].getTextContent().trim() === "") {
			if (this.getNextSibling() !== null) {
				this.selectNext();
				this.remove();
				return true;
			}
			if (this.getPreviousSibling() !== null) {
				this.selectPrevious();
				this.remove();
				return true;
			}
		}
		return false;
	}
};
function $convertParagraphElement(element) {
	const node = $createParagraphNode$1();
	if (element.style) {
		node.setFormat(element.style.textAlign);
		setNodeIndentFromDOM$1(element, node);
	}
	if (node.getFormatType() === "") {
		const align = element.getAttribute("align");
		if (align) {
			if (align && align in ELEMENT_TYPE_TO_FORMAT) node.setFormat(align);
		}
	}
	return { node };
}
function $createParagraphNode$1() {
	return $applyNodeReplacement$1(new ParagraphNode$1());
}
function $isParagraphNode$1(node) {
	return node instanceof ParagraphNode$1;
}
/**
* A LexicalNode class or LexicalNodeReplacement configuration
*/
/** @internal @experimental */
const DEFAULT_SKIP_INITIALIZATION = false;
function normalizePriority(priority) {
	return priority & 7;
}
/**
* Type helper for extracting the payload type from a command.
*
* @example
* ```ts
* const MY_COMMAND = createCommand<SomeType>();
*
* // ...
*
* editor.registerCommand(MY_COMMAND, payload => {
*   // Type of `payload` is inferred here. But lets say we want to extract a function to delegate to
*   $handleMyCommand(editor, payload);
*   return true;
* });
*
* function $handleMyCommand(editor: LexicalEditor, payload: CommandPayloadType<typeof MY_COMMAND>) {
*   // `payload` is of type `SomeType`, extracted from the command.
* }
* ```
*/
function resetEditor(editor, prevRootElement, nextRootElement, pendingEditorState) {
	const keyNodeMap = editor._keyToDOMMap;
	keyNodeMap.clear();
	editor._editorState = createEmptyEditorState();
	editor._pendingEditorState = pendingEditorState;
	editor._compositionKey = null;
	editor._dirtyType = NO_DIRTY_NODES;
	editor._cloneNotNeeded.clear();
	editor._dirtyLeaves = /* @__PURE__ */ new Set();
	editor._dirtyElements.clear();
	editor._normalizedNodes = /* @__PURE__ */ new Set();
	editor._updateTags = /* @__PURE__ */ new Set();
	editor._updates = [];
	editor._blockCursorElement = null;
	const observer = editor._observer;
	if (observer !== null) {
		observer.disconnect();
		editor._observer = null;
	}
	if (prevRootElement !== null) prevRootElement.textContent = "";
	if (nextRootElement !== null) {
		nextRootElement.textContent = "";
		keyNodeMap.set("root", nextRootElement);
	}
}
function initializeConversionCache(nodes, additionalConversions) {
	const conversionCache = /* @__PURE__ */ new Map();
	const handledConversions = /* @__PURE__ */ new Set();
	const addConversionsToCache = (map) => {
		Object.keys(map).forEach((key) => {
			let currentCache = conversionCache.get(key);
			if (currentCache === void 0) {
				currentCache = [];
				conversionCache.set(key, currentCache);
			}
			currentCache.push(map[key]);
		});
	};
	nodes.forEach((node) => {
		const importDOM = node.klass.importDOM;
		if (importDOM == null || handledConversions.has(importDOM)) return;
		handledConversions.add(importDOM);
		const map = importDOM.call(node.klass);
		if (map !== null) addConversionsToCache(map);
	});
	if (additionalConversions) addConversionsToCache(additionalConversions);
	return conversionCache;
}
/** @internal */
function getTransformSetFromKlass$1(klass) {
	const transforms = /* @__PURE__ */ new Set();
	const staticTransforms = /* @__PURE__ */ new Set();
	let currentKlass = klass;
	while (currentKlass) {
		const { ownNodeConfig } = getStaticNodeConfig$1(currentKlass);
		const staticTransform = currentKlass.transform;
		if (!staticTransforms.has(staticTransform)) {
			staticTransforms.add(staticTransform);
			const transform = currentKlass.transform();
			if (transform) transforms.add(transform);
		}
		if (ownNodeConfig) {
			const $transform = ownNodeConfig.$transform;
			if ($transform) transforms.add($transform);
			currentKlass = ownNodeConfig.extends;
		} else {
			const parent = Object.getPrototypeOf(currentKlass);
			currentKlass = parent.prototype instanceof LexicalNode && parent !== LexicalNode ? parent : void 0;
		}
	}
	return transforms;
}
/** @internal @experimental */
const DEFAULT_EDITOR_DOM_CONFIG$1 = {
	$createDOM: (node, editor) => node.createDOM(editor._config, editor),
	$decorateDOM: (_node, _prevNode, _dom, _editor) => {},
	$exportDOM: (node, editor) => {
		const registeredNode = getRegisteredNode$1(editor, node.getType());
		return registeredNode && registeredNode.exportDOM !== void 0 ? registeredNode.exportDOM(editor, node) : node.exportDOM(editor);
	},
	$extractWithChild: (node, childNode, selection, destination, _editor) => $isElementNode$1(node) && node.extractWithChild(childNode, selection, destination),
	$getDOMSlot: (node, dom, _editor) => {
		if (!$isElementNode$1(node)) formatDevErrorMessage(`$getDOMSlot called on a non-ElementNode (key ${node.getKey()} type ${node.getType()})`);
		return node.getDOMSlot(dom);
	},
	$shouldExclude: (node, _selection, _editor) => $isElementNode$1(node) && node.excludeFromCopy("html"),
	$shouldInclude: (node, selection, _editor) => selection ? node.isSelected(selection) : true,
	$updateDOM: (nextNode, prevNode, dom, editor) => nextNode.updateDOM(prevNode, dom, editor._config)
};
/**
* Creates a new LexicalEditor attached to a single contentEditable (provided in the config). This is
* the lowest-level initialization API for a LexicalEditor. If you're using React or another framework,
* consider using the appropriate abstractions, such as LexicalComposer
* @param editorConfig - the editor configuration.
* @returns a LexicalEditor instance
*/
function createEditor$1(editorConfig) {
	const config = editorConfig || {};
	const activeEditor = internalGetActiveEditor();
	const theme = config.theme || {};
	const parentEditor = editorConfig === void 0 ? activeEditor : config.parentEditor || null;
	const disableEvents = config.disableEvents || false;
	const editorState = createEmptyEditorState();
	const namespace = config.namespace || (parentEditor !== null ? parentEditor._config.namespace : createUID());
	const initialEditorState = config.editorState;
	const nodes = [
		RootNode$1,
		TextNode$1,
		LineBreakNode$1,
		TabNode$1,
		ParagraphNode$1,
		ArtificialNode__DO_NOT_USE$1,
		...config.nodes || []
	];
	const { onError, html } = config;
	const isEditable = config.editable !== void 0 ? config.editable : true;
	let registeredNodes;
	if (editorConfig === void 0 && activeEditor !== null) registeredNodes = activeEditor._nodes;
	else {
		registeredNodes = /* @__PURE__ */ new Map();
		for (let i = 0; i < nodes.length; i++) {
			let klass = nodes[i];
			let replace = null;
			let replaceWithKlass = null;
			if (typeof klass !== "function") {
				const options = klass;
				klass = options.replace;
				replace = options.with;
				replaceWithKlass = options.withKlass || null;
			}
			getStaticNodeConfig$1(klass);
			{
				const name = klass.name;
				const nodeType = hasOwnStaticMethod(klass, "getType") && klass.getType();
				if (replaceWithKlass) {
					if (!(replaceWithKlass.prototype instanceof klass)) formatDevErrorMessage(`${replaceWithKlass.name} doesn't extend the ${name}`);
				} else if (replace) console.warn(`Override for ${name} specifies 'replace' without 'withKlass'. 'withKlass' will be required in a future version.`);
				if (name !== "RootNode" && nodeType !== "root" && nodeType !== "artificial" && klass !== LexicalNode) {
					["getType", "clone"].forEach((method) => {
						if (!hasOwnStaticMethod(klass, method)) console.warn(`${name} must implement static "${method}" method`);
					});
					if (!hasOwnStaticMethod(klass, "importDOM") && hasOwnExportDOM(klass)) console.warn(`${name} should implement "importDOM" if using a custom "exportDOM" method to ensure HTML serialization (important for copy & paste) works as expected`);
					if (!hasOwnStaticMethod(klass, "importJSON")) console.warn(`${name} should implement "importJSON" method to ensure JSON and default HTML serialization works as expected`);
				}
			}
			const type = klass.getType();
			const transforms = getTransformSetFromKlass$1(klass);
			registeredNodes.set(type, {
				exportDOM: html && html.export ? html.export.get(klass) : void 0,
				klass,
				replace,
				replaceWithKlass,
				sharedNodeState: createSharedNodeState$1(nodes[i]),
				transforms
			});
		}
	}
	const editor = new LexicalEditor(editorState, parentEditor, registeredNodes, {
		disableEvents,
		dom: {
			...DEFAULT_EDITOR_DOM_CONFIG$1,
			...editorConfig && editorConfig.dom
		},
		namespace,
		theme
	}, onError ? onError : console.error, initializeConversionCache(registeredNodes, html ? html.import : void 0), isEditable, editorConfig);
	if (initialEditorState !== void 0) {
		editor._pendingEditorState = initialEditorState;
		editor._dirtyType = FULL_RECONCILE;
	}
	registerDefaultCommandHandlers(editor);
	return editor;
}
function triggerListener(listenerMap, listener, args) {
	const unregister = listenerMap.get(listener);
	if (unregister) unregister();
	listenerMap.set(listener, listener(...args) || void 0);
}
function unregisterListener(listenerMap, listener) {
	const unregister = listenerMap.get(listener);
	listenerMap.delete(listener);
	if (unregister) unregister();
}
function registerListener(listenerMap, listener, unregister) {
	listenerMap.set(listener, unregister);
	return unregisterListener.bind(null, listenerMap, listener);
}
var LexicalEditor = class {
	/** @internal */
	/** The version with build identifiers for this editor (since 0.17.1) */
	static version;
	/** @internal */
	_headless;
	/** @internal */
	_parentEditor;
	/** @internal */
	_rootElement;
	/** @internal */
	_editorState;
	/** @internal */
	_pendingEditorState;
	/** @internal */
	_compositionKey;
	/** @internal */
	_deferred;
	/** @internal */
	_keyToDOMMap;
	/** @internal */
	_updates;
	/** @internal */
	_updating;
	/** @internal */
	_listeners;
	/** @internal */
	_commands;
	/** @internal */
	_nodes;
	/** @internal */
	_decorators;
	/** @internal */
	_pendingDecorators;
	/** @internal */
	_config;
	/** @internal */
	_dirtyType;
	/** @internal */
	_cloneNotNeeded;
	/** @internal */
	_dirtyLeaves;
	/** @internal */
	_dirtyElements;
	/** @internal */
	_normalizedNodes;
	/** @internal */
	_updateTags;
	/** @internal */
	_observer;
	/** @internal */
	_key;
	/** @internal */
	_onError;
	/** @internal */
	_htmlConversions;
	/** @internal */
	_window;
	/** @internal */
	_editable;
	/** @internal */
	_blockCursorElement;
	/** @internal */
	_createEditorArgs;
	/** @internal */
	constructor(editorState, parentEditor, nodes, config, onError, htmlConversions, editable, createEditorArgs) {
		this._createEditorArgs = createEditorArgs;
		this._parentEditor = parentEditor;
		this._rootElement = null;
		this._editorState = editorState;
		this._pendingEditorState = null;
		this._compositionKey = null;
		this._deferred = [];
		this._keyToDOMMap = /* @__PURE__ */ new Map();
		this._updates = [];
		this._updating = false;
		this._listeners = {
			decorator: /* @__PURE__ */ new Map(),
			editable: /* @__PURE__ */ new Map(),
			mutation: /* @__PURE__ */ new Map(),
			root: /* @__PURE__ */ new Map(),
			textcontent: /* @__PURE__ */ new Map(),
			update: /* @__PURE__ */ new Map()
		};
		this._commands = /* @__PURE__ */ new Map();
		this._config = config;
		this._nodes = nodes;
		this._decorators = {};
		this._pendingDecorators = null;
		this._dirtyType = NO_DIRTY_NODES;
		this._cloneNotNeeded = /* @__PURE__ */ new Set();
		this._dirtyLeaves = /* @__PURE__ */ new Set();
		this._dirtyElements = /* @__PURE__ */ new Map();
		this._normalizedNodes = /* @__PURE__ */ new Set();
		this._updateTags = /* @__PURE__ */ new Set();
		this._observer = null;
		this._key = createUID();
		this._onError = onError;
		this._htmlConversions = htmlConversions;
		this._editable = editable;
		this._headless = parentEditor !== null && parentEditor._headless;
		this._window = null;
		this._blockCursorElement = null;
	}
	/**
	*
	* @returns true if the editor is currently in "composition" mode due to receiving input
	* through an IME, or 3P extension, for example. Returns false otherwise.
	*/
	isComposing() {
		return this._compositionKey != null;
	}
	/**
	* Registers a listener for Editor update event. Will trigger the provided callback
	* each time the editor goes through an update (via {@link LexicalEditor.update}) until the
	* teardown function is called.
	*
	* @returns a teardown function that can be used to cleanup the listener.
	*/
	registerUpdateListener(listener) {
		return registerListener(this._listeners.update, listener);
	}
	/**
	* Registers a listener for for when the editor changes between editable and non-editable states.
	* Will trigger the provided callback each time the editor transitions between these states until the
	* teardown function is called.
	*
	* If the listener returns a function, that function will be called before the next transition or
	* teardown.
	*
	* @returns a teardown function that can be used to cleanup the listener.
	*/
	registerEditableListener(listener) {
		return registerListener(this._listeners.editable, listener);
	}
	/**
	* Registers a listener for when the editor's decorator object changes. The decorator object contains
	* all DecoratorNode keys -> their decorated value. This is primarily used with external UI frameworks.
	*
	* Will trigger the provided callback each time the editor transitions between these states until the
	* teardown function is called.
	*
	* @returns a teardown function that can be used to cleanup the listener.
	*/
	registerDecoratorListener(listener) {
		return registerListener(this._listeners.decorator, listener);
	}
	/**
	* Registers a listener for when Lexical commits an update to the DOM and the text content of
	* the editor changes from the previous state of the editor. If the text content is the
	* same between updates, no notifications to the listeners will happen.
	*
	* Will trigger the provided callback each time the editor transitions between these states until the
	* teardown function is called.
	*
	* @returns a teardown function that can be used to cleanup the listener.
	*/
	registerTextContentListener(listener) {
		return registerListener(this._listeners.textcontent, listener);
	}
	/**
	* Registers a listener for when the editor's root DOM element (the content editable
	* Lexical attaches to) changes. This is primarily used to attach event listeners to the root
	*  element. The root listener function is executed directly upon registration and then on
	* any subsequent update.
	*
	* Will trigger the provided callback each time the editor transitions between these states until the
	* teardown function is called.
	*
	* If the listener returns a function, that function will be called before the next transition or
	* teardown.
	*
	* @returns a teardown function that can be used to cleanup the listener.
	*/
	registerRootListener(listener) {
		const listenerMap = this._listeners.root;
		return mergeRegister$1(registerListener(listenerMap, listener, listener(this._rootElement, null) || void 0), () => triggerListener(listenerMap, listener, [null, this._rootElement]));
	}
	/**
	* Registers a listener that will trigger anytime the provided command
	* is dispatched with {@link LexicalEditor.dispatch}, subject to priority.
	* Listeners that run at a higher priority can "intercept" commands and
	* prevent them from propagating to other handlers by returning true.
	*
	* Listeners are always invoked in an {@link LexicalEditor.update} and can
	* call dollar functions.
	*
	* Listeners registered at the same priority level will run
	* deterministically in the order of registration.
	*
	* @param command - the command that will trigger the callback.
	* @param listener - the function that will execute when the command is dispatched.
	* @param priority - the relative priority of the listener. 0 | 1 | 2 | 3 | 4
	*   (or {@link COMMAND_PRIORITY_EDITOR} |
	*     {@link COMMAND_PRIORITY_LOW} |
	*     {@link COMMAND_PRIORITY_NORMAL} |
	*     {@link COMMAND_PRIORITY_HIGH} |
	*     {@link COMMAND_PRIORITY_CRITICAL})
	* @returns a teardown function that can be used to cleanup the listener.
	*/
	registerCommand(command, listener, priority) {
		if (priority === void 0) formatDevErrorMessage(`Listener for type "command" requires a "priority".`);
		const commandsMap = this._commands;
		if (!commandsMap.has(command)) commandsMap.set(command, [
			new DequeSet(),
			new DequeSet(),
			new DequeSet(),
			new DequeSet(),
			new DequeSet()
		]);
		const listenersInPriorityOrder = commandsMap.get(command);
		if (listenersInPriorityOrder === void 0) formatDevErrorMessage(`registerCommand: Command ${String(command)} not found in command map`);
		const normalizedPriority = normalizePriority(priority);
		const listeners = listenersInPriorityOrder[normalizedPriority];
		if (normalizedPriority !== priority) listeners.addFront(listener);
		else listeners.addBack(listener);
		return () => {
			listeners.delete(listener);
			if (listenersInPriorityOrder.every((listenersSet) => listenersSet.size === 0)) commandsMap.delete(command);
		};
	}
	/**
	* Registers a listener that will run when a Lexical node of the provided class is
	* mutated. The listener will receive a list of nodes along with the type of mutation
	* that was performed on each: created, destroyed, or updated.
	*
	* One common use case for this is to attach DOM event listeners to the underlying DOM nodes as Lexical nodes are created.
	* {@link LexicalEditor.getElementByKey} can be used for this.
	*
	* If any existing nodes are in the DOM, and skipInitialization is not true, the listener
	* will be called immediately with an updateTag of 'registerMutationListener' where all
	* nodes have the 'created' NodeMutation. This can be controlled with the skipInitialization option
	* (whose default was previously true for backwards compatibility with &lt;=0.16.1 but has been changed to false as of 0.21.0).
	*
	* @param klass - The class of the node that you want to listen to mutations on.
	* @param listener - The logic you want to run when the node is mutated.
	* @param options - see {@link MutationListenerOptions}
	* @returns a teardown function that can be used to cleanup the listener.
	*/
	registerMutationListener(klass, listener, options) {
		const klassToMutate = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(klass)).klass;
		const mutations = this._listeners.mutation;
		let klassSet = mutations.get(listener);
		if (klassSet === void 0) {
			klassSet = /* @__PURE__ */ new Set();
			mutations.set(listener, klassSet);
		}
		klassSet.add(klassToMutate);
		const skipInitialization = options && options.skipInitialization;
		if (!(skipInitialization === void 0 ? DEFAULT_SKIP_INITIALIZATION : skipInitialization)) this.initializeMutationListener(listener, klassToMutate);
		return () => {
			klassSet.delete(klassToMutate);
			if (klassSet.size === 0) mutations.delete(listener);
		};
	}
	/** @internal */
	getRegisteredNode(klass) {
		const registeredNode = this._nodes.get(klass.getType());
		if (registeredNode === void 0) formatDevErrorMessage(`Node ${klass.name} has not been registered. Ensure node has been passed to createEditor.`);
		return registeredNode;
	}
	/** @internal */
	resolveRegisteredNodeAfterReplacements(registeredNode) {
		while (registeredNode.replaceWithKlass) registeredNode = this.getRegisteredNode(registeredNode.replaceWithKlass);
		return registeredNode;
	}
	/** @internal */
	initializeMutationListener(listener, klass) {
		const prevEditorState = this._editorState;
		const nodeMap = getCachedTypeToNodeMap(prevEditorState).get(klass.getType());
		if (!nodeMap) return;
		const nodeMutationMap = /* @__PURE__ */ new Map();
		for (const k of nodeMap.keys()) nodeMutationMap.set(k, "created");
		if (nodeMutationMap.size > 0) listener(nodeMutationMap, {
			dirtyLeaves: /* @__PURE__ */ new Set(),
			prevEditorState,
			updateTags: /* @__PURE__ */ new Set(["registerMutationListener"])
		});
	}
	/** @internal */
	registerNodeTransformToKlass(klass, listener) {
		const registeredNode = this.getRegisteredNode(klass);
		registeredNode.transforms.add(listener);
		return registeredNode;
	}
	/**
	* Registers a listener that will run when a Lexical node of the provided class is
	* marked dirty during an update. The listener will continue to run as long as the node
	* is marked dirty. There are no guarantees around the order of transform execution!
	*
	* Watch out for infinite loops. See [Node Transforms](https://lexical.dev/docs/concepts/transforms)
	* @param klass - The class of the node that you want to run transforms on.
	* @param listener - The logic you want to run when the node is updated.
	* @returns a teardown function that can be used to cleanup the listener.
	*/
	registerNodeTransform(klass, listener) {
		const registeredNode = this.registerNodeTransformToKlass(klass, listener);
		const registeredNodes = [registeredNode];
		const replaceWithKlass = registeredNode.replaceWithKlass;
		if (replaceWithKlass != null) {
			const registeredReplaceWithNode = this.registerNodeTransformToKlass(replaceWithKlass, listener);
			registeredNodes.push(registeredReplaceWithNode);
		}
		markNodesWithTypesAsDirty(this, registeredNodes.map((node) => node.klass.getType()));
		return () => {
			registeredNodes.forEach((node) => node.transforms.delete(listener));
		};
	}
	/**
	* Used to assert that a certain node is registered, usually by plugins to ensure nodes that they
	* depend on have been registered.
	* @returns True if the editor has registered the provided node type, false otherwise.
	*/
	hasNode(node) {
		return this._nodes.has(node.getType());
	}
	/**
	* Used to assert that certain nodes are registered, usually by plugins to ensure nodes that they
	* depend on have been registered.
	* @returns True if the editor has registered all of the provided node types, false otherwise.
	*/
	hasNodes(nodes) {
		return nodes.every(this.hasNode.bind(this));
	}
	/**
	* Dispatches a command of the specified type with the specified payload.
	* This triggers all command listeners (set by {@link LexicalEditor.registerCommand})
	* for this type, passing them the provided payload. The command listeners
	* will be triggered in an implicit {@link LexicalEditor.update}, unless
	* this was invoked from inside an update in which case that update context
	* will be re-used (as if this was a dollar function itself).
	* @param type - the type of command listeners to trigger.
	* @param payload - the data to pass as an argument to the command listeners.
	*/
	dispatchCommand(type, payload) {
		return dispatchCommand(this, type, payload);
	}
	/**
	* Gets a map of all decorators in the editor.
	* @returns A mapping of call decorator keys to their decorated content
	*/
	getDecorators() {
		return this._decorators;
	}
	/**
	*
	* @returns the current root element of the editor. If you want to register
	* an event listener, do it via {@link LexicalEditor.registerRootListener}, since
	* this reference may not be stable.
	*/
	getRootElement() {
		return this._rootElement;
	}
	/**
	* Gets the key of the editor
	* @returns The editor key
	*/
	getKey() {
		return this._key;
	}
	/**
	* Imperatively set the root contenteditable element that Lexical listens
	* for events on.
	*/
	setRootElement(nextRootElement) {
		const prevRootElement = this._rootElement;
		if (nextRootElement !== prevRootElement) {
			const classNames = getCachedClassNameArray(this._config.theme, "root");
			const pendingEditorState = this._pendingEditorState || this._editorState;
			this._rootElement = nextRootElement;
			resetEditor(this, prevRootElement, nextRootElement, pendingEditorState);
			if (prevRootElement !== null) {
				if (!this._config.disableEvents) removeRootElementEvents(prevRootElement);
				if (classNames != null) prevRootElement.classList.remove(...classNames);
			}
			if (nextRootElement !== null) {
				const windowObj = getDefaultView(nextRootElement);
				const style = nextRootElement.style;
				style.userSelect = "text";
				style.whiteSpace = "pre-wrap";
				style.wordBreak = "break-word";
				nextRootElement.setAttribute("data-lexical-editor", "true");
				this._window = windowObj;
				this._dirtyType = FULL_RECONCILE;
				initMutationObserver(this);
				this._updateTags.add(HISTORY_MERGE_TAG$1);
				$commitPendingUpdates(this);
				if (!this._config.disableEvents) addRootElementEvents(nextRootElement, this);
				if (classNames != null) nextRootElement.classList.add(...classNames);
				{
					const nextRootElementParent = nextRootElement.parentElement;
					if (nextRootElementParent != null && ["flex", "inline-flex"].includes(getComputedStyle(nextRootElementParent).display)) console.warn(`When using "display: flex" or "display: inline-flex" on an element containing content editable, Chrome may have unwanted focusing behavior when clicking outside of it. Consider wrapping the content editable within a non-flex element.`);
				}
			} else {
				this._window = null;
				this._updateTags.add(HISTORY_MERGE_TAG$1);
				$commitPendingUpdates(this);
			}
			triggerListeners("root", this, false, nextRootElement, prevRootElement);
		}
	}
	/**
	* Gets the underlying HTMLElement associated with the LexicalNode for the given key.
	* @returns the HTMLElement rendered by the LexicalNode associated with the key.
	* @param key - the key of the LexicalNode.
	*/
	getElementByKey(key) {
		return this._keyToDOMMap.get(key) || null;
	}
	/**
	* Gets the active editor state.
	* @returns The editor state
	*/
	getEditorState() {
		return this._editorState;
	}
	/**
	* Imperatively set the EditorState. Triggers reconciliation like an update.
	* @param editorState - the state to set the editor
	* @param options - options for the update.
	*/
	setEditorState(editorState, options) {
		if (editorState.isEmpty()) formatDevErrorMessage(`setEditorState: the editor state is empty. Ensure the editor state's root node never becomes empty.`);
		let writableEditorState = editorState;
		if (writableEditorState._readOnly) {
			writableEditorState = cloneEditorState(editorState);
			writableEditorState._selection = editorState._selection ? editorState._selection.clone() : null;
		}
		flushRootMutations(this);
		const pendingEditorState = this._pendingEditorState;
		const tags = this._updateTags;
		const tag = options !== void 0 ? options.tag : null;
		if (pendingEditorState !== null && !pendingEditorState.isEmpty()) {
			if (tag != null) tags.add(tag);
			$commitPendingUpdates(this);
		}
		this._pendingEditorState = writableEditorState;
		this._dirtyType = FULL_RECONCILE;
		this._dirtyElements.set("root", false);
		this._compositionKey = null;
		if (tag != null) tags.add(tag);
		if (!this._updating) $commitPendingUpdates(this);
	}
	/**
	* Parses a SerializedEditorState (usually produced by {@link EditorState.toJSON}) and returns
	* and EditorState object that can be, for example, passed to {@link LexicalEditor.setEditorState}. Typically,
	* deserialization from JSON stored in a database uses this method.
	* @param maybeStringifiedEditorState
	* @param updateFn
	* @returns
	*/
	parseEditorState(maybeStringifiedEditorState, updateFn) {
		return parseEditorState(typeof maybeStringifiedEditorState === "string" ? JSON.parse(maybeStringifiedEditorState) : maybeStringifiedEditorState, this, updateFn);
	}
	/**
	* Executes a read of the editor's state, with the
	* editor context available (useful for exporting and read-only DOM
	* operations). Much like update, but prevents any mutation of the
	* editor's state. Any pending updates will be flushed immediately before
	* the read.
	* @param callbackFn - A function that has access to read-only editor state.
	*/
	read(callbackFn) {
		$commitPendingUpdates(this);
		return this.getEditorState().read(callbackFn, { editor: this });
	}
	/**
	* Executes an update to the editor state. The updateFn callback is the ONLY place
	* where Lexical editor state can be safely mutated.
	* @param updateFn - A function that has access to writable editor state.
	* @param options - A bag of options to control the behavior of the update.
	*/
	update(updateFn, options) {
		updateEditor(this, updateFn, options);
	}
	/**
	* Focuses the editor by marking the existing selection as dirty, or by
	* creating a new selection at `defaultSelection` if one does not already
	* exist. If you want to force a specific selection, you should call
	* `root.selectStart()` or `root.selectEnd()` in an update.
	*
	* @param callbackFn - A function to run after the editor is focused.
	* @param options - A bag of options
	*/
	focus(callbackFn, options = {}) {
		const rootElement = this._rootElement;
		if (rootElement !== null) {
			rootElement.setAttribute("autocapitalize", "off");
			updateEditorSync(this, () => {
				const selection = $getSelection$1();
				const root = $getRoot$1();
				if (selection !== null) {
					if (!selection.dirty) $setSelection$1(selection.clone());
				} else if (root.getChildrenSize() !== 0) if (options.defaultSelection === "rootStart") root.selectStart();
				else root.selectEnd();
				$addUpdateTag$1(FOCUS_TAG);
				$onUpdate$1(() => {
					rootElement.removeAttribute("autocapitalize");
					if (callbackFn) callbackFn();
				});
			});
			if (this._pendingEditorState === null) rootElement.removeAttribute("autocapitalize");
		}
	}
	/**
	* Removes focus from the editor.
	*/
	blur() {
		const rootElement = this._rootElement;
		if (rootElement !== null) rootElement.blur();
		const domSelection = getDOMSelection$1(this._window);
		if (domSelection !== null) domSelection.removeAllRanges();
	}
	/**
	* Returns true if the editor is editable, false otherwise.
	* @returns True if the editor is editable, false otherwise.
	*/
	isEditable() {
		return this._editable;
	}
	/**
	* Sets the editable property of the editor. When false, the
	* editor will not listen for user events on the underling contenteditable.
	* @param editable - the value to set the editable mode to.
	*/
	setEditable(editable) {
		if (this._editable !== editable) {
			this._editable = editable;
			triggerListeners("editable", this, true, editable);
		}
	}
	/**
	* Returns a JSON-serializable javascript object NOT a JSON string.
	* You still must call JSON.stringify (or something else) to turn the
	* state into a string you can transfer over the wire and store in a database.
	*
	* See {@link LexicalNode.exportJSON}
	*
	* @returns A JSON-serializable javascript object
	*/
	toJSON() {
		return { editorState: this._editorState.toJSON() };
	}
};
LexicalEditor.version = "0.44.0+dev.esm";
let pendingNodeToClone = null;
function setPendingNodeToClone(pendingNode) {
	pendingNodeToClone = pendingNode;
}
function getPendingNodeToClone() {
	const node = pendingNodeToClone;
	pendingNodeToClone = null;
	return node;
}
let keyCounter = 1;
function resetRandomKey$1() {
	keyCounter = 1;
}
function generateRandomKey() {
	return "" + keyCounter++;
}
/**
* @internal
*/
function getRegisteredNodeOrThrow$1(editor, nodeType) {
	const registeredNode = getRegisteredNode$1(editor, nodeType);
	if (registeredNode === void 0) formatDevErrorMessage(`registeredNode: Type ${nodeType} not found`);
	return registeredNode;
}
/**
* @internal
*/
function getRegisteredNode$1(editor, nodeType) {
	return editor._nodes.get(nodeType);
}
/** @internal */
const scheduleMicroTask = typeof queueMicrotask === "function" ? queueMicrotask : (fn) => {
	Promise.resolve().then(fn);
};
function $isSelectionCapturedInDecorator(node) {
	return $isDecoratorNode$1($getNearestNodeFromDOMNode$1(node));
}
function isSelectionCapturedInDecoratorInput$1(anchorDOM) {
	const activeElement = document.activeElement;
	if (!isHTMLElement$1(activeElement)) return false;
	const nodeName = activeElement.nodeName;
	return $isDecoratorNode$1($getNearestNodeFromDOMNode$1(anchorDOM)) && (nodeName === "INPUT" || nodeName === "TEXTAREA" || activeElement.contentEditable === "true" && getEditorPropertyFromDOMNode$1(activeElement) == null);
}
function isSelectionWithinEditor$1(editor, anchorDOM, focusDOM) {
	const rootElement = editor.getRootElement();
	try {
		return rootElement !== null && rootElement.contains(anchorDOM) && rootElement.contains(focusDOM) && anchorDOM !== null && !isSelectionCapturedInDecoratorInput$1(anchorDOM) && getNearestEditorFromDOMNode$1(anchorDOM) === editor;
	} catch (_error) {
		return false;
	}
}
/**
* @returns true if the given argument is a LexicalEditor instance from this build of Lexical
*/
function isLexicalEditor$1(editor) {
	return editor instanceof LexicalEditor;
}
function getNearestEditorFromDOMNode$1(node) {
	let currentNode = node;
	while (currentNode != null) {
		const editor = getEditorPropertyFromDOMNode$1(currentNode);
		if (isLexicalEditor$1(editor)) return editor;
		currentNode = getParentElement(currentNode);
	}
	return null;
}
/** @internal */
function getEditorPropertyFromDOMNode$1(node) {
	return node ? node.__lexicalEditor : null;
}
function getTextDirection$1(text) {
	if (RTL_REGEX.test(text)) return "rtl";
	if (LTR_REGEX.test(text)) return "ltr";
	return null;
}
/**
* Return true if the TextNode is a TabNode or is in token mode.
*/
function $isTokenOrTab$1(node) {
	return $isTabNode$1(node) || node.isToken();
}
/**
* Return true if the TextNode is a TabNode, or is in token or segmented mode.
*/
function $isTokenOrSegmented$1(node) {
	return $isTokenOrTab$1(node) || node.isSegmented();
}
/**
* @param node - The element being tested
* @returns Returns true if node is an DOM Text node, false otherwise.
*/
function isDOMTextNode$1(node) {
	return isDOMNode$1(node) && node.nodeType === DOM_TEXT_TYPE;
}
/**
* @param node - The element being tested
* @returns Returns true if node is an DOM Document node, false otherwise.
*/
function isDOMDocumentNode$1(node) {
	return isDOMNode$1(node) && node.nodeType === DOM_DOCUMENT_TYPE;
}
function getDOMTextNode$1(element) {
	let node = element;
	while (node != null) {
		if (isDOMTextNode$1(node)) return node;
		node = node.firstChild;
	}
	return null;
}
function toggleTextFormatType$1(format, type, alignWithFormat) {
	const activeFormat = TEXT_TYPE_TO_FORMAT$1[type];
	if (alignWithFormat !== null && (format & activeFormat) === (alignWithFormat & activeFormat)) return format;
	let newFormat = format ^ activeFormat;
	if (type === "subscript") newFormat &= ~TEXT_TYPE_TO_FORMAT$1.superscript;
	else if (type === "superscript") newFormat &= ~TEXT_TYPE_TO_FORMAT$1.subscript;
	else if (type === "lowercase") {
		newFormat &= ~TEXT_TYPE_TO_FORMAT$1.uppercase;
		newFormat &= ~TEXT_TYPE_TO_FORMAT$1.capitalize;
	} else if (type === "uppercase") {
		newFormat &= ~TEXT_TYPE_TO_FORMAT$1.lowercase;
		newFormat &= ~TEXT_TYPE_TO_FORMAT$1.capitalize;
	} else if (type === "capitalize") {
		newFormat &= ~TEXT_TYPE_TO_FORMAT$1.lowercase;
		newFormat &= ~TEXT_TYPE_TO_FORMAT$1.uppercase;
	}
	return newFormat;
}
function $isLeafNode$1(node) {
	return $isTextNode$1(node) || $isLineBreakNode$1(node) || $isDecoratorNode$1(node);
}
function $setNodeKey(node, existingKey) {
	const pendingNode = getPendingNodeToClone();
	existingKey = existingKey || pendingNode && pendingNode.__key;
	if (existingKey != null) {
		errorOnNodeKeyConstructorMismatch(node, existingKey, pendingNode);
		node.__key = existingKey;
		return;
	}
	errorOnReadOnly();
	errorOnInfiniteTransforms();
	const editor = getActiveEditor();
	const editorState = getActiveEditorState();
	const key = generateRandomKey();
	editorState._nodeMap.set(key, node);
	if ($isElementNode$1(node)) editor._dirtyElements.set(key, true);
	else editor._dirtyLeaves.add(key);
	editor._cloneNotNeeded.add(key);
	editor._dirtyType = HAS_DIRTY_NODES;
	node.__key = key;
}
function errorOnNodeKeyConstructorMismatch(node, existingKey, pendingNode) {
	const editorState = internalGetActiveEditorState();
	if (!editorState) return;
	const existingNode = editorState._nodeMap.get(existingKey);
	if (pendingNode) {
		if (!(existingKey === pendingNode.__key)) formatDevErrorMessage(`Lexical node with constructor ${node.constructor.name} (type ${node.getType()}) has an incorrect clone implementation, got ${String(existingKey)} for nodeKey when expecting ${pendingNode.__key}`);
	}
	if (existingNode && existingNode.constructor !== node.constructor) if (node.constructor.name !== existingNode.constructor.name) formatDevErrorMessage(`Lexical node with constructor ${node.constructor.name} attempted to re-use key from node in active editor state with constructor ${existingNode.constructor.name}. Keys must not be re-used when the type is changed.`);
	else formatDevErrorMessage(`Lexical node with constructor ${node.constructor.name} attempted to re-use key from node in active editor state with different constructor with the same name (possibly due to invalid Hot Module Replacement). Keys must not be re-used when the type is changed.`);
}
function internalMarkParentElementsAsDirty(parentKey, nodeMap, dirtyElements) {
	let nextParentKey = parentKey;
	while (nextParentKey !== null) {
		if (dirtyElements.has(nextParentKey)) return;
		const node = nodeMap.get(nextParentKey);
		if (node === void 0) break;
		dirtyElements.set(nextParentKey, false);
		nextParentKey = node.__parent;
	}
}
/**
* Removes a node from its parent, updating all necessary pointers and links.
* @internal
*
* This function is for internal use of the library.
* Please do not use it as it may change in the future.
*/
function removeFromParent$1(node) {
	const oldParent = node.getParent();
	if (oldParent !== null) {
		const writableNode = node.getWritable();
		const writableParent = oldParent.getWritable();
		const prevSibling = node.getPreviousSibling();
		const nextSibling = node.getNextSibling();
		const nextSiblingKey = nextSibling !== null ? nextSibling.__key : null;
		const prevSiblingKey = prevSibling !== null ? prevSibling.__key : null;
		const writablePrevSibling = prevSibling !== null ? prevSibling.getWritable() : null;
		const writableNextSibling = nextSibling !== null ? nextSibling.getWritable() : null;
		if (prevSibling === null) writableParent.__first = nextSiblingKey;
		if (nextSibling === null) writableParent.__last = prevSiblingKey;
		if (writablePrevSibling !== null) writablePrevSibling.__next = nextSiblingKey;
		if (writableNextSibling !== null) writableNextSibling.__prev = prevSiblingKey;
		writableNode.__prev = null;
		writableNode.__next = null;
		writableNode.__parent = null;
		writableParent.__size--;
	}
}
function internalMarkNodeAsDirty(node) {
	errorOnInfiniteTransforms();
	if (!!$isEphemeral(node)) formatDevErrorMessage(`internalMarkNodeAsDirty: Ephemeral nodes must not be marked as dirty (key ${node.__key} type ${node.__type})`);
	const latest = node.getLatest();
	const parent = latest.__parent;
	const editorState = getActiveEditorState();
	const editor = getActiveEditor();
	const nodeMap = editorState._nodeMap;
	const dirtyElements = editor._dirtyElements;
	if (parent !== null) internalMarkParentElementsAsDirty(parent, nodeMap, dirtyElements);
	const key = latest.__key;
	editor._dirtyType = HAS_DIRTY_NODES;
	if ($isElementNode$1(node)) dirtyElements.set(key, true);
	else editor._dirtyLeaves.add(key);
}
function internalMarkSiblingsAsDirty(node) {
	const previousNode = node.getPreviousSibling();
	const nextNode = node.getNextSibling();
	if (previousNode !== null) internalMarkNodeAsDirty(previousNode);
	if (nextNode !== null) internalMarkNodeAsDirty(nextNode);
}
function $setCompositionKey$1(compositionKey) {
	errorOnReadOnly();
	const editor = getActiveEditor();
	const previousCompositionKey = editor._compositionKey;
	if (compositionKey !== previousCompositionKey) {
		editor._compositionKey = compositionKey;
		if (previousCompositionKey !== null) {
			const node = $getNodeByKey$1(previousCompositionKey);
			if (node !== null) node.getWritable();
		}
		if (compositionKey !== null) {
			const node = $getNodeByKey$1(compositionKey);
			if (node !== null) node.getWritable();
		}
	}
}
function $getCompositionKey() {
	if (isCurrentlyReadOnlyMode$1()) return null;
	return getActiveEditor()._compositionKey;
}
function $getNodeByKey$1(key, _editorState) {
	const node = (_editorState || getActiveEditorState())._nodeMap.get(key);
	if (node === void 0) return null;
	return node;
}
function $getNodeFromDOMNode$1(dom, editorState) {
	const key = getNodeKeyFromDOMNode(dom, getActiveEditor());
	if (key !== void 0) return $getNodeByKey$1(key, editorState);
	return null;
}
function setNodeKeyOnDOMNode(dom, editor, key) {
	const prop = `__lexicalKey_${editor._key}`;
	dom[prop] = key;
}
function getNodeKeyFromDOMNode(dom, editor) {
	return dom[`__lexicalKey_${editor._key}`];
}
function $getNearestNodeFromDOMNode$1(startingDOM, editorState) {
	let dom = startingDOM;
	while (dom != null) {
		const node = $getNodeFromDOMNode$1(dom, editorState);
		if (node !== null) return node;
		dom = getParentElement(dom);
	}
	return null;
}
function cloneDecorators(editor) {
	const currentDecorators = editor._decorators;
	const pendingDecorators = Object.assign({}, currentDecorators);
	editor._pendingDecorators = pendingDecorators;
	return pendingDecorators;
}
function getEditorStateTextContent(editorState) {
	return editorState.read(() => $getRoot$1().getTextContent());
}
function markNodesWithTypesAsDirty(editor, types) {
	const cachedMap = getCachedTypeToNodeMap(editor.getEditorState());
	const dirtyNodeMaps = [];
	for (const type of types) {
		const nodeMap = cachedMap.get(type);
		if (nodeMap) dirtyNodeMaps.push(nodeMap);
	}
	if (dirtyNodeMaps.length === 0) return;
	editor.update(() => {
		for (const nodeMap of dirtyNodeMaps) for (const nodeKey of nodeMap.keys()) {
			const latest = $getNodeByKey$1(nodeKey);
			if (latest) latest.markDirty();
		}
	}, editor._pendingEditorState === null ? { tag: HISTORY_MERGE_TAG$1 } : void 0);
}
function $getRoot$1() {
	return internalGetRoot(getActiveEditorState());
}
function internalGetRoot(editorState) {
	return editorState._nodeMap.get("root");
}
function $setSelection$1(selection) {
	errorOnReadOnly();
	const editorState = getActiveEditorState();
	if (selection !== null) {
		if (Object.isFrozen(selection)) formatDevErrorMessage(`$setSelection called on frozen selection object. Ensure selection is cloned before passing in.`);
		selection.dirty = true;
		selection.setCachedNodes(null);
	}
	editorState._selection = selection;
}
function $flushMutations() {
	errorOnReadOnly();
	flushRootMutations(getActiveEditor());
}
function $getNodeFromDOM(dom) {
	const editor = getActiveEditor();
	const nodeKey = getNodeKeyFromDOMTree(dom, editor);
	if (nodeKey === null) {
		if (dom === editor.getRootElement()) return $getNodeByKey$1("root");
		return null;
	}
	return $getNodeByKey$1(nodeKey);
}
function getNodeKeyFromDOMTree(dom, editor) {
	let node = dom;
	while (node != null) {
		const key = getNodeKeyFromDOMNode(node, editor);
		if (key !== void 0) return key;
		node = getParentElement(node);
	}
	return null;
}
/**
* Return true if `str` contains any valid surrogate pair.
*
* See also $updateCaretSelectionForUnicodeCharacter for
* a discussion on when and why this is useful.
*/
function doesContainSurrogatePair(str) {
	return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(str);
}
function getEditorsToPropagate(editor) {
	const editorsToPropagate = [];
	for (let currentEditor = editor; currentEditor !== null; currentEditor = currentEditor._parentEditor) editorsToPropagate.push(currentEditor);
	return editorsToPropagate;
}
function createUID() {
	return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function getAnchorTextFromDOM(anchorNode) {
	return isDOMTextNode$1(anchorNode) ? anchorNode.nodeValue : null;
}
function $updateSelectedTextFromDOM(isCompositionEnd, editor, data) {
	const domSelection = getDOMSelection$1(getWindow(editor));
	if (domSelection === null) return;
	const anchorNode = domSelection.anchorNode;
	let { anchorOffset, focusOffset } = domSelection;
	if (anchorNode !== null) {
		let textContent = getAnchorTextFromDOM(anchorNode);
		const node = $getNearestNodeFromDOMNode$1(anchorNode);
		if (textContent !== null && $isTextNode$1(node)) {
			if ((textContent === COMPOSITION_SUFFIX || textContent === COMPOSITION_START_CHAR) && data) {
				const offset = data.length;
				textContent = data;
				anchorOffset = offset;
				focusOffset = offset;
			}
			if (textContent !== null) $updateTextNodeFromDOMContent(node, textContent, anchorOffset, focusOffset, isCompositionEnd);
		}
	}
}
function $updateTextNodeFromDOMContent(textNode, textContent, anchorOffset, focusOffset, compositionEnd) {
	let node = textNode;
	if (node.isAttached() && (compositionEnd || !node.isDirty())) {
		const isComposing = node.isComposing();
		let normalizedTextContent = textContent;
		if (isComposing || compositionEnd) {
			if (textContent.endsWith(COMPOSITION_SUFFIX)) normalizedTextContent = textContent.slice(0, -COMPOSITION_SUFFIX.length);
			if (compositionEnd) {
				const char = COMPOSITION_START_CHAR;
				let index;
				while ((index = normalizedTextContent.indexOf(char)) !== -1) {
					normalizedTextContent = normalizedTextContent.slice(0, index) + normalizedTextContent.slice(index + char.length);
					if (anchorOffset !== null && anchorOffset > index) anchorOffset = Math.max(index, anchorOffset - char.length);
					if (focusOffset !== null && focusOffset > index) focusOffset = Math.max(index, focusOffset - char.length);
				}
			}
		}
		const prevTextContent = node.getTextContent();
		if (compositionEnd || normalizedTextContent !== prevTextContent) {
			if (normalizedTextContent === "") {
				$setCompositionKey$1(null);
				if (!IS_SAFARI && !IS_IOS && !IS_APPLE_WEBKIT) {
					const editor = getActiveEditor();
					setTimeout(() => {
						editor.update(() => {
							if (node.isAttached()) node.remove();
						});
					}, 20);
				} else node.remove();
				return;
			}
			const parent = node.getParent();
			const prevSelection = $getPreviousSelection$1();
			const prevTextContentSize = node.getTextContentSize();
			const compositionKey = $getCompositionKey();
			const nodeKey = node.getKey();
			if (node.isToken() || compositionKey !== null && nodeKey === compositionKey && !isComposing || $isRangeSelection$1(prevSelection) && (parent !== null && !parent.canInsertTextBefore() && prevSelection.anchor.offset === 0 || prevSelection.anchor.key === textNode.__key && prevSelection.anchor.offset === 0 && !node.canInsertTextBefore() && !isComposing || prevSelection.focus.key === textNode.__key && prevSelection.focus.offset === prevTextContentSize && !node.canInsertTextAfter() && !isComposing)) {
				node.markDirty();
				return;
			}
			const selection = $getSelection$1();
			if (!$isRangeSelection$1(selection) || anchorOffset === null || focusOffset === null) {
				$setTextContentWithSelection(node, normalizedTextContent, selection);
				return;
			}
			selection.setTextNodeRange(node, anchorOffset, node, focusOffset);
			if (node.isSegmented()) {
				const replacement = $createTextNode$1(node.getTextContent());
				node.replace(replacement);
				node = replacement;
			}
			$setTextContentWithSelection(node, normalizedTextContent, selection);
		}
	}
}
function $setTextContentWithSelection(node, textContent, selection) {
	node.setTextContent(textContent);
	if ($isRangeSelection$1(selection)) {
		const key = node.getKey();
		for (const k of ["anchor", "focus"]) {
			const pt = selection[k];
			if (pt.type === "text" && pt.key === key) pt.offset = $getTextNodeOffset$1(node, pt.offset, "clamp");
		}
	}
}
function $previousSiblingDoesNotAcceptText(node) {
	const previousSibling = node.getPreviousSibling();
	return ($isTextNode$1(previousSibling) || $isElementNode$1(previousSibling) && previousSibling.isInline()) && !previousSibling.canInsertTextAfter();
}
function $shouldInsertTextAfterOrBeforeTextNode(selection, node) {
	if (node.isSegmented()) return true;
	if (!selection.isCollapsed()) return false;
	const offset = selection.anchor.offset;
	const parent = node.getParentOrThrow();
	const isToken = $isTokenOrTab$1(node);
	if (offset === 0) return !node.canInsertTextBefore() || !parent.canInsertTextBefore() && !node.isComposing() || isToken || $previousSiblingDoesNotAcceptText(node);
	else if (offset === node.getTextContentSize()) return !node.canInsertTextAfter() || !parent.canInsertTextAfter() && !node.isComposing() || isToken;
	else return false;
}
/**
* A KeyboardEvent or structurally similar object with a string `key` as well
* as `altKey`, `ctrlKey`, `metaKey`, and `shiftKey` boolean properties.
*/
/**
* A record of keyboard modifiers that must be enabled.
* If the value is `'any'` then the modifier key's state is ignored.
* If the value is `true` then the modifier key must be pressed.
* If the value is `false` or the property is omitted then the modifier key must
* not be pressed.
*/
function matchModifier(event, mask, prop) {
	const expected = mask[prop] || false;
	return expected === "any" || expected === event[prop];
}
/**
* Match a KeyboardEvent with its expected modifier state
*
* @param event A KeyboardEvent, or structurally similar object
* @param mask An object specifying the expected state of the modifiers
* @returns true if the event matches
*/
function isModifierMatch$1(event, mask) {
	return matchModifier(event, mask, "altKey") && matchModifier(event, mask, "ctrlKey") && matchModifier(event, mask, "shiftKey") && matchModifier(event, mask, "metaKey");
}
/**
* Match a KeyboardEvent with its expected state
*
* @param event A KeyboardEvent, or structurally similar object
* @param expectedKey The string to compare with event.key (case insensitive)
* @param mask An object specifying the expected state of the modifiers
* @returns true if the event matches
*/
function isExactShortcutMatch$1(event, expectedKey, mask) {
	if (!isModifierMatch$1(event, mask)) return false;
	if (event.key.toLowerCase() === expectedKey.toLowerCase()) return true;
	if (expectedKey.length > 1) return false;
	if (event.key.length === 1 && event.key.charCodeAt(0) <= 127) return false;
	if (event.code.startsWith("Digit") && /^\d$/.test(expectedKey)) return event.code === `Digit${expectedKey}`;
	const expectedCode = "Key" + expectedKey.toUpperCase();
	return event.code === expectedCode;
}
const CONTROL_OR_META = {
	ctrlKey: !IS_APPLE,
	metaKey: IS_APPLE
};
const CONTROL_OR_ALT = {
	altKey: IS_APPLE,
	ctrlKey: !IS_APPLE
};
function isTab(event) {
	return isExactShortcutMatch$1(event, "Tab", { shiftKey: "any" });
}
function isBold(event) {
	return isExactShortcutMatch$1(event, "b", CONTROL_OR_META);
}
function isItalic(event) {
	return isExactShortcutMatch$1(event, "i", CONTROL_OR_META);
}
function isUnderline(event) {
	return isExactShortcutMatch$1(event, "u", CONTROL_OR_META);
}
function isParagraph(event) {
	return isExactShortcutMatch$1(event, "Enter", {
		altKey: "any",
		ctrlKey: "any",
		metaKey: "any"
	});
}
function isLineBreak(event) {
	return isExactShortcutMatch$1(event, "Enter", {
		altKey: "any",
		ctrlKey: "any",
		metaKey: "any",
		shiftKey: true
	});
}
function isOpenLineBreak(event) {
	return IS_APPLE && isExactShortcutMatch$1(event, "o", { ctrlKey: true });
}
function isDeleteWordBackward(event) {
	return isExactShortcutMatch$1(event, "Backspace", CONTROL_OR_ALT);
}
function isDeleteWordForward(event) {
	return isExactShortcutMatch$1(event, "Delete", CONTROL_OR_ALT);
}
function isDeleteLineBackward(event) {
	return IS_APPLE && isExactShortcutMatch$1(event, "Backspace", { metaKey: true });
}
function isDeleteLineForward(event) {
	return IS_APPLE && (isExactShortcutMatch$1(event, "Delete", { metaKey: true }) || isExactShortcutMatch$1(event, "k", { ctrlKey: true }));
}
function isDeleteBackward(event) {
	return isExactShortcutMatch$1(event, "Backspace", { shiftKey: "any" }) || IS_APPLE && isExactShortcutMatch$1(event, "h", { ctrlKey: true });
}
function isDeleteForward(event) {
	return isExactShortcutMatch$1(event, "Delete", {}) || IS_APPLE && isExactShortcutMatch$1(event, "d", { ctrlKey: true });
}
function isUndo(event) {
	return isExactShortcutMatch$1(event, "z", CONTROL_OR_META);
}
function isRedo(event) {
	if (IS_APPLE) return isExactShortcutMatch$1(event, "z", {
		metaKey: true,
		shiftKey: true
	});
	return isExactShortcutMatch$1(event, "y", { ctrlKey: true }) || isExactShortcutMatch$1(event, "z", {
		ctrlKey: true,
		shiftKey: true
	});
}
function isCopy(event) {
	return isExactShortcutMatch$1(event, "c", CONTROL_OR_META);
}
function isCut(event) {
	return isExactShortcutMatch$1(event, "x", CONTROL_OR_META);
}
function isMoveBackward(event) {
	return isExactShortcutMatch$1(event, "ArrowLeft", { shiftKey: "any" });
}
function isMoveToStart(event) {
	return isExactShortcutMatch$1(event, "ArrowLeft", CONTROL_OR_META);
}
function isMoveForward(event) {
	return isExactShortcutMatch$1(event, "ArrowRight", { shiftKey: "any" });
}
function isMoveToEnd(event) {
	return isExactShortcutMatch$1(event, "ArrowRight", CONTROL_OR_META);
}
function isMoveUp(event) {
	return isExactShortcutMatch$1(event, "ArrowUp", {
		altKey: "any",
		shiftKey: "any"
	});
}
function isMoveDown(event) {
	return isExactShortcutMatch$1(event, "ArrowDown", {
		altKey: "any",
		shiftKey: "any"
	});
}
function isModifier(event) {
	return event.ctrlKey || event.shiftKey || event.altKey || event.metaKey;
}
function isSpace(event) {
	return event.key === " ";
}
function isBackspace(event) {
	return event.key === "Backspace";
}
function isEscape(event) {
	return event.key === "Escape";
}
function isDelete(event) {
	return event.key === "Delete";
}
function isSelectAll(event) {
	return isExactShortcutMatch$1(event, "a", CONTROL_OR_META);
}
function $selectAll$1(selection) {
	const root = $getRoot$1();
	if ($isRangeSelection$1(selection)) {
		const anchor = selection.anchor;
		const focus = selection.focus;
		const rootNode = anchor.getNode().getTopLevelElementOrThrow().getParentOrThrow();
		anchor.set(rootNode.getKey(), 0, "element");
		focus.set(rootNode.getKey(), rootNode.getChildrenSize(), "element");
		$normalizeSelection(selection);
		return selection;
	} else {
		const newSelection = root.select(0, root.getChildrenSize());
		$setSelection$1($normalizeSelection(newSelection));
		return newSelection;
	}
}
function getCachedClassNameArray(classNamesTheme, classNameThemeType) {
	if (classNamesTheme.__lexicalClassNameCache === void 0) classNamesTheme.__lexicalClassNameCache = {};
	const classNamesCache = classNamesTheme.__lexicalClassNameCache;
	const cachedClassNames = classNamesCache[classNameThemeType];
	if (cachedClassNames !== void 0) return cachedClassNames;
	const classNames = classNamesTheme[classNameThemeType];
	if (typeof classNames === "string") {
		const classNamesArr = normalizeClassNames$1(classNames);
		classNamesCache[classNameThemeType] = classNamesArr;
		return classNamesArr;
	}
	return classNames;
}
function setMutatedNode(mutatedNodes, registeredNodes, mutationListeners, node, mutation) {
	if (mutationListeners.size === 0) return;
	const nodeType = node.__type;
	const nodeKey = node.__key;
	const registeredNode = registeredNodes.get(nodeType);
	if (registeredNode === void 0) formatDevErrorMessage(`Type ${nodeType} not in registeredNodes`);
	const klass = registeredNode.klass;
	let mutatedNodesByType = mutatedNodes.get(klass);
	if (mutatedNodesByType === void 0) {
		mutatedNodesByType = /* @__PURE__ */ new Map();
		mutatedNodes.set(klass, mutatedNodesByType);
	}
	const prevMutation = mutatedNodesByType.get(nodeKey);
	const isMove = prevMutation === "destroyed" && mutation === "created";
	if (prevMutation === void 0 || isMove) mutatedNodesByType.set(nodeKey, isMove ? "updated" : mutation);
}
/**
* @deprecated Use {@link LexicalEditor.registerMutationListener} with `skipInitialization: false` instead.
*/
function $nodesOfType$1(klass) {
	const klassType = klass.getType();
	const editorState = getActiveEditorState();
	if (editorState._readOnly) {
		const nodes = getCachedTypeToNodeMap(editorState).get(klassType);
		return nodes ? Array.from(nodes.values()) : [];
	}
	const nodes = editorState._nodeMap;
	const nodesOfType = [];
	for (const [, node] of nodes) if (node instanceof klass && node.__type === klassType && node.isAttached()) nodesOfType.push(node);
	return nodesOfType;
}
function resolveElement(element, isBackward, focusOffset) {
	const parent = element.getParent();
	let offset = focusOffset;
	let block = element;
	if (parent !== null) {
		if (isBackward && focusOffset === 0) {
			offset = block.getIndexWithinParent();
			block = parent;
		} else if (!isBackward && focusOffset === block.getChildrenSize()) {
			offset = block.getIndexWithinParent() + 1;
			block = parent;
		}
	}
	return block.getChildAtIndex(isBackward ? offset - 1 : offset);
}
function $getAdjacentNode$1(focus, isBackward) {
	const focusOffset = focus.offset;
	if (focus.type === "element") return resolveElement(focus.getNode(), isBackward, focusOffset);
	else {
		const focusNode = focus.getNode();
		if (isBackward && focusOffset === 0 || !isBackward && focusOffset === focusNode.getTextContentSize()) {
			const possibleNode = isBackward ? focusNode.getPreviousSibling() : focusNode.getNextSibling();
			if (possibleNode === null) return resolveElement(focusNode.getParentOrThrow(), isBackward, focusNode.getIndexWithinParent() + (isBackward ? 0 : 1));
			return possibleNode;
		}
	}
	return null;
}
function isFirefoxClipboardEvents(editor) {
	const event = getWindow(editor).event;
	const inputType = event && event.inputType;
	return inputType === "insertFromPaste" || inputType === "insertFromPasteAsQuotation";
}
function dispatchCommand(editor, command, payload) {
	return triggerCommandListeners(editor, command, payload, editor);
}
function getElementByKeyOrThrow(editor, key) {
	const element = editor._keyToDOMMap.get(key);
	if (element === void 0) formatDevErrorMessage(`Reconciliation: could not find DOM element for node key ${key}`);
	return element;
}
function getParentElement(node) {
	const parentElement = node.assignedSlot || node.parentElement;
	return isDocumentFragment$1(parentElement) ? parentElement.host : parentElement;
}
function getDOMOwnerDocument$1(target) {
	return isDOMDocumentNode$1(target) ? target : isHTMLElement$1(target) ? target.ownerDocument : null;
}
function scrollIntoViewIfNeeded(editor, selectionRect, rootElement) {
	const doc = getDOMOwnerDocument$1(rootElement);
	const defaultView = getDefaultView(doc);
	if (doc === null || defaultView === null) return;
	let { top: currentTop, bottom: currentBottom } = selectionRect;
	let targetTop = 0;
	let targetBottom = 0;
	let element = rootElement;
	while (element !== null) {
		const isBodyElement = element === doc.body;
		if (isBodyElement) {
			targetTop = 0;
			targetBottom = getWindow(editor).innerHeight;
			const computedStyle = defaultView.getComputedStyle(doc.documentElement);
			const scrollPaddingTop = parseFloat(computedStyle.scrollPaddingTop);
			const scrollPaddingBottom = parseFloat(computedStyle.scrollPaddingBottom);
			if (isFinite(scrollPaddingTop)) targetTop += scrollPaddingTop;
			if (isFinite(scrollPaddingBottom)) targetBottom -= scrollPaddingBottom;
		} else {
			const targetRect = element.getBoundingClientRect();
			targetTop = targetRect.top;
			targetBottom = targetRect.bottom;
		}
		let diff = 0;
		if (currentTop < targetTop) diff = -(targetTop - currentTop);
		else if (currentBottom > targetBottom) diff = currentBottom - targetBottom;
		if (diff !== 0) if (isBodyElement) defaultView.scrollBy(0, diff);
		else {
			const scrollTop = element.scrollTop;
			element.scrollTop += diff;
			const yOffset = element.scrollTop - scrollTop;
			currentTop -= yOffset;
			currentBottom -= yOffset;
		}
		if (isBodyElement) break;
		element = getParentElement(element);
	}
}
function $hasUpdateTag$1(tag) {
	return getActiveEditor()._updateTags.has(tag);
}
function $addUpdateTag$1(tag) {
	errorOnReadOnly();
	getActiveEditor()._updateTags.add(tag);
}
/**
* Add a function to run after the current update. This will run after any
* `onUpdate` function already supplied to `editor.update()`, as well as any
* functions added with previous calls to `$onUpdate`.
*
* @param updateFn The function to run after the current update.
*/
function $onUpdate$1(updateFn) {
	errorOnReadOnly();
	getActiveEditor()._deferred.push(updateFn);
}
function $maybeMoveChildrenSelectionToParent(parentNode) {
	const selection = $getSelection$1();
	if (!$isRangeSelection$1(selection) || !$isElementNode$1(parentNode)) return selection;
	const { anchor, focus } = selection;
	const anchorNode = anchor.getNode();
	const focusNode = focus.getNode();
	if ($hasAncestor$1(anchorNode, parentNode)) anchor.set(parentNode.__key, 0, "element");
	if ($hasAncestor$1(focusNode, parentNode)) focus.set(parentNode.__key, 0, "element");
	return selection;
}
function $hasAncestor$1(child, targetNode) {
	let parent = child.getParent();
	while (parent !== null) {
		if (parent.is(targetNode)) return true;
		parent = parent.getParent();
	}
	return false;
}
function getDefaultView(domElem) {
	const ownerDoc = getDOMOwnerDocument$1(domElem);
	return ownerDoc ? ownerDoc.defaultView : null;
}
function getWindow(editor) {
	const windowObj = editor._window;
	if (windowObj === null) formatDevErrorMessage(`window object not found`);
	return windowObj;
}
function $isInlineElementOrDecoratorNode$1(node) {
	return $isElementNode$1(node) && node.isInline() || $isDecoratorNode$1(node) && node.isInline();
}
function $getNearestRootOrShadowRoot$1(node) {
	let parent = node.getParentOrThrow();
	while (parent !== null) {
		if ($isRootOrShadowRoot$1(parent)) return parent;
		parent = parent.getParentOrThrow();
	}
	return parent;
}
function $isRootOrShadowRoot$1(node) {
	return $isRootNode$1(node) || $isElementNode$1(node) && node.isShadowRoot();
}
/**
* Returns a shallow clone of node with a new key. All properties of the node
* will be copied to the new node (by `clone` and then `afterCloneFrom`),
* except those related to parent/sibling/child
* relationships in the `EditorState`. This means that the copy must be
* separately added to the document, and it will not have any children.
*
* @param node - The node to be copied.
* @param skipReset - If true (default false) skip the call to resetOnCopyNodeFrom
* @returns The copy of the node.
*/
function $copyNode$1(node, skipReset = false) {
	const copy = node.constructor.clone(node);
	$setNodeKey(copy, null);
	copy.afterCloneFrom(node);
	if (!skipReset) copy.resetOnCopyNodeFrom(node);
	return copy;
}
function $applyNodeReplacement$1(node) {
	const editor = getActiveEditor();
	const nodeType = node.getType();
	const registeredNode = getRegisteredNode$1(editor, nodeType);
	if (!(registeredNode !== void 0)) formatDevErrorMessage(`$applyNodeReplacement node ${node.constructor.name} with type ${nodeType} must be registered to the editor. You can do this by passing the node class via the "nodes" array in the editor config.`);
	const { replace, replaceWithKlass } = registeredNode;
	if (replace !== null) {
		const replacementNode = replace(node);
		const replacementNodeKlass = replacementNode.constructor;
		if (replaceWithKlass !== null) {
			if (!(replacementNode instanceof replaceWithKlass)) formatDevErrorMessage(`$applyNodeReplacement failed. Expected replacement node to be an instance of ${replaceWithKlass.name} with type ${replaceWithKlass.getType()} but returned ${replacementNodeKlass.name} with type ${replacementNodeKlass.getType()} from original node ${node.constructor.name} with type ${nodeType}`);
		} else if (!(replacementNode instanceof node.constructor && replacementNodeKlass !== node.constructor)) formatDevErrorMessage(`$applyNodeReplacement failed. Ensure replacement node ${replacementNodeKlass.name} with type ${replacementNodeKlass.getType()} is a subclass of the original node ${node.constructor.name} with type ${nodeType}.`);
		if (!(replacementNode.__key !== node.__key)) formatDevErrorMessage(`$applyNodeReplacement failed. Ensure that the key argument is *not* used in your replace function (from node ${node.constructor.name} with type ${nodeType} to node ${replacementNodeKlass.name} with type ${replacementNodeKlass.getType()}), Node keys must never be re-used except by the static clone method.`);
		return replacementNode;
	}
	return node;
}
function errorOnInsertTextNodeOnRoot(node, insertNode) {
	if ($isRootNode$1(node.getParent()) && !$isElementNode$1(insertNode) && !$isDecoratorNode$1(insertNode)) formatDevErrorMessage(`Only element or decorator nodes can be inserted in to the root node`);
}
function $getNodeByKeyOrThrow$1(key) {
	const node = $getNodeByKey$1(key);
	if (node === null) formatDevErrorMessage(`Expected node with key ${key} to exist but it's not in the nodeMap.`);
	return node;
}
function createBlockCursorElement(editorConfig) {
	const theme = editorConfig.theme;
	const element = document.createElement("div");
	element.contentEditable = "false";
	element.setAttribute("data-lexical-cursor", "true");
	let blockCursorTheme = theme.blockCursor;
	if (blockCursorTheme !== void 0) {
		if (typeof blockCursorTheme === "string") blockCursorTheme = theme.blockCursor = normalizeClassNames$1(blockCursorTheme);
		if (blockCursorTheme !== void 0) element.classList.add(...blockCursorTheme);
	}
	return element;
}
function needsBlockCursor(node) {
	return ($isDecoratorNode$1(node) || $isElementNode$1(node) && !node.canBeEmpty()) && !node.isInline();
}
function removeDOMBlockCursorElement(blockCursorElement, editor, rootElement) {
	rootElement.style.removeProperty("caret-color");
	editor._blockCursorElement = null;
	const parentElement = blockCursorElement.parentElement;
	if (parentElement !== null) parentElement.removeChild(blockCursorElement);
}
function updateDOMBlockCursorElement(editor, rootElement, nextSelection) {
	let blockCursorElement = editor._blockCursorElement;
	if ($isRangeSelection$1(nextSelection) && nextSelection.isCollapsed() && nextSelection.anchor.type === "element" && rootElement.contains(document.activeElement)) {
		const anchor = nextSelection.anchor;
		const elementNode = anchor.getNode();
		const offset = anchor.offset;
		const elementNodeSize = elementNode.getChildrenSize();
		let isBlockCursor = false;
		let insertBeforeElement = null;
		if (offset === elementNodeSize) {
			if (needsBlockCursor(elementNode.getChildAtIndex(offset - 1))) isBlockCursor = true;
		} else {
			const child = elementNode.getChildAtIndex(offset);
			if (child !== null && needsBlockCursor(child)) {
				const sibling = child.getPreviousSibling();
				if (sibling === null || needsBlockCursor(sibling)) {
					isBlockCursor = true;
					insertBeforeElement = editor.getElementByKey(child.__key);
				}
			}
		}
		if (isBlockCursor) {
			const elementDOM = editor.getElementByKey(elementNode.__key);
			if (blockCursorElement === null) editor._blockCursorElement = blockCursorElement = createBlockCursorElement(editor._config);
			rootElement.style.caretColor = "transparent";
			if (insertBeforeElement === null) elementDOM.appendChild(blockCursorElement);
			else elementDOM.insertBefore(blockCursorElement, insertBeforeElement);
			return;
		}
	}
	if (blockCursorElement !== null) removeDOMBlockCursorElement(blockCursorElement, editor, rootElement);
}
/**
* Returns the selection for the given window, or the global window if null.
* Will return null if {@link CAN_USE_DOM} is false.
*
* @param targetWindow The window to get the selection from
* @returns a Selection or null
*/
function getDOMSelection$1(targetWindow) {
	return !CAN_USE_DOM ? null : (targetWindow || window).getSelection();
}
/**
* Returns the selection for the defaultView of the ownerDocument of given EventTarget.
*
* @param eventTarget The node to get the selection from
* @returns a Selection or null
*/
function getDOMSelectionFromTarget$1(eventTarget) {
	const defaultView = getDefaultView(eventTarget);
	return defaultView ? defaultView.getSelection() : null;
}
function $splitNode$1(node, offset) {
	let startNode = node.getChildAtIndex(offset);
	if (startNode == null) startNode = node;
	if (!!$isRootOrShadowRoot$1(node)) formatDevErrorMessage(`Can not call $splitNode() on root element`);
	const recurse = (currentNode) => {
		const parent = currentNode.getParentOrThrow();
		const isParentRoot = $isRootOrShadowRoot$1(parent);
		const nodeToMove = currentNode === startNode && !isParentRoot ? currentNode : $copyNode$1(currentNode);
		if (isParentRoot) {
			if (!($isElementNode$1(currentNode) && $isElementNode$1(nodeToMove))) formatDevErrorMessage(`Children of a root must be ElementNode`);
			currentNode.insertAfter(nodeToMove);
			return [
				currentNode,
				nodeToMove,
				nodeToMove
			];
		} else {
			const [leftTree, rightTree, newParent] = recurse(parent);
			const nextSiblings = currentNode.getNextSiblings();
			newParent.append(nodeToMove, ...nextSiblings);
			return [
				leftTree,
				rightTree,
				nodeToMove
			];
		}
	};
	const [leftTree, rightTree] = recurse(startNode);
	return [leftTree, rightTree];
}
/**
* @param x - The element being tested
* @returns Returns true if x is an HTML anchor tag, false otherwise
*/
function isHTMLAnchorElement$1(x) {
	return isHTMLElement$1(x) && x.tagName === "A";
}
/**
* @param x - The element being tested
* @returns Returns true if x is an HTML element, false otherwise.
*/
function isHTMLElement$1(x) {
	return isDOMNode$1(x) && x.nodeType === DOM_ELEMENT_TYPE;
}
/**
* @param x - The element being tested
* @returns Returns true if x is a DOM Node, false otherwise.
*/
function isDOMNode$1(x) {
	return typeof x === "object" && x !== null && "nodeType" in x && typeof x.nodeType === "number";
}
/**
* @param x - The element being testing
* @returns Returns true if x is a document fragment, false otherwise.
*/
function isDocumentFragment$1(x) {
	return isDOMNode$1(x) && x.nodeType === DOM_DOCUMENT_FRAGMENT_TYPE;
}
/**
*
* @param node - the Dom Node to check
* @returns if the Dom Node is an inline node
*/
function isInlineDomNode$1(node) {
	const inlineNodes = /* @__PURE__ */ new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
	return node.nodeName.match(inlineNodes) !== null;
}
function isBlockDomNode$1(node) {
	const blockNodes = /* @__PURE__ */ new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
	return node.nodeName.match(blockNodes) !== null;
}
/**
* @internal
*
* This function is for internal use of the library.
* Please do not use it as it may change in the future.
*
* This function returns true for a DecoratorNode that is not inline OR
* an ElementNode that is:
* - not a root or shadow root
* - not inline
* - can't be empty
* - has no children or an inline first child
*/
function INTERNAL_$isBlock$1(node) {
	if ($isDecoratorNode$1(node) && !node.isInline()) return true;
	if (!$isElementNode$1(node) || $isRootOrShadowRoot$1(node)) return false;
	const firstChild = node.getFirstChild();
	const isLeafElement = firstChild === null || $isLineBreakNode$1(firstChild) || $isTextNode$1(firstChild) || firstChild.isInline();
	return !node.isInline() && node.canBeEmpty() !== false && isLeafElement;
}
/**
* Utility function for accessing current active editor instance.
* @returns Current active editor
*/
function $getEditor$1() {
	return getActiveEditor();
}
/**
* @internal @experimental
*/
function $getEditorDOMRenderConfig$1(editor = $getEditor$1()) {
	return editor._config.dom || DEFAULT_EDITOR_DOM_CONFIG$1;
}
/** @internal */
/**
* @internal
* Compute a cached Map of node type to nodes for a frozen EditorState
*/
const cachedNodeMaps = /* @__PURE__ */ new WeakMap();
const EMPTY_TYPE_TO_NODE_MAP = /* @__PURE__ */ new Map();
function getCachedTypeToNodeMap(editorState) {
	if (!editorState._readOnly && editorState.isEmpty()) return EMPTY_TYPE_TO_NODE_MAP;
	if (!editorState._readOnly) formatDevErrorMessage(`getCachedTypeToNodeMap called with a writable EditorState`);
	let typeToNodeMap = cachedNodeMaps.get(editorState);
	if (!typeToNodeMap) {
		typeToNodeMap = computeTypeToNodeMap(editorState);
		cachedNodeMaps.set(editorState, typeToNodeMap);
	}
	return typeToNodeMap;
}
/**
* @internal
* Compute a Map of node type to nodes for an EditorState
*/
function computeTypeToNodeMap(editorState) {
	const typeToNodeMap = /* @__PURE__ */ new Map();
	for (const [nodeKey, node] of editorState._nodeMap) {
		const nodeType = node.__type;
		let nodeMap = typeToNodeMap.get(nodeType);
		if (!nodeMap) {
			nodeMap = /* @__PURE__ */ new Map();
			typeToNodeMap.set(nodeType, nodeMap);
		}
		nodeMap.set(nodeKey, node);
	}
	return typeToNodeMap;
}
/**
* Returns a clone of a node using `node.constructor.clone()` followed by
* `clone.afterCloneFrom(node)`. The resulting clone must have the same key,
* parent/next/prev pointers, and other properties that are not set by
* `node.constructor.clone` (format, style, etc.). This is primarily used by
* {@link LexicalNode.getWritable} to create a writable version of an
* existing node. The clone is the same logical node as the original node,
* do not try and use this function to duplicate or copy an existing node.
*
* Does not mutate the EditorState.
* @param latestNode - The node to be cloned.
* @returns The clone of the node.
*/
function $cloneWithProperties$1(latestNode) {
	const constructor = latestNode.constructor;
	const mutableNode = constructor.clone(latestNode);
	mutableNode.afterCloneFrom(latestNode);
	if (!(mutableNode.__key === latestNode.__key)) formatDevErrorMessage(`$cloneWithProperties: ${constructor.name}.clone(node) (with type '${constructor.getType()}') did not return a node with the same key, make sure to specify node.__key as the last argument to the constructor`);
	if (!(mutableNode.__parent === latestNode.__parent && mutableNode.__next === latestNode.__next && mutableNode.__prev === latestNode.__prev)) formatDevErrorMessage(`$cloneWithProperties: ${constructor.name}.clone(node) (with type '${constructor.getType()}') overrode afterCloneFrom but did not call super.afterCloneFrom(prevNode)`);
	return mutableNode;
}
/**
* Returns a clone with {@link $cloneWithProperties} and then "detaches"
* it from the state by overriding its getLatest and getWritable to always
* return this. This node can not be added to an EditorState or become the
* parent, child, or sibling of another node. It is primarily only useful
* for making in-place temporary modifications to a TextNode when
* serializing a partial slice.
*
* Does not mutate the EditorState.
* @param latestNode - The node to be cloned.
* @returns The clone of the node.
*/
function $cloneWithPropertiesEphemeral$1(latestNode) {
	return $markEphemeral($cloneWithProperties$1(latestNode));
}
function setNodeIndentFromDOM$1(elementDom, elementNode) {
	const indentSize = parseInt(elementDom.style.paddingInlineStart, 10) || 0;
	const indent = Math.round(indentSize / 40);
	elementNode.setIndent(indent);
}
/**
* @internal
*
* Mark this node as unmanaged by lexical's mutation observer like
* decorator nodes
*/
function setDOMUnmanaged$1(elementDom) {
	const el = elementDom;
	el.__lexicalUnmanaged = true;
}
/**
* @internal
*
* True if this DOM node was marked with {@link setDOMUnmanaged}
*/
function isDOMUnmanaged$1(elementDom) {
	return elementDom.__lexicalUnmanaged === true;
}
/**
* @internal
*
* Object.hasOwn ponyfill
*/
function hasOwn(o, k) {
	return Object.prototype.hasOwnProperty.call(o, k);
}
/**
* @internal
*/
function hasOwnStaticMethod(klass, k) {
	return hasOwn(klass, k) && klass[k] !== LexicalNode[k];
}
/**
* @internal
*/
function hasOwnExportDOM(klass) {
	return hasOwn(klass.prototype, "exportDOM");
}
/** @internal */
function isAbstractNodeClass(klass) {
	if (!(klass === LexicalNode || klass.prototype instanceof LexicalNode)) {
		let ownNodeType = "<unknown>";
		let version = "<unknown>";
		try {
			ownNodeType = klass.getType();
		} catch (_err) {}
		try {
			if (LexicalEditor.version) version = JSON.parse(LexicalEditor.version);
		} catch (_err) {}
		formatDevErrorMessage(`${klass.name} (type ${ownNodeType}) does not subclass LexicalNode from the lexical package used by this editor (version ${version}). All lexical and @lexical/* packages used by an editor must have identical versions. If you suspect the version does match, then the problem may be caused by multiple copies of the same lexical module (e.g. both esm and cjs, or included directly in multiple entrypoints).`);
	}
	return klass === DecoratorNode$1 || klass === ElementNode$1 || klass === LexicalNode;
}
/** @internal */
function getStaticNodeConfig$1(klass) {
	const nodeConfigRecord = PROTOTYPE_CONFIG_METHOD in klass.prototype ? klass.prototype[PROTOTYPE_CONFIG_METHOD]() : void 0;
	const isAbstract = isAbstractNodeClass(klass);
	const nodeType = !isAbstract && hasOwnStaticMethod(klass, "getType") ? klass.getType() : void 0;
	let ownNodeConfig;
	let ownNodeType = nodeType;
	if (nodeConfigRecord) if (nodeType) ownNodeConfig = nodeConfigRecord[nodeType];
	else for (const [k, v] of Object.entries(nodeConfigRecord)) {
		ownNodeType = k;
		ownNodeConfig = v;
	}
	if (!isAbstract && ownNodeType) {
		if (!hasOwnStaticMethod(klass, "getType")) klass.getType = () => ownNodeType;
		if (!hasOwnStaticMethod(klass, "clone")) {
			if (TextNode$1.length === 0) {
				if (!(klass.length === 0)) formatDevErrorMessage(`${klass.name} (type ${ownNodeType}) must implement a static clone method since its constructor has ${String(klass.length)} required arguments (expecting 0). Use an explicit default in the first argument of your constructor(prop: T=X, nodeKey?: NodeKey).`);
			}
			klass.clone = (prevNode) => {
				setPendingNodeToClone(prevNode);
				return new klass();
			};
		}
		if (!hasOwnStaticMethod(klass, "importJSON")) {
			if (TextNode$1.length === 0) {
				if (!(klass.length === 0)) formatDevErrorMessage(`${klass.name} (type ${ownNodeType}) must implement a static importJSON method since its constructor has ${String(klass.length)} required arguments (expecting 0). Use an explicit default in the first argument of your constructor(prop: T=X, nodeKey?: NodeKey).`);
			}
			klass.importJSON = ownNodeConfig && ownNodeConfig.$importJSON || ((serializedNode) => new klass().updateFromJSON(serializedNode));
		}
		if (!hasOwnStaticMethod(klass, "importDOM") && ownNodeConfig) {
			const { importDOM } = ownNodeConfig;
			if (importDOM) klass.importDOM = () => importDOM;
		}
	}
	return {
		ownNodeConfig,
		ownNodeType
	};
}
/**
* Create an node from its class.
*
* Note that this will directly construct the final `withKlass` node type,
* and will ignore the deprecated `with` functions. This allows `$create` to
* skip any intermediate steps where the replaced node would be created and
* then immediately discarded (once per configured replacement of that node).
*
* This does not support any arguments to the constructor.
* Setters can be used to initialize your node, and they can
* be chained. You can of course write your own mutliple-argument functions
* to wrap that.
*
* @example
* ```ts
* function $createTokenText(text: string): TextNode {
*   return $create(TextNode).setTextContent(text).setMode('token');
* }
* ```
*/
function $create$1(klass) {
	const editor = $getEditor$1();
	errorOnReadOnly();
	return new (editor.resolveRegisteredNodeAfterReplacements(editor.getRegisteredNode(klass))).klass();
}
/**
* Starts with a node and moves up the tree (toward the root node) to find a matching node based on
* the search parameters of the findFn. (Consider JavaScripts' .find() function where a testing function must be
* passed as an argument. eg. if( (node) => node.__type === 'div') ) return true; otherwise return false
* @param startingNode - The node where the search starts.
* @param findFn - A testing function that returns true if the current node satisfies the testing parameters.
* @returns `startingNode` or one of its ancestors that matches the `findFn` predicate and is not the `RootNode`, or `null` if no match was found.
*/
const $findMatchingParent$1 = (startingNode, findFn) => {
	let curr = startingNode;
	while (curr != null && !$isRootNode$1(curr)) {
		if (findFn(curr)) return curr;
		curr = curr.getParent();
	}
	return null;
};
function $createChildrenArray$1(element, nodeMap) {
	const children = [];
	let nodeKey = element.__first;
	while (nodeKey !== null) {
		const node = nodeMap === null ? $getNodeByKey$1(nodeKey) : nodeMap.get(nodeKey);
		if (node === null || node === void 0) formatDevErrorMessage(`$createChildrenArray: node does not exist in nodeMap`);
		children.push(nodeKey);
		nodeKey = node.__next;
	}
	return children;
}
/**
* The direction of a caret, 'next' points towards the end of the document
* and 'previous' points towards the beginning
*/
/**
* A type utility to flip next and previous
*/
/**
* A sibling caret type points from a LexicalNode origin to its next or previous sibling,
* and a child caret type points from an ElementNode origin to its first or last child.
*/
/**
* The RootMode is specified in all caret traversals where the traversal can go up
* towards the root. 'root' means that it will stop at the document root,
* and 'shadowRoot' will stop at the document root or any shadow root
* (per {@link $isRootOrShadowRoot}).
*/
const FLIP_DIRECTION = {
	next: "previous",
	previous: "next"
};
/** @noInheritDoc */
/**
* A RangeSelection expressed as a pair of Carets
*/
/**
* A NodeCaret is the combination of an origin node and a direction
* that points towards where a connected node will be fetched, inserted,
* or replaced. A SiblingCaret points from a node to its next or previous
* sibling, and a ChildCaret points to its first or last child
* (using next or previous as direction, for symmetry with SiblingCaret).
*
* The differences between NodeCaret and PointType are:
* - NodeCaret can only be used to refer to an entire node (PointCaret is used when a full analog is needed). A PointType of text type can be used to refer to a specific location inside of a TextNode.
* - NodeCaret stores an origin node, type (sibling or child), and direction (next or previous). A PointType stores a type (text or element), the key of a node, and a text or child offset within that node.
* - NodeCaret is directional and always refers to a very specific node, eliminating all ambiguity. PointType can refer to the location before or at a node depending on context.
* - NodeCaret is more robust to nearby mutations, as it relies only on a node's direct connections. An element Any change to the count of previous siblings in an element PointType will invalidate it.
* - NodeCaret is designed to work more directly with the internal representation of the document tree, making it suitable for use in traversals without performing any redundant work.
*
* The caret does *not* update in response to any mutations, you should
* not persist it across editor updates, and using a caret after its origin
* node has been removed or replaced may result in runtime errors.
*/
/**
* A PointCaret is a NodeCaret that also includes a
* TextPointCaret type which refers to a specific offset of a TextNode.
* This type is separate because it is not relevant to general node traversal
* so it doesn't make sense to have it show up except when defining
* a CaretRange and in those cases there will be at most two of them only
* at the boundaries.
*
* The addition of TextPointCaret allows this type to represent any location
* that is representable by PointType, as the TextPointCaret refers to a
* specific offset within a TextNode.
*/
/**
* A SiblingCaret points from an origin LexicalNode towards its next or previous sibling.
*/
/**
* A ChildCaret points from an origin ElementNode towards its first or last child.
*/
/**
* A TextPointCaret is a special case of a SiblingCaret that also carries
* an offset used for representing partially selected TextNode at the edges
* of a CaretRange.
*
* The direction determines which part of the text is adjacent to the caret,
* if next it's all of the text after offset. If previous, it's all of the
* text before offset.
*
* While this can be used in place of any SiblingCaret of a TextNode,
* the offset into the text will be ignored except in contexts that
* specifically use the TextPointCaret or PointCaret types.
*/
/**
* A TextPointCaretSlice is a wrapper for a TextPointCaret that carries a signed
* distance representing the direction and amount of text selected from the given
* caret. A negative distance means that text before offset is selected, a
* positive distance means that text after offset is selected. The offset+distance
* pair is not affected in any way by the direction of the caret.
*/
/**
* A utility type to specify that a CaretRange may have zero,
* one, or two associated TextPointCaretSlice. If the anchor
* and focus are on the same node, the anchorSlice will contain
* the slice and focusSlie will be null.
*/
var AbstractCaret = class {
	origin;
	constructor(origin) {
		this.origin = origin;
	}
	[Symbol.iterator]() {
		return makeStepwiseIterator$1({
			hasNext: $isSiblingCaret$1,
			initial: this.getAdjacentCaret(),
			map: (caret) => caret,
			step: (caret) => caret.getAdjacentCaret()
		});
	}
	getAdjacentCaret() {
		return $getSiblingCaret$1(this.getNodeAtCaret(), this.direction);
	}
	getSiblingCaret() {
		return $getSiblingCaret$1(this.origin, this.direction);
	}
	remove() {
		const node = this.getNodeAtCaret();
		if (node) node.remove();
		return this;
	}
	replaceOrInsert(node, includeChildren) {
		const target = this.getNodeAtCaret();
		if (node.is(this.origin) || node.is(target));
		else if (target === null) this.insert(node);
		else target.replace(node, includeChildren);
		return this;
	}
	splice(deleteCount, nodes, nodesDirection = "next") {
		const nodeIter = nodesDirection === this.direction ? nodes : Array.from(nodes).reverse();
		let caret = this;
		const parent = this.getParentAtCaret();
		const nodesToRemove = /* @__PURE__ */ new Map();
		for (let removeCaret = caret.getAdjacentCaret(); removeCaret !== null && nodesToRemove.size < deleteCount; removeCaret = removeCaret.getAdjacentCaret()) {
			const writableNode = removeCaret.origin.getWritable();
			nodesToRemove.set(writableNode.getKey(), writableNode);
		}
		for (const node of nodeIter) {
			if (nodesToRemove.size > 0) {
				const target = caret.getNodeAtCaret();
				if (target) {
					nodesToRemove.delete(target.getKey());
					nodesToRemove.delete(node.getKey());
					if (target.is(node) || caret.origin.is(node));
					else {
						const nodeParent = node.getParent();
						if (nodeParent && nodeParent.is(parent)) node.remove();
						target.replace(node);
					}
				} else if (!(target !== null)) formatDevErrorMessage(`NodeCaret.splice: Underflow of expected nodesToRemove during splice (keys: ${Array.from(nodesToRemove).join(" ")})`);
			} else caret.insert(node);
			caret = $getSiblingCaret$1(node, this.direction);
		}
		for (const node of nodesToRemove.values()) node.remove();
		return this;
	}
};
var AbstractChildCaret = class AbstractChildCaret extends AbstractCaret {
	type = "child";
	getLatest() {
		const origin = this.origin.getLatest();
		return origin === this.origin ? this : $getChildCaret$1(origin, this.direction);
	}
	/**
	* Get the SiblingCaret from this origin in the same direction.
	*
	* @param mode 'root' to return null at the root, 'shadowRoot' to return null at the root or any shadow root
	* @returns A SiblingCaret with this origin, or null if origin is a root according to mode.
	*/
	getParentCaret(mode = "root") {
		return $getSiblingCaret$1($filterByMode(this.getParentAtCaret(), mode), this.direction);
	}
	getFlipped() {
		const dir = flipDirection$1(this.direction);
		return $getSiblingCaret$1(this.getNodeAtCaret(), dir) || $getChildCaret$1(this.origin, dir);
	}
	getParentAtCaret() {
		return this.origin;
	}
	getChildCaret() {
		return this;
	}
	isSameNodeCaret(other) {
		return other instanceof AbstractChildCaret && this.direction === other.direction && this.origin.is(other.origin);
	}
	isSamePointCaret(other) {
		return this.isSameNodeCaret(other);
	}
};
var ChildCaretFirst = class extends AbstractChildCaret {
	direction = "next";
	getNodeAtCaret() {
		return this.origin.getFirstChild();
	}
	insert(node) {
		this.origin.splice(0, 0, [node]);
		return this;
	}
};
var ChildCaretLast = class extends AbstractChildCaret {
	direction = "previous";
	getNodeAtCaret() {
		return this.origin.getLastChild();
	}
	insert(node) {
		this.origin.splice(this.origin.getChildrenSize(), 0, [node]);
		return this;
	}
};
const MODE_PREDICATE = {
	root: $isRootNode$1,
	shadowRoot: $isRootOrShadowRoot$1
};
/**
* Flip a direction ('next' -> 'previous'; 'previous' -> 'next').
*
* Note that TypeScript can't prove that FlipDirection is its own
* inverse (but if you have a concrete 'next' or 'previous' it will
* simplify accordingly).
*
* @param direction A direction
* @returns The opposite direction
*/
function flipDirection$1(direction) {
	return FLIP_DIRECTION[direction];
}
function $filterByMode(node, mode = "root") {
	return MODE_PREDICATE[mode](node) ? null : node;
}
var AbstractSiblingCaret = class AbstractSiblingCaret extends AbstractCaret {
	type = "sibling";
	getLatest() {
		const origin = this.origin.getLatest();
		return origin === this.origin ? this : $getSiblingCaret$1(origin, this.direction);
	}
	getSiblingCaret() {
		return this;
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return $isElementNode$1(this.origin) ? $getChildCaret$1(this.origin, this.direction) : null;
	}
	getParentCaret(mode = "root") {
		return $getSiblingCaret$1($filterByMode(this.getParentAtCaret(), mode), this.direction);
	}
	getFlipped() {
		const dir = flipDirection$1(this.direction);
		return $getSiblingCaret$1(this.getNodeAtCaret(), dir) || $getChildCaret$1(this.origin.getParentOrThrow(), dir);
	}
	isSamePointCaret(other) {
		return other instanceof AbstractSiblingCaret && this.direction === other.direction && this.origin.is(other.origin);
	}
	isSameNodeCaret(other) {
		return (other instanceof AbstractSiblingCaret || other instanceof AbstractTextPointCaret) && this.direction === other.direction && this.origin.is(other.origin);
	}
};
var AbstractTextPointCaret = class AbstractTextPointCaret extends AbstractCaret {
	type = "text";
	offset;
	constructor(origin, offset) {
		super(origin);
		this.offset = offset;
	}
	getLatest() {
		const origin = this.origin.getLatest();
		return origin === this.origin ? this : $getTextPointCaret$1(origin, this.direction, this.offset);
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return null;
	}
	getParentCaret(mode = "root") {
		return $getSiblingCaret$1($filterByMode(this.getParentAtCaret(), mode), this.direction);
	}
	getFlipped() {
		return $getTextPointCaret$1(this.origin, flipDirection$1(this.direction), this.offset);
	}
	isSamePointCaret(other) {
		return other instanceof AbstractTextPointCaret && this.direction === other.direction && this.origin.is(other.origin) && this.offset === other.offset;
	}
	isSameNodeCaret(other) {
		return (other instanceof AbstractSiblingCaret || other instanceof AbstractTextPointCaret) && this.direction === other.direction && this.origin.is(other.origin);
	}
	getSiblingCaret() {
		return $getSiblingCaret$1(this.origin, this.direction);
	}
};
/**
* Guard to check if the given caret is specifically a TextPointCaret
*
* @param caret Any caret
* @returns true if it is a TextPointCaret
*/
function $isTextPointCaret$1(caret) {
	return caret instanceof AbstractTextPointCaret;
}
/**
* Guard to check if the given argument is any type of caret
*
* @param caret
* @returns true if caret is any type of caret
*/
function $isNodeCaret$1(caret) {
	return caret instanceof AbstractCaret;
}
/**
* Guard to check if the given argument is specifically a SiblingCaret (or TextPointCaret)
*
* @param caret
* @returns true if caret is a SiblingCaret
*/
function $isSiblingCaret$1(caret) {
	return caret instanceof AbstractSiblingCaret;
}
/**
* Guard to check if the given argument is specifically a ChildCaret

* @param caret 
* @returns true if caret is a ChildCaret
*/
function $isChildCaret$1(caret) {
	return caret instanceof AbstractChildCaret;
}
var SiblingCaretNext = class extends AbstractSiblingCaret {
	direction = "next";
	getNodeAtCaret() {
		return this.origin.getNextSibling();
	}
	insert(node) {
		this.origin.insertAfter(node);
		return this;
	}
};
var SiblingCaretPrevious = class extends AbstractSiblingCaret {
	direction = "previous";
	getNodeAtCaret() {
		return this.origin.getPreviousSibling();
	}
	insert(node) {
		this.origin.insertBefore(node);
		return this;
	}
};
var TextPointCaretNext = class extends AbstractTextPointCaret {
	direction = "next";
	getNodeAtCaret() {
		return this.origin.getNextSibling();
	}
	insert(node) {
		this.origin.insertAfter(node);
		return this;
	}
};
var TextPointCaretPrevious = class extends AbstractTextPointCaret {
	direction = "previous";
	getNodeAtCaret() {
		return this.origin.getPreviousSibling();
	}
	insert(node) {
		this.origin.insertBefore(node);
		return this;
	}
};
const TEXT_CTOR = {
	next: TextPointCaretNext,
	previous: TextPointCaretPrevious
};
const SIBLING_CTOR = {
	next: SiblingCaretNext,
	previous: SiblingCaretPrevious
};
const CHILD_CTOR = {
	next: ChildCaretFirst,
	previous: ChildCaretLast
};
/**
* Get a caret that points at the next or previous sibling of the given origin node.
*
* @param origin The origin node
* @param direction 'next' or 'previous'
* @returns null if origin is null, otherwise a SiblingCaret for this origin and direction
*/
function $getSiblingCaret$1(origin, direction) {
	return origin ? new SIBLING_CTOR[direction](origin) : null;
}
/**
* Construct a TextPointCaret
*
* @param origin The TextNode
* @param direction The direction (next points to the end of the text, previous points to the beginning)
* @param offset The offset into the text in absolute positive string coordinates (0 is the start)
* @returns a TextPointCaret
*/
function $getTextPointCaret$1(origin, direction, offset) {
	return origin ? new TEXT_CTOR[direction](origin, $getTextNodeOffset$1(origin, offset)) : null;
}
/**
* Get a normalized offset into a TextNode given a numeric offset or a
* direction for which end of the string to use. Throws in dev if the offset
* is not in the bounds of the text content size.
*
* @param origin a TextNode
* @param offset An absolute offset into the TextNode string, or a direction for which end to use as the offset
* @param mode If 'error' (the default) out of bounds offsets will be an error in dev. Otherwise it will clamp to a valid offset.
* @returns An absolute offset into the TextNode string
*/
function $getTextNodeOffset$1(origin, offset, mode = "error") {
	const size = origin.getTextContentSize();
	let numericOffset = offset === "next" ? size : offset === "previous" ? 0 : offset;
	if (numericOffset < 0 || numericOffset > size) {
		if (!(mode === "clamp")) formatDevErrorMessage(`$getTextNodeOffset: invalid offset ${String(offset)} for size ${String(size)} at key ${origin.getKey()}`);
		numericOffset = numericOffset < 0 ? 0 : size;
	}
	return numericOffset;
}
/**
* Construct a TextPointCaretSlice given a TextPointCaret and a signed distance. The
* distance should be negative to slice text before the caret's offset, and positive
* to slice text after the offset. The direction of the caret itself is not
* relevant to the string coordinates when working with a TextPointCaretSlice
* but mutation operations will preserve the direction.
*
* @param caret
* @param distance
* @returns TextPointCaretSlice
*/
function $getTextPointCaretSlice$1(caret, distance) {
	return new TextPointCaretSliceImpl(caret, distance);
}
/**
* Get a caret that points at the first or last child of the given origin node,
* which must be an ElementNode.
*
* @param origin The origin ElementNode
* @param direction 'next' for first child or 'previous' for last child
* @returns null if origin is null or not an ElementNode, otherwise a ChildCaret for this origin and direction
*/
function $getChildCaret$1(origin, direction) {
	return $isElementNode$1(origin) ? new CHILD_CTOR[direction](origin) : null;
}
/**
* Gets the ChildCaret if one is possible at this caret origin, otherwise return the caret
*/
function $getChildCaretOrSelf$1(caret) {
	return caret && caret.getChildCaret() || caret;
}
/**
* Gets the adjacent caret, if not-null and if the origin of the adjacent caret is an ElementNode, then return
* the ChildCaret. This can be used along with the getParentAdjacentCaret method to perform a full DFS
* style traversal of the tree.
*
* @param caret The caret to start at
*/
function $getAdjacentChildCaret$1(caret) {
	return caret && $getChildCaretOrSelf$1(caret.getAdjacentCaret());
}
var CaretRangeImpl = class CaretRangeImpl {
	type = "node-caret-range";
	direction;
	anchor;
	focus;
	constructor(anchor, focus, direction) {
		this.anchor = anchor;
		this.focus = focus;
		this.direction = direction;
	}
	getLatest() {
		const anchor = this.anchor.getLatest();
		const focus = this.focus.getLatest();
		return anchor === this.anchor && focus === this.focus ? this : new CaretRangeImpl(anchor, focus, this.direction);
	}
	isCollapsed() {
		return this.anchor.isSamePointCaret(this.focus);
	}
	getTextSlices() {
		const getSlice = (k) => {
			const caret = this[k].getLatest();
			return $isTextPointCaret$1(caret) ? $getSliceFromTextPointCaret(caret, k) : null;
		};
		const anchorSlice = getSlice("anchor");
		const focusSlice = getSlice("focus");
		if (anchorSlice && focusSlice) {
			const { caret: anchorCaret } = anchorSlice;
			const { caret: focusCaret } = focusSlice;
			if (anchorCaret.isSameNodeCaret(focusCaret)) return [$getTextPointCaretSlice$1(anchorCaret, focusCaret.offset - anchorCaret.offset), null];
		}
		return [anchorSlice, focusSlice];
	}
	iterNodeCarets(rootMode = "root") {
		const anchor = $isTextPointCaret$1(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest();
		const focus = this.focus.getLatest();
		const isTextFocus = $isTextPointCaret$1(focus);
		const step = (state) => state.isSameNodeCaret(focus) ? null : $getAdjacentChildCaret$1(state) || state.getParentCaret(rootMode);
		return makeStepwiseIterator$1({
			hasNext: (state) => state !== null && !(isTextFocus && focus.isSameNodeCaret(state)),
			initial: anchor.isSameNodeCaret(focus) ? null : step(anchor),
			map: (state) => state,
			step
		});
	}
	[Symbol.iterator]() {
		return this.iterNodeCarets("root");
	}
};
var TextPointCaretSliceImpl = class {
	type = "slice";
	caret;
	distance;
	constructor(caret, distance) {
		this.caret = caret;
		this.distance = distance;
	}
	getSliceIndices() {
		const { distance, caret: { offset } } = this;
		const offsetB = offset + distance;
		return offsetB < offset ? [offsetB, offset] : [offset, offsetB];
	}
	getTextContent() {
		const [startIndex, endIndex] = this.getSliceIndices();
		return this.caret.origin.getTextContent().slice(startIndex, endIndex);
	}
	getTextContentSize() {
		return Math.abs(this.distance);
	}
	removeTextSlice() {
		const { caret: { origin, direction } } = this;
		const [indexStart, indexEnd] = this.getSliceIndices();
		const text = origin.getTextContent();
		return $getTextPointCaret$1(origin.setTextContent(text.slice(0, indexStart) + text.slice(indexEnd)), direction, indexStart);
	}
};
function $getSliceFromTextPointCaret(caret, anchorOrFocus) {
	const { direction, origin } = caret;
	return $getTextPointCaretSlice$1(caret, $getTextNodeOffset$1(origin, anchorOrFocus === "focus" ? flipDirection$1(direction) : direction) - caret.offset);
}
/**
* Guard to check for a TextPointCaretSlice
*
* @param caretOrSlice A caret or slice
* @returns true if caretOrSlice is a TextPointCaretSlice
*/
function $isTextPointCaretSlice$1(caretOrSlice) {
	return caretOrSlice instanceof TextPointCaretSliceImpl;
}
/**
* Construct a CaretRange that starts at anchor and goes to the end of the
* document in the anchor caret's direction.
*/
function $extendCaretToRange$1(anchor) {
	return $getCaretRange$1(anchor, $getSiblingCaret$1($getRoot$1(), anchor.direction));
}
/**
* Construct a collapsed CaretRange that starts and ends at anchor.
*/
function $getCollapsedCaretRange$1(anchor) {
	return $getCaretRange$1(anchor, anchor);
}
/**
* Construct a CaretRange from anchor and focus carets pointing in the
* same direction. In order to get the expected behavior,
* the anchor must point towards the focus or be the same point.
*
* In the 'next' direction the anchor should be at or before the
* focus in the document. In the 'previous' direction the anchor
* should be at or after the focus in the document
* (similar to a backwards RangeSelection).
*
* @param anchor
* @param focus
* @returns a CaretRange
*/
function $getCaretRange$1(anchor, focus) {
	if (!(anchor.direction === focus.direction)) formatDevErrorMessage(`$getCaretRange: anchor and focus must be in the same direction`);
	return new CaretRangeImpl(anchor, focus, anchor.direction);
}
/**
* A generalized utility for creating a stepwise iterator
* based on:
*
* - an initial state
* - a stop guard that returns true if the iteration is over, this
*   is typically used to detect a sentinel value such as null or
*   undefined from the state but may return true for other conditions
*   as well
* - a step function that advances the state (this will be called
*   after map each time next() is called to prepare the next state)
* - a map function that will be called that may transform the state
*   before returning it. It will only be called once for each next()
*   call when stop(state) === false
*
* @param config
* @returns An IterableIterator
*/
function makeStepwiseIterator$1(config) {
	const { initial, hasNext, step, map } = config;
	let state = initial;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			if (!hasNext(state)) return {
				done: true,
				value: void 0
			};
			const rval = {
				done: false,
				value: map(state)
			};
			state = step(state);
			return rval;
		}
	};
}
function compareNumber(a, b) {
	return Math.sign(a - b);
}
/**
* A total ordering for `PointCaret<'next'>`, based on
* the same order that a {@link CaretRange} would iterate
* them.
*
* For a given origin node:
* - ChildCaret comes before SiblingCaret
* - TextPointCaret comes before SiblingCaret
*
* An exception is thrown when a and b do not have any
* common ancestor.
*
* This ordering is a sort of mix of pre-order and post-order
* because each ElementNode will show up as a ChildCaret
* on 'enter' (pre-order) and a SiblingCaret on 'leave' (post-order).
*
* @param a
* @param b
* @returns -1 if a comes before b, 0 if a and b are the same, or 1 if a comes after b
*/
function $comparePointCaretNext$1(a, b) {
	const compare = $getCommonAncestor$1(a.origin, b.origin);
	if (!(compare !== null)) formatDevErrorMessage(`$comparePointCaretNext: a (key ${a.origin.getKey()}) and b (key ${b.origin.getKey()}) do not have a common ancestor`);
	switch (compare.type) {
		case "same": {
			const aIsText = a.type === "text";
			const bIsText = b.type === "text";
			return aIsText && bIsText ? compareNumber(a.offset, b.offset) : a.type === b.type ? 0 : aIsText ? -1 : bIsText ? 1 : a.type === "child" ? -1 : 1;
		}
		case "ancestor": return a.type === "child" ? -1 : 1;
		case "descendant": return b.type === "child" ? 1 : -1;
		case "branch": return $getCommonAncestorResultBranchOrder$1(compare);
	}
}
/**
* Return the ordering of siblings in a {@link CommonAncestorResultBranch}
* @param compare Returns -1 if a precedes b, 1 otherwise
*/
function $getCommonAncestorResultBranchOrder$1(compare) {
	const { a, b } = compare;
	const aKey = a.__key;
	const bKey = b.__key;
	let na = a;
	let nb = b;
	for (; na && nb; na = na.getNextSibling(), nb = nb.getNextSibling()) if (na.__key === bKey) return -1;
	else if (nb.__key === aKey) return 1;
	return na === null ? 1 : -1;
}
/**
* The two compared nodes are the same
*/
/**
* Node a was a descendant of node b, and not the same node
*/
/**
* Node a is an ancestor of node b, and not the same node
*/
/**
* Node a and node b have a common ancestor but are on different branches,
* the `a` and `b` properties of this result are the ancestors of a and b
* that are children of the commonAncestor. Since they are siblings, their
* positions are comparable to determine order in the document.
*/
/**
* The result of comparing two nodes that share some common ancestor
*/
function $isSameNode(reference, other) {
	return other.is(reference);
}
function $initialElementTuple(node) {
	return $isElementNode$1(node) ? [node.getLatest(), null] : [node.getParent(), node.getLatest()];
}
/**
* Find a common ancestor of a and b and return a detailed result object,
* or null if there is no common ancestor between the two nodes.
*
* The result object will have a commonAncestor property, and the other
* properties can be used to quickly compare these positions in the tree.
*
* @param a A LexicalNode
* @param b A LexicalNode
* @returns A comparison result between the two nodes or null if they have no common ancestor
*/
function $getCommonAncestor$1(a, b) {
	if (a.is(b)) return {
		commonAncestor: a,
		type: "same"
	};
	const aMap = /* @__PURE__ */ new Map();
	for (let [parent, child] = $initialElementTuple(a); parent; child = parent, parent = parent.getParent()) aMap.set(parent, child);
	for (let [parent, child] = $initialElementTuple(b); parent; child = parent, parent = parent.getParent()) {
		const aChild = aMap.get(parent);
		if (aChild === void 0);
		else if (aChild === null) {
			if (!$isSameNode(a, parent)) formatDevErrorMessage(`$originComparison: ancestor logic error`);
			return {
				commonAncestor: parent,
				type: "ancestor"
			};
		} else if (child === null) {
			if (!$isSameNode(b, parent)) formatDevErrorMessage(`$originComparison: descendant logic error`);
			return {
				commonAncestor: parent,
				type: "descendant"
			};
		} else {
			if (!(($isElementNode$1(aChild) || $isSameNode(a, aChild)) && ($isElementNode$1(child) || $isSameNode(b, child)) && parent.is(aChild.getParent()) && parent.is(child.getParent()))) formatDevErrorMessage(`$originComparison: branch logic error`);
			return {
				a: aChild,
				b: child,
				commonAncestor: parent,
				type: "branch"
			};
		}
	}
	return null;
}
/**
* @param point
* @returns a PointCaret for the point
*/
function $caretFromPoint$1(point, direction) {
	const { type, key, offset } = point;
	const node = $getNodeByKeyOrThrow$1(point.key);
	if (type === "text") {
		if (!$isTextNode$1(node)) formatDevErrorMessage(`$caretFromPoint: Node with type ${node.getType()} and key ${key} that does not inherit from TextNode encountered for text point`);
		return $getTextPointCaret$1(node, direction, offset);
	}
	if (!$isElementNode$1(node)) formatDevErrorMessage(`$caretFromPoint: Node with type ${node.getType()} and key ${key} that does not inherit from ElementNode encountered for element point`);
	return $getChildCaretAtIndex$1(node, point.offset, direction);
}
/**
* Update the given point in-place from the PointCaret
*
* @param point the point to set
* @param caret the caret to set the point from
*/
function $setPointFromCaret$1(point, caret) {
	const { origin, direction } = caret;
	const isNext = direction === "next";
	if ($isTextPointCaret$1(caret)) point.set(origin.getKey(), caret.offset, "text");
	else if ($isSiblingCaret$1(caret)) if ($isTextNode$1(origin)) point.set(origin.getKey(), $getTextNodeOffset$1(origin, direction), "text");
	else point.set(origin.getParentOrThrow().getKey(), origin.getIndexWithinParent() + (isNext ? 1 : 0), "element");
	else {
		if (!($isChildCaret$1(caret) && $isElementNode$1(origin))) formatDevErrorMessage(`$setPointFromCaret: exhaustiveness check`);
		point.set(origin.getKey(), isNext ? 0 : origin.getChildrenSize(), "element");
	}
}
/**
* Set a RangeSelection on the editor from the given CaretRange
*
* @returns The new RangeSelection
*/
function $setSelectionFromCaretRange$1(caretRange) {
	const currentSelection = $getSelection$1();
	const selection = $isRangeSelection$1(currentSelection) ? currentSelection : $createRangeSelection$1();
	$updateRangeSelectionFromCaretRange$1(selection, caretRange);
	$setSelection$1(selection);
	return selection;
}
/**
* Update the points of a RangeSelection based on the given PointCaret.
*/
function $updateRangeSelectionFromCaretRange$1(selection, caretRange) {
	$setPointFromCaret$1(selection.anchor, caretRange.anchor);
	$setPointFromCaret$1(selection.focus, caretRange.focus);
}
/**
* Get a pair of carets for a RangeSelection.
*
* If the focus is before the anchor, then the direction will be
* 'previous', otherwise the direction will be 'next'.
*/
function $caretRangeFromSelection$1(selection) {
	const { anchor, focus } = selection;
	const anchorCaret = $caretFromPoint$1(anchor, "next");
	const focusCaret = $caretFromPoint$1(focus, "next");
	const direction = $comparePointCaretNext$1(anchorCaret, focusCaret) <= 0 ? "next" : "previous";
	return $getCaretRange$1($getCaretInDirection$1(anchorCaret, direction), $getCaretInDirection$1(focusCaret, direction));
}
/**
* Given a SiblingCaret we can always compute a caret that points to the
* origin of that caret in the same direction. The adjacent caret of the
* returned caret will be equivalent to the given caret.
*
* @example
* ```ts
* siblingCaret.is($rewindSiblingCaret(siblingCaret).getAdjacentCaret())
* ```
*
* @param caret The caret to "rewind"
* @returns A new caret (ChildCaret or SiblingCaret) with the same direction
*/
function $rewindSiblingCaret$1(caret) {
	const { direction, origin } = caret;
	const rewindOrigin = $getSiblingCaret$1(origin, flipDirection$1(direction)).getNodeAtCaret();
	return rewindOrigin ? $getSiblingCaret$1(rewindOrigin, direction) : $getChildCaret$1(origin.getParentOrThrow(), direction);
}
function $getAnchorCandidates(anchor, rootMode = "root") {
	const carets = [anchor];
	for (let parent = $isChildCaret$1(anchor) ? anchor.getParentCaret(rootMode) : anchor.getSiblingCaret(); parent !== null; parent = parent.getParentCaret(rootMode)) carets.push($rewindSiblingCaret$1(parent));
	return carets;
}
function $isCaretAttached(caret) {
	return !!caret && caret.origin.isAttached();
}
/**
* Remove all text and nodes in the given range. If the range spans multiple
* blocks then the remaining contents of the later block will be merged with
* the earlier block.
*
* @param initialRange The range to remove text and nodes from
* @param sliceMode If 'preserveEmptyTextPointCaret' it will leave an empty TextPointCaret at the anchor for insert if one exists, otherwise empty slices will be removed
* @returns The new collapsed range (biased towards the earlier node)
*/
function $removeTextFromCaretRange$1(initialRange, sliceMode = "removeEmptySlices") {
	if (initialRange.isCollapsed()) return initialRange;
	const rootMode = "root";
	const nextDirection = "next";
	let sliceState = sliceMode;
	const range = $getCaretRangeInDirection$1(initialRange, nextDirection);
	const anchorCandidates = $getAnchorCandidates(range.anchor, rootMode);
	const focusCandidates = $getAnchorCandidates(range.focus.getFlipped(), rootMode);
	const seenStart = /* @__PURE__ */ new Set();
	const removedNodes = [];
	for (const caret of range.iterNodeCarets(rootMode)) if ($isChildCaret$1(caret)) seenStart.add(caret.origin.getKey());
	else if ($isSiblingCaret$1(caret)) {
		const { origin } = caret;
		if (!$isElementNode$1(origin) || seenStart.has(origin.getKey())) removedNodes.push(origin);
	}
	for (const node of removedNodes) node.remove();
	for (const slice of range.getTextSlices()) {
		if (!slice) continue;
		const { origin } = slice.caret;
		const contentSize = origin.getTextContentSize();
		const caretBefore = $rewindSiblingCaret$1($getSiblingCaret$1(origin, nextDirection));
		const mode = origin.getMode();
		if (Math.abs(slice.distance) === contentSize && sliceState === "removeEmptySlices" || mode === "token" && slice.distance !== 0) caretBefore.remove();
		else if (slice.distance !== 0) {
			sliceState = "removeEmptySlices";
			let nextCaret = slice.removeTextSlice();
			const sliceOrigin = slice.caret.origin;
			if (mode === "segmented") {
				const src = nextCaret.origin;
				const plainTextNode = $createTextNode$1(src.getTextContent()).setStyle(src.getStyle()).setFormat(src.getFormat());
				caretBefore.replaceOrInsert(plainTextNode);
				nextCaret = $getTextPointCaret$1(plainTextNode, nextDirection, nextCaret.offset);
			}
			if (sliceOrigin.is(anchorCandidates[0].origin)) anchorCandidates[0] = nextCaret;
			if (sliceOrigin.is(focusCandidates[0].origin)) focusCandidates[0] = nextCaret.getFlipped();
		}
	}
	let anchorCandidate;
	let focusCandidate;
	for (const candidate of anchorCandidates) if ($isCaretAttached(candidate)) {
		anchorCandidate = $normalizeCaret$1(candidate);
		break;
	}
	for (const candidate of focusCandidates) if ($isCaretAttached(candidate)) {
		focusCandidate = $normalizeCaret$1(candidate);
		break;
	}
	const mergeTargets = $getBlockMergeTargets(anchorCandidate, focusCandidate, seenStart);
	if (mergeTargets) {
		const [anchorBlock, focusBlock] = mergeTargets;
		$getChildCaret$1(anchorBlock, "previous").splice(0, focusBlock.getChildren());
		let parent = focusBlock.getParent();
		focusBlock.remove(true);
		while (parent && parent.isEmpty()) {
			const element = parent;
			parent = parent.getParent();
			element.remove(true);
		}
	}
	const bestCandidate = [
		anchorCandidate,
		focusCandidate,
		...anchorCandidates,
		...focusCandidates
	].find($isCaretAttached);
	if (bestCandidate) return $getCollapsedCaretRange$1($getCaretInDirection$1($normalizeCaret$1(bestCandidate), initialRange.direction));
	formatDevErrorMessage(`$removeTextFromCaretRange: selection was lost, could not find a new anchor given candidates with keys: ${JSON.stringify(anchorCandidates.map((n) => n.origin.__key))}`);
}
/**
* Determine if the two caret origins are in distinct blocks that
* should be merged.
*
* The returned block pair will be the closest blocks to their
* common ancestor, and must be no shadow roots between
* the blocks and their respective carets. If two distinct
* blocks matching this criteria are not found, this will return
* null.
*/
function $getBlockMergeTargets(anchor, focus, seenStart) {
	if (!anchor || !focus) return null;
	const anchorParent = anchor.getParentAtCaret();
	const focusParent = focus.getParentAtCaret();
	if (!anchorParent || !focusParent) return null;
	const anchorElements = anchorParent.getParents().reverse();
	anchorElements.push(anchorParent);
	const focusElements = focusParent.getParents().reverse();
	focusElements.push(focusParent);
	const maxLen = Math.min(anchorElements.length, focusElements.length);
	let commonAncestorCount;
	for (commonAncestorCount = 0; commonAncestorCount < maxLen && anchorElements[commonAncestorCount] === focusElements[commonAncestorCount]; commonAncestorCount++);
	const $getBlock = (arr, predicate) => {
		let block;
		for (let i = commonAncestorCount; i < arr.length; i++) {
			const ancestor = arr[i];
			if ($isRootOrShadowRoot$1(ancestor)) return;
			else if (!block && predicate(ancestor)) block = ancestor;
		}
		return block;
	};
	const anchorBlock = $getBlock(anchorElements, INTERNAL_$isBlock$1);
	const focusBlock = anchorBlock && $getBlock(focusElements, (node) => seenStart.has(node.getKey()) && INTERNAL_$isBlock$1(node));
	return anchorBlock && focusBlock ? [anchorBlock, focusBlock] : null;
}
/**
* Return the deepest ChildCaret that has initialCaret's origin
* as an ancestor, or initialCaret if the origin is not an ElementNode
* or is already the deepest ChildCaret.
*
* This is generally used when normalizing because there is
* "zero distance" between these locations.
*
* @param initialCaret
* @returns Either a deeper ChildCaret or the given initialCaret
*/
function $getDeepestChildOrSelf(initialCaret) {
	let caret = initialCaret;
	while ($isChildCaret$1(caret)) {
		const adjacent = $getAdjacentChildCaret$1(caret);
		if (!$isChildCaret$1(adjacent)) break;
		caret = adjacent;
	}
	return caret;
}
/**
* Normalize a caret to the deepest equivalent PointCaret.
* This will return a TextPointCaret with the offset set according
* to the direction if given a caret with a TextNode origin
* or a caret with an ElementNode origin with the deepest ChildCaret
* having an adjacent TextNode.
*
* If given a TextPointCaret, it will be returned, as no normalization
* is required when an offset is already present.
*
* @param initialCaret
* @returns The normalized PointCaret
*/
function $normalizeCaret$1(initialCaret) {
	const caret = $getDeepestChildOrSelf(initialCaret.getLatest());
	const { direction } = caret;
	if ($isTextNode$1(caret.origin)) return $isTextPointCaret$1(caret) ? caret : $getTextPointCaret$1(caret.origin, direction, direction);
	const adj = caret.getAdjacentCaret();
	return $isSiblingCaret$1(adj) && $isTextNode$1(adj.origin) ? $getTextPointCaret$1(adj.origin, direction, flipDirection$1(direction)) : caret;
}
/**
* Determine whether the TextPointCaret's offset can be extended further without leaving the TextNode.
* Returns false if the given caret is not a TextPointCaret or the offset can not be moved further in
* direction.
*
* @param caret A PointCaret
* @returns true if caret is a TextPointCaret with an offset that is not at the end of the text given the direction.
*/
function $isExtendableTextPointCaret$1(caret) {
	return $isTextPointCaret$1(caret) && caret.offset !== $getTextNodeOffset$1(caret.origin, caret.direction);
}
/**
* Return the caret if it's in the given direction, otherwise return
* caret.getFlipped().
*
* @param caret Any PointCaret
* @param direction The desired direction
* @returns A PointCaret in direction
*/
function $getCaretInDirection$1(caret, direction) {
	return caret.direction === direction ? caret : caret.getFlipped();
}
/**
* Return the range if it's in the given direction, otherwise
* construct a new range using a flipped focus as the anchor
* and a flipped anchor as the focus. This transformation
* preserves the section of the document that it's working
* with, but reverses the order of iteration.
*
* @param range Any CaretRange
* @param direction The desired direction
* @returns A CaretRange in direction
*/
function $getCaretRangeInDirection$1(range, direction) {
	if (range.direction === direction) return range;
	return $getCaretRange$1($getCaretInDirection$1(range.focus, direction), $getCaretInDirection$1(range.anchor, direction));
}
/**
* Get a caret pointing at the child at the given index, or the last
* caret in that node if out of bounds.
*
* @param parent An ElementNode
* @param index The index of the origin for the caret
* @returns A caret pointing towards the node at that index
*/
function $getChildCaretAtIndex$1(parent, index, direction) {
	let caret = $getChildCaret$1(parent, "next");
	for (let i = 0; i < index; i++) {
		const nextCaret = caret.getAdjacentCaret();
		if (nextCaret === null) break;
		caret = nextCaret;
	}
	return $getCaretInDirection$1(caret, direction);
}
/**
* Returns the Node sibling when this exists, otherwise the closest parent sibling. For example
* R -> P -> T1, T2
*   -> P2
* returns T2 for node T1, P2 for node T2, and null for node P2.
* @param startCaret The initial caret
* @param rootMode The root mode, 'root' (default) or 'shadowRoot'
* @returns An array (tuple) containing the found caret and the depth difference, or null, if this node doesn't exist.
*/
function $getAdjacentSiblingOrParentSiblingCaret$1(startCaret, rootMode = "root") {
	let depthDiff = 0;
	let caret = startCaret;
	let nextCaret = $getAdjacentChildCaret$1(caret);
	while (nextCaret === null) {
		depthDiff--;
		nextCaret = caret.getParentCaret(rootMode);
		if (!nextCaret) return null;
		caret = nextCaret;
		nextCaret = $getAdjacentChildCaret$1(caret);
	}
	return nextCaret && [nextCaret, depthDiff];
}
/**
* Get the adjacent nodes to initialCaret in the given direction.
*
* @example
* ```ts
* expect($getAdjacentNodes($getChildCaret(parent, 'next'))).toEqual(parent.getChildren());
* expect($getAdjacentNodes($getChildCaret(parent, 'previous'))).toEqual(parent.getChildren().reverse());
* expect($getAdjacentNodes($getSiblingCaret(node, 'next'))).toEqual(node.getNextSiblings());
* expect($getAdjacentNodes($getSiblingCaret(node, 'previous'))).toEqual(node.getPreviousSiblings().reverse());
* ```
*
* @param initialCaret The caret to start at (the origin will not be included)
* @returns An array of siblings.
*/
function $getAdjacentNodes(initialCaret) {
	const siblings = [];
	for (let caret = initialCaret.getAdjacentCaret(); caret; caret = caret.getAdjacentCaret()) siblings.push(caret.origin);
	return siblings;
}
function $splitTextPointCaret(textPointCaret) {
	const { origin, offset, direction } = textPointCaret;
	if (offset === $getTextNodeOffset$1(origin, direction)) return textPointCaret.getSiblingCaret();
	else if (offset === $getTextNodeOffset$1(origin, flipDirection$1(direction))) return $rewindSiblingCaret$1(textPointCaret.getSiblingCaret());
	const [textNode] = origin.splitText(offset);
	if (!$isTextNode$1(textNode)) formatDevErrorMessage(`$splitTextPointCaret: splitText must return at least one TextNode`);
	return $getCaretInDirection$1($getSiblingCaret$1(textNode, "next"), direction);
}
function $alwaysSplit(_node, _edge) {
	return true;
}
/**
* Split a node at a PointCaret and return a NodeCaret at that point, or null if the
* node can't be split. This is non-recursive and will only perform at most one split.
*
* @returns The NodeCaret pointing to the location of the split (or null if a split is not possible)
*/
function $splitAtPointCaretNext$1(pointCaret, { $copyElementNode = $copyNode$1, $splitTextPointCaretNext = $splitTextPointCaret, rootMode = "shadowRoot", $shouldSplit = $alwaysSplit, removeEmptyDestination = false } = {}) {
	if ($isTextPointCaret$1(pointCaret)) return $splitTextPointCaretNext(pointCaret);
	const parentCaret = pointCaret.getParentCaret(rootMode);
	if (parentCaret) {
		const { origin } = parentCaret;
		if ($isChildCaret$1(pointCaret)) {
			const beforeParentCaret = $rewindSiblingCaret$1(parentCaret);
			if (removeEmptyDestination && origin.isEmpty()) {
				origin.remove();
				return beforeParentCaret;
			}
			if (!(origin.canBeEmpty() && $shouldSplit(origin, "first"))) return beforeParentCaret;
		}
		const siblings = $getAdjacentNodes(pointCaret);
		if (siblings.length > 0 || !removeEmptyDestination && origin.canBeEmpty() && $shouldSplit(origin, "last")) parentCaret.insert($copyElementNode(origin).splice(0, 0, siblings));
	}
	return parentCaret;
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
/**
* Define a LexicalExtension from the given object literal. TypeScript will
* infer Config and Name in most cases, but you may want to use
* {@link safeCast} for config if there are default fields or varying types.
*
* @param extension - The LexicalExtension
* @returns The unmodified extension argument (this is only an inference helper)
*
* @example
* Basic example
* ```ts
* export const MyExtension = defineExtension({
*   // Extension names must be unique in an editor
*   name: "my",
*   nodes: [MyNode],
* });
* ```
*
* @example
* Extension with optional configuration
* ```ts
* export interface ConfigurableConfig {
*   optional?: string;
*   required: number;
* }
* export const ConfigurableExtension = defineExtension({
*   name: "configurable",
*   // The Extension's config must satisfy the full config type,
*   // but using the Extension as a dependency never requires
*   // configuration and any partial of the config can be specified
*   config: safeCast<ConfigurableConfig>({ required: 1 }),
* });
* ```
*
* @__NO_SIDE_EFFECTS__
*/
function defineExtension$1(extension) {
	return extension;
}
/**
* Override a partial of the configuration of an Extension, to be used
* in the dependencies array of another extension, or as
* an argument to {@link buildEditorFromExtensions}.
*
* Before building the editor, configurations will be merged using
* `extension.mergeConfig(extension, config)` or {@link shallowMergeConfig} if
* this is not directly implemented by the Extension.
*
* @param args - An extension followed by one or more config partials for that extension
* @returns `[extension, config, ...configs]`
*
* @example
* ```ts
* export const ReactDecoratorExtension = defineExtension({
*   name: "react-decorator",
*   dependencies: [
*     configExtension(ReactExtension, {
*       decorators: [<ReactDecorator />]
*     }),
*   ],
* });
* ```
*
* @__NO_SIDE_EFFECTS__
*/
function configExtension$1(...args) {
	return args;
}
/**
* Used to declare a peer dependency of an extension in a type-safe way,
* requires the type parameter. The most common use case for peer dependencies
* is to avoid a direct import dependency, so you would want to use a
* type import or the import type (shown in below examples).
*
* @param name - The extension's name
* @param config - An optional config override
* @returns NormalizedPeerDependency
*
* @example
* ```ts
* import type {FooExtension} from "foo";
*
* export const PeerExtension = defineExtension({
*   name: 'PeerExtension',
*   peerDependencies: [
*     declarePeerDependency<FooExtension>("foo"),
*     declarePeerDependency<typeof import("bar").BarExtension>("bar", {config: "bar"}),
*   ],
* });
* ```
*
* @__NO_SIDE_EFFECTS__
*/
function declarePeerDependency$1(name, config) {
	return [name, config];
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
/**
* Explicitly and safely cast a value to a specific type when inference or
* satisfies isn't going to work as expected (often useful for the config
* property with {@link defineExtension})
*
* @__NO_SIDE_EFFECTS__
*/
function safeCast$1(value) {
	return value;
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
/**
* The default merge strategy for extension configuration is a shallow merge.
*
* @param config - A full config
* @param overrides - A partial config of overrides
* @returns config if there are no overrides, otherwise `{...config, ...overrides}`
*/
function shallowMergeConfig$1(config, overrides) {
	if (!overrides || config === overrides) return config;
	for (const k in overrides) if (config[k] !== overrides[k]) return {
		...config,
		...overrides
	};
	return config;
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
/** @internal */
function normalizeClassNames$1(...classNames) {
	const rval = [];
	for (const className of classNames) if (className && typeof className === "string") for (const [s] of className.matchAll(/\S+/g)) rval.push(s);
	return rval;
}
/**
* Takes an HTML element and adds the classNames passed within an array,
* ignoring any non-string types. A space can be used to add multiple classes
* eg. addClassNamesToElement(element, ['element-inner active', true, null])
* will add both 'element-inner' and 'active' as classes to that element.
* @param element - The element in which the classes are added
* @param classNames - An array defining the class names to add to the element
*/
function addClassNamesToElement$1(element, ...classNames) {
	const classesToAdd = normalizeClassNames$1(...classNames);
	if (classesToAdd.length > 0) element.classList.add(...classesToAdd);
}
/**
* Takes an HTML element and removes the classNames passed within an array,
* ignoring any non-string types. A space can be used to remove multiple classes
* eg. removeClassNamesFromElement(element, ['active small', true, null])
* will remove both the 'active' and 'small' classes from that element.
* @param element - The element in which the classes are removed
* @param classNames - An array defining the class names to remove from the element
*/
function removeClassNamesFromElement$1(element, ...classNames) {
	const classesToRemove = normalizeClassNames$1(...classNames);
	if (classesToRemove.length > 0) element.classList.remove(...classesToRemove);
}
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
/**
* Returns a function that will execute all functions passed when called. It is generally used
* to register multiple lexical listeners and then tear them down with a single function call, such
* as React's useEffect hook.
* @example
* ```ts
* useEffect(() => {
*   return mergeRegister(
*     editor.registerCommand(...registerCommand1 logic),
*     editor.registerCommand(...registerCommand2 logic),
*     editor.registerCommand(...registerCommand3 logic)
*   )
* }, [editor])
* ```
* In this case, useEffect is returning the function returned by mergeRegister as a cleanup
* function to be executed after either the useEffect runs again (due to one of its dependencies
* updating) or the component it resides in unmounts.
* Note the functions don't necessarily need to be in an array as all arguments
* are considered to be the func argument and spread from there.
* The order of cleanup is the reverse of the argument order. Generally it is
* expected that the first "acquire" will be "released" last (LIFO order),
* because a later step may have some dependency on an earlier one.
* @param func - An array of cleanup functions meant to be executed by the returned function.
* @returns the function which executes all the passed cleanup functions.
*/
function mergeRegister$1(...func) {
	return () => {
		for (let i = func.length - 1; i >= 0; i--) func[i]();
		func.length = 0;
	};
}
//#endregion
//#region node_modules/lexical/Lexical.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
const mod = Lexical_dev_exports;
const $addUpdateTag = mod.$addUpdateTag;
const $applyNodeReplacement = mod.$applyNodeReplacement;
const $caretFromPoint = mod.$caretFromPoint;
const $caretRangeFromSelection = mod.$caretRangeFromSelection;
const $cloneWithProperties = mod.$cloneWithProperties;
const $cloneWithPropertiesEphemeral = mod.$cloneWithPropertiesEphemeral;
const $comparePointCaretNext = mod.$comparePointCaretNext;
const $copyNode = mod.$copyNode;
const $create = mod.$create;
const $createChildrenArray = mod.$createChildrenArray;
const $createLineBreakNode = mod.$createLineBreakNode;
const $createNodeSelection = mod.$createNodeSelection;
const $createParagraphNode = mod.$createParagraphNode;
const $createPoint = mod.$createPoint;
const $createRangeSelection = mod.$createRangeSelection;
const $createRangeSelectionFromDom = mod.$createRangeSelectionFromDom;
const $createTabNode = mod.$createTabNode;
const $createTextNode = mod.$createTextNode;
const $extendCaretToRange = mod.$extendCaretToRange;
const $findMatchingParent = mod.$findMatchingParent;
const $getAdjacentChildCaret = mod.$getAdjacentChildCaret;
const $getAdjacentNode = mod.$getAdjacentNode;
const $getAdjacentSiblingOrParentSiblingCaret = mod.$getAdjacentSiblingOrParentSiblingCaret;
const $getCaretInDirection = mod.$getCaretInDirection;
const $getCaretRange = mod.$getCaretRange;
const $getCaretRangeInDirection = mod.$getCaretRangeInDirection;
const $getCharacterOffsets = mod.$getCharacterOffsets;
const $getChildCaret = mod.$getChildCaret;
const $getChildCaretAtIndex = mod.$getChildCaretAtIndex;
const $getChildCaretOrSelf = mod.$getChildCaretOrSelf;
const $getCollapsedCaretRange = mod.$getCollapsedCaretRange;
const $getCommonAncestor = mod.$getCommonAncestor;
const $getCommonAncestorResultBranchOrder = mod.$getCommonAncestorResultBranchOrder;
const $getEditor = mod.$getEditor;
const $getEditorDOMRenderConfig = mod.$getEditorDOMRenderConfig;
const $getNearestNodeFromDOMNode = mod.$getNearestNodeFromDOMNode;
const $getNearestRootOrShadowRoot = mod.$getNearestRootOrShadowRoot;
const $getNodeByKey = mod.$getNodeByKey;
const $getNodeByKeyOrThrow = mod.$getNodeByKeyOrThrow;
const $getNodeFromDOMNode = mod.$getNodeFromDOMNode;
const $getPreviousSelection = mod.$getPreviousSelection;
const $getRoot = mod.$getRoot;
const $getSelection = mod.$getSelection;
const $getSiblingCaret = mod.$getSiblingCaret;
const $getState = mod.$getState;
const $getStateChange = mod.$getStateChange;
const $getTextContent = mod.$getTextContent;
const $getTextNodeOffset = mod.$getTextNodeOffset;
const $getTextPointCaret = mod.$getTextPointCaret;
const $getTextPointCaretSlice = mod.$getTextPointCaretSlice;
const $getWritableNodeState = mod.$getWritableNodeState;
const $hasAncestor = mod.$hasAncestor;
const $hasUpdateTag = mod.$hasUpdateTag;
const $insertNodes = mod.$insertNodes;
const $isBlockElementNode = mod.$isBlockElementNode;
const $isChildCaret = mod.$isChildCaret;
const $isDecoratorNode = mod.$isDecoratorNode;
const $isEditorState = mod.$isEditorState;
const $isElementNode = mod.$isElementNode;
const $isExtendableTextPointCaret = mod.$isExtendableTextPointCaret;
const $isInlineElementOrDecoratorNode = mod.$isInlineElementOrDecoratorNode;
const $isLeafNode = mod.$isLeafNode;
const $isLexicalNode = mod.$isLexicalNode;
const $isLineBreakNode = mod.$isLineBreakNode;
const $isNodeCaret = mod.$isNodeCaret;
const $isNodeSelection = mod.$isNodeSelection;
const $isParagraphNode = mod.$isParagraphNode;
const $isRangeSelection = mod.$isRangeSelection;
const $isRootNode = mod.$isRootNode;
const $isRootOrShadowRoot = mod.$isRootOrShadowRoot;
const $isSiblingCaret = mod.$isSiblingCaret;
const $isTabNode = mod.$isTabNode;
const $isTextNode = mod.$isTextNode;
const $isTextPointCaret = mod.$isTextPointCaret;
const $isTextPointCaretSlice = mod.$isTextPointCaretSlice;
const $isTokenOrSegmented = mod.$isTokenOrSegmented;
const $isTokenOrTab = mod.$isTokenOrTab;
const $nodesOfType = mod.$nodesOfType;
const $normalizeCaret = mod.$normalizeCaret;
const $normalizeSelection__EXPERIMENTAL = mod.$normalizeSelection__EXPERIMENTAL;
const $onUpdate = mod.$onUpdate;
const $parseSerializedNode = mod.$parseSerializedNode;
const $removeTextFromCaretRange = mod.$removeTextFromCaretRange;
const $rewindSiblingCaret = mod.$rewindSiblingCaret;
const $selectAll = mod.$selectAll;
const $setCompositionKey = mod.$setCompositionKey;
const $setPointFromCaret = mod.$setPointFromCaret;
const $setSelection = mod.$setSelection;
const $setSelectionFromCaretRange = mod.$setSelectionFromCaretRange;
const $setState = mod.$setState;
const $splitAtPointCaretNext = mod.$splitAtPointCaretNext;
const $splitNode = mod.$splitNode;
const $updateRangeSelectionFromCaretRange = mod.$updateRangeSelectionFromCaretRange;
const ArtificialNode__DO_NOT_USE = mod.ArtificialNode__DO_NOT_USE;
const BEFORE_INPUT_COMMAND = mod.BEFORE_INPUT_COMMAND;
const BLUR_COMMAND = mod.BLUR_COMMAND;
const CAN_REDO_COMMAND = mod.CAN_REDO_COMMAND;
const CAN_UNDO_COMMAND = mod.CAN_UNDO_COMMAND;
const CLEAR_EDITOR_COMMAND = mod.CLEAR_EDITOR_COMMAND;
const CLEAR_HISTORY_COMMAND = mod.CLEAR_HISTORY_COMMAND;
const CLICK_COMMAND = mod.CLICK_COMMAND;
const COLLABORATION_TAG = mod.COLLABORATION_TAG;
const COMMAND_PRIORITY_BEFORE_CRITICAL = mod.COMMAND_PRIORITY_BEFORE_CRITICAL;
const COMMAND_PRIORITY_BEFORE_EDITOR = mod.COMMAND_PRIORITY_BEFORE_EDITOR;
const COMMAND_PRIORITY_BEFORE_HIGH = mod.COMMAND_PRIORITY_BEFORE_HIGH;
const COMMAND_PRIORITY_BEFORE_LOW = mod.COMMAND_PRIORITY_BEFORE_LOW;
const COMMAND_PRIORITY_BEFORE_NORMAL = mod.COMMAND_PRIORITY_BEFORE_NORMAL;
const COMMAND_PRIORITY_CRITICAL = mod.COMMAND_PRIORITY_CRITICAL;
const COMMAND_PRIORITY_EDITOR = mod.COMMAND_PRIORITY_EDITOR;
const COMMAND_PRIORITY_HIGH = mod.COMMAND_PRIORITY_HIGH;
const COMMAND_PRIORITY_LOW = mod.COMMAND_PRIORITY_LOW;
const COMMAND_PRIORITY_NORMAL = mod.COMMAND_PRIORITY_NORMAL;
const COMPOSITION_END_COMMAND = mod.COMPOSITION_END_COMMAND;
const COMPOSITION_END_TAG = mod.COMPOSITION_END_TAG;
const COMPOSITION_START_COMMAND = mod.COMPOSITION_START_COMMAND;
const COMPOSITION_START_TAG = mod.COMPOSITION_START_TAG;
const CONTROLLED_TEXT_INSERTION_COMMAND = mod.CONTROLLED_TEXT_INSERTION_COMMAND;
const COPY_COMMAND = mod.COPY_COMMAND;
const CUT_COMMAND = mod.CUT_COMMAND;
const DEFAULT_EDITOR_DOM_CONFIG = mod.DEFAULT_EDITOR_DOM_CONFIG;
const DELETE_CHARACTER_COMMAND = mod.DELETE_CHARACTER_COMMAND;
const DELETE_LINE_COMMAND = mod.DELETE_LINE_COMMAND;
const DELETE_WORD_COMMAND = mod.DELETE_WORD_COMMAND;
const DRAGEND_COMMAND = mod.DRAGEND_COMMAND;
const DRAGOVER_COMMAND = mod.DRAGOVER_COMMAND;
const DRAGSTART_COMMAND = mod.DRAGSTART_COMMAND;
const DROP_COMMAND = mod.DROP_COMMAND;
const DecoratorNode = mod.DecoratorNode;
const ElementNode = mod.ElementNode;
const FOCUS_COMMAND = mod.FOCUS_COMMAND;
const FORMAT_ELEMENT_COMMAND = mod.FORMAT_ELEMENT_COMMAND;
const FORMAT_TEXT_COMMAND = mod.FORMAT_TEXT_COMMAND;
const HISTORIC_TAG = mod.HISTORIC_TAG;
const HISTORY_MERGE_TAG = mod.HISTORY_MERGE_TAG;
const HISTORY_PUSH_TAG = mod.HISTORY_PUSH_TAG;
const INDENT_CONTENT_COMMAND = mod.INDENT_CONTENT_COMMAND;
const INPUT_COMMAND = mod.INPUT_COMMAND;
const INSERT_LINE_BREAK_COMMAND = mod.INSERT_LINE_BREAK_COMMAND;
const INSERT_PARAGRAPH_COMMAND = mod.INSERT_PARAGRAPH_COMMAND;
const INSERT_TAB_COMMAND = mod.INSERT_TAB_COMMAND;
const INTERNAL_$isBlock = mod.INTERNAL_$isBlock;
const IS_ALL_FORMATTING = mod.IS_ALL_FORMATTING;
const IS_BOLD = mod.IS_BOLD;
const IS_CODE = mod.IS_CODE;
const IS_HIGHLIGHT = mod.IS_HIGHLIGHT;
const IS_ITALIC = mod.IS_ITALIC;
const IS_STRIKETHROUGH = mod.IS_STRIKETHROUGH;
const IS_SUBSCRIPT = mod.IS_SUBSCRIPT;
const IS_SUPERSCRIPT = mod.IS_SUPERSCRIPT;
const IS_UNDERLINE = mod.IS_UNDERLINE;
const KEY_ARROW_DOWN_COMMAND = mod.KEY_ARROW_DOWN_COMMAND;
const KEY_ARROW_LEFT_COMMAND = mod.KEY_ARROW_LEFT_COMMAND;
const KEY_ARROW_RIGHT_COMMAND = mod.KEY_ARROW_RIGHT_COMMAND;
const KEY_ARROW_UP_COMMAND = mod.KEY_ARROW_UP_COMMAND;
const KEY_BACKSPACE_COMMAND = mod.KEY_BACKSPACE_COMMAND;
const KEY_DELETE_COMMAND = mod.KEY_DELETE_COMMAND;
const KEY_DOWN_COMMAND = mod.KEY_DOWN_COMMAND;
const KEY_ENTER_COMMAND = mod.KEY_ENTER_COMMAND;
const KEY_ESCAPE_COMMAND = mod.KEY_ESCAPE_COMMAND;
const KEY_MODIFIER_COMMAND = mod.KEY_MODIFIER_COMMAND;
const KEY_SPACE_COMMAND = mod.KEY_SPACE_COMMAND;
const KEY_TAB_COMMAND = mod.KEY_TAB_COMMAND;
const LineBreakNode = mod.LineBreakNode;
const MOVE_TO_END = mod.MOVE_TO_END;
const MOVE_TO_START = mod.MOVE_TO_START;
const NODE_STATE_KEY = mod.NODE_STATE_KEY;
const OUTDENT_CONTENT_COMMAND = mod.OUTDENT_CONTENT_COMMAND;
const PASTE_COMMAND = mod.PASTE_COMMAND;
const PASTE_TAG = mod.PASTE_TAG;
const ParagraphNode = mod.ParagraphNode;
const REDO_COMMAND = mod.REDO_COMMAND;
const REMOVE_TEXT_COMMAND = mod.REMOVE_TEXT_COMMAND;
const RootNode = mod.RootNode;
const SELECTION_CHANGE_COMMAND = mod.SELECTION_CHANGE_COMMAND;
const SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = mod.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND;
const SELECT_ALL_COMMAND = mod.SELECT_ALL_COMMAND;
const SKIP_COLLAB_TAG = mod.SKIP_COLLAB_TAG;
const SKIP_DOM_SELECTION_TAG = mod.SKIP_DOM_SELECTION_TAG;
const SKIP_SCROLL_INTO_VIEW_TAG = mod.SKIP_SCROLL_INTO_VIEW_TAG;
const SKIP_SELECTION_FOCUS_TAG = mod.SKIP_SELECTION_FOCUS_TAG;
const TEXT_TYPE_TO_FORMAT = mod.TEXT_TYPE_TO_FORMAT;
const TabNode = mod.TabNode;
const TextNode = mod.TextNode;
const UNDO_COMMAND = mod.UNDO_COMMAND;
const addClassNamesToElement = mod.addClassNamesToElement;
const buildImportMap = mod.buildImportMap;
const configExtension = mod.configExtension;
const createCommand = mod.createCommand;
const createEditor = mod.createEditor;
const createSharedNodeState = mod.createSharedNodeState;
const createState = mod.createState;
const declarePeerDependency = mod.declarePeerDependency;
const defineExtension = mod.defineExtension;
const flipDirection = mod.flipDirection;
const getDOMOwnerDocument = mod.getDOMOwnerDocument;
const getDOMSelection = mod.getDOMSelection;
const getDOMSelectionFromTarget = mod.getDOMSelectionFromTarget;
const getDOMTextNode = mod.getDOMTextNode;
const getEditorPropertyFromDOMNode = mod.getEditorPropertyFromDOMNode;
const getNearestEditorFromDOMNode = mod.getNearestEditorFromDOMNode;
const getRegisteredNode = mod.getRegisteredNode;
const getRegisteredNodeOrThrow = mod.getRegisteredNodeOrThrow;
const getStaticNodeConfig = mod.getStaticNodeConfig;
const getStyleObjectFromCSS = mod.getStyleObjectFromCSS;
const getTextDirection = mod.getTextDirection;
const getTransformSetFromKlass = mod.getTransformSetFromKlass;
const isBlockDomNode = mod.isBlockDomNode;
const isCurrentlyReadOnlyMode = mod.isCurrentlyReadOnlyMode;
const isDOMDocumentNode = mod.isDOMDocumentNode;
const isDOMNode = mod.isDOMNode;
const isDOMTextNode = mod.isDOMTextNode;
const isDOMUnmanaged = mod.isDOMUnmanaged;
const isDocumentFragment = mod.isDocumentFragment;
const isExactShortcutMatch = mod.isExactShortcutMatch;
const isHTMLAnchorElement = mod.isHTMLAnchorElement;
const isHTMLElement = mod.isHTMLElement;
const isInlineDomNode = mod.isInlineDomNode;
const isLexicalEditor = mod.isLexicalEditor;
const isModifierMatch = mod.isModifierMatch;
const isSelectionCapturedInDecoratorInput = mod.isSelectionCapturedInDecoratorInput;
const isSelectionWithinEditor = mod.isSelectionWithinEditor;
const makeStepwiseIterator = mod.makeStepwiseIterator;
const mergeRegister = mod.mergeRegister;
const normalizeClassNames = mod.normalizeClassNames;
const removeClassNamesFromElement = mod.removeClassNamesFromElement;
const removeFromParent = mod.removeFromParent;
const resetRandomKey = mod.resetRandomKey;
const safeCast = mod.safeCast;
const setDOMStyleFromCSS = mod.setDOMStyleFromCSS;
const setDOMStyleObject = mod.setDOMStyleObject;
const setDOMUnmanaged = mod.setDOMUnmanaged;
const setNodeIndentFromDOM = mod.setNodeIndentFromDOM;
const shallowMergeConfig = mod.shallowMergeConfig;
const toggleTextFormatType = mod.toggleTextFormatType;
//#endregion
export { $addUpdateTag, $applyNodeReplacement, $caretFromPoint, $caretRangeFromSelection, $cloneWithProperties, $cloneWithPropertiesEphemeral, $comparePointCaretNext, $copyNode, $create, $createChildrenArray, $createLineBreakNode, $createNodeSelection, $createParagraphNode, $createPoint, $createRangeSelection, $createRangeSelectionFromDom, $createTabNode, $createTextNode, $extendCaretToRange, $findMatchingParent, $getAdjacentChildCaret, $getAdjacentNode, $getAdjacentSiblingOrParentSiblingCaret, $getCaretInDirection, $getCaretRange, $getCaretRangeInDirection, $getCharacterOffsets, $getChildCaret, $getChildCaretAtIndex, $getChildCaretOrSelf, $getCollapsedCaretRange, $getCommonAncestor, $getCommonAncestorResultBranchOrder, $getEditor, $getEditorDOMRenderConfig, $getNearestNodeFromDOMNode, $getNearestRootOrShadowRoot, $getNodeByKey, $getNodeByKeyOrThrow, $getNodeFromDOMNode, $getPreviousSelection, $getRoot, $getSelection, $getSiblingCaret, $getState, $getStateChange, $getTextContent, $getTextNodeOffset, $getTextPointCaret, $getTextPointCaretSlice, $getWritableNodeState, $hasAncestor, $hasUpdateTag, $insertNodes, $isBlockElementNode, $isChildCaret, $isDecoratorNode, $isEditorState, $isElementNode, $isExtendableTextPointCaret, $isInlineElementOrDecoratorNode, $isLeafNode, $isLexicalNode, $isLineBreakNode, $isNodeCaret, $isNodeSelection, $isParagraphNode, $isRangeSelection, $isRootNode, $isRootOrShadowRoot, $isSiblingCaret, $isTabNode, $isTextNode, $isTextPointCaret, $isTextPointCaretSlice, $isTokenOrSegmented, $isTokenOrTab, $nodesOfType, $normalizeCaret, $normalizeSelection__EXPERIMENTAL, $onUpdate, $parseSerializedNode, $removeTextFromCaretRange, $rewindSiblingCaret, $selectAll, $setCompositionKey, $setPointFromCaret, $setSelection, $setSelectionFromCaretRange, $setState, $splitAtPointCaretNext, $splitNode, $updateRangeSelectionFromCaretRange, ArtificialNode__DO_NOT_USE, BEFORE_INPUT_COMMAND, BLUR_COMMAND, CAN_REDO_COMMAND, CAN_UNDO_COMMAND, CLEAR_EDITOR_COMMAND, CLEAR_HISTORY_COMMAND, CLICK_COMMAND, COLLABORATION_TAG, COMMAND_PRIORITY_BEFORE_CRITICAL, COMMAND_PRIORITY_BEFORE_EDITOR, COMMAND_PRIORITY_BEFORE_HIGH, COMMAND_PRIORITY_BEFORE_LOW, COMMAND_PRIORITY_BEFORE_NORMAL, COMMAND_PRIORITY_CRITICAL, COMMAND_PRIORITY_EDITOR, COMMAND_PRIORITY_HIGH, COMMAND_PRIORITY_LOW, COMMAND_PRIORITY_NORMAL, COMPOSITION_END_COMMAND, COMPOSITION_END_TAG, COMPOSITION_START_COMMAND, COMPOSITION_START_TAG, CONTROLLED_TEXT_INSERTION_COMMAND, COPY_COMMAND, CUT_COMMAND, DEFAULT_EDITOR_DOM_CONFIG, DELETE_CHARACTER_COMMAND, DELETE_LINE_COMMAND, DELETE_WORD_COMMAND, DRAGEND_COMMAND, DRAGOVER_COMMAND, DRAGSTART_COMMAND, DROP_COMMAND, DecoratorNode, ElementNode, FOCUS_COMMAND, FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, HISTORIC_TAG, HISTORY_MERGE_TAG, HISTORY_PUSH_TAG, INDENT_CONTENT_COMMAND, INPUT_COMMAND, INSERT_LINE_BREAK_COMMAND, INSERT_PARAGRAPH_COMMAND, INSERT_TAB_COMMAND, INTERNAL_$isBlock, IS_ALL_FORMATTING, IS_BOLD, IS_CODE, IS_HIGHLIGHT, IS_ITALIC, IS_STRIKETHROUGH, IS_SUBSCRIPT, IS_SUPERSCRIPT, IS_UNDERLINE, KEY_ARROW_DOWN_COMMAND, KEY_ARROW_LEFT_COMMAND, KEY_ARROW_RIGHT_COMMAND, KEY_ARROW_UP_COMMAND, KEY_BACKSPACE_COMMAND, KEY_DELETE_COMMAND, KEY_DOWN_COMMAND, KEY_ENTER_COMMAND, KEY_ESCAPE_COMMAND, KEY_MODIFIER_COMMAND, KEY_SPACE_COMMAND, KEY_TAB_COMMAND, LineBreakNode, MOVE_TO_END, MOVE_TO_START, NODE_STATE_KEY, OUTDENT_CONTENT_COMMAND, PASTE_COMMAND, PASTE_TAG, ParagraphNode, REDO_COMMAND, REMOVE_TEXT_COMMAND, RootNode, SELECTION_CHANGE_COMMAND, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, SELECT_ALL_COMMAND, SKIP_COLLAB_TAG, SKIP_DOM_SELECTION_TAG, SKIP_SCROLL_INTO_VIEW_TAG, SKIP_SELECTION_FOCUS_TAG, TEXT_TYPE_TO_FORMAT, TabNode, TextNode, UNDO_COMMAND, addClassNamesToElement, buildImportMap, configExtension, createCommand, createEditor, createSharedNodeState, createState, declarePeerDependency, defineExtension, flipDirection, getDOMOwnerDocument, getDOMSelection, getDOMSelectionFromTarget, getDOMTextNode, getEditorPropertyFromDOMNode, getNearestEditorFromDOMNode, getRegisteredNode, getRegisteredNodeOrThrow, getStaticNodeConfig, getStyleObjectFromCSS, getTextDirection, getTransformSetFromKlass, isBlockDomNode, isCurrentlyReadOnlyMode, isDOMDocumentNode, isDOMNode, isDOMTextNode, isDOMUnmanaged, isDocumentFragment, isExactShortcutMatch, isHTMLAnchorElement, isHTMLElement, isInlineDomNode, isLexicalEditor, isModifierMatch, isSelectionCapturedInDecoratorInput, isSelectionWithinEditor, makeStepwiseIterator, mergeRegister, normalizeClassNames, removeClassNamesFromElement, removeFromParent, resetRandomKey, safeCast, setDOMStyleFromCSS, setDOMStyleObject, setDOMUnmanaged, setNodeIndentFromDOM, shallowMergeConfig, toggleTextFormatType };

//# sourceMappingURL=lexical.js.map