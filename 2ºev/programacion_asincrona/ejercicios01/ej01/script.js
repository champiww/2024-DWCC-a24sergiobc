/*
Implementa unha función escribirNumeros(desde, ata) que xere un número cada
segundo, comezando en “desde” e rematando en “ata”. Fai dúas variantes da
función: unha usando setInterval e outra usando setTimeout.
*/

function escribirNumeros_SetInterval(desde, ata) {
    let i = desde;
    let intervalID = setInterval(() => {
        if (i <= ata) {
            console.log(i);
            i++;
        } else {
            clearInterval(intervalID);
        }
    }, 1000);
}

function escribirNumeros_SetTimeout(desde, ata) {
    let tiempo = 1000;
    for (let i = desde; i <= ata; i++) {
        setTimeout(() => {
            console.log(i);
        }, tiempo);
        tiempo += 1000;
    }
}

//escribirNumeros_SetInterval(2, 6);
escribirNumeros_SetTimeout(2, 6);
