const { Aluno } = require('../database/models');

const alunosController = {
    store: async (req, res) => {
        const { id, nome, sobrenome, email, senha } = req.body;

        const aluno = await Aluno.create({ id, nome, sobrenome, email, senha })

        res.json(aluno)
    }
}

module.exports = alunosController;