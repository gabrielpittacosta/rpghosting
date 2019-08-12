const models = require('../models/index')

export async function getDado (req, res) {
  try {
    const dados = await models.Dado.findAll({})
    res.json({
      data: dados
    })
  } catch (error) {
    console.error(error)
    res.json({ message: 'Ocorreu um erro' })
  }
}

export async function rollD4 (req, res) {
  const { numDeDado } = req.body
  function rollDice () {
    return Math.floor((Math.random() * 4) + 1)
  }
  try {
    for (var dado = 0; dado < numDeDado; dado++) {
      const lado = rollDice()
      if (lado === 4) {
        res.json({
          quantidadeDados: numDeDado,
          data: lado,
          message: 'Critico!' })
      }
      res.json({
        quantidadeDados: numDeDado,
        data: lado })
    }
  } catch (error) {
    console.log(error)
  }
}

export async function rollD6 (req, res) {
  try {
    const lado = Math.floor((Math.random() * 6) + 1)
    if (lado === 6) {
      res.json({
        data: lado,
        message: 'Critico!' })
    }
    res.json({ data: lado })
  } catch (error) {
    console.log(error)
  }
}

export async function rollD8 (req, res) {
  try {
    const lado = Math.floor((Math.random() * 8) + 1)
    if (lado === 8) {
      res.json({
        data: lado,
        message: 'Critico!' })
    }
    res.json({ data: lado })
  } catch (error) {
    console.log(error)
  }
}

export async function rollD10 (req, res) {
  try {
    const lado = Math.floor((Math.random() * 10) + 1)
    if (lado === 10) {
      res.json({
        data: lado,
        message: 'Critico!' })
    }
    res.json({ data: lado })
  } catch (error) {
    console.log(error)
  }
}

export async function rollD20 (req, res) {
  try {
    const lado = Math.floor((Math.random() * 20) + 1)
    if (lado === 20) {
      res.json({
        data: lado,
        message: 'Critico!' })
    }
    res.json({ data: lado })
  } catch (error) {
    console.log(error)
  }
}
