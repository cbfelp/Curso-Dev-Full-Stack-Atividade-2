function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;

  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;

  if (mes === 2 && ehBissexto) return dia <= 29;
  return dia <= diasPorMes[mes - 1];
}
