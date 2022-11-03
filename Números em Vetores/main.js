let vetor = [];
let pares = [];
let impares = [];

let numero;

for (let i = 0; i < 5; i++) {
  numero = parseInt(gets());
  vetor.push(numero)

  if (numero % 2 == 0) {
    pares.push(numero)
  } else {
    impares.push(numero)
  }
}

console.log(`Vetor: ${vetor}`)
console.log(`Par(es):  ${pares}`)
console.log(`Impar(es): ${impares}`)