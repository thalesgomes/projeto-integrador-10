const { Disciplina } = require('../database/models');

const bibliotecaController = {

  listarDisciplinas: async (req, res) => {
    try {
      const disciplinas = await Disciplina.findAll();

      return res.render('biblioteca_disciplinas', { disciplinas });
    } catch (error) {
      console.log(error);
    }

    return res.json({ erro: 'algo inesperado aconteceu' });
  },

  listarProfessores: async (req, res) => {
    const { id_disciplina } = req.params;

    try {
      const disciplina = await Disciplina.findByPk(id_disciplina, {
        include: { association: 'professores' },
      });

      return res.render('biblioteca_professores', { disciplina });
    } catch (error) {
      console.log(error);
    }

    return res.json({ erro: 'algo inesperado ocorreu' });
  },
};

module.exports = bibliotecaController;
