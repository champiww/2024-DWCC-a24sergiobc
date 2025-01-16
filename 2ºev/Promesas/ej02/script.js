const generar = document.getElementById('boton');
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const ciudad = document.getElementById('ciudad');
const pais = document.getElementById('pais');
const edad = document.getElementById('edad');
const foto = document.getElementById('foto');

function generarDatos() {
    fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((datos) => {
            const datosPersona = datos.results[0];

            nombre.innerText = datosPersona.name.first;
            apellidos.innerText = datosPersona.name.last;
            email.innerText = datosPersona.email;
            telefono.innerText = datosPersona.phone;
            ciudad.innerText = datosPersona.location.city;
            pais.innerText = datosPersona.location.country;
            edad.innerText = datosPersona.dob.age;

            foto.src = datosPersona.picture.large;
        });
}

generarDatos();

generar.addEventListener('click', () => {
    generarDatos();
});
