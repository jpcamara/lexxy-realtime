// Navigation harness. navigation-editor.html renders the editor inside a
// <yrby-document> with no grant. On each framework load this script sets
// the grant and the collaborator name from the query string, which binds
// the editor. It records what the test needs in window.__navigation.
import '@37signals/lexxy';
import '../../src/index.js';

const framework = new URLSearchParams(location.search).get('framework');
window.__navigation = { instance: crypto.randomUUID(), visits: 0, retired: [], errors: [], inputs: [], keys: [] };
const state = window.__navigation;
addEventListener('error', event => state.errors.push(event.message));
addEventListener('unhandledrejection', event => state.errors.push(String(event.reason)));
addEventListener('input', () => state.inputs.push(Date.now()), true);
addEventListener('keydown', event => {
  if (event.target.closest?.('[contenteditable]') && /^[ABC]$/.test(event.key)) state.keys.push(event.key);
}, true);

// Keep the page's elements and session before the framework replaces the
// body, so the test can check that they let go of the document.
document.addEventListener(`${framework}:before-render`, () => {
  const element = document.querySelector('lexxy-collaboration');
  const yrbyDocument = document.querySelector('yrby-document');
  if (element) state.retired.push({ element, session: yrbyDocument?.session });
});
document.addEventListener(`${framework}:load`, () => {
  state.visits++;
  const params = new URLSearchParams(location.search);
  const link = document.getElementById('next');
  link.search = params.toString();
  const element = document.querySelector('lexxy-collaboration');
  if (!element) return;
  element.setAttribute('name', params.get('name'));
  element.setAttribute('doc-id', params.get('room'));
  document.querySelector('yrby-document').setAttribute('grant', params.get('room'));
});
if (framework === 'turbo') await import('@hotwired/turbo');
else (await import('turbolinks')).default.start();
