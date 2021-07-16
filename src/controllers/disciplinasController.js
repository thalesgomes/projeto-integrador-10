const { Disciplina, Professor } = require('../database/models');

const disciplinasController = {
  show: async (req, res) => {
    const disciplinas = await Disciplina.findAll();
    res.json(disciplinas);
  },

  store: async (req, res) => {
    const { nome, imagem, id_professor } = req.body;

    const professor = await Professor.findByPk(id_professor);

    if (!professor) {
      return res.status(400).json({ erro: 'professor(a) não encontrado(a)' });
    }

    const disciplina = await Disciplina.create({
      nome,
      imagem,
    });

    return res.json(disciplina);
  },
};

module.exports = disciplinasController;
