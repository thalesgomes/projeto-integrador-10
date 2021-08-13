const bcrypt = require('bcrypt');
const { Professor, Estudante } = require('../database/models');

const loginController = {

  renderizarLogin: (req, res) => res.render('usuarios_login'),

  autenticar: async (req, res) => {
    const { email, senha } = req.body;

    let usuario;

    try {
      usuario = await Professor.findOne({ where: { email } });
    } catch (error) {
      return console.log(error);
    }

    if (usuario) {
      const { senha: senhaHash } = usuario;

      if (!bcrypt.compareSync(senha, senhaHash)) {
        return res.json('senha incorreta');
      }

      req.session.usuario = usuario;
      req.session.save(() => res.redirect('/dashboard'));

      return;
    }

    try {
      usuario = await Estudante.findOne({ where: { email } });
    } catch (error) {
      return console.log(error);
    }

    if (usuario) {
      const { senha: senhaHash } = usuario;

      if (!bcrypt.compareSync(senha, senhaHash)) {
        return res.json('senha incorreta');
      }

      req.session.usuario = usuario;
      req.session.save(() => res.redirect('/dashboard'));

      return;
    }

    return res.json('usuário(a) não existe');
  },

  sair: (req, res) => {
    req.session.destroy();

    return res.json('logout realizado');
  },
};

module.exports = loginController;
