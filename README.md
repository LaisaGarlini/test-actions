<p>
  <img src="https://img.shields.io/badge/GitHub_Actions-%25232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
</p>

# Calculadora de Impostos com GitHub Actions

> Uma aplicação Node.js para cálculo automatizado de impostos (ICMS, PIS, COFINS) com sistema de testes contínuos via GitHub Actions.


<h2>📋 Funcionalidades</h2>

- ✅ Cálculo automático de impostos (ICMS, PIS, COFINS)
- ✅ Testes automatizados com GitHub Actions
- ✅ Validação de entradas e cálculos
- ✅ Executa testes a cada push na branch main
- ✅ Valida cálculos com valores padrão (R$ 100)
- ✅ Permite execução manual com parâmetros customizados

<h2>🚀 Como usar</h2>

<h4>Pré-requisitos:</h4>

- Node.js (versão 14 ou superior)
- npm (geralmente incluído com o Node.js)

<h3>Instalação</h3>

```
git clone https://github.com/LaisaGarlini/test-actions
cd test-actions
npm install
```

<h2> Execução </h2>

Exemplo com valores personalizados:

```
node src/index.js --valor 100 --icms 17 --pis 15 --cofins 7.5
```

Exemplo de Saída

```
=== CÁLCULO DE IMPOSTOS ===
Valor base: R$ 100.00
ICMS (17%): R$ 17.00
PIS (15%): R$ 15.00
COFINS (7.5%): R$ 7.50
===========================
Total de impostos: R$ 39.50
Valor líquido: R$ 60.50
===========================
✅ Cálculos validados com sucesso!
```
