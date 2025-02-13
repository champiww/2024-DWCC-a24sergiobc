// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            class01: {
                activa:true,
            }
        };
    },
    methods: {
        cambioP01() {
            this.class01.activa = !this.class01.activa
        }
    },
}).mount('#app');
