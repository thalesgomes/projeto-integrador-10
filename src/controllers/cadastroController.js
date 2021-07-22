const bcrypt = require('bcrypt');
const { uuid } = require('uuidv4');
const { Estudante, Professor } = require('../database/models');

const cadastroController = {

  cadastroRender: async (req, res) => {
    res.render('usuarios_cadastro');
  },

  cadastrar: async (req, res) => {
    const id = uuid();

    const {
      nome,
      sobrenome,
      email,
      senha,
      categoria,
    } = req.body;

    const hashSenha = bcrypt.hashSync(senha, 10);

    if (categoria === 'estudante') {
      await Estudante.create({
        id,
        nome,
        sobrenome,
        email,
        senha: hashSenha,
        categoria,
      });

      return res.redirect('/usuarios/login');
    }

    if (categoria === 'professor') {
      await Professor.create({
        id,
        nome,
        sobrenome,
        email,
        senha: hashSenha,
        categoria,
      });

      return res.redirect('/usuarios/login');
    }
  },

};

module.exports = cadastroController;
