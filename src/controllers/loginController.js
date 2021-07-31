const bcrypt = require('bcrypt');
const { Professor, Estudante } = require('../database/models');

const loginController = {

  loginRender: (req, res) => res.render('usuarios_login'),

  auth: async (req, res) => {
    const { email, senha } = req.body;
    let professor;

    try {
      professor = await Professor.findOne({ where: { email } });
    } catch (error) {
      return console.log(error);
    }

    if (professor) {
      const { senha: senhaHash } = professor;

      if (!bcrypt.compareSync(senha, senhaHash)) {
        return res.json('senha incorreta');
      }

      req.session.professor = professor;

      return res.redirect('/professor/dashboard');
    }

    let estudante;

    try {
      estudante = await Estudante.findOne({ where: { email } });
    } catch (error) {
      return console.log(error);
    }

    if (estudante) {
      const { senha: senhaHash } = estudante;

      if (!bcrypt.compareSync(senha, senhaHash)) {
        return res.json('senha incorreta');
      }

      req.session.estudante = estudante;

      return res.redirect('/estudante/dashboard');
    }

    return res.json('usuário(a) não existe');
  },
};

module.exports = loginController;
