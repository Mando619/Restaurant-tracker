module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    review: { 
      type: DataTypes.STRING(255),
      allowNull: false
    },
  });
  return Restaurant;
};