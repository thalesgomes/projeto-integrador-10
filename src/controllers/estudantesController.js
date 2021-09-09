const { EstudanteDisciplina } = require('../database/models');

const estudantesController = {
  inscreverDisciplina: async (req, res) => {
    const { id: id_estudante, categoria } = req.session.usuario;
    const { id_professor, id_disciplina } = req.params;

    if (categoria !== 'estudante') {
      return res
        .status(401)
        .json('apenas os estudantes podem se inscrever nas disciplinas');
    }

    try {
      await EstudanteDisciplina.create({
        id_professor,
        id_disciplina,
        id_estudante,
      });

      return res.status(200).redirect('/dashboard');
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        erro: 'não possível realizar a inscrição. Tente novamente mais tarde',
      });
    }
  },
};

module.exports = estudantesController;
