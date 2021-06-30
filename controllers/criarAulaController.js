const fs = require('fs');
const path = require('path');
const { uuid } = require('uuidv4');

const aulaPath = path.join('aula.json');
let aulas = fs.readFileSync(aulaPath, { encoding: 'utf-8' });
aulas = JSON.parse(aulas);

