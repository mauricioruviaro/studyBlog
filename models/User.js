const Sequelize = require('sequelize');
const database = require('./Connection.js');

const User = database.define('user', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	userName: {
		type: Sequelize.STRING(20),
		allowNull: false,
	},
	senha: {
		type: Sequelize.STRING(60),
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING(150),
		allowNull: false,
	},
	createdAt: {
		type: Sequelize.DATETIME,
		defaultValue: Sequelize.NOW,
	},
}, {
	timestamps: true,
});

module.exports = User;
