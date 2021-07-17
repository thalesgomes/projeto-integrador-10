module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define("Professor", {
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
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            tableName: "professores",
        }
    );

    Professor.associate = (models) => {
        Professor.belongsToMany(models.Disciplina, {
            through: models.Disciplina,
            foreignKey: 'fk_professor',
            otherKey: 'fk_disciplina',
            as: 'disciplinas'
        })
    }

    return Professor;
}