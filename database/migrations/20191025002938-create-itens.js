module.exports = {
    up: (queryInterface, DataTypes) => {
      return queryInterface.createTable('Items', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        tipo_item: {
          type: DataTypes.STRING
        },
        nome: {
          type: DataTypes.STRING
        },
        preco: {
          type: DataTypes.FLOAT
        },
        inventorySheetId: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'InventorySheets',
            key: 'id'
          }
        },
        createdAt: {
          allowNull: true,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: true,
          type: DataTypes.DATE
        }
      })
    },
  
    down: (queryInterface) => {
      return queryInterface.dropTable('Items')
    }
}
  

