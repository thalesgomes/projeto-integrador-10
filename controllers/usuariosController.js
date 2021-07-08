const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const { uuid } = require('uuidv4');
const { Usuario, Sequelize } = require('../database/models');

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

    return res.redirect('/usuarios/login');
  },

  salvarNovo: async (req, res) => {
     
    const { nome, email, senha } = req.body;

    const senhaCrypt = bcrypt.hashSync(senha, 10);

    const usuarioCriado = await Usuario.create ({

      id_usuario: uuid(),
      nome_usuario: nome,
      email_usuario: email,
      senha_usuario: senhaCrypt

    });

    console.log(usuarioCriado);

    return res.redirect('/usuarios/login');

  },

  login: (req, res) => {
    res.render('usuarios_login')
  },

  autenticacao: (req, res) => {

    const {email, senha } = req.body;

    let usuarioEncontrado = usuarios.find(usuario => usuario.email == email);

    if(usuarioEncontrado && bcrypt.compareSync(senha, usuarioEncontrado.senha)) {
      
      req.session.usuarioLogado = usuarioEncontrado;

      res.redirect('/dashboard')

    } else {

      res.redirect('/usuarios/login')

    }

  },
  autenticacaoNovo: async (req, res) => {
    
    const {email, senha } = req.body;

    let usuarioEncontrado = await Usuario.findAll({

      where: {email_usuario: email}

    });

    usuarioEncontrado = JSON.stringify(usuarioEncontrado);
    usuarioEncontrado = JSON.parse(usuarioEncontrado);
    // console.log(usuarioEncontrado[0].senha_usuario);

    if(usuarioEncontrado && bcrypt.compareSync(senha, usuarioEncontrado[0].senha_usuario)) {
      
      req.session.usuarioLogado = usuarioEncontrado[0];

      res.redirect('/dashboard')

    } else {

      res.redirect('/usuarios/login')

    }
 
  }
};

module.exports = usuariosController;
