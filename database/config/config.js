module.exports = {
  development: {
    username: "root",
    password: "1234",
    database: "saber_digital",
    host: "localhost",
    dialect: "mysql",
    define: {
      timestamps: true,
      underscored: true,
    }
  }
}

//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
