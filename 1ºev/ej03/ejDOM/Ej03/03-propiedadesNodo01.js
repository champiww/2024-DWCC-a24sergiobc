'use strict';

const etiquetaEscolleSexo = document
    .getElementsByTagName('form')[0]
    .getElementsByTagName('label')[3];
//1
console.log('InnerHTML:');
console.log(etiquetaEscolleSexo.innerHTML);
console.log('InnerText');
console.log(etiquetaEscolleSexo.innerText);
console.log('TextContent');
console.log(etiquetaEscolleSexo.textContent);
//2
console.log('Valor do primeiro input de sexo');
console.log(etiquetaEscolleSexo.getElementsByTagName('input')[0].value);
//3
console.log('Valor do sexo que estea seleccionado');
for (let elemento of etiquetaEscolleSexo.getElementsByTagName('input')) {
    if (elemento.value) console.log(elemento.value);
}
//4
const listaUl = document.getElementsByTagName('ul')[0];

console.log('Texto de cada un dos elementos <li>');
for (let elemento of listaUl.getElementsByTagName('li')) {
    console.log(elemento.innerHTML);
}
//5
console.log('Numero de elementos <li>');
console.log(listaUl.getElementsByTagName('li').length);
//6
console.log('Valor do atributo data-widget-home');
let divs = document.getElementsByTagName('div');
for (let elemento of divs) {
    if (elemento.hasAttribute('data-widget-name'))
        console.log(elemento.getAttribute('data-widget-name'));
}
