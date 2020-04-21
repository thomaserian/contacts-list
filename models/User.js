const Sequelize = require('sequelize').Sequelize;

const sequelize = require('../utils/database');

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  authorization: {
    type: Sequelize.STRING,
    allowNull: false
  },
  deviceToken: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fingerPrint: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
