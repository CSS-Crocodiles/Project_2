module.exports = function (sequelize, DataTypes) {
  const Museums = sequelize.define('Museums', {
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
    },
    LocationId: {
      type: DataTypes.INTEGER,
      references: {
<<<<<<< HEAD
        model: 'Location',
=======
        model: 'Locations',
>>>>>>> d8d9d5eb2ce08f207d7e0646b44291a0ae1f904c
        key: 'id'
      }
    }
  }, {
    timestamps: false
  });

  // Museums.associate = function (models) {
  //   Museums.belongsTo(models.Location, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Museums;
};
