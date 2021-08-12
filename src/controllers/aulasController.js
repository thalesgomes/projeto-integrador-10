const { Aula, Topico } = require('../database/models');

const aulasController = {

  renderizarFormulario: (req, res) => {
    const { id_disciplina, id_professor, id_topico } = req.params;
    const { id: professor_id } = req.session.usuario;

    if (professor_id !== id_professor) return res.json('usuário não autorizado');

    return res.render('aulas_form', { id_disciplina, id_topico, professor_id });
  },

  // listar: async (req, res) => {
  //   const { id_disciplina, id_professor } = req.params;
  //   const { id: professor_id } = req.session.usuario;

  //   if (professor_id !== id_professor) return res.json('usuário não autorizado');

  //   try {
  //     const topicos = await Topico.findAll({
  //       where: {
  //         fk_disciplina: id_disciplina,
  //         fk_professor: id_professor,
  //       },
  //       include: ['aulas'],
  //     });

  //     return res.render('aulas_em_curso', { topicos, id_professor });
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   return res.json({ erro: 'algo inesperado ocorreu' });
  // },

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

      return res.render('aulas_em_curso', { topico, id_professor });
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

};

module.exports = aulasController;
