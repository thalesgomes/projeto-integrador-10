const { Disciplina } = require('../database/models');
const { Topico } = require('../database/models');

const topicosController = {
    index: async (req, res) => {
        const { disciplina_id } = req.params;
        const disciplina = await Disciplina.findByPk(disciplina_id, {
            include: { association: 'topicos' }
        });
        res.json(disciplina);
    },

    store: async (req, res) => {
        const { disciplina_id } = req.params;
        const { nome } = req.body;

        const disciplina = await Disciplina.findByPk(disciplina_id);

        if (!disciplina) {
            return res.status(400).json({ erro: 'disciplina não encontrada' })
        }

        const topico = await Topico.create({
            nome,
            fk_disciplina: disciplina_id
        })

        res.json(topico)
    }
}

module.exports = topicosController;