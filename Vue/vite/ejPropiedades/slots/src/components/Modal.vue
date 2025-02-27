<script>
export default {
    props: {},
    data() {
        return {};
    },
    emits: ['eventoMostrarOcultarModal'],
};
</script>

<template>
    <div class="modal-mask">
        <div class="modal-container">
            <div>
                <h4><slot name="header">default header</slot></h4>
                <slot>default body</slot>
                <br /><br />
                <slot name="footer">default footer</slot>
            </div>
            <button class="boton" @click="$emit('eventoMostrarOcultarModal')">
                OK
            </button>
        </div>
    </div>
</template>

<style scoped>
.boton {
    height: 2em;
    width: 3em;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
}
.modal-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 4em;
    align-items: center;
    width: 300px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
