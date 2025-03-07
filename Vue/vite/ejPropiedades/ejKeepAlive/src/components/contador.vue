<script>
export default {
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        aumentarCounter() {
            this.counter++;
        },
    },
};
</script>

<template>
    <div>
        <h2>Contador component</h2>
        <button @click="aumentarCounter">{{ this.counter }}</button>
    </div>
</template>

<style scoped>
div {
    background-color: lightgreen;
}
</style>
