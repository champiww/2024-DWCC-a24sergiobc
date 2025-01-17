'use strict';

function generateTable() {
    if (inputUid.value.length > 0) {
        fetch(url + '?userId=' + inputUid.value)
            .then((response) => response.json())
            .then((datos) => {
                createTableHead();
                datos.forEach((element) => {
                    createTableRowContent(element);
                });
            });
    }
}

function createTableHead() {
    let tr = document.createElement('tr');
    let thId = document.createElement('th');
    let thTitle = document.createElement('th');
    let thBody = document.createElement('th');

    thId.innerText = 'ID';
    thTitle.innerText = 'Title';
    thBody.innerText = 'Body';

    tr.append(thId);
    tr.append(thTitle);
    tr.append(thBody);

    thead.append(tr);
}

function createTableRowContent(datos) {
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdTitle = document.createElement('td');
    let tdBody = document.createElement('td');

    tdId.innerText = datos.id;
    tdTitle.innerText = datos.title;
    tdBody.innerText = datos.body;

    tr.append(tdId);
    tr.append(tdTitle);
    tr.append(tdBody);

    tbody.append(tr);
}

const url = 'https://jsonplaceholder.typicode.com/posts';

const inputUid = document.getElementById('uid');
const button = document.getElementById('buscar');
const thead = document.getElementById('thead');
const tbody = document.getElementById('tbody');

button.addEventListener('click', () => generateTable());
