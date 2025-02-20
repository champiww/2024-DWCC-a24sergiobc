import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

createApp({
    data() {
        return {
            vidaMonstruo: 100,
            vidaXogador: 100,
            ronda: 0,
            ganador: null,
            log: [],
        };
    },
    methods: {
        iniciarPartida() {
            this.vidaMonstruo = 100;
            this.vidaXogador = 100;
            this.ronda = 0;
            this.ganador = null;
            this.log = [];
        },
        ataqueMonstruo() {
            this.ronda++;
        },
        ataqueXogador() {
            this.ronda++;
        },
        ataqueEspecialXogador() {
            this.ronda++;
        },
        curacionXogador() {
            this.ronda++;
        },
        rendirse() {},
        loguearMensaxe() {},
    },
    computed: {
        barraVidaMonstruo() {
            if (this.vidaMonstruo < 0) {
                return { width: '0%' };
            } else return { width: this.vidaMonstruo + '%' };
        },
        barraVidaXogador() {
            if (this.vidaXogador < 0) {
                return { width: '0%' };
            } else return { width: this.vidaXogador + '%' };
        },
    },
    watch: {
        vidaMonstruo(newValue) {
            if (newValue > 0) {
            }
        },
    },
}).mount('#app');
