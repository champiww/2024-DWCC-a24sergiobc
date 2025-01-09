'use strict';
//String
/*Ej 01*/
function ej01String(cadea) {
    return cadea.charAt(0).toUpperCase() + cadea.slice(1);
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

//String
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

//Number
console.log('Ej 01 Number');
const num01 = 100;
console.log(ej01Number(num01));
