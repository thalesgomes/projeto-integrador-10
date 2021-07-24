const bcrypt = require('bcrypt');
const { Professor, Estudante } = require('../database/models');

const loginController = {

  loginRender: (req, res) => {
    res.render('usuarios_login');
  },

  auth: async (req, res) => {
    const { email, senha } = req.body;
    const [professor] = await Professor.findAll({ where: { email } });

    if (professor) {
      const { senha: senhaHash } = professor;

      if (!bcrypt.compareSync(senha, senhaHash)) {
        return res.json('senha incorreta');
      }

      req.session.professor = professor;

      return res.redirect('/professor/dashboard');
    }

    const estudantes = await Estudante.findAll({ where: { email } });

    if (estudantes.length > 0 || estudantes !== undefined) {
      estudantes.forEach((estudante) => {
        const { senha: senhaHash } = estudante;

        if (!bcrypt.compareSync(senha, senhaHash)) {
          return res.json('senha incorreta');
        }

        req.session.estudante = estudante;

        return res.redirect('/estudante/dashboard');
      });
    }

    return res.json('usuário(a) não existe');
  },
};

module.exports = loginController;
