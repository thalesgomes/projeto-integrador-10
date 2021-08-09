// const bcrypt = require('bcrypt');
// const { uuid } = require('uuidv4');

// module.exports = {
//   up: async (queryInterface) => {
//     // bulkInsert(tableName, Columns)
//     await queryInterface.bulkInsert('estudantes', [
//       {
//         id: uuid(),
//         nome: 'estudante',
//         sobrenome: '001',
//         email: 'estudante01@usuario.com',
//         senha: bcrypt.hashSync('1234', 10),
//         categoria: 'estudante',
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       {
//         id: uuid(),
//         nome: 'estudante',
//         sobrenome: '002',
//         email: 'estudante02@usuario.com',
//         senha: bcrypt.hashSync('1234', 10),
//         categoria: 'estudante',
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       {
//         id: uuid(),
//         nome: 'estudante',
//         sobrenome: '003',
//         email: 'estudante03@usuario.com',
//         senha: bcrypt.hashSync('1234', 10),
//         categoria: 'estudante',
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//     ]);
//   },

//   down: async (queryInterface) => {
//     // bulkDelete(tableName, where)
//     await queryInterface.bulkDelete('estudantes', null, {});
//   },
// };
