const { Topico, Aula } = require('../database/models/index');

const arquivosController = {
  listar: async (req, res) => {
    const { id, categoria } = req.session.usuario;
    const { id_disciplina, id_topico } = req.params;

    if (categoria === 'professor') {
      try {
        const topico = await Topico.findOne({
          where: {
            id_professor: id,
            id_disciplina,
            id: id_topico,
          },
          // order: [[{ model: Aula, as: 'aulas' }, 'id', 'DESC']],
          include: {
            model: Aula,
            as: 'aulas',
            include: ['arquivos'],
          },
        });

        const { aulas } = topico;

        return res.status(200).render('pages/arquivos', {
          id_disciplina,
          aulas,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          erro: 'não foi possível carregar os arquivos. Tente novamente mais tarde',
        });
      }
    }
  },
};

module.exports = arquivosController;
