'use strict';

module.exports = (sequelize, DataTypes) => {
  var Friend = sequelize.define('Friend', {
    name: DataTypes.STRING,
    facebookId: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
      }
    }
  });

  return Friend;
};
