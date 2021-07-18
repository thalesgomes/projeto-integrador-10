module.exports = (sequelize, DataTypes) => {
  const Aula = sequelize.define("Aula", {
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
    descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    conteudo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fk_disciplina: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'disciplinas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    fk_topico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'topicos', key: 'id' },
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
          tableName: "aulas",
      }
  );
  
  Aula.associate = (models) => {
    
    Aula.belongsTo(models.Topico, {
        foreignKey: 'fk_topico',
        as: 'topicos'
    })

    Aula.belongsTo(models.Disciplina, {
      foreignKey: 'fk_disciplina',
      as: 'disciplina'
  })

  Aula.belongsTo(models.Professor, {
    foreignKey: 'fk_professor',
    as: 'professor'
  })
}

  return Aula;
}