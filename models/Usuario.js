const { Client } = require('pg');
const dbConfig = {
  user: 'postgres',
  password: '415232',
  host: 'localhost',
  port: 5432,
  database: 'teste',

};

class Usuario { // Classe que representa a tabela usuario do banco de dados
  async connectDB() { // Método para conectar ao banco de dados
    const client = new Client(dbConfig); // Cria uma nova conexão
    await client.connect();
    return client;
  }

  async getAllUsuarios() { // Método para retornar todos os usuários
    const client = await this.connectDB(); // Conecta ao banco de dados
    const result = await client.query('SELECT * FROM usuario');
    client.end();
    return result.rows;
  }

  async createUsuario(id, nome, email) { // Método para criar um novo usuário
    const client = await this.connectDB();
    const result = await client.query('INSERT INTO usuario (id, nome, email) VALUES ($1, $2, $3) RETURNING *', [id, nome, email]);
    client.end();
    return result.rows[0];
  }

  async updateUsuario(id, nome, email) { // Método para atualizar um usuário
    const client = await this.connectDB();
    const result = await client.query('UPDATE usuario SET nome = $1, email = $2 WHERE id = $3 RETURNING *', [nome, email, id]);
    client.end();
    return result.rows[0];
  }

  async deleteUsuario(id) { // Método para deletar um usuário
    const client = await this.connectDB(); // Conecta ao banco de dados
    const result = await client.query('DELETE FROM usuario WHERE id = $1 RETURNING *', [id]);
    client.end();
    return result.rows[0];
  }
}

module.exports = Usuario;
