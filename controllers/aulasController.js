const {Professor, Disciplina, Topico, Aula} = require('../database/models');
const { uuid } = require('uuidv4');

const aulasController = {
    
    criarAula: async (req, res) => {

        const {nome, url, descricao, conteudo, fk_professor, fk_topico, fk_disciplina } = req.body;

        // const disciplina = await Disciplina.findByPk(fk_disciplina);
        // const professor = await Professor.findByPk(fk_professor);
        // const topico = await Topico.findByPk(fk_topico);
        
        const aula = await Aula.create({
            nome, url, descricao, conteudo, fk_topico, fk_professor, fk_disciplina
        });

        res.json(aula)
    },
    listaProfessor: async (req, res) => {

        let listaProfessores = await Professor.findAll();

        console.log(listaProfessores)

        return res.render('professor_disciplina');      
    }

}

module.exports = aulasController;