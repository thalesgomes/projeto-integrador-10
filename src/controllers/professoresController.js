const { Professor } = require('../database/models/index');

const professoresController = {
  show: async (req, res) => {
    const professores = await Professor.findAll();

    res.json(professores);
  },

  store: async (req, res) => {
    const {
      id, nome, sobrenome, email, senha, categoria,
    } = req.body;

    const professor = await Professor.create({
      id, nome, sobrenome, email, senha, categoria,
    });

    res.json(professor);
  },
};

module.exports = professoresController;
