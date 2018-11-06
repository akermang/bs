let env = process.env.NODE_ENV;
let db;

if(env && env.trim() === 'dev') {
  db = require('./database.dev');
} else {
  db = require('./database.prod');
}

module.exports = db;