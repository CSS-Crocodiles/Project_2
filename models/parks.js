module.exports = function (sequelize, DataTypes) {
  const parks = sequelize.define('parks', {
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
    }
  }, {
    timestamps: false
  });

  parks.associate = function (models) {
    parks.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return parks;
};
