const { Aula, Topico } = require('../database/models');

const aulasController = {

  renderizarFormulario: (req, res) => {
    const { id_disciplina, id_professor, id_topico } = req.params;
    const { id: professor_id } = req.session.usuario;

    if (professor_id !== id_professor) return res.json('usuário não autorizado');

    return res.render('aulas_form', { id_disciplina, id_topico, professor_id });
  },

  assistir: async (req, res) => {
    const { id_disciplina, id_professor, id_topico } = req.params;
    const { usuario } = req.session;

    if (usuario.categoria === 'professor' && usuario.id !== id_professor) {
      return res.json('usuário não autorizado');
    }

    try {
      const topico = await Topico.findOne({
        where: {
          id: id_topico,
          fk_disciplina: id_disciplina,
          fk_professor: id_professor,
        },
        include: ['aulas'],
      });

      return res.render('aulas_em_curso', { topico, id_professor, id_disciplina });
    } catch (error) {
      console.log(error);
    }

    return res.json({ erro: 'algo inesperado ocorreu' });
  },

  cadastrar: async (req, res) => {
    const { id_disciplina, id_topico, id_professor } = req.params;
    const { nome, url_aula, descricao_aula } = req.body;
    const { id: professor_id } = req.session.usuario;

    if (professor_id !== id_professor) return res.json('usuário não autorizado');

    try {
      await Aula.create({
        nome,
        url_aula,
        descricao_aula,
        fk_professor: professor_id,
        fk_disciplina: id_disciplina,
        fk_topico: id_topico,
      });
    } catch (error) {
      console.log(error);
    }

    return res.redirect(`/disciplinas/${id_disciplina}/professores/${professor_id}/topicos`);
  },

  renderizarFormularioEdicao: async (req, res) => {
    const {
      id_disciplina, id_professor, id_topico, id_aula,
    } = req.params;

    const aula = await Aula.findOne({
      where: {
        id: id_aula,
        fk_professor: id_professor,
        fk_disciplina: id_disciplina,
        fk_topico: id_topico,
      },
    });

    return res.render('aulas_form_editar', {
      aula, id_disciplina, id_professor, id_topico,
    });
  },

  aulaEdicao: async (req, res) => {
    const {
      id_disciplina, id_professor, id_topico, id_aula,
    } = req.params;
    const { nome, url_aula, descricao_aula } = req.body;

    await Aula.update({
      nome,
      url_aula,
      descricao_aula,
    }, {
      where: {
        id: id_aula,
        fk_professor: id_professor,
        fk_disciplina: id_disciplina,
        fk_topico: id_topico,
      },
    });

    return res.redirect('aulas_em_curso');
  },

  excluir: async (req, res) => {
    const {
      id_disciplina, id_professor, id_topico, id_aula,
    } = req.params;

    await Aula.destroy({
      where: {
        id: id_aula,
        fk_professor: id_professor,
        fk_disciplina: id_disciplina,
        fk_topico: id_topico,
      },
    });

    return res.redirect(`/disciplinas/${id_disciplina}/professores/${id_professor}/topicos/${id_topico}/aulas/`);
  },

};

module.exports = aulasController;
