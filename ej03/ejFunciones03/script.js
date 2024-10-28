'use strict';
//Ej01
console.log('Ej 01');
const personas = [
    { nome: 'aaron', idade: 65, id: 1 },
    { nome: 'beth', idade: 2, id: 2 },
    { nome: 'ánxeles', idade: 13, id: 3 },
    { nome: 'daniel', idade: 3, id: 4 },
    { nome: 'ada', idade: 25, id: 5 },
    { nome: 'erea', idade: 1, id: 6 },
    { nome: 'navia', idade: 43, id: 7 },
];

//1a
let mayoresDeEdad = personas.filter((personas) => personas.idade >= 18);
console.log(mayoresDeEdad);

//1b
let nombresPersonas = personas.map(function (personas) {
    return personas.nome;
});
console.log(nombresPersonas);

//1c
let mayoresDeEdadEnMayusculas = personas.map(function (personas) {
    if (personas.idade >= 18) {
        return personas.nome.toUpperCase();
    }
});
console.log(mayoresDeEdadEnMayusculas);

//1d
let idYNombre = personas.map(function (personas) {
    delete personas.idade;
    return personas;
});
console.log(idYNombre);

//Ej02
console.log('Ej 02');
const diasSemana = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sábado',
    'domingo',
];

//2a
let diasQueEmpiezanPorM = diasSemana.map(function (diasSemana) {
    if (diasSemana.charAt(0) == 'm') return diasSemana;
});
console.log(diasQueEmpiezanPorM);

//2b
let empiezaPorS = diasSemana.some((diasSemana) => diasSemana.charAt(0) == 's');
if (empiezaPorS == true) console.log('Hay dias que empiezan por S');

//2c
let acabaPorS = diasSemana.every((diasSemana) => diasSemana.endsWith('s'));
if (acabaPorS == true) console.log('Todos los dias acaban en S');

//2d
let empiezaPorM = diasSemana.find((diasSemana) => diasSemana.startsWith('m'));
console.log(empiezaPorM);

//2e

//2f
