
module.exports = function(sequelize, DataTypes) {
    var Rating = sequelize.define("Rating", 
  { 
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    restuarant_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      timestamp: false,
    });
  return Rating;
};

