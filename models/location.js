module.exports = function (sequelize, DataTypes) {
  const Location = sequelize.define(
    'Location',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      location_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      starting_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      ending_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    },
    {
      timestamps: false
    }
  );

  Location.associate = function (models) {
    Location.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Location.associate = function (models) {
    Location.hasMany(models.parks, {
      onDelete: 'cascade'
    });
  };

  Location.associate = function (models) {
    Location.hasMany(models.museums, {
      onDelete: 'cascade'
    });
  };

  Location.associate = function (models) {
    Location.hasMany(models.restaurant, {
      onDelete: 'cascade'
    });
  };

  Location.associate = function (models) {
    Location.hasMany(models.trails, {
      onDelete: 'cascade'
    });
  };

  return Location;
};
