const session = require('express-session');
const Sequelize = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const connectionConfig = require('../config/connectionConfig');

const sequelize = new Sequelize(connectionConfig);

const sessionStore = new SequelizeStore({
  db: sequelize,
});

module.exports = sessionStore;
