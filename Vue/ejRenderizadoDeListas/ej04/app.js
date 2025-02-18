import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            vidaMonstruo: 100,
            vidaXogador: 100,
        };
    },
    methods: {
        iniciarPartida() {
            this.vidaMonstruo = 100;
            this.vidaXogador = 100;
        },
    },
    computed: {},
    watch: {
        vidaMonstruo() {},
        vidaXogador() {},
    },
}).mount('#app');
