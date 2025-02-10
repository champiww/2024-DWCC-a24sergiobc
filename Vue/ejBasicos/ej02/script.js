// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            text: ''
        };
    },
    methods: {
        changeText(evento) {
            this.text = evento.target.value
            
        }
    },
}).mount('#app');
