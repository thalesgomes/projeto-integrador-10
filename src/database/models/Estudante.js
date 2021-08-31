module.exports = (sequelize, DataTypes) => {
  const Estudante = sequelize.define('Estudante', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'estudantes',
  });

  Estudante.associate = (models) => {
    Estudante.belongsToMany(models.Disciplina, {
      through: models.EstudanteDisciplina,
      foreignKey: 'id_estudante',
      otherKey: 'id_disciplina',
      as: 'disciplinas',
    });

    Estudante.belongsToMany(models.Aula, {
      through: models.EstudanteAula,
      foreignKey: 'id_estudante',
      otherKey: 'id_aula',
      as: 'aulas',
    });
  };

  return Estudante;
};
