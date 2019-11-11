module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('InventorySheets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nome_do_usuario: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true
      },
      pergaminhos: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      poções: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      itens_maravilhosos: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      aneis: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      armas: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      armaduras: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      bastões: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      cajados: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      varinhas: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      maças: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      fichaId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'CharacterSheetInfos',
          key: 'id'
        }
      },
      roomId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Rooms',
          key: 'id'
        }
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
    return queryInterface.dropTable('InventorySheets')
  }
}
