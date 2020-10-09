module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", 
  { 
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INT,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
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