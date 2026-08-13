// Remote cursor and selection styling. @lexical/yjs renders remote carets,
// name labels, and selection highlights with hardcoded inline styles (Arial
// labels on square color blocks) unless the editor's Lexical theme has a
// `collaboration` entry; with one, it applies these class names instead and
// exposes the peer's color as `--lexical-cursor-color`. The stylesheet leans
// on Lexxy's design tokens with fallbacks, so a customized Lexxy theme
// (radius, font) carries into the collaboration UI.
//
// An app that defines its own `collaboration` theme on the editor keeps it:
// the theme is only registered when the editor has none, and this stylesheet
// only ships alongside this theme's class names.

export const CURSOR_THEME = Object.freeze({
  cursor: 'lexxy-collab-cursor',
  cursorName: 'lexxy-collab-cursor__name',
  selection: 'lexxy-collab-selection',
  selectionBg: 'lexxy-collab-selection__bg',
});

const STYLE_ID = 'lexxy-realtime-cursor-styles';

const CSS = `
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

export function registerCursorTheme(editor) {
  const theme = editor._config.theme;
  if (theme.collaboration) return; // the app themed cursors itself; keep its look

  theme.collaboration = { ...CURSOR_THEME };
  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = CSS;
    document.head.appendChild(style);
  }
}
