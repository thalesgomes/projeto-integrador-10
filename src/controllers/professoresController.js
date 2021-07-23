const { Professor } = require('../database/models');

const professoresController = {

  dashboardRender: async (req, res) => {
    const { nome, id } = req.session.professor;

    const professores = await Professor.findAll({
      where: { id },
      include: {
        association: 'disciplinas',
      },
    });

    let disciplinas;

    professores.forEach((professor) => {
      disciplinas = professor.disciplinas;
      console.log(disciplinas);
    });

    return res.render('dashboard_professor', { nome, disciplinas });
  },

};

module.exports = professoresController;
