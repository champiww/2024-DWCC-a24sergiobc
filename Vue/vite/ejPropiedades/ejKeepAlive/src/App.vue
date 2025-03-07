<script>
import Contador from './components/contador.vue';
import TextBox from './components/textBox.vue';

export default {
    components: {
        Contador,
        TextBox,
    },
    data() {
        return {
            componentActivo: 'contador',
        };
    },
    methods: {
        cambiarComponente() {
            if (this.componentActivo == 'contador')
                this.componentActivo = 'textBox';
            else this.componentActivo = 'contador';
        },
    },
};
</script>

<template>
    <div>
        <KeepAlive>
            <component :is="componentActivo"></component>
        </KeepAlive>
        <button @click="cambiarComponente">Cambiar componente</button>
    </div>
</template>

<style scoped>
div {
    background-color: red;
}
strong {
    background-color: yellow;
    padding: 5px;
}
</style>
