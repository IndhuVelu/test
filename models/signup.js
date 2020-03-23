'use strict';
module.exports = (sequelize, DataTypes) => {
  const signup = sequelize.define('signup', {
   
    Name: {type:DataTypes.STRING,unique:true},
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    isadmin: DataTypes.INTEGER
  }, {});
 
  return signup;
};