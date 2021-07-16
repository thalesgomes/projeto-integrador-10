const { Disciplina, Topico } = require('../database/models/index');

const topicosController = {
  show: async (req, res) => {
    const { id_disciplina } = req.params;
    const disciplina = await Disciplina.findByPk(id_disciplina, {
      include: { association: 'topicos' },
    });
    res.json(disciplina);
  },

  store: async (req, res) => {
    const { id_disciplina } = req.params;
    const { id, nome } = req.body;

    const disciplina = await Disciplina.findByPk(id_disciplina);

    if (!disciplina) {
      return res.status(400).json({ erro: 'disciplina não encontrada' });
    }

    const topico = await Topico.create({
      id,
      nome,
      fk_disciplina: id_disciplina,
    });

    return res.json(topico);
  },
};

module.exports = topicosController;
