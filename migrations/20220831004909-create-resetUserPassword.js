'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.createTable('resetUserPassword', {
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
      tableName: 'resetUserPassword'
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('resetUserPassword');
  }
};
