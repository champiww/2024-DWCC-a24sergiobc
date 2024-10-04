'use strict';

/*EJ01*/

console.log('--EJERCICIO 01');

let diaSemana = 'lunes';

switch (diaSemana) {
    case 'lunes':
        console.log('Es laborable');
        break;
    case 'martes':
        console.log('Es laborable');
        break;
    case 'miercoles':
        console.log('Es laborable');
        break;
    case 'jueves':
        console.log('Es laborable');
        break;
    case 'viernes':
        console.log('Es laborable');
        break;
    case 'sabado':
        console.log('No es laborable');
        break;
    case 'domingo':
        console.log('No es laborable');
        break;
    default:
        console.log('Introduce un dia válido');
        break;
}

/*EJ02*/

console.log('--EJERCICIO 02');

let num1 = 1;
let num2 = 2;
let num3 = 3;

if (num1 > num2 && num1 > num3) {
    console.log('El numero mayor es ' + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log('El numero mayor es ' + num2);
} else {
    console.log('El numero mayor es ' + num3);
}

/*EJ03*/

console.log('--EJERCICIO 03');

for (let i = 0; i <= 30; i++) {
    if (i % 2 == 0) console.log(i);
}

/*EJ04*/

console.log('--EJERCICIO 04');

let base = 2;
let resultado = 0;

for (let exponente = 0; exponente <= 20; exponente++) {
    resultado = base ** exponente;
    console.log(base + ' elevado a ' + exponente + ' = ' + resultado);
}

/*EJ05*/

console.log('--EJERCICIO 05');

let numCalcularFactorial = 5;
let resultadoFactorial = 1;

for (let i = numCalcularFactorial; i >= 1; i--) {
    resultadoFactorial *= i;
}

console.log(
    'El resultado del factorial de ' +
        numCalcularFactorial +
        ' es ' +
        resultadoFactorial
);

/*EJ06*/

console.log('--EJERCICIO 06');

let peso1 = 65;
let peso2 = 70;
let estatura1 = 1.65;
let estatura2 = 1.75;

function calcularIMC(peso, estatura) {
    return peso / estatura ** 2;
}

let IMC1 = calcularIMC(peso1, estatura1);
let IMC2 = calcularIMC(peso2, estatura2);

if (IMC1 > IMC2) {
    console.log(
        'O IMC (' +
            IMC1 +
            ') da primeira persoa é maior que o da segunda persoa (' +
            IMC2 +
            ')!'
    );
} else {
    console.log(
        'O IMC (' +
            IMC2 +
            ') da segunda persoa é maior que o da primeira persoa (' +
            IMC1 +
            ')!'
    );
}
