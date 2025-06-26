function palavrasUnicas(texto) {
  const palavras = texto.split(" ");
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    if (palavras.indexOf(palavras[i]) === palavras.lastIndexOf(palavras[i])) {
      unicas.push(palavras[i]);
    }
  }

  return unicas;
}
// Exemplo de uso

console.log(palavrasUnicas('seu nome é João e o meu nome é Maria'));    
// Saída: [ 'João', 'e', 'o', 'meu', 'Maria', seu' ]
// A função palavrasUnicas recebe uma string texto, divide em palavras e retorna um array com as palavras que aparecem apenas uma vez.

