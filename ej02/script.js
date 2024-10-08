'use strict';
//String
/*Ej 01*/
function ej01String(cadea) {
    return cadea01.charAt(0).toUpperCase() + cadea01.slice(1);
}
/*Ej 02*/
function ej02String(cadea) {
    return cadea.split('').reverse().join('');
}
/*Ej 03*/
function ej03String(cadea) {
    let resultado = '';
    let ultimos4 = cadea.slice(-4);
    let numDeAsteriscos = cadea.length - ultimos4.length;
    for (let index = 0; index < numDeAsteriscos; index++) {
        resultado += '*';
    }
    return resultado + ultimos4;
}
//Number
/*Ej 01*/
function ej01Number(num01) {
    return num01.toFixed().length;
}
//Math
/*Ej 01*/
function ej01MathA() {
    return Math.floor(Math.random() * 4);
}
function ej01MathB() {
    return Math.floor(Math.random() * 3) + 1;
}
function ej01MathC(num1, num2) {
    return Math.floor(Math.random() * num2) + num1;
}
/*Ej 02*/
function ej02Math(numMinutos) {
    return '';
}
/*Ej 03*/
function ej03MathA(radio) {
    return Math.round(Math.pow(radio, 2) * Math.PI);
}
function ej03MathB(radio) {
    return Math.round(2 * Math.PI * radio);
}

//String
/*
//01
console.log('Ej 01');
const cadea01 = 'desenvolvemento web';
console.log(ej01String(cadea01));
//02
console.log('Ej 02');
const cadea02 = 'hola';
console.log(ej02String(cadea02));
//03
console.log('Ej 03');
const cadea03 = '34123412347777';
console.log(ej03String(cadea03));
*/

//Number
/*
console.log('Ej 01');
const num01 = 100;
console.log(ej01Number(num01));
*/

//Math
//01
console.log('Ej 01 - A');
console.log(ej01MathA());

console.log('Ej 01 - B');
console.log(ej01MathB());

console.log('Ej 01 - C');
console.log(ej01MathC(2, 3));
//02
console.log('Ej 02');
console.log(ej02Math());
//03
console.log('Ej 03 - A');
console.log(ej03MathA(10));

console.log('Ej 03 - B');
console.log(ej03MathB(10));
