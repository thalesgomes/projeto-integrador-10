const { Estudante } = require('../database/models');

const estudantesController = {
    index: async (req, res) => {
        const estudantes = await Estudante.findAll();
        res.json(estudantes)
    },

    store: async (req, res) => {
        const { id, nome, sobrenome, email, senha, categoria } = req.body;
        const estudante = await Estudante.create({ id, nome, sobrenome, email, senha, categoria })
        res.json(estudante)
    }

}

module.exports = estudantesController;