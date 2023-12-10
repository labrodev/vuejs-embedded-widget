import { createApp } from 'vue';
import App from './App.vue';

// Function to bootstrap and mount the Vue.js application
export function bootstrap(target, attributes) {

    // Create a new Vue application instance
    // second argument is object of attributes that will be 
    // converted to properites in App.vue
    const app = createApp(App, attributes)
    
     // Mount the Vue application onto the specified target element
    app.mount(target);
}