const bcrypt = require('bcrypt');
const validator = require('validator');
const { Professor, Estudante } = require('../database/models');

const loginController = {
  renderizarLogin: (req, res) => {
    const erros = [];
    res.status(200).render('pages/login', { erros });
  },

  autenticar: async (req, res) => {
    const { email, senha } = req.body;
    const erros = [];

    if (!validator.isEmail(email)) {
      erros.push('email inválido');
    }

    if (
      !validator.isLength(senha, {
        min: 5,
        max: 30,
      })
    ) {
      erros.push('senha inválida');
    }

    if (erros.length > 0) {
      return res.status(400).render('pages/login', { erros });
    }

    try {
      const usuario = await Professor.findOne({ where: { email } });

      if (usuario) {
        const { senha: senhaHash } = usuario;

        if (!bcrypt.compareSync(senha, senhaHash)) {
          erros.push('senha não confere');
          return res.status(400).render('pages/login', { erros });
        }

        req.session.usuario = usuario;
        return req.session.save(() => res.status(200).redirect('/dashboard'));
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ erro: 'algo inesperado ocorreu' });
    }

    try {
      const usuario = await Estudante.findOne({ where: { email } });

      if (usuario) {
        const { senha: senhaHash } = usuario;

        if (!bcrypt.compareSync(senha, senhaHash)) {
          erros.push('senha não confere');
          return res.status(400).render('pages/login', { erros });
        }

        req.session.usuario = usuario;
        return req.session.save(() => res.status(200).redirect('/dashboard'));
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ erro: 'algo inesperado ocorreu' });
    }

    erros.push('usuário não existe');
    return res.status(400).render('pages/login', { erros });
  },

  sair: (req, res) => {
    req.session.destroy();

    return res.status(200).redirect('/login');
  },
};

module.exports = loginController;
