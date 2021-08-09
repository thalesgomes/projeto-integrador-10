const { EstudanteDisciplina } = require('../database/models');

const estudantesController = {

  inscreverDisciplina: async (req, res) => {
    const { usuario } = req.session;
    const { id: id_estudante } = usuario;
    const { id_professor, id_disciplina } = req.params;

    if (usuario.categoria !== 'estudante') {
      return res.json('apenas os estudantes podem se inscrever nas disciplinas');
    }

    try {
      await EstudanteDisciplina.create({
        fk_estudante: id_estudante,
        fk_disciplina: id_disciplina,
        fk_professor: id_professor,
      });

      return res.redirect('/dashboard');
    } catch (error) {
      console.log(error);
    }

    return res.json({ erro: 'algo inesperado ocorreu' });
  },
};

module.exports = estudantesController;
