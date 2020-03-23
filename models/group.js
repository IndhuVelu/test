'use strict';
module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    groupmembers : DataTypes.STRING,
    trainId : DataTypes.INTEGER
  }, {}); 
  group.associate = function(models) {
    // associations can be defined here
  };
  return group;
};