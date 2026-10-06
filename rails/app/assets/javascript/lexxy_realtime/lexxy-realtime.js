import { Lexical } from "@37signals/lexxy";
import { ContentFormat, ContentString, Doc, Item, Map as Map$1, PermanentUserData, Snapshot, UndoManager, XmlElement, XmlHook, XmlText, YMapEvent, YTextEvent, YXmlEvent, compareRelativePositions, createAbsolutePositionFromRelativePosition, createRelativePositionFromTypeIndex, emptySnapshot, isDeleted, iterateDeletedStructs, snapshot, typeListToArraySnapshot } from "yjs";
import { YrbyDocumentElement } from "yrby-client/element";
import { ActionCableProvider as YrbyProvider } from "yrby-client";
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
//#region scripts/importmap/lexical_shim.js
const $addUpdateTag = Lexical.$addUpdateTag;
Lexical.$applyNodeReplacement;
const $caretFromPoint = Lexical.$caretFromPoint;
const $caretRangeFromSelection = Lexical.$caretRangeFromSelection;
const $cloneWithProperties$1 = Lexical.$cloneWithProperties;
const $cloneWithPropertiesEphemeral = Lexical.$cloneWithPropertiesEphemeral;
Lexical.$comparePointCaretNext;
Lexical.$copyNode;
Lexical.$create;
const $createChildrenArray = Lexical.$createChildrenArray;
Lexical.$createLineBreakNode;
Lexical.$createNodeSelection;
const $createParagraphNode = Lexical.$createParagraphNode;
Lexical.$createPoint;
const $createRangeSelection = Lexical.$createRangeSelection;
Lexical.$createRangeSelectionFromDom;
Lexical.$createTabNode;
const $createTextNode = Lexical.$createTextNode;
const $extendCaretToRange = Lexical.$extendCaretToRange;
const $findMatchingParent = Lexical.$findMatchingParent;
Lexical.$getAdjacentChildCaret;
Lexical.$getAdjacentNode;
Lexical.$getAdjacentSiblingOrParentSiblingCaret;
Lexical.$getCaretInDirection;
Lexical.$getCaretRange;
Lexical.$getCaretRangeInDirection;
const $getCharacterOffsets = Lexical.$getCharacterOffsets;
Lexical.$getChildCaret;
Lexical.$getChildCaretAtIndex;
Lexical.$getChildCaretOrSelf;
Lexical.$getCollapsedCaretRange;
Lexical.$getCommonAncestor;
Lexical.$getCommonAncestorResultBranchOrder;
const $getEditor = Lexical.$getEditor;
Lexical.$getEditorDOMRenderConfig;
Lexical.$getNearestNodeFromDOMNode;
Lexical.$getNearestRootOrShadowRoot;
const $getNodeByKey = Lexical.$getNodeByKey;
const $getNodeByKeyOrThrow = Lexical.$getNodeByKeyOrThrow;
Lexical.$getNodeFromDOMNode;
const $getPreviousSelection = Lexical.$getPreviousSelection;
const $getRoot = Lexical.$getRoot;
const $getSelection = Lexical.$getSelection;
Lexical.$getSiblingCaret;
const $getState = Lexical.$getState;
Lexical.$getStateChange;
Lexical.$getTextContent;
Lexical.$getTextNodeOffset;
Lexical.$getTextPointCaret;
Lexical.$getTextPointCaretSlice;
const $getWritableNodeState = Lexical.$getWritableNodeState;
const $hasAncestor = Lexical.$hasAncestor;
Lexical.$hasUpdateTag;
Lexical.$insertNodes;
Lexical.$isBlockElementNode;
const $isChildCaret = Lexical.$isChildCaret;
const $isDecoratorNode = Lexical.$isDecoratorNode;
Lexical.$isEditorState;
const $isElementNode = Lexical.$isElementNode;
const $isExtendableTextPointCaret = Lexical.$isExtendableTextPointCaret;
Lexical.$isInlineElementOrDecoratorNode;
const $isLeafNode = Lexical.$isLeafNode;
Lexical.$isLexicalNode;
const $isLineBreakNode = Lexical.$isLineBreakNode;
Lexical.$isNodeCaret;
Lexical.$isNodeSelection;
Lexical.$isParagraphNode;
const $isRangeSelection = Lexical.$isRangeSelection;
const $isRootNode = Lexical.$isRootNode;
const $isRootOrShadowRoot = Lexical.$isRootOrShadowRoot;
Lexical.$isSiblingCaret;
Lexical.$isTabNode;
const $isTextNode = Lexical.$isTextNode;
Lexical.$isTextPointCaret;
Lexical.$isTextPointCaretSlice;
const $isTokenOrSegmented = Lexical.$isTokenOrSegmented;
Lexical.$isTokenOrTab;
const $nodesOfType = Lexical.$nodesOfType;
Lexical.$normalizeCaret;
const $normalizeSelection__EXPERIMENTAL = Lexical.$normalizeSelection__EXPERIMENTAL;
Lexical.$onUpdate;
Lexical.$parseSerializedNode;
Lexical.$removeTextFromCaretRange;
Lexical.$rewindSiblingCaret;
const $selectAll$1 = Lexical.$selectAll;
Lexical.$setCompositionKey;
Lexical.$setPointFromCaret;
const $setSelection = Lexical.$setSelection;
Lexical.$setSelectionFromCaretRange;
Lexical.$setState;
Lexical.$splitAtPointCaretNext;
Lexical.$splitNode;
Lexical.$updateRangeSelectionFromCaretRange;
Lexical.ArtificialNode__DO_NOT_USE;
Lexical.BEFORE_INPUT_COMMAND;
Lexical.BLUR_COMMAND;
const CAN_REDO_COMMAND = Lexical.CAN_REDO_COMMAND;
const CAN_UNDO_COMMAND = Lexical.CAN_UNDO_COMMAND;
Lexical.CLEAR_EDITOR_COMMAND;
const CLEAR_HISTORY_COMMAND = Lexical.CLEAR_HISTORY_COMMAND;
Lexical.CLICK_COMMAND;
const COLLABORATION_TAG = Lexical.COLLABORATION_TAG;
Lexical.COMMAND_PRIORITY_BEFORE_CRITICAL;
Lexical.COMMAND_PRIORITY_BEFORE_EDITOR;
Lexical.COMMAND_PRIORITY_BEFORE_HIGH;
Lexical.COMMAND_PRIORITY_BEFORE_LOW;
Lexical.COMMAND_PRIORITY_BEFORE_NORMAL;
Lexical.COMMAND_PRIORITY_CRITICAL;
Lexical.COMMAND_PRIORITY_EDITOR;
const COMMAND_PRIORITY_HIGH = Lexical.COMMAND_PRIORITY_HIGH;
Lexical.COMMAND_PRIORITY_LOW;
Lexical.COMMAND_PRIORITY_NORMAL;
Lexical.COMPOSITION_END_COMMAND;
Lexical.COMPOSITION_END_TAG;
Lexical.COMPOSITION_START_COMMAND;
Lexical.COMPOSITION_START_TAG;
const CONTROLLED_TEXT_INSERTION_COMMAND = Lexical.CONTROLLED_TEXT_INSERTION_COMMAND;
Lexical.COPY_COMMAND;
Lexical.CUT_COMMAND;
Lexical.DEFAULT_EDITOR_DOM_CONFIG;
Lexical.DELETE_CHARACTER_COMMAND;
Lexical.DELETE_LINE_COMMAND;
Lexical.DELETE_WORD_COMMAND;
Lexical.DRAGEND_COMMAND;
Lexical.DRAGOVER_COMMAND;
Lexical.DRAGSTART_COMMAND;
Lexical.DROP_COMMAND;
Lexical.DecoratorNode;
const ElementNode = Lexical.ElementNode;
Lexical.FOCUS_COMMAND;
Lexical.FORMAT_ELEMENT_COMMAND;
Lexical.FORMAT_TEXT_COMMAND;
const HISTORIC_TAG = Lexical.HISTORIC_TAG;
const HISTORY_MERGE_TAG = Lexical.HISTORY_MERGE_TAG;
Lexical.HISTORY_PUSH_TAG;
Lexical.INDENT_CONTENT_COMMAND;
Lexical.INPUT_COMMAND;
Lexical.INSERT_LINE_BREAK_COMMAND;
Lexical.INSERT_PARAGRAPH_COMMAND;
Lexical.INSERT_TAB_COMMAND;
const INTERNAL_$isBlock = Lexical.INTERNAL_$isBlock;
Lexical.IS_ALL_FORMATTING;
Lexical.IS_BOLD;
Lexical.IS_CODE;
Lexical.IS_HIGHLIGHT;
Lexical.IS_ITALIC;
Lexical.IS_STRIKETHROUGH;
Lexical.IS_SUBSCRIPT;
Lexical.IS_SUPERSCRIPT;
Lexical.IS_UNDERLINE;
Lexical.KEY_ARROW_DOWN_COMMAND;
Lexical.KEY_ARROW_LEFT_COMMAND;
Lexical.KEY_ARROW_RIGHT_COMMAND;
Lexical.KEY_ARROW_UP_COMMAND;
Lexical.KEY_BACKSPACE_COMMAND;
Lexical.KEY_DELETE_COMMAND;
Lexical.KEY_DOWN_COMMAND;
Lexical.KEY_ENTER_COMMAND;
Lexical.KEY_ESCAPE_COMMAND;
Lexical.KEY_MODIFIER_COMMAND;
Lexical.KEY_SPACE_COMMAND;
Lexical.KEY_TAB_COMMAND;
Lexical.LineBreakNode;
Lexical.MOVE_TO_END;
Lexical.MOVE_TO_START;
Lexical.NODE_STATE_KEY;
Lexical.OUTDENT_CONTENT_COMMAND;
Lexical.PASTE_COMMAND;
Lexical.PASTE_TAG;
Lexical.ParagraphNode;
const REDO_COMMAND = Lexical.REDO_COMMAND;
Lexical.REMOVE_TEXT_COMMAND;
const RootNode = Lexical.RootNode;
Lexical.SELECTION_CHANGE_COMMAND;
Lexical.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND;
Lexical.SELECT_ALL_COMMAND;
Lexical.SKIP_COLLAB_TAG;
Lexical.SKIP_DOM_SELECTION_TAG;
const SKIP_SCROLL_INTO_VIEW_TAG = Lexical.SKIP_SCROLL_INTO_VIEW_TAG;
Lexical.SKIP_SELECTION_FOCUS_TAG;
Lexical.TEXT_TYPE_TO_FORMAT;
Lexical.TabNode;
const TextNode = Lexical.TextNode;
const UNDO_COMMAND = Lexical.UNDO_COMMAND;
Lexical.addClassNamesToElement;
Lexical.buildImportMap;
Lexical.configExtension;
const createCommand = Lexical.createCommand;
const createEditor = Lexical.createEditor;
Lexical.createSharedNodeState;
const createState = Lexical.createState;
Lexical.declarePeerDependency;
Lexical.defineExtension;
Lexical.flipDirection;
Lexical.getDOMOwnerDocument;
Lexical.getDOMSelection;
Lexical.getDOMSelectionFromTarget;
Lexical.getDOMTextNode;
Lexical.getEditorPropertyFromDOMNode;
Lexical.getNearestEditorFromDOMNode;
Lexical.getRegisteredNode;
Lexical.getRegisteredNodeOrThrow;
Lexical.getStaticNodeConfig;
const getStyleObjectFromCSS$2 = Lexical.getStyleObjectFromCSS;
Lexical.getTextDirection;
Lexical.getTransformSetFromKlass;
Lexical.isBlockDomNode;
Lexical.isCurrentlyReadOnlyMode;
Lexical.isDOMDocumentNode;
Lexical.isDOMNode;
Lexical.isDOMTextNode;
Lexical.isDOMUnmanaged;
Lexical.isDocumentFragment;
Lexical.isExactShortcutMatch;
Lexical.isHTMLAnchorElement;
Lexical.isHTMLElement;
Lexical.isInlineDomNode;
Lexical.isLexicalEditor;
Lexical.isModifierMatch;
Lexical.isSelectionCapturedInDecoratorInput;
Lexical.isSelectionWithinEditor;
Lexical.makeStepwiseIterator;
const mergeRegister = Lexical.mergeRegister;
Lexical.normalizeClassNames;
Lexical.removeClassNamesFromElement;
const removeFromParent = Lexical.removeFromParent;
Lexical.resetRandomKey;
Lexical.safeCast;
Lexical.setDOMStyleFromCSS;
const setDOMStyleObject = Lexical.setDOMStyleObject;
Lexical.setDOMUnmanaged;
Lexical.setNodeIndentFromDOM;
Lexical.shallowMergeConfig;
Lexical.toggleTextFormatType;
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
	const prevStyles = getStyleObjectFromCSS$2($isRangeSelection(target) ? target.style : $isTextNode(target) ? target.getStyle() : target.getTextStyle());
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
	const styleObject = getStyleObjectFromCSS$2(css);
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
		const styleObject = getStyleObjectFromCSS$2(css);
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
const getStyleObjectFromCSS$1 = getStyleObjectFromCSS$2;
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
		if (sharedType instanceof XmlText) {
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
		if (sharedType instanceof XmlText) {
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
	const root = $createCollabElementNode(doc.get("root", XmlText), null, "root");
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
		root: doc.get(rootName, XmlElement)
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
		collabNode = $createCollabElementNode(new XmlText(), parent, nodeType);
		collabNode.syncPropertiesFromLexical(binding, lexicalNode, null);
		collabNode.syncChildrenFromLexical(binding, lexicalNode, null, null, null);
	} else if ($isTextNode(lexicalNode)) {
		collabNode = $createCollabTextNode(new Map$1(), lexicalNode.__text, parent, nodeType);
		collabNode.syncPropertiesAndTextFromLexical(binding, lexicalNode, null);
	} else if ($isLineBreakNode(lexicalNode)) {
		const map = new Map$1();
		map.set("__type", "linebreak");
		collabNode = $createCollabLineBreakNode(map, parent);
	} else if ($isDecoratorNode(lexicalNode)) {
		collabNode = $createCollabDecoratorNode(new XmlElement(), parent, nodeType);
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
		if (sharedType instanceof XmlText) return $createCollabElementNode(sharedType, targetParent, type);
		else if (sharedType instanceof Map$1) {
			if (type === "linebreak") return $createCollabLineBreakNode(sharedType, targetParent);
			return $createCollabTextNode(sharedType, "", targetParent, type);
		} else if (sharedType instanceof XmlElement) return $createCollabDecoratorNode(sharedType, targetParent, type);
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
	const properties = keysChanged === null ? sharedType instanceof Map$1 ? Array.from(sharedType.keys()) : sharedType instanceof XmlText || sharedType instanceof XmlElement ? Object.keys(sharedType.getAttributes()) : Object.keys(sharedType) : Array.from(keysChanged);
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
	if (sharedType instanceof Map$1) return sharedType.get(property);
	else if (sharedType instanceof XmlText || sharedType instanceof XmlElement) return sharedType.getAttribute(property);
	else return sharedType[property];
}
function sharedTypeSet(sharedType, property, nextValue) {
	if (sharedType instanceof Map$1) sharedType.set(property, nextValue);
	else sharedType.setAttribute(property, nextValue);
}
function $syncNodeStateToLexical(sharedType, lexicalNode) {
	const existingState = sharedTypeGet(sharedType, "__state");
	if (!(existingState instanceof Map$1)) return;
	$getWritableNodeState(lexicalNode).updateFromJSON(existingState.toJSON());
}
function syncNodeStateFromLexical(binding, sharedType, prevLexicalNode, nextLexicalNode) {
	const nextState = nextLexicalNode.__state;
	const existingState = sharedType.doc === null ? void 0 : sharedTypeGet(sharedType, "__state");
	if (!nextState) return;
	const [unknown, known] = nextState.getInternalState();
	const prevState = prevLexicalNode && prevLexicalNode.__state;
	const stateMap = existingState instanceof Map$1 ? existingState : new Map$1();
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
			if (childType instanceof XmlElement) {
				const n = $createOrUpdateNodeFromYElement(childType, binding, /* @__PURE__ */ new Set(), false, snapshot, prevSnapshot, computeYChange);
				if (n !== null) children.push(n);
			} else if (childType instanceof XmlText) {
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
	const type = new XmlText();
	$updateYText(type, nodes, binding);
	return type;
};
const createTypeFromElementNode = (node, binding) => {
	const type = new XmlElement(node.getType());
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
	if (ytype instanceof XmlElement && !(lnode instanceof Array) && matchNodeName(ytype, lnode)) {
		const normalizedContent = normalizeNodeContent(lnode);
		return ytype._length === normalizedContent.length && equalAttrs(ytype.getAttributes(), {
			...propertiesToAttributes(lnode, binding),
			...stateToAttributes(lnode)
		}) && ytype.toArray().every((ychild, i) => equalYTypePNode(ychild, normalizedContent[i], binding));
	}
	return ytype instanceof XmlText && lnode instanceof Array && equalYTextLText(ytype, lnode, binding);
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
		if (leftY instanceof XmlHook) break;
		else if (mappedIdentity(binding.mapping.get(leftY), leftP)) foundMappedChild = true;
		else if (!equalYTypePNode(leftY, leftP, binding)) break;
	}
	for (; left + right < minCnt; right++) {
		const rightY = yChildren[yChildCnt - right - 1];
		const rightP = pChildren[pChildCnt - right - 1];
		if (rightY instanceof XmlHook) break;
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
	if (yDomFragment instanceof XmlElement && yDomFragment.nodeName !== node.getType() && !(isRootElement(yDomFragment) && node.getType() === RootNode.getType())) throw new Error("node name mismatch!");
	binding.mapping.set(yDomFragment, node);
	if (yDomFragment instanceof XmlElement) {
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
		if (leftY instanceof XmlHook) break;
		else if (mappedIdentity(binding.mapping.get(leftY), leftL)) {
			if (leftL instanceof ElementNode && dirtyElements.has(leftL.getKey())) $updateYFragment(y, leftY, leftL, binding, dirtyElements);
		} else if (equalYTypePNode(leftY, leftL, binding)) binding.mapping.set(leftY, leftL);
		else break;
	}
	for (; right + left < minCnt; right++) {
		const rightY = yChildren[yChildCnt - right - 1];
		const rightL = lChildren[lChildCnt - right - 1];
		if (rightY instanceof XmlHook) break;
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
		if (leftY instanceof XmlText && leftL instanceof Array) {
			if (!equalYTextLText(leftY, leftL, binding)) $updateYText(leftY, leftL, binding);
			left += 1;
		} else {
			let updateLeft = leftY instanceof XmlElement && matchNodeName(leftY, leftL);
			let updateRight = rightY instanceof XmlElement && matchNodeName(rightY, rightL);
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
	if (yChildCnt === 1 && lChildCnt === 0 && yChildren[0] instanceof XmlText) {
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
	if (yType instanceof XmlElement) {
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
	if (!(target._item && target._item.parentSub === "__state" && getNodeTypeFromSharedType(target) === void 0 && (target.parent instanceof XmlText || target.parent instanceof XmlElement || target.parent instanceof Map$1))) return false;
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
	if (target instanceof XmlElement && event instanceof YXmlEvent) $createOrUpdateNodeFromYElement(target, binding, event.attributesChanged, event.childListChanged);
	else if (target instanceof XmlText && event instanceof YTextEvent) {
		const parent = target.parent;
		if (parent instanceof XmlElement) $createOrUpdateNodeFromYElement(parent, binding, /* @__PURE__ */ new Set(), true);
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
const createUndoManager = mod.createUndoManager;
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
	document.addEventListener("turbo:before-cache", removeUploadsBeforeTurboDiscard, true);
	document.addEventListener("turbo:before-frame-render", removeUploadsBeforeTurboDiscard, true);
	const cancelOrphanSweep = removeOrphanedUploadsWhenAlone(editor, provider, awareness);
	return () => {
		window.removeEventListener("pagehide", removeOwnPendingUploads);
		document.removeEventListener("turbo:before-cache", removeUploadsBeforeTurboDiscard, true);
		document.removeEventListener("turbo:before-frame-render", removeUploadsBeforeTurboDiscard, true);
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
/* <yrby-document> only groups the editor with its session. Custom
   elements are inline by default, which would wrap the editor in an inline
   box and can change form layout, so it renders no box of its own. */
yrby-document {
  display: contents;
}

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
}
function injectStyles() {
	if (document.getElementById("lexxy-realtime-cursor-styles")) return;
	if (getComputedStyle(document.documentElement).getPropertyValue("--lexxy-realtime-cursor-styles").trim() !== "") return;
	const style = document.createElement("style");
	style.id = "lexxy-realtime-cursor-styles";
	style.textContent = CURSOR_CSS;
	document.head.appendChild(style);
}
//#endregion
//#region src/text_reconciliation.js
const bindings = /* @__PURE__ */ new WeakSet();
const patchedPrototypes = /* @__PURE__ */ new WeakSet();
const repairs = /* @__PURE__ */ new WeakSet();
const elementsWithRepairs = /* @__PURE__ */ new WeakSet();
const reconciliationOrigin = Object.freeze({ name: "lexxy-realtime reconciliation" });
function registerTextReconciliation(binding) {
	bindings.add(binding);
	const proto = binding.root.constructor.prototype;
	if (!patchedPrototypes.has(proto)) {
		const apply = proto.applyChildrenYjsDelta;
		proto.applyChildrenYjsDelta = function(current, deltas) {
			if (!bindings.has(current)) return apply.call(this, current, deltas);
			rebuildChildren(this, current, deltas, apply);
		};
		const syncChildren = proto.syncChildrenFromYjs;
		proto.syncChildrenFromYjs = function(current) {
			const result = syncChildren.call(this, current);
			if (bindings.has(current)) releaseEmptyRepairs(this);
			return result;
		};
		patchedPrototypes.add(proto);
	}
	return () => bindings.delete(binding);
}
function sharedTypeOf(sharedType) {
	return sharedType instanceof Map$1 ? sharedType.get("__type") : sharedType.getAttribute?.("__type");
}
function rebuildChildren(element, binding, deltas, apply) {
	const sources = survivingTextSources(element._children, deltas);
	const xmlText = element._xmlText;
	let snapshot = xmlText.toDelta();
	const headers = [];
	let previousIsText = false;
	let offset = 0;
	for (const { insert } of snapshot) if (typeof insert === "string") {
		if (!previousIsText && insert.length) {
			const header = textHeader(binding, sources.get(offset));
			binding.doc.transact(() => xmlText.insertEmbed(offset + headers.length, header), reconciliationOrigin);
			headers.push(header);
			previousIsText = true;
		}
		offset += insert.length;
	} else {
		const type = sharedTypeOf(insert);
		previousIsText = insert instanceof Map$1 && typeof type === "string" && type !== "linebreak";
		offset++;
	}
	if (headers.length) snapshot = xmlText.toDelta();
	snapshot = snapshot.filter(({ insert }) => typeof insert === "string" || typeof sharedTypeOf(insert) === "string");
	element._children = [];
	for (const { insert } of snapshot) {
		const child = typeof insert === "object" && insert._collabNode;
		if (child && typeof child._text === "string") {
			child._text = "";
			child._normalized = false;
		}
	}
	apply.call(element, binding, snapshot);
	for (const header of headers) if (header._collabNode) repairs.add(header._collabNode);
	if (headers.length) elementsWithRepairs.add(element);
}
function survivingTextSources(children, deltas) {
	const sources = /* @__PURE__ */ new Map();
	if (!deltas.some((delta) => delta.delete != null)) return sources;
	const ranges = [];
	let end = 0;
	for (const child of children) {
		const start = end;
		end += child.getSize();
		if (typeof child._text === "string") ranges.push({
			start,
			end,
			child
		});
	}
	let before = 0;
	let after = 0;
	for (const delta of deltas) if (delta.retain != null) {
		before += delta.retain;
		after += delta.retain;
	} else if (delta.delete != null) {
		const end = before + delta.delete;
		for (const range of ranges) if (range.start >= before && range.start < end && range.end > end) sources.set(after, range.child);
		before = end;
	} else if (delta.insert != null) after += typeof delta.insert === "string" ? delta.insert.length : 1;
	return sources;
}
function textHeader(binding, source) {
	const node = source?.getNode();
	const properties = binding.nodeProperties.get(node?.getType() || "text");
	const header = new Map$1(Object.entries(properties).map(([key, value]) => [key, node ? node[key] : value]));
	const unmergeable = $createTextNode().toggleUnmergeable().getDetail();
	header.set("__detail", (node?.getDetail() || properties.__detail || 0) | unmergeable);
	const state = node?.exportJSON().$;
	if (state && Object.keys(state).length) header.set("__state", new Map$1(Object.entries(state)));
	return header;
}
function releaseEmptyRepairs(element) {
	if (!elementsWithRepairs.has(element)) return;
	elementsWithRepairs.delete(element);
	const children = element._children;
	for (let i = 0; i < children.length; i++) {
		const child = children[i];
		if (!repairs.has(child)) continue;
		if (child._text === "" && typeof children[i + 1]?._text === "string") {
			repairs.delete(child);
			const node = child.getNode();
			if (node?.isUnmergeable()) node.toggleUnmergeable();
		} else elementsWithRepairs.add(element);
	}
}
function syncEditorUpdate(binding, provider, update) {
	const { editorState, prevEditorState, dirtyElements, dirtyLeaves, tags } = update;
	const remote = tags.has(COLLABORATION_TAG) || tags.has(HISTORIC_TAG);
	let { normalizedNodes } = update;
	const sync = () => editorState.read(() => {
		if (remote) for (const key of dirtyElements.keys()) {
			const parent = key === "root" ? binding.root : binding.collabNodeMap.get(key);
			for (const child of parent?._children || []) if (child._text === "" && $getNodeByKey(child._key) === null) {
				if (normalizedNodes === update.normalizedNodes) normalizedNodes = new Set(normalizedNodes);
				normalizedNodes.add(child._key);
			}
		}
		syncLexicalUpdateToYjs(binding, provider, prevEditorState, editorState, dirtyElements, dirtyLeaves, normalizedNodes, tags);
	});
	if (remote) binding.doc.transact(sync, reconciliationOrigin);
	else sync();
}
//#endregion
//#region src/selection_normalization.js
function registerSelectionNormalization(editor) {
	return editor.registerCommand(CONTROLLED_TEXT_INSERTION_COMMAND, () => {
		const selection = $getSelection();
		if ($isRangeSelection(selection) && selection.isCollapsed() && selection.anchor.type === "element") {
			const element = selection.anchor.getNode();
			const offset = selection.anchor.offset;
			const child = element.getChildAtIndex(offset === element.getChildrenSize() ? offset - 1 : offset);
			if ($isTextNode(child) && child.isSimpleText() && !child.isUnmergeable()) $normalizeSelection__EXPERIMENTAL(selection);
		}
		return false;
	}, COMMAND_PRIORITY_HIGH);
}
//#endregion
//#region src/editor_collaboration.js
function setConsumer(consumer) {
	YrbyDocumentElement.consumer = consumer;
}
const boundDocs = /* @__PURE__ */ new WeakMap();
const RECOVERY_INTERVAL_MS = 15e3;
const Base = typeof HTMLElement === "undefined" ? class {} : HTMLElement;
var Collaboration = class extends Base {
	#hostDoc = null;
	#hostProvider = null;
	#editorElement = null;
	#yrbyDocument = null;
	#bound = null;
	#lastRecoveryAt = 0;
	#recoveryTimer = null;
	#recovering = false;
	get doc() {
		return this.#bound?.doc ?? this.#hostDoc;
	}
	set doc(doc) {
		this.#hostDoc = doc ?? null;
	}
	get provider() {
		return this.#bound?.provider ?? this.#hostProvider;
	}
	set provider(provider) {
		this.#hostProvider = provider ?? null;
	}
	get awareness() {
		return this.#bound?.provider.awareness;
	}
	get binding() {
		return this.#bound?.binding;
	}
	connectedCallback() {
		injectStyles();
		const editorElement = this.closest("lexxy-editor");
		if (!editorElement) {
			console.error("<lexxy-collaboration> must be placed inside a <lexxy-editor>.");
			return;
		}
		const yrbyDocument = this.#hostProvider ? null : this.closest("yrby-document");
		if (this.#bound && editorElement === this.#editorElement && yrbyDocument === this.#yrbyDocument && editorElement.editor === this.#bound.editor) return;
		this.#stop();
		if (!this.#hostProvider && !yrbyDocument) {
			console.error("<lexxy-collaboration> needs a <yrby-document> ancestor, or a doc and provider assigned before it connects.");
			return;
		}
		this.#editorElement = editorElement;
		editorElement.addEventListener("lexxy:initialize", this.#onInitialize);
		if (!this.#hostProvider) {
			this.#yrbyDocument = yrbyDocument;
			yrbyDocument.addEventListener("yrby:synced", this.#onSynced);
		}
		this.#start();
	}
	disconnectedCallback() {
		queueMicrotask(() => {
			if (!this.isConnected) this.#stop();
		});
	}
	#onSynced = (event) => {
		if (event.target === this.#yrbyDocument) this.#start();
	};
	#onInitialize = () => this.#start();
	#start() {
		if (!this.isConnected || !this.#editorElement) return;
		const editor = this.#editorElement.editor;
		if (!editor) return;
		if (this.#bound && this.#bound.editor !== editor) this.#unbind();
		if (this.#hostProvider) {
			if (this.#bound) return;
			const provider = this.#hostProvider;
			this.#bind(this.#hostDoc ?? provider.doc ?? new Doc(), provider, null);
			return;
		}
		const synced = this.#yrbyDocument.current;
		if (!synced) return;
		if (this.#bound?.synced === synced) return;
		this.#unbind();
		this.#bind(synced.doc, synced.provider, synced);
	}
	#stop() {
		this.#editorElement?.removeEventListener("lexxy:initialize", this.#onInitialize);
		this.#yrbyDocument?.removeEventListener("yrby:synced", this.#onSynced);
		this.#yrbyDocument = null;
		this.#editorElement = null;
		this.#recovering = false;
		this.#unbind();
	}
	#unbind() {
		const bound = this.#bound;
		if (!bound) return;
		this.#bound = null;
		clearTimeout(this.#recoveryTimer);
		this.#recoveryTimer = null;
		bound.teardown();
	}
	#bind(doc, provider, synced) {
		const editorElement = this.#editorElement;
		const editor = editorElement.editor;
		const owner = boundDocs.get(doc);
		if (owner) {
			if (owner.isConnected) {
				console.error("<lexxy-collaboration>: this Y.Doc is already bound to another editor.");
				return;
			}
			owner.#unbind();
		}
		const id = this.getAttribute("doc-id") || "main";
		const name = this.getAttribute("name") || "Example User";
		const color = this.getAttribute("color") || "#958DF1";
		const awareness = provider.awareness;
		const recovery = !!synced && this.#recovering;
		this.#recovering = false;
		const initialEditorState = recovery ? null : editor.getEditorState();
		editor.update(() => $getRoot().clear(), {
			tag: HISTORY_MERGE_TAG,
			discrete: true
		});
		const binding = createBinding(editor, provider, id, doc, /* @__PURE__ */ new Map([[id, doc]]), attachmentExclusions(editor));
		boundDocs.set(doc, this);
		patchCollabElementSplice(binding);
		const stopTextReconciliation = registerTextReconciliation(binding);
		const stopSelectionNormalization = registerSelectionNormalization(editor);
		editor.update(() => {
			binding.root.syncPropertiesFromYjs(binding, null);
			binding.root.applyChildrenYjsDelta(binding, binding.root.getSharedType().toDelta());
			binding.root.syncChildrenFromYjs(binding);
		}, {
			tag: COLLABORATION_TAG,
			discrete: true
		});
		let bound;
		const sync = registerCollaborationListeners(editor, provider, binding, (error) => this.#desync(bound, error));
		const cancelBootstrap = bootstrapWhenSynced(editor, provider, binding, initialEditorState, () => sync.clearUndo());
		registerCursorTheme(editor);
		const cursorsContainer = createCursorsContainer(editorElement);
		binding.cursorsContainer = cursorsContainer;
		initLocalState(provider, name, color, true, {
			name,
			color
		});
		setLocalStateFocus(provider, name, color, true, {
			name,
			color
		});
		const cancelUploadCleanup = registerUploadCleanup(editorElement, editor, provider, awareness);
		const renderCursors = () => syncCursorPositions(binding, provider);
		awareness.on("update", renderCursors);
		const unsubscribeCursorRender = editor.registerUpdateListener(renderCursors);
		renderCursors();
		if (recovery) editor.dispatchCommand(CLEAR_HISTORY_COMMAND, void 0);
		const onAbort = () => {
			if (this.#bound === bound) this.#unbind();
		};
		synced?.signal.addEventListener("abort", onAbort, { once: true });
		bound = {
			editor,
			doc,
			provider,
			binding,
			synced,
			stopSyncing: sync.stop,
			editableBeforeDesync: null,
			teardown: () => {
				synced?.signal.removeEventListener("abort", onAbort);
				cancelUploadCleanup();
				awareness.off("update", renderCursors);
				unsubscribeCursorRender();
				sync.stop();
				stopSelectionNormalization();
				stopTextReconciliation();
				cancelBootstrap();
				cursorsContainer.remove();
				releaseBinding(binding);
				boundDocs.delete(doc);
				synced?.lease.setPresence(null);
				if (bound.editableBeforeDesync !== null) editor.setEditable(bound.editableBeforeDesync);
			}
		};
		this.#bound = bound;
	}
	#desync(bound, error) {
		if (this.#bound !== bound) return;
		bound.stopSyncing();
		bound.editableBeforeDesync = bound.editor.isEditable();
		bound.editor.setEditable(false);
		const recovering = !!bound.synced;
		this.dispatchEvent(new CustomEvent("lexxy-realtime:desync", {
			bubbles: true,
			detail: {
				error,
				recovering
			}
		}));
		if (!recovering) return;
		const rebuild = () => {
			this.#recoveryTimer = null;
			if (this.#bound !== bound || !this.isConnected) return;
			this.#lastRecoveryAt = Date.now();
			this.#recovering = true;
			const yrbyDocument = this.#yrbyDocument;
			bound.synced.session.discard();
			yrbyDocument.retry();
		};
		const wait = this.#lastRecoveryAt + RECOVERY_INTERVAL_MS - Date.now();
		if (wait > 0) this.#recoveryTimer = setTimeout(rebuild, wait);
		else queueMicrotask(rebuild);
	}
};
function createCursorsContainer(editorElement) {
	const host = editorElement.querySelector(".lexxy-editor-container") || editorElement;
	if (getComputedStyle(host).position === "static") host.style.position = "relative";
	const container = document.createElement("div");
	container.className = "lexxy-collab-cursors";
	container.style.cssText = "position:absolute;inset:0;pointer-events:none;";
	host.appendChild(container);
	return container;
}
function releaseBinding(binding) {
	const nodes = /* @__PURE__ */ new Set([binding.root, ...binding.collabNodeMap.values()]);
	for (const node of nodes) {
		for (const child of node._children || []) nodes.add(child);
		const type = node.getSharedType();
		if (type._collabNode === node) delete type._collabNode;
	}
	binding.root.destroy(binding);
	binding.cursors.clear();
	binding.cursorsContainer = null;
	binding.docMap.clear();
}
function emptyEditorState(state) {
	return state.read(() => {
		const root = $getRoot();
		if (root.getChildrenSize() === 0) return true;
		const only = root.getChildrenSize() === 1 && root.getFirstChild();
		return !!only && only.getType() === "paragraph" && only.getChildrenSize() === 0;
	});
}
function bootstrapWhenSynced(editor, provider, binding, initialEditorState, onSeeded) {
	let done = false;
	let timer;
	const seed = () => {
		if (done || !provider.synced) return;
		done = true;
		if (timer) clearInterval(timer);
		if (binding.root.getSharedType().length > 0) return;
		if (initialEditorState && !emptyEditorState(initialEditorState)) {
			editor.setEditorState(initialEditorState, { tag: HISTORY_MERGE_TAG });
			onSeeded?.();
			return;
		}
		editor.update(() => {
			const root = $getRoot();
			root.clear();
			root.append($createParagraphNode());
		}, {
			tag: HISTORY_MERGE_TAG,
			discrete: true
		});
		onSeeded?.();
	};
	seed();
	if (!done) if (provider.whenSynced?.then) provider.whenSynced.then(seed, () => {});
	else {
		timer = setInterval(seed, 50);
		if (typeof timer?.unref === "function") timer.unref();
	}
	return () => {
		done = true;
		if (timer) clearInterval(timer);
	};
}
function createRemoteApplier(provider, binding, { onDesync, sync = syncYjsChangesToLexical } = {}) {
	let desynced = false;
	return (events, transaction) => {
		if (transaction.origin === binding || transaction.origin === reconciliationOrigin) return;
		if (desynced) return;
		try {
			sync(binding, provider, events, transaction.origin instanceof UndoManager);
		} catch (error) {
			desynced = true;
			console.error("lexxy-realtime: a remote update failed to apply; the editor is out of sync with the document.", error);
			onDesync?.(error);
		}
	};
}
function registerCollaborationListeners(editor, provider, binding, onDesync) {
	const unsubscribeUpdateListener = editor.registerUpdateListener((update) => {
		if (!update.tags.has("skip-collab")) syncEditorUpdate(binding, provider, update);
	});
	const observer = createRemoteApplier(provider, binding, { onDesync });
	const root = binding.root.getSharedType();
	root.observeDeep(observer);
	const undo = registerYjsUndo(editor, binding);
	let stopped = false;
	return {
		clearUndo: () => undo.clear(),
		stop() {
			if (stopped) return;
			stopped = true;
			unsubscribeUpdateListener();
			root.unobserveDeep(observer);
			undo.stop();
		}
	};
}
function registerYjsUndo(editor, binding) {
	const undoManager = createUndoManager(binding, binding.root.getSharedType());
	const report = () => {
		editor.dispatchCommand(CAN_UNDO_COMMAND, undoManager.undoStack.length > 0);
		editor.dispatchCommand(CAN_REDO_COMMAND, undoManager.redoStack.length > 0);
	};
	undoManager.on("stack-item-added", report);
	undoManager.on("stack-item-popped", report);
	undoManager.on("stack-cleared", report);
	const unregister = mergeRegister(editor.registerCommand(UNDO_COMMAND, () => {
		undoManager.undo();
		return true;
	}, COMMAND_PRIORITY_HIGH), editor.registerCommand(REDO_COMMAND, () => {
		undoManager.redo();
		return true;
	}, COMMAND_PRIORITY_HIGH), editor.registerCommand(CLEAR_HISTORY_COMMAND, () => {
		undoManager.clear();
		return false;
	}, COMMAND_PRIORITY_HIGH));
	report();
	return {
		clear: () => undoManager.clear(),
		stop() {
			unregister();
			undoManager.destroy();
			editor.dispatchCommand(CAN_UNDO_COMMAND, false);
			editor.dispatchCommand(CAN_REDO_COMMAND, false);
		}
	};
}
//#endregion
//#region src/index.js
if (typeof customElements !== "undefined" && !customElements.get("lexxy-collaboration")) customElements.define("lexxy-collaboration", Collaboration);
//#endregion
export { Collaboration, YrbyProvider, setConsumer };

//# sourceMappingURL=lexxy-realtime.js.map