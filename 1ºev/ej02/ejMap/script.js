'use strict';

//Ej 01
console.log('Ej01');

const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);

// a
let eventos = [];

let set = new Set(gameEvents.values());
console.log(set);

// b

for (const element of gameEvents) {
    if (element[0] < 46) {
        console.log('[PRIMEIRA PARTE] ' + element[0] + ': ' + element[1]);
    } else {
        console.log('[SEGUNDA PARTE] ' + element[0] + ': ' + element[1]);
    }
}
