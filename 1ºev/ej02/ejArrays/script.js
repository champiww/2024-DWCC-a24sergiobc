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
console.log(array.join(', '));
array.splice(3, 0, 'laranxas', 'sandía');
console.log(array.join(', '));
array.splice(1, 1, 'cereixas', 'nésperas');
console.log(array.join(', '));

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
let [players1, players2] = players;
console.log(players1);
console.log(players2);

console.log('Apartado B');
let [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

console.log('Apartado C');
let allPlayers = [...players1, ...players2];
console.log(allPlayers);

console.log('Apartado D');
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

//Ejercicio 02
function stringInCamelCaseEj02(name) {
    let _index = name.indexOf('_');
    let letter = name.charAt(_index + 1).toUpperCase();
    name = name.toLowerCase().replace('_', '');
    name = name.replace(name.charAt(_index), letter);
    return name;
}

console.log('Ejercicio02');

const array2 = ['first_name', 'last_NAME'];
let [name1, name2] = array2;

console.log(stringInCamelCaseEj02(name1));
console.log(stringInCamelCaseEj02(name2));

//Ejercicio 03
console.log('Ejercicio03');

function formatArrayEj03(array) {
    let temp = array.split(';');
    let [name, from, destination, hour] = temp;
    name = name.replace('_', '');
    name = name.replace('_', ' ');
    from = from.slice(0, 3).toUpperCase();
    destination = destination.slice(0, 3).toUpperCase();
    hour = hour.replace(':', 'h');

    return `${name} ${from} ${destination} (${hour})`;
}

const flightsInfo =
    '_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+Departure;scq93766109;svq2323639855;12:30';

let resultado = '';

let flightsInfoSplit = flightsInfo.split('+');

for (let i = 0; i < flightsInfoSplit.length; i++) {
    console.log(formatArrayEj03(flightsInfoSplit[i]));
}
