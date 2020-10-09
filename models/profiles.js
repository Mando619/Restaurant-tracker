
  module.exports = function(sequelize, DataTypes) {
    var Profiles = sequelize.define("Profiles", {
      first_name: {
        type: DataTypes.INT,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
    return Profiles;
  };
  