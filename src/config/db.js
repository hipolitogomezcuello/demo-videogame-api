const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: process.env.DB_DIALECT,
  operatorsAliases: 0,
  logging: false,
});

module.exports = db;
