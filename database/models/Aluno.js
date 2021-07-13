module.exports = (sequelize, DataTypes) => {
    const Alunos = sequelize.define("Aluno", {
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            tableName: "alunos",
        }
    );

    return Alunos;
}