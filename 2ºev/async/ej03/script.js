import { Octokit, App } from 'https://esm.sh/octokit';
import { clave } from './clave.js';

const octokit = new Octokit({
    auth: clave,
});

async function obterUsuarios(arrayNomes) {
    let res = await octokit.request('GET /user', {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });
}

async function obterUsuarios(arrayNomes) {
    if (!Array.isArray(arrayNomes)) {
        console.error('O parámetro debe ser un array de logins de GitHub.');
        return;
    }

    for (const login of arrayNomes) {
        try {
            const response = await octokit.users.getByUsername({
                username: login,
            });
            console.log(`Información sobre ${login}:`, response.data);
        } catch (error) {
            console.error(
                `Erro ao obter información sobre ${login}:`,
                error.message
            );
        }
    }
}

const logins = ['champiww', 'Sergio Bértolo Castro'];
obterUsuarios(logins);
