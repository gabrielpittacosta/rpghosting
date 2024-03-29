module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Items',
    [
      {
        nome: 'Pergaminho de magia (1° nível)',
        preco: '100.00',
        tipo_item: 'Comum',
        tipo_inventario: 'Pergaminho',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pergaminho de magia (truque)',
        preco: '50.00',
        tipo_item: 'Comum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de cura',
        preco: '50.00',
        tipo_item: 'Comum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de escalada',
        preco: '75.00',
        tipo_item: 'Comum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Aljava de Ehlonna',
        preco: '2000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Amuleto de proteção contra detecção e localização',
        preco: '5000.00',
        tipo_item: 'Incomun',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel de andar na água',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel de calor',
        preco: '1500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel de escudo mental',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel de natação',
        preco: '2500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Arma +1',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel de saltar',
        preco: '2500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Armadura de adamante',
        preco: '4000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Armadura de mitral',
        preco: '2000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Armadura do marinheiro',
        preco: '3000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Azagaia de relâmpago',
        preco: '2000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Baralho das ilusões',
        preco: '2000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Bastão guardião de pactos +1',
        preco: '3000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Bastão',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Bastão imóvel',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Bastão',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Botas aladas',
        preco: '4000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Bolsa de truques',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Botas de caminhar e saltar',
        preco: '3000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Botas do inverno',
        preco: '2500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Botas élficas',
        preco: '2500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Braceletes de arquearia',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Broche do escudo',
        preco: '2000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cajado da píton',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Cajado',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cajado da víbora',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Cajado',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Capa de respirar na água',
        preco: '3000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Chapéu de disfarce',
        preco: '2000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Corda de escalada',
        preco: '3000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Decantador de água infinita',
        preco: '4000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Diadema de destruição',
        preco: '4500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Elmo de compreensão de idiomas',
        preco: '4000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Elmo de telepatia',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Escudo +1',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Escudo sentinela',
        preco: '4000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Espada da vingança',
        preco: '3000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Estátua de poderes incríveis (corvo de prata)',
        preco: '3000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Filtro do amor',
        preco: '500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Flauta assombrada',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Flauta dos esgotos',
        preco: '1500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Garrafa de fumaça eterna',
        preco: '4500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Gema da luminosidade',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Gema elemental',
        preco: '2500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Globo de fluxo',
        preco: '4000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Instrumento dos bardos (alaúde de Doss)',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Instrumento do bardo (bandolim de Fochlucan)',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Instrumento do bardo (citara de Mac-Fuimidh)',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Jarro de alquimia',
        preco: '2000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Lanterna de revelação',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Luvas de apanhar projéteis',
        preco: '4000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Luvas de destreza',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Luvas de nadar e escalar',
        preco: '3000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manoplas de força do ogro',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manto da arraia',
        preco: '4500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manto de carisma',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manto de proteção',
        preco: '4000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manto élfico',
        preco: '2500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Medalhão de pensamentos',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Mochila de carga',
        preco: '3000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Munição +1',
        preco: '250.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Óculos noturnos',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Óleo escorregadio',
        preco: '500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Olhos de águia',
        preco: '2500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Olhos de encantamento',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Olhos de visão momentânea',
        preco: '2000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra da boa sorte (pedra da sorte)',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedras de mensagem',
        preco: '4000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pergaminho de magia (2° nível)',
        preco: '250.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Pergaminho',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pergaminho de magia (3° nível)',
        preco: '500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Pergaminho',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Periapto de adaptação',
        preco: '4000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Periapto de cicatrização',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Periapto de sabedoria',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Periapto de saúde',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pérola do poder',
        preco: '4000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pó da seca',
        preco: '200.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pó de desaparecimento',
        preco: '500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pó de espirrar e tossir',
        preco: '200.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de amizade animal',
        preco: '300.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de aumentar',
        preco: '500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de cura maior',
        preco: '250.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de envenenamento',
        preco: '500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de força do gigante (colina)',
        preco: '800.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de resistência',
        preco: '400.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de respirar na água',
        preco: '300.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de sopro de fogo',
        preco: '500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Robe dos itens úteis',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Sandálias de patas de aranha',
        preco: '4500.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Sela do cavaleiro',
        preco: '2000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Tiara do intelecto',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Tridente de comandar peixes',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Unguento de Keoghtom',
        preco: '4000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha de detectar magia',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha de mísseis mágicos',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha de segredos',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha do arcano de guerra +1',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Vassoura voadora',
        preco: '5000.00',
        tipo_item: 'Incomum',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cinturão de força do gigante (colina)',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Colar de bolas de fogo',
        preco: '8000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Contas de força',
        preco: '6000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Corda de estrangulamento',
        preco: '15000.00',
        tipo_inventario: 'Item maravilhoso',
        tipo_item: 'Raro',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Corrente de contas de oração',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Couro batido encantador',
        preco: '15000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cubo de força',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Elixir de saúde',
        preco: '10000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Elmo de teletransporte',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Escudo +2',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Escudo apanhador de flechas',
        preco: '5000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Espada do furto de vidas',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Espada do sangramento',
        preco: '18000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Estátua de poderes incríveis (bodes de marfim)',
        preco: '16000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Estátua de poderes incríveis (cachorro de ônix)',
        preco: '12000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Estátua de poderes incríveis (coruja de serpentina)',
        preco: '5000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Estátua de poderes incríveis (elefante de mármore)',
        preco: '14000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Estátua de poderes incríveis (grifo de bronze)',
        preco: '8000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Estátua de poderes incríveis (leões dourados)',
        preco: '14000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Estátua de poderes incríveis (mosca de ébano)',
        preco: '8000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Faixas de ferro de Bilarro',
        preco: '19000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Ferraduras de velocidade',
        preco: '5000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Fortaleza instantânea de Daern',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Gema de visão',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Instrumento do bardo (mandolim de Canaith)',
        preco: '18000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Instrumento do bardo (lira de Cli)',
        preco: '16000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Lâmina do sol',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Língua flamejante',
        preco: '17000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Maça de destruição',
        preco: '15000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Maça do rompimento',
        preco: '15000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Maça do terror',
        preco: '18000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Maça',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Machado furioso',
        preco: '12000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Malha élfica',
        preco: '8000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manto de deslocamento',
        preco: '15000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manto de resistência à magia ',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manto do morcego',
        preco: '18000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Matadora de dragões',
        preco: '15000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Matador de gigantes',
        preco: '15000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Munição +2',
        preco: '800.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Óleo de forma etérea',
        preco: '3000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra de comandar elementais da terra',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (prontidão)',
        preco: '10000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (proteção)',
        preco: '12000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (armazenamento)',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (sustento)',
        preco: '4000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pena de Quaal',
        preco: '1000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pergaminho de magia (4° nível)',
        preco: '1000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Pergaminho',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pergaminho de magia (5° nível)',
        preco: '1500.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Pergaminho',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pergaminho de proteção',
        preco: '4000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Pergaminho',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Periapto de proteção contra veneno',
        preco: '19000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de clarividência',
        preco: '2500.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de cura superior',
        preco: '1000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de encolher',
        preco: '1500.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de força do gigante (gigante do fogo)',
        preco: '1400.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de força do gigante (gigante do gelo ou gigante de pedra)',
        preco: '2000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de forma gasosa',
        preco: '2000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de heroísmo',
        preco: '2000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de invulnerabilidade',
        preco: '3000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de ler mentes',
        preco: '1500.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Robe dos olhos',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Saco de feijões',
        preco: '12000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Sacola prestativa de Heward',
        preco: '5000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Trombeta da destruição',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Trombeta do Valhalla (prata ou latão)',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha das maravilhas',
        preco: '12000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha de bolas de fogo',
        preco: '12000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha de detecção de inimigos',
        preco: '10000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha de medo',
        preco: '10000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha de obrigação',
        preco: '18000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha de paralisia',
        preco: '12000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha de relâmpagos',
        preco: '12000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha do arcano de guerra +2',
        preco: '20000.00',
        tipo_item: 'Raro',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Amuleto dos planos',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel de estrelas cadentes',
        preco: '40000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel de regeneração',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel de telecinésia',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Arco do juramento',
        preco: '35000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Arma +3',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Armadura +2',
        preco: '40000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Armadura anã',
        preco: '22000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Armadura demoníaca',
        preco: '45000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Arremessador anão',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Bastão de absorção',
        preco: '40000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Bastão',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Bastão guardião de pactos',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Bastão',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Bastão de prontidão',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Bastão',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Bastão de segurança',
        preco: '45000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Bastão',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Bola de cristal (ler mentes)',
        preco: '40000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Bolsa devoradora',
        preco: '20000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Brunea de escamas de dragão',
        preco: '25000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cajado de ataque',
        preco: '30000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Cajado',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cajado de trovão e relâmpago',
        preco: '40000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Cajado',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cajado do fogo',
        preco: '25000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Cajado',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cajado do frio',
        preco: '25000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Cajado',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cajado do poder',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Cajado',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cimitarra da velocidade',
        preco: '35000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cinturão de força do gigante (gigante do fogo)',
        preco: '35000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cinturão de força do gigante (gigante do gelo e gigante de pedra)',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Elmo brilhante',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Escudo +3',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Escudo animado',
        preco: '20000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Escudo de proteção contra magia',
        preco: '25000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Espada dançarina',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Espada decepadora',
        preco: '20000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Espelho do aprisionamento',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Estátua de poderes incríveis (corcel de obsidiana)',
        preco: '20000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Ferraduras de zéfiro',
        preco: '20000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Flecha assassina',
        preco: '5000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Garrafa do efreeti',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Instrumento do bardo (Harpa de Anstruth)',
        preco: '30000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Ladra das nove vidas',
        preco: '25000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manto da aranha',
        preco: '25000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Marca congelante',
        preco: '25000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Munição +3',
        preco: '2500.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Óleo de precisão',
        preco: '5000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (absorção)',
        preco: '40000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (agilidade)',
        preco: '30000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (força)',
        preco: '30000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (fortitude)',
        preco: '30000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (intelecto)',
        preco: '30000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (intuição)',
        preco: '30000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (liderança)',
        preco: '30000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pergaminho de magia (6° nível)',
        preco: '2500.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Pergaminho',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pergaminho de magia (7° nível)',
        preco: '4000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Pergaminho',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pergaminho de magia (8° nível)',
        preco: '6000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Pergaminho',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pigmentos maravilhosos de Nolzur',
        preco: '5000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de cura suprema',
        preco: '3000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de força do gigante (gigante das nuvens)',
        preco: '8000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de invisibilidade',
        preco: '4000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de longevidade',
        preco: '6000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de velocidade',
        preco: '3000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de vitalidade',
        preco: '8000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de voo',
        preco: '4000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manual da rapidez de movimentos',
        preco: '45000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manual da saúde corporal',
        preco: '45000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manual do bom exercício',
        preco: '45000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manual dos golens',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Robe das cores cintilantes',
        preco: '30000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Robe das estrelas',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Tapete voador',
        preco: '35000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Tomo da compreensão',
        preco: '45000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Tomo de lidernaça e influência',
        preco: '45000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Tomo dos grandes pensamentos',
        preco: '45000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Trombeta do Valhalla (bronze)',
        preco: '40000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha de metamorfose',
        preco: '40000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Varinha do arcano de guerra +3',
        preco: '50000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Varinha',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Vela de invocação',
        preco: '20000.00',
        tipo_item: 'Muito_raro',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel de comandar elementais',
        preco: '300000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel de invisibilidade',
        preco: '100000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel de invocação de djinni',
        preco: '350000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel de refletir magia',
        preco: '100000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Anel dos três desejos',
        preco: '150000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Anel',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Armadura +3',
        preco: '100000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Armadura de invulnerabilidade',
        preco: '120000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Armadura de placas da forma etérea',
        preco: '180000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Baralho das surpresas',
        preco: '500000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Bastão de ressurreição',
        preco: '300000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Bastão',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Bastão do grande poder',
        preco: '75000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Bastão',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Bola de cristal (telepatia ou visão da verdade)',
        preco: '100000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cajado do arcano',
        preco: '500000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Cajado',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cinturão de força do gigante (gigante da tempestade)',
        preco: '300000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cinturão de força do gigante (gigante das nuvens)',
        preco: '200000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cola soberana',
        preco: '10000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Cubo do portal',
        preco: '175000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Defensora',
        preco: '100000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Dispositivo de Kwalish',
        preco: '200000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Escaravelho de proteção',
        preco: '250000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Esfera da aniquilação',
        preco: '200000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Espada da retaliação',
        preco: '100000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Espada vorpal',
        preco: '300000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Frasco de ferro',
        preco: '250000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Instrumento do bardo (harpa de Ollamh)',
        preco: '100000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Lâmina da sorte',
        preco: '250000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Malha do efreeti',
        preco: '200000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Armadura',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Manto de invisibilidade',
        preco: '100000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Martelo dos trovões',
        preco: '450000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (absorção maior)',
        preco: '100000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (maestria)',
        preco: '200000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pedra iônica (regeneração)',
        preco: '90000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Pergaminho de magia (9° nível)',
        preco: '10000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Pergaminho',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de cura completa',
        preco: '6000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poção de força do gigante (gigante da tempestade)',
        preco: '12000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Poção',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Poço dos muitos mundos',
        preco: '400000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Robe do arquimago',
        preco: '250000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Solvente universal',
        preco: '5000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Talismã da bondade pura',
        preco: '350000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Talismã da esfera',
        preco: '100000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Talismã do mal absoluto',
        preco: '350000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Tomo da língua quieta',
        preco: '200000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Trombeta do Valhalla (ferro)',
        preco: '120000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Item maravilhoso',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      },
      {
        nome: 'Vingadora sagrada',
        preco: '350000.00',
        tipo_item: 'Lendário',
        tipo_inventario: 'Arma',
        updatedAt: '2019-10-30T23:32:23.711Z',
        createdAt: '2019-10-30T23:32:23.711Z'
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Itens', null, {})
}
