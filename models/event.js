'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    Event: DataTypes.STRING,
    date: DataTypes.STRING,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    signupId: DataTypes.INTEGER,
    flag: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};