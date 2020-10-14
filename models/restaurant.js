module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review: { 
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  return Restaurant;
};