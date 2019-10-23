module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('CharacterSheetAttributes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      modificador_forca: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      valor_forca: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_destreza: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      valor_destreza: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_constituicao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      valor_constituicao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_inteligencia: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      valor_inteligencia: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_sabedoria: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      valor_sabedoria: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING
      },
      modificador_carisma: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING
      },
      valor_carisma: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },      
      characterSheetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CharacterSheets',
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('CharacterSheetAttributes')
  }
}


