'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrainDetails = sequelize.define('TrainDetails', {
    TrainName: DataTypes.STRING,
    Depart_Time: DataTypes.TIME,
    Arrival_Time: DataTypes.TIME,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    date: DataTypes.DATE,
    fare: DataTypes.STRING
  }, {});
  
  return TrainDetails;
};