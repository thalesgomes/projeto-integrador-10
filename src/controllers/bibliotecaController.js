const { Disciplina } = require('../database/models');

const bibliotecaController = {
  listar: async (req, res) => {
    try {
      const disciplinas = await Disciplina.findAll({
        include: { association: 'professores' },
      });

      return res.status(200).render('pages/biblioteca', { disciplinas });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ erro: 'não foi possível listar as disciplinas' });
    }
  },
};

module.exports = bibliotecaController;
