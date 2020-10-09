var sequelize = require('sequelize'); 

module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", 
  { 
    name: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    price: {
      type: DataTypes.INT,
      allowNull: false
    },
    categories: {
      type: DataTypes.STRING,
      allowNull
    }, 
    location: {
      type: DataTypes.String,
      allowNull: false
    }

  });
  return Restaurant;
};