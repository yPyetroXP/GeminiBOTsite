const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/login', (req, res) => {
    const { ip } = req.headers; // Obter o IP do cabeçalho da solicitação

    // Obter os dados do usuário do corpo da solicitação
    const { discordUserId, discordUsername } = req.body;

    // Salvar os dados do usuário em um arquivo JSON
    fs.readFile('logins.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro interno do servidor');
        }

        const logins = JSON.parse(data);
        logins[ip] = { discordUserId, discordUsername };

        fs.writeFile('logins.json', JSON.stringify(logins), 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro interno do servidor');
            }

            res.status(200).send('Login armazenado com sucesso');
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
