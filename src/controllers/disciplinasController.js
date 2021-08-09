// const { Disciplina } = require('../database/models');

// const disciplinasController = {

//   store: async (req, res) => {
//     const { id: id_professor } = req.session.professor;
//     const { nome, imagem } = req.body;

//     try {
//       const disciplina = await Disciplina.create({
//         nome,
//         imagem,
//       });

//       const id_disciplina = disciplina.id;

//       await ProfessorDisciplina.create({
//         fk_disciplina: id_disciplina,
//         fk_professor: id_professor,
//       });

//       return res.redirect(`/disciplinas/${id_disciplina}/topicos/form`);
//     } catch (error) {
//       return console.log(error);
//     }
//   },
// };

// module.exports = disciplinasController;
