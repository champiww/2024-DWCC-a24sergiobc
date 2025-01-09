/*
Crea unha páxina web con un título <h1> e dous botóns. Un dos botóns debe iniciar
un intervalo que cambie alternativamente cada segundo a cor do título <h1>
alternando entre dúas cores, as que escollas. O outro botón debe deter o intervalo e
parar o cambio de cores.
*/

const h1 = document.querySelector('h1');
const btnIniciar = document.getElementById('boton1');
const btnDeter = document.getElementById('boton2');

let intervalID = 0;
let color = 'color:red';

btnIniciar.addEventListener('click', () => {
    intervalID = setInterval(() => {
        h1.setAttribute('style', color);
        if (color == 'color:red') {
            color = 'color:blue';
        } else color = 'color:red';
    }, 1000);
});

btnDeter.addEventListener('click', () => {
    clearInterval(intervalID);
});
