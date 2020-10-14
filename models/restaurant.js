
module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", 
  { 
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categories: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
    {
      timestamp: false,
    });
  

  Restaurant.associate = function(models) {
    Restaurant.hasMany(models.Profiles, {
      allowKnull: false
    });
  };

  return Restaurant;
};