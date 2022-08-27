'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tag', {
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
    }, {
      timestamps: true,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('tag');
  }
};
