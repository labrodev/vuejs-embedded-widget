// Import the bootstrap function from the 'bootstrap.js' file
import { bootstrap } from './bootstrap.js';

// Define a custom element 'countdown-widget' using the Custom Elements API
customElements.define('countdown-widget', class extends HTMLElement {
 
  async connectedCallback() {

    // Create a shadow DOM for encapsulatio
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Fetch <countdown-widget> attributes 
    // to pass as properties for App.vue

    const attributes = {
      'date': this.getAttribute('date'),
      'title': this.getAttribute('title'),
      'end': this.getAttribute('end'),
      'color': this.getAttribute('color')
    }
    
    // Bootstrap the Vue.js application within the shadow DOM
    bootstrap(shadowRoot, attributes);
  }
});