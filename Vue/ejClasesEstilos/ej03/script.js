// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            textbox: '',
            ObjetoClases: {
                claseA: false,
                claseB: false,
                hidden: false,
                visible: true,
            },
            // ClaseTest: 'claseA',
        };
    },
    methods: {
        comprobarTexto() {
            if (this.textbox == 'claseA') {
                // this.ClaseTest = 'claseA';
                this.ObjetoClases.claseA = true;
                this.ObjetoClases.claseB = false;
            } else if (this.textbox == 'claseB') {
                // this.ClaseTest = 'claseB';
                this.ObjetoClases.claseA = false;
                this.ObjetoClases.claseB = true;
            }
        },
        alternarVisibilidad() {
            if (this.ObjetoClases.hidden == false) {
                this.ObjetoClases.hidden = true;
                this.ObjetoClases.visible = false;
            } else {
                this.ObjetoClases.hidden = false;
                this.ObjetoClases.visible = true;
            }
        },
    },
}).mount('#app');
