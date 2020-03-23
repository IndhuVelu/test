'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    sender: DataTypes.STRING,
    message: DataTypes.STRING,
    groupId: DataTypes.INTEGER,
    trainId: DataTypes.INTEGER,
  }, {});
  message.associate = function(models) {
    // associations can be defined here
  };
  return message;
};