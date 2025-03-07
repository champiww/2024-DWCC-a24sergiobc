<script>
export default {
    data() {
        return {
            texto: '',
        };
    },
};
</script>

<template>
    <div>
        <h2>Textbox component</h2>
        <input type="text" v-model="texto" />
        <p>Texto:</p>
        <p>
            <strong>{{ this.texto }}</strong>
        </p>
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
