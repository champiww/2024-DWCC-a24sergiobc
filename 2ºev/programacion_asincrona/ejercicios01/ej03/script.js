/*
Busca unha imaxe grande en internet para probar que tarda tempo en descargarse.
Carga esa imaxe remota dende JavaScript. Cando a imaxe estea cargada, mostra
unha mensaxe en consola.
*/

let script = document.createElement('script');
script.src = 'cargarImaxe.js';
document.body.append(script);

script.addEventListener('load', () => {
    console.log('Imaxe cargada');
});
