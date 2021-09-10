module.exports = (sequelize, DataTypes) => {
  const Topico = sequelize.define(
    'Topico',
    {
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
      id_disciplina: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'disciplinas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      id_professor: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'professores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    },
    {
      tableName: 'topicos',
    },
  );

  Topico.associate = (models) => {
    Topico.belongsTo(models.Disciplina, {
      foreignKey: 'id_disciplina',
      as: 'disciplina',
    });

    Topico.belongsTo(models.Professor, {
      foreignKey: 'id_professor',
      as: 'professor',
    });

    Topico.hasMany(models.Aula, {
      foreignKey: 'id_topico',
      as: 'aulas',
    });
  };

  return Topico;
};
