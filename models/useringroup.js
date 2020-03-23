'use strict';
module.exports = (sequelize, DataTypes) => {
  const userInGroup = sequelize.define('userInGroup', {
    groupId: DataTypes.INTEGER,
    User: DataTypes.STRING,
    trainId: DataTypes.INTEGER
  }, {});
  userInGroup.associate = function(models) {
    // associations can be defined here
  };
  return userInGroup;
};