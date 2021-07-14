module.exports = (sequelize, DataTypes) => {
    const Topico = sequelize.define("Topico", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
        {
            tableName: "topicos",
        }
    );

    Topico.associate = (models) => {
        Topico.belongsTo(models.Disciplina, {
            foreignKey: 'fk_disciplina',
            as: 'disciplina'
        })
    }

    return Topico;
}