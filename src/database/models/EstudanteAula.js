module.exports = (sequelize, DataTypes) => {
  const EstudanteAula = sequelize.define('EstudanteAula', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fk_estudante: {
      type: DataTypes.STRING,
      allowNull: false,
      references: { model: 'estudantes', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    fk_aula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'aulas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
  },
  {
    tableName: 'estudantes_aulas',
  });

  return EstudanteAula;
};
