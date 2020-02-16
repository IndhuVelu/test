'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trainDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TrainName: {
        type: Sequelize.STRING
      },
      Depart_Time: {
        type: Sequelize.STRING
      },
      Arrival_Time: {
        type: Sequelize.STRING
      },
      from: {
        type: Sequelize.STRING
      },
      to: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trainDetails');
  }
};