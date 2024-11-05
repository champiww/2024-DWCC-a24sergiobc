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
verify(/ca(?:r|t)/, ['my car', 'bad cats'], ['camper', 'high art']);
//2b
verify(/.../, ['pop culture', 'mad props'], ['plop', 'prrrop']);
//2c
verify(/.../, ['ferret', 'ferry', 'ferrari'], ['ferrum', 'transfer A']);
//2d
verify(/.../, ['how delicious', 'spacious room'], ['ruinous', 'consciousness']);
//2e
verify(/.../, ['bad punctuation .'], ['escape the period']);
//2f
verify(
    /.../,
    ['Siebentausenddreihundertzweiundzwanzig'],
    ['no', 'three small words']
);
//2g
verify(
    /.../,
    ['red platypus', 'wobbling nest'],
    ['earth bed', 'learning ape', 'BEET']
);
