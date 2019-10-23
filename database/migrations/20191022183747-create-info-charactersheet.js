'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('CharacterSheetInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nome_personagem: { 
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING
      },
      classe: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING
      },
      raca: {
        allowNull:true,
        defaultValue: null,
        type: DataTypes.STRING
      },
      antecedentes: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING
      },
      tendencia: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING
      },
      level: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      experiencia: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
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
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('CharacterSheetInfos')
  }
};
