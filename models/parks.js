module.exports = function (sequelize, DataTypes) {
  const Parks = sequelize.define('Parks', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    park_name: {
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

  // parks.associate = function (models) {
  //  parks.belongsTo(models.Location, {
  //   foreignKey: {
  //     allowNull: false
  //    }
  //   });
  // };

  return Parks;
};
