const { Disciplina, ProfessorDisciplina } = require('../database/models');

const disciplinasController = {

  formRender: async (req, res) => {
    const disciplinas = await Disciplina.findAll({});

    res.render('disciplinas_form', { disciplinas });
  },

  store: async (req, res) => {
    const { id: id_professor } = req.session.professor;
    const { nome, imagem } = req.body;

    const disciplina = await Disciplina.create({
      nome,
      imagem,
    });

    const id_disciplina = disciplina.id;

    await ProfessorDisciplina.create({
      fk_disciplina: id_disciplina,
      fk_professor: id_professor,
    });

    return res.redirect(`/disciplinas/${id_disciplina}/topicos/form`);
  },
};

module.exports = disciplinasController;
