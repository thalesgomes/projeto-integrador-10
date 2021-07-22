const { Disciplina } = require('../database/models');

const professoresController = {

  dashboardRender: async (req, res) => {
    const { id, nome } = req.session.professor;

    const disciplinas = await Disciplina.findAll();

    return res.render('dashboard_professor', { nome, id, disciplinas });
  },

};

module.exports = professoresController;
