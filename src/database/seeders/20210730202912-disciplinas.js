'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    //bulkInsert(tableName, Columns)
      await queryInterface.bulkInsert('disciplinas', [{
        nome:'Matemática',
        imagem: '/matematica',
        created_at: new Date(),
        updated_at: new Date()
     }, {
        nome:'Biologia',
        imagem: '/biologia',
        created_at: new Date(),
        updated_at: new Date()
     },{
      nome:'Física',
      imagem: '/fisica',
      created_at: new Date(),
      updated_at: new Date()
   },{
    nome:'Quimica',
    imagem: '/quimica',
    created_at: new Date(),
    updated_at: new Date()
 }]);

  },

  down: async (queryInterface, Sequelize) => {

    //bulkDelete(tableName, where)
    await queryInterface.bulkDelete('disciplinas', null, {});

  }
};
