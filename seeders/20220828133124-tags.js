'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tag',
      [
        {
          tag: 'node',
        },
        {
          tag: 'php',
        },
        {
          tag: 'laravel',
        },
        {
          tag: 'javascript',
        },
        {
          tag: 'go',
        },
        {
          tag: 'vue',
        },
        {
          tag: 'react',
        },
        {
          tag: 'angular',
        },
        {
          tag: 'docker',
        },
        {
          tag: 'mysql',
        },
        {
          tag: 'mongodb',
        },
        {
          tag: 'java',
        },
        {
          tag: 'c',
        },
        {
          tag: 'c++',
        },
        {
          tag: 'c#',
        },
        {
          tag: 'mariadb',
        },
        {
          tag: 'internet',
        },
        {
          tag: 'python',
        },
        {
          tag: 'ruby',
        },
        {
          tag: 'rust',
        },
        {
          tag: 'git',
        },
        {
          tag: 'github',
        },
        {
          tag: 'postgres',
        },
        {
          tag: 'tdd',
        },
        {
          tag: 'ddd',
        },
      ],
    {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('tag', null, {});
  }
};
