/*
Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:
x = 10
y = 20
z = x+y
console.log(z) 
*/

// Função que calcula a soma de dois números

function somar(x, y){
  // Retorna a soma de x e y
  return x + y;
}

// Declaração de duas variáveis
let variavel_numerica1 = 10;
let variavel_numerica2 = 20;

// Utiliza a função somar para calcular a soma dos dois números
let resultado = somar(variavel_numerica1, variavel_numerica2);

// Imprime a soma dos dois números
console.log(`A soma de ${variavel_numerica1} e ${variavel_numerica2} é ${resultado}`);
