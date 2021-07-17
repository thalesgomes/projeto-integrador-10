module.exports = {
  development: {
    username: "root",
    password: "",
    database: "teste",
    host: "localhost",
    dialect: "mysql",
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
    timezone: '-03:00',
    // dialectOptions: {
    //   timezone: 'America/Sao_Paulo'
    // },
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
