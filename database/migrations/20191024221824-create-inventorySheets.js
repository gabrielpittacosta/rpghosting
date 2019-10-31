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
      armaduras_e_escudos: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      armas: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      consumiveis: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      engrenagens: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      diversos: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      ferramentas: {
        defaultValue: [],
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      dinheiro_e_saude: {
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
        type: DataTypes.INTEGER,
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
