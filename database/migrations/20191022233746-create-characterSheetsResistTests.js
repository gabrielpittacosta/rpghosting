'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('CharacterSheetResistTests',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    check_proficiencia_forca: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.BOOLEAN
    },
    modificador_forca: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    check_proficiencia_destreza: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.BOOLEAN
    },
    modificador_destreza: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    check_proficiencia_constituicao: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.BOOLEAN
    },
    valor_constituicao: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    check_proficiencia_inteligencia: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.BOOLEAN
    },
    modificador_inteligencia: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    check_proficiencia_sabedoria: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.BOOLEAN
    },
    modificador_sabedoria: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    check_proficiencia_carisma: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.BOOLEAN
    },
    modificador_carisma: {
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

  down: (queryInterface, DataTypes) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('CharacterSheetResistTests')
  }
};
