'use strict';
//Ej02

//O elemento con id “input2”.
console.log(document.getElementById('input2'));

//A colección de parágrafos
let coleccionParagrafos = document.getElementsByTagName('p');
console.log(coleccionParagrafos);

//Todos os parágrafos dentro do div con id “lipsum”.
console.log(document.getElementsByTagName('div'));

//O formulario
console.log(document.getElementsByTagName('form')[0]);

//Todos os inputs
console.log(
    document.getElementsByTagName('form')[0].getElementsByTagName('input')
);

//Só os inputs con nome “sexo”.
console.log(document.getElementsByName('sexo'));

//Os items da lista con clase “important”
console.log(document.querySelectorAll('li[class="important"]'));
