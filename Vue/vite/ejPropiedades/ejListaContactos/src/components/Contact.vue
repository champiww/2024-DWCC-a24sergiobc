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
            estiloDisplay: 'display: none;',
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
    emits: ['cambiarFavoritoEvento', 'eliminarContactoEvento'],
};
</script>

<template>
    <template v-if="favorito == false">
        <h2>{{ nombre }}</h2>
        <div
            @click="$emit('cambiarFavoritoEvento', correo)"
            style="margin-bottom: 2em"
        >
            <img
                src="../assets/estrella_sin_relleno.png"
                alt="estrella"
                style="width: 3em"
            />
        </div>
    </template>
    <template v-else>
        <h2>{{ nombre }} (Favorito)</h2>
        <div
            @click="$emit('cambiarFavoritoEvento', correo)"
            style="margin-bottom: 2em"
        >
            <img
                src="../assets/estrella.jpg"
                alt="estrella"
                style="width: 3em"
            />
        </div>
    </template>
    <button @click="$emit('eliminarContactoEvento', correo)">Eliminar</button>
    <button @click="cambiarVisibilidad">{{ textoBoton }}</button>
    <p :style="estiloDisplay">Telefono: {{ telefono }}</p>
    <p :style="estiloDisplay">Correo: {{ correo }}</p>
</template>

<style></style>
