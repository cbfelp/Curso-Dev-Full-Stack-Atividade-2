function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}
// Função para converter um array de pares chave-valor em um objeto
// e vice-versa.            
// Exemplo de uso 
const pares = [
  ['nome', 'João'],
  ['idade', 30],
  ['cidade', 'São Paulo']
];

const objeto = paresParaObjeto(pares);
console.log(objeto);

const novosPares = objetoParaPares(objeto);
console.log(novosPares);
// Saída esperada:
// { nome: 'João', idade: 30, cidade: 'São Paulo' }
// [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo']]