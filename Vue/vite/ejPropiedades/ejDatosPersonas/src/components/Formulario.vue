<script>
export default {
    props: {
        nome: String,
        anoNacemento: Number,
    },
    data() {
        return {
            nomeLocal: this.nome,
            anoNacementoLocal: this.anoNacemento,
        };
    },
    emits: ['eventoModificar'],
};
</script>

<template>
    <form>
        <label for="nome">Nome: </label>
        <input v-model="nomeLocal" />
        <br />
        <label for="nome">Ano de nacemento: </label>
        <input v-model="anoNacementoLocal" />
        <br />
        <button
            @click.prevent="
                $emit('eventoModificar', this.nomeLocal, this.anoNacementoLocal)
            "
        >
            Modificar
        </button>
    </form>
    <br />
</template>

<style></style>
