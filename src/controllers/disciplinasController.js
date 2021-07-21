const { Disciplina, Professor } = require('../database/models');

const disciplinasController = {

  formRender: async (req, res) => {
    const disciplinas = await Disciplina.findAll();
    const { id_professor } = req.params;
    res.render('disciplinas_form', { disciplinas, id_professor });
  },

  show: async (req, res) => {
    const disciplinas = await Disciplina.findAll();
    return res.json(disciplinas);
  },

  store: async (req, res) => {
    const { id_professor } = req.params;
    const { nome, imagem } = req.body;

    const professor = await Professor.findByPk(id_professor);

    if (!professor) {
      return res.status(400).json({ erro: 'professor(a) não encontrado(a)' });
    }

    const disciplina = await Disciplina.create({
      nome,
      imagem,
    });

    const id_disciplina = disciplina.id;

    return res.redirect(`/professores/${id_professor}/disciplinas/${id_disciplina}/topicos/form`);
  },
};

module.exports = disciplinasController;
