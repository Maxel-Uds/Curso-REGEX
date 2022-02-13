const texto = `CPF dos aprovados: 
- 600.567.890-12
- 765.998.345-23
- 234.634.908-45
- 456.342.889-56
- 675.789.203-09`;

const regex = /\d.+\d/g;
console.log(texto.match(regex));

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));