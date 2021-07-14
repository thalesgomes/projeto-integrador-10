const { Disciplina } = require('../database/models');

const disciplinasController = {
    index: async (req, res) => {
        const disciplinas = await Disciplina.findAll();
        res.json(disciplinas)
    },

    store: async (req, res) => {
        const { id, nome, imagem } = req.body;
        const disciplina = await Disciplina.create({ id, nome, imagem })
        res.json(disciplina)
    }
}

module.exports = disciplinasController;