'use strict';
//Ej01

//A táboa con id="age-table".
console.log(document.getElementById('age-table'));

//Todos os elementos label dentro da táboa (debería haber 3).
let elementosLabel = console.log(
    document.getElementById('age-table').querySelectorAll('label')
);

console.log(elementosLabel);

//O primeiro td da táboa.
console.log(document.querySelector('td'));

//O formulario con name="search".
let formSearch = document.getElementsByName('search')[0];
console.log(formSearch);

//O primeiro input do formulario anterior.
console.log(formSearch.querySelector('input'));

//O último input do formulario do apartado anterior
let inputs = formSearch.getElementsByTagName('input');
console.log(inputs[inputs.length - 1]);
