module.exports = (sequelize, DataTypes) => {
  const Aula = sequelize.define('Aula', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conteudo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url_aula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao_aula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arquivo_aula: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fk_professor: {
      type: DataTypes.STRING,
      allowNull: false,
      references: { model: 'professores', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    fk_disciplina: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'disciplinas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    fk_topico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'topicos', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
  },
  {
    tableName: 'aulas',
  });

  Aula.associate = (models) => {
    Aula.belongsTo(models.Topico, {
      foreignKey: 'fk_topico',
      as: 'topico',
    });
  };

  return Aula;
};
