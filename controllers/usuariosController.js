const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const { uuid } = require('uuidv4');

const usuariosPath = path.join('usuarios.json');
let usuarios = fs.readFileSync(usuariosPath, { encoding: 'utf-8' });
usuarios = JSON.parse(usuarios);

const usuariosController = {
  cadastro: (req, res) => {
    res.render('usuarios_cadastro');
  },

  salvar: (req, res) => {
    const { nome, email, senha } = req.body;

    const senhaCrypt = bcrypt.hashSync(senha, 10);

    usuarios.push({
      id: uuid(), nome, email, senha: senhaCrypt,
    });

    const dadosJson = JSON.stringify(usuarios);
    fs.writeFileSync(usuariosPath, dadosJson);

    return res.redirect('dashboard');
  },
};

module.exports = usuariosController;
