//import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import MostrarDatos from './components/MostrarDatos.vue';
import Formulario from './components/Formulario.vue';

const app = createApp(App);
app.component('MostrarDatos', MostrarDatos);
app.component('Formulario', Formulario);
app.mount('#app');
