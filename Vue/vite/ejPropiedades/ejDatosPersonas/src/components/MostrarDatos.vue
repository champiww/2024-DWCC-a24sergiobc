<script>
export default {
    props: {
        nome: String,
        anoNacemento: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {};
    },
};
</script>

<template>
    <h3>{{ nome }}</h3>
    <p>Ano de nacemento:{{ anoNacemento }}</p>
</template>

<style></style>
