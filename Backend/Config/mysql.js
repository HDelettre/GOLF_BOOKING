const { Sequelize } = require("sequelize");

// DOTENV
require('dotenv').config({
  path : './config/.env'
})

const sequelize = new Sequelize (
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

(async () => {
  try { await sequelize.authenticate();
  console.log("Connecté à MySQL !");
} catch (error) {
  console.log('Erreur de connexion ', error);
}
})();
