module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('aulas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      conteudo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      url_aula: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao_aula: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      arquivo_aula: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fk_professor: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'professores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      fk_disciplina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'disciplinas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      fk_topico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'topicos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('disciplinas');
  },
};
