/*
Crie uma variável chamada nota e atribua um valor entre 0 e 10. 
Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". 
Caso contrário, exiba "Reprovado".
*/

let nota = 6;
if (nota >= 7) {
  console.log("Aprovado");
}
else{
  if (nota >= 5 && nota <=6){
    console.log("Recuperação");
  }
  else {
    console.log("Reprovado");
  }
}

// ternário: 
// nota >= 7 ? console.log("Aprovado") : nota >= 5 && nota <= 6 ? console.log("Recuperação") : console.log("Reprovado");