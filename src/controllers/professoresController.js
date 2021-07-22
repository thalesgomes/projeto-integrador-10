const { Disciplina } = require('../database/models');

const professoresController = {

  dashboardRender: async (req, res) => {
    const { nome } = req.session.professor;

    const disciplinas = await Disciplina.findAll();

    return res.render('dashboard_professor', { nome, disciplinas });
  },

};

module.exports = professoresController;
