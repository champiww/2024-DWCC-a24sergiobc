'use strict';

function rellenarDatos() {
    fetch(url)
        .then((response) => response.json())
        .then((datos) => {
            rellenarThead();
            rellenarTbody(datos);
        });
}

function rellenarThead() {
    let tr = document.createElement('tr');
    let thNombre = document.createElement('th');
    let thImaxe = document.createElement('th');
    let thHabilidades = document.createElement('th');

    thNombre.innerText = 'Nombre';
    thImaxe.innerText = 'Imaxe';
    thHabilidades.innerText = 'Habiliades';

    tr.append(thNombre);
    tr.append(thImaxe);
    tr.append(thHabilidades);

    thead.append(tr);
}

function rellenarTbody(datos) {
    let tr = document.createElement('tr');
    let tdNombre = document.createElement('td');
    let tdImaxe = document.createElement('td');
    let tdHabilidades = document.createElement('td');

    tdNombre.innerText = datos.name;
    let img = document.createElement('img');
    img.src = datos.sprites.front_default;
    tdImaxe.append(img);
    //Lista habilidades
    let ul = document.createElement('ul');

    datos.abilities.forEach((element) => {
        let li = document.createElement('li');

        let enlaceHabilidad = document.createElement('a');
        enlaceHabilidad.innerText = element.ability.name;
        enlaceHabilidad.href = element.ability.url;

        li.append(enlaceHabilidad);

        //Lista url y nombre
        let ul2 = document.createElement('ul');

        let liEsp = document.createElement('li');
        obtenerDatosSkillEsp(element.ability.url, liEsp);
        ul2.append(liEsp);

        li.append(ul2);
        ul.append(li);
    });

    tdHabilidades.append(ul);

    tr.append(tdNombre);
    tr.append(tdImaxe);
    tr.append(tdHabilidades);

    thead.append(tr);
}

function obtenerDatosSkillEsp(enlace, liEsp, ul2) {
    let resultado = '';
    fetch(enlace)
        .then((response) => response.json())
        .then((datos) => {
            liEsp.innerText = datos.names.find(
                (element) => element.language.name == 'es'
            ).name;
        });
}

let numAleatorio = Math.ceil(Math.random() * 1000);

const url = 'https://pokeapi.co/api/v2/pokemon/' + numAleatorio;
const thead = document.getElementById('tableHead');
const tbody = document.getElementById('tableBody');

rellenarDatos();
