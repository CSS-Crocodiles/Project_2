
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
    Location.hasMany(models.Parks, { onDelete: 'cascade'});
    Location.hasMany(models.Museums, { onDelete: 'cascade'});
    Location.hasMany(models.Restaurant, { onDelete: 'cascade'});
    Location.hasMany(models.Trails, { onDelete: 'cascade'});
  };

  // Location.associate = function (models) {
  //   Location.hasMany(models.Museums, {
  //     onDelete: 'cascade'
  //   });
  // };

  // Location.associate = function (models) {
  //  Location.hasMany(models.Restaurant, {
  //   onDelete: 'cascade'
  // });
  // };

  // Location.associate = function (models) {
  // onDelete: 'cascade'
  // });
  // };

  return Location;
};
