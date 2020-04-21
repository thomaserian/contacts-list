const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize({
  dialect: 'mysql',
  database:process.env.DATABASE_NAME,
  username:process.env.DATABASE_USER_NAME,
  password:process.env.DATABASE_PASSWORD,
  host:process.env.DATABASE_HOST,
  port:process.env.DATABASE_PORT
});

module.exports = sequelize;