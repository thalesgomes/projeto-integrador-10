const { Aula } = require('../database/models');

const aulasController = {
    render: (req, res) => {
        const { id_disciplina, id_topico} = req.params;
        res.render('aulas_edicao', { id_disciplina, id_topico });
    },
    store: async (req, res) => {
    
    const { id_disciplina, id_topico} = req.params;
    const { nome, url_aula, descricao_aula } = req.body;
    const { id } = req.session.professor;

    const aulaCriada = await Aula.create({
        nome,
        url_aula,
        descricao_aula,
        fk_professor: id,
        fk_disciplina: id_disciplina,
        fk_topico: id_topico
    })

    // console.log(aulaCriada);

    return res.redirect(`/disciplinas/${id_disciplina}/topicos`);

    },
    show: async (req, res) => {

        const { id_disciplina, id_topico} = req.params;
        const { id } = req.session.professor;

        const aulasLista = await Aula.findAll({
            where: {
                fk_professor: id,
                fk_disciplina: id_disciplina,
                fk_topico: id_topico
            }
        })

        console.log(aulasLista);

        res.render('topicos', {aulasLista})

    }
  
  };
  
  module.exports = aulasController;