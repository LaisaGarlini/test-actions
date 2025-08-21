const args = process.argv.slice(2);
const getArg = (flag) => {
  const i = args.findIndex(a => a === flag || a.startsWith(flag + '='));
  if (i === -1) return null;
  const arg = args[i];
  
  if (arg.includes('=')) {
    return arg.split('=')[1];
  }
  
  return args[i + 1] !== undefined && !args[i + 1].startsWith('-') 
    ? args[i + 1] 
    : null;
};

const valor = Number(getArg('--valor') ?? getArg('-v'));
const icms = Number(getArg('--icms'));
const pis = Number(getArg('--pis'));
const cofins = Number(getArg('--cofins'));

if (isNaN(valor) || isNaN(icms) || isNaN(pis) || isNaN(cofins)) {
  console.error('❌ Erro: Todos os parâmetros devem ser números válidos');
  console.error('Uso: node calculate.js --valor <number> --icms <number> --pis <number> --cofins <number>');
  process.exit(1);
}

if (valor <= 0) {
  console.error('❌ Erro: Valor deve ser maior que zero');
  process.exit(1);
}

const valor_icms = valor * (icms / 100);
const valor_pis = valor * (pis / 100);
const valor_cofins = valor * (cofins / 100);
const total_impostos = valor_icms + valor_pis + valor_cofins;
const valor_liquido = valor - total_impostos;

console.log('=== CÁLCULO DE IMPOSTOS ===');
console.log('Valor base: R$', valor.toFixed(2));
console.log('ICMS (' + icms + '%): R$', valor_icms.toFixed(2));
console.log('PIS (' + pis + '%): R$', valor_pis.toFixed(2));
console.log('COFINS (' + cofins + '%): R$', valor_cofins.toFixed(2));
console.log('===========================');
console.log('Total de impostos: R$', total_impostos.toFixed(2));
console.log('Valor líquido: R$', valor_liquido.toFixed(2));
console.log('===========================');

if (Math.abs(total_impostos - (valor_icms + valor_pis + valor_cofins)) > 0.01) {
  console.error('❌ Erro de cálculo: Soma dos impostos não confere');
  process.exit(1);
}

console.log('✅ Cálculos validados com sucesso!');