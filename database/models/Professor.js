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
            through: models.ProfessorDisciplina,
            foreignKey: 'fk_professor',
            otherKey: 'fk_disciplina',
            as: 'disciplinas'
        })

        Professor.hasMany(models.Aula, {
            foreignKey: 'fk_professor',
            as: 'aula'
        })
    }

    return Professor;
}