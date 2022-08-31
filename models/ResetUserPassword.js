const { DataTypes } = require('sequelize');
const database = require('./Connection.js');

const ResetUserPassword = database.define('resetUserPassword', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  token: {
    type: DataTypes.STRING(144),
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id',
    },
  },
}, {
	timestamps: false,
	tableName: 'resetUserPassword',
});

module.exports = ResetUserPassword;
