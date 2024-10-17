'use strict';

//Ej 01
console.log('Ej01');

let television = {
    marca: 'Samsung',
    categoria: 'televisores',
    unidades: 4,
    prezo: 354.99,
    prezoTotal() {
        return this.unidades * this.prezo;
    },
};

console.log(television.prezoTotal());

//Ej02
console.log('Ej02');

const game = {
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

let { team1, x: draw, team2 } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

//Ej03
console.log('Ej03');

const game2 = {
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};
//a
let i = 0;
for (const element of game2.scored) {
    i++;
    console.log('Gol ' + i + ' ' + element);
}
//b
const scorers = {};

for (const element of game2.scored) {
    if (scorers[element]) {
        scorers[element]++;
    } else {
        scorers[element] = 1;
    }
}

console.log(scorers);
