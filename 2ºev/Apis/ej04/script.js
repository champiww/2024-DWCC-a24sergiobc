'use strict';

const url = 'https://api.thecatapi.com/v1/images/search';

const contenido = document.getElementById('contenido');

function obtenerDatos(img) {
    fetch(url)
        .then((response) => response.json())
        .then((datos) => {
            datos.forEach((element) => {
                img.src = element.url;
                img.style = `width: 40em;`;
                contenido.append(img);
            });
        });
}

const button = document.querySelector('button');
const img = document.createElement('img');

button.addEventListener('click', () => {
    obtenerDatos(img);
});
