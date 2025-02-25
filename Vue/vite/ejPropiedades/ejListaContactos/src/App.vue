<script>
import AddContactForm from './components/AddContactForm.vue';

export default {
    data() {
        return {
            lista: [
                {
                    nombre: 'Ada Lovelace',
                    telefono: '123456789',
                    correo: 'a@a.com',
                    favorito: false,
                },
                {
                    nombre: 'John Doe',
                    telefono: '987654321',
                    correo: 'b@b.com',
                    favorito: true,
                },
            ],
        };
    },
    methods: {
        cambiarFavorito(correo) {
            const item = this.lista.find((item) => item.correo === correo);
            if (item) {
                item.favorito = !item.favorito;
            }
        },
        addContact(nombre, telefono, email) {
            this.lista.push({
                nombre: nombre,
                telefono: telefono,
                correo: email,
                favorito: false,
            });
        },
        deleteContact(correo) {
            const item = this.lista.find((item) => item.correo === correo);
            this.lista.splice(this.lista.indexOf(item), 1);
        },
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
        :favorito="item.favorito"
        @cambiarFavoritoEvento="cambiarFavorito"
        @eliminarContactoEvento="deleteContact"
    />
    <br /><br />
    <AddContactForm @addContactEvent="addContact" />
</template>

<style></style>
