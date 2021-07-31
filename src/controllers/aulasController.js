const { Aula } = require('../database/models');

const aulasController = {
  render: (req, res) => {
    const { id_disciplina, id_topico } = req.params;
    return res.render('aulas_edicao', { id_disciplina, id_topico });
  },

  store: async (req, res) => {
    const { id_disciplina, id_topico } = req.params;
    const { nome, url_aula, descricao_aula } = req.body;
    const { id } = req.session.professor;

    await Aula.create({
      nome,
      url_aula,
      descricao_aula,
      fk_professor: id,
      fk_disciplina: id_disciplina,
      fk_topico: id_topico,
    });

    return res.redirect(`/disciplinas/${id_disciplina}/topicos`);
  },

};

module.exports = aulasController;
