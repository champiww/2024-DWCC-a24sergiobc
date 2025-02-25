<script>
export default {
    props: {},
    data() {
        return {};
    },
    methods: {},
    emits: ['addContactEvent'],
};
</script>

<template>
    <h3>Añadir contacto</h3>
    <form>
        <label for="name">Nombre: </label>
        <input v-model="name" />
        <br />
        <label for="phone">Teléfono: </label>
        <input v-model="phone" />
        <br />
        <label for="email">Email: </label>
        <input v-model="email" />
        <br /><br />
        <button @click.prevent="$emit('addContactEvent', name, phone, email)">
            Añadir
        </button>
    </form>
</template>

<style></style>
