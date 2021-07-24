const { Estudante, EstudanteDisciplina } = require('../database/models');

const estudantesController = {

  dashboardRender: async (req, res) => {
    const { nome, id } = req.session.estudante;

    const [estudante] = await Estudante.findAll({
      where: { id },
      include: {
        association: 'disciplinas',
      },
    });

    const { disciplinas } = estudante;

    return res.render('dashboard_estudante', { nome, disciplinas });
  },

  cadastrarDisciplina: async (req, res) => {
    const { id } = req.session.estudante;
    const { id_disciplina } = req.params;

    const disciplinaCadastrada = await EstudanteDisciplina.create({
      fk_estudante: id,
      fk_disciplina: id_disciplina,
    });

    return res.json(disciplinaCadastrada);
  },
};

module.exports = estudantesController;
