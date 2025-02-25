// import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import Contact from './components/Contact.vue';
import AddContactForm from './components/AddContactForm.vue';

// createApp(App).mount('#app')
const app = createApp(App);
app.component('Contact', Contact);
app.component('AddContactForm', AddContactForm);
app.mount('#app');
