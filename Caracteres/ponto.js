// O . é um coringa, cada . dentro da regex vai corresponder a uma posição no texto a partir de um índice
// O . tem o poder de substituir um caractere por uma posição dentro de uma regex
const texto = '1,2,3,4,5,6,7,8,9,0';

console.log(texto.match(/1.2/g));
console.log(texto.match(/1..2/g));
console.log(texto.match(/1...3/g));

const notas = '8.3,7.1,8.8,10.0';

console.log(notas.match(/8../g));
console.log(notas.match(/.\../g));