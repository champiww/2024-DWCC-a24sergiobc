// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            input1: '',
            input2: '',
        };
    },
    methods: {
        consoleLog() {
            console.log('Test mensaje por consola');
        },
        keydownClick(evento) {
            this.input1 = evento.target.value;
        },
        enterClick(evento) {
            this.input2 = evento.target.value;
        },
    },
}).mount('#app');
