const bcrypt = require('bcrypt');
const { Professor, Estudante } = require('../database/models');

const loginController = {
  renderizarLogin: (req, res) => res.status(200).render('pages/login'),

  autenticar: async (req, res) => {
    const { email, senha } = req.body;

    let usuario;

    try {
      usuario = await Professor.findOne({ where: { email } });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ erro: 'não foi possível encontrar o usuário' });
    }

    if (usuario) {
      const { senha: senhaHash } = usuario;

      if (!bcrypt.compareSync(senha, senhaHash)) {
        return res.status(400).json({ erro: 'senha incorreta' });
      }

      req.session.usuario = usuario;
      req.session.save(() => res.status(200).redirect('/dashboard'));

      return;
    }

    try {
      usuario = await Estudante.findOne({ where: { email } });
    } catch (error) {
      return res
        .status(400)
        .json({ erro: 'não foi possível encontrar o usuário' });
    }

    if (usuario) {
      const { senha: senhaHash } = usuario;

      if (!bcrypt.compareSync(senha, senhaHash)) {
        return res.status(400).json({ erro: 'senha incorreta' });
      }

      req.session.usuario = usuario;
      req.session.save(() => res.status(200).redirect('/dashboard'));

      return;
    }

    return res.status(400).json({ erro: 'usuário(a) não existe' });
  },

  sair: (req, res) => {
    req.session.destroy();

    return res.status(200).json({ sucesso: 'logout realizado' });
  },
};

module.exports = loginController;
