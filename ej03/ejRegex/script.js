'use strict';
//Ej02

function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == '...') return;
    for (let str of yes)
        if (!regexp.test(str)) {
            console.log(`Failure to match '${str}'`);
        }
    for (let str of no)
        if (regexp.test(str)) {
            console.log(`Unexpected match for '${str}'`);
        }
}
//2a
verify(/ca[r|t]/, ['my car', 'bad cats'], ['camper', 'high art']);
//2b
verify(/pr?op/, ['pop culture', 'mad props'], ['plop', 'prrrop']);
//2c
verify(
    /ferr(et|y|ari)/,
    ['ferret', 'ferry', 'ferrari'],
    ['ferrum', 'transfer A']
);
//2d
verify(
    /\b\w*ious\b/,
    ['how delicious', 'spacious room'],
    ['ruinous', 'consciousness']
);
//2e
verify(/\s[.,:;]/, ['bad punctuation .'], ['escape the period']);
//2f
verify(
    /\b\w{7,}\b/,
    ['Siebentausenddreihundertzweiundzwanzig'],
    ['no', 'three small words']
);
//2g
verify(
    /\b[^eE\s]+\b/,
    ['red platypus', 'wobbling nest'],
    ['earth bed', 'learning ape', 'BEET']
);

//Ej03
verify(/^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/, ['01:32:54:67:89:AB']);

//Ej04

function comprobarContrasinal(contrasinal) {
    // a. Mínimo 8 caracteres
    if (contrasinal.length < 8) return false;

    // b. Sen espazos en branco
    if (/\s/.test(contrasinal)) return false;

    // c. Comprobar tipos de caracteres
    let tiposCumpridos = 0;

    // i. Maiúsculas
    if (/[A-Z]/.test(contrasinal)) tiposCumpridos++;

    // ii. Minúsculas
    if (/[a-z]/.test(contrasinal)) tiposCumpridos++;

    // iii. Números
    if (/[0-9]/.test(contrasinal)) tiposCumpridos++;

    // iv. Caracteres especiais
    if (/[¡!$?%&#@/\\()=¿?*\[\];,:._<>+\-]/.test(contrasinal)) tiposCumpridos++;

    // A contrasinal é válida se ten polo menos 3 dos 4 tipos de caracteres
    return tiposCumpridos >= 3;
}

console.log(comprobarContrasinal());
