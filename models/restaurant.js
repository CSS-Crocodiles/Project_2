module.exports = function (sequelize, DataTypes) {
  const restaurants = sequelize.define('Restaurant', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hours: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LocationId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Locations',
        key: 'id'
      }
    }
  }, {
    timestamps: false
  });

  // restaurants.associate = function (models) {
  //  restaurants.belongsTo(models.Location, {
  //   foreignKey: {
  //      allowNull: false
  //    }
  //   });
  // };

  return restaurants;
};
