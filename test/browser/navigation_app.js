import '@37signals/lexxy';
import '../../src/index.js';

const framework = new URLSearchParams(location.search).get('framework');
window.__navigation = { instance: crypto.randomUUID(), visits: 0, retired: [], errors: [], inputs: [] };
const state = window.__navigation;
addEventListener('error', event => state.errors.push(event.message));
addEventListener('unhandledrejection', event => state.errors.push(String(event.reason)));
addEventListener('input', () => state.inputs.push(Date.now()), true);

document.addEventListener(`${framework}:before-render`, () => {
  const element = document.querySelector('lexxy-collaboration');
  if (element) state.retired.push({ element, doc: element.doc, provider: element.provider });
});
document.addEventListener(`${framework}:load`, () => {
  state.visits++;
  const params = new URLSearchParams(location.search);
  const link = document.getElementById('next');
  link.search = params.toString();
  const editor = document.querySelector('lexxy-editor');
  if (!editor || editor.querySelector('lexxy-collaboration')) return;
  const collab = document.createElement('lexxy-collaboration');
  collab.setAttribute('name', params.get('name'));
  collab.setAttribute('channel-name', 'DocumentChannel');
  collab.setAttribute('channel-params', JSON.stringify({ id: params.get('room') }));
  editor.appendChild(collab);
});
if (framework === 'turbo') await import('@hotwired/turbo');
else (await import('turbolinks')).default.start();
