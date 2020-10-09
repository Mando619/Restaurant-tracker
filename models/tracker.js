module.exports = function(sequelize, DataTypes) {
    var Tracker = sequelize.define("tracker", {
      restuarant: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [140]
        }
      },
      rating: {
        type: DataTypes.INT,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      }
    });
    return Tracker;
  };
  