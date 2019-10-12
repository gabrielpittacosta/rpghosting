module.exports = (sequelize, DataTypes) => {
  const VericationToken = sequelize.define('VericationToken', {
    userId: DataTypes.INTEGER,
    token: DataTypes.STRING
  }, {});

  return VericationToken;
};