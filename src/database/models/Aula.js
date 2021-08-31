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
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conteudo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    arquivo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_professor: {
      type: DataTypes.STRING,
      allowNull: false,
      references: { model: 'professores', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    id_disciplina: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'disciplinas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    id_topico: {
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
      foreignKey: 'id_topico',
      as: 'topico',
    });

    Aula.belongsToMany(models.Estudante, {
      through: models.EstudanteAula,
      foreignKey: 'id_aula',
      otherKey: 'id_estudante',
      as: 'estudantes',
    });
  };

  return Aula;
};
