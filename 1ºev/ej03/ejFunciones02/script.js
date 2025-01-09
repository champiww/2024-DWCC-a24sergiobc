'use strict';
//Ej01
const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

let resultado = objects.reduce((contador, currentValue) => {
    return contador + currentValue.price;
}, 0);

console.log(resultado);

//Ej02

const numeros = [9, 8, 7, 6, 5, 4, 3, 2, 1];

let resultado2 = numeros.reduce((valorMinimo, valorActual) => {
    return valorActual < valorMinimo ? valorActual : valorMinimo;
});

console.log(resultado2);
