module.exports = (sequelize, DataTypes) => {
  const EstudanteDisciplina = sequelize.define(
    'EstudanteDisciplina',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_estudante: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'estudantes', key: 'id' },
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
      id_professor: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'professores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    },
    {
      tableName: 'estudantes_disciplinas',
    },
  );

  return EstudanteDisciplina;
};
