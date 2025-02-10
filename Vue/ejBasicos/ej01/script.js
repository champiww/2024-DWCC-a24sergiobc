// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            nome: 'Sergio',
            year: new Date().getFullYear(),
            count: 1,
            src: 'kitten.jpeg',
            value: 'Sergio',
            count:0,
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
    },
}).mount('#app');
