const { Professor } = require('../database/models');

const bibliotecaController = {

  show: async (req, res) => {
    const professores = await Professor.findAll({
      include: {
        association: 'disciplinas',
      },
    });

    return res.render('biblioteca_teste', { professores });
  },
};

module.exports = bibliotecaController;
