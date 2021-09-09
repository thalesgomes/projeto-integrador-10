const { Estudante, Professor } = require('../database/models');

const dashboardController = {
  renderizarDashboard: async (req, res) => {
    const { id, categoria } = req.session.usuario;

    if (categoria === 'estudante') {
      try {
        const estudante = await Estudante.findOne({
          where: { id },
          include: ['disciplinas'],
        });

        const { disciplinas } = estudante;

        return res.status(200).render('pages/estudante_dashboard', {
          disciplinas,
          estudante,
          id,
        });
      } catch (error) {
        console.log(error);
        return res
          .status(400)
          .json({ erro: 'não foi possível carregar a página dashboard' });
      }
    }

    if (categoria === 'professor') {
      try {
        const professor = await Professor.findOne({
          where: { id },
          include: {
            association: 'disciplinas',
          },
        });

        const { disciplinas } = professor;

        return res.status(200).render('pages/professor_dashboard', {
          professor,
          disciplinas,
          id_professor: id,
        });
      } catch (error) {
        console.log(error);
        return res
          .status(400)
          .json({ erro: 'não foi possível carregar a página dashboard' });
      }
    }

    return res.status(500).json({ erro: 'algo inesperado aconteceu' });
  },
};

module.exports = dashboardController;
