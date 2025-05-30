const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Introduce un número para generar su tabla de multiplicar: '));

if (isNaN(numero)) {
  console.log('Por favor, ingresa un número válido.');
}

else {
  console.log(`\nTabla de multiplicar del ${numero}:\n`);

  // Bucle for para generar la tabla del 1 al 10
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
