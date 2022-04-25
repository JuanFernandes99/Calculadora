'use strict';

//Variável que vai conter o conteudo atual do visor
let valorVisor;
//Variável que vai armazenar o último caracter da string
let ultimoCaracterString;

//Função criada para limpar o visor e coloca o valorVisor no estado inicial
const limpar = function () {
  document.querySelector('#resultado').value = '0';
};

//Função criada para limpar o visor quando o value seja Not a Number
const checkNan = function () {
  if (document.querySelector('#resultado').value === 'Not a number') {
    limpar();
  }
};

//Função criada para inserir os números no visor (0-9)
const inserirNumeros = function (numero) {
  checkNan();
  valorVisor = document.querySelector('#resultado').value;
  valorVisor === '0'
    ? (document.querySelector('#resultado').value = numero)
    : (document.querySelector('#resultado').value += numero);
};

//Função criada para inserir os operadores matemáticos, e a virgula para os números decimais (x,÷,)
const inserirOperadores = function (operador) {
  checkNan();
  valorVisor = document.querySelector('#resultado').value;

  ultimoCaracterString = valorVisor.charAt(valorVisor.length - 1);

  // Com esta linha de código evitamos operadores seguidos por exemplo: (8++2)
  if (!ultimoCaracterString.match(/^(x|[/]|÷|[+]|[-]|[*]||,|)$/)) {
    document.querySelector('#resultado').value += operador;
  }
};

//Função criada para reemplazar os operadores matematicos que nao permitem reresolverr
// a operaçao matematica para os que sim permitem por exemplo : (8x8) //erro
// (8*8) = 64
const substituirString = function () {
  valorVisor = document.querySelector('#resultado').value;
  let resultado = valorVisor
    .replaceAll('x', '*')
    .replaceAll('÷', '/')
    .replaceAll(',', '.')
    //Constantes numéricas que começam com zero (como "020") são interpretadas como octais.
    //.replace criado foi para resolver o problema do Octal value por causa dos 0 (5 + 005) dava erro
    .replace(/\b0*((\d+|\d+))\b/g, '$1');
  return resultado;
};

//Função criada para calcular o resultadoado da operação matemática do visor
const resolver = function () {
  //1. Invocamos a função replaceString
  let novaString = substituirString();
  ultimoCaracterString = novaString.charAt(novaString.length - 1);

  // Verificação para impedir que repitamos algum operador
  // (por exemplo: 5++ ou 5+ sem nenhum número afrente)
  if (!ultimoCaracterString.match(/^(x|[/]|÷|[+]|[-]|[*]||,|)$/)) {
    let resultado = eval(novaString);
    // Qualquer divisão por 0 deve aparecer o texto “Not a numero” no visor.
    if (resultado === Infinity) {
      document.querySelector('#resultado').value = 'Not a number';
    } else {
      document.getElementById('resultado').value = resultado;
    }
  }
};

document.querySelector('.btnLimpar').addEventListener('click', function () {
  limpar();
});

//Botões dos números
for (let i = 9; i >= 0; i--) {
  document.querySelector(`.btn--${i}`).addEventListener('click', function () {
    inserirNumeros(i.toString());
  });
}

document.querySelector('.btnResultado').addEventListener('click', function () {
  resolver();
});

//key down = quando colocamos o dedo na tecla
document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'Enter':
      resolver();
      break;

    case 'Escape':
      limpar();
      break;

    case 'Backspace':
      valorVisor = document.querySelector('#resultado').value;
      // If criado para impedir que quando apagarmos o último número fique vazio
      if (valorVisor.length === 1) {
        document.querySelector('#resultado').value = '0';
      }
      // If criado para impedir que apaguemos o valor inicial que é o número 0
      else if (valorVisor !== '0') {
        document.querySelector('#resultado').value = valorVisor.slice(0, -1);
      }
      break;

    //Inserir números através do teclado
    case event.key.match(/^(0|1|2|3|4|5|6|7|8|9|)$/)?.input:
      inserirNumeros(event.key.toString());
      break;

    //Inserir operadores e números decimais através do teclado
    case event.key.match(/^(x|[/]|÷|[+]|[-]|[*]||,|)$/)?.input:
      //Assim damos a oportunidade ao utilizar de inserir operadores de duas maneiras diferentes.
      inserirOperadores(event.key.replace('*', 'x').replace('/', '÷'));
  }
});
