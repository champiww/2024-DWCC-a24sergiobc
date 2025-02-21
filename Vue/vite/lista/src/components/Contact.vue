<script>
export default {
    props: {
        nombre: {
            type: String,
            required: true,
        },
        telefono: String,
        correo: String,
    },
    data() {
        return {
            estiloDisplay: 'display: block;',
            textoBoton: 'Mostrar detalles',
        };
    },
    methods: {
        cambiarVisibilidad() {
            if (this.estiloDisplay == 'display: block;') {
                this.estiloDisplay = 'display: none;';
                this.textoBoton = 'Mostrar detalles';
            } else {
                this.estiloDisplay = 'display: block;';
                this.textoBoton = 'Ocultar detalles';
            }
        },
    },
};
</script>

<template>
    <h2>{{ nombre }}</h2>
    <button @click="cambiarVisibilidad">{{ textoBoton }}</button>
    <p :style="estiloDisplay">Telefono: {{ telefono }}</p>
    <p :style="estiloDisplay">Correo: {{ correo }}</p>
</template>

<style></style>
