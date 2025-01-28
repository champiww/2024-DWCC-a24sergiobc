async function createPost(post) {
    try {
        let response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json;charset=utf-8',
            },
        });
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Erro ' + error);
    }
}
const newPost = { title: 'Novo título' };
createPost(newPost);

const botonBuscar = document.getElementById('buscar');

botonBuscar.addEventListener('click', (event) => {
    event.preventDefault();
});
