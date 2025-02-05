/*
Escreva um código que calcule a área de um círculo. 
Utilize uma função para realizar o cálculo. 
A função deve receber o raio como parâmetro e retornar a área.
*/

function calcularAreaCirculo(raio){
  // Área do cicrulo é pi * r^2
  return 3.14 * (raio ** 2);
}

let raio = 10;
//let raio = prompt("Digite o raio do círculo");
console.log(`A área do círculo é ${calcularAreaCirculo(raio)}`);
