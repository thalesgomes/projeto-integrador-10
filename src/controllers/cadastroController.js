const bcrypt = require('bcrypt');
const { uuid } = require('uuidv4');
const { Estudante, Professor, ProfessorDisciplina } = require('../database/models');

const cadastroController = {

  cadastroRender: async (req, res) => res.render('usuarios_cadastro'),

  cadastrar: async (req, res) => {
    const id = uuid();

    const {
      nome,
      sobrenome,
      email,
      senha,
      categoria,
      disciplina,
    } = req.body;

    const hashSenha = bcrypt.hashSync(senha, 10);

    if (categoria === 'estudante') {
      try {
        await Estudante.create({
          id,
          nome,
          sobrenome,
          email,
          senha: hashSenha,
          categoria,
        });
      } catch (error) {
        console.log(error);
      }

      return res.redirect('/usuarios/login');
    }

    if (categoria === 'professor') {
      try {
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
          fk_disciplina: disciplina,
        });
      } catch (error) {
        console.log(error);
      }

      return res.redirect('/usuarios/login');
    }

    return res.json({ error: 'algo inesperado aconteceu' });
  },

};

module.exports = cadastroController;
