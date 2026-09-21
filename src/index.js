import { Collaboration } from './editor_collaboration.js';

export { Collaboration, setConsumer } from './editor_collaboration.js';
export { YrbyProvider } from './yrby_provider.js';

if (typeof customElements !== 'undefined' && !customElements.get('lexxy-collaboration')) {
  customElements.define('lexxy-collaboration', Collaboration);
}
