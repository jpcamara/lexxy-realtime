import { Collaboration } from './editor_collaboration.js';

export { Collaboration };
export { YrbLiteProvider } from './yrb_lite_provider.js';

if (!customElements.get('lexxy-collaboration')) {
  customElements.define('lexxy-collaboration', Collaboration);
}
