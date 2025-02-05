// Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.
// Lembrete de remover comentários para o desafio 10.
let acertouNumero = false;

while (!acertouNumero){
  let numero = prompt("Digite um número");
  if (numero == 5){
    acertouNumero = true;
  }
}