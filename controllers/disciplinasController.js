const { Disciplina, Professor, ProfessorDisciplina } = require('../database/models');

const disciplinasController = {
    index: async (req, res) => {
        const disciplinas = await Disciplina.findAll();
        res.json(disciplinas)
    },

    store: async (req, res) => {

        const { professor_id } = req.params;
        const { nome, imagem } = req.body;

        const professor = await Professor.findByPk(professor_id);

        if (!professor) {
            return res.status(400).json({ erro: 'professor(a) não encontrado(a)' })
        }

        const disciplina = await Disciplina.create({
            nome,
            imagem,
            fk_professor: professor_id
        })

        // await ProfessorDisciplina.create({
        //     fk_disciplina: disciplina.id,
        //     fk_professor: professor_id
        // })

        res.json(disciplina)
    }
}

module.exports = disciplinasController;