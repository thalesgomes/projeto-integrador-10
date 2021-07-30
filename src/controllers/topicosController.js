const { Disciplina, Topico, Aula } = require('../database/models/index');

const topicosController = {
  formRender: async (req, res) => {
    const { id_disciplina } = req.params;

    const { topicos } = await Disciplina.findByPk(id_disciplina, {
      include: { association: 'topicos' },
    });

    res.render('topicos_form', { topicos, id_disciplina });
  },

  show: async (req, res) => {

    const { id_disciplina } = req.params;
    const { id } = req.session.professor;

    console.log(id)
    const topicos = await Topico.findAll({
      where: {
        fk_professor: id,
        fk_disciplina: id_disciplina
      }
    });




    const { nome } = await Disciplina.findByPk(id_disciplina);


        const aulasLista = await Aula.findAll({
            where: {
                fk_professor: id,
                fk_disciplina: id_disciplina,
                fk_topico: id_topico
            }
        })

        console.log(aulasLista);

    // console.log(nome);
    // console.log(topicos);

    res.render('topicos', {
      nome_disciplina: nome,
      topicos,
      id_disciplina,
      aulasLista
    });
  },

  store: async (req, res) => {
    const { id_disciplina } = req.params;
    const { nome } = req.body;
    const { id } = req.session.professor;

    const disciplina = await Disciplina.findByPk(id_disciplina);

    if (!disciplina) {
      return res.status(400).json({ erro: 'disciplina não encontrada' });
    }

    const topico = await Topico.create({
      nome,
      fk_disciplina: id_disciplina,
      fk_professor: id
    });

    const id_topico = topico.id;

    return res.redirect(`/disciplinas/${id_disciplina}/topicos/${id_topico}/aulas/form`);
  },
};

module.exports = topicosController;
