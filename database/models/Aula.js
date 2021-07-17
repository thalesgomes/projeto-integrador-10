module.exports = (sequelize, DataTypes) => {
  const Disciplina = sequelize.define("Aula", {
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
      {
          tableName: "aulas",
      }
  );

  return Disciplina;
}