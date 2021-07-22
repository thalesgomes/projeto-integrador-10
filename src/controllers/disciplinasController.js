const { Disciplina } = require('../database/models');

const disciplinasController = {

  formRender: async (req, res) => {
    const disciplinas = await Disciplina.findAll();
    res.render('disciplinas_form', { disciplinas });
  },

  store: async (req, res) => {
    const { nome, imagem } = req.body;

    const disciplina = await Disciplina.create({
      nome,
      imagem,
    });

    const id_disciplina = disciplina.id;

    return res.redirect(`/disciplinas/${id_disciplina}/topicos/form`);
  },
};

module.exports = disciplinasController;
