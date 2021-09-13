module.exports = (sequelize, DataTypes) => {
  const Arquivo = sequelize.define(
    'Arquivo',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      originalname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      filename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_aula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'aulas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    },
    {
      tableName: 'arquivos',
    },
  );

  Arquivo.associate = (models) => {
    Arquivo.belongsTo(models.Aula, {
      foreignKey: 'id_aula',
      as: 'aula',
    });
  };

  return Arquivo;
};
