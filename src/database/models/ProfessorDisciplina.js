module.exports = (sequelize, DataTypes) => {
  const ProfessorDisciplina = sequelize.define('ProfessorDisciplina', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
  },
  {
    tableName: 'professores_disciplinas',
  });

  return ProfessorDisciplina;
};
