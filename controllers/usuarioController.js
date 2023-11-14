const Usuario = require('../models/Usuario');
const usuarioModel = new Usuario();

const usuarioController = {
  async getAllUsuarios(req, res) { // Método para retornar todos os usuários
    const usuarios = await usuarioModel.getAllUsuarios(); // Chama o método para retornar todos os usuários
    res.json(usuarios);
  },

  async createUsuario(req, res) {
    // const { id, nome, email } = req.query;
    const { id, nome, email } = req.body;
    const novoUsuario = await usuarioModel.createUsuario(id, nome, email); // Chama o método para criar um novo usuário
    res.json(novoUsuario);
  },

  async updateUsuario(req, res) {
    const id = req.params.id;
    // const { nome, email } = req.query;
    const { nome, email } = req.body;
    const usuarioAtualizado = await usuarioModel.updateUsuario(id, nome, email);
    res.json(usuarioAtualizado);
  },

  async deleteUsuario(req, res) {
    const id = req.params.id;
    const usuarioExcluido = await usuarioModel.deleteUsuario(id);
    res.json(usuarioExcluido);
  }
};

module.exports = usuarioController;
