const {Professor, Disciplina, Topico, Aula} = require('../database/models');
const { uuid } = require('uuidv4');

const aulasController = {
    
    criarAula: (req, res) => {

        const {nome, url, descricao, conteudo, fk_professor, fk_topico, fk_disciplina } = req.body;
        
        Aula.create({
            nome, url, descricao, conteudo,  fk_professor, fk_topico, fk_disciplina
        });
    } 

}

module.exports = aulasController;