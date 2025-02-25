<script>
export default {
    props: {
        nome: String,
        anoNacemento: Number,
    },
    data() {
        return {};
    },
    methods: {},
    emits: ['addContactEvent'],
};
</script>

<template>
    <h3>{{ nome }}</h3>
    <p>Ano de nacemento:{{ anoNacemento }}</p>
</template>

<style></style>
