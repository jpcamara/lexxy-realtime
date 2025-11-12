//#region rolldown:runtime
var __defProp = Object.defineProperty;
var __export = (all$1) => {
	let target = {};
	for (var name in all$1) __defProp(target, name, {
		get: all$1[name],
		enumerable: true
	});
	return target;
};

//#endregion
//#region node_modules/lexical/Lexical.dev.mjs
var Lexical_dev_exports = /* @__PURE__ */ __export({
	$addUpdateTag: () => $addUpdateTag$1,
	$applyNodeReplacement: () => $applyNodeReplacement$1,
	$caretFromPoint: () => $caretFromPoint$1,
	$caretRangeFromSelection: () => $caretRangeFromSelection$1,
	$cloneWithProperties: () => $cloneWithProperties$2,
	$cloneWithPropertiesEphemeral: () => $cloneWithPropertiesEphemeral$1,
	$comparePointCaretNext: () => $comparePointCaretNext$1,
	$copyNode: () => $copyNode$1,
	$create: () => $create$1,
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
	$selectAll: () => $selectAll$2,
	$setCompositionKey: () => $setCompositionKey$1,
	$setPointFromCaret: () => $setPointFromCaret$1,
	$setSelection: () => $setSelection$1,
	$setSelectionFromCaretRange: () => $setSelectionFromCaretRange$1,
	$setState: () => $setState$1,
	$splitAtPointCaretNext: () => $splitAtPointCaretNext$1,
	$splitNode: () => $splitNode$1,
	$updateRangeSelectionFromCaretRange: () => $updateRangeSelectionFromCaretRange$1,
	ArtificialNode__DO_NOT_USE: () => ArtificialNode__DO_NOT_USE$1,
	BLUR_COMMAND: () => BLUR_COMMAND$1,
	CAN_REDO_COMMAND: () => CAN_REDO_COMMAND$1,
	CAN_UNDO_COMMAND: () => CAN_UNDO_COMMAND$1,
	CLEAR_EDITOR_COMMAND: () => CLEAR_EDITOR_COMMAND$1,
	CLEAR_HISTORY_COMMAND: () => CLEAR_HISTORY_COMMAND$1,
	CLICK_COMMAND: () => CLICK_COMMAND$1,
	COLLABORATION_TAG: () => COLLABORATION_TAG$1,
	COMMAND_PRIORITY_CRITICAL: () => COMMAND_PRIORITY_CRITICAL$1,
	COMMAND_PRIORITY_EDITOR: () => COMMAND_PRIORITY_EDITOR$1,
	COMMAND_PRIORITY_HIGH: () => COMMAND_PRIORITY_HIGH$1,
	COMMAND_PRIORITY_LOW: () => COMMAND_PRIORITY_LOW$1,
	COMMAND_PRIORITY_NORMAL: () => COMMAND_PRIORITY_NORMAL$1,
	CONTROLLED_TEXT_INSERTION_COMMAND: () => CONTROLLED_TEXT_INSERTION_COMMAND$1,
	COPY_COMMAND: () => COPY_COMMAND$1,
	CUT_COMMAND: () => CUT_COMMAND$1,
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
	INSERT_LINE_BREAK_COMMAND: () => INSERT_LINE_BREAK_COMMAND$1,
	INSERT_PARAGRAPH_COMMAND: () => INSERT_PARAGRAPH_COMMAND$1,
	INSERT_TAB_COMMAND: () => INSERT_TAB_COMMAND$1,
	INTERNAL_$isBlock: () => INTERNAL_$isBlock$1,
	IS_ALL_FORMATTING: () => IS_ALL_FORMATTING$1,
	IS_BOLD: () => IS_BOLD$1,
	IS_CODE: () => IS_CODE$1,
	IS_HIGHLIGHT: () => IS_HIGHLIGHT$1,
	IS_ITALIC: () => IS_ITALIC$1,
	IS_STRIKETHROUGH: () => IS_STRIKETHROUGH$1,
	IS_SUBSCRIPT: () => IS_SUBSCRIPT$1,
	IS_SUPERSCRIPT: () => IS_SUPERSCRIPT$1,
	IS_UNDERLINE: () => IS_UNDERLINE$1,
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
	NODE_STATE_KEY: () => NODE_STATE_KEY$1,
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
	getDOMTextNode: () => getDOMTextNode$2,
	getEditorPropertyFromDOMNode: () => getEditorPropertyFromDOMNode$1,
	getNearestEditorFromDOMNode: () => getNearestEditorFromDOMNode$1,
	getRegisteredNode: () => getRegisteredNode$1,
	getRegisteredNodeOrThrow: () => getRegisteredNodeOrThrow$1,
	getStaticNodeConfig: () => getStaticNodeConfig$1,
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
	removeFromParent: () => removeFromParent$1,
	resetRandomKey: () => resetRandomKey$1,
	safeCast: () => safeCast$1,
	setDOMUnmanaged: () => setDOMUnmanaged$1,
	setNodeIndentFromDOM: () => setNodeIndentFromDOM$1,
	shallowMergeConfig: () => shallowMergeConfig$1
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
function formatDevErrorMessage$3(message) {
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
const IS_SAFARI = CAN_USE_DOM && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
const IS_IOS = CAN_USE_DOM && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const IS_ANDROID = CAN_USE_DOM && /Android/.test(navigator.userAgent);
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
function normalizeClassNames(...classNames) {
	const rval = [];
	for (const className of classNames) if (className && typeof className === "string") for (const [s] of className.matchAll(/\S+/g)) rval.push(s);
	return rval;
}
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
const IS_BOLD$1 = 1;
const IS_ITALIC$1 = 2;
const IS_STRIKETHROUGH$1 = 4;
const IS_UNDERLINE$1 = 8;
const IS_CODE$1 = 16;
const IS_SUBSCRIPT$1 = 32;
const IS_SUPERSCRIPT$1 = 64;
const IS_HIGHLIGHT$1 = 128;
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
const RTL = "֑-߿יִ-﷽ﹰ-ﻼ";
const RTL_REGEX = /* @__PURE__ */ new RegExp("^[^A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]");
const LTR_REGEX = /* @__PURE__ */ new RegExp("^[^" + RTL + "]*[A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿]");
const TEXT_TYPE_TO_FORMAT$1 = {
	bold: IS_BOLD$1,
	capitalize: IS_CAPITALIZE,
	code: IS_CODE$1,
	highlight: IS_HIGHLIGHT$1,
	italic: IS_ITALIC$1,
	lowercase: IS_LOWERCASE,
	strikethrough: IS_STRIKETHROUGH$1,
	subscript: IS_SUBSCRIPT$1,
	superscript: IS_SUPERSCRIPT$1,
	underline: IS_UNDERLINE$1,
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
const NODE_STATE_KEY$1 = "$";
const PROTOTYPE_CONFIG_METHOD = "$config";
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
	constructor(key, stateValueConfig) {
		this.key = key;
		this.parse = stateValueConfig.parse.bind(stateValueConfig);
		this.unparse = (stateValueConfig.unparse || coerceToJSON).bind(stateValueConfig);
		this.isEqual = (stateValueConfig.isEqual || Object.is).bind(stateValueConfig);
		this.defaultValue = this.parse(void 0);
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
		if (collision !== void 0 && collision !== stateConfig) formatDevErrorMessage$3(`$setState: State key collision ${JSON.stringify(stateConfig.key)} detected in ${node.constructor.name} node with type ${node.getType()} and key ${node.getKey()}. Only one StateConfig with a given key should be used on a node.`);
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
	constructor(node, sharedNodeState, unknownState = void 0, knownState = /* @__PURE__ */ new Map(), size$1 = void 0) {
		this.node = node;
		this.sharedNodeState = sharedNodeState;
		this.unknownState = unknownState;
		this.knownState = knownState;
		const { sharedConfigMap } = this.sharedNodeState;
		const computedSize = size$1 !== void 0 ? size$1 : computeSize(sharedConfigMap, unknownState, knownState);
		if (!(size$1 === void 0 || computedSize === size$1)) formatDevErrorMessage$3(`NodeState: size != computedSize (${String(size$1)} != ${String(computedSize)})`);
		for (const stateConfig of knownState.keys()) if (!sharedConfigMap.has(stateConfig.key)) formatDevErrorMessage$3(`NodeState: sharedConfigMap missing knownState key ${stateConfig.key}`);
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
		if (undefinedIfEmpty(state)) flatState[NODE_STATE_KEY$1] = state;
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
	const unknownState = serialized[NODE_STATE_KEY$1];
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
	if (a && b && a.size !== b.size) return false;
	const keys$1 = /* @__PURE__ */ new Set();
	return !(a && hasUnequalMapEntry(keys$1, a, b) || b && hasUnequalMapEntry(keys$1, b, a) || a && hasUnequalRecordEntry(keys$1, a, b) || b && hasUnequalRecordEntry(keys$1, b, a));
}
/**
* Compute the number of distinct keys that will be in a NodeState
*/
function computeSize(sharedConfigMap, unknownState, knownState) {
	let size$1 = knownState.size;
	if (unknownState) for (const k in unknownState) {
		const sharedConfig = sharedConfigMap.get(k);
		if (!sharedConfig || !knownState.has(sharedConfig)) size$1++;
	}
	return size$1;
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
function hasUnequalMapEntry(keys$1, sourceState, otherState) {
	for (const [stateConfig, value] of sourceState.knownState) {
		if (keys$1.has(stateConfig.key)) continue;
		keys$1.add(stateConfig.key);
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
function hasUnequalRecordEntry(keys$1, sourceState, otherState) {
	const { unknownState } = sourceState;
	const otherUnknownState = otherState ? otherState.unknownState : void 0;
	if (unknownState) for (const [key, value] of Object.entries(unknownState)) {
		if (keys$1.has(key)) continue;
		keys$1.add(key);
		if (value !== (otherUnknownState ? otherUnknownState[key] : void 0)) return true;
	}
	return false;
}
/**
* @internal
*
* Clones the NodeState for a given node. Handles aliasing if the state references the from node.
*/
function $cloneNodeState(from$1, to) {
	const state = from$1.__state;
	return state && state.node === from$1 ? state.getWritable(to) : state;
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
let subTreeTextStyle = "";
let editorTextContent = "";
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
function destroyNode(key, parentDOM) {
	const node = activePrevNodeMap.get(key);
	if (parentDOM !== null) {
		const dom = getPrevElementByKeyOrThrow(key);
		if (dom.parentNode === parentDOM) parentDOM.removeChild(dom);
	}
	if (!activeNextNodeMap.has(key)) activeEditor$1._keyToDOMMap.delete(key);
	if ($isElementNode$1(node)) {
		const children = createChildrenArray$2(node, activePrevNodeMap);
		destroyChildren(children, 0, children.length - 1, null);
	}
	if (node !== void 0) setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, node, "destroyed");
}
function destroyChildren(children, _startIndex, endIndex, dom) {
	let startIndex = _startIndex;
	for (; startIndex <= endIndex; ++startIndex) {
		const child = children[startIndex];
		if (child !== void 0) destroyNode(child, dom);
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
	const indentationBaseValue = getComputedStyle(dom).getPropertyValue("--lexical-indent-base-value") || DEFAULT_INDENT_VALUE;
	dom.style.setProperty("padding-inline-start", indent === 0 ? "" : `calc(${indent} * ${indentationBaseValue})`);
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
	if (node === void 0) formatDevErrorMessage$3(`createNode: node does not exist in nodeMap`);
	const dom = node.createDOM(activeEditorConfig, activeEditor$1);
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
			$createChildren(createChildrenArray$2(node, activeNextNodeMap), node, 0, endIndex, node.getDOMSlot(dom));
		}
		const format = node.__format;
		if (format !== 0) setElementFormat(dom, format);
		if (!node.isInline()) reconcileElementTerminatingLineBreak(null, node, dom);
		if ($textContentRequiresDoubleLinebreakAtEnd(node)) {
			subTreeTextContent += DOUBLE_LINE_BREAK;
			editorTextContent += DOUBLE_LINE_BREAK;
		}
	} else {
		const text = node.getTextContent();
		if ($isDecoratorNode$1(node)) {
			const decorator = node.decorate(activeEditor$1, activeEditorConfig);
			if (decorator !== null) reconcileDecorator(key, decorator);
			dom.contentEditable = "false";
		}
		subTreeTextContent += text;
		editorTextContent += text;
	}
	if (slot !== null) slot.insertChild(dom);
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
			if (subTreeTextFormat === null) subTreeTextFormat = node.getFormat();
			if (subTreeTextStyle === "") subTreeTextStyle = node.getStyle();
		}
	}
	if ($textContentRequiresDoubleLinebreakAtEnd(element)) subTreeTextContent += DOUBLE_LINE_BREAK;
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
function reconcileElementTerminatingLineBreak(prevElement, nextElement, dom) {
	const prevLineBreak = isLastChildLineBreakOrDecorator(prevElement, activePrevNodeMap);
	const nextLineBreak = isLastChildLineBreakOrDecorator(nextElement, activeNextNodeMap);
	if (prevLineBreak !== nextLineBreak) nextElement.getDOMSlot(dom).setManagedLineBreak(nextLineBreak);
}
function reconcileTextFormat(element) {
	if (subTreeTextFormat != null && subTreeTextFormat !== element.__textFormat && !activeEditorStateReadOnly) element.setTextFormat(subTreeTextFormat);
}
function reconcileTextStyle(element) {
	if (subTreeTextStyle !== "" && subTreeTextStyle !== element.__textStyle && !activeEditorStateReadOnly) element.setTextStyle(subTreeTextStyle);
}
function $reconcileChildrenWithDirection(prevElement, nextElement, dom) {
	subTreeTextFormat = null;
	subTreeTextStyle = "";
	$reconcileChildren(prevElement, nextElement, nextElement.getDOMSlot(dom));
	reconcileTextFormat(nextElement);
	reconcileTextStyle(nextElement);
}
function createChildrenArray$2(element, nodeMap) {
	const children = [];
	let nodeKey = element.__first;
	while (nodeKey !== null) {
		const node = nodeMap.get(nodeKey);
		if (node === void 0) formatDevErrorMessage$3(`createChildrenArray: node does not exist in nodeMap`);
		children.push(nodeKey);
		nodeKey = node.__next;
	}
	return children;
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
			destroyNode(prevFirstChildKey, null);
		}
		const nextChildNode = activeNextNodeMap.get(nextFirstChildKey);
		if ($isTextNode$1(nextChildNode)) {
			if (subTreeTextFormat === null) subTreeTextFormat = nextChildNode.getFormat();
			if (subTreeTextStyle === "") subTreeTextStyle = nextChildNode.getStyle();
		}
	} else {
		const prevChildren = createChildrenArray$2(prevElement, activePrevNodeMap);
		const nextChildren = createChildrenArray$2(nextElement, activeNextNodeMap);
		if (!(prevChildren.length === prevChildrenSize)) formatDevErrorMessage$3(`$reconcileChildren: prevChildren.length !== prevChildrenSize`);
		if (!(nextChildren.length === nextChildrenSize)) formatDevErrorMessage$3(`$reconcileChildren: nextChildren.length !== nextChildrenSize`);
		if (prevChildrenSize === 0) {
			if (nextChildrenSize !== 0) $createChildren(nextChildren, nextElement, 0, nextChildrenSize - 1, slot);
		} else if (nextChildrenSize === 0) {
			if (prevChildrenSize !== 0) {
				const canUseFastPath = slot.after == null && slot.before == null && slot.element.__lexicalLineBreak == null;
				destroyChildren(prevChildren, 0, prevChildrenSize - 1, canUseFastPath ? null : dom);
				if (canUseFastPath) dom.textContent = "";
			}
		} else $reconcileNodeChildren(nextElement, prevChildren, nextChildren, prevChildrenSize, nextChildrenSize, slot);
	}
	if ($textContentRequiresDoubleLinebreakAtEnd(nextElement)) subTreeTextContent += DOUBLE_LINE_BREAK;
	dom.__lexicalTextContent = subTreeTextContent;
	subTreeTextContent = previousSubTreeTextContent + subTreeTextContent;
}
function $reconcileNode(key, parentDOM) {
	const prevNode = activePrevNodeMap.get(key);
	let nextNode = activeNextNodeMap.get(key);
	if (prevNode === void 0 || nextNode === void 0) formatDevErrorMessage$3(`reconcileNode: prevNode or nextNode does not exist in nodeMap`);
	const isDirty = treatAllNodesAsDirty || activeDirtyLeaves.has(key) || activeDirtyElements.has(key);
	const dom = getElementByKeyOrThrow(activeEditor$1, key);
	if (prevNode === nextNode && !isDirty) {
		if ($isElementNode$1(prevNode)) {
			const previousSubTreeTextContent = dom.__lexicalTextContent;
			if (previousSubTreeTextContent !== void 0) {
				subTreeTextContent += previousSubTreeTextContent;
				editorTextContent += previousSubTreeTextContent;
			}
		} else {
			const text = prevNode.getTextContent();
			editorTextContent += text;
			subTreeTextContent += text;
		}
		return dom;
	}
	if (prevNode !== nextNode && isDirty) setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, nextNode, "updated");
	if (nextNode.updateDOM(prevNode, dom, activeEditorConfig)) {
		const replacementDOM = $createNode(key, null);
		if (parentDOM === null) formatDevErrorMessage$3(`reconcileNode: parentDOM is null`);
		parentDOM.replaceChild(replacementDOM, dom);
		destroyNode(key, null);
		return replacementDOM;
	}
	if ($isElementNode$1(prevNode) && $isElementNode$1(nextNode)) {
		const nextIndent = nextNode.__indent;
		if (treatAllNodesAsDirty || nextIndent !== prevNode.__indent) setElementIndent(dom, nextIndent);
		const nextFormat = nextNode.__format;
		if (treatAllNodesAsDirty || nextFormat !== prevNode.__format) setElementFormat(dom, nextFormat);
		if (isDirty) {
			$reconcileChildrenWithDirection(prevNode, nextNode, dom);
			if (!$isRootNode$1(nextNode) && !nextNode.isInline()) reconcileElementTerminatingLineBreak(prevNode, nextNode, dom);
		}
		if ($textContentRequiresDoubleLinebreakAtEnd(nextNode)) {
			subTreeTextContent += DOUBLE_LINE_BREAK;
			editorTextContent += DOUBLE_LINE_BREAK;
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
		editorTextContent += text;
	}
	if (!activeEditorStateReadOnly && $isRootNode$1(nextNode) && nextNode.__cachedText !== editorTextContent) {
		const nextRootNode = nextNode.getWritable();
		nextRootNode.__cachedText = editorTextContent;
		nextNode = nextRootNode;
	}
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
			if (prevChildrenSet === void 0) prevChildrenSet = new Set(prevChildren);
			if (nextChildrenSet === void 0) nextChildrenSet = new Set(nextChildren);
			const nextHasPrevKey = nextChildrenSet.has(prevKey);
			const prevHasNextKey = prevChildrenSet.has(nextKey);
			if (!nextHasPrevKey) {
				siblingDOM = getNextSibling(getPrevElementByKeyOrThrow(prevKey));
				destroyNode(prevKey, slot.element);
				prevIndex++;
			} else if (!prevHasNextKey) {
				$createNode(nextKey, slot.withBefore(siblingDOM));
				nextIndex++;
			} else {
				const childDOM = getElementByKeyOrThrow(activeEditor$1, nextKey);
				if (childDOM === siblingDOM) siblingDOM = getNextSibling($reconcileNode(nextKey, slot.element));
				else {
					slot.withBefore(siblingDOM).insertChild(childDOM);
					$reconcileNode(nextKey, slot.element);
				}
				prevIndex++;
				nextIndex++;
			}
		}
		const node = activeNextNodeMap.get(nextKey);
		if (node !== null && $isTextNode$1(node)) {
			if (subTreeTextFormat === null) subTreeTextFormat = node.getFormat();
			if (subTreeTextStyle === "") subTreeTextStyle = node.getStyle();
		}
	}
	const appendNewChildren = prevIndex > prevEndIndex;
	const removeOldChildren = nextIndex > nextEndIndex;
	if (appendNewChildren && !removeOldChildren) {
		const previousNode = nextChildren[nextEndIndex + 1];
		const insertDOM = previousNode === void 0 ? null : activeEditor$1.getElementByKey(previousNode);
		$createChildren(nextChildren, nextElement, nextIndex, nextEndIndex, slot.withBefore(insertDOM));
	} else if (removeOldChildren && !appendNewChildren) destroyChildren(prevChildren, prevIndex, prevEndIndex, slot.element);
}
function $reconcileRoot(prevEditorState, nextEditorState, editor, dirtyType, dirtyElements, dirtyLeaves) {
	subTreeTextContent = "";
	editorTextContent = "";
	treatAllNodesAsDirty = dirtyType === FULL_RECONCILE;
	activeEditor$1 = editor;
	activeEditorConfig = editor._config;
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
	return currentMutatedNodes;
}
function storeDOMWithKey(key, dom, editor) {
	const keyToDOMMap = editor._keyToDOMMap;
	setNodeKeyOnDOMNode(dom, editor, key);
	keyToDOMMap.set(key, dom);
}
function getPrevElementByKeyOrThrow(key) {
	const element = activePrevKeyToDOMMap.get(key);
	if (element === void 0) formatDevErrorMessage$3(`Reconciliation: could not find DOM element for node key ${key}`);
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
	return anchorKey !== focus.key || !$isTextNode$1(anchorNode) || (!isBeforeInput && (!CAN_USE_BEFORE_INPUT || lastBeforeInputInsertTextTimeStamp < timeStamp + 50) || anchorNode.isDirty() && textLength < 2 || doesContainSurrogatePair(text)) && anchor.offset !== focus.offset && !anchorNode.isComposing() || $isTokenOrSegmented$1(anchorNode) || anchorNode.isDirty() && textLength > 1 || (isBeforeInput || !CAN_USE_BEFORE_INPUT) && backingAnchorElement !== null && !anchorNode.isComposing() && domAnchorNode !== getDOMTextNode$2(backingAnchorElement) || domSelection !== null && domTargetRange !== null && (!domTargetRange.collapsed || domTargetRange.startContainer !== domSelection.anchorNode || domTargetRange.startOffset !== domSelection.anchorOffset) || anchorNode.getFormat() !== selection.format || anchorNode.getStyle() !== selection.style || $shouldInsertTextAfterOrBeforeTextNode(selection, anchorNode);
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
					if (!$isTextNode$1(anchorNode)) formatDevErrorMessage$3(`Point.getNode() must return TextNode when type is text`);
					$updateSelectionFormatStyleFromTextNode(selection, anchorNode);
				} else if (anchor.type === "element" && !isRootTextContentEmpty) {
					if (!$isElementNode$1(anchorNode)) formatDevErrorMessage$3(`Point.getNode() must return ElementNode when type is element`);
					const lastNode = anchor.getNode();
					if (lastNode.isEmpty()) $updateSelectionFormatStyleFromElementNode(selection, lastNode);
					else $updateSelectionFormatStyle(selection, 0, "");
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
function onBeforeInput(event, editor) {
	const inputType = event.inputType;
	const targetRange = getTargetRange(event);
	if (inputType === "deleteCompositionText" || IS_FIREFOX && isFirefoxClipboardEvents(editor)) return;
	else if (inputType === "insertCompositionText") return;
	updateEditorSync(editor, () => {
		const selection = $getSelection$1();
		if (inputType === "deleteContentBackward") {
			if (selection === null) {
				const prevSelection = $getPreviousSelection$1();
				if (!$isRangeSelection$1(prevSelection)) return;
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
						const anchorNode$1 = selection.anchor.getNode();
						anchorNode$1.markDirty();
						if (!$isTextNode$1(anchorNode$1)) formatDevErrorMessage$3(`Anchor node must be a TextNode`);
						$updateSelectionFormatStyleFromTextNode(selection, anchorNode$1);
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
				return;
			}
		}
		if (!$isRangeSelection$1(selection)) return;
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
			return;
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
			case "historyRedo":
				dispatchCommand(editor, REDO_COMMAND$1, void 0);
				break;
		}
	});
}
function onInput(event, editor) {
	event.stopPropagation();
	updateEditorSync(editor, () => {
		if (isHTMLElement$1(event.target) && $isSelectionCapturedInDecorator(event.target)) return;
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
			if (domSelection === null) return;
			const isBackward = selection.isBackward();
			const startOffset = isBackward ? selection.anchor.offset : selection.focus.offset;
			const endOffset = isBackward ? selection.focus.offset : selection.anchor.offset;
			if (!CAN_USE_BEFORE_INPUT || selection.isCollapsed() || !$isTextNode$1(anchorNode) || domSelection.anchorNode === null || anchorNode.getTextContent().slice(0, startOffset) + data + anchorNode.getTextContent().slice(startOffset + endOffset) !== getAnchorTextFromDOM(domSelection.anchorNode)) dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND$1, data);
			const textLength = data.length;
			if (IS_FIREFOX && textLength > 1 && event.inputType === "insertCompositionText" && !editor.isComposing()) selection.anchor.offset -= textLength;
			if (!IS_SAFARI && !IS_IOS && !IS_APPLE_WEBKIT && editor.isComposing()) {
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
	}, { event });
	unprocessedBeforeInputData = null;
}
function onCompositionStart(event, editor) {
	updateEditorSync(editor, () => {
		const selection = $getSelection$1();
		if ($isRangeSelection$1(selection) && !editor.isComposing()) {
			const anchor = selection.anchor;
			const node = selection.anchor.getNode();
			$setCompositionKey$1(anchor.key);
			if (event.timeStamp < lastKeyDownTimeStamp + ANDROID_COMPOSITION_LATENCY || anchor.type === "element" || !selection.isCollapsed() || node.getFormat() !== selection.format || $isTextNode$1(node) && node.getStyle() !== selection.style) dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND$1, COMPOSITION_START_CHAR);
		}
	});
}
function $onCompositionEndImpl(editor, data) {
	const compositionKey = editor._compositionKey;
	$setCompositionKey$1(null);
	if (compositionKey !== null && data != null) {
		if (data === "") {
			const node = $getNodeByKey$1(compositionKey);
			const textNode = getDOMTextNode$2(editor.getElementByKey(compositionKey));
			if (textNode !== null && textNode.nodeValue !== null && $isTextNode$1(node)) $updateTextNodeFromDOMContent(node, textNode.nodeValue, null, null, true);
			return;
		}
		if (data[data.length - 1] === "\n") {
			const selection = $getSelection$1();
			if ($isRangeSelection$1(selection)) {
				const focus = selection.focus;
				selection.anchor.set(focus.key, focus.offset, focus.type);
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
	} else updateEditorSync(editor, () => {
		$onCompositionEndImpl(editor, event.data);
	});
}
function onKeyDown(event, editor) {
	lastKeyDownTimeStamp = event.timeStamp;
	lastKeyCode = event.key;
	if (editor.isComposing()) return;
	if (dispatchCommand(editor, KEY_DOWN_COMMAND$1, event)) return;
	if (event.key == null) return;
	if (isSafariEndingComposition && isBackspace(event)) {
		updateEditorSync(editor, () => {
			$onCompositionEndImpl(editor, safariEndCompositionEventData);
		});
		isSafariEndingComposition = false;
		safariEndCompositionEventData = "";
		return;
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
	if (isModifier(event)) dispatchCommand(editor, KEY_MODIFIER_COMMAND$1, event);
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
	const doc$1 = rootElement.ownerDocument;
	rootElementToDocument.set(rootElement, doc$1);
	const documentRootElementsCount = rootElementsRegistered.get(doc$1) ?? 0;
	if (documentRootElementsCount < 1) doc$1.addEventListener("selectionchange", onDocumentSelectionChange);
	rootElementsRegistered.set(doc$1, documentRootElementsCount + 1);
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
	const doc$1 = rootElementToDocument.get(rootElement);
	if (doc$1 === void 0) {
		rootElementNotRegisteredWarning();
		return;
	}
	const documentRootElementsCount = rootElementsRegistered.get(doc$1);
	if (documentRootElementsCount === void 0) {
		rootElementNotRegisteredWarning();
		return;
	}
	const newCount = documentRootElementsCount - 1;
	if (!(newCount >= 0)) formatDevErrorMessage$3(`Root element count less than 0`);
	rootElementToDocument.delete(rootElement);
	rootElementsRegistered.set(doc$1, newCount);
	if (newCount === 0) doc$1.removeEventListener("selectionchange", onDocumentSelectionChange);
	const editor = getEditorPropertyFromDOMNode$1(rootElement);
	if (isLexicalEditor$1(editor)) {
		cleanActiveNestedEditorsMap(editor);
		rootElement.__lexicalEditor = null;
	} else if (editor) formatDevErrorMessage$3(`Attempted to remove event handlers from a node that does not belong to this build of Lexical`);
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
		if (!(ownNodeType !== void 0)) formatDevErrorMessage$3(`LexicalNode: Node ${this.name} does not implement .getType().`);
		return ownNodeType;
	}
	/**
	* Clones this node, creating a new node with a different key
	* and adding it to the EditorState (but not attaching it anywhere!). All nodes must
	* implement this method.
	*
	*/
	static clone(_data) {
		formatDevErrorMessage$3(`LexicalNode: Node ${this.name} does not implement .clone().`);
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
		formatDevErrorMessage$3(`LexicalNode: Node ${this.constructor.name} does not implement .isInline().`);
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
		if (parent === null) formatDevErrorMessage$3(`Expected node ${this.__key} to have a parent.`);
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
				if (!($isElementNode$1(node) || node === this && $isDecoratorNode$1(node))) formatDevErrorMessage$3(`Children of root nodes must be elements or decorators`);
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
		if (parent === null) formatDevErrorMessage$3(`Expected node ${this.__key} to have a top parent element.`);
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
		if (!(compare.type === "same" || compare.type === "ancestor")) formatDevErrorMessage$3(`LexicalNode.isBefore: exhaustiveness check`);
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
				if (ancestor === null) formatDevErrorMessage$3(`getNodesBetween: ancestor is null`);
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
		if (latest === null) formatDevErrorMessage$3(`Lexical node does not exist in active editor state. Avoid using the same node references between nested closures from editorState.read/editor.update.`);
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
		const mutableNode = $cloneWithProperties$2(latestNode);
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
		formatDevErrorMessage$3(`createDOM: base method not extended`);
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
		formatDevErrorMessage$3(`updateDOM: base method not extended`);
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
		formatDevErrorMessage$3(`LexicalNode: Node ${this.name} does not implement .importJSON().`);
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
		const size$1 = writableParent.__size;
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
		writableParent.__size = size$1;
		if (includeChildren) {
			if (!($isElementNode$1(this) && $isElementNode$1(writableReplaceWith))) formatDevErrorMessage$3(`includeChildren should only be true for ElementNodes`);
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
	if (registeredNode === void 0) formatDevErrorMessage$3(`Create node: Attempted to create node ${klass.name} that was not configured to be used on the editor.`);
	const editorKlass = registeredNode.klass;
	if (editorKlass !== klass) formatDevErrorMessage$3(`Create node: Type ${type} in node ${klass.name} does not match registered node ${editorKlass.name} with the same type`);
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
		if (!current.getNextSibling()) formatDevErrorMessage$3(`insertRangeAfter: lastToInsert must be a later sibling of firstToInsert`);
		current = current.getNextSibling();
		nodesToInsert.push(current);
	}
	let currentNode = node;
	for (const nodeToInsert of nodesToInsert) currentNode = currentNode.insertAfter(nodeToInsert);
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
* The set of known update tags to help with TypeScript suggestions.
*/
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
	if (format & IS_CODE$1) return "code";
	if (format & IS_HIGHLIGHT$1) return "mark";
	if (format & IS_SUBSCRIPT$1) return "sub";
	if (format & IS_SUPERSCRIPT$1) return "sup";
	return null;
}
function getElementInnerTag(node, format) {
	if (format & IS_BOLD$1) return "strong";
	if (format & IS_ITALIC$1) return "em";
	return "span";
}
function setTextThemeClassNames(tag, prevFormat, nextFormat, dom, textClassNames) {
	const domClassList = dom.classList;
	let classNames = getCachedClassNameArray(textClassNames, "base");
	if (classNames !== void 0) domClassList.add(...classNames);
	classNames = getCachedClassNameArray(textClassNames, "underlineStrikethrough");
	let hasUnderlineStrikethrough = false;
	const prevUnderlineStrikethrough = prevFormat & IS_UNDERLINE$1 && prevFormat & IS_STRIKETHROUGH$1;
	const nextUnderlineStrikethrough = nextFormat & IS_UNDERLINE$1 && nextFormat & IS_STRIKETHROUGH$1;
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
		return TEXT_TYPE_TO_MODE[this.getLatest().__mode];
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
		return toggleTextFormatType(format, type, alignWithFormat);
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
		if (style !== "") dom.style.cssText = style;
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
			if (prevInnerDOM == null) formatDevErrorMessage$3(`updateDOM: prevInnerDOM is null or undefined`);
			const nextInnerDOM = document.createElement(nextInnerTag);
			createTextInnerDOM(nextInnerDOM, this, nextInnerTag, nextFormat, nextText, config);
			dom.replaceChild(nextInnerDOM, prevInnerDOM);
			return false;
		}
		let innerDOM = dom;
		if (nextOuterTag !== null) {
			if (prevOuterTag !== null) {
				innerDOM = dom.firstChild;
				if (innerDOM == null) formatDevErrorMessage$3(`updateDOM: innerDOM is null or undefined`);
			}
		}
		setTextContent(nextText, innerDOM, this);
		const textClassNames = config.theme.text;
		if (textClassNames !== void 0 && prevFormat !== nextFormat) setTextThemeClassNames(nextInnerTag, prevFormat, nextFormat, innerDOM, textClassNames);
		const prevStyle = prevNode.__style;
		const nextStyle = this.__style;
		if (prevStyle !== nextStyle) dom.style.cssText = nextStyle;
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
		if (!isHTMLElement$1(element)) formatDevErrorMessage$3(`Expected TextNode createDOM to always return a HTMLElement`);
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
		const newFormat = toggleTextFormatType(this.getFormat(), type, null);
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
		const size$1 = this.getTextContentSize();
		return this.select(size$1, size$1);
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
		if (!isBefore && target !== this.getNextSibling()) formatDevErrorMessage$3(`mergeWithSibling: sibling must be a previous or next sibling`);
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
	if (!(domNode.parentElement !== null)) formatDevErrorMessage$3(`Expected parentElement of Text not to be null`);
	let textContent = domNode_.textContent || "";
	if (findParentPreDOMNode(domNode_) !== null) {
		const parts = textContent.split(/(\r?\n|\t)/);
		const nodes = [];
		const length$2 = parts.length;
		for (let i = 0; i < length$2; i++) {
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
		if (!(text === "	" || text === "")) formatDevErrorMessage$3(`TabNode does not support setTextContent`);
		return super.setTextContent("	");
	}
	spliceText(offset, delCount, newText, moveSelection) {
		if (!(newText === "" && delCount === 0 || newText === "	" && delCount === 1)) formatDevErrorMessage$3(`TabNode does not support spliceText`);
		return this;
	}
	setDetail(detail) {
		if (!(detail === IS_UNMERGEABLE)) formatDevErrorMessage$3(`TabNode does not support setDetail`);
		return this;
	}
	setMode(type) {
		if (!(type === "normal")) formatDevErrorMessage$3(`TabNode does not support setMode`);
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
		if (node === null) formatDevErrorMessage$3(`Point.getNode: node not found`);
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
			if (!(type === "text" ? $isTextNode$1(node) : $isElementNode$1(node))) formatDevErrorMessage$3(`PointType.set: node with key ${key} is ${node ? node.__type : "[not found]"} and can not be used for a ${type} point`);
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
		if (this.isCollapsed() && nodes.length > 1) formatDevErrorMessage$3(`RangeSelection.getNodes() returned ${String(nodes.length)} > 1 nodes in a collapsed selection`);
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
		this.format = toggleTextFormatType(this.format, format, null);
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
		const length$2 = parts.length;
		for (let i = 0; i < length$2; i++) {
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
		if (!$isTextNode$1(firstNode)) formatDevErrorMessage$3(`insertText: first node is not a text node`);
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
				$normalizeSelectionPointsForBoundaries(this.anchor, this.focus, null);
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
			else if (this.anchor.type === "text") if (firstNode.isComposing()) this.anchor.offset -= text.length;
			else {
				this.format = firstNodeFormat;
				this.style = firstNodeStyle;
			}
		} else {
			const markedNodeKeysForKeep = new Set([...firstNode.getParentKeys(), ...lastNode.getParentKeys()]);
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
				else if (firstNode.isComposing() && this.anchor.type === "text") this.anchor.offset -= text.length;
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
			if (!$isRangeSelection$1(selection)) formatDevErrorMessage$3(`Expected RangeSelection after insertParagraph`);
			return selection.insertNodes(nodes);
		}
		const firstNode = (this.isBackward() ? this.focus : this.anchor).getNode();
		const firstBlock = $findMatchingParent$1(firstNode, INTERNAL_$isBlock$1);
		const last$1 = nodes[nodes.length - 1];
		if ($isElementNode$1(firstBlock) && "__language" in firstBlock) {
			if ("__language" in nodes[0]) this.insertText(nodes[0].getTextContent());
			else {
				const index = $removeTextAndSplitBlock(this);
				firstBlock.splice(index, 0, nodes);
				last$1.selectEnd();
			}
			return;
		}
		const notInline = (node) => ($isElementNode$1(node) || $isDecoratorNode$1(node)) && !node.isInline();
		if (!nodes.some(notInline)) {
			if (!$isElementNode$1(firstBlock)) formatDevErrorMessage$3(`Expected node ${firstNode.constructor.name} of type ${firstNode.getType()} to have a block ElementNode ancestor`);
			const index = $removeTextAndSplitBlock(this);
			firstBlock.splice(index, 0, nodes);
			last$1.selectEnd();
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
			if (!$isElementNode$1(firstBlock)) formatDevErrorMessage$3(`Expected node ${firstNode.constructor.name} of type ${firstNode.getType()} to have a block ElementNode ancestor`);
			firstBlock.append(...firstToInsert.getChildren());
			firstToInsert = blocks[1];
		}
		if (firstToInsert) {
			if (!(firstBlock !== null)) formatDevErrorMessage$3(`Expected node ${firstNode.constructor.name} of type ${firstNode.getType()} to have a block ancestor`);
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
		if (!$isElementNode$1(block)) formatDevErrorMessage$3(`Expected ancestor to be a block ElementNode`);
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
			if (this.anchor.type === "text") nextAnchorDOM = getDOMTextNode$2(nextAnchorDOM);
			if (this.focus.type === "text") nextFocusDOM = getDOMTextNode$2(nextFocusDOM);
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
		this.removeText();
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
	if (!(text.length > 1)) formatDevErrorMessage$3(`shouldDeleteExactlyOneCodeUnit: expecting to be called only with sequences of two or more code units`);
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
				if (!(elementDOM !== null)) formatDevErrorMessage$3(`$internalResolveSelectionPoint: node in DOM but not keyToDOMMap`);
				const slot = resolvedElement.getDOMSlot(elementDOM);
				[resolvedElement, resolvedOffset] = slot.resolveChildIndex(resolvedElement, elementDOM, dom, offset);
				if (!$isElementNode$1(resolvedElement)) formatDevErrorMessage$3(`$internalResolveSelectionPoint: resolvedElement is not an ElementNode`);
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
					if (!$isElementNode$1(resolvedElement)) formatDevErrorMessage$3(`invariant`);
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
		const editor = getActiveEditor();
		if (editor.isComposing() && editor._compositionKey !== anchor.key && $isRangeSelection$1(lastSelection)) {
			const lastAnchor = lastSelection.anchor;
			const lastFocus = lastSelection.focus;
			anchor.set(lastAnchor.key, lastAnchor.offset, lastAnchor.type, true);
			focus.set(lastFocus.key, lastFocus.offset, lastFocus.type, true);
		}
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
	$normalizeSelectionPointsForBoundaries(resolvedAnchorPoint, resolvedFocusPoint, lastSelection);
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
	return new RangeSelection(resolvedAnchorPoint, resolvedFocusPoint, !$isRangeSelection$1(lastSelection) ? 0 : lastSelection.format, !$isRangeSelection$1(lastSelection) ? "" : lastSelection.style);
}
function $validatePoint(name, point) {
	const node = $getNodeByKey$1(point.key);
	if (!(node !== void 0)) formatDevErrorMessage$3(`$validatePoint: ${name} key ${point.key} not found in current editorState`);
	if (point.type === "text") {
		if (!$isTextNode$1(node)) formatDevErrorMessage$3(`$validatePoint: ${name} key ${point.key} is not a TextNode`);
		const size$1 = node.getTextContentSize();
		if (!(point.offset <= size$1)) formatDevErrorMessage$3(`$validatePoint: ${name} point.offset > node.getTextContentSize() (${String(point.offset)} > ${String(size$1)})`);
	} else {
		if (!$isElementNode$1(node)) formatDevErrorMessage$3(`$validatePoint: ${name} key ${point.key} is not an ElementNode`);
		const size$1 = node.getChildrenSize();
		if (!(point.offset <= size$1)) formatDevErrorMessage$3(`$validatePoint: ${name} point.offset > node.getChildrenSize() (${String(point.offset)} > ${String(size$1)})`);
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
function updateDOMSelection(prevSelection, nextSelection, editor, domSelection, tags, rootElement, nodeCount) {
	const anchorDOMNode = domSelection.anchorNode;
	const focusDOMNode = domSelection.focusNode;
	const anchorOffset = domSelection.anchorOffset;
	const focusOffset = domSelection.focusOffset;
	const activeElement = document.activeElement;
	if (tags.has(COLLABORATION_TAG$1) && activeElement !== rootElement || activeElement !== null && isSelectionCapturedInDecoratorInput$1(activeElement)) return;
	if (!$isRangeSelection$1(nextSelection)) {
		if (prevSelection !== null && isSelectionWithinEditor$1(editor, anchorDOMNode, focusDOMNode)) domSelection.removeAllRanges();
		return;
	}
	const anchor = nextSelection.anchor;
	const focus = nextSelection.focus;
	const anchorKey = anchor.key;
	const focusKey = focus.key;
	const anchorDOM = getElementByKeyOrThrow(editor, anchorKey);
	const focusDOM = getElementByKeyOrThrow(editor, focusKey);
	const nextAnchorOffset = anchor.offset;
	const nextFocusOffset = focus.offset;
	const nextFormat = nextSelection.format;
	const nextStyle = nextSelection.style;
	const isCollapsed = nextSelection.isCollapsed();
	let nextAnchorNode = anchorDOM;
	let nextFocusNode = focusDOM;
	let anchorFormatOrStyleChanged = false;
	if (anchor.type === "text") {
		nextAnchorNode = getDOMTextNode$2(anchorDOM);
		const anchorNode = anchor.getNode();
		anchorFormatOrStyleChanged = anchorNode.getFormat() !== nextFormat || anchorNode.getStyle() !== nextStyle;
	} else if ($isRangeSelection$1(prevSelection) && prevSelection.anchor.type === "text") anchorFormatOrStyleChanged = true;
	if (focus.type === "text") nextFocusNode = getDOMTextNode$2(focusDOM);
	if (nextAnchorNode === null || nextFocusNode === null) return;
	if (isCollapsed && (prevSelection === null || anchorFormatOrStyleChanged || $isRangeSelection$1(prevSelection) && (prevSelection.format !== nextFormat || prevSelection.style !== nextStyle))) markCollapsedSelectionFormat(nextFormat, nextStyle, nextAnchorOffset, anchorKey, performance.now());
	if (anchorOffset === nextAnchorOffset && focusOffset === nextFocusOffset && anchorDOMNode === nextAnchorNode && focusDOMNode === nextFocusNode && !(domSelection.type === "Range" && isCollapsed)) {
		if (activeElement === null || !rootElement.contains(activeElement)) {
			if (!tags.has(SKIP_SELECTION_FOCUS_TAG$1)) rootElement.focus({ preventScroll: true });
		}
		if (anchor.type !== "element") return;
	}
	setDOMSelectionBaseAndExtent(domSelection, nextAnchorNode, nextAnchorOffset, nextFocusNode, nextFocusOffset);
	if (!tags.has(SKIP_SCROLL_INTO_VIEW_TAG$1) && nextSelection.isCollapsed() && rootElement !== null && rootElement === document.activeElement) {
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
	if (!$isRangeSelection$1(selection_)) formatDevErrorMessage$3(`Unexpected dirty selection to be null`);
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
	if (isReadOnlyMode) formatDevErrorMessage$3(`Cannot use method in read-only mode.`);
}
function errorOnInfiniteTransforms() {
	if (infiniteTransformCount > 99) formatDevErrorMessage$3(`One or more transforms are endlessly triggering additional transforms. May have encountered infinite recursion caused by transforms that have their preconditions too lose and/or conflict with each other.`);
}
function getActiveEditorState() {
	if (activeEditorState === null) formatDevErrorMessage$3(`Unable to find an active editor state. State helpers or node methods can only be used synchronously during the callback of editor.update(), editor.read(), or editorState.read().${collectBuildInformation()}`);
	return activeEditorState;
}
function getActiveEditor() {
	if (activeEditor === null) formatDevErrorMessage$3(`Unable to find an active editor. This method can only be used synchronously during the callback of editor.update() or editor.read().${collectBuildInformation()}`);
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
	if (registeredNode === void 0) formatDevErrorMessage$3(`parseEditorState: type "${type}" + not found`);
	const nodeClass = registeredNode.klass;
	if (serializedNode.type !== nodeClass.getType()) formatDevErrorMessage$3(`LexicalNode: Node ${nodeClass.name} does not implement .importJSON().`);
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
	if (pendingEditorState === null) return;
	const currentEditorState = editor._editorState;
	const currentSelection = currentEditorState._selection;
	const pendingSelection = pendingEditorState._selection;
	const needsUpdate = editor._dirtyType !== NO_DIRTY_NODES;
	const previousActiveEditorState = activeEditorState;
	const previousReadOnlyMode = isReadOnlyMode;
	const previousActiveEditor = activeEditor;
	const previouslyUpdating = editor._updating;
	const observer = editor._observer;
	let mutatedNodes$1 = null;
	editor._pendingEditorState = null;
	editor._editorState = pendingEditorState;
	if (!shouldSkipDOM && needsUpdate && observer !== null) {
		activeEditor = editor;
		activeEditorState = pendingEditorState;
		isReadOnlyMode = false;
		editor._updating = true;
		try {
			const dirtyType = editor._dirtyType;
			const dirtyElements$1 = editor._dirtyElements;
			const dirtyLeaves$1 = editor._dirtyLeaves;
			observer.disconnect();
			mutatedNodes$1 = $reconcileRoot(currentEditorState, pendingEditorState, editor, dirtyType, dirtyElements$1, dirtyLeaves$1);
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
	if (editor._editable && domSelection !== null && (needsUpdate || pendingSelection === null || pendingSelection.dirty || !pendingSelection.is(currentSelection)) && rootElement !== null && !tags.has(SKIP_DOM_SELECTION_TAG$1)) {
		activeEditor = editor;
		activeEditorState = pendingEditorState;
		try {
			if (observer !== null) observer.disconnect();
			if (needsUpdate || pendingSelection === null || pendingSelection.dirty) {
				const blockCursorElement = editor._blockCursorElement;
				if (blockCursorElement !== null) removeDOMBlockCursorElement(blockCursorElement, editor, rootElement);
				updateDOMSelection(currentSelection, pendingSelection, editor, domSelection, tags, rootElement);
			}
			updateDOMBlockCursorElement(editor, rootElement, pendingSelection);
		} finally {
			if (observer !== null) observer.observe(rootElement, observerOptions);
			activeEditor = previousActiveEditor;
			activeEditorState = previousActiveEditorState;
		}
	}
	if (mutatedNodes$1 !== null) triggerMutationListeners(editor, mutatedNodes$1, tags, dirtyLeaves, currentEditorState);
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
		mutatedNodes: mutatedNodes$1,
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
function triggerMutationListeners(editor, mutatedNodes$1, updateTags, dirtyLeaves, prevEditorState) {
	const listeners = Array.from(editor._listeners.mutation);
	const listenersLength = listeners.length;
	for (let i = 0; i < listenersLength; i++) {
		const [listener, klassSet] = listeners[i];
		for (const klass of klassSet) {
			const mutatedNodesByType = mutatedNodes$1.get(klass);
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
		const listeners = Array.from(editor._listeners[type]);
		for (let i = 0; i < listeners.length; i++) listeners[i].apply(null, payload);
	} finally {
		editor._updating = previouslyUpdating;
	}
}
function triggerCommandListeners(editor, type, payload) {
	const editors = getEditorsToPropagate(editor);
	for (let i = 4; i >= 0; i--) for (let e = 0; e < editors.length; e++) {
		const currentEditor = editors[e];
		const listenerInPriorityOrder = currentEditor._commands.get(type);
		if (listenerInPriorityOrder !== void 0) {
			const listenersSet = listenerInPriorityOrder[i];
			if (listenersSet !== void 0) {
				const listeners = Array.from(listenersSet);
				const listenersLength = listeners.length;
				let returnVal = false;
				updateEditorSync(currentEditor, () => {
					for (let j = 0; j < listenersLength; j++) if (listeners[j](payload, editor)) {
						returnVal = true;
						return;
					}
				});
				if (returnVal) return returnVal;
			}
		}
	}
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
					if (!(pendingEditorState !== null)) formatDevErrorMessage$3(`Unexpected empty pending editor state on discrete nested update`);
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
			if (pendingNodeMap.get(anchorKey) === void 0 || pendingNodeMap.get(focusKey) === void 0) formatDevErrorMessage$3(`updateEditor: selection has been lost because the previously selected nodes have been removed and selection wasn't moved to another node. Ensure selection changes after removing/replacing a selected node.`);
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
		if (!(before === null || before.parentElement === this.element)) formatDevErrorMessage$3(`ElementDOMSlot.insertChild: before is not in element`);
		this.element.insertBefore(dom, before);
		return this;
	}
	/**
	* Remove the managed child from this container, will throw if it was not already there
	*/
	removeChild(dom) {
		if (!(dom.parentElement === this.element)) formatDevErrorMessage$3(`ElementDOMSlot.removeChild: dom is not in element`);
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
		if (!(prevDom.parentElement === this.element)) formatDevErrorMessage$3(`ElementDOMSlot.replaceChild: prevDom is not in element`);
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
			img.style.cssText = "display: inline !important; border: 0px !important; margin: 0px !important;";
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
	if (!(node === root)) formatDevErrorMessage$3(`indexPath: root is not a parent of child`);
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
		return ELEMENT_FORMAT_TO_TYPE[this.getFormat()] || "";
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
			const resolvedNode$1 = children[childrenLength - 1];
			return $isElementNode$1(resolvedNode$1) && resolvedNode$1.getLastDescendant() || resolvedNode$1 || null;
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
		if (firstChild === null) formatDevErrorMessage$3(`Expected node ${this.__key} to have a first child.`);
		return firstChild;
	}
	getLastChild() {
		const lastKey = this.getLatest().__last;
		return lastKey === null ? null : $getNodeByKey$1(lastKey);
	}
	getLastChildOrThrow() {
		const lastChild = this.getLastChild();
		if (lastChild === null) formatDevErrorMessage$3(`Expected node ${this.__key} to have a last child.`);
		return lastChild;
	}
	getChildAtIndex(index) {
		const size$1 = this.getChildrenSize();
		let node;
		let i;
		if (index < size$1 / 2) {
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
		i = size$1 - 1;
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
		return toggleTextFormatType(format, type, alignWithFormat);
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
		self.__format = type !== "" ? ELEMENT_TYPE_TO_FORMAT[type] : 0;
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
		if (!!$isEphemeral(this)) formatDevErrorMessage$3(`ElementNode.splice: Ephemeral nodes can not mutate their children (key ${this.__key} type ${this.__type})`);
		const oldSize = this.getChildrenSize();
		const writableSelf = this.getWritable();
		if (!(start + deleteCount <= oldSize)) formatDevErrorMessage$3(`ElementNode.splice: start + deleteCount > oldSize (${String(start)} + ${String(deleteCount)} > ${String(oldSize)})`);
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
				if (nodeToDelete === null) formatDevErrorMessage$3(`splice: sibling not found`);
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
			if (nodeToInsert.__key === writableSelfKey) formatDevErrorMessage$3(`append: attempting to append self`);
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
		if (textFormat !== 0) json.textFormat = textFormat;
		if (textStyle !== "") json.textStyle = textStyle;
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
		const slot = this.getDOMSlot(dom);
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
		formatDevErrorMessage$3(`getTopLevelElementOrThrow: root nodes are not top level elements`);
	}
	getTextContent() {
		const cachedText = this.__cachedText;
		if (isCurrentlyReadOnlyMode$1() || getActiveEditor()._dirtyType === NO_DIRTY_NODES) {
			if (cachedText !== null) return cachedText;
		}
		return super.getTextContent();
	}
	remove() {
		formatDevErrorMessage$3(`remove: cannot be called on root nodes`);
	}
	replace(node) {
		formatDevErrorMessage$3(`replace: cannot be called on root nodes`);
	}
	insertBefore(nodeToInsert) {
		formatDevErrorMessage$3(`insertBefore: cannot be called on root nodes`);
	}
	insertAfter(nodeToInsert) {
		formatDevErrorMessage$3(`insertAfter: cannot be called on root nodes`);
	}
	updateDOM(prevNode, dom) {
		return false;
	}
	splice(start, deleteCount, nodesToInsert) {
		for (const node of nodesToInsert) if (!($isElementNode$1(node) || $isDecoratorNode$1(node))) formatDevErrorMessage$3(`rootNode.splice: Only element or decorator nodes can be inserted to the root node`);
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
	return new EditorState(new Map([["root", $createRootNode()]]));
}
function exportNodeToJSON(node) {
	const serializedNode = node.exportJSON();
	const nodeClass = node.constructor;
	if (serializedNode.type !== nodeClass.getType()) formatDevErrorMessage$3(`LexicalNode: Node ${nodeClass.name} does not match the serialized type. Check if .exportJSON() is implemented and it is returning the correct type.`);
	if ($isElementNode$1(node)) {
		const serializedChildren = serializedNode.children;
		if (!Array.isArray(serializedChildren)) formatDevErrorMessage$3(`LexicalNode: Node ${nodeClass.name} is an element but .exportJSON() does not have a children array.`);
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
		return {
			...super.exportJSON(),
			textFormat: this.getTextFormat(),
			textStyle: this.getTextStyle()
		};
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
const DEFAULT_SKIP_INITIALIZATION = false;
/**
* The payload passed to an UpdateListener
*/
/**
* A listener that gets called after the editor is updated
*/
const COMMAND_PRIORITY_EDITOR$1 = 0;
const COMMAND_PRIORITY_LOW$1 = 1;
const COMMAND_PRIORITY_NORMAL$1 = 2;
const COMMAND_PRIORITY_HIGH$1 = 3;
const COMMAND_PRIORITY_CRITICAL$1 = 4;
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
	const addConversionsToCache = (map$1) => {
		Object.keys(map$1).forEach((key) => {
			let currentCache = conversionCache.get(key);
			if (currentCache === void 0) {
				currentCache = [];
				conversionCache.set(key, currentCache);
			}
			currentCache.push(map$1[key]);
		});
	};
	nodes.forEach((node) => {
		const importDOM = node.klass.importDOM;
		if (importDOM == null || handledConversions.has(importDOM)) return;
		handledConversions.add(importDOM);
		const map$1 = importDOM.call(node.klass);
		if (map$1 !== null) addConversionsToCache(map$1);
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
/**
* Creates a new LexicalEditor attached to a single contentEditable (provided in the config). This is
* the lowest-level initialization API for a LexicalEditor. If you're using React or another framework,
* consider using the appropriate abstractions, such as LexicalComposer
* @param editorConfig - the editor configuration.
* @returns a LexicalEditor instance
*/
function createEditor$1(editorConfig) {
	const config = editorConfig || {};
	const activeEditor$2 = internalGetActiveEditor();
	const theme = config.theme || {};
	const parentEditor = editorConfig === void 0 ? activeEditor$2 : config.parentEditor || null;
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
	if (editorConfig === void 0 && activeEditor$2 !== null) registeredNodes = activeEditor$2._nodes;
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
					if (!(replaceWithKlass.prototype instanceof klass)) formatDevErrorMessage$3(`${replaceWithKlass.name} doesn't extend the ${name}`);
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
		namespace,
		theme
	}, onError ? onError : console.error, initializeConversionCache(registeredNodes, html ? html.import : void 0), isEditable, editorConfig);
	if (initialEditorState !== void 0) {
		editor._pendingEditorState = initialEditorState;
		editor._dirtyType = FULL_RECONCILE;
	}
	return editor;
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
			decorator: /* @__PURE__ */ new Set(),
			editable: /* @__PURE__ */ new Set(),
			mutation: /* @__PURE__ */ new Map(),
			root: /* @__PURE__ */ new Set(),
			textcontent: /* @__PURE__ */ new Set(),
			update: /* @__PURE__ */ new Set()
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
		const listenerSetOrMap = this._listeners.update;
		listenerSetOrMap.add(listener);
		return () => {
			listenerSetOrMap.delete(listener);
		};
	}
	/**
	* Registers a listener for for when the editor changes between editable and non-editable states.
	* Will trigger the provided callback each time the editor transitions between these states until the
	* teardown function is called.
	*
	* @returns a teardown function that can be used to cleanup the listener.
	*/
	registerEditableListener(listener) {
		const listenerSetOrMap = this._listeners.editable;
		listenerSetOrMap.add(listener);
		return () => {
			listenerSetOrMap.delete(listener);
		};
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
		const listenerSetOrMap = this._listeners.decorator;
		listenerSetOrMap.add(listener);
		return () => {
			listenerSetOrMap.delete(listener);
		};
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
		const listenerSetOrMap = this._listeners.textcontent;
		listenerSetOrMap.add(listener);
		return () => {
			listenerSetOrMap.delete(listener);
		};
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
	* @returns a teardown function that can be used to cleanup the listener.
	*/
	registerRootListener(listener) {
		const listenerSetOrMap = this._listeners.root;
		listener(this._rootElement, null);
		listenerSetOrMap.add(listener);
		return () => {
			listener(null, this._rootElement);
			listenerSetOrMap.delete(listener);
		};
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
		if (priority === void 0) formatDevErrorMessage$3(`Listener for type "command" requires a "priority".`);
		const commandsMap = this._commands;
		if (!commandsMap.has(command)) commandsMap.set(command, [
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set()
		]);
		const listenersInPriorityOrder = commandsMap.get(command);
		if (listenersInPriorityOrder === void 0) formatDevErrorMessage$3(`registerCommand: Command ${String(command)} not found in command map`);
		const listeners = listenersInPriorityOrder[priority];
		listeners.add(listener);
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
		if (registeredNode === void 0) formatDevErrorMessage$3(`Node ${klass.name} has not been registered. Ensure node has been passed to createEditor.`);
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
			updateTags: new Set(["registerMutationListener"])
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
		if (editorState.isEmpty()) formatDevErrorMessage$3(`setEditorState: the editor state is empty. Ensure the editor state's root node never becomes empty.`);
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
LexicalEditor.version = "0.38.2+dev.esm";
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
	if (registeredNode === void 0) formatDevErrorMessage$3(`registeredNode: Type ${nodeType} not found`);
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
function getDOMTextNode$2(element) {
	let node = element;
	while (node != null) {
		if (isDOMTextNode$1(node)) return node;
		node = node.firstChild;
	}
	return null;
}
function toggleTextFormatType(format, type, alignWithFormat) {
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
		if (!(existingKey === pendingNode.__key)) formatDevErrorMessage$3(`Lexical node with constructor ${node.constructor.name} (type ${node.getType()}) has an incorrect clone implementation, got ${String(existingKey)} for nodeKey when expecting ${pendingNode.__key}`);
	}
	if (existingNode && existingNode.constructor !== node.constructor) if (node.constructor.name !== existingNode.constructor.name) formatDevErrorMessage$3(`Lexical node with constructor ${node.constructor.name} attempted to re-use key from node in active editor state with constructor ${existingNode.constructor.name}. Keys must not be re-used when the type is changed.`);
	else formatDevErrorMessage$3(`Lexical node with constructor ${node.constructor.name} attempted to re-use key from node in active editor state with different constructor with the same name (possibly due to invalid Hot Module Replacement). Keys must not be re-used when the type is changed.`);
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
	if (!!$isEphemeral(node)) formatDevErrorMessage$3(`internalMarkNodeAsDirty: Ephemeral nodes must not be marked as dirty (key ${node.__key} type ${node.__type})`);
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
		if (Object.isFrozen(selection)) formatDevErrorMessage$3(`$setSelection called on frozen selection object. Ensure selection is cloned before passing in.`);
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
	let currentEditor = editor;
	while (currentEditor !== null) {
		editorsToPropagate.push(currentEditor);
		currentEditor = currentEditor._parentEditor;
	}
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
			if (textContent === COMPOSITION_SUFFIX && data) {
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
		if ((isComposing || compositionEnd) && textContent[textContent.length - 1] === COMPOSITION_SUFFIX) normalizedTextContent = textContent.slice(0, -1);
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
	return isModifierMatch$1(event, mask) && event.key.toLowerCase() === expectedKey.toLowerCase();
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
function $selectAll$2(selection) {
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
		const classNamesArr = normalizeClassNames(classNames);
		classNamesCache[classNameThemeType] = classNamesArr;
		return classNamesArr;
	}
	return classNames;
}
function setMutatedNode(mutatedNodes$1, registeredNodes, mutationListeners, node, mutation) {
	if (mutationListeners.size === 0) return;
	const nodeType = node.__type;
	const nodeKey = node.__key;
	const registeredNode = registeredNodes.get(nodeType);
	if (registeredNode === void 0) formatDevErrorMessage$3(`Type ${nodeType} not in registeredNodes`);
	const klass = registeredNode.klass;
	let mutatedNodesByType = mutatedNodes$1.get(klass);
	if (mutatedNodesByType === void 0) {
		mutatedNodesByType = /* @__PURE__ */ new Map();
		mutatedNodes$1.set(klass, mutatedNodesByType);
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
		const nodes$1 = getCachedTypeToNodeMap(editorState).get(klassType);
		return nodes$1 ? Array.from(nodes$1.values()) : [];
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
	return triggerCommandListeners(editor, command, payload);
}
function $textContentRequiresDoubleLinebreakAtEnd(node) {
	return !$isRootNode$1(node) && !node.isLastChild() && !node.isInline();
}
function getElementByKeyOrThrow(editor, key) {
	const element = editor._keyToDOMMap.get(key);
	if (element === void 0) formatDevErrorMessage$3(`Reconciliation: could not find DOM element for node key ${key}`);
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
	const doc$1 = getDOMOwnerDocument$1(rootElement);
	const defaultView = getDefaultView(doc$1);
	if (doc$1 === null || defaultView === null) return;
	let { top: currentTop, bottom: currentBottom } = selectionRect;
	let targetTop = 0;
	let targetBottom = 0;
	let element = rootElement;
	while (element !== null) {
		const isBodyElement = element === doc$1.body;
		if (isBodyElement) {
			targetTop = 0;
			targetBottom = getWindow(editor).innerHeight;
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
	if (windowObj === null) formatDevErrorMessage$3(`window object not found`);
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
* @returns The copy of the node.
*/
function $copyNode$1(node) {
	const copy$1 = node.constructor.clone(node);
	$setNodeKey(copy$1, null);
	copy$1.afterCloneFrom(node);
	return copy$1;
}
function $applyNodeReplacement$1(node) {
	const editor = getActiveEditor();
	const nodeType = node.getType();
	const registeredNode = getRegisteredNode$1(editor, nodeType);
	if (!(registeredNode !== void 0)) formatDevErrorMessage$3(`$applyNodeReplacement node ${node.constructor.name} with type ${nodeType} must be registered to the editor. You can do this by passing the node class via the "nodes" array in the editor config.`);
	const { replace, replaceWithKlass } = registeredNode;
	if (replace !== null) {
		const replacementNode = replace(node);
		const replacementNodeKlass = replacementNode.constructor;
		if (replaceWithKlass !== null) {
			if (!(replacementNode instanceof replaceWithKlass)) formatDevErrorMessage$3(`$applyNodeReplacement failed. Expected replacement node to be an instance of ${replaceWithKlass.name} with type ${replaceWithKlass.getType()} but returned ${replacementNodeKlass.name} with type ${replacementNodeKlass.getType()} from original node ${node.constructor.name} with type ${nodeType}`);
		} else if (!(replacementNode instanceof node.constructor && replacementNodeKlass !== node.constructor)) formatDevErrorMessage$3(`$applyNodeReplacement failed. Ensure replacement node ${replacementNodeKlass.name} with type ${replacementNodeKlass.getType()} is a subclass of the original node ${node.constructor.name} with type ${nodeType}.`);
		if (!(replacementNode.__key !== node.__key)) formatDevErrorMessage$3(`$applyNodeReplacement failed. Ensure that the key argument is *not* used in your replace function (from node ${node.constructor.name} with type ${nodeType} to node ${replacementNodeKlass.name} with type ${replacementNodeKlass.getType()}), Node keys must never be re-used except by the static clone method.`);
		return replacementNode;
	}
	return node;
}
function errorOnInsertTextNodeOnRoot(node, insertNode) {
	if ($isRootNode$1(node.getParent()) && !$isElementNode$1(insertNode) && !$isDecoratorNode$1(insertNode)) formatDevErrorMessage$3(`Only element or decorator nodes can be inserted in to the root node`);
}
function $getNodeByKeyOrThrow$1(key) {
	const node = $getNodeByKey$1(key);
	if (node === null) formatDevErrorMessage$3(`Expected node with key ${key} to exist but it's not in the nodeMap.`);
	return node;
}
function createBlockCursorElement(editorConfig) {
	const theme = editorConfig.theme;
	const element = document.createElement("div");
	element.contentEditable = "false";
	element.setAttribute("data-lexical-cursor", "true");
	let blockCursorTheme = theme.blockCursor;
	if (blockCursorTheme !== void 0) {
		if (typeof blockCursorTheme === "string") blockCursorTheme = theme.blockCursor = normalizeClassNames(blockCursorTheme);
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
	if (!!$isRootOrShadowRoot$1(node)) formatDevErrorMessage$3(`Can not call $splitNode() on root element`);
	const recurse = (currentNode) => {
		const parent = currentNode.getParentOrThrow();
		const isParentRoot = $isRootOrShadowRoot$1(parent);
		const nodeToMove = currentNode === startNode && !isParentRoot ? currentNode : $copyNode$1(currentNode);
		if (isParentRoot) {
			if (!($isElementNode$1(currentNode) && $isElementNode$1(nodeToMove))) formatDevErrorMessage$3(`Children of a root must be ElementNode`);
			currentNode.insertAfter(nodeToMove);
			return [
				currentNode,
				nodeToMove,
				nodeToMove
			];
		} else {
			const [leftTree$1, rightTree$1, newParent] = recurse(parent);
			const nextSiblings = currentNode.getNextSiblings();
			newParent.append(nodeToMove, ...nextSiblings);
			return [
				leftTree$1,
				rightTree$1,
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
	const inlineNodes = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
	return node.nodeName.match(inlineNodes) !== null;
}
/**
*
* @param node - the Dom Node to check
* @returns if the Dom Node is a block node
*/
function isBlockDomNode$1(node) {
	const blockNodes = new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
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
/** @internal */
/**
* @internal
* Compute a cached Map of node type to nodes for a frozen EditorState
*/
const cachedNodeMaps = /* @__PURE__ */ new WeakMap();
const EMPTY_TYPE_TO_NODE_MAP = /* @__PURE__ */ new Map();
function getCachedTypeToNodeMap(editorState) {
	if (!editorState._readOnly && editorState.isEmpty()) return EMPTY_TYPE_TO_NODE_MAP;
	if (!editorState._readOnly) formatDevErrorMessage$3(`getCachedTypeToNodeMap called with a writable EditorState`);
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
function $cloneWithProperties$2(latestNode) {
	const constructor = latestNode.constructor;
	const mutableNode = constructor.clone(latestNode);
	mutableNode.afterCloneFrom(latestNode);
	if (!(mutableNode.__key === latestNode.__key)) formatDevErrorMessage$3(`$cloneWithProperties: ${constructor.name}.clone(node) (with type '${constructor.getType()}') did not return a node with the same key, make sure to specify node.__key as the last argument to the constructor`);
	if (!(mutableNode.__parent === latestNode.__parent && mutableNode.__next === latestNode.__next && mutableNode.__prev === latestNode.__prev)) formatDevErrorMessage$3(`$cloneWithProperties: ${constructor.name}.clone(node) (with type '${constructor.getType()}') overrode afterCloneFrom but did not call super.afterCloneFrom(prevNode)`);
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
	return $markEphemeral($cloneWithProperties$2(latestNode));
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
		formatDevErrorMessage$3(`${klass.name} (type ${ownNodeType}) does not subclass LexicalNode from the lexical package used by this editor (version ${version}). All lexical and @lexical/* packages used by an editor must have identical versions. If you suspect the version does match, then the problem may be caused by multiple copies of the same lexical module (e.g. both esm and cjs, or included directly in multiple entrypoints).`);
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
				if (!(klass.length === 0)) formatDevErrorMessage$3(`${klass.name} (type ${ownNodeType}) must implement a static clone method since its constructor has ${String(klass.length)} required arguments (expecting 0). Use an explicit default in the first argument of your constructor(prop: T=X, nodeKey?: NodeKey).`);
			}
			klass.clone = (prevNode) => {
				setPendingNodeToClone(prevNode);
				return new klass();
			};
		}
		if (!hasOwnStaticMethod(klass, "importJSON")) {
			if (TextNode$1.length === 0) {
				if (!(klass.length === 0)) formatDevErrorMessage$3(`${klass.name} (type ${ownNodeType}) must implement a static importJSON method since its constructor has ${String(klass.length)} required arguments (expecting 0). Use an explicit default in the first argument of your constructor(prop: T=X, nodeKey?: NodeKey).`);
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
				} else if (!(target !== null)) formatDevErrorMessage$3(`NodeCaret.splice: Underflow of expected nodesToRemove during splice (keys: ${Array.from(nodesToRemove).join(" ")})`);
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
	const size$1 = origin.getTextContentSize();
	let numericOffset = offset === "next" ? size$1 : offset === "previous" ? 0 : offset;
	if (numericOffset < 0 || numericOffset > size$1) {
		if (!(mode === "clamp")) formatDevErrorMessage$3(`$getTextNodeOffset: invalid offset ${String(offset)} for size ${String(size$1)} at key ${origin.getKey()}`);
		numericOffset = numericOffset < 0 ? 0 : size$1;
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
	if (!(anchor.direction === focus.direction)) formatDevErrorMessage$3(`$getCaretRange: anchor and focus must be in the same direction`);
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
	const { initial, hasNext, step, map: map$1 } = config;
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
				value: map$1(state)
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
	if (!(compare !== null)) formatDevErrorMessage$3(`$comparePointCaretNext: a (key ${a.origin.getKey()}) and b (key ${b.origin.getKey()}) do not have a common ancestor`);
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
			if (!$isSameNode(a, parent)) formatDevErrorMessage$3(`$originComparison: ancestor logic error`);
			return {
				commonAncestor: parent,
				type: "ancestor"
			};
		} else if (child === null) {
			if (!$isSameNode(b, parent)) formatDevErrorMessage$3(`$originComparison: descendant logic error`);
			return {
				commonAncestor: parent,
				type: "descendant"
			};
		} else {
			if (!(($isElementNode$1(aChild) || $isSameNode(a, aChild)) && ($isElementNode$1(child) || $isSameNode(b, child)) && parent.is(aChild.getParent()) && parent.is(child.getParent()))) formatDevErrorMessage$3(`$originComparison: branch logic error`);
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
		if (!$isTextNode$1(node)) formatDevErrorMessage$3(`$caretFromPoint: Node with type ${node.getType()} and key ${key} that does not inherit from TextNode encountered for text point`);
		return $getTextPointCaret$1(node, direction, offset);
	}
	if (!$isElementNode$1(node)) formatDevErrorMessage$3(`$caretFromPoint: Node with type ${node.getType()} and key ${key} that does not inherit from ElementNode encountered for element point`);
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
		if (!($isChildCaret$1(caret) && $isElementNode$1(origin))) formatDevErrorMessage$3(`$setPointFromCaret: exhaustiveness check`);
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
		focusBlock.remove();
	}
	const bestCandidate = [
		anchorCandidate,
		focusCandidate,
		...anchorCandidates,
		...focusCandidates
	].find($isCaretAttached);
	if (bestCandidate) return $getCollapsedCaretRange$1($getCaretInDirection$1($normalizeCaret$1(bestCandidate), initialRange.direction));
	formatDevErrorMessage$3(`$removeTextFromCaretRange: selection was lost, could not find a new anchor given candidates with keys: ${JSON.stringify(anchorCandidates.map((n) => n.origin.__key))}`);
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
	if (!$isTextNode$1(textNode)) formatDevErrorMessage$3(`$splitTextPointCaret: splitText must return at least one TextNode`);
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
function $splitAtPointCaretNext$1(pointCaret, { $copyElementNode = $copyNode$1, $splitTextPointCaretNext = $splitTextPointCaret, rootMode = "shadowRoot", $shouldSplit = $alwaysSplit } = {}) {
	if ($isTextPointCaret$1(pointCaret)) return $splitTextPointCaretNext(pointCaret);
	const parentCaret = pointCaret.getParentCaret(rootMode);
	if (parentCaret) {
		const { origin } = parentCaret;
		if ($isChildCaret$1(pointCaret) && !(origin.canBeEmpty() && $shouldSplit(origin, "first"))) return $rewindSiblingCaret$1(parentCaret);
		const siblings = $getAdjacentNodes(pointCaret);
		if (siblings.length > 0 || origin.canBeEmpty() && $shouldSplit(origin, "last")) parentCaret.insert($copyElementNode(origin).splice(0, 0, siblings));
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
* @experimental
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
* @experimental
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
function configExtension$1(...args$1) {
	return args$1;
}
/**
* @experimental
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

//#endregion
//#region node_modules/lexical/Lexical.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
const mod$3 = Lexical_dev_exports;
const $addUpdateTag = mod$3.$addUpdateTag;
const $applyNodeReplacement = mod$3.$applyNodeReplacement;
const $caretFromPoint = mod$3.$caretFromPoint;
const $caretRangeFromSelection = mod$3.$caretRangeFromSelection;
const $cloneWithProperties$1 = mod$3.$cloneWithProperties;
const $cloneWithPropertiesEphemeral = mod$3.$cloneWithPropertiesEphemeral;
const $comparePointCaretNext = mod$3.$comparePointCaretNext;
const $copyNode = mod$3.$copyNode;
const $create = mod$3.$create;
const $createLineBreakNode = mod$3.$createLineBreakNode;
const $createNodeSelection = mod$3.$createNodeSelection;
const $createParagraphNode = mod$3.$createParagraphNode;
const $createPoint = mod$3.$createPoint;
const $createRangeSelection = mod$3.$createRangeSelection;
const $createRangeSelectionFromDom = mod$3.$createRangeSelectionFromDom;
const $createTabNode = mod$3.$createTabNode;
const $createTextNode = mod$3.$createTextNode;
const $extendCaretToRange = mod$3.$extendCaretToRange;
const $findMatchingParent = mod$3.$findMatchingParent;
const $getAdjacentChildCaret = mod$3.$getAdjacentChildCaret;
const $getAdjacentNode = mod$3.$getAdjacentNode;
const $getAdjacentSiblingOrParentSiblingCaret = mod$3.$getAdjacentSiblingOrParentSiblingCaret;
const $getCaretInDirection = mod$3.$getCaretInDirection;
const $getCaretRange = mod$3.$getCaretRange;
const $getCaretRangeInDirection = mod$3.$getCaretRangeInDirection;
const $getCharacterOffsets = mod$3.$getCharacterOffsets;
const $getChildCaret = mod$3.$getChildCaret;
const $getChildCaretAtIndex = mod$3.$getChildCaretAtIndex;
const $getChildCaretOrSelf = mod$3.$getChildCaretOrSelf;
const $getCollapsedCaretRange = mod$3.$getCollapsedCaretRange;
const $getCommonAncestor = mod$3.$getCommonAncestor;
const $getCommonAncestorResultBranchOrder = mod$3.$getCommonAncestorResultBranchOrder;
const $getEditor = mod$3.$getEditor;
const $getNearestNodeFromDOMNode = mod$3.$getNearestNodeFromDOMNode;
const $getNearestRootOrShadowRoot = mod$3.$getNearestRootOrShadowRoot;
const $getNodeByKey = mod$3.$getNodeByKey;
const $getNodeByKeyOrThrow = mod$3.$getNodeByKeyOrThrow;
const $getNodeFromDOMNode = mod$3.$getNodeFromDOMNode;
const $getPreviousSelection = mod$3.$getPreviousSelection;
const $getRoot = mod$3.$getRoot;
const $getSelection = mod$3.$getSelection;
const $getSiblingCaret = mod$3.$getSiblingCaret;
const $getState = mod$3.$getState;
const $getStateChange = mod$3.$getStateChange;
const $getTextContent = mod$3.$getTextContent;
const $getTextNodeOffset = mod$3.$getTextNodeOffset;
const $getTextPointCaret = mod$3.$getTextPointCaret;
const $getTextPointCaretSlice = mod$3.$getTextPointCaretSlice;
const $getWritableNodeState = mod$3.$getWritableNodeState;
const $hasAncestor = mod$3.$hasAncestor;
const $hasUpdateTag = mod$3.$hasUpdateTag;
const $insertNodes = mod$3.$insertNodes;
const $isBlockElementNode = mod$3.$isBlockElementNode;
const $isChildCaret = mod$3.$isChildCaret;
const $isDecoratorNode = mod$3.$isDecoratorNode;
const $isEditorState = mod$3.$isEditorState;
const $isElementNode = mod$3.$isElementNode;
const $isExtendableTextPointCaret = mod$3.$isExtendableTextPointCaret;
const $isInlineElementOrDecoratorNode = mod$3.$isInlineElementOrDecoratorNode;
const $isLeafNode = mod$3.$isLeafNode;
const $isLineBreakNode = mod$3.$isLineBreakNode;
const $isNodeCaret = mod$3.$isNodeCaret;
const $isNodeSelection = mod$3.$isNodeSelection;
const $isParagraphNode = mod$3.$isParagraphNode;
const $isRangeSelection = mod$3.$isRangeSelection;
const $isRootNode = mod$3.$isRootNode;
const $isRootOrShadowRoot = mod$3.$isRootOrShadowRoot;
const $isSiblingCaret = mod$3.$isSiblingCaret;
const $isTabNode = mod$3.$isTabNode;
const $isTextNode = mod$3.$isTextNode;
const $isTextPointCaret = mod$3.$isTextPointCaret;
const $isTextPointCaretSlice = mod$3.$isTextPointCaretSlice;
const $isTokenOrSegmented = mod$3.$isTokenOrSegmented;
const $isTokenOrTab = mod$3.$isTokenOrTab;
const $nodesOfType = mod$3.$nodesOfType;
const $normalizeCaret = mod$3.$normalizeCaret;
const $normalizeSelection__EXPERIMENTAL = mod$3.$normalizeSelection__EXPERIMENTAL;
const $onUpdate = mod$3.$onUpdate;
const $parseSerializedNode = mod$3.$parseSerializedNode;
const $removeTextFromCaretRange = mod$3.$removeTextFromCaretRange;
const $rewindSiblingCaret = mod$3.$rewindSiblingCaret;
const $selectAll$1 = mod$3.$selectAll;
const $setCompositionKey = mod$3.$setCompositionKey;
const $setPointFromCaret = mod$3.$setPointFromCaret;
const $setSelection = mod$3.$setSelection;
const $setSelectionFromCaretRange = mod$3.$setSelectionFromCaretRange;
const $setState = mod$3.$setState;
const $splitAtPointCaretNext = mod$3.$splitAtPointCaretNext;
const $splitNode = mod$3.$splitNode;
const $updateRangeSelectionFromCaretRange = mod$3.$updateRangeSelectionFromCaretRange;
const ArtificialNode__DO_NOT_USE = mod$3.ArtificialNode__DO_NOT_USE;
const BLUR_COMMAND = mod$3.BLUR_COMMAND;
const CAN_REDO_COMMAND = mod$3.CAN_REDO_COMMAND;
const CAN_UNDO_COMMAND = mod$3.CAN_UNDO_COMMAND;
const CLEAR_EDITOR_COMMAND = mod$3.CLEAR_EDITOR_COMMAND;
const CLEAR_HISTORY_COMMAND = mod$3.CLEAR_HISTORY_COMMAND;
const CLICK_COMMAND = mod$3.CLICK_COMMAND;
const COLLABORATION_TAG = mod$3.COLLABORATION_TAG;
const COMMAND_PRIORITY_CRITICAL = mod$3.COMMAND_PRIORITY_CRITICAL;
const COMMAND_PRIORITY_EDITOR = mod$3.COMMAND_PRIORITY_EDITOR;
const COMMAND_PRIORITY_HIGH = mod$3.COMMAND_PRIORITY_HIGH;
const COMMAND_PRIORITY_LOW = mod$3.COMMAND_PRIORITY_LOW;
const COMMAND_PRIORITY_NORMAL = mod$3.COMMAND_PRIORITY_NORMAL;
const CONTROLLED_TEXT_INSERTION_COMMAND = mod$3.CONTROLLED_TEXT_INSERTION_COMMAND;
const COPY_COMMAND = mod$3.COPY_COMMAND;
const CUT_COMMAND = mod$3.CUT_COMMAND;
const DELETE_CHARACTER_COMMAND = mod$3.DELETE_CHARACTER_COMMAND;
const DELETE_LINE_COMMAND = mod$3.DELETE_LINE_COMMAND;
const DELETE_WORD_COMMAND = mod$3.DELETE_WORD_COMMAND;
const DRAGEND_COMMAND = mod$3.DRAGEND_COMMAND;
const DRAGOVER_COMMAND = mod$3.DRAGOVER_COMMAND;
const DRAGSTART_COMMAND = mod$3.DRAGSTART_COMMAND;
const DROP_COMMAND = mod$3.DROP_COMMAND;
const DecoratorNode = mod$3.DecoratorNode;
const ElementNode = mod$3.ElementNode;
const FOCUS_COMMAND = mod$3.FOCUS_COMMAND;
const FORMAT_ELEMENT_COMMAND = mod$3.FORMAT_ELEMENT_COMMAND;
const FORMAT_TEXT_COMMAND = mod$3.FORMAT_TEXT_COMMAND;
const HISTORIC_TAG = mod$3.HISTORIC_TAG;
const HISTORY_MERGE_TAG = mod$3.HISTORY_MERGE_TAG;
const HISTORY_PUSH_TAG = mod$3.HISTORY_PUSH_TAG;
const INDENT_CONTENT_COMMAND = mod$3.INDENT_CONTENT_COMMAND;
const INSERT_LINE_BREAK_COMMAND = mod$3.INSERT_LINE_BREAK_COMMAND;
const INSERT_PARAGRAPH_COMMAND = mod$3.INSERT_PARAGRAPH_COMMAND;
const INSERT_TAB_COMMAND = mod$3.INSERT_TAB_COMMAND;
const INTERNAL_$isBlock = mod$3.INTERNAL_$isBlock;
const IS_ALL_FORMATTING = mod$3.IS_ALL_FORMATTING;
const IS_BOLD = mod$3.IS_BOLD;
const IS_CODE = mod$3.IS_CODE;
const IS_HIGHLIGHT = mod$3.IS_HIGHLIGHT;
const IS_ITALIC = mod$3.IS_ITALIC;
const IS_STRIKETHROUGH = mod$3.IS_STRIKETHROUGH;
const IS_SUBSCRIPT = mod$3.IS_SUBSCRIPT;
const IS_SUPERSCRIPT = mod$3.IS_SUPERSCRIPT;
const IS_UNDERLINE = mod$3.IS_UNDERLINE;
const KEY_ARROW_DOWN_COMMAND = mod$3.KEY_ARROW_DOWN_COMMAND;
const KEY_ARROW_LEFT_COMMAND = mod$3.KEY_ARROW_LEFT_COMMAND;
const KEY_ARROW_RIGHT_COMMAND = mod$3.KEY_ARROW_RIGHT_COMMAND;
const KEY_ARROW_UP_COMMAND = mod$3.KEY_ARROW_UP_COMMAND;
const KEY_BACKSPACE_COMMAND = mod$3.KEY_BACKSPACE_COMMAND;
const KEY_DELETE_COMMAND = mod$3.KEY_DELETE_COMMAND;
const KEY_DOWN_COMMAND = mod$3.KEY_DOWN_COMMAND;
const KEY_ENTER_COMMAND = mod$3.KEY_ENTER_COMMAND;
const KEY_ESCAPE_COMMAND = mod$3.KEY_ESCAPE_COMMAND;
const KEY_MODIFIER_COMMAND = mod$3.KEY_MODIFIER_COMMAND;
const KEY_SPACE_COMMAND = mod$3.KEY_SPACE_COMMAND;
const KEY_TAB_COMMAND = mod$3.KEY_TAB_COMMAND;
const LineBreakNode = mod$3.LineBreakNode;
const MOVE_TO_END = mod$3.MOVE_TO_END;
const MOVE_TO_START = mod$3.MOVE_TO_START;
const NODE_STATE_KEY = mod$3.NODE_STATE_KEY;
const OUTDENT_CONTENT_COMMAND = mod$3.OUTDENT_CONTENT_COMMAND;
const PASTE_COMMAND = mod$3.PASTE_COMMAND;
const PASTE_TAG = mod$3.PASTE_TAG;
const ParagraphNode = mod$3.ParagraphNode;
const REDO_COMMAND = mod$3.REDO_COMMAND;
const REMOVE_TEXT_COMMAND = mod$3.REMOVE_TEXT_COMMAND;
const RootNode = mod$3.RootNode;
const SELECTION_CHANGE_COMMAND = mod$3.SELECTION_CHANGE_COMMAND;
const SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = mod$3.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND;
const SELECT_ALL_COMMAND = mod$3.SELECT_ALL_COMMAND;
const SKIP_COLLAB_TAG = mod$3.SKIP_COLLAB_TAG;
const SKIP_DOM_SELECTION_TAG = mod$3.SKIP_DOM_SELECTION_TAG;
const SKIP_SCROLL_INTO_VIEW_TAG = mod$3.SKIP_SCROLL_INTO_VIEW_TAG;
const SKIP_SELECTION_FOCUS_TAG = mod$3.SKIP_SELECTION_FOCUS_TAG;
const TEXT_TYPE_TO_FORMAT = mod$3.TEXT_TYPE_TO_FORMAT;
const TabNode = mod$3.TabNode;
const TextNode = mod$3.TextNode;
const UNDO_COMMAND = mod$3.UNDO_COMMAND;
const buildImportMap = mod$3.buildImportMap;
const configExtension = mod$3.configExtension;
const createCommand = mod$3.createCommand;
const createEditor = mod$3.createEditor;
const createSharedNodeState = mod$3.createSharedNodeState;
const createState = mod$3.createState;
const declarePeerDependency = mod$3.declarePeerDependency;
const defineExtension = mod$3.defineExtension;
const flipDirection = mod$3.flipDirection;
const getDOMOwnerDocument = mod$3.getDOMOwnerDocument;
const getDOMSelection = mod$3.getDOMSelection;
const getDOMSelectionFromTarget = mod$3.getDOMSelectionFromTarget;
const getDOMTextNode$1 = mod$3.getDOMTextNode;
const getEditorPropertyFromDOMNode = mod$3.getEditorPropertyFromDOMNode;
const getNearestEditorFromDOMNode = mod$3.getNearestEditorFromDOMNode;
const getRegisteredNode = mod$3.getRegisteredNode;
const getRegisteredNodeOrThrow = mod$3.getRegisteredNodeOrThrow;
const getStaticNodeConfig = mod$3.getStaticNodeConfig;
const getTextDirection = mod$3.getTextDirection;
const getTransformSetFromKlass = mod$3.getTransformSetFromKlass;
const isBlockDomNode = mod$3.isBlockDomNode;
const isCurrentlyReadOnlyMode = mod$3.isCurrentlyReadOnlyMode;
const isDOMDocumentNode = mod$3.isDOMDocumentNode;
const isDOMNode = mod$3.isDOMNode;
const isDOMTextNode = mod$3.isDOMTextNode;
const isDOMUnmanaged = mod$3.isDOMUnmanaged;
const isDocumentFragment = mod$3.isDocumentFragment;
const isExactShortcutMatch = mod$3.isExactShortcutMatch;
const isHTMLAnchorElement = mod$3.isHTMLAnchorElement;
const isHTMLElement = mod$3.isHTMLElement;
const isInlineDomNode = mod$3.isInlineDomNode;
const isLexicalEditor = mod$3.isLexicalEditor;
const isModifierMatch = mod$3.isModifierMatch;
const isSelectionCapturedInDecoratorInput = mod$3.isSelectionCapturedInDecoratorInput;
const isSelectionWithinEditor = mod$3.isSelectionWithinEditor;
const makeStepwiseIterator = mod$3.makeStepwiseIterator;
const removeFromParent = mod$3.removeFromParent;
const resetRandomKey = mod$3.resetRandomKey;
const safeCast = mod$3.safeCast;
const setDOMUnmanaged = mod$3.setDOMUnmanaged;
const setNodeIndentFromDOM = mod$3.setNodeIndentFromDOM;
const shallowMergeConfig = mod$3.shallowMergeConfig;

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
const setIfUndefined = (map$1, key, createT) => {
	let set = map$1.get(key);
	if (set === void 0) map$1.set(key, set = createT());
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
const isArray$1 = Array.isArray;

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
		const _f = (...args$1) => {
			this.off(name, _f);
			f(...args$1);
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
	emit(name, args$1) {
		return from((this._observers.get(name) || create$5()).values()).forEach((f) => f(...args$1));
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
		return from((this._observers.get(name) || create$5()).values()).forEach((f) => f(...args$1));
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
const isNaN$1 = Number.isNaN;
/**
* @param {number} n
* @return {boolean} Wether n is negative. This function also differentiates between -0 and +0
*/
const isNegativeZero = (n) => n !== 0 ? n < 0 : 1 / n < 0;

//#endregion
//#region node_modules/lib0/binary.js
/**
* Binary data constants.
*
* @module binary
*/
/**
* n-th bit activated.
*
* @type {number}
*/
const BIT1 = 1;
const BIT2 = 2;
const BIT3 = 4;
const BIT4 = 8;
const BIT6 = 32;
const BIT7 = 64;
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
const BITS5 = 31;
const BITS6 = 63;
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
* @return {Uint8Array} The created ArrayBuffer.
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
	while (num > BITS7) {
		write(encoder, BIT8 | BITS7 & num);
		num = floor(num / 128);
	}
	write(encoder, BITS7 & num);
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
	write(encoder, (num > BITS6 ? BIT8 : 0) | (isNegative ? BIT7 : 0) | BITS6 & num);
	num = floor(num / 64);
	while (num > 0) {
		write(encoder, (num > BITS7 ? BIT8 : 0) | BITS7 & num);
		num = floor(num / 128);
	}
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
* @param {undefined|null|number|bigint|boolean|string|Object<string,any>|Array<any>|Uint8Array} data
*/
const writeAny = (encoder, data) => {
	switch (typeof data) {
		case "string":
			write(encoder, 119);
			writeVarString(encoder, data);
			break;
		case "number":
			if (isInteger(data) && abs(data) <= BITS31) {
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
			else if (isArray$1(data)) {
				write(encoder, 117);
				writeVarUint(encoder, data.length);
				for (let i = 0; i < data.length; i++) writeAny(encoder, data[i]);
			} else if (data instanceof Uint8Array) {
				write(encoder, 116);
				writeVarUint8Array(encoder, data);
			} else {
				write(encoder, 118);
				const keys$1 = Object.keys(data);
				writeVarUint(encoder, keys$1.length);
				for (let i = 0; i < keys$1.length; i++) {
					const key = keys$1[i];
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
	let num = r & BITS6;
	let mult = 64;
	const sign = (r & BIT7) > 0 ? -1 : 1;
	if ((r & BIT8) === 0) return sign * num;
	const len = decoder.arr.length;
	while (decoder.pos < len) {
		r = decoder.arr[decoder.pos++];
		num = num + (r & BITS7) * mult;
		mult *= 128;
		if (r < BIT8) return sign * num;
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

//#endregion
//#region node_modules/lib0/webcrypto.js
const subtle = crypto.subtle;
const getRandomValues = crypto.getRandomValues.bind(crypto);

//#endregion
//#region node_modules/lib0/random.js
const uint32 = () => getRandomValues(new Uint32Array(1))[0];
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
/**
* `Promise.all` wait for all promises in the array to resolve and return the result
* @template {unknown[] | []} PS
*
* @param {PS} ps
* @return {Promise<{ -readonly [P in keyof PS]: Awaited<PS[P]> }>}
*/
const all = Promise.all.bind(Promise);

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
//#region node_modules/lib0/object.js
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
* @deprecated use object.size instead
* @param {Object<string,any>} obj
* @return {number}
*/
const length$1 = (obj) => keys(obj).length;
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
const equalFlat = (a, b) => a === b || size(a) === size(b) && every(a, (val, key) => (val !== void 0 || hasProperty(b, key)) && b[key] === val);
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
/**
* Calls all functions in `fs` with args. Only throws after all functions were called.
*
* @param {Array<function>} fs
* @param {Array<any>} args
*/
const callAll = (fs, args$1, i = 0) => {
	try {
		for (; i < fs.length; i++) fs[i](...args$1);
	} finally {
		if (i < fs.length) callAll(fs, args$1, i + 1);
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
			if (length$1(a) !== length$1(b)) return false;
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
const toBase64 = isBrowser ? toBase64Browser : toBase64Node;
/* c8 ignore next */
const fromBase64 = isBrowser ? fromBase64Browser : fromBase64Node;
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
//#region node_modules/lib0/dom.js
/* c8 ignore start */
/**
* @type {Document}
*/
const doc = typeof document !== "undefined" ? document : {};
const domParser = typeof DOMParser !== "undefined" ? new DOMParser() : null;
/**
* @param {Map<string,string>} m
* @return {string}
*/
const mapToStyleString = (m) => map(m, (value, key) => `${key}:${value};`).join("");
const ELEMENT_NODE = doc.ELEMENT_NODE;
const TEXT_NODE = doc.TEXT_NODE;
const CDATA_SECTION_NODE = doc.CDATA_SECTION_NODE;
const COMMENT_NODE = doc.COMMENT_NODE;
const DOCUMENT_NODE = doc.DOCUMENT_NODE;
const DOCUMENT_TYPE_NODE = doc.DOCUMENT_TYPE_NODE;
const DOCUMENT_FRAGMENT_NODE = doc.DOCUMENT_FRAGMENT_NODE;
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
const computeNoColorLoggingArgs = (args$1) => {
	if (args$1.length === 1 && args$1[0]?.constructor === Function) args$1 = args$1[0]();
	const strBuilder = [];
	const logArgs = [];
	let i = 0;
	for (; i < args$1.length; i++) {
		const arg = args$1[i];
		if (arg === void 0) break;
		else if (arg.constructor === String || arg.constructor === Number) strBuilder.push(arg);
		else if (arg.constructor === Object) break;
	}
	if (i > 0) logArgs.push(strBuilder.join(""));
	for (; i < args$1.length; i++) {
		const arg = args$1[i];
		if (!(arg instanceof Symbol)) logArgs.push(arg);
	}
	return logArgs;
};
let lastLoggingTime = getUnixTime();
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
const computeBrowserLoggingArgs = (args$1) => {
	if (args$1.length === 1 && args$1[0]?.constructor === Function) args$1 = args$1[0]();
	const strBuilder = [];
	const styles = [];
	const currentStyle = create$5();
	/**
	* @type {Array<string|Object|number>}
	*/
	let logArgs = [];
	let i = 0;
	for (; i < args$1.length; i++) {
		const arg = args$1[i];
		const style = _browserStyleMap[arg];
		if (style !== void 0) currentStyle.set(style.left, style.right);
		else {
			if (arg === void 0) break;
			if (arg.constructor === String || arg.constructor === Number) {
				const style$1 = mapToStyleString(currentStyle);
				if (i > 0 || style$1.length > 0) {
					strBuilder.push("%c" + arg);
					styles.push(style$1);
				} else strBuilder.push(arg);
			} else break;
		}
	}
	if (i > 0) {
		logArgs = styles;
		logArgs.unshift(strBuilder.join(""));
	}
	for (; i < args$1.length; i++) {
		const arg = args$1[i];
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
const print = (...args$1) => {
	console.log(...computeLoggingArgs(args$1));
	/* c8 ignore next */
	vconsoles.forEach((vc) => vc.print(args$1));
};
/* c8 ignore start */
/**
* @param {Array<string|Symbol|Object|number>} args
*/
const warn = (...args$1) => {
	console.warn(...computeLoggingArgs(args$1));
	args$1.unshift(ORANGE);
	vconsoles.forEach((vc) => vc.print(args$1));
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
const isDeleted = (ds, id$1) => {
	const dis = ds.clients.get(id$1.client);
	return dis !== void 0 && findIndexDS(dis, id$1.clock) !== null;
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
			if (left.clock + left.len >= right.clock) left.len = max(left.len, right.clock + right.len - left.clock);
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
const addToDeleteSet = (ds, client, clock, length$2) => {
	setIfUndefined(ds.clients, client, () => []).push(new DeleteItem(clock, length$2));
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
			for (let i$1 = 0; i$1 < numberOfDeletes; i$1++) dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
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
		for (let i$1 = 0; i$1 < numberOfDeletes; i$1++) {
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
		return new Set(from(this.subdocs).map((doc$1) => doc$1.guid));
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
		const doc$1 = {};
		this.share.forEach((value, key) => {
			doc$1[key] = value.toJSON();
		});
		return doc$1;
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
					const doc$1 = content.doc;
					if (!item.deleted) transaction.subdocsAdded.add(doc$1);
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
	writeLeftID(id$1) {
		writeVarUint(this.restEncoder, id$1.client);
		writeVarUint(this.restEncoder, id$1.clock);
	}
	/**
	* @param {ID} id
	*/
	writeRightID(id$1) {
		writeVarUint(this.restEncoder, id$1.client);
		writeVarUint(this.restEncoder, id$1.clock);
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
	writeAny(any$1) {
		writeAny(this.restEncoder, any$1);
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
	writeLeftID(id$1) {
		this.clientEncoder.write(id$1.client);
		this.leftClockEncoder.write(id$1.clock);
	}
	/**
	* @param {ID} id
	*/
	writeRightID(id$1) {
		this.clientEncoder.write(id$1.client);
		this.rightClockEncoder.write(id$1.clock);
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
	writeAny(any$1) {
		writeAny(this.restEncoder, any$1);
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
const readClientsStructRefs = (decoder, doc$1) => {
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
		for (let i$1 = 0; i$1 < numberOfStructs; i$1++) {
			const info = decoder.readInfo();
			switch (BITS5 & info) {
				case 0: {
					const len = decoder.readLen();
					refs[i$1] = new GC(createID(client, clock), len);
					clock += len;
					break;
				}
				case 10: {
					const len = readVarUint(decoder.restDecoder);
					refs[i$1] = new Skip(createID(client, clock), len);
					clock += len;
					break;
				}
				default: {
					/**
					* The optimized implementation doesn't use any variables because inlining variables is faster.
					* Below a non-optimized version is shown that implements the basic algorithm with
					* a few comments
					*/
					const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
					const struct = new Item(createID(client, clock), null, (info & BIT8) === BIT8 ? decoder.readLeftID() : null, null, (info & BIT7) === BIT7 ? decoder.readRightID() : null, cantCopyParentInfo ? decoder.readParentInfo() ? doc$1.get(decoder.readString()) : decoder.readLeftID() : null, cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null, readItemContent(decoder, info));
					refs[i$1] = struct;
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
	const doc$1 = transaction.doc;
	const store = doc$1.store;
	const restStructs = integrateStructs(transaction, store, readClientsStructRefs(structDecoder, doc$1));
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
const writeStateAsUpdate = (encoder, doc$1, targetStateVector = /* @__PURE__ */ new Map()) => {
	writeClientsStructs(encoder, doc$1.store, targetStateVector);
	writeDeleteSet(encoder, createDeleteSetFromStructStore(doc$1.store));
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
const encodeStateAsUpdateV2 = (doc$1, encodedTargetStateVector = new Uint8Array([0]), encoder = new UpdateEncoderV2()) => {
	writeStateAsUpdate(encoder, doc$1, decodeStateVector(encodedTargetStateVector));
	const updates = [encoder.toUint8Array()];
	if (doc$1.store.pendingDs) updates.push(doc$1.store.pendingDs);
	if (doc$1.store.pendingStructs) updates.push(diffUpdateV2(doc$1.store.pendingStructs.update, encodedTargetStateVector));
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
const encodeStateAsUpdate = (doc$1, encodedTargetStateVector) => encodeStateAsUpdateV2(doc$1, encodedTargetStateVector, new UpdateEncoderV1());
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
const writeDocumentStateVector = (encoder, doc$1) => writeStateVector(encoder, getStateVector(doc$1.store));
/**
* Encode State as Uint8Array.
*
* @param {Doc|Map<number,number>} doc
* @param {DSEncoderV1 | DSEncoderV2} [encoder]
* @return {Uint8Array}
*
* @function
*/
const encodeStateVectorV2 = (doc$1, encoder = new DSEncoderV2()) => {
	if (doc$1 instanceof Map) writeStateVector(encoder, doc$1);
	else writeDocumentStateVector(encoder, doc$1);
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
const encodeStateVector = (doc$1) => encodeStateVectorV2(doc$1, new DSEncoderV1());
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
	constructor(doc$1, storeType = doc$1.getMap("users")) {
		/**
		* @type {Map<string,DeleteSet>}
		*/
		const dss = /* @__PURE__ */ new Map();
		this.yusers = storeType;
		this.doc = doc$1;
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
	setUserMapping(doc$1, clientid, userDescription, { filter = () => true } = {}) {
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
					this.clients.forEach((_userDescription, clientid$1) => {
						if (userDescription === _userDescription) user.get("ids").push([clientid$1]);
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
		doc$1.on(
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
	getUserByDeletedId(id$1) {
		for (const [userDescription, ds] of this.dss.entries()) if (isDeleted(ds, id$1)) return userDescription;
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
const getItemWithOffset = (store, id$1) => {
	const item = getItem(store, id$1);
	return {
		item,
		diff: id$1.clock - item.id.clock
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
const createAbsolutePositionFromRelativePosition = (rpos, doc$1, followUndoneDeletions = true) => {
	const store = doc$1.store;
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
		if (tname !== null) type = doc$1.get(tname);
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
const snapshot = (doc$1) => createSnapshot(createDeleteSetFromStructStore(doc$1.store), getStateVector(doc$1.store));
/**
* @param {Item} item
* @param {Snapshot|undefined} snapshot
*
* @protected
* @function
*/
const isVisible = (item, snapshot$1) => snapshot$1 === void 0 ? !item.deleted : snapshot$1.sv.has(item.id.client) && (snapshot$1.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot$1.ds, item.id);
/**
* @param {Transaction} transaction
* @param {Snapshot} snapshot
*/
const splitSnapshotAffectedStructs = (transaction, snapshot$1) => {
	const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create$4);
	const store = transaction.doc.store;
	if (!meta.has(snapshot$1)) {
		snapshot$1.sv.forEach((clock, client) => {
			if (clock < getState(store, client)) getItemCleanStart(transaction, createID(client, clock));
		});
		iterateDeletedStructs(transaction, snapshot$1.ds, (_item) => {});
		meta.add(snapshot$1);
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
const find = (store, id$1) => {
	/**
	* @type {Array<GC|Item>}
	*/
	const structs = store.clients.get(id$1.client);
	return structs[findIndexSS(structs, id$1.clock)];
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
const getItemCleanStart = (transaction, id$1) => {
	const structs = transaction.doc.store.clients.get(id$1.client);
	return structs[findIndexCleanStart(transaction, structs, id$1.clock)];
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
const getItemCleanEnd = (transaction, store, id$1) => {
	/**
	* @type {Array<Item>}
	*/
	const structs = store.clients.get(id$1.client);
	const index = findIndexSS(structs, id$1.clock);
	const struct = structs[index];
	if (id$1.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) structs.splice(index + 1, 0, splitItem(transaction, struct, id$1.clock - struct.id.clock + 1));
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
	constructor(doc$1, origin, local) {
		/**
		* The Yjs instance.
		* @type {Doc}
		*/
		this.doc = doc$1;
		/**
		* Describes the set of deleted items by ids
		* @type {DeleteSet}
		*/
		this.deleteSet = new DeleteSet();
		/**
		* Holds the state before the transaction started.
		* @type {Map<Number,Number>}
		*/
		this.beforeState = getStateVector(doc$1.store);
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
				const struct$1 = structs[si];
				if (deleteItem.clock + deleteItem.len <= struct$1.id.clock) break;
				if (struct$1 instanceof Item && struct$1.deleted && !struct$1.keep && gcFilter(struct$1)) struct$1.gc(store, false);
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
		const doc$1 = transaction.doc;
		const store = doc$1.store;
		const ds = transaction.deleteSet;
		const mergeStructs = transaction._mergeStructs;
		try {
			sortAndMergeDeleteSet(ds);
			transaction.afterState = getStateVector(transaction.doc.store);
			doc$1.emit("beforeObserverCalls", [transaction, doc$1]);
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
						callEventHandlerListeners(type._dEH, events, transaction);
					}
				});
			});
			fs.push(() => doc$1.emit("afterTransaction", [transaction, doc$1]));
			callAll(fs, []);
			if (transaction._needFormattingCleanup) cleanupYTextAfterTransaction(transaction);
		} finally {
			if (doc$1.gc) tryGcDeleteSet(ds, store, doc$1.gcFilter);
			tryMergeDeleteSet(ds, store);
			transaction.afterState.forEach((clock, client) => {
				const beforeClock = transaction.beforeState.get(client) || 0;
				if (beforeClock !== clock) {
					const structs = store.clients.get(client);
					const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
					for (let i$1 = structs.length - 1; i$1 >= firstChangePos;) i$1 -= 1 + tryToMergeWithLefts(structs, i$1);
				}
			});
			for (let i$1 = mergeStructs.length - 1; i$1 >= 0; i$1--) {
				const { client, clock } = mergeStructs[i$1].id;
				const structs = store.clients.get(client);
				const replacedStructPos = findIndexSS(structs, clock);
				if (replacedStructPos + 1 < structs.length) {
					if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) continue;
				}
				if (replacedStructPos > 0) tryToMergeWithLefts(structs, replacedStructPos);
			}
			if (!transaction.local && transaction.afterState.get(doc$1.clientID) !== transaction.beforeState.get(doc$1.clientID)) {
				print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
				doc$1.clientID = generateNewClientId();
			}
			doc$1.emit("afterTransactionCleanup", [transaction, doc$1]);
			if (doc$1._observers.has("update")) {
				const encoder = new UpdateEncoderV1();
				if (writeUpdateMessageFromTransaction(encoder, transaction)) doc$1.emit("update", [
					encoder.toUint8Array(),
					transaction.origin,
					doc$1,
					transaction
				]);
			}
			if (doc$1._observers.has("updateV2")) {
				const encoder = new UpdateEncoderV2();
				if (writeUpdateMessageFromTransaction(encoder, transaction)) doc$1.emit("updateV2", [
					encoder.toUint8Array(),
					transaction.origin,
					doc$1,
					transaction
				]);
			}
			const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
			if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
				subdocsAdded.forEach((subdoc) => {
					subdoc.clientID = doc$1.clientID;
					if (subdoc.collectionid == null) subdoc.collectionid = doc$1.collectionid;
					doc$1.subdocs.add(subdoc);
				});
				subdocsRemoved.forEach((subdoc) => doc$1.subdocs.delete(subdoc));
				doc$1.emit("subdocs", [
					{
						loaded: subdocsLoaded,
						added: subdocsAdded,
						removed: subdocsRemoved
					},
					doc$1,
					transaction
				]);
				subdocsRemoved.forEach((subdoc) => subdoc.destroy());
			}
			if (transactionCleanups.length <= i + 1) {
				doc$1._transactionCleanups = [];
				doc$1.emit("afterAllTransactions", [doc$1, transactionCleanups]);
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
const transact = (doc$1, f, origin = null, local = true) => {
	const transactionCleanups = doc$1._transactionCleanups;
	let initialCall = false;
	/**
	* @type {any}
	*/
	let result = null;
	if (doc$1._transaction === null) {
		initialCall = true;
		doc$1._transaction = new Transaction(doc$1, origin, local);
		transactionCleanups.push(doc$1._transaction);
		if (transactionCleanups.length === 1) doc$1.emit("beforeAllTransactions", [doc$1]);
		doc$1.emit("beforeTransaction", [doc$1._transaction, doc$1]);
	}
	try {
		result = f(doc$1._transaction);
	} finally {
		if (initialCall) {
			const finishCleanup = doc$1._transaction === transactionCleanups[0];
			doc$1._transaction = null;
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
	const doc$1 = undoManager.doc;
	const scope = undoManager.scope;
	transact(doc$1, (transaction) => {
		while (stack.length > 0 && undoManager.currStackItem === null) {
			const store = doc$1.store;
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
	constructor(typeScope, { captureTimeout = 500, captureTransaction = (_tr) => true, deleteFilter = () => true, trackedOrigins = new Set([null]), ignoreRemoteMapChanges = false, doc: doc$1 = isArray$1(typeScope) ? typeScope[0].doc : typeScope instanceof Doc ? typeScope : typeScope.doc } = {}) {
		super();
		/**
		* @type {Array<AbstractType<any> | Doc>}
		*/
		this.scope = [];
		this.doc = doc$1;
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
			const now$2 = getUnixTime();
			let didAdd = false;
			if (this.lastChange > 0 && now$2 - this.lastChange < this.captureTimeout && stack.length > 0 && !undoing && !redoing) {
				const lastOp = stack[stack.length - 1];
				lastOp.deletions = mergeDeleteSets([lastOp.deletions, transaction.deleteSet]);
				lastOp.insertions = mergeDeleteSets([lastOp.insertions, insertions]);
			} else {
				stack.push(new StackItem(transaction.deleteSet, insertions));
				didAdd = true;
			}
			if (!undoing && !redoing) this.lastChange = now$2;
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
		ytypes = isArray$1(ytypes) ? ytypes : [ytypes];
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
		for (let i$1 = 0; i$1 < numberOfStructs; i$1++) {
			const info = decoder.readInfo();
			if (info === 10) {
				const len = readVarUint(decoder.restDecoder);
				yield new Skip(createID(client, clock), len);
				clock += len;
			} else if ((BITS5 & info) !== 0) {
				const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
				const struct = new Item(createID(client, clock), null, (info & BIT8) === BIT8 ? decoder.readLeftID() : null, null, (info & BIT7) === BIT7 ? decoder.readRightID() : null, cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null, cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null, readItemContent(decoder, info));
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
	writeDeleteSet(updateEncoder, mergeDeleteSets(updateDecoders.map((decoder) => readDeleteSet(decoder))));
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
	writeDeleteSet(encoder, readDeleteSet(decoder));
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
	writeDeleteSet(updateEncoder, readDeleteSet(updateDecoder));
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
		* @type {null | Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
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
	* @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
	*/
	get keys() {
		if (this._keys === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw create$3(errorComputeChanges);
			const keys$1 = /* @__PURE__ */ new Map();
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
					keys$1.set(key, {
						action,
						oldValue
					});
				}
			});
			this._keys = keys$1;
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
const typeListToArraySnapshot = (type, snapshot$1) => {
	const cs = [];
	let n = type._start;
	while (n !== null) {
		if (n.countable && isVisible(n, snapshot$1)) {
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
	const doc$1 = transaction.doc;
	const ownClientId = doc$1.clientID;
	const store = doc$1.store;
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
const typeListDelete = (transaction, parent, index, length$2) => {
	if (length$2 === 0) return;
	const startIndex = index;
	const startLength = length$2;
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
	while (length$2 > 0 && n !== null) {
		if (!n.deleted) {
			if (length$2 < n.length) getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length$2));
			n.delete(transaction);
			length$2 -= n.length;
		}
		n = n.right;
	}
	if (length$2 > 0) throw lengthExceeded();
	if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, startIndex, -startLength + length$2);
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
	const doc$1 = transaction.doc;
	const ownClientId = doc$1.clientID;
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
	new Item(createID(ownClientId, getState(doc$1.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
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
const typeMapGetAllSnapshot = (parent, snapshot$1) => {
	/**
	* @type {Object<string,any>}
	*/
	const res = {};
	parent._map.forEach((value, key) => {
		/**
		* @type {Item|null}
		*/
		let v = value;
		while (v !== null && (!snapshot$1.sv.has(v.id.client) || v.id.clock >= (snapshot$1.sv.get(v.id.client) || 0))) v = v.left;
		if (v !== null && isVisible(v, snapshot$1)) res[key] = v.content.getContent()[v.length - 1];
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
	delete(index, length$2 = 1) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeListDelete(transaction, this, index, length$2);
		});
		else
 /** @type {Array<any>} */ this._prelimContent.splice(index, length$2);
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
		const map$1 = new YMap();
		this.forEach((value, key) => {
			map$1.set(key, value instanceof AbstractType ? value.clone() : value);
		});
		return map$1;
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
		const map$1 = {};
		this._map.forEach((item, key) => {
			if (!item.deleted) {
				const v = item.content.getContent()[item.length - 1];
				map$1[key] = v instanceof AbstractType ? v.toJSON() : v;
			}
		});
		return map$1;
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
			this.forEach(function(_value, key, map$1) {
				typeMapDelete(transaction, map$1, key);
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
			default:
				if (!this.right.deleted) this.index += this.right.length;
				break;
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
			default:
				if (!pos.right.deleted) {
					if (count < pos.right.length) getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
					pos.index += pos.right.length;
					count -= pos.right.length;
				}
				break;
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
	if (marker) return findNextPosition(transaction, new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes), index - marker.index);
	else return findNextPosition(transaction, new ItemTextListPosition(null, parent._start, 0, currentAttributes), index);
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
	const doc$1 = transaction.doc;
	const ownClientId = doc$1.clientID;
	negatedAttributes.forEach((val, key) => {
		const left = currPos.left;
		const right = currPos.right;
		const nextFormat = new Item(createID(ownClientId, getState(doc$1.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
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
	const doc$1 = transaction.doc;
	const ownClientId = doc$1.clientID;
	const negatedAttributes = /* @__PURE__ */ new Map();
	for (const key in attributes) {
		const val = attributes[key];
		const currentVal = currPos.currentAttributes.get(key) ?? null;
		if (!equalAttrs$1(currentVal, val)) {
			negatedAttributes.set(key, currentVal);
			const { left, right } = currPos;
			currPos.right = new Item(createID(ownClientId, getState(doc$1.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
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
	const doc$1 = transaction.doc;
	const ownClientId = doc$1.clientID;
	minimizeAttributeChanges(currPos, attributes);
	const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
	const content = text.constructor === String ? new ContentString(text) : text instanceof AbstractType ? new ContentType(text) : new ContentEmbed(text);
	let { left, right, index } = currPos;
	if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
	right = new Item(createID(ownClientId, getState(doc$1.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
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
const formatText = (transaction, parent, currPos, length$2, attributes) => {
	const doc$1 = transaction.doc;
	const ownClientId = doc$1.clientID;
	minimizeAttributeChanges(currPos, attributes);
	const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
	iterationLoop: while (currPos.right !== null && (length$2 > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
		if (!currPos.right.deleted) switch (currPos.right.content.constructor) {
			case ContentFormat: {
				const { key, value } = currPos.right.content;
				const attr = attributes[key];
				if (attr !== void 0) {
					if (equalAttrs$1(attr, value)) negatedAttributes.delete(key);
					else {
						if (length$2 === 0) break iterationLoop;
						negatedAttributes.set(key, value);
					}
					currPos.right.delete(transaction);
				} else currPos.currentAttributes.set(key, value);
				break;
			}
			default:
				if (length$2 < currPos.right.length) getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length$2));
				length$2 -= currPos.right.length;
				break;
		}
		currPos.forward();
	}
	if (length$2 > 0) {
		let newlines = "";
		for (; length$2 > 0; length$2--) newlines += "\n";
		currPos.right = new Item(createID(ownClientId, getState(doc$1.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
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
					break;
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
	const doc$1 = transaction.doc;
	for (const [client, afterClock] of transaction.afterState.entries()) {
		const clock = transaction.beforeState.get(client) || 0;
		if (afterClock === clock) continue;
		iterateStructs(transaction, doc$1.store.clients.get(client), clock, afterClock, (item) => {
			if (!item.deleted && item.content.constructor === ContentFormat && item.constructor !== GC) needFullCleanup.add(
				/** @type {any} */
				item.parent
			);
		});
	}
	transact(doc$1, (t) => {
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
const deleteText = (transaction, currPos, length$2) => {
	const startLength = length$2;
	const startAttrs = copy(currPos.currentAttributes);
	const start = currPos.right;
	while (length$2 > 0 && currPos.right !== null) {
		if (currPos.right.deleted === false) switch (currPos.right.content.constructor) {
			case ContentType:
			case ContentEmbed:
			case ContentString:
				if (length$2 < currPos.right.length) getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length$2));
				length$2 -= currPos.right.length;
				currPos.right.delete(transaction);
				break;
		}
		currPos.forward();
	}
	if (start) cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
	const parent = (currPos.left || currPos.right).parent;
	if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length$2);
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
		if (this._changes === null) this._changes = {
			keys: this.keys,
			delta: this.delta,
			added: /* @__PURE__ */ new Set(),
			deleted: /* @__PURE__ */ new Set()
		};
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
								break;
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
									if (!equalAttrs$1(currentAttributes.get(key) ?? null, value)) {
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
	toDelta(snapshot$1, prevSnapshot, computeYChange) {
		this.doc ?? warnPrematureAccess();
		/**
		* @type{Array<any>}
		*/
		const ops = [];
		const currentAttributes = /* @__PURE__ */ new Map();
		const doc$1 = this.doc;
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
				if (isVisible(n, snapshot$1) || prevSnapshot !== void 0 && isVisible(n, prevSnapshot)) switch (n.content.constructor) {
					case ContentString: {
						const cur = currentAttributes.get("ychange");
						if (snapshot$1 !== void 0 && !isVisible(n, snapshot$1)) {
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
					case ContentFormat:
						if (isVisible(n, snapshot$1)) {
							packStr();
							updateCurrentAttributes(currentAttributes, n.content);
						}
						break;
				}
				n = n.right;
			}
			packStr();
		};
		if (snapshot$1 || prevSnapshot) transact(doc$1, (transaction) => {
			if (snapshot$1) splitSnapshotAffectedStructs(transaction, snapshot$1);
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
	delete(index, length$2) {
		if (length$2 === 0) return;
		const y = this.doc;
		if (y !== null) transact(y, (transaction) => {
			deleteText(transaction, findPosition(transaction, this, index, true), length$2);
		});
		else
 /** @type {Array<function>} */ this._pending.push(() => this.delete(index, length$2));
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
	format(index, length$2, attributes) {
		if (length$2 === 0) return;
		const y = this.doc;
		if (y !== null) transact(y, (transaction) => {
			const pos = findPosition(transaction, this, index, false);
			if (pos.right === null) return;
			formatText(transaction, this, pos, length$2, attributes);
		});
		else
 /** @type {Array<function>} */ this._pending.push(() => this.format(index, length$2, attributes));
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
			value: n.content.type,
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
	delete(index, length$2 = 1) {
		if (this.doc !== null) transact(this.doc, (transaction) => {
			typeListDelete(transaction, this, index, length$2);
		});
		else this._prelimContent.splice(index, length$2);
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
			if (typeof value === "string") el.setAttribute(key, value);
		});
		el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
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
		const keys$1 = [];
		for (const key in attrs) keys$1.push(key);
		keys$1.sort();
		const keysLen = keys$1.length;
		for (let i = 0; i < keysLen; i++) {
			const key = keys$1[i];
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
	getAttributes(snapshot$1) {
		return snapshot$1 ? typeMapGetAllSnapshot(this, snapshot$1) : typeMapGetAll(this);
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
	constructor(id$1, length$2) {
		this.id = id$1;
		this.length = length$2;
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
	constructor(doc$1) {
		if (doc$1._item) console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
		/**
		* @type {Doc}
		*/
		this.doc = doc$1;
		/**
		* @type {any}
		*/
		const opts = {};
		this.opts = opts;
		if (!doc$1.gc) opts.gc = false;
		if (doc$1.autoLoad) opts.autoLoad = true;
		if (doc$1.meta !== null) opts.meta = doc$1.meta;
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
		this.type._map.forEach((item$1) => {
			if (!item$1.deleted) item$1.delete(transaction);
			else if (item$1.id.clock < (transaction.beforeState.get(item$1.id.client) || 0)) transaction._mergeStructs.push(item$1);
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
			(item$1) => {
				while (item$1 !== null) {
					item$1.gc(store, true);
					item$1 = item$1.left;
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
const followRedone = (store, id$1) => {
	/**
	* @type {ID|null}
	*/
	let nextID = id$1;
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
const isDeletedByUndoStack = (stack, id$1) => some(
	stack,
	/** @param {StackItem} s */
	(s) => isDeleted(s.deletions, id$1)
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
	const doc$1 = transaction.doc;
	const store = doc$1.store;
	const ownClientID = doc$1.clientID;
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
	const parentType = parentItem === null ? item.parent : parentItem.content.type;
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
	}
	const nextId = createID(ownClientID, getState(store, ownClientID));
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
	constructor(id$1, left, origin, right, rightOrigin, parent, parentSub, content) {
		super(id$1, content.getLength());
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
		this.info = this.content.isCountable() ? BIT2 : 0;
	}
	/**
	* This is used to mark the item as an indexed fast-search marker
	*
	* @type {boolean}
	*/
	set marker(isMarked) {
		if ((this.info & BIT4) > 0 !== isMarked) this.info ^= BIT4;
	}
	get marker() {
		return (this.info & BIT4) > 0;
	}
	/**
	* If true, do not garbage collect this Item.
	*/
	get keep() {
		return (this.info & BIT1) > 0;
	}
	set keep(doKeep) {
		if (this.keep !== doKeep) this.info ^= BIT1;
	}
	get countable() {
		return (this.info & BIT2) > 0;
	}
	/**
	* Whether this item was deleted or not.
	* @type {Boolean}
	*/
	get deleted() {
		return (this.info & BIT3) > 0;
	}
	set deleted(doDelete) {
		if (this.deleted !== doDelete) this.info ^= BIT3;
	}
	markDeleted() {
		this.info |= BIT3;
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
				this.right = this.left.right;
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
		const info = this.content.getRef() & BITS5 | (origin === null ? 0 : BIT8) | (rightOrigin === null ? 0 : BIT7) | (parentSub === null ? 0 : BIT6);
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
const readItemContent = (decoder, info) => contentRefs[info & BITS5](decoder);
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
//#region node_modules/@lexical/offset/LexicalOffset.dev.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var LexicalOffset_dev_exports = /* @__PURE__ */ __export({
	$createChildrenArray: () => $createChildrenArray$1,
	$createOffsetView: () => $createOffsetView$1,
	OffsetView: () => OffsetView$1,
	createChildrenArray: () => createChildrenArray$1
});
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
function formatDevErrorMessage$2(message) {
	throw new Error(message);
}
var OffsetView$1 = class {
	_offsetMap;
	_firstNode;
	_blockOffsetSize;
	constructor(offsetMap, firstNode, blockOffsetSize = 1) {
		this._offsetMap = offsetMap;
		this._firstNode = firstNode;
		this._blockOffsetSize = blockOffsetSize;
	}
	createSelectionFromOffsets(originalStart, originalEnd, diffOffsetView) {
		const firstNode = this._firstNode;
		if (firstNode === null) return null;
		let start = originalStart;
		let end = originalEnd;
		let startOffsetNode = $searchForNodeWithOffset(firstNode, start, this._blockOffsetSize);
		let endOffsetNode = $searchForNodeWithOffset(firstNode, end, this._blockOffsetSize);
		if (diffOffsetView !== void 0) {
			start = $getAdjustedOffsetFromDiff(start, startOffsetNode, diffOffsetView, this, this._blockOffsetSize);
			startOffsetNode = $searchForNodeWithOffset(firstNode, start, this._blockOffsetSize);
			end = $getAdjustedOffsetFromDiff(end, endOffsetNode, diffOffsetView, this, this._blockOffsetSize);
			endOffsetNode = $searchForNodeWithOffset(firstNode, end, this._blockOffsetSize);
		}
		if (startOffsetNode === null || endOffsetNode === null) return null;
		let startKey = startOffsetNode.key;
		let endKey = endOffsetNode.key;
		const startNode = $getNodeByKey(startKey);
		const endNode = $getNodeByKey(endKey);
		if (startNode === null || endNode === null) return null;
		let startOffset = 0;
		let endOffset = 0;
		let startType = "element";
		let endType = "element";
		if (startOffsetNode.type === "text") {
			startOffset = start - startOffsetNode.start;
			startType = "text";
			const sibling = startNode.getNextSibling();
			if (start !== end && startOffset === startNode.getTextContentSize() && $isTextNode(sibling)) {
				startOffset = 0;
				startKey = sibling.__key;
			}
		} else if (startOffsetNode.type === "inline") {
			startKey = startNode.getParentOrThrow().getKey();
			startOffset = end > startOffsetNode.start ? startOffsetNode.end : startOffsetNode.start;
		}
		if (endOffsetNode.type === "text") {
			endOffset = end - endOffsetNode.start;
			endType = "text";
		} else if (endOffsetNode.type === "inline") {
			endKey = endNode.getParentOrThrow().getKey();
			endOffset = end > endOffsetNode.start ? endOffsetNode.end : endOffsetNode.start;
		}
		const selection = $createRangeSelection();
		if (selection === null) return null;
		selection.anchor.set(startKey, startOffset, startType);
		selection.focus.set(endKey, endOffset, endType);
		return selection;
	}
	getOffsetsFromSelection(selection) {
		const anchor = selection.anchor;
		const focus = selection.focus;
		const offsetMap = this._offsetMap;
		const anchorOffset = anchor.offset;
		const focusOffset = focus.offset;
		let start = -1;
		let end = -1;
		if (anchor.type === "text") {
			const offsetNode = offsetMap.get(anchor.key);
			if (offsetNode !== void 0) start = offsetNode.start + anchorOffset;
		} else {
			const node = anchor.getNode().getDescendantByIndex(anchorOffset);
			if (node !== null) {
				const offsetNode = offsetMap.get(node.getKey());
				if (offsetNode !== void 0) start = node.getIndexWithinParent() !== anchorOffset ? offsetNode.end : offsetNode.start;
			}
		}
		if (focus.type === "text") {
			const offsetNode = offsetMap.get(focus.key);
			if (offsetNode !== void 0) end = offsetNode.start + focus.offset;
		} else {
			const node = focus.getNode().getDescendantByIndex(focusOffset);
			if (node !== null) {
				const offsetNode = offsetMap.get(node.getKey());
				if (offsetNode !== void 0) end = node.getIndexWithinParent() !== focusOffset ? offsetNode.end : offsetNode.start;
			}
		}
		return [start, end];
	}
};
function $getAdjustedOffsetFromDiff(offset, offsetNode, prevOffsetView, offsetView, blockOffsetSize) {
	const prevOffsetMap = prevOffsetView._offsetMap;
	const offsetMap = offsetView._offsetMap;
	const visited = /* @__PURE__ */ new Set();
	let adjustedOffset = offset;
	let currentNode = offsetNode;
	while (currentNode !== null) {
		const key = currentNode.key;
		const prevNode = prevOffsetMap.get(key);
		const diff = currentNode.end - currentNode.start;
		visited.add(key);
		if (prevNode === void 0) adjustedOffset += diff;
		else {
			const prevDiff = prevNode.end - prevNode.start;
			if (prevDiff !== diff) adjustedOffset += diff - prevDiff;
		}
		const sibling = currentNode.prev;
		if (sibling !== null) {
			currentNode = sibling;
			continue;
		}
		let parent = currentNode.parent;
		while (parent !== null) {
			let parentSibling = parent.prev;
			if (parentSibling !== null) {
				const parentSiblingKey = parentSibling.key;
				const prevParentSibling = prevOffsetMap.get(parentSiblingKey);
				const parentDiff = parentSibling.end - parentSibling.start;
				visited.add(parentSiblingKey);
				if (prevParentSibling === void 0) adjustedOffset += parentDiff;
				else {
					const prevParentDiff = prevParentSibling.end - prevParentSibling.start;
					if (prevParentDiff !== parentDiff) adjustedOffset += parentDiff - prevParentDiff;
				}
				parentSibling = parentSibling.prev;
			}
			parent = parent.parent;
		}
		break;
	}
	const prevFirstNode = prevOffsetView._firstNode;
	if (prevFirstNode !== null) {
		currentNode = $searchForNodeWithOffset(prevFirstNode, offset, blockOffsetSize);
		let alreadyVisitedParentOfCurrentNode = false;
		while (currentNode !== null) {
			if (!visited.has(currentNode.key)) {
				alreadyVisitedParentOfCurrentNode = true;
				break;
			}
			currentNode = currentNode.parent;
		}
		if (!alreadyVisitedParentOfCurrentNode) while (currentNode !== null) {
			const key = currentNode.key;
			if (!visited.has(key)) {
				const node = offsetMap.get(key);
				const prevDiff = currentNode.end - currentNode.start;
				if (node === void 0) adjustedOffset -= prevDiff;
				else {
					const diff = node.end - node.start;
					if (prevDiff !== diff) adjustedOffset += diff - prevDiff;
				}
			}
			currentNode = currentNode.prev;
		}
	}
	return adjustedOffset;
}
function $searchForNodeWithOffset(firstNode, offset, blockOffsetSize) {
	let currentNode = firstNode;
	while (currentNode !== null) {
		if (offset < currentNode.end + (currentNode.type !== "element" || blockOffsetSize === 0 ? 1 : 0)) {
			const child = currentNode.child;
			if (child !== null) {
				currentNode = child;
				continue;
			}
			return currentNode;
		}
		const sibling = currentNode.next;
		if (sibling === null) break;
		currentNode = sibling;
	}
	return null;
}
function $createInternalOffsetNode(child, type, start, end, key, parent) {
	return {
		child,
		end,
		key,
		next: null,
		parent,
		prev: null,
		start,
		type
	};
}
function $createOffsetNode(state, key, parent, nodeMap, offsetMap, blockOffsetSize) {
	const node = nodeMap.get(key);
	if (node === void 0) formatDevErrorMessage$2(`createOffsetModel: could not find node by key`);
	const start = state.offset;
	if ($isElementNode(node)) {
		const childKeys = $createChildrenArray$1(node, nodeMap);
		const blockIsEmpty = childKeys.length === 0;
		const child = blockIsEmpty ? null : $createOffsetChild(state, childKeys, null, nodeMap, offsetMap, blockOffsetSize);
		if (!state.prevIsBlock || blockIsEmpty) {
			state.prevIsBlock = true;
			state.offset += blockOffsetSize;
		}
		const offsetNode$1 = $createInternalOffsetNode(child, "element", start, start, key, parent);
		if (child !== null) child.parent = offsetNode$1;
		offsetNode$1.end = state.offset;
		offsetMap.set(key, offsetNode$1);
		return offsetNode$1;
	}
	state.prevIsBlock = false;
	const isText = $isTextNode(node);
	const length$2 = isText ? node.__text.length : 1;
	const end = state.offset += length$2;
	const offsetNode = $createInternalOffsetNode(null, isText ? "text" : "inline", start, end, key, parent);
	offsetMap.set(key, offsetNode);
	return offsetNode;
}
function $createOffsetChild(state, children, parent, nodeMap, offsetMap, blockOffsetSize) {
	let firstNode = null;
	let currentNode = null;
	const childrenLength = children.length;
	for (let i = 0; i < childrenLength; i++) {
		const childKey = children[i];
		const offsetNode = $createOffsetNode(state, childKey, parent, nodeMap, offsetMap, blockOffsetSize);
		if (currentNode === null) firstNode = offsetNode;
		else {
			offsetNode.prev = currentNode;
			currentNode.next = offsetNode;
		}
		currentNode = offsetNode;
	}
	return firstNode;
}
function $createChildrenArray$1(element, nodeMap) {
	const children = [];
	let nodeKey = element.__first;
	while (nodeKey !== null) {
		const node = nodeMap === null ? $getNodeByKey(nodeKey) : nodeMap.get(nodeKey);
		if (node === null || node === void 0) formatDevErrorMessage$2(`$createChildrenArray: node does not exist in nodeMap`);
		children.push(nodeKey);
		nodeKey = node.__next;
	}
	return children;
}
/** @deprecated renamed to {@link $createChildrenArray} by @lexical/eslint-plugin rules-of-lexical */
const createChildrenArray$1 = $createChildrenArray$1;
function $createOffsetView$1(editor, blockOffsetSize = 1, editorState) {
	const nodeMap = (editorState || editor._pendingEditorState || editor._editorState)._nodeMap;
	const root = nodeMap.get("root");
	const offsetMap = /* @__PURE__ */ new Map();
	return new OffsetView$1(offsetMap, $createOffsetChild({
		offset: 0,
		prevIsBlock: false
	}, $createChildrenArray$1(root, nodeMap), null, nodeMap, offsetMap, blockOffsetSize), blockOffsetSize);
}

//#endregion
//#region node_modules/@lexical/offset/LexicalOffset.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
const mod$2 = LexicalOffset_dev_exports;
const $createChildrenArray = mod$2.$createChildrenArray;
const $createOffsetView = mod$2.$createOffsetView;
const OffsetView = mod$2.OffsetView;
const createChildrenArray = mod$2.createChildrenArray;

//#endregion
//#region node_modules/@lexical/selection/LexicalSelection.dev.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var LexicalSelection_dev_exports = /* @__PURE__ */ __export({
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
	getStyleObjectFromCSS: () => getStyleObjectFromCSS$1,
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
const CSS_TO_STYLES = /* @__PURE__ */ new Map();
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
* Creates an object containing all the styles and their values provided in the CSS string.
* @param css - The CSS string of styles and their values.
* @returns The styleObject containing all the styles and their values.
*/
function getStyleObjectFromRawCSS(css) {
	const styleObject = {};
	if (!css) return styleObject;
	const styles = css.split(";");
	for (const style of styles) if (style !== "") {
		const [key, value] = style.split(/:([^]+)/);
		if (key && value) styleObject[key.trim()] = value.trim();
	}
	return styleObject;
}
/**
* Given a CSS string, returns an object from the style cache.
* @param css - The CSS property as a string.
* @returns The value of the given CSS property.
*/
function getStyleObjectFromCSS$1(css) {
	let value = CSS_TO_STYLES.get(css);
	if (value === void 0) {
		value = getStyleObjectFromRawCSS(css);
		CSS_TO_STYLES.set(css, value);
	}
	Object.freeze(value);
	return value;
}
/**
* Gets the CSS styles from the style object.
* @param styles - The style object containing the styles to get.
* @returns A string containing the CSS styles and their values.
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
* Gets the TextNode's style object and adds the styles to the CSS.
* @param node - The TextNode to add styles to.
*/
function $addNodeStyle$1(node) {
	const CSSText = node.getStyle();
	const styles = getStyleObjectFromRawCSS(CSSText);
	CSS_TO_STYLES.set(CSSText, styles);
}
/**
* Applies the provided styles to the given TextNode, ElementNode, or
* collapsed RangeSelection.
*
* @param target - The TextNode, ElementNode, or collapsed RangeSelection to apply the styles to
* @param patch - The patch to apply, which can include multiple styles. \\{CSSProperty: value\\} . Can also accept a function that returns the new property value.
*/
function $patchStyle(target, patch) {
	if (!($isRangeSelection(target) ? target.isCollapsed() : $isTextNode(target) || $isElementNode(target))) formatDevErrorMessage$1(`$patchStyle must only be called with a TextNode, ElementNode, or collapsed RangeSelection`);
	const prevStyles = getStyleObjectFromCSS$1($isRangeSelection(target) ? target.style : $isTextNode(target) ? target.getStyle() : target.getTextStyle());
	const newStyles = Object.entries(patch).reduce((styles, [key, value]) => {
		if (typeof value === "function") styles[key] = value(prevStyles[key], target);
		else if (value === null) delete styles[key];
		else styles[key] = value;
		return styles;
	}, { ...prevStyles });
	const newCSSText = getCSSFromStyleObject$1(newStyles);
	if ($isRangeSelection(target) || $isTextNode(target)) target.setStyle(newCSSText);
	else target.setTextStyle(newCSSText);
	CSS_TO_STYLES.set(newCSSText, newStyles);
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
	const styleObject = getStyleObjectFromCSS$1(node.getStyle());
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
	const endOffset = isBackward ? focus.offset : anchor.offset;
	const endNode = isBackward ? focus.getNode() : anchor.getNode();
	if ($isRangeSelection(selection) && selection.isCollapsed() && selection.style !== "") {
		const css = selection.style;
		const styleObject = getStyleObjectFromCSS$1(css);
		if (styleObject !== null && styleProperty in styleObject) return styleObject[styleProperty];
	}
	for (let i = 0; i < nodes.length; i++) {
		const node = nodes[i];
		if (i !== 0 && endOffset === 0 && node.is(endNode)) continue;
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
const $addNodeStyle = mod$1.$addNodeStyle;
const $cloneWithProperties = mod$1.$cloneWithProperties;
const $copyBlockFormatIndent = mod$1.$copyBlockFormatIndent;
const $ensureForwardRangeSelection = mod$1.$ensureForwardRangeSelection;
const $forEachSelectedTextNode = mod$1.$forEachSelectedTextNode;
const $getComputedStyleForElement = mod$1.$getComputedStyleForElement;
const $getComputedStyleForParent = mod$1.$getComputedStyleForParent;
const $getSelectionStyleValueForProperty = mod$1.$getSelectionStyleValueForProperty;
const $isAtNodeEnd = mod$1.$isAtNodeEnd;
const $isParentElementRTL = mod$1.$isParentElementRTL;
const $isParentRTL = mod$1.$isParentRTL;
const $moveCaretSelection = mod$1.$moveCaretSelection;
const $moveCharacter = mod$1.$moveCharacter;
const $patchStyleText = mod$1.$patchStyleText;
const $selectAll = mod$1.$selectAll;
const $setBlocksType = mod$1.$setBlocksType;
const $shouldOverrideDefaultCharacterSelection = mod$1.$shouldOverrideDefaultCharacterSelection;
const $sliceSelectedTextNodeContent = mod$1.$sliceSelectedTextNodeContent;
const $trimTextContentFromAnchor = mod$1.$trimTextContentFromAnchor;
const $wrapNodes = mod$1.$wrapNodes;
const createDOMRange = mod$1.createDOMRange;
const createRectsFromDOMRange = mod$1.createRectsFromDOMRange;
const getCSSFromStyleObject = mod$1.getCSSFromStyleObject;
const getStyleObjectFromCSS = mod$1.getStyleObjectFromCSS;
const trimTextContentFromAnchor = mod$1.trimTextContentFromAnchor;

//#endregion
//#region node_modules/@lexical/yjs/LexicalYjs.dev.mjs
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
var LexicalYjs_dev_exports = /* @__PURE__ */ __export({
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
	constructor(map$1, parent) {
		this._key = "";
		this._map = map$1;
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
function $createCollabLineBreakNode(map$1, parent) {
	const collabNode = new CollabLineBreakNode(map$1, parent);
	map$1._collabNode = collabNode;
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
	constructor(map$1, text, parent, type) {
		this._key = "";
		this._map = map$1;
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
function $createCollabTextNode(map$1, text, parent, type) {
	const collabNode = new CollabTextNode(map$1, text, parent, type);
	map$1._collabNode = collabNode;
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
					const { node, nodeIndex, offset, length: length$2 } = getPositionFromElementAndOffset(this, currIndex, false);
					if (node instanceof CollabElementNode || node instanceof CollabLineBreakNode || node instanceof CollabDecoratorNode) {
						children.splice(nodeIndex, 1);
						deletionSize -= 1;
					} else if (node instanceof CollabTextNode) {
						const delCount = Math.min(deletionSize, length$2);
						const prevCollabNode = nodeIndex !== 0 ? children[nodeIndex - 1] : null;
						const nodeSize = node.getSize();
						if (offset === 0 && length$2 === nodeSize) {
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
				const { node, nodeIndex, length: length$2 } = getPositionFromElementAndOffset(this, currIndex, false);
				const collabNode = $getOrInitCollabNodeFromSharedType(binding, sharedType, this);
				if (node instanceof CollabTextNode && length$2 > 0 && length$2 < node._text.length) {
					const text = node._text;
					const splitIdx = text.length - length$2;
					node._text = spliceString(text, splitIdx, length$2, "");
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
						const childKey$1 = collabChildren[s]._key;
						if (childKey$1 !== "") collabKeys.add(childKey$1);
					}
				}
				if (collabLexicalChildNode !== null && lexicalChildKey !== void 0 && !collabKeys.has(lexicalChildKey)) {
					removeFromParent($getNodeByKeyOrThrow(lexicalChildKey));
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
			const map$1 = collabNode._map;
			if (map$1.parent === null) xmlText.insertEmbed(offset, map$1);
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
			const map$1 = collabNode._map;
			if (map$1.parent === null) xmlText.insertEmbed(offset, map$1);
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
		const isArray$2 = node instanceof Array;
		this.delete(sharedType);
		const nodes = isArray$2 ? node : [node];
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
			if (!isArray$2) formatDevErrorMessage(`Text nodes must be mapped as an array`);
			if (node.length === 0) return;
			this._sharedTypeToNodeKeys.set(sharedType, node.map((n) => n.getKey()));
			for (const n of node) {
				this._nodeMap.set(n.getKey(), n);
				this._nodeKeyToSharedType.set(n.getKey(), sharedType);
			}
		} else {
			if (!!isArray$2) formatDevErrorMessage(`Element nodes must be mapped as a single node`);
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
function createBaseBinding(editor, id$1, doc$1, docMap, excludedProperties) {
	if (!(doc$1 !== void 0 && doc$1 !== null)) formatDevErrorMessage(`createBinding: doc is null or undefined`);
	const binding = {
		clientID: doc$1.clientID,
		cursors: /* @__PURE__ */ new Map(),
		cursorsContainer: null,
		doc: doc$1,
		docMap,
		editor,
		excludedProperties: excludedProperties || /* @__PURE__ */ new Map(),
		id: id$1,
		nodeProperties: /* @__PURE__ */ new Map()
	};
	initializeNodeProperties(binding);
	return binding;
}
function createBinding$1(editor, provider, id$1, doc$1, docMap, excludedProperties) {
	if (!(doc$1 !== void 0 && doc$1 !== null)) formatDevErrorMessage(`createBinding: doc is null or undefined`);
	const root = $createCollabElementNode(doc$1.get("root", YXmlText), null, "root");
	root._key = "root";
	return {
		...createBaseBinding(editor, id$1, doc$1, docMap, excludedProperties),
		collabNodeMap: /* @__PURE__ */ new Map(),
		root
	};
}
function createBindingV2__EXPERIMENTAL$1(editor, id$1, doc$1, docMap, options = {}) {
	if (!(doc$1 !== void 0 && doc$1 !== null)) formatDevErrorMessage(`createBinding: doc is null or undefined`);
	const { excludedProperties, rootName = "root-v2" } = options;
	return {
		...createBaseBinding(editor, id$1, doc$1, docMap, excludedProperties),
		mapping: new CollabV2Mapping(),
		root: doc$1.get(rootName, YXmlElement)
	};
}
function isBindingV1(binding) {
	return Object.hasOwn(binding, "collabNodeMap");
}
const baseExcludedProperties = new Set([
	"__key",
	"__parent",
	"__next",
	"__prev",
	"__state"
]);
const elementExcludedProperties = new Set([
	"__first",
	"__last",
	"__size"
]);
const rootExcludedProperties = new Set(["__cachedText"]);
const textExcludedProperties = new Set(["__text"]);
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
		const map$1 = new YMap();
		map$1.set("__type", "linebreak");
		collabNode = $createCollabLineBreakNode(map$1, parent);
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
	const existingState = sharedTypeGet(sharedType, "__state");
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
				const doc$1 = prevDoc || new Doc();
				const key = doc$1.guid;
				nextValue._key = key;
				yjsDocMap.set(key, doc$1);
				nextValue = doc$1;
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
		const size$1 = child.getSize();
		index += size$1;
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
const $createOrUpdateNodeFromYElement = (el, binding, keysChanged, childListChanged, snapshot$1, prevSnapshot, computeYChange) => {
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
		const $createChildren$1 = (childType) => {
			if (childType instanceof YXmlElement) {
				const n = $createOrUpdateNodeFromYElement(childType, binding, /* @__PURE__ */ new Set(), false, snapshot$1, prevSnapshot, computeYChange);
				if (n !== null) children.push(n);
			} else if (childType instanceof YXmlText) {
				const ns = $createOrUpdateTextNodesFromYText(childType, binding, snapshot$1, prevSnapshot, computeYChange);
				if (ns !== null) ns.forEach((textchild) => {
					if (textchild !== null) children.push(textchild);
				});
			} else formatDevErrorMessage(`XmlHook is not supported`);
		};
		if (snapshot$1 === void 0 || prevSnapshot === void 0) el.toArray().forEach($createChildren$1);
		else typeListToArraySnapshot(el, new Snapshot(prevSnapshot.ds, snapshot$1.sv)).filter((childType) => !childType._item.deleted || isItemVisible(childType._item, snapshot$1) || isItemVisible(childType._item, prevSnapshot)).forEach($createChildren$1);
		$spliceChildren(node, children);
	}
	const attrs = el.getAttributes(snapshot$1);
	if (!isRootElement(el) && snapshot$1 !== void 0) {
		if (!isItemVisible(el._item, snapshot$1)) attrs[stateKeyToAttrKey("ychange")] = computeYChange ? computeYChange("removed", el._item.id) : { type: "removed" };
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
const isItemVisible = (item, snapshot$1) => snapshot$1 === void 0 ? !item.deleted : snapshot$1.sv.has(item.id.client) && snapshot$1.sv.get(item.id.client) > item.id.clock && !isDeleted(snapshot$1.ds, item.id);
const $createOrUpdateTextNodesFromYText = (text, binding, snapshot$1, prevSnapshot, computeYChange) => {
	const deltas = toDelta(text, snapshot$1, prevSnapshot, computeYChange);
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
	const keys$1 = Object.keys(pattrs).filter((key) => pattrs[key] !== null);
	if (yattrs == null) return keys$1.length === 0;
	let eq = keys$1.length === Object.keys(yattrs).filter((key) => yattrs[key] !== null).length;
	for (let i = 0; i < keys$1.length && eq; i++) {
		const key = keys$1[i];
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
const toDelta = (ytext, snapshot$1, prevSnapshot, computeYChange) => {
	return ytext.toDelta(snapshot$1, prevSnapshot, computeYChange).map((delta) => {
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
			if (yDomAttrs[key] !== lexicalAttrs[key] && key !== "ychange") yDomFragment.setAttribute(key, lexicalAttrs[key]);
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
	const { doc: doc$1 } = binding;
	if (!!doc$1.gc) formatDevErrorMessage(`GC must be disabled to render snapshot`);
	doc$1.transact((transaction) => {
		const pud = new PermanentUserData(doc$1);
		if (pud) pud.dss.forEach((ds) => {
			iterateDeletedStructs(transaction, ds, (_item) => {});
		});
		const computeYChange = (type, id$1) => {
			return {
				id: id$1,
				type,
				user: (type === "added" ? pud.getUserByClientId(id$1.client) : pud.getUserByDeletedId(id$1)) ?? null
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
function createCursorSelection(cursor, anchorKey, anchorOffset, focusKey, focusOffset) {
	const color = cursor.color;
	const caret = document.createElement("span");
	caret.style.cssText = `position:absolute;top:0;bottom:0;right:-1px;width:1px;background-color:${color};z-index:10;`;
	const name = document.createElement("span");
	name.textContent = cursor.name;
	name.style.cssText = `position:absolute;left:-2px;top:-16px;background-color:${color};color:#fff;line-height:12px;font-size:12px;padding:2px;font-family:Arial;font-weight:bold;white-space:nowrap;`;
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
function updateCursor(binding, cursor, nextSelection, nodeMap) {
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
			selection.appendChild(selectionBg);
			cursorsContainer.appendChild(selection);
		}
		const style = `position:absolute;top:${selectionRect.top - containerRect.top}px;left:${selectionRect.left - containerRect.left}px;height:${selectionRect.height}px;width:${selectionRect.width}px;pointer-events:none;z-index:5;`;
		selection.style.cssText = style;
		selection.firstChild.style.cssText = `${style}left:0;top:0;background-color:${color};opacity:0.3;`;
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
		const [anchorCollabNode, anchorOffset$1] = getCollabNodeAndOffset(anchorAbsPos.type, anchorAbsPos.index);
		const [focusCollabNode, focusOffset$1] = getCollabNodeAndOffset(focusAbsPos.type, focusAbsPos.index);
		return {
			anchorKey: anchorCollabNode !== null ? anchorCollabNode.getKey() : null,
			anchorOffset: anchorOffset$1,
			focusKey: focusCollabNode !== null ? focusCollabNode.getKey() : null,
			focusOffset: focusOffset$1
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
					if (selection === null) selection = createCursorSelection(cursor, anchorKey, anchorOffset, focusKey, focusOffset);
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
			updateCursor(binding, cursor, selection, nodeMap);
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
	return new UndoManager(root, { trackedOrigins: new Set([binding, null]) });
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
const $getYChangeState = mod.$getYChangeState;
const CLEAR_DIFF_VERSIONS_COMMAND__EXPERIMENTAL = mod.CLEAR_DIFF_VERSIONS_COMMAND__EXPERIMENTAL;
const CONNECTED_COMMAND = mod.CONNECTED_COMMAND;
const DIFF_VERSIONS_COMMAND__EXPERIMENTAL = mod.DIFF_VERSIONS_COMMAND__EXPERIMENTAL;
const TOGGLE_CONNECT_COMMAND = mod.TOGGLE_CONNECT_COMMAND;
const createBinding = mod.createBinding;
const createBindingV2__EXPERIMENTAL = mod.createBindingV2__EXPERIMENTAL;
const createUndoManager = mod.createUndoManager;
const getAnchorAndFocusCollabNodesForUserState = mod.getAnchorAndFocusCollabNodesForUserState;
const initLocalState = mod.initLocalState;
const renderSnapshot__EXPERIMENTAL = mod.renderSnapshot__EXPERIMENTAL;
const setLocalStateFocus = mod.setLocalStateFocus;
const syncCursorPositions = mod.syncCursorPositions;
const syncLexicalUpdateToYjs = mod.syncLexicalUpdateToYjs;
const syncLexicalUpdateToYjsV2__EXPERIMENTAL = mod.syncLexicalUpdateToYjsV2__EXPERIMENTAL;
const syncYjsChangesToLexical = mod.syncYjsChangesToLexical;
const syncYjsChangesToLexicalV2__EXPERIMENTAL = mod.syncYjsChangesToLexicalV2__EXPERIMENTAL;
const syncYjsStateToLexicalV2__EXPERIMENTAL = mod.syncYjsStateToLexicalV2__EXPERIMENTAL;

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
	constructor(doc$1) {
		super();
		this.doc = doc$1;
		/**
		* @type {number}
		*/
		this.clientID = doc$1.clientID;
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
			const now$2 = getUnixTime();
			if (this.getLocalState() !== null && outdatedTimeout / 2 <= now$2 - this.meta.get(this.clientID).lastUpdated) this.setLocalState(this.getLocalState());
			/**
			* @type {Array<number>}
			*/
			const remove = [];
			this.meta.forEach((meta, clientid) => {
				if (clientid !== this.clientID && outdatedTimeout <= now$2 - meta.lastUpdated && this.states.has(clientid)) remove.push(clientid);
			});
			if (remove.length > 0) removeAwarenessStates(this, remove, "timeout");
		}, floor(outdatedTimeout / 10));
		doc$1.on("destroy", () => {
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
//#region node_modules/nanoevents/index.js
let createNanoEvents = () => ({
	emit(event, ...args$1) {
		for (let callbacks = this.events[event] || [], i = 0, length$2 = callbacks.length; i < length$2; i++) callbacks[i](...args$1);
	},
	events: {},
	on(event, cb) {
		(this.events[event] ||= []).push(cb);
		return () => {
			this.events[event] = this.events[event]?.filter((i) => cb !== i);
		};
	}
});

//#endregion
//#region node_modules/@anycable/core/protocol/index.js
var ReasonError = class extends Error {
	constructor(msg, reason) {
		if (msg instanceof Error) {
			super(msg.message);
			this.cause = msg;
		} else super(msg);
		this.reason = reason;
		this.name = "ReasonError";
	}
};
var SubscriptionRejectedError = class extends ReasonError {
	constructor(reason) {
		super("Rejected", reason);
		this.name = "SubscriptionRejectedError";
	}
};
var SubscriptionTimeoutError = class extends ReasonError {
	constructor(msg) {
		super(msg || "Timed out to receive subscription ack");
		this.name = "SubscriptionTimeoutError";
	}
};
var DisconnectedError = class extends ReasonError {
	constructor(error, reason) {
		if (reason) super(error, reason);
		else super("Disconnected", error);
		this.name = "DisconnectedError";
	}
};
var StaleConnectionError = class extends DisconnectedError {
	constructor(msg) {
		super(msg, "stale_connection");
		this.name = "StaleConnectionError";
	}
};

//#endregion
//#region node_modules/@anycable/core/stringify-params/index.js
function stringifyParams(params$1) {
	if (!params$1) return "";
	return `{${Object.keys(params$1).sort().filter((k) => params$1[k] !== void 0).map((k) => {
		let v = JSON.stringify(params$1[k]);
		return `${JSON.stringify(k)}:${v}`;
	}).join(",")}}`;
}

//#endregion
//#region node_modules/@anycable/core/channel/presence.js
var Presence = class {
	constructor(channel) {
		this.channel = channel;
		this.listeners = [];
	}
	watch() {
		this.listeners.push(this.channel.on("presence", (msg) => {
			if (msg.type === "info") {
				if (!this._state) this._state = this.stateFromInfo(msg);
				return;
			}
			if (!this._state) return;
			if (msg.type === "join") this._state[msg.id] = msg.info;
			else if (msg.type === "leave") delete this._state[msg.id];
		}));
	}
	reset() {
		delete this._state;
	}
	dispose() {
		delete this._info;
		delete this._state;
		this.listeners.forEach((listener) => listener());
		this.listeners.length = 0;
	}
	async join(id$1, info) {
		if (this._info) return void 0;
		this._info = {
			id: id$1,
			info
		};
		return this.channel.perform("$presence:join", this._info);
	}
	async leave() {
		if (!this._info) return void 0;
		let res = await this.channel.perform("$presence:leave");
		delete this._info;
		return res;
	}
	async info() {
		if (this._state) return this._state;
		if (!this._promise) this._promise = this._sync();
		await this._promise;
		return this._state;
	}
	async _sync() {
		this.watch();
		try {
			let presence = await this.channel.perform("$presence:info", {});
			this._state = this.stateFromInfo(presence);
			return this._state;
		} finally {
			delete this._promise;
		}
	}
	stateFromInfo(presence) {
		return presence.records.reduce((acc, { id: id$1, info }) => {
			acc[id$1] = info;
			return acc;
		}, {});
	}
};

//#endregion
//#region node_modules/@anycable/core/channel/index.js
const STATE$1 = Symbol("state");
var Channel = class {
	constructor(params$1 = {}) {
		this.emitter = createNanoEvents();
		this.params = Object.freeze(params$1);
		this.presence = new Presence(this);
		this.initialConnect = true;
		this[STATE$1] = "idle";
	}
	get identifier() {
		if (this._identifier) return this._identifier;
		this._identifier = stringifyParams({
			channel: this.channelId,
			...this.params
		});
		return this._identifier;
	}
	get channelId() {
		return this.constructor.identifier;
	}
	get state() {
		return this[STATE$1];
	}
	attached(receiver) {
		if (this.receiver) {
			if (this.receiver !== receiver) throw Error("Already connected to a different receiver");
			return false;
		}
		this.receiver = receiver;
		return true;
	}
	connecting() {
		this[STATE$1] = "connecting";
	}
	connected() {
		if (this.state === "connected") return;
		if (this.state === "closed") return;
		this[STATE$1] = "connected";
		let restored = false;
		if (this.initialConnect) {
			this.initialConnect = false;
			this.emit("connect", {
				reconnect: false,
				restored
			});
		} else this.emit("connect", {
			reconnect: true,
			restored
		});
	}
	restored() {
		if (this.state === "connected") throw Error("Already connected");
		this[STATE$1] = "connected";
		let restored = true;
		let reconnect = true;
		this.initialConnect = false;
		this.emit("connect", {
			reconnect,
			restored
		});
	}
	disconnected(err) {
		if (this.state === "disconnected" || this.state === "closed") return;
		this[STATE$1] = "disconnected";
		this.presence.reset();
		this.emit("disconnect", err);
	}
	closed(err) {
		if (this.state === "closed") return;
		this[STATE$1] = "closed";
		delete this.receiver;
		this.initialConnect = true;
		this.presence.dispose();
		this.emit("close", err);
	}
	disconnect() {
		if (this.state === "idle" || this.state === "closed") return;
		this.receiver.unsubscribe(this);
	}
	async perform(action, payload) {
		if (this.state === "idle" || this.state === "closed") throw Error("Channel is not subscribed");
		return this.receiver.perform(this.identifier, action, payload);
	}
	async send(payload) {
		return this.perform(void 0, payload);
	}
	async whisper(payload) {
		try {
			await this.perform("$whisper", payload);
		} catch (e) {
			let logger = this.receiver ? this.receiver.logger : null;
			if (logger) logger.warn("whisper failed: ", e);
		}
	}
	receive(msg, meta) {
		this.emit("message", msg, meta);
	}
	on(event, callback) {
		return this.emitter.on(event, callback);
	}
	once(event, callback) {
		let unbind = this.emitter.on(event, (...args$1) => {
			unbind();
			callback(...args$1);
		});
		return unbind;
	}
	emit(event, ...args$1) {
		return this.emitter.emit(event, ...args$1);
	}
	ensureSubscribed() {
		if (this.state === "connected") return Promise.resolve();
		if (this.state === "closed") return Promise.reject(Error("Channel is unsubscribed"));
		return this.pendingSubscribe();
	}
	pendingSubscribe() {
		if (this._pendingSubscribe) return this._pendingSubscribe;
		this._pendingSubscribe = new Promise((resolve, reject) => {
			let unbind = [() => delete this._pendingSubscribe];
			unbind.push(this.on("connect", () => {
				unbind.forEach((clbk) => clbk());
				resolve();
			}));
			unbind.push(this.on("close", (err) => {
				unbind.forEach((clbk) => clbk());
				reject(err || new ReasonError("Channel was disconnected before subscribing", "canceled"));
			}));
		});
		return this._pendingSubscribe;
	}
};

//#endregion
//#region node_modules/@anycable/core/hub/index.js
var Subscription = class {
	constructor(id$1) {
		this.id = id$1;
		this.intent = "unsubscribed";
		this.state = "idle";
		this.channels = [];
		this.disposed = false;
		this._pendings = [];
	}
	add(channel) {
		if (this.channels.includes(channel)) return;
		this.channels.push(channel);
	}
	remove(channel) {
		let ind = this.channels.indexOf(channel);
		if (ind > -1) this.channels.splice(ind, 1);
	}
	notify(state, ...args$1) {
		this.state = state === "restored" ? "connected" : state;
		if (args$1.length === 1) this.channels.forEach((channel) => channel[state](args$1[0]));
		else this.channels.forEach((channel) => channel[state]());
	}
	pending(intent) {
		this._checkIntent(intent);
		let nextPending = this._pendings[0];
		if (!nextPending || nextPending.intent !== intent) return Promise.resolve();
		return nextPending.promise;
	}
	ensureResubscribed() {
		if (this.disposed) return;
		this.intent = void 0;
		this.ensureSubscribed();
	}
	ensureSubscribed() {
		if (this.intent === "subscribed") return;
		if (this.disposed) throw Error("Subscription is disposed");
		this.intent = "subscribed";
		if (this._mergeWithPending("unsubscribed")) return;
		this.subscriber(this);
	}
	maybeUnsubscribe() {
		if (this.disposed) return;
		if (this.intent === "unsubscribed") return;
		if (this.channels.length > 0) return;
		this.intent = "unsubscribed";
		if (this._mergeWithPending("subscribed")) return;
		this.unsubscriber(this);
	}
	async acquire(intent) {
		this._checkIntent(intent);
		let resolver;
		let lock = {
			promise: new Promise((resolve) => {
				resolver = resolve;
			}),
			intent,
			release: () => {
				this._pendings.splice(this._pendings.indexOf(lock), 1);
				resolver(lock);
			},
			canceled: false,
			acquired: false
		};
		let top = this._pendingTop;
		this._pendings.push(lock);
		if (top) await top.promise;
		if (this.gvl) await this.gvl.acquire(lock, intent);
		lock.acquired = true;
		return lock;
	}
	close(err) {
		this.disposed = true;
		this.intent = void 0;
		this.notify("closed", err);
	}
	_checkIntent(event) {
		if (event === "unsubscribed" || event === "subscribed") return;
		throw Error(`Unknown subscription intent: ${event}`);
	}
	get _pendingTop() {
		return this._pendings.length ? this._pendings[this._pendings.length - 1] : void 0;
	}
	_mergeWithPending(intent) {
		let top = this._pendingTop;
		if (!top) return false;
		if (top.acquired) return false;
		if (top.intent !== intent) return false;
		this._pendings.pop();
		top.canceled = true;
		return true;
	}
};
var GlobalLock = class {
	constructor() {
		this.queue = [];
	}
	async acquire(lock, intent) {
		if (intent !== "subscribed") return;
		this.queue.push(lock.promise.then(() => {
			this.queue.splice(this.queue.indexOf(lock), 1);
		}));
		if (this.queue.length > 1) await this.queue[this.queue.length - 2];
	}
};
var Subscriptions = class {
	constructor(opts) {
		if (opts.concurrentSubscribes === false) this.glv = new GlobalLock();
		this._subscriptions = {};
		this._localToRemote = {};
	}
	all() {
		return Object.values(this._subscriptions);
	}
	get(id$1) {
		return this._subscriptions[id$1];
	}
	create(id$1, { subscribe: subscribe$1, unsubscribe: unsubscribe$1 }) {
		let sub = this._subscriptions[id$1] = new Subscription(id$1);
		sub.remoteId = this._localToRemote[id$1];
		sub.subscriber = subscribe$1;
		sub.unsubscriber = unsubscribe$1;
		sub.gvl = this.glv;
		return sub;
	}
	remove(id$1) {
		delete this._subscriptions[id$1];
		delete this._localToRemote[id$1];
	}
	storeRemoteId(localId, remoteId) {
		this._localToRemote[localId] = remoteId;
		let sub = this.get(localId);
		if (sub) sub.remoteId = remoteId;
	}
};
var Hub = class {
	constructor(opts = {}) {
		this.subscriptions = new Subscriptions(opts);
		this._pendingMessages = [];
		this._remoteToLocal = {};
	}
	subscribe(localId, remoteId) {
		this._remoteToLocal[remoteId] = localId;
		this.subscriptions.storeRemoteId(localId, remoteId);
		this.flush(remoteId);
	}
	unsubscribe(localId) {
		let sub = this.subscriptions.get(localId);
		if (!sub) return;
		let remoteId = sub.remoteId;
		if (remoteId) delete this._remoteToLocal[remoteId];
		this.subscriptions.remove(localId);
	}
	transmit(id$1, msg, meta) {
		let localId = this._remoteToLocal[id$1];
		if (!localId) {
			this._pendingMessages.push([
				id$1,
				msg,
				meta
			]);
			return;
		}
		let sub = this.subscriptions.get(localId);
		if (!sub) return;
		sub.channels.forEach((channel) => {
			channel.receive(msg, meta);
		});
	}
	notify(id$1, event, payload) {
		let localId = this._remoteToLocal[id$1];
		if (!localId) return;
		let sub = this.subscriptions.get(localId);
		if (!sub) return;
		sub.channels.forEach((channel) => channel.emit(event, payload));
	}
	close() {
		this._pendingMessages.length = 0;
	}
	get size() {
		return this.channels.length;
	}
	get channels() {
		return this.subscriptions.all().flatMap((sub) => sub.channels);
	}
	flush(id$1) {
		let left = [];
		for (let item of this._pendingMessages) if (item[0] === id$1) this.transmit(item[0], item[1], item[2]);
		else left.push(item);
		this._pendingMessages = left;
	}
};

//#endregion
//#region node_modules/@anycable/core/logger/index.js
const LEVEL_TO_NAME = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3
};
var BaseLogger = class {
	constructor(level) {
		this.level = level || "warn";
	}
	log(level, msg, details) {
		if (LEVEL_TO_NAME[level] < LEVEL_TO_NAME[this.level]) return;
		this.writeLogEntry(level, msg, details);
	}
	writeLogEntry() {
		throw Error("Not implemented");
	}
	debug(msg, details) {
		this.log("debug", msg, details);
	}
	info(msg, details) {
		this.log("info", msg, details);
	}
	warn(msg, details) {
		this.log("warn", msg, details);
	}
	error(msg, details) {
		this.log("error", msg, details);
	}
};
var NoopLogger = class extends BaseLogger {
	writeLogEntry() {}
};

//#endregion
//#region node_modules/@anycable/core/encoder/index.js
var JSONEncoder = class {
	encode(msg) {
		return JSON.stringify(msg);
	}
	decode(raw) {
		try {
			return JSON.parse(raw);
		} catch (_e) {}
	}
};

//#endregion
//#region node_modules/@anycable/core/action_cable/index.js
let commandID = 0;
var ActionCableProtocol = class {
	constructor(opts = {}) {
		let { logger } = opts;
		this.logger = logger || new NoopLogger();
		this.pendingSubscriptions = {};
		this.pendingUnsubscriptions = {};
		this.subscribeCooldownInterval = opts.subscribeCooldownInterval || 250;
		this.subscribeRetryInterval = opts.subscribeRetryInterval || 5e3;
	}
	attached(cable) {
		this.cable = cable;
	}
	subscribe(channel, params$1) {
		let subscriptionPayload = { channel };
		if (params$1) Object.assign(subscriptionPayload, params$1);
		let identifier = stringifyParams(subscriptionPayload);
		if (this.pendingUnsubscriptions[identifier]) {
			let cooldown = this.subscribeCooldownInterval * 1.5;
			this.logger.debug(`unsubscribed recently, cooldown for ${cooldown}`, identifier);
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(this.subscribe(channel, params$1));
				}, cooldown);
			});
		}
		if (this.pendingSubscriptions[identifier]) {
			this.logger.warn("subscription is already pending, skipping", identifier);
			return Promise.reject(Error("Already subscribing"));
		}
		let retryInterval = this.subscribeRetryInterval;
		return new Promise((resolve, reject) => {
			let id$1 = ++commandID;
			this.pendingSubscriptions[identifier] = {
				resolve,
				reject,
				id: id$1
			};
			this.cable.send(this.buildSubscribeRequest(identifier));
			this.maybeRetrySubscribe(id$1, identifier, retryInterval);
		});
	}
	buildSubscribeRequest(identifier) {
		return {
			command: "subscribe",
			identifier
		};
	}
	maybeRetrySubscribe(id$1, identifier, retryInterval) {
		setTimeout(() => {
			let sub = this.pendingSubscriptions[identifier];
			if (!sub) return;
			if (sub.id !== id$1) return;
			this.logger.warn(`no subscription ack received in ${retryInterval}ms, retrying subscribe`, identifier);
			this.cable.send(this.buildSubscribeRequest(identifier));
			this.maybeExpireSubscribe(id$1, identifier, retryInterval);
		}, retryInterval);
	}
	maybeExpireSubscribe(id$1, identifier, retryInterval) {
		setTimeout(() => {
			let sub = this.pendingSubscriptions[identifier];
			if (!sub) return;
			if (sub.id !== id$1) return;
			delete this.pendingSubscriptions[identifier];
			sub.reject(new SubscriptionTimeoutError(`Haven't received subscription ack in ${retryInterval * 2}ms for ${identifier}`));
		}, retryInterval);
	}
	unsubscribe(identifier) {
		this.cable.send({
			command: "unsubscribe",
			identifier
		});
		this.pendingUnsubscriptions[identifier] = true;
		setTimeout(() => {
			delete this.pendingUnsubscriptions[identifier];
		}, this.subscribeCooldownInterval);
		return Promise.resolve();
	}
	perform(identifier, action, payload) {
		if (action === "$whisper") return this.whisper(identifier, payload);
		if (!payload) payload = {};
		payload.action ||= action;
		this.cable.send({
			command: "message",
			identifier,
			data: JSON.stringify(payload)
		});
		return Promise.resolve();
	}
	whisper(identifier, data) {
		this.cable.send({
			command: "whisper",
			identifier,
			data
		});
		return Promise.resolve();
	}
	receive(msg) {
		if (typeof msg !== "object") {
			this.logger.error("unsupported message format", { message: msg });
			return;
		}
		let { type, identifier, message, reason, reconnect } = msg;
		if (type === "ping") return this.cable.keepalive(msg.message);
		else this.cable.keepalive();
		if (type === "welcome") {
			let sessionId = msg.sid;
			if (sessionId) this.cable.setSessionId(sessionId);
			return this.cable.connected();
		}
		if (type === "disconnect") {
			let err = new DisconnectedError(reason);
			this.reset(err);
			if (reconnect === false) this.cable.closed(err);
			else this.cable.disconnected(err);
			return;
		}
		if (type === "confirm_subscription") {
			let subscription = this.pendingSubscriptions[identifier];
			if (!subscription) {
				this.logger.error("subscription not found, unsubscribing", {
					type,
					identifier
				});
				this.unsubscribe(identifier);
				return;
			}
			delete this.pendingSubscriptions[identifier];
			return subscription.resolve(identifier);
		}
		if (type === "reject_subscription") {
			let subscription = this.pendingSubscriptions[identifier];
			if (!subscription) return this.logger.error("subscription not found", {
				type,
				identifier
			});
			delete this.pendingSubscriptions[identifier];
			return subscription.reject(new SubscriptionRejectedError());
		}
		if (message) return {
			identifier,
			message
		};
		this.logger.warn(`unknown message type: ${type}`, { message: msg });
	}
	reset(err) {
		for (let identifier in this.pendingSubscriptions) this.pendingSubscriptions[identifier].reject(err);
		this.pendingSubscriptions = {};
	}
	recoverableClosure() {
		return false;
	}
};

//#endregion
//#region node_modules/@anycable/core/action_cable_ext/index.js
const now$1 = () => Date.now() / 1e3 | 0;
var ActionCableExtendedProtocol = class extends ActionCableProtocol {
	constructor(opts = {}) {
		super(opts);
		this.streamsPositions = {};
		this.subscriptionStreams = {};
		this.pendingHistory = {};
		this.pendingPresence = {};
		this.presenceInfo = {};
		this.restoreSince = opts.historyTimestamp;
		this.disableSessionRecovery = opts.disableSessionRecovery;
		if (this.restoreSince === void 0) this.restoreSince = now$1();
		this.sessionId = void 0;
		this.sendPongs = opts.pongs;
	}
	reset(err) {
		for (let identifier in this.pendingPresence) this.pendingPresence[identifier].reject(err);
		this.pendingPresence = {};
		return super.reset();
	}
	receive(msg) {
		if (typeof msg !== "object") {
			this.logger.error("unsupported message format", { message: msg });
			return;
		}
		let { type, identifier, message } = msg;
		if (type === "disconnect") {
			delete this.sessionId;
			this.cable.setSessionId("");
			return super.receive(msg);
		}
		if (type === "reject_subscription") return super.receive(msg);
		if (type === "confirm_subscription") {
			if (!this.subscriptionStreams[identifier]) this.subscriptionStreams[identifier] = /* @__PURE__ */ new Set();
			return super.receive(msg);
		}
		if (type === "ping") {
			if (!this.restoreSince === false) this.restoreSince = now$1();
			if (this.sendPongs) this.sendPong();
			return this.cable.keepalive(msg.message);
		} else this.cable.keepalive();
		if (type === "confirm_history") {
			this.logger.debug("history result received", msg);
			this.cable.notify("history_received", identifier);
			return;
		}
		if (type === "reject_history") {
			this.logger.warn("failed to retrieve history", msg);
			this.cable.notify("history_not_found", identifier);
			return;
		}
		if (type === "welcome") {
			if (!this.disableSessionRecovery) {
				this.sessionId = msg.sid;
				if (this.sessionId) this.cable.setSessionId(this.sessionId);
			}
			if (msg.restored) {
				let restoredIds = msg.restored_ids || Object.keys(this.subscriptionStreams);
				for (let restoredId of restoredIds) {
					this.cable.send({
						identifier: restoredId,
						command: "history",
						history: this.historyRequestFor(restoredId)
					});
					if (this.presenceInfo[restoredId]) this.cable.send({
						identifier: restoredId,
						command: "join",
						presence: this.presenceInfo[restoredId]
					});
				}
				return this.cable.restored(restoredIds);
			}
			return this.cable.connected(this.sessionId);
		}
		if (type === "presence") {
			let presenceType = message.type;
			if (presenceType === "info") {
				let pending = this.pendingPresence[identifier];
				if (pending) {
					delete this.pendingPresence[identifier];
					pending.resolve(message);
				}
			} else if (presenceType === "error") {
				let pending = this.pendingPresence[identifier];
				if (pending) {
					delete this.pendingPresence[identifier];
					pending.reject(/* @__PURE__ */ new Error("failed to retrieve presence"));
				}
			}
			return {
				type,
				identifier,
				message
			};
		}
		if (message) return {
			identifier,
			message,
			meta: this.trackStreamPosition(identifier, msg.stream_id, msg.epoch, msg.offset)
		};
		this.logger.warn(`unknown message type: ${type}`, { message: msg });
	}
	perform(identifier, action, payload) {
		switch (action) {
			case "$presence:join": return this.join(identifier, payload);
			case "$presence:leave": return this.leave(identifier, payload);
			case "$presence:info": return this.presence(identifier, payload);
		}
		return super.perform(identifier, action, payload);
	}
	unsubscribe(identifier) {
		delete this.presenceInfo[identifier];
		return super.unsubscribe(identifier);
	}
	buildSubscribeRequest(identifier) {
		let req = super.buildSubscribeRequest(identifier);
		let historyReq = this.historyRequestFor(identifier);
		if (historyReq) {
			req.history = historyReq;
			this.pendingHistory[identifier] = true;
		}
		let presence = this.presenceInfo[identifier];
		if (presence) req.presence = presence;
		return req;
	}
	recoverableClosure() {
		return !!this.sessionId;
	}
	historyRequestFor(identifier) {
		let streams = {};
		let hasStreams = false;
		if (this.subscriptionStreams[identifier]) for (let stream of this.subscriptionStreams[identifier]) {
			let record = this.streamsPositions[stream];
			if (record) {
				hasStreams = true;
				streams[stream] = record;
			}
		}
		if (!hasStreams && !this.restoreSince) return;
		return {
			since: this.restoreSince,
			streams
		};
	}
	trackStreamPosition(identifier, stream, epoch, offset) {
		if (!stream || !epoch) return;
		if (!this.subscriptionStreams[identifier]) this.subscriptionStreams[identifier] = /* @__PURE__ */ new Set();
		this.subscriptionStreams[identifier].add(stream);
		this.streamsPositions[stream] = {
			epoch,
			offset
		};
		return {
			stream,
			epoch,
			offset
		};
	}
	async sendPong() {
		await new Promise((resolve) => setTimeout(resolve, 0));
		if (this.cable.state === "connected") this.cable.send({ command: "pong" });
	}
	async join(identifier, presence) {
		this.presenceInfo[identifier] = presence;
		this.cable.send({
			command: "join",
			identifier,
			presence
		});
		return Promise.resolve();
	}
	async leave(identifier, presence) {
		delete this.presenceInfo[identifier];
		this.cable.send({
			command: "leave",
			identifier,
			presence
		});
		return Promise.resolve();
	}
	presence(identifier, data) {
		if (this.pendingPresence[identifier]) {
			this.logger.warn("presence is already pending, skipping", identifier);
			return Promise.reject(Error("presence request is already pending"));
		}
		return new Promise((resolve, reject) => {
			this.pendingPresence[identifier] = {
				resolve,
				reject
			};
			this.cable.send({
				command: "presence",
				identifier,
				data
			});
		});
	}
};

//#endregion
//#region node_modules/@anycable/core/cable/index.js
var NoConnectionError = class extends ReasonError {
	constructor() {
		super("No connection", "closed");
		this.name = "NoConnectionError";
	}
};
var GhostChannel = class extends Channel {
	static identifier = "__ghost__";
	constructor(channelId, params$1) {
		super(params$1);
		this.channelId = channelId;
	}
	set channelId(val) {
		this._channelId = val;
	}
	get channelId() {
		return this._channelId;
	}
};
const PUBSUB_CHANNEL = "$pubsub";
var PubSubChannel = class extends Channel {
	static identifier = PUBSUB_CHANNEL;
	async perform(action, payload) {
		if (action.startsWith("$")) return super.perform(action, payload);
		throw Error("not implemented");
	}
};
const STATE = Symbol("state");
var Cable = class {
	constructor({ transport, protocol, encoder, logger, lazy, hubOptions, performFailures, transportConfigurator }) {
		this.emitter = createNanoEvents();
		this.transport = transport;
		this.encoder = encoder;
		this.logger = logger || new NoopLogger();
		this.protocol = protocol;
		this.performFailures = performFailures || "throw";
		this.protocol.attached(this);
		this.hub = new Hub(hubOptions || {});
		this[STATE] = "idle";
		this.handleClose = this.handleClose.bind(this);
		this.handleIncoming = this.handleIncoming.bind(this);
		this.transportConfigurator = transportConfigurator;
		this.transport.on("close", this.handleClose);
		this.transport.on("data", this.handleIncoming);
		this.initialConnect = true;
		this.recovering = false;
		if (lazy === false) this.connect().catch(() => {});
	}
	get state() {
		return this[STATE];
	}
	async connect() {
		if (this.state === "connected") return Promise.resolve();
		if (this.state === "connecting") return this.pendingConnect();
		let wasIdle = this.state === "idle";
		this[STATE] = "connecting";
		let promise = this.pendingConnect();
		this.logger.debug("connecting");
		try {
			if (this.transportConfigurator) await this.transportConfigurator(this.transport, { initial: wasIdle });
			await this.transport.open();
		} catch (err) {
			this.handleClose(err);
		}
		return promise;
	}
	setSessionId(sessionId) {
		this.sessionId = sessionId;
		this.transport.setParam("sid", sessionId);
	}
	connected() {
		if (this.state === "connected") return;
		this.logger.info("connected");
		this[STATE] = "connected";
		if (this.recovering) this.hub.subscriptions.all().forEach((subscription) => subscription.notify("disconnected", new DisconnectedError("recovery_failed")));
		this.hub.subscriptions.all().forEach((subscription) => this._resubscribe(subscription));
		let restored = false;
		this.recovering = false;
		if (this.initialConnect) {
			this.initialConnect = false;
			this.emit("connect", {
				reconnect: false,
				restored
			});
		} else this.emit("connect", {
			reconnect: true,
			restored
		});
	}
	restored(remoteIds) {
		this.logger.info("connection recovered", { remoteIds });
		this[STATE] = "connected";
		this.hub.subscriptions.all().forEach((subscription) => {
			if (remoteIds && subscription.remoteId && remoteIds.includes(subscription.remoteId)) subscription.notify("restored");
			else {
				subscription.notify("disconnected", new DisconnectedError("recovery_failed"));
				this._resubscribe(subscription);
			}
		});
		let reconnect = !this.initialConnect;
		let restored = true;
		this.recovering = false;
		this.initialConnect = false;
		this.emit("connect", {
			reconnect,
			restored
		});
	}
	notify(event, identifier, data) {
		if (identifier && typeof identifier !== "string") {
			data = identifier;
			identifier = void 0;
		}
		if (!identifier) this.emit("info", {
			type: event,
			data
		});
		else this.hub.notify(identifier, "info", {
			type: event,
			data
		});
	}
	handleClose(err) {
		this.logger.debug("transport closed", { error: err });
		this.disconnected(new DisconnectedError(err, "transport_closed"));
	}
	disconnected(err) {
		if (!(this.state === "connected" || this.state === "connecting")) return;
		this.logger.info("disconnected", { reason: err });
		this[STATE] = "disconnected";
		this.recovering = this.protocol.recoverableClosure(err);
		if (this.recovering) this.hub.subscriptions.all().forEach((subscription) => subscription.notify("connecting"));
		else this.hub.subscriptions.all().forEach((subscription) => {
			subscription.notify("disconnected", err);
		});
		this.protocol.reset(err);
		this.hub.close();
		this.transport.close();
		this.emit("disconnect", err);
	}
	closed(reason) {
		if (this.state === "closed" || this.state === "idle") return;
		let err;
		if (reason) err = reason instanceof DisconnectedError ? reason : new DisconnectedError(reason, void 0);
		this.logger.info("closed", { reason: reason || "user" });
		this[STATE] = "closed";
		let channelErr = err || new DisconnectedError("cable_closed");
		this.hub.subscriptions.all().forEach((subscription) => subscription.notify("disconnected", channelErr));
		this.hub.close();
		this.protocol.reset();
		this.transport.close();
		this.initialConnect = true;
		this.emit("close", err);
	}
	disconnect() {
		this.closed();
	}
	handleIncoming(raw) {
		if (this.state === "closed" || this.state === "idle") return;
		let data = this.encoder.decode(raw);
		if (data === void 0) {
			this.logger.error("failed to decode message", { message: raw });
			return;
		}
		this.logger.debug("incoming data", data);
		let processed = this.protocol.receive(data);
		if (processed) {
			this.logger.debug("processed incoming message", processed);
			let { type, identifier, message, meta } = processed;
			if (type) this.hub.notify(identifier, type, message);
			else this.hub.transmit(identifier, message, meta);
		}
	}
	send(msg) {
		if (this.state === "closed") throw Error("Cable is closed");
		let data = this.encoder.encode(msg);
		if (data === void 0) {
			this.logger.error("failed to encode message", { message: msg });
			return;
		}
		this.logger.debug("outgoing message", msg);
		this.transport.send(data);
	}
	keepalive(msg) {
		this.emit("keepalive", msg);
	}
	streamFrom(name) {
		let channel = new PubSubChannel({ stream_name: name });
		return this.subscribe(channel);
	}
	streamFromSigned(name) {
		let channel = new PubSubChannel({ signed_stream_name: name });
		return this.subscribe(channel);
	}
	subscribeTo(ChannelClass, params$1) {
		let channel;
		let ghostName;
		if (typeof ChannelClass === "string") {
			ghostName = ChannelClass;
			ChannelClass = GhostChannel;
		}
		channel = ghostName ? new ChannelClass(ghostName, params$1) : new ChannelClass(params$1);
		return this.subscribe(channel);
	}
	subscribe(channel) {
		if (!channel.attached(this)) return channel;
		let identifier = channel.identifier;
		channel.connecting();
		let subscription = this.hub.subscriptions.get(identifier) || this.hub.subscriptions.create(identifier, {
			subscribe: (sub) => {
				return this._subscribe(sub, channel.channelId, channel.params);
			},
			unsubscribe: (sub) => this._unsubscribe(sub)
		});
		subscription.add(channel);
		if (subscription.intent === "subscribed" && subscription.state === "connected") channel.connected();
		subscription.ensureSubscribed();
		return channel;
	}
	async _resubscribe(subscription) {
		if (subscription.intent !== "subscribed") return;
		if (!subscription.channels[0]) return;
		subscription.notify("connecting");
		subscription.ensureResubscribed();
	}
	async _subscribe(subscription, channelId, params$1) {
		let identifier = subscription.id;
		if (this.state === "idle") this.connect().catch(() => {});
		if (this.state !== "connected") {
			this.logger.debug("cancel subscribe, no connection", { identifier });
			return;
		}
		this.logger.debug("acquiring subscribe lock", { identifier });
		let lock = await subscription.acquire("subscribed");
		if (lock.canceled) {
			this.logger.debug("subscribe lock has been canceled", { identifier });
			lock.release();
			return;
		}
		this.logger.debug("subscribe lock has been acquired", { identifier });
		if (subscription.intent !== "subscribed") {
			this.logger.debug("cancel subscribe request, already unsubscribed");
			lock.release();
			return;
		}
		if (this.state !== "connected") {
			this.logger.debug("cancel subscribe, no connection", { identifier });
			lock.release();
			return;
		}
		if (subscription.state === "connected") {
			this.logger.debug("already connected, skip subscribe command", { identifier });
			subscription.notify("connected");
			lock.release();
			return;
		}
		let channelMeta = {
			identifier: channelId,
			params: params$1
		};
		this.logger.debug("subscribing", channelMeta);
		try {
			let remoteId = await this.protocol.subscribe(channelId, params$1);
			this.hub.subscribe(identifier, remoteId);
			this.logger.debug("subscribed", {
				...channelMeta,
				remoteId
			});
			subscription.notify("connected");
		} catch (err) {
			if (err) {
				if (err instanceof SubscriptionRejectedError) this.logger.warn("rejected", channelMeta);
				if (err instanceof DisconnectedError) {
					this.logger.debug("disconnected during subscription; will retry on connect", channelMeta);
					lock.release();
					return;
				}
				this.logger.error("failed to subscribe", {
					error: err,
					...channelMeta
				});
			}
			subscription.close(err);
			this.hub.unsubscribe(identifier);
		}
		lock.release();
	}
	unsubscribe(channel) {
		let identifier = channel.identifier;
		let subscription = this.hub.subscriptions.get(identifier);
		if (!subscription) throw Error(`Subscription not found: ${identifier}`);
		subscription.remove(channel);
		channel.closed();
		subscription.maybeUnsubscribe();
	}
	async _unsubscribe(subscription) {
		let identifier = subscription.id;
		this.logger.debug("acquiring unsubscribe lock", { identifier });
		let lock = await subscription.acquire("unsubscribed");
		if (lock.canceled) {
			this.logger.debug("unsubscribe lock has been canceled", { identifier });
			lock.release();
			return;
		}
		this.logger.debug("unsubscribe lock has been acquired", { identifier });
		if (subscription.intent !== "unsubscribed") {
			this.logger.debug("cancel unsubscribe, no longer needed", {
				identifier,
				intent: subscription.intent
			});
			lock.release();
			return;
		}
		if (subscription.state === "disconnected" || subscription.state === "closed") {
			this.logger.debug(`already ${subscription.state} connected, skip unsubscribe command`, { identifier });
			lock.release();
			return;
		}
		let remoteId = subscription.remoteId;
		this.logger.debug("unsubscribing...", { remoteId });
		if (this.state !== "connected") {
			this.logger.debug("unsubscribe skipped (cable is not connected)", { id: identifier });
			subscription.close();
			this.hub.unsubscribe(identifier);
			lock.release();
			return;
		}
		try {
			await this.protocol.unsubscribe(remoteId);
			this.logger.debug("unsubscribed remotely", { id: identifier });
		} catch (err) {
			if (err) if (err instanceof DisconnectedError) this.logger.debug("cable disconnected during the unsubscribe command execution", {
				id: identifier,
				error: err
			});
			else this.logger.error("unsubscribe failed", {
				id: identifier,
				error: err
			});
		}
		if (subscription.intent === "unsubscribed") {
			subscription.close();
			this.hub.unsubscribe(identifier);
		} else subscription.state = "closed";
		lock.release();
	}
	async perform(identifier, action, payload) {
		if (this.performFailures === "throw") return this._perform(identifier, action, payload);
		try {
			return await this._perform(identifier, action, payload);
		} catch (err) {
			if (this.performFailures === "warn") this.logger.warn("perform failed", { error: err });
			return;
		}
	}
	async _perform(identifier, action, payload) {
		if (this.state === "connecting") await this.pendingConnect();
		if (this.state === "closed" || this.state === "disconnected") throw new NoConnectionError();
		let subscription = this.hub.subscriptions.get(identifier);
		if (!subscription) throw Error(`Subscription not found: ${identifier}`);
		await subscription.pending("subscribed");
		if (subscription.intent !== "subscribed") throw Error(`Subscription is closed: ${identifier}`);
		let remoteId = subscription.remoteId;
		let performMeta = {
			id: remoteId,
			action,
			payload
		};
		this.logger.debug("perform", performMeta);
		try {
			let res = await this.protocol.perform(remoteId, action, payload);
			if (res) this.logger.debug("perform result", {
				message: res,
				request: performMeta
			});
			return res;
		} catch (err) {
			this.logger.error("perform failed", {
				error: err,
				request: performMeta
			});
			throw err;
		}
	}
	on(event, callback) {
		return this.emitter.on(event, callback);
	}
	once(event, callback) {
		let unbind = this.emitter.on(event, (...args$1) => {
			unbind();
			callback(...args$1);
		});
		return unbind;
	}
	emit(event, ...args$1) {
		return this.emitter.emit(event, ...args$1);
	}
	pendingConnect() {
		if (this._pendingConnect) return this._pendingConnect;
		this._pendingConnect = new Promise((resolve, reject) => {
			let unbind = [() => delete this._pendingConnect];
			unbind.push(this.on("connect", () => {
				unbind.forEach((clbk) => clbk());
				resolve();
			}));
			unbind.push(this.on("close", (err) => {
				unbind.forEach((clbk) => clbk());
				reject(err);
			}));
			unbind.push(this.on("disconnect", (err) => {
				unbind.forEach((clbk) => clbk());
				reject(err);
			}));
		});
		return this._pendingConnect;
	}
};

//#endregion
//#region node_modules/@anycable/core/monitor/index.js
const defaults = {
	maxMissingPings: 2,
	maxReconnectAttempts: Infinity
};
const now = () => Date.now();
const backoffWithJitter = (interval, opts) => {
	opts = opts || {};
	let { backoffRate, jitterRatio, maxInterval } = opts;
	backoffRate = backoffRate || 2;
	if (jitterRatio === void 0) jitterRatio = .5;
	return (attempts) => {
		let left = interval * backoffRate ** attempts;
		let delay = left + (left * backoffRate - left) * Math.random();
		let deviation = 2 * (Math.random() - .5) * jitterRatio;
		delay = delay * (1 + deviation);
		if (maxInterval && maxInterval < delay) delay = maxInterval;
		return delay;
	};
};
var Monitor$1 = class {
	constructor({ pingInterval,...opts }) {
		this.pingInterval = pingInterval;
		if (!this.pingInterval) throw Error(`Incorrect pingInterval is provided: ${pingInterval}`);
		opts = Object.assign({}, defaults, opts);
		this.strategy = opts.reconnectStrategy;
		if (!this.strategy) throw Error("Reconnect strategy must be provided");
		this.maxMissingPings = opts.maxMissingPings;
		this.maxReconnectAttempts = opts.maxReconnectAttempts;
		this.logger = opts.logger || new NoopLogger();
		this.state = "pending_connect";
		this.attempts = 0;
		this.disconnectedAt = now();
	}
	watch(target) {
		this.target = target;
		this.initListeners();
	}
	reconnectNow() {
		if (this.state === "connected" || this.state === "pending_connect" || this.state === "closed") return false;
		this.cancelReconnect();
		this.state = "pending_connect";
		this.target.connect().catch((err) => {
			this.logger.info("Failed at reconnecting: " + err);
		});
		return true;
	}
	initListeners() {
		this.unbind = [];
		this.unbind.push(this.target.on("connect", () => {
			this.attempts = 0;
			this.pingedAt = now();
			this.state = "connected";
			this.cancelReconnect();
			this.startPolling();
		}));
		this.unbind.push(this.target.on("disconnect", () => {
			this.disconnectedAt = now();
			this.state = "disconnected";
			this.stopPolling();
			this.scheduleReconnect();
		}));
		this.unbind.push(this.target.on("close", () => {
			this.disconnectedAt = now();
			this.state = "closed";
			this.cancelReconnect();
			this.stopPolling();
		}));
		this.unbind.push(this.target.on("keepalive", () => {
			this.pingedAt = now();
		}));
		this.unbind.push(() => {
			this.cancelReconnect();
			this.stopPolling();
		});
	}
	dispose() {
		delete this.target;
		if (this.unbind) this.unbind.forEach((clbk) => clbk());
		delete this.unbind;
	}
	startPolling() {
		if (this.pollId) clearTimeout(this.pollId);
		let pollDelay = this.pingInterval + (Math.random() - .5) * this.pingInterval * .5;
		this.pollId = setTimeout(() => {
			this.checkStale();
			if (this.state === "connected") this.startPolling();
		}, pollDelay);
	}
	stopPolling() {
		if (this.pollId) clearTimeout(this.pollId);
	}
	checkStale() {
		let diff = now() - this.pingedAt;
		if (diff > this.maxMissingPings * this.pingInterval) {
			this.logger.warn(`Stale connection: ${diff}ms without pings`);
			this.state = "pending_disconnect";
			this.target.disconnected(new StaleConnectionError());
		}
	}
	scheduleReconnect() {
		if (this.attempts >= this.maxReconnectAttempts) {
			this.target.close();
			return;
		}
		let delay = this.strategy(this.attempts);
		this.attempts++;
		this.logger.info(`Reconnecting in ${delay}ms (${this.attempts} attempt)`);
		this.state = "pending_reconnect";
		this.reconnnectId = setTimeout(() => this.reconnectNow(), delay);
	}
	cancelReconnect() {
		if (this.reconnnectId) {
			clearTimeout(this.reconnnectId);
			delete this.reconnnectId;
		}
	}
};

//#endregion
//#region node_modules/@anycable/core/transport/index.js
var FallbackTransport = class {
	constructor(transports, opts = {}) {
		this.transports = transports;
		this.transport = null;
		this.emitter = createNanoEvents();
		this.unbind = [];
		this.logger = opts.logger || new NoopLogger();
	}
	displayName() {
		return "fallbacked transport";
	}
	async open() {
		for (let i = 0; i < this.transports.length; i++) {
			let transport = this.transports[i];
			try {
				this.transport = transport;
				this.resetListeners();
				this.logger.debug(`Trying to connect via ${transport.displayName()}`);
				await transport.open();
				this.logger.debug(`Connected via ${transport.displayName()}`);
				return;
			} catch (e) {
				this.logger.debug(`Failed to connect via ${transport.displayName()}: ${e.message}`);
			}
		}
		this.transport = null;
		this.resetListeners();
		throw new Error(`Couldn't connect via any available transport`);
	}
	send(data) {
		if (!this.transport) throw new Error("No transport is open");
		this.transport.send(data);
	}
	async close() {
		if (!this.transport) throw new Error("No transport is open");
		await this.transport.close();
		this.transport = null;
	}
	setURL() {
		throw new Error("Not implemented. Set URL for each transport separately");
	}
	setParam(key, val) {
		this.transports.forEach((transport) => {
			transport.setParam(key, val);
		});
	}
	setToken(val, name) {
		this.transports.forEach((transport) => {
			transport.setToken(val, name);
		});
	}
	on(event, callback) {
		return this.emitter.on(event, callback);
	}
	once(event, callback) {
		let unbind = this.emitter.on(event, (...args$1) => {
			unbind();
			callback(...args$1);
		});
		return unbind;
	}
	get url() {
		if (!this.transport) return "";
		return this.transport.url;
	}
	resetListeners() {
		this.unbind.forEach((clbk) => clbk());
		this.unbind.length = 0;
		if (!this.transport) return;
		this.unbind.push(this.transport.on("open", () => {
			this.emitter.emit("open");
		}), this.transport.on("data", (data) => {
			this.emitter.emit("data", data);
		}), this.transport.on("close", (ev) => {
			this.emitter.emit("close", ev);
		}), this.transport.on("error", (ev) => {
			this.emitter.emit("error", ev);
		}));
	}
};

//#endregion
//#region node_modules/@anycable/core/websocket/index.js
var WebSocketTransport = class {
	constructor(url, opts = {}) {
		this.url = url;
		let Impl = opts.websocketImplementation;
		if (Impl) this.Impl = Impl;
		else if (typeof WebSocket !== "undefined") this.Impl = WebSocket;
		else throw new Error("No WebSocket support");
		this.connected = false;
		this.emitter = createNanoEvents();
		let { format, subprotocol, authStrategy } = opts;
		this.format = format || "text";
		this.connectionOptions = opts.websocketOptions;
		this.authStrategy = authStrategy || "param";
		this.authProtocol = "";
		this.subprotocol = subprotocol;
	}
	displayName() {
		return "WebSocket(" + this.url + ")";
	}
	open() {
		let protocols = this.subprotocol;
		if (this.authStrategy === "sub-protocol") protocols = [this.subprotocol, this.authProtocol];
		if (this.connectionOptions) this.ws = new this.Impl(this.url, protocols, this.connectionOptions);
		else this.ws = new this.Impl(this.url, protocols);
		this.ws.binaryType = "arraybuffer";
		this.initListeners();
		return new Promise((resolve, reject) => {
			let unbind = [];
			unbind.push(this.once("open", () => {
				unbind.forEach((clbk) => clbk());
				resolve();
			}));
			unbind.push(this.once("close", () => {
				unbind.forEach((clbk) => clbk());
				reject(Error("WS connection closed"));
			}));
		});
	}
	setURL(url) {
		this.url = url;
	}
	setParam(key, val) {
		let url = new URL(this.url);
		url.searchParams.set(key, val);
		let newURL = `${url.protocol}//${url.host}${url.pathname}?${url.searchParams}`;
		this.setURL(newURL);
	}
	setToken(val, key = "jid") {
		if (this.authStrategy === "param") this.setParam(key, val);
		else if (this.authStrategy === "header") {
			this.connectionOptions = this.connectionOptions || {};
			this.connectionOptions.headers = this.connectionOptions.headers || {};
			let authHeaderKey = `x-${key}`.toLowerCase();
			authHeaderKey = Object.keys(this.connectionOptions.headers).find((k) => k.toLowerCase() === authHeaderKey) || authHeaderKey;
			this.connectionOptions.headers[authHeaderKey] = val;
		} else if (this.authStrategy === "sub-protocol") this.authProtocol = `anycable-token.${val}`;
		else throw new Error("Unknown auth strategy: " + this.authStrategy);
	}
	send(data) {
		if (!this.ws || !this.connected) throw Error("WebSocket is not connected");
		else this.ws.send(data);
	}
	close() {
		if (this.ws) this.onclose();
		else this.connected = false;
	}
	on(event, callback) {
		return this.emitter.on(event, callback);
	}
	once(event, callback) {
		let unbind = this.emitter.on(event, (...args$1) => {
			unbind();
			callback(...args$1);
		});
		return unbind;
	}
	initListeners() {
		this.ws.onerror = (event) => {
			if (this.connected) this.emitter.emit("error", event.error || /* @__PURE__ */ new Error("WS Error"));
		};
		this.ws.onclose = () => {
			this.onclose();
		};
		this.ws.onmessage = (event) => {
			let data = event.data;
			if (this.format === "binary") data = new Uint8Array(data);
			this.emitter.emit("data", data);
		};
		this.ws.onopen = () => {
			this.connected = true;
			this.emitter.emit("open");
		};
	}
	onclose() {
		this.ws.onclose = void 0;
		this.ws.onmessage = void 0;
		this.ws.onopen = void 0;
		this.ws.close();
		delete this.ws;
		this.connected = false;
		this.emitter.emit("close");
	}
};

//#endregion
//#region node_modules/@anycable/core/action_cable_compat/index.js
var ActionCableSubscription = class {
	constructor(channel) {
		this.channel = channel;
	}
	notify(callback, ...args$1) {
		if (typeof this[callback] !== "function") return;
		this[callback](...args$1);
	}
	perform(action, data = {}) {
		this.channel.perform(action, data);
	}
	send(data) {
		this.channel.send(data);
	}
	whisper(data) {
		return this.channel.whisper(data);
	}
	get identifier() {
		return this.channel.identifier;
	}
	unsubscribe() {
		return this.channel.disconnect();
	}
};
var ActionCableChannel = class extends GhostChannel {
	constructor(channelName, params$1, mixin) {
		super(channelName, params$1);
		this.subscription = new ActionCableSubscription(this);
		Object.assign(this.subscription, mixin);
		this.on("connect", ({ reconnect }) => this.subscription.notify("connected", { reconnected: reconnect }));
		this.on("disconnect", () => this.subscription.notify("disconnected", { allowReconnect: true }));
		this.on("message", (val) => this.subscription.notify("received", val));
		this.on("close", (err) => {
			if (err && err instanceof SubscriptionRejectedError) this.subscription.notify("rejected");
			else this.subscription.notify("disconnected", { allowReconnect: false });
		});
	}
};
var ActionCableSubscriptions = class {
	constructor(cable) {
		this.cable = cable;
	}
	create(channel, mixin) {
		let channelName;
		let params$1;
		if (typeof channel === "object") {
			channelName = channel.channel;
			delete channel.channel;
			params$1 = channel;
		} else {
			channelName = channel;
			params$1 = {};
		}
		let cableChannel = new ActionCableChannel(channelName, params$1, mixin);
		cableChannel.subscription.notify("initialized");
		this.cable.subscribe(cableChannel);
		return cableChannel.subscription;
	}
	findAll(identifier) {
		return this.cable.hub.channels.filter((channel) => channel.identifier === identifier).map((channel) => channel.subscription);
	}
};
var ActionCableConsumer = class {
	constructor(cable) {
		this.cable = cable;
		this.subscriptions = new ActionCableSubscriptions(cable);
	}
	send(data) {
		return this.cable.send(data);
	}
	connect() {
		return this.cable.connect();
	}
	disconnect() {
		return this.cable.disconnect();
	}
	ensureActiveConnection() {
		return this.cable.connect();
	}
};

//#endregion
//#region node_modules/@anycable/core/create-cable/index.js
const DEFAULT_OPTIONS = {
	protocol: "actioncable-v1-json",
	pingInterval: 3e3,
	maxReconnectAttempts: Infinity,
	maxMissingPings: 2,
	logLevel: "warn",
	lazy: true
};
function createCable(url, opts) {
	if (typeof url === "object" && typeof opts === "undefined") {
		opts = url;
		url = void 0;
	}
	opts = opts || {};
	if (!url && !opts.transport) throw Error("URL or transport must be specified");
	opts = Object.assign({}, DEFAULT_OPTIONS, opts);
	let { protocol, websocketImplementation, websocketFormat, websocketOptions, websocketAuthStrategy, fallbacks, logLevel, logger, transport, encoder, lazy, monitor, pingInterval, reconnectStrategy, maxMissingPings, maxReconnectAttempts, subprotocol, tokenRefresher, historyTimestamp, protocolOptions, concurrentSubscribes, performFailures, transportConfigurator, auth } = opts;
	logger = logger || new NoopLogger(logLevel);
	if (typeof protocol === "string") {
		subprotocol = subprotocol || protocol;
		let protocolName = protocol.substring(0, protocol.lastIndexOf("-"));
		let protocolEncoderName = protocol.substring(protocol.lastIndexOf("-") + 1);
		protocolOptions = protocolOptions || {};
		if (protocolName === "actioncable-v1") protocol = new ActionCableProtocol({
			logger,
			...protocolOptions
		});
		else if (protocolName === "actioncable-v1-ext") protocol = new ActionCableExtendedProtocol({
			logger,
			historyTimestamp,
			...protocolOptions
		});
		else throw Error(`Protocol is not supported yet: ${protocol}`);
		if (protocolEncoderName === "json") {
			encoder = encoder || new JSONEncoder();
			websocketFormat = websocketFormat || "text";
		} else if (protocolEncoderName === "msgpack") {
			websocketFormat = "binary";
			if (!encoder) throw Error("Msgpack encoder must be specified explicitly. Use `@anycable/msgpack-encoder` package or build your own");
		} else if (protocolEncoderName === "protobuf") {
			websocketFormat = websocketFormat || "binary";
			if (!encoder) throw Error("Protobuf encoder must be specified explicitly. Use `@anycable/protobuf-encoder` package or build your own");
		} else throw Error(`Protocol is not supported yet: ${protocol}`);
	}
	if (!protocol) throw Error("Protocol must be specified");
	transport = transport || new WebSocketTransport(url, {
		websocketImplementation,
		websocketOptions,
		subprotocol,
		authStrategy: websocketAuthStrategy,
		format: websocketFormat
	});
	if (fallbacks) transport = new FallbackTransport([transport, ...fallbacks], { logger });
	if (auth && auth.token) transport.setToken(auth.token, auth.param || "jid");
	reconnectStrategy = reconnectStrategy || backoffWithJitter(pingInterval);
	if (monitor !== false) monitor = monitor || new Monitor$1({
		pingInterval,
		reconnectStrategy,
		maxMissingPings,
		maxReconnectAttempts,
		logger
	});
	let cable = new Cable({
		protocol,
		transport,
		encoder,
		logger,
		lazy,
		hubOptions: { concurrentSubscribes },
		performFailures,
		transportConfigurator
	});
	if (monitor) {
		monitor.watch(cable);
		cable.monitor = monitor;
	}
	if (tokenRefresher) watchForExpiredToken(cable, async () => {
		try {
			await tokenRefresher(transport);
		} catch (err) {
			logger.error("Failed to refresh authentication token: " + err);
			return false;
		}
		cable.connect().catch(() => {});
		return true;
	});
	return cable;
}
function watchForExpiredToken(cable, callback) {
	let attempted = false;
	cable.on("connect", () => attempted = false);
	cable.on("close", async (ev) => {
		if (!ev) return;
		if (attempted) {
			cable.logger.warn("Token auto-refresh is disabled", ev);
			return;
		}
		if (ev.reason === "token_expired") {
			attempted = true;
			await callback();
		}
	});
}

//#endregion
//#region node_modules/@anycable/web/logger/index.js
var Logger = class extends BaseLogger {
	writeLogEntry(level, msg, details) {
		if (details) console[level](msg, details);
		else console[level](msg);
	}
};

//#endregion
//#region node_modules/@anycable/web/monitor/index.js
var Monitor = class extends Monitor$1 {
	watch(cable) {
		super.watch(cable);
		this.initActivityListeners();
	}
	initActivityListeners() {
		if (typeof document !== "undefined" && typeof window !== "undefined" && document.addEventListener && window.addEventListener) {
			let visibility = () => {
				if (!document.hidden) {
					if (this.reconnectNow()) this.logger.debug("Trigger reconnect due to visibility change");
				}
			};
			let connect = (event) => {
				if (this.reconnectNow()) this.logger.debug("Trigger reconnect", { event });
			};
			let disconnectFrozen = () => this.disconnect(new DisconnectedError("page_frozen"));
			document.addEventListener("visibilitychange", visibility, false);
			window.addEventListener("focus", connect, false);
			window.addEventListener("online", connect, false);
			window.addEventListener("resume", connect, false);
			window.addEventListener("freeze", disconnectFrozen, false);
			this.unbind.push(() => {
				document.removeEventListener("visibilitychange", visibility, false);
				window.removeEventListener("focus", connect, false);
				window.removeEventListener("online", connect, false);
				window.removeEventListener("resume", connect, false);
				window.removeEventListener("freeze", disconnectFrozen, false);
			});
		}
	}
	disconnect(err) {
		if (this.state === "disconnected" || this.state === "closed") return;
		this.logger.info("Disconnecting", { reason: err.message });
		this.cancelReconnect();
		this.stopPolling();
		this.state = "pending_disconnect";
		this.target.disconnected(err);
	}
};

//#endregion
//#region node_modules/@anycable/web/index.js
const metaPrefixes = ["cable", "action-cable"];
const defaultUrl = "/cable";
const fetchMeta = (doc$1, key) => {
	for (let prefix of metaPrefixes) {
		let element = doc$1.head.querySelector(`meta[name='${prefix}-${key}']`);
		if (element) return element.getAttribute("content");
	}
};
const absoluteWSUrl = (path) => {
	if (path.match(/wss?:\/\//)) return path;
	if (typeof window !== "undefined") return `${window.location.protocol.replace("http", "ws")}//${window.location.host}${path}`;
	return path;
};
const generateUrlFromDOM = () => {
	if (typeof document !== "undefined" && document.head) {
		let url = fetchMeta(document, "url");
		if (url) return absoluteWSUrl(url);
	}
	return absoluteWSUrl(defaultUrl);
};
const historyTimestampFromMeta = () => {
	if (typeof document !== "undefined" && document.head) {
		let value = fetchMeta(document, "history-timestamp");
		if (value) return value | 0;
	}
};
const tokenFromMeta = () => {
	if (typeof document !== "undefined" && document.head) return fetchMeta(document, "token");
};
const tokenParamFromMeta = () => {
	if (typeof document !== "undefined" && document.head) return fetchMeta(document, "token-param");
};
function createCable$1(url, opts) {
	if (typeof url === "object" && typeof opts === "undefined") {
		opts = url;
		url = void 0;
	}
	url = url || generateUrlFromDOM();
	opts = opts || {};
	opts.historyTimestamp ||= historyTimestampFromMeta();
	let token = tokenFromMeta();
	if (token) {
		let param = tokenParamFromMeta();
		opts.auth = Object.assign({
			token,
			param
		}, opts.auth || {});
	}
	opts = Object.assign({}, DEFAULT_OPTIONS, opts);
	let { logLevel, logger, pingInterval, reconnectStrategy, maxMissingPings, maxReconnectAttempts } = opts;
	logger = opts.logger = opts.logger || new Logger(logLevel);
	reconnectStrategy = opts.reconnectStrategy = opts.reconnectStrategy || backoffWithJitter(pingInterval);
	if (opts.monitor !== false) opts.monitor = opts.monitor || new Monitor({
		pingInterval,
		reconnectStrategy,
		maxMissingPings,
		maxReconnectAttempts,
		logger
	});
	return createCable(url, opts);
}
function createConsumer(url, opts) {
	return new ActionCableConsumer(createCable$1(url, opts));
}

//#endregion
//#region src/consumer.js
const consumer = createConsumer({ protocol: "actioncable-v1-ext-json" });

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
const writeSyncStep1 = (encoder, doc$1) => {
	writeVarUint(encoder, messageYjsSyncStep1);
	const sv = encodeStateVector(doc$1);
	writeVarUint8Array(encoder, sv);
};
/**
* @param {encoding.Encoder} encoder
* @param {Y.Doc} doc
* @param {Uint8Array} [encodedStateVector]
*/
const writeSyncStep2 = (encoder, doc$1, encodedStateVector) => {
	writeVarUint(encoder, messageYjsSyncStep2);
	writeVarUint8Array(encoder, encodeStateAsUpdate(doc$1, encodedStateVector));
};
/**
* Read SyncStep1 message and reply with SyncStep2.
*
* @param {decoding.Decoder} decoder The reply to the received message
* @param {encoding.Encoder} encoder The received message
* @param {Y.Doc} doc
*/
const readSyncStep1 = (decoder, encoder, doc$1) => writeSyncStep2(encoder, doc$1, readVarUint8Array(decoder));
/**
* Read and apply Structs and then DeleteStore to a y instance.
*
* @param {decoding.Decoder} decoder
* @param {Y.Doc} doc
* @param {any} transactionOrigin
*/
const readSyncStep2 = (decoder, doc$1, transactionOrigin) => {
	try {
		applyUpdate(doc$1, readVarUint8Array(decoder), transactionOrigin);
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
const readSyncMessage = (decoder, encoder, doc$1, transactionOrigin) => {
	const messageType = readVarUint(decoder);
	switch (messageType) {
		case messageYjsSyncStep1:
			readSyncStep1(decoder, encoder, doc$1);
			break;
		case messageYjsSyncStep2:
			readSyncStep2(decoder, doc$1, transactionOrigin);
			break;
		case messageYjsUpdate:
			readUpdate(decoder, doc$1, transactionOrigin);
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
const readAuthMessage = (decoder, y, permissionDeniedHandler$1) => {
	switch (readVarUint(decoder)) {
		case messagePermissionDenied: permissionDeniedHandler$1(y, readVarString(decoder));
	}
};

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
		this._onChange = (e) => e.key === room && this.onmessage !== null && this.onmessage({ data: fromBase64(e.newValue || "") });
		onChange(this._onChange);
	}
	/**
	* @param {ArrayBuffer} buf
	*/
	postMessage(buf) {
		varStorage.setItem(this.room, toBase64(createUint8ArrayFromArrayBuffer(buf)));
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
	const subs = create$4();
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
//#region node_modules/@y-rb/actioncable/dist/actioncable.esm.js
function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ("value" in descriptor) descriptor.writable = true;
		Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	}
}
function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	Object.defineProperty(Constructor, "prototype", { writable: false });
	return Constructor;
}
function _extends() {
	_extends = Object.assign ? Object.assign.bind() : function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends.apply(this, arguments);
}
function _toPrimitive(input, hint) {
	if (typeof input !== "object" || input === null) return input;
	var prim = input[Symbol.toPrimitive];
	if (prim !== void 0) {
		var res = prim.call(input, hint || "default");
		if (typeof res !== "object") return res;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
	var key = _toPrimitive(arg, "string");
	return typeof key === "symbol" ? key : String(key);
}
var _messageHandlers;
var MessageType;
(function(MessageType$1) {
	MessageType$1[MessageType$1["Sync"] = 0] = "Sync";
	MessageType$1[MessageType$1["Awareness"] = 1] = "Awareness";
	MessageType$1[MessageType$1["Auth"] = 2] = "Auth";
	MessageType$1[MessageType$1["QueryAwareness"] = 3] = "QueryAwareness";
})(MessageType || (MessageType = {}));
var permissionDeniedHandler = function permissionDeniedHandler$1(provider, reason) {
	console.warn("Permission denied to access " + provider.channelName + ".\n" + reason);
};
var messageHandlers = (_messageHandlers = {}, _messageHandlers[MessageType.Sync] = function(encoder, decoder, provider, emitSynced) {
	writeVarUint(encoder, MessageType.Sync);
	var syncMessageType = readSyncMessage(decoder, encoder, provider.doc, provider);
	if (emitSynced && syncMessageType === messageYjsSyncStep2 && !provider.synced) provider.synced = true;
}, _messageHandlers[MessageType.QueryAwareness] = function(encoder, _decoder, provider, _emitSynced, _messageType) {
	writeVarUint(encoder, MessageType.Awareness);
	writeVarUint8Array(encoder, encodeAwarenessUpdate(provider.awareness, Array.from(provider.awareness.getStates().keys())));
}, _messageHandlers[MessageType.Awareness] = function(_encoder, decoder, provider) {
	applyAwarenessUpdate(provider.awareness, readVarUint8Array(decoder), provider);
}, _messageHandlers[MessageType.Auth] = function(_encoder, decoder, provider) {
	readAuthMessage(decoder, provider.doc, function(_ydoc, reason) {
		return permissionDeniedHandler(provider, reason);
	});
}, _messageHandlers);
var WebsocketProvider = /* @__PURE__ */ function() {
	function WebsocketProvider$1(doc$1, consumer$1, channel, params$1, _temp) {
		var _this = this;
		var _ref = _temp === void 0 ? {} : _temp, _ref$awareness = _ref.awareness, awareness = _ref$awareness === void 0 ? new Awareness(doc$1) : _ref$awareness, _ref$disableBc = _ref.disableBc, disableBc = _ref$disableBc === void 0 ? false : _ref$disableBc;
		this.bcSubscriber = function(data, origin) {
			if (origin !== _this) {
				var encoder = _this.process(new Uint8Array(data), false);
				if (length(encoder) > 1) publish(_this.bcChannelName, toUint8Array(encoder), _this);
			}
		};
		this.updateHandler = function(update, origin) {
			if (origin !== _this) {
				var encoder = createEncoder();
				writeVarUint(encoder, MessageType.Sync);
				writeUpdate(encoder, update);
				_this.send(toUint8Array(encoder));
			}
		};
		this.unloadHandler = function() {
			removeAwarenessStates(_this.awareness, [_this.doc.clientID], "window unload");
		};
		this.awarenessUpdateHandler = function(_ref2, _origin) {
			var added = _ref2.added, updated = _ref2.updated, removed = _ref2.removed;
			var changedClients = added.concat(updated).concat(removed);
			var encoder = createEncoder();
			writeVarUint(encoder, MessageType.Awareness);
			writeVarUint8Array(encoder, encodeAwarenessUpdate(_this.awareness, changedClients));
			_this.send(toUint8Array(encoder));
		};
		this.consumer = consumer$1;
		this.channelName = channel;
		this.bcChannelName = channel + "_" + Object.entries(params$1).map(function(k, v) {
			return k + "-" + v;
		}).join("_");
		this.params = params$1;
		this.doc = doc$1;
		this.awareness = awareness;
		this.bcconnected = false;
		this.disableBc = disableBc;
		this._synced = false;
		this.doc.on("update", this.updateHandler);
		if (typeof window !== "undefined") window.addEventListener("unload", this.unloadHandler);
		else if (typeof process !== "undefined") process.on("exit", this.unloadHandler);
		awareness.on("update", this.awarenessUpdateHandler);
		this.connect();
	}
	var _proto = WebsocketProvider$1.prototype;
	_proto.destroy = function destroy() {
		this.disconnect();
		if (typeof window !== "undefined") window.removeEventListener("unload", this.unloadHandler);
		else if (typeof process !== "undefined") process.off("exit", this.unloadHandler);
		this.awareness.off("update", this.awarenessUpdateHandler);
		this.doc.off("update", this.updateHandler);
	};
	_proto.send = function send(buffer) {
		var _this$channel;
		var update = encodeBinaryToBase64(buffer);
		(_this$channel = this.channel) == null || _this$channel.send({ update });
		if (this.bcconnected) publish(this.bcChannelName, buffer, this);
	};
	_proto.process = function process$1(buffer, emitSynced) {
		var decoder = createDecoder(buffer);
		var encoder = createEncoder();
		var messageType = readVarUint(decoder);
		var messageHandler = messageHandlers[messageType];
		if (messageHandler) messageHandler(encoder, decoder, this, emitSynced, messageType);
		else console.error("Unable to compute message");
		return encoder;
	};
	_proto.subscribe = function subscribe$1() {
		var provider = this;
		this.synced = false;
		this.channel = this.consumer.subscriptions.create(_extends({ channel: this.channelName }, this.params), {
			received: function received(message) {
				var encodedUpdate = message.update;
				var update = decodeBase64ToBinary(encodedUpdate);
				var encoder = provider.process(update, true);
				if (length(encoder) > 1) provider.send(toUint8Array(encoder));
			},
			disconnected: function disconnected() {
				provider.synced = false;
				removeAwarenessStates(provider.awareness, Array.from(provider.awareness.getStates().keys()).filter(function(client) {
					return client !== provider.doc.clientID;
				}), provider);
			},
			connected: function connected() {
				var encoder = createEncoder();
				writeVarUint(encoder, MessageType.Sync);
				writeSyncStep1(encoder, provider.doc);
				provider.send(toUint8Array(encoder));
				if (provider.awareness.getLocalState() !== null) {
					var encoderAwarenessState = createEncoder();
					writeVarUint(encoderAwarenessState, MessageType.Awareness);
					writeVarUint8Array(encoderAwarenessState, encodeAwarenessUpdate(provider.awareness, [provider.doc.clientID]));
					provider.send(toUint8Array(encoderAwarenessState));
				}
			}
		});
	};
	_proto.connectBc = function connectBc() {
		if (this.disableBc) return;
		if (!this.bcconnected) {
			subscribe(this.bcChannelName, this.bcSubscriber);
			this.bcconnected = true;
		}
		var encoderSync = createEncoder();
		writeVarUint(encoderSync, MessageType.Sync);
		writeSyncStep1(encoderSync, this.doc);
		publish(this.bcChannelName, toUint8Array(encoderSync), this);
		var encoderState = createEncoder();
		writeVarUint(encoderState, MessageType.Sync);
		writeSyncStep2(encoderState, this.doc);
		publish(this.bcChannelName, toUint8Array(encoderState), this);
		var encoderAwarenessQuery = createEncoder();
		writeVarUint(encoderAwarenessQuery, MessageType.QueryAwareness);
		publish(this.bcChannelName, toUint8Array(encoderAwarenessQuery), this);
		var encoderAwarenessState = createEncoder();
		writeVarUint(encoderAwarenessState, MessageType.Awareness);
		writeVarUint8Array(encoderAwarenessState, encodeAwarenessUpdate(this.awareness, [this.doc.clientID]));
		publish(this.bcChannelName, toUint8Array(encoderAwarenessState), this);
	};
	_proto.disconnectBc = function disconnectBc() {
		var encoder = createEncoder();
		writeVarUint(encoder, MessageType.Awareness);
		writeVarUint8Array(encoder, encodeAwarenessUpdate(this.awareness, [this.doc.clientID], /* @__PURE__ */ new Map()));
		this.send(toUint8Array(encoder));
		if (this.bcconnected) {
			unsubscribe(this.bcChannelName, this.bcSubscriber);
			this.bcconnected = false;
		}
	};
	_proto.disconnect = function disconnect() {
		var _this$channel2;
		this.disconnectBc();
		(_this$channel2 = this.channel) == null || _this$channel2.unsubscribe();
		if (this.channel != null) this.channel = void 0;
	};
	_proto.connect = function connect() {
		if (this.channel == null) {
			this.subscribe();
			this.connectBc();
		}
	};
	_createClass(WebsocketProvider$1, [{
		key: "synced",
		get: function get() {
			return this._synced;
		},
		set: function set(state) {
			if (this._synced !== state) this._synced = state;
		}
	}]);
	return WebsocketProvider$1;
}();
function encodeBinaryToBase64(bin) {
	var chars = Array.from(bin, function(ch) {
		return String.fromCharCode(ch);
	}).join("");
	return btoa(chars);
}
function decodeBase64ToBinary(update) {
	return Uint8Array.from(atob(update), function(c) {
		return c.charCodeAt(0);
	});
}

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
		const now$2 = Date.now();
		this.awareness.getStates().forEach((state, clientId) => {
			if (clientId === this.localClientId) return;
			const lastSeen = state?.lastSeen;
			if (lastSeen) {
				const timeSinceLastSeen = now$2 - lastSeen;
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
		const isVisible$1 = this.isPositionVisible(position);
		cursorElement.style.opacity = isVisible$1 ? "1" : "0.3";
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
		} else this.editorElement.addEventListener(`lexxy:initialize`, (...args$1) => {
			console.log("Editor initialized event, starting collaboration", args$1);
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
		const name = "Example User";
		const color = "#958DF1";
		const id$1 = "main";
		const doc$1 = new Doc();
		const awareness = new Awareness(doc$1);
		const docMap = /* @__PURE__ */ new Map();
		docMap.set(id$1, doc$1);
		const provider = new WebsocketProvider(doc$1, consumer, "SyncChannel", { id: "2" }, {
			awareness,
			disableBc: true
		});
		const binding = createBinding(this.editor, provider, id$1, doc$1, docMap);
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