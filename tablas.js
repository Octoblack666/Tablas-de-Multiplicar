const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Introduce un número para generar su tabla de multiplicar: '));

if (isNaN(numero)) {
  console.log('Por favor, ingresa un número válido.');
}

