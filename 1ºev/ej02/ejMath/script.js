'use strict';
//Math
/*Ej 01*/
function ej01MathA() {
    return Math.floor(Math.random() * 4);
}
function ej01MathB() {
    return Math.floor(Math.random() * 3) + 1;
}
function ej01MathC(num1, num2) {
    return Math.floor(Math.random() * (num2 - (num1 - 1)) + num1);
}
/*Ej 02*/
function ej02Math(numMinutos) {
    let numHoras = 0;
    while (numMinutos >= 60) {
        numHoras++;
        numMinutos = numMinutos - 60;
    }
    return `${numHoras} horas ${numMinutos} minutos`;
}
/*Ej 03*/
function ej03MathA(radio) {
    return Math.round(Math.pow(radio, 2) * Math.PI);
}
function ej03MathB(radio) {
    return Math.round(2 * Math.PI * radio);
}

//Math
//01
console.log('Ej 01 - A');
console.log(ej01MathA());

console.log('Ej 01 - B');
console.log(ej01MathB());

console.log('Ej 01 - C');
console.log(ej01MathC(1, 3));
//02
console.log('Ej 02');
console.log(ej02Math(121));
//03
console.log('Ej 03 - A');
console.log(ej03MathA(10));

console.log('Ej 03 - B');
console.log(ej03MathB(10));
