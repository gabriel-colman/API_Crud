const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes'); // Importa as rotas do arquivo routes.js

app.use(express.json());
app.use('/api', routes); // Define o prefixo /api para as rotas

// app.use(express.static('view')); // Define a pasta view como pública
// Outra forma de fazer isso é
app.use(express.static(__dirname + '/view')); // __dirname é uma variável global que retorna o diretório raiz do projeto

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// O link para acessar http://localhost:3000/api/data

// http://localhost:3000/listar.html

// color a & curl p parrot.live 
// color 2 & curl p ascii.live/forrest 
