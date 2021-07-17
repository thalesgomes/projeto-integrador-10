const {Professor, Disciplina, Topico, Aula} = require('../database/models');
const { uuid } = require('uuidv4');

const aulasController = {
    
    criarAula: (req, res) => {

        const {id, nome, url, descricao, } = req.body;
        
        Aula.create({
            id: uuid(), nome, url, descricao
        });

        const disciplina = await Disciplina.create({
          nome,
          imagem,
          fk_professor: professor_id
      })

        const dadosJson = JSON.stringify(aulas);
        fs.writeFileSync(aulaPath, dadosJson);
        res.send('Aula criada com sucesso')
    } 

}

module.exports = aulasController;