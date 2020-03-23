'use strict';
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define('ticket', {
    trainId: DataTypes.INTEGER,
    seatId: DataTypes.INTEGER,
    signupId: DataTypes.STRING
  }, {});
  ticket.associate = function(models) {
    // associations can be defined here
  };
  return ticket;
};