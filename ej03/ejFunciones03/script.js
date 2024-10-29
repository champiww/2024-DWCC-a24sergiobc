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
let indexEmpiezaPorM = diasSemana.findIndex((diasSemana) =>
    diasSemana.startsWith('m')
);
console.log(indexEmpiezaPorM);

//2f
let diasSemanaMayusculas = diasSemana.map((diasSemana) =>
    diasSemana.toUpperCase()
);
console.log(diasSemanaMayusculas);

//Ej03
console.log('Ej 03');
const arrayNumeros = [4, 8, 3, 10, 5];

function comparator(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

let arrayNumerosOrdenado = arrayNumeros.sort(comparator);
console.log(arrayNumerosOrdenado);

//Ej04
console.log('Ej 04');
let max = 1;
let numMasAlto = arrayNumeros.reduce((valorMinimo, valorActual) => {
    return valorActual > valorMinimo ? valorActual : valorMinimo;
});
console.log(numMasAlto);

//Ej05
console.log('Ej 05');
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

//5a
let inventoresNacidosEnXVI = inventors.filter(
    (inventors) => inventors.year > 1500 && inventors.year <= 1600
);
console.log(inventoresNacidosEnXVI);

//5b
let nombresInventores = inventors.map(function (inventors) {
    return inventors.first + ' ' + inventors.last;
});
console.log('Nombres inventores');
console.log(nombresInventores);

//5c
let nombresInventoresOrdenadosPorApellido = nombresInventores.sort((a1, a2) => {
    a1 = a1.slice(a1.indexOf(' '), a1.length);
    a2 = a2.slice(a2.indexOf(' '), a2.length);

    if (a1 > a2) return 1;
    else if (a1 < a2) return -1;
    else return 0;
});
console.log('Array ordenado por apellidos');
console.log(nombresInventoresOrdenadosPorApellido);

//5d
let arrayOriginalOrdenadoPorApellido = inventors.sort((a, b) => {
    if (a.last > b.last) return 1;
    else if (a.last < b.last) return -1;
    else return 0;
});
console.log('Array original ordenado por apellidos');
console.log(arrayOriginalOrdenadoPorApellido);

//5e
let arrayOriginalOrdenadoPorNacimiento = inventors.sort((a, b) => {
    if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    return 0;
});
console.log('Array original ordenado por fecha de nacimiento');
console.log(arrayOriginalOrdenadoPorNacimiento);

//5f
let sumaAñosVividos = inventors.reduce((accumulator, currentvalue) => {
    return accumulator + (currentvalue.passed - currentvalue.year);
}, 0);

console.log('Total de años vividos de los inventores: ' + sumaAñosVividos);

//5g
let inventoresOrdenadosPorAñosVividos = inventors.sort((a, b) => {
    a = a.passed - a.year;
    b = b.passed - b.year;

    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
});
console.log('Inventores ordenados por años vividos:');
console.log(inventoresOrdenadosPorAñosVividos);

//Ej06
console.log('Ej 06');
const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
    'pogostick',
];

let transportCount = data.reduce((acumulador, actual) => {
    if (acumulador[actual]) acumulador[actual]++; // Si existe, +1
    else acumulador[actual] = 1; // Si no existe, iniciar a 1
    return acumulador;
}, {});

console.log(transportCount);
