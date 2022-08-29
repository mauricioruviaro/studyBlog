'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.createTable('user', {
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
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('user');
  }
};
