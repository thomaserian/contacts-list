const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize({
  dialect: 'mysql',
  database:process.env.DATABASE_NAME||"contacts_list",
  username:process.env.DATABASE_USER_NAME||"root",
  password:process.env.DATABASE_PASSWORD||"root",
  host:process.env.DATABASE_HOST||"127.0.0.1",
  port:process.env.DATABASE_PORT||3306
});

module.exports = sequelize;