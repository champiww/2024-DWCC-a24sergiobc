<script>
import Formulario from './components/Formulario.vue';

export default {
    data() {
        return {
            listaPersonas: [
                {
                    nome: 'Ada Lovelace',
                    anoNacemento: 1234,
                },
                {
                    nome: 'John Doe',
                    anoNacemento: 4321,
                },
            ],
        };
    },
    methods: {
        modificarDatos(nome, anoNacemento) {
            const persoa = this.lista.find((persoa) => persoa.nome === nome);
            console.log(persoa);
            if (persoa) {
                persoa.nome = nome;
                persoa.anoNacemento = anoNacemento;
            }
        },
    },
};
</script>

<template>
    <h1>Listado</h1>
    <br />
    <MostrarDatos
        v-for="persona in listaPersonas"
        :key="persona.nome"
        :nome="persona.nome"
        :anoNacemento="persona.anoNacemento"
    />
    <Formulario
        v-for="persona in listaPersonas"
        :key="persona.nome"
        :nome="persona.nome"
        :anoNacemento="persona.anoNacemento"
        :eventoModificar="modificarDatos"
    />
</template>

<style></style>
