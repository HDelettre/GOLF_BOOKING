const { Sequelize, sync } = require("sequelize");

//const Users = require('../Models/user.model');

// DOTENV
require("dotenv").config({
  path: "./config/.env",
});

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    //await Users.sync({ alter: true });
    console.log("Connecté à MySQL !");
  } catch (error) {
    console.log("Erreur de connexion ", error);
  }
})();

module.exports = sequelize;
