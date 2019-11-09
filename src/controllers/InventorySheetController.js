const models = require('../models/index');
import { sequelize } from '../models';

export async function getInventorySheet (req, res) {
  try {
    await models.InventorySheet.findAll({
      include: [{ 
        model: models.Item, 
        as: 'itens' 
      }]
    })
      .then((inventorys) => res.status(200).json({ data: inventorys }))
  } catch (erro) {
    
  }
}

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
    const inventory = req.params;
    const { nome } = req.body;
    const item = await models.Item.findOne({where:{ 'nome': nome }});
    const tipo_item = item.tipo_inventario;
    const pergaminho = 'Pergaminho'
    const pocao = 'Poção'
    const item_maravilhoso = 'Item maravilhoso'
    const anel = 'Anel'
    const arma = 'Arma'
    const armadura = 'Armadura'
    const bastao = 'Bastao'
    const cajado = 'Cajado'
    const varinha = 'Varinha'
    const maca = 'Maça'
    if(item !== null){
      if(tipo_item === pergaminho){
        await models.InventorySheet.update({'pergaminhos': sequelize.fn('array_append', sequelize.col('pergaminhos'), item.dataValues.nome)},
          {where: {'id':inventory.id}} ).then((bag)=> res.status(200).json({ data: bag }))
      }
      else if(tipo_item === pocao){
        await models.InventorySheet.update({'poções': sequelize.fn('array_append', sequelize.col('poções'), item.dataValues.nome)},
          {where: {'id':inventory.id}} ).then((bag)=> res.status(200).json({ data: bag }))
      }
      else if(tipo_item === item_maravilhoso){
        await models.InventorySheet.update({'itens_maravilhosos': sequelize.fn('array_append', sequelize.col('itens_maravilhosos'), item.dataValues.nome)},
          {where: {'id':inventory.id}} ).then((bag)=> res.status(200).json({ data: bag }))
      }
      else if(tipo_item === anel){
        await models.InventorySheet.update({'aneis': sequelize.fn('array_append', sequelize.col('aneis'), item.dataValues.nome)},
          {where: {'id':inventory.id}} ).then((bag)=> res.status(200).json({ data: bag }))
      }
      else if(tipo_item === arma){
        await models.InventorySheet.update({'armas': sequelize.fn('array_append', sequelize.col('armas'), item.dataValues.nome)},
          {where: {'id':inventory.id}} ).then((bag)=> res.status(200).json({ data: bag }))
      }
      else if(tipo_item === armadura){
        await models.InventorySheet.update({'armaduras': sequelize.fn('array_append', sequelize.col('armaduras'), item.dataValues.nome)},
          {where: {'id':inventory.id}} ).then((bag)=> res.status(200).json({ data: bag }))
      }
      else if(tipo_item === bastao){
        await models.InventorySheet.update({'bastões': sequelize.fn('array_append', sequelize.col('bastões'), item.dataValues.nome)},
          {where: {'id':inventory.id}} ).then((bag)=> res.status(200).json({ data: bag }))
      }
      else if(tipo_item === cajado){
        await models.InventorySheet.update({'cajados': sequelize.fn('array_append', sequelize.col('cajados'), item.dataValues.nome)},
          {where: {'id':inventory.id}} ).then((bag)=> res.status(200).json({ data: bag }))
      }
      else if(tipo_item === varinha){
        await models.InventorySheet.update({'varinhas': sequelize.fn('array_append', sequelize.col('varinhas'), item.dataValues.nome)},
          {where: {'id':inventory.id}} ).then((bag)=> res.status(200).json({ data: bag }))
      }
      else if(tipo_item === maca){
        await models.InventorySheet.update({'maças': sequelize.fn('array_append', sequelize.col('maças'), item.dataValues.nome)},
          {where: {'id':inventory.id}} ).then((bag)=> res.status(200).json({ data: bag }))
      }
    }else{
      console.log('Não existe esse item');
    }
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}
