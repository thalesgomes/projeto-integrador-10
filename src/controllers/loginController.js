const bcrypt = require('bcrypt');
const { Professor } = require('../database/models');

const loginController = {

  loginRender: (req, res) => {
    res.render('usuarios_login');
  },

  auth: async (req, res) => {
    const { email } = req.body;
    const senhaForm = req.body.senha;

    const professores = await Professor.findAll({ where: { email } });

    if (professores.length > 0 || professores !== undefined) {
      professores.forEach((professor) => {
        const { senha } = professor;

        if (!bcrypt.compareSync(senhaForm, senha)) {
          return res.json('usuário(a) ou senha incorretos');
        }

        return res.redirect('/dashboard');
      });
    }

    // const estudantes = await Estudante.findAll({ where: { email } });

    // if (estudantes.length > 0 || estudantes === undefined) {
    //   estudantes.forEach((estudante) => {
    //     const { senha } = estudante;

    //     if (!bcrypt.compareSync(senhaForm, senha)) {
    //       return res.json('usuário(a) ou senha incorretos');
    //     }

    //     req.session = estudante;

    //     return res.redirect('/dashboard');
    //   });
    // }

    return res.json('usuário(a) não existe');
  },
};

module.exports = loginController;
