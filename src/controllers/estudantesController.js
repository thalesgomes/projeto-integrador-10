const { Disciplina } = require('../database/models');

const estudantesController = {

  dashboardRender: async (req, res) => {
    if (!req.session.estudante) {
      return res.redirect('/usuarios/login');
    }

    const { id, nome } = req.session.estudante;

    const disciplinas = await Disciplina.findAll();

    return res.render('dashboard', { nome, id, disciplinas });
  },

};

module.exports = estudantesController;
