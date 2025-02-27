<script>
import Modal from './components/Modal.vue';

export default {
    components: {
        Modal,
    },
    data() {
        return {
            displayClass: {
                oculto: true,
            },
        };
    },
    methods: {
        mostrarOcultarModal() {
            this.displayClass.oculto = !this.displayClass.oculto;
        },
    },
};
</script>

<template>
    <button @click="mostrarOcultarModal">Mostrar ventana modal</button>
    <div :class="displayClass">
        <Modal @eventoMostrarOcultarModal="mostrarOcultarModal">
            <template #header>Titulo</template>
            <template #default>Body</template>
            <template #footer>Footer</template>
        </Modal>
    </div>
</template>

<style scoped>
.oculto {
    display: none;
}
</style>
