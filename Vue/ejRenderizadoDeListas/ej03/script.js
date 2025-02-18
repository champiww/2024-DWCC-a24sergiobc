// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            lista: ['Elemento01', 'Elemento02', 'Elemento03'],
            textBox: '',
            ObjetoClases: {
                mostrar: true,
                ocultar: false,
            },
            textoBoton: 'Ocultar lista',
        };
    },
    methods: {
        engadirElemento() {
            this.lista.push(this.textBox);
        },
        eliminarElemento(index) {
            this.lista.splice(index, 1);
        },
        cambiarVisibilidad() {
            if (this.ObjetoClases.mostrar == true) {
                this.ObjetoClases.mostrar = false;
                this.ObjetoClases.ocultar = true;
                this.textoBoton = 'Mostrar lista';
            } else {
                this.ObjetoClases.mostrar = true;
                this.ObjetoClases.ocultar = false;
                this.textoBoton = 'Ocultar lista';
            }
        },
    },
    computed: {},
}).mount('#app');
