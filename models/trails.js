module.exports = function (sequelize, DataTypes) {
  const Trails = sequelize.define('Trails', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
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
    // hours: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
    website: {
      type: DataTypes.TEXT,
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

  // Trails.associate = function (models) {
  // Trails.belongsTo(models.Location, {
  //  foreignKey: {
  //    allowNull: false
  //  }
  // });
  // };

  return Trails;
};
