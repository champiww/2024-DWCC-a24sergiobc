'use strict';
//Date
/*Ej 02*/
function ej02Date(numMes, numAno) {
    let fecha = new Date(numAno, numMes + 1);
    fecha.setDate(0);
    return fecha.getDate();
}
/*Ej 03*/
function ej03Date(fecha) {
    return fecha.getDay() == 6 || fecha.getDay() == 0 ? true : false;
}
/*Ej 04*/
function ej04Date(fecha) {
    let ano = fecha.getFullYear();
    let fechaInicioAno = new Date(ano, 0, 1);
    const milisegundosPorDia = 86400000;
    //Depende redondeo
    return Math.ceil((fecha - fechaInicioAno) / milisegundosPorDia);
}

console.log('Ej01');
let fecha1 = new Date(2024, 5, 25);
console.log(fecha1);

console.log('Ej02');
console.log(ej02Date(1, 2024));

console.log('Ej03');
let fecha2 = new Date(2024, 9, 11); // 12 y 13 fin de semana
console.log(ej03Date(fecha2));

console.log('Ej04');
let fecha3 = new Date();
console.log(ej04Date(fecha3));
