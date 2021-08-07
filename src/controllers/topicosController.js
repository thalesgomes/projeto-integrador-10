const { Disciplina, Topico, EstudanteAula, EstudanteDisciplina } = require('../database/models/index');

const topicosController = {
  formRender: async (req, res) => {
    const { id_disciplina } = req.params;

    try {
      const { topicos } = await Disciplina.findByPk(id_disciplina, {
        include: { association: 'topicos' },
      });

      return res.render('topicos_form', { topicos, id_disciplina });
    } catch (error) {
      return console.log(error);
    }
  },

  show: async (req, res) => {
    const { id_disciplina } = req.params;
    const { id } = req.session.professor;

    try {
      const topicos = await Topico.findAll({
        where: {
          fk_professor: id,
          fk_disciplina: id_disciplina,
        },
        include: ['aulas'],
      });

      const { nome } = await Disciplina.findByPk(id_disciplina);

      return res.render('topicos', {
        nome_disciplina: nome,
        topicos,
        id_disciplina,
      });
    } catch (error) {
      return console.log(error);
    }
  },

  store: async (req, res) => {
    const { id_disciplina } = req.params;
    const { nome } = req.body;
    const { id } = req.session.professor;

    try {
      const topico = await Topico.create({
        nome,
        fk_disciplina: id_disciplina,
        fk_professor: id,
      });

      const id_topico = topico.id;

      return res.redirect(`/disciplinas/${id_disciplina}/topicos/${id_topico}/aulas/form`);
    } catch (error) {
      return console.log(error);
    }
  },
  show_topicos: async (req, res) => {

    const { id_professor, id_disciplina } = req.params;

    const topicos = await Topico.findAll({
      where: {
        fk_disciplina: id_disciplina,
        fk_professor: id_professor
      },
      include: ['aulas'],
    });

    const disciplina = await Disciplina.findByPk(id_disciplina);


    // res.json(topicos);
    const { aulas } = topicos;
    
    res.render('topicos_estudante', {topicos, aulas, disciplina})
  },
  store_aula: async (req, res) => {
    
    let { id } = req.session.estudante;
    const { id_professor, id_disciplina } = req.params;
    
    const aulaCriada = await EstudanteDisciplina.create({
      fk_estudante: id,
      fk_disciplina: id_disciplina,
      fk_professor: id_professor
    })

    res.json(aulaCriada)
    
  }
};

module.exports = topicosController;
