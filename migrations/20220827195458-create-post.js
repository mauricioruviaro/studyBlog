'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('post', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.TEXT('long'),
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
      tableName: 'post'
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('post');
  }
};
