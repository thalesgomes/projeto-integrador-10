const { Professor } = require('../database/models');

const bibliotecaController = {

  show: async (req, res) => {
    let professores;

    try {
      professores = await Professor.findAll({
        include: {
          association: 'disciplinas',
        },
      });
    } catch (error) {
      console.log(error);
    }

    return res.render('biblioteca_teste', { professores });
  },
};

module.exports = bibliotecaController;
