// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            listaNum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        };
    },
    computed: {
        listaNumFiltrada() {
            let resultado = [];
            for (let element of this.listaNum) {
                if (element % 2 == 0) resultado.push(element);
            }
            return resultado;
        },
    },
}).mount('#app');
