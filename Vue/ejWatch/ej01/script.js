// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            num1:0,
            num2:0,
            result:0,
            parImpar:''
        };
    },
    computed: {
        resultado() {
            this.result = this.num1+this.num2
        }
    },
    methods: {
    },
    watch: {
        result() {
            if(this.result % 2 == 0) {
                this.parImpar='Par'
            }
            else {
                this.parImpar='Impar'
            }
        },
    },
}).mount('#app');
