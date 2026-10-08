// editor_collaboration.js imports yrby-client/element, so importing the
// package also registers <yrby-document>, which <lexxy-collaboration>
// binds to.
import { Collaboration } from './editor_collaboration.js';

export { Collaboration, setConsumer } from './editor_collaboration.js';
export { YrbyProvider } from './yrby_provider.js';

if (typeof customElements !== 'undefined' && !customElements.get('lexxy-collaboration')) {
  customElements.define('lexxy-collaboration', Collaboration);
}
