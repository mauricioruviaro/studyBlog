const Sequelize = require('sequelize');
const database = require('./Connection.js');

const Tag = database.define('tag', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	tag: {
		type: Sequelize.STRING(30),
		allowNull: false,
	},
	createdAt: {
		type: Sequelize.DATETIME,
		defaultValue: Sequelize.NOW,
	},
}, {
	timestamps: true,
});

module.exports = Tag;
