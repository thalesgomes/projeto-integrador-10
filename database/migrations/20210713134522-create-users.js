'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      matricula: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      instituicao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      nome_responsavel: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};
