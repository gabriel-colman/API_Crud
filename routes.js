const express = require('express');
const router = express.Router();

const usuarioController = require('./controllers/usuarioController'); // Importa o controlador de usuários

// Rotas para a entidade "usuario"
router.get('/data', usuarioController.getAllUsuarios);
router.post('/data', usuarioController.createUsuario);
router.put('/data/:id', usuarioController.updateUsuario);
router.delete('/data/:id', usuarioController.deleteUsuario);

module.exports = router;
