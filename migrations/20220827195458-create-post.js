'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('post', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      text: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
      },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      tagId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tag',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    }, {
      timestamps: true,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('post');
  }
};
