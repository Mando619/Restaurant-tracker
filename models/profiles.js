

module.exports = function(sequelize, DataTypes) {
    var Profiles = sequelize.define("Profiles", 
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      timestamp: false,
    });
 
    Profiles.associate = function(models) {
      Profiles.belongsTo(models.Restaurant, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Profiles;
  };
  