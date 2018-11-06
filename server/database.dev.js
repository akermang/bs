const Sequelize = require('sequelize');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database.sqlite');

const sequelize = new Sequelize('database', 'username', 'password', {
    // sqlite! now!
    dialect: 'sqlite',
  
    // the storage engine for sqlite
    // - default ':memory:'
    operatorsAliases: false,
    storage: './database.sqlite'
  })

console.log("sqlite server is running");
module.exports = sequelize;
