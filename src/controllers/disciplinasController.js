const { Disciplina, Professor, ProfessorDisciplina } = require('../database/models');

const disciplinasController = {

  formRender: async (req, res) => {
    if (!req.session.professor) {
      return res.json('professor não logado');
    }

    const { id } = req.session.professor;

    let professor;

    try {
      professor = await Professor.findOne({
        where: { id },
        include: {
          association: 'disciplinas',
        },
      });
    } catch (error) {
      return console.log(error);
    }

    const { disciplinas } = professor;

    return res.render('disciplinas_form', { disciplinas });
  },

  store: async (req, res) => {
    const { id: id_professor } = req.session.professor;
    const { nome, imagem } = req.body;

    try {
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
    } catch (error) {
      return console.log(error);
    }
  },
};

module.exports = disciplinasController;
