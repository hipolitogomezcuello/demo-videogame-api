const Sequelize = require("sequelize");
const db = require("../config/db");

const options = {
  timestamps: true,
};

const Videogame = db.define(
  "videogame",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  },
  options
);

module.exports = Videogame;
