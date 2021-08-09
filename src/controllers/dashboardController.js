const { Estudante, Professor } = require('../database/models');

const dashboardController = {

  renderizarDashboard: async (req, res) => {
    const { usuario } = req.session;
    const { id } = usuario;

    if (usuario.categoria === 'estudante') {
      try {
        const estudante = await Estudante.findOne({
          where: { id },
          include: {
            association: 'disciplinas',
          },
        });

        const { disciplinas } = estudante;

        return res.render('dashboard_estudante', { estudante, disciplinas });
      } catch (error) {
        return console.log(error);
      }
    }

    if (usuario.categoria === 'professor') {
      try {
        const professor = await Professor.findOne({
          where: { id },
          include: {
            association: 'disciplinas',
          },
        });

        return res.render('dashboard_professor', { professor });
      } catch (error) {
        return console.log(error);
      }
    }

    return res.json('algo inesperado aconteceu');
  },

};

module.exports = dashboardController;
