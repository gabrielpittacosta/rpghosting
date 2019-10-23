module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('CharacterSheets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      proficiencia_bonus: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      classe_de_armadura: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      iniciativa: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      deslocamento: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      defesas: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING
      },
      condicoes: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING
      },
      pontos_de_vida_atual: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      pontos_de_vida_maximo: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      pontos_de_vida_temporario: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      danos_de_vida_total: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING
      },
      danos_de_vida_atual: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING
      },
      sabedoria_passiva: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },      
      characterSheetInfoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CharacterSheetInfos',
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
    return queryInterface.dropTable('CharacterSheets')
  }
}
