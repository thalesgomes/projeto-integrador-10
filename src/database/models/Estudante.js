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
      foreignKey: 'fk_estudante',
      otherKey: 'fk_disciplina',
      as: 'disciplinas',
    });
  };

  return Estudante;
};
