// import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import Contact from './components/Contact.vue';

// createApp(App).mount('#app')
const app = createApp(App);
app.component('Contact', Contact);
app.mount('#app');
