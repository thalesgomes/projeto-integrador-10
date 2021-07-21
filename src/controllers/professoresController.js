const bcrypt = require('bcrypt');
const { uuid } = require('uuidv4');
const { Disciplina, Professor } = require('../database/models');

const professoresController = {

  dashboardRender: async (req, res) => {
    const disciplinas = await Disciplina.findAll();
    const { id_professor } = req.params;
    res.render('dashboard_professor', { disciplinas, id_professor });
  },

  show: async (req, res) => {
    const professores = await Professor.findAll();
    res.json(professores);
  },

  store: async (req, res) => {
    const id = uuid();

    const {
      nome,
      sobrenome,
      email,
      senha,
      categoria,
    } = req.body;

    const hashSenha = bcrypt.hashSync(senha, 10);

    const professor = await Professor.create({
      id,
      nome,
      sobrenome,
      email,
      senha: hashSenha,
      categoria,
    });

    return res.json(professor);
  },
};

module.exports = professoresController;
