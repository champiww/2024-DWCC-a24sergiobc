// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            class01: {
                colorAzul:true,
            },
            style02: {
                color:'green'
            }
        };
    },
    methods: {
        cambioP01() {
            this.class01.colorAzul = !this.class01.colorAzul
        },
        cambioP02() {
            this.style02.color = this.style02.color == 'green' ? 'red' : 'green';
        }
    },
}).mount('#app');
