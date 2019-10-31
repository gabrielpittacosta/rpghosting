module.exports = {
    up: (queryInterface, DataTypes) => {
      return queryInterface.createTable('Fichas', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
      })
    },
  
    down: (queryInterface) => {
      return queryInterface.dropTable('Fichas')
    }
  }
  