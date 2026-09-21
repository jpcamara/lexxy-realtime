// Three independent browsers type concurrently while one navigates through
// real Turbo/Turbolinks visits and history restoration. No simulated events.
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const execute = promisify(execFile);
const AB = resolve('node_modules/.bin/agent-browser');
const PORT = process.env.PORT || 4111;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const output = resolve('test/server/data/navigation', String(Date.now()));
mkdirSync(output, { recursive: true });
async function ab(session, ...args) {
  const { stdout } = await execute(AB, ['--session', session, ...args], { timeout: 40000, maxBuffer: 1024 * 1024 });
  return stdout.trim();
}
async function evaluate(session, code) {
  return JSON.parse(await ab(session, 'eval', `JSON.stringify((() => { ${code} })())`)).valueOf();
}
async function value(session, code) { return JSON.parse(await evaluate(session, code)); }
async function wait(session, condition) {
  for (let i = 0; i < 90; i++) {
    if (await value(session, `return !!(${condition});`)) return;
    await delay(100);
  }
  throw new Error(`${session} timed out: ${condition}`);
}
const ready = `document.querySelector('lexxy-collaboration')?.status === 'active' && document.querySelector('lexxy-collaboration').provider.synced`;
const text = `document.querySelector('#editor [contenteditable]')?.textContent || ''`;
let checks = 0;
function check(condition, label) { assert.ok(condition, label); checks++; console.log('ok:', label); }

for (const framework of ['turbo', 'turbolinks']) {
  const sessions = ['a', 'b', 'c'].map(name => `lx-${framework}-${process.pid}-${name}`);
  const room = `nav-${framework}-${Date.now()}`;
  const initialChecks = checks;
  const expected = { A: 0, B: 0, C: 0 };
  const url = name => `http://localhost:${PORT}/navigation-editor.html?framework=${framework}&room=${room}&name=${name}`;
  try {
    // Seed a single shared root before the other editors join.
    for (const [index, session] of sessions.entries()) {
      await ab(session, 'open', url(['Ada', 'Bea', 'Cam'][index]));
      await wait(session, ready);
      await wait(session, `!document.querySelector('lexxy-collaboration').provider.hasPending && document.querySelector('lexxy-collaboration').doc.get('root').length > 0`);
    }
    const originalInstance = await value(sessions[0], 'return window.__navigation.instance;');
    async function type(session, letter, count) {
      await ab(session, 'click', '#editor [contenteditable]');
      await ab(session, 'press', 'ControlOrMeta+End');
      // agent-browser's keyboard type uses CDP insertText per character.
      // Exercise actual keydown/keyup handling during concurrent remote edits.
      for (let i = 0; i < count; i++) await ab(session, 'press', letter);
      expected[letter] += count;
      await wait(session, `(${text}).split('${letter}').length - 1 === ${expected[letter]}`);
    }
    async function converge() {
      const condition = Object.entries(expected).map(([letter, count]) => `s.split('${letter}').length - 1 === ${count}`).join(' && ');
      for (const session of sessions) {
        await wait(session, `(() => { const s = ${text}; return ${condition}; })()`);
      }
      const texts = await Promise.all(sessions.map(session => value(session, `return ${text};`)));
      check(new Set(texts).size === 1, `${framework}: all three editors converge exactly`);
    }
    await Promise.all(sessions.map((session, i) => type(session, ['A', 'B', 'C'][i], 24)));
    await converge();

    // Peers keep typing in bursts across six real page transitions.
    const writer = async (session, letter) => {
      for (let i = 0; i < 12; i++) { await type(session, letter, 4); await delay(150); }
    };
    const navigate = async () => {
      for (let i = 0; i < 3; i++) {
        await ab(sessions[0], 'click', '#next');
        await wait(sessions[0], `location.pathname === '/navigation-away.html' && !document.querySelector('lexxy-collaboration')`);
        await wait(sessions[0], `window.__navigation.retired.every(r => r.element.status === 'detached' && r.doc.isDestroyed && r.provider.status === 'disconnected')`);
        check(true, `${framework}: navigation ${i + 1} disposes retired bindings and documents`);
        if (i === 1) await ab(sessions[0], 'eval', 'history.back()');
        else await ab(sessions[0], 'click', '#next');
        await wait(sessions[0], ready);
      }
    };
    await Promise.all([navigate(), writer(sessions[1], 'B'), writer(sessions[2], 'C')]);
    await converge();
    await type(sessions[0], 'A', 24);
    await converge();
    const summary = await value(sessions[0], `return { instance: window.__navigation.instance, visits: window.__navigation.visits, errors: window.__navigation.errors, overlays: document.querySelectorAll('.lexxy-collab-cursors').length, text: ${text} };`);
    check(summary.instance === originalInstance && summary.visits === 7, `${framework}: visits and history use the framework without full reloads`);
    check(summary.overlays === 1, `${framework}: one cursor overlay after navigation`);
    const keys = await Promise.all(sessions.map(s => value(s, 'return window.__navigation.keys;')));
    check(keys.every((events, i) => events.length === expected[['A', 'B', 'C'][i]] && events.every(key => key === ['A', 'B', 'C'][i])), `${framework}: every intended key reached its editor`);
    const inputTimes = await Promise.all(sessions.map(s => value(s, 'return window.__navigation.inputs;')));
    check(Math.max(...inputTimes[1]) > Math.min(...inputTimes[2]) && Math.max(...inputTimes[2]) > Math.min(...inputTimes[1]), `${framework}: peer keyboard input overlapped`);
    for (const session of sessions) {
      check((await value(session, 'return window.__navigation.errors;')).length === 0, `${session}: no uncaught errors`);
    }
    await ab(sessions[0], 'screenshot', resolve(output, `${framework}.png`));
    // A cold reader verifies server persistence, independently of live peers.
    const reader = `${sessions[0]}-reader`;
    sessions.push(reader);
    await ab(reader, 'open', url('Fresh reader'));
    await wait(reader, ready);
    await wait(reader, `(${text}) === ${JSON.stringify(summary.text)}`);
    check(true, `${framework}: fresh reader recovers every edit`);
    writeFileSync(resolve(output, `${framework}.json`), JSON.stringify({ ...summary, expected, keyEvents: keys.map(events => events.length), inputEvents: inputTimes.map(t => t.length), checks: checks - initialChecks }, null, 2));
  } catch (error) {
    const editors = await Promise.allSettled(sessions.map(session => value(session, `
      const element = document.querySelector('lexxy-collaboration');
      return { session: ${JSON.stringify(session)}, status: element?.status,
        synced: element?.provider?.synced, pending: element?.provider?.hasPending,
        text: ${text}, shared: element?.doc?.get('root').toString(),
        inputs: window.__navigation?.inputs, keys: window.__navigation?.keys,
        errors: window.__navigation?.errors, focused: document.activeElement?.outerHTML };
    `)));
    writeFileSync(resolve(output, `${framework}-failure.json`), JSON.stringify({ error: error.stack, expected, editors }, null, 2));
    await Promise.allSettled(sessions.map(session => ab(session, 'screenshot', resolve(output, `${session}-failure.png`))));
    throw error;
  } finally {
    await Promise.allSettled(sessions.map(session => ab(session, 'close')));
  }
}
console.log(`PASS: ${checks} real-navigation checks; evidence: ${output}`);
