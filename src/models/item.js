module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
      tipo_item: DataTypes.STRING,
      nome: DataTypes.STRING,
      preco: DataTypes.FLOAT,
      tipo_inventario: DataTypes.STRING
    })
  
    return Item
  }
  