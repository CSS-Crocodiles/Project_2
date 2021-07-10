module.exports = function (sequelize, DataTypes) {
  const museums = sequelize.define('museums', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    museum_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hours: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false
  });

  museums.associate = function (models) {
    museums.belongsTo(models.Location, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return museums;
};
