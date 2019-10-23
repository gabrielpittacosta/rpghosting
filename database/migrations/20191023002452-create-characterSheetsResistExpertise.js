'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('CharacterSheetExpertises',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      check_proficiencia_acrobacia: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_arcanismo: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_atletismo: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_atuacao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_blefar: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_furtividade: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_historia: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_intimidacao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_intuicao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_investigacao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_lidar_com_animais: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_medicina: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_natureza: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_percepcao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_persuasao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_prestidigitacao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_religiao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      check_proficiencia_sobrevivencia: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      modificador_acrobacia: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_arcanismo: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_atletismo: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_atuacao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_blefar: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_furtividade: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_historia: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_intimidacao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_intuicao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_lidar_com_animais: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_medicina: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_natureza: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_percepcao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_persuasao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_prestidigitacao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_religiao: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      modificador_sobrevivencia: {
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
    return queryInterface.dropTable('CharacterSheetExpertises')
  }
};
