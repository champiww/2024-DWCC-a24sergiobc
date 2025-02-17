// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            tarefas: ['tarefa1', 'tarefa2', 'tarefa3', 'tarefa4', 'tarefa5'],
            //tarefas: [],
        };
    },
}).mount('#app');
