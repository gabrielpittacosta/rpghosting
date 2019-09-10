const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    hooks: {
      async beforeCreate (user) {
        try {
          const salt = await bcrypt.genSalt(10);
          const passwordHash = await bcrypt.hash(user.password, salt);
          user.set('password', passwordHash);
        } catch (e) {
          console.error(e);
        }
      },
      async beforeUpdate (user) {
        try {
          const salt = await bcrypt.genSalt(10);
          const passwordHash = await bcrypt.hash(user.password, salt);
          user.set('password', passwordHash);
        } catch (e) {
          console.error(e);
        }
      }
    }
  })

  User.verifyPassword = async (password, passwordHash) => {
    try {
      if (await bcrypt.compare(passwordHash, password)) {
        return true;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }
  
  return User
}
