function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}
// Exemplo de uso:

const produtos = [
  { nome: "Produto A", preco: 30 },
  { nome: "Produto B", preco: 20 },
  { nome: "Produto C", preco: 50 }
];
console.log(nomesOrdenadosPorPreco(produtos));
// Saída: [ 'Produto B', 'Produto A', 'Produto C' ]
// A função nomesOrdenadosPorPreco recebe um array de objetos produtos,
// ordena os produtos pelo preço em ordem crescente e retorna um novo array contendo apenas os nomes dos produtos ordenados.
// A função utiliza o método sort para ordenar os produtos e o método map para extrair os nomes.                