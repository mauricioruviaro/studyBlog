'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tag', {
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
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('tag');
  }
};
