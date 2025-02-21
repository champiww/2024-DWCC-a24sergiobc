<script>
export default {
    data() {
        return {
            lista: [
                {
                    nombre: 'Ada Lovelace',
                    telefono: '123456789',
                    correo: 'a@a.com',
                },
                {
                    nombre: 'John Doe',
                    telefono: '987654321',
                    correo: 'b@b.com',
                },
            ],
        };
    },
};
</script>

<template>
    <h1>Listado</h1>
    <br />
    <Contact
        v-for="item in lista"
        :key="item.id"
        :nombre="item.nombre"
        :telefono="item.telefono"
        :correo="item.correo"
    />
</template>

<style></style>
