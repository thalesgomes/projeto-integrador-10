const { Professor, Disciplina } = require('../database/models');

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
  show_disciplinas: async (req, res) => {

    let disciplinas = await Disciplina.findAll();
    
    res.render('biblioteca', { disciplinas })

  }
};

module.exports = bibliotecaController;
