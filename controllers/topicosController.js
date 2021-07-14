const { Disciplina } = require('../database/models');
const { Topico } = require('../database/models');

const topicosController = {
    store: async (req, res) => {
        const { disciplina_id } = req.params;
        const { id, nome } = req.body;

        const disciplina = await Disciplina.findByPk(disciplina_id);

        if (!disciplina) {
            return res.status(400).json({ erro: 'usuário não encontrado' })
        }

        const topico = await Topico.create({
            id,
            nome,
            fk_disciplina: disciplina_id
        })

        res.json(topico)
    }
}

module.exports = topicosController;