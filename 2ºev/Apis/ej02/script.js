'use strict';

const url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

const ulPrincipal = document.querySelector('ul');

function obtenerDatos() {
    fetch(url)
        .then((response) => response.json())
        .then((datos) => {
            console.log(datos);
            datos.forEach((element) => {
                let li = document.createElement('li');
                li.innerHTML = element.title;
                if (element.completed) {
                    li.classList.add('completado');
                } else {
                    li.classList.add('noCompletado');
                }
                li.id = element.id;
                ulPrincipal.append(li);
            });
        });
}

obtenerDatos();
