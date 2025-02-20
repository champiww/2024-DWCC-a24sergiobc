// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';

// createApp(App).mount('#app')
const app = createApp(App);
app.component('Contact', Contact);
app.mount('#app');
