const models = require('../models/index')

export async function getItens (req, res) {
  try {
    await models.Item.findAll({})
      .then((itens) => res.status(200).json({ data: itens }))
  } catch (erro) {
    res.status(500).send(erro);
  }
}

export async function getItem (req, res) {
  try {
    const { nome } = req.params;
    await models.Item.findOne({ where: { nome } })
       .then((item)=> res.status(200).json({ data: item }));
  } catch (erro) {
    res.status(500).send(erro);
  }
}