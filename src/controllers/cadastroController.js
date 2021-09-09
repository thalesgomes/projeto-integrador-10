const bcrypt = require('bcrypt');
const { uuid } = require('uuidv4');

const {
  Estudante,
  Professor,
  ProfessorDisciplina,
} = require('../database/models');

const cadastroController = {
  renderizarFormulario: async (req, res) =>
    res.status(200).render('pages/cadastro'),

  cadastrar: async (req, res) => {
    const id = uuid();

    const { nome, sobrenome, email, senha, categoria, disciplina } = req.body;

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

        return res.status(201).redirect('/login');
      } catch (error) {
        console.log(error);
        return res
          .status(400)
          .json({ erro: 'não foi possível realizar o cadastro' });
      }
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
          id_professor: id,
          id_disciplina: disciplina,
        });

        return res.status(201).redirect('/login');
      } catch (error) {
        console.log(error);
        return res
          .status(400)
          .json({ erro: 'não foi possível realizar o cadastro' });
      }
    }

    return res.status(500).json({ erro: 'algo inesperado aconteceu' });
  },
};

module.exports = cadastroController;
