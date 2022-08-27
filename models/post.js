const Sequelize = require('sequelize');
const database = require('../db.js');
const user = require('./user.js');
const tag = require('./tag.js');

const Post = database.define('post', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	title: {
		type: Sequelize.STRING(200),
		allowNull: false,
	},
	text: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	createdAt: {
		type: Sequelize.DATETIME,
		defaultValue: Sequelize.NOW,
	},
	authorId: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: user,
			key: 'id',
		},
	},
	tagId: {
		type: Sequelize.INTEGER,
		allowNull: true,
		references: {
			model: tag,
			key: 'id',
		},
	},
}, {
	timestamps: true,
});

module.exports = Post;
