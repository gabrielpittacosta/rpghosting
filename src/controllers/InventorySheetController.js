const models = require('../models/index');

export async function createInventorySheet (req, res) {
  try {
    const {nome_do_usuario}  = req.body
    const roomId = req.params.id
    const userId = req.userData.data.id
    await models.InventorySheet.create({nome_do_usuario, userId, roomId},
      { fields: ['nome_do_usuario','userId','roomId'] })
        .then((newInventorySheet) => res.status(201).json({ message: 'Inventário criado com sucesso', data: newInventorySheet}))  

  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function deleteInventorySheet (req, res) {
  try {

  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function addItemToInventorySheet (req, res) {
  try {
    const nome_item = req.body
    const item = await models.Item.findOne({where:{'nome':nome_item}})
    if(nome_item != item){
      res.status(400).json({mensagem:'eita!'})
    }else{
      const inventorySheet = req.params.id
      
    }
    
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}
