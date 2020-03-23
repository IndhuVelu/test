'use strict';
module.exports = (sequelize, DataTypes) => {
  const reservedDetails = sequelize.define('reservedDetails', {
    trainId: DataTypes.INTEGER,
    seat: DataTypes.INTEGER,
    signupName: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
 
  return reservedDetails;
};