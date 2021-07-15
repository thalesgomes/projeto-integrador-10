const { Professor } = require('../database/models');

const professoresController = {
    index: async (req, res) => {
        const professores = await Professor.findAll({
            include: {
                association: 'disciplinas',
                // attributes: ['id', 'nome', 'fk_professor'],
                // through: { attributes: [] }
            },
            // attributes: ['id', 'nome']
        });

        res.json(professores)
    },

    store: async (req, res) => {
        const { id, nome, sobrenome, email, senha, categoria } = req.body;
        const professor = await Professor.create({ id, nome, sobrenome, email, senha, categoria })
        res.json(professor)
    }
}

module.exports = professoresController;