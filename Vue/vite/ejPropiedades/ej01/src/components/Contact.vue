<script>
export default {
    props: {
        nombre: {
            type: String,
            required: true,
        },
        telefono: {
            type: String,
            required: true,
        },
        correo: {
            type: String,
            required: true,
        },
        favorito: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            estiloDisplay: 'display: block;',
            textoBoton: 'Mostrar detalles',
            favoritoLocal: this.favorito,
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
        cambiarFavorito() {
            if (this.favoritoLocal == true) this.favoritoLocal = false;
            else this.favoritoLocal = true;
        },
    },
};
</script>

<template>
    <template v-if="favoritoLocal == false">
        <h2>{{ nombre }}</h2>
        <div @click="cambiarFavorito" style="margin-bottom: 2em">
            <img
                src="../assets/estrella_sin_relleno.png"
                alt="estrella"
                style="width: 3em"
            />
        </div>
    </template>
    <template v-else>
        <h2>{{ nombre }} (Favorito)</h2>
        <div @click="cambiarFavorito" style="margin-bottom: 2em">
            <img
                src="../assets/estrella.jpg"
                alt="estrella"
                style="width: 3em"
            />
        </div>
    </template>
    <button @click="cambiarVisibilidad">{{ textoBoton }}</button>
    <p :style="estiloDisplay">Telefono: {{ telefono }}</p>
    <p :style="estiloDisplay">Correo: {{ correo }}</p>
</template>

<style></style>
