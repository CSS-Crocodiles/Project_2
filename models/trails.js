module.exports = function (sequelize, DataTypes) {
  const Trails = sequelize.define('Trails', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    trail_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
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
