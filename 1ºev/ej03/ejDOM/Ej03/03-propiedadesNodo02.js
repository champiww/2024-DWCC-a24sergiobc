'use strict';

const links = document.querySelectorAll('a');
//1
console.log('Numero de ligazóns da páxina');
console.log(links.length);

//2
console.log('Dirección da penúltima ligazón');
console.log(links[links.length - 2].href);

//3
console.log('Numero de ligazóns que apuntan a http://proba');
let contador = 0;
for (let linkActual of links) {
    if (linkActual.href == 'http://proba/') contador++;
}
console.log(contador);

//4
console.log('Numero de ligazóns do terceiro parágrafo');
console.log(document.getElementsByTagName('p')[2].querySelectorAll('a').length);

//5
console.log(
    'Modifica o estilo das ligazóns que apuntan a http://proba para que teñan o texto de color laranxa'
);
for (let linkActual of links) {
    if (linkActual.href == 'http://proba/')
        linkActual.setAttribute('style', 'color:#de7a1d;');
}
