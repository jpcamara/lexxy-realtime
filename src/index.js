import { Collaboration } from './editor_collaboration.js';

export { Collaboration };
export { YrbyProvider } from './yrby_provider.js';

if (!customElements.get('lexxy-collaboration')) {
  customElements.define('lexxy-collaboration', Collaboration);
}
