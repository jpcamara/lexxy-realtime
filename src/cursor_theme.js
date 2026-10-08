// Remote cursor and selection styling. Without a `collaboration` entry in
// the editor's Lexical theme, @lexical/yjs renders remote carets and name
// labels with hardcoded inline styles (an Arial label on a color block).
// With one, it applies the theme's class names instead and exposes each
// peer's color as `--lexical-cursor-color`. These rules build on Lexxy's
// design tokens, so a customized Lexxy theme carries into the
// collaboration UI. The stylesheet also holds the one layout rule the
// package needs for <yrby-document>.
//
// The same rules also ship as a real stylesheet (dist/lexxy-realtime.css
// on npm, lexxy_realtime.css in the gem) for apps whose
// Content-Security-Policy blocks injected style tags. The file stamps a
// :root marker; when it is present the runtime injection stays out of the
// way.

export const CURSOR_CSS = `
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

export function registerCursorTheme(editor) {
  const theme = editor._config.theme;
  if (theme.collaboration) return; // the app themed cursors itself; keep its look

  theme.collaboration = {
    cursor: 'lexxy-collab-cursor',
    cursorName: 'lexxy-collab-cursor__name',
    selection: 'lexxy-collab-selection',
    selectionBg: 'lexxy-collab-selection__bg',
  };
}

// Adds the stylesheet to the page once, unless the app loads the file.
// <lexxy-collaboration> calls this when it connects, so the
// <yrby-document> rule applies before the first sync.
export function injectStyles() {
  if (document.getElementById('lexxy-realtime-cursor-styles')) return;
  const fromFile = getComputedStyle(document.documentElement)
    .getPropertyValue('--lexxy-realtime-cursor-styles').trim() !== '';
  if (fromFile) return;

  const style = document.createElement('style');
  style.id = 'lexxy-realtime-cursor-styles';
  style.textContent = CURSOR_CSS;
  document.head.appendChild(style);
}
