module.exports = (sequelize, DataTypes) => {
  const Topico = sequelize.define('Topico', {
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
    fk_disciplina: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'disciplinas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    fk_professor: {
      type: DataTypes.STRING,
      allowNull: false,
      references: { model: 'professores', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
  },
  {
    tableName: 'topicos',
  });

  Topico.associate = (models) => {
    Topico.belongsTo(models.Disciplina, {
      foreignKey: 'fk_disciplina',
      as: 'disciplina',
    });

    Topico.belongsTo(models.Professor, {
      foreignKey: 'fk_professor',
      as: 'professor',
    });

    Topico.hasMany(models.Aula, {
      foreignKey: 'fk_topico',
      as: 'aulas',
    });
  };

  return Topico;
};
