module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING
      },
      numJogadores: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      senha: {
        allowNull: true,
        type: DataTypes.STRING
      },
      privado: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      jogadores: {
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
    return queryInterface.dropTable('Rooms')
  }
}
