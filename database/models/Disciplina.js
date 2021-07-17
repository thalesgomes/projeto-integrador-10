module.exports = (sequelize, DataTypes) => {
    const Disciplina = sequelize.define("Disciplina", {
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
        imagem: {
            type: DataTypes.STRING,
            allowNull: false,
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
            tableName: "disciplinas",
        }
    );

    Disciplina.associate = (models) => {
        Disciplina.hasMany(models.Topico, {
            foreignKey: 'fk_disciplina',
            as: 'topicos'
        })

        Disciplina.belongsToMany(models.Professor, {
            through: models.Professor,
            foreignKey: 'fk_disciplina',
            otherKey: 'fk_professor',
            as: 'professores'
        })
    }

    return Disciplina;
}