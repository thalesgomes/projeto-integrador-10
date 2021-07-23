const { Professor } = require('../database/models');

const professoresController = {

  dashboardRender: async (req, res) => {
    const { nome, id } = req.session.professor;

    const [professor] = await Professor.findAll({
      where: { id },
      include: {
        association: 'disciplinas',
      },
    });

    const { disciplinas } = professor;

    return res.render('dashboard_professor', { nome, disciplinas });
  },

};

module.exports = professoresController;
