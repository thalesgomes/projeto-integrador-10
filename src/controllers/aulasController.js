const { Aula } = require('../database/models');

const aulasController = {
  renderizarFormulario: (req, res) => {
    const { id_disciplina, id_professor, id_topico } = req.params;
    const { id: professor_id } = req.session.usuario;

    if (professor_id !== id_professor) return res.json('usuário não autorizado');

    return res.render('aulas_form', { id_disciplina, id_topico, professor_id });
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

};

module.exports = aulasController;
