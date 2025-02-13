// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            km:0,
            m:0,
        };
    },
    methods: {
    },
    watch: {
        num1() {
            this.m = this.km/1000
        },
        num2() {
            this.km = this.m*1000
        },
    },
}).mount('#app');
