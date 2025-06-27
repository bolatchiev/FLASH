'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jokes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      answer: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      rightAns: {
<<<<<<< HEAD
        type: Sequelize.STRING,
        allowNull: false,
=======
        type: Sequelize.STRING
>>>>>>> fcdff7232b219c0795f281c8cb994806be6cba6d
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jokes');
  },
};
