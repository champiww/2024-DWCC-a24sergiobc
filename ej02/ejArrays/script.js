'use strict';
//Arrays
function ej01(numABuscar, array) {
    let arrayDeIndices = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] == numABuscar) arrayDeIndices.push(index);
    }
    return arrayDeIndices;
}
function ej02() {
    return '';
}

//Ej01
console.log('Ejercicio 01');
const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
console.log(ej01(1, numeros));

//Ej02
console.log('Ejercicio 02');
console.log(ej02());
