module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define(
        "Usuario", {
            id_usuario: {
                primaryKey: true,
                type: DataTypes.STRING,
                allowNull: false
            },
            nome_usuario: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email_usuario: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha_usuario: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: "usuario",
            timestamps: false
        }
    );

    return Usuarios;
}