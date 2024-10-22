'use strict';
//Ej01
const cubo = (num1) => num1 * num1 * num1;
console.log(cubo(2));

//Ej02
const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];
const numerosImpares = (array) => {
    let listaNumImpares = [];
    for (const num of array) {
        if (num % 2 != 0) listaNumImpares.push(num);
    }
    return listaNumImpares;
};
console.log(numerosImpares(arrayEntrada));

//Ej03
const suma = (...nums) => {
    let sumaTotal = 0;
    for (const num of nums) {
        sumaTotal += num;
    }
    return sumaTotal;
};
console.log(suma(2, 2, 2, 2, 2));

//Ej04
const media = (...nums) => {
    let sumaTotal = 0;
    for (const num of nums) {
        sumaTotal += num;
    }
    return sumaTotal / nums.length;
};
console.log(media(2, 2, 4, 4));

//Ej05
const minMax = (nums) => {
    return {
        min: Math.min(...nums),
        max: Math.max(...nums),
    };
};
console.log(minMax([1, 2, 3, 4, 5]));

//Ej06
const result = (function (length, width) {
    console.log('area rectangulo: ' + length * width);
})(2, 4);

//Ej07
const letras = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E',
];
const dniValido = (dni) => {
    let resto = dni.slice(0, dni.length - 1) % 23;
    if (dni.slice(dni.length - 1, dni.length) == letras[resto]) {
        return true;
    } else return false;
};
console.log(dniValido('123456789A'));

//Ej08
const operacionesDesgloseBilletesMonedas = (copiaNum, cantidad) => {
    if (copiaNum >= cantidad) {
        copiaNum = (copiaNum - cantidad).toFixed(2);
    }
    return copiaNum;
};

const desgloseBilletesMonedas = (num) => {
    const arrayTiposMonedas = [
        50, 20, 10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
    ];
    const arrayCantidades = [];
    let copiaNum = num;

    for (const cantidad of arrayTiposMonedas) {
        while (copiaNum >= cantidad) {
            copiaNum = operacionesDesgloseBilletesMonedas(copiaNum, cantidad);
            arrayCantidades.push(cantidad);
        }
    }

    return arrayCantidades;
};
console.log(desgloseBilletesMonedas(46.53));

//Ej09
const buscarPatron = (texto, patron) => {
    let contador = 0;
    texto = texto.toLowerCase();
    patron = patron.toLowerCase();

    for (let i = 0; i <= texto.length; i++) {
        if (texto.substring(i, i + patron.length) === patron) {
            contador++;
        }
    }

    return contador;
};
console.log(buscarPatron('000111101000ABCHA', '00'));

//Ej10
