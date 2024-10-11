'use strict';
//Arrays
function ej01(numABuscar, array) {
    let arrayDeIndices = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] == numABuscar) arrayDeIndices.push(index);
    }
    return arrayDeIndices;
}
function ej03(frase) {
    let fraseArray = frase.split('');
    fraseArray[0] = fraseArray[0].toUpperCase();
    for (let index = 1; index < fraseArray.length; index++) {
        if (fraseArray[index - 1] == ' ') {
            fraseArray[index] = fraseArray[index].toUpperCase();
        }
    }

    return fraseArray.join('');
}
//Desestruturación de arrays

//Ej01
console.log('Ejercicio 01');
const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
console.log(ej01(1, numeros));

//Ej02
console.log('Ejercicio 02');
let array = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];
array.splice(1, 1);
console.log(array);
array.splice(3, 0, 'laranxas', 'sandía');
console.log(array);
array.splice(1, 1, 'cereixas', 'nésperas');
console.log(array);

//Ej03
console.log('Ejercicio 03');
let frase = 'frase de prueba';
console.log(ej03(frase));

//Desestruturación de arrays
console.log('Ejercicio 01');
const players = [
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
];

console.log('Apartado A');
let players1, players2;
[players1, players2] = players;
console.log(players1);
console.log(players2);

console.log('Apartado B');
let gk, fieldPlayers;
[gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

console.log('Apartado C');
let allPlayers = [];
allPlayers = players1.concat(players2);
console.log(allPlayers);

console.log('Apartado D');
let players1Final = players1.concat(['Thiago', 'Coutinho', 'Periscic']);
console.log(players1Final);
