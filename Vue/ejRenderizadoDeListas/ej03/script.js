// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            lista: ['Elemento01', 'Elemento02', 'Elemento03'],
        };
    },
    methods: {
        engadirElemento() {
            console.log('a');
        },
        eliminarElemento() {
            console.log('b');
        },
    },
    computed: {},
}).mount('#app');
