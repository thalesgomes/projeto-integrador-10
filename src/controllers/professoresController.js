// const { Professor } = require('../database/models');

// const professoresController = {

//   renderizarDashboard: async (req, res) => {
//     const { nome, id } = req.session.professor;

//     let professor;

//     try {
//       professor = await Professor.findOne({
//         where: { id },
//         include: {
//           association: 'disciplinas',
//         },
//       });
//     } catch (error) {
//       return console.log(error);
//     }

//     const { disciplinas } = professor;

//     return res.render('dashboard_professor', { nome, disciplinas });
//   },

// };

// module.exports = professoresController;
