// const bcrypt = require('bcrypt');
// const { uuid } = require('uuidv4');

// module.exports = {
//   up: async (queryInterface) => {
//     // bulkInsert(tableName, Columns)
//     await queryInterface.bulkInsert('professores', [
//       {
//         id: uuid(),
//         nome: 'artêmio',
//         sobrenome: 'artêro',
//         email: 'artes@usuario.com',
//         senha: bcrypt.hashSync('1234', 10),
//         categoria: 'professor',
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       {
//         id: uuid(),
//         nome: 'biotônico',
//         sobrenome: 'biônico',
//         email: 'biologia@usuario.com',
//         senha: bcrypt.hashSync('1234', 10),
//         categoria: 'professor',
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       {
//         id: uuid(),
//         nome: 'castelhano',
//         sobrenome: 'castelho',
//         email: 'espanhol@usuario.com',
//         senha: bcrypt.hashSync('1234', 10),
//         categoria: 'professor',
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       {
//         id: uuid(),
//         nome: 'chopp',
//         sobrenome: 'andhauer',
//         email: 'filosofia@usuario.com',
//         senha: bcrypt.hashSync('1234', 10),
//         categoria: 'professor',
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//     ]);

//     const [allID] = await queryInterface.sequelize.query(
//       'SELECT id from professores;',
//     );

//     allID.forEach(async (professor_id) => {
//       const { id } = professor_id;
//       console.log(id);

//       await queryInterface.bulkInsert('professores_disciplinas', [
//         {
//           fk_professor: id,
//           fk_disciplina: 1,
//           created_at: new Date(),
//           updated_at: new Date(),
//         },
//       ]);
//     });
//   },

//   down: async (queryInterface) => {
//     // bulkDelete(tableName, where)
//     await queryInterface.bulkDelete('professores', null, {});
//   },
// };
