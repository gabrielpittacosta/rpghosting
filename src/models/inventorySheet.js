module.exports = (sequelize, DataTypes) => {
    const InventorySheet = sequelize.define('InventorySheet', {
      nome_do_usuario: DataTypes.STRING,
      pergaminhos: DataTypes.ARRAY(DataTypes.STRING),
      poções: DataTypes.ARRAY(DataTypes.STRING),
      itens_maravilhosos: DataTypes.ARRAY(DataTypes.STRING),
      aneis: DataTypes.ARRAY(DataTypes.STRING),
      armas: DataTypes.ARRAY(DataTypes.STRING),
      armaduras: DataTypes.ARRAY(DataTypes.STRING),
      bastões: DataTypes.ARRAY(DataTypes.STRING),
      cajados: DataTypes.ARRAY(DataTypes.STRING),
      varinhas: DataTypes.ARRAY(DataTypes.STRING),
      maças: DataTypes.ARRAY(DataTypes.STRING),
      roomId: DataTypes.INTEGER
    })
  
    return InventorySheet
  }
  