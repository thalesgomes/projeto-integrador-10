module.exports = (sequelize, DataTypes) => {
  const Disciplina = sequelize.define('Disciplina', {
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
      allowNull: false,
    },
  },
  {
    tableName: 'disciplinas',
  });

  Disciplina.associate = (models) => {
    Disciplina.hasMany(models.Topico, {
      foreignKey: 'fk_disciplina',
      as: 'topicos',
    });
  };

  return Disciplina;
};