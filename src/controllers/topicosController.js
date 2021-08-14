const { Disciplina, Topico, Aula } = require('../database/models/index');

const topicosController = {

  renderizarFormulario: async (req, res) => {
    const { id_disciplina, id_professor } = req.params;
    const { id: professor_id } = req.session.usuario;

    if (professor_id !== id_professor) return res.json('usuário não autorizado');

    try {
      const { topicos } = await Disciplina.findByPk(id_disciplina, {
        include: { association: 'topicos' },
      });

      return res.render('topicos_form', { topicos, id_disciplina, professor_id });
    } catch (error) {
      return console.log(error);
    }
  },

  cadastrar: async (req, res) => {
    const { id_disciplina, id_professor } = req.params;
    const { nome } = req.body;
    const { id: professor_id } = req.session.usuario;

    if (professor_id !== id_professor) return res.json('usuário não autorizado');

    try {
      const topico = await Topico.create({
        nome,
        fk_disciplina: id_disciplina,
        fk_professor: professor_id,
      });

      const id_topico = topico.id;

      return res.redirect(`/disciplinas/${id_disciplina}/professores/${id_professor}/topicos/${id_topico}/aulas/form`);
    } catch (error) {
      return console.log(error);
    }
  },

  listar: async (req, res) => {
    const { id_professor, id_disciplina } = req.params;
    const { usuario } = req.session;

    if (usuario.categoria === 'professor') {
      if (usuario.id !== id_professor) return res.json('usuário não autorizado');

      try {
        const topicos = await Topico.findAll({
          where: {
            fk_disciplina: id_disciplina,
            fk_professor: id_professor,
          },
          include: ['aulas'],
        });

        const disciplina = await Disciplina.findByPk(id_disciplina);

        return res.render('topicos_professor', { topicos, disciplina, id_professor });
      } catch (error) {
        console.log(error);
      }
    }

    if (usuario.categoria === 'estudante') {
      try {
        const topicos = await Topico.findAll({
          where: {
            fk_disciplina: id_disciplina,
            fk_professor: id_professor,
          },
          include: ['aulas'],
        });

        const disciplina = await Disciplina.findByPk(id_disciplina);

        return res.render('topicos_estudante', { topicos, disciplina, id_professor });
      } catch (error) {
        console.log(error);
      }
    }

    return res.json('algo inesperado ocorreu');
  },

  RenderizarFormEdicao: async (req, res) => {
    const { id_disciplina, id_professor, id_topico } = req.params;

    const topico = await Topico.findOne({
      where: {
        id: id_topico,
        fk_disciplina: id_disciplina,
        fk_professor: id_professor,
      },
    });

    return res.render('topicos_form_editar', { topico, id_disciplina, id_professor });
  },

  EditarNomeTopico: async (req, res) => {
    const { id_disciplina, id_professor, id_topico } = req.params;
    const { nome } = req.body;

    await Topico.update({ nome },
      {
        where: {
          id: id_topico,
          fk_disciplina: id_disciplina,
          fk_professor: id_professor,
        },
      });

    return res.redirect(`/disciplinas/${id_disciplina}/professores/${id_professor}/topicos`);
  },

  excluir: async (req, res) => {
    const { id_disciplina, id_professor, id_topico } = req.params;

    const aulas = await Aula.findAll({
      where: {
        fk_professor: id_professor,
        fk_disciplina: id_disciplina,
        fk_topico: id_topico,
      },
    });

    aulas.forEach((aula) => {
      Aula.destroy({
        where: {
          id: aula.id,
          fk_professor: id_professor,
          fk_disciplina: id_disciplina,
          fk_topico: id_topico,
        },
      });
    });

    await Topico.destroy({
      where: {
        id: id_topico,
        fk_disciplina: id_disciplina,
        fk_professor: id_professor,
      },
      include: ['aulas'],
    });

    return res.redirect(`/disciplinas/${id_disciplina}/professores/${id_professor}/topicos/`);
  },
};

module.exports = topicosController;
