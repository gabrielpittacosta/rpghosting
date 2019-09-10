module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Fichas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nomeJogador: {
        type: DataTypes.STRING,
        allowNull: false,
        dafaultValue: 'none'
      },
      nomePersonagem: {
        type: DataTypes.STRING,
        allowNull: false,
        dafaultValue: 'none'
      },
      classe: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
      },
      nivel: {
        type: DataTypes.INTEGER,
        allowNull: true,
        dafaultValue: 1
      },
      raca: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'none'
      },
      antecedente: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
      },
      tendencia: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
      },
      pontosXp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        dafaultValue: 0
      },
      inspiracao: {
        type: DataTypes.INTEGER,
        allowNull: true,
        dafaultValue: 0
      },
      bonusProeficiencia: {
        type: DataTypes.INTEGER,
        allowNull: true,
        dafaultValue: 0
      },
      testesResistencia: {
        type: DataTypes.INTEGER,
        allowNull: true,
        dafaultValue: 0
      },
      pericias: {
        type: DataTypes.INTEGER,
        allowNull: true,
        dafaultValue: 0
      },
      sabedoriaPassivaPercepcao: {
        type: DataTypes.INTEGER,
        allowNull: true,
        dafaultValue: 0
      },
      idiomasEProfeciencias: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
      },
      classeArmadura: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
      },
      pontosVidaAtual: {
        type: DataTypes.INTEGER,
        allowNull: true,
        dafaultValue: 0
      },
      pontosVidaTemporario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        dafaultValue: 0
      },
      dadosDeVida: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
      },
      testesContraAMorte: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
      },
      ataquesEMagia: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
      },
      equipamentos: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
      },
      caracteristicasEHabilidades: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
      },
      tracosDePersonalidade: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
      },
      ideias: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
      },
      ligacoes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        dafaultValue: 0
      },
      defeitos: {
        type: DataTypes.STRING,
        allowNull: true,
        dafaultValue: 'none'
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('Fichas')
  }
}
