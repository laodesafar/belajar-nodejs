const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "dikdasmen310", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
