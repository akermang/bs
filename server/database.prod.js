console.log("postgres server is running");

const sequelize = new Sequelize('database', 'username', 'password', {
    // gimme postgres, please!
    dialect: 'postgres'
  })