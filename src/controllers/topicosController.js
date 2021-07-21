const { Disciplina, Topico } = require('../database/models/index');

const topicosController = {
  formRender: async (req, res) => {
    const { id_disciplina } = req.params;
    const { id_professor } = req.params;

    const { topicos } = await Disciplina.findByPk(id_disciplina, {
      include: { association: 'topicos' },
    });

    res.render('topicos_form', { topicos, id_disciplina, id_professor });
  },

  show: async (req, res) => {
    const { id_disciplina } = req.params;
    const { id_professor } = req.params;

    const { nome, topicos } = await Disciplina.findByPk(id_disciplina, {
      include: { association: 'topicos' },
    });

    res.render('topicos', {
      nome_disciplina: nome, topicos, id_disciplina, id_professor,
    });
  },

  store: async (req, res) => {
    const { id_professor } = req.params;
    const { id_disciplina } = req.params;
    const { nome } = req.body;

    const disciplina = await Disciplina.findByPk(id_disciplina);

    if (!disciplina) {
      return res.status(400).json({ erro: 'disciplina não encontrada' });
    }

    const topico = await Topico.create({
      nome,
      fk_disciplina: id_disciplina,
    });

    const id_topico = topico.id;

    return res.redirect(`/professores/${id_professor}/disciplinas/${id_disciplina}/topicos/${id_topico}/aulas/form`);
  },
};

module.exports = topicosController;
