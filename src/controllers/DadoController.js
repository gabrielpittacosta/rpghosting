export async function rollDados (req, res) {
  const { numDeDado } = req.body
  const { tipoDado } = req.body
  function rollDice () {
    return Math.floor((Math.random() * tipoDado) + 1)
  }
  var listaResultado = []
  var soma = 0
  var critico = 0
  var negativo = 0
  var dado = 0
  var lado = 0
  if (tipoDado === 20) {
    for (dado = 0; dado < numDeDado; dado++) {
      lado = rollDice()
      soma = soma + lado
      if (lado === tipoDado) {
        var testando = 'Crítico'
        critico = critico + 1
        listaResultado.push(lado, testando)
        console.log(listaResultado)
      } else if (lado === 1) {
        negativo = negativo + 1
        var testandoDois = 'Crítico Negativo se fudeu'
        listaResultado.push(lado, testandoDois)
        console.log(listaResultado)
      } else {
        listaResultado.push(lado)
        console.log(listaResultado)
      }
    }
  } else if (tipoDado === 4 || tipoDado === 6 || tipoDado === 8 || tipoDado === 10) {
    for (dado = 0; dado < numDeDado; dado++) {
      lado = rollDice()
      soma = soma + lado
      listaResultado.push(lado)
      console.log(listaResultado)
    }
  }
  var resultado = critico - negativo
  res.json({
    quantidadeDados: numDeDado,
    valor: [{ valores: (listaResultado) }],
    totalDaRolgame: soma,
    resultadoDosCriticos: resultado
  })
}