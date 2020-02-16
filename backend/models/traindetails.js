'use strict';
module.exports = (sequelize, DataTypes) => {
  const trainDetails = sequelize.define('trainDetails', {
    TrainName: DataTypes.STRING,
    Depart_Time: DataTypes.STRING,
    Arrival_Time: DataTypes.STRING,
    from: DataTypes.STRING,
    to: DataTypes.STRING
  }, {});
  trainDetails.associate = function(models) {
    // associations can be defined here
  };
  return trainDetails;
};