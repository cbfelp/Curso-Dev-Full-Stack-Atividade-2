function fatorial(n) {
  if (n < 0) throw new Error("Número negativo não permitido.");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}
console.log(fatorial(5)); // 120
// A função fatorial calcula o fatorial de um número inteiro n de forma recursiva   