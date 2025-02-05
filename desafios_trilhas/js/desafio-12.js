// Crie um loop que exiba todos os números pares de 0 a 20.

// Pula de 2 em 2
for (let i=0; i<= 20; i+=2){
  // i +=2 é o mesmo que i = i + 2
  console.log(`Número par pulando de 2 em 2: ${i}`);
}

// Ou

for (let i=0; i<= 20; i++){
  // Se o resto da divisão de i por 2 for 0, então i é par
  if (i % 2 === 0){
    console.log(`Número par com resto da divisão por 2 igual a 0: ${i}`);
  }
}