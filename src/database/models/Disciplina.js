module.exports = (sequelize, DataTypes) => {
  const Disciplina = sequelize.define(
    'Disciplina',
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
      imagem: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'disciplinas',
    },
  );

  Disciplina.associate = (models) => {
    Disciplina.hasMany(models.Topico, {
      foreignKey: 'id_disciplina',
      as: 'topicos',
    });

    Disciplina.belongsToMany(models.Professor, {
      through: models.ProfessorDisciplina,
      foreignKey: 'id_disciplina',
      otherKey: 'id_professor',
      as: 'professores',
    });

    Disciplina.belongsToMany(models.Estudante, {
      through: models.EstudanteDisciplina,
      foreignKey: 'id_disciplina',
      otherKey: 'id_estudante',
      as: 'estudantes',
    });
  };

  return Disciplina;
};
