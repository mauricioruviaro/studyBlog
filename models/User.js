const { DataTypes } = require('sequelize');
const database = require('./Connection.js');

const User = database.define('user', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	username: {
		type: DataTypes.STRING(20),
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING(60),
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING(150),
		allowNull: false,
	},
	createdAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
	},
}, {
	timestamps: false,
	tableName: 'user'
});

module.exports = User;
