const { DataTypes } = require("sequelize");
const database = require('./Connection.js');

const Tag = database.define('tag', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	tag: {
		type: DataTypes.STRING(30),
		allowNull: false,
	},
}, {
	timestamps: false,
	tableName: 'tag'
});

module.exports = Tag;
