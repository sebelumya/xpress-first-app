const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "persib", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
