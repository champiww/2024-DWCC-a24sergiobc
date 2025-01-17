'use strict';

function rellenarDatos() {
    fetch(url)
        .then((response) => response.json())
        .then((datos) => {
            console.log(datos);
        });
}

let numAleatorio = Math.ceil(Math.random() * 1000);

const url = 'https://pokeapi.co/api/v2/pokemon/' + numAleatorio;

rellenarDatos();
