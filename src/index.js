import { Collaboration } from './editor_collaboration.js';

export { Collaboration, setConsumer } from './editor_collaboration.js';
export { YrbyProvider } from './yrby_provider.js';

if (!customElements.get('lexxy-collaboration')) {
  customElements.define('lexxy-collaboration', Collaboration);
}
