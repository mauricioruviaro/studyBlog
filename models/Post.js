const { DataTypes } = require("sequelize");
const database = require('./connection.js');

const Post = database.define('post', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	title: {
		type: DataTypes.STRING(200),
		allowNull: false,
	},
	text: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	authorId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: 'user',
			key: 'id',
		},
	},
	tagId: {
		type: DataTypes.INTEGER,
		allowNull: true,
		references: {
			model: 'tag',
			key: 'id',
		},
	},
	createdAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
	},
}, {
	timestamps: false,
	freezeTableName: true,
	underscored: false,
	tableName: 'post'
});

module.exports = Post;
