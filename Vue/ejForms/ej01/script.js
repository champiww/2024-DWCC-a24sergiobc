// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            textbox: '',
            textarea: '',
            checkbox: [],
            radiobuttons: [],
            select: [],
        };
    },
    methods: {
        reset() {
            textbox = '';
            textarea = '';
            checkbox = [];
            radiobuttons = [];
            select = [];
        },
    },
}).mount('#app');
