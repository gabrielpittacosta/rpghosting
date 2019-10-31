module.exports = (sequelize, DataTypes) => {
    const InventorySheet = sequelize.define('InventorySheet', {
      nome_do_usuario: DataTypes.STRING,
      armaduras_e_escudos: DataTypes.ARRAY(DataTypes.STRING),
      armas: DataTypes.ARRAY(DataTypes.STRING),
      consumiveis: DataTypes.ARRAY(DataTypes.STRING),
      engrenagens: DataTypes.ARRAY(DataTypes.STRING),
      diversos: DataTypes.ARRAY(DataTypes.STRING),
      ferramentas: DataTypes.ARRAY(DataTypes.STRING),
      dinheiro_e_saude: DataTypes.ARRAY(DataTypes.STRING),
      roomId: DataTypes.INTEGER
    })
  
    return InventorySheet
  }
  