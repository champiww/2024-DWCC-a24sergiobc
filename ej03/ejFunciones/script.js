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

const inicioXornada = '07:30';
const finalXornada = '17:45';

function axendarReunion(horaInicioReunion, duracionEnMinutos) {
    // A función debe devolver true se a reunión ocorre dentro da xornada laboral
    // e false en caso contrario

    const inicioXornadaHora = parseInt(inicioXornada.substring(0, 2));
    const inicioXornadaMin = parseInt(inicioXornada.substring(3, 5));

    const finalXornadaHora = parseInt(finalXornada.substring(0, 2));
    const finalXornadaMin = parseInt(finalXornada.substring(3, 5));

    let horaInicioReunionHora, horaInicioReunionMin;

    if (horaInicioReunion.length == 4) {
        horaInicioReunionHora = parseInt(horaInicioReunion.substring(0, 1));
        horaInicioReunionMin = parseInt(horaInicioReunion.substring(2, 4));
    } else {
        horaInicioReunionHora = parseInt(horaInicioReunion.substring(0, 2));
        horaInicioReunionMin = parseInt(horaInicioReunion.substring(3, 5));
    }

    let finalReunionHora = 0;
    let finalReunionMin = 0;

    if (duracionEnMinutos >= 60) {
        let horasReunion = Math.round(parseInt(duracionEnMinutos) / 60);
        let minReunion = parseInt(duracionEnMinutos) / (60 * horasReunion);
        finalReunionHora = horaInicioReunionHora + horasReunion;
        finalReunionMin = horaInicioReunionMin + minReunion;
    } else {
        finalReunionHora = horaInicioReunionHora;
        finalReunionMin = horaInicioReunionMin + parseInt(duracionEnMinutos);
    }

    if (
        inicioXornadaHora >= horaInicioReunionHora &&
        inicioXornadaMin > horaInicioReunionMin
    ) {
        return false; // Reunion empeza fora de horario
    } else if (
        finalXornadaHora <= finalReunionHora &&
        finalXornadaMin < finalReunionMin
    ) {
        return false; // Reunion acaba fora de horario
    } else {
        return true;
    }
}
// Comprobacións
console.assert(
    axendarReunion('7:00', 15) == false,
    'Fallo comprobando axendarReunión("7:00", 15) == false'
);
console.assert(
    axendarReunion('7:15', 30) == false,
    'Fallo comprobando axendarReunión("7:15", 30) == false'
);
console.assert(
    axendarReunion('7:30', 30) == true,
    'Fallo comprobando axendarReunión("7:30", 30) == true'
);
console.assert(
    axendarReunion('11:30', 60) == true,
    'Fallo comprobando axendarReunion("11:30", 60) == true'
);
console.assert(
    axendarReunion('17:00', 45) == true,
    'Fallo comprobando axendarReunion("17:00", 45) == true'
);
console.assert(
    axendarReunion('17:30', 30) == false,
    'Fallo comprobando axendarReunion("17:30", 30) == false'
);

//Ej11
let arrayBuscaMinas = [
    [0, 0, -1, 0],
    [0, -1, -1, 0],
];

const buscaMinas = (arrayEntrada) => {};
