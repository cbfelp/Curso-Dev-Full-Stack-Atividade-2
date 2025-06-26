

function jogoAdivinhacao() {
  

  const numero = Math.floor(Math.random() * 100) + 1;
  let tentativa, palpites = 0;

  while (true) {
    
    const prompt = require('prompt-sync')();

    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
    palpites++;

    if (tentativa === numero) {
      console.log(`Parabéns! Acertou em ${palpites} tentativas.`);
      break;
    } else if (tentativa < numero) {
      console.log("Mais alto!");
    } else {
      console.log("Mais baixo!");
    }
  }
}
console.log("Bem-vindo ao jogo de adivinhação!");   
    console.log("Tente adivinhar o número que estou pensando entre 1 e 100.");
    console.log("Você terá que fazer várias tentativas até acertar.");
    console.log("Boa sorte!");
console.log(jogoAdivinhacao());
