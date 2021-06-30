const fs = require('fs');
const path = require('path');
const { uuid } = require('uuidv4');

const aulaPath = path.join('aula.json');
let aulas = fs.readFileSync(aulaPath, { encoding: 'utf-8' });
aulas = JSON.parse(aulas);

const criarAulaController = {
    
    criarAula: (req, res) => {

        const {nome, url, descricao} = req.body;
        
        aulas.push({
            id: uuid(), nome, url, descricao
        });

        const dadosJson = JSON.stringify(aulas);
        fs.writeFileSync(aulaPath, dadosJson);
        res.send('Aula criada com sucesso')
    } 

}

module.exports = criarAulaController;