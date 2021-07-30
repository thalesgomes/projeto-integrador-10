const bcrypt = require('bcrypt');
const { uuid } = require('uuidv4');
const { Estudante, Professor, ProfessorDisciplina } = require('../database/models');

const cadastroController = {

  cadastroRender: async (req, res) => {
    res.render('usuarios_cadastro');
  },

  cadastrar: async (req, res) => {
    const id = uuid();

    const {
      nome,
      sobrenome,
      email,
      senha,
      categoria,
      disciplina
    } = req.body;

    const hashSenha = bcrypt.hashSync(senha, 10);

    console.log(nome,
      sobrenome,
      email,
      senha,
      categoria,
      disciplina);
      
    if (categoria === 'estudante') {
      await Estudante.create({
        id,
        nome,
        sobrenome,
        email,
        senha: hashSenha,
        categoria,
      });

      return res.redirect('/usuarios/login');
    }

    if (categoria === 'professor') {
      await Professor.create({
        id,
        nome,
        sobrenome,
        email,
        senha: hashSenha,
        categoria,
      });

      await ProfessorDisciplina.create({
        fk_professor: id,
        fk_disciplina: disciplina
      });

      return res.redirect('/usuarios/login');
    }
  },

};

module.exports = cadastroController;
