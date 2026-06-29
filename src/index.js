import { Collaboration } from './editor_collaboration.js';

export { Collaboration };
export { YRubyProvider } from './y_ruby_provider.js';

if (!customElements.get('lexxy-collaboration')) {
  customElements.define('lexxy-collaboration', Collaboration);
}
