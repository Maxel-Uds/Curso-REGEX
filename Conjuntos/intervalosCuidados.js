const texto = 'ABC [abc] a-c 1234';

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g));
// Intervalos usam a ordem da tabela UNICODE e tem que respeitar a ordem definida na tabela, se não, dá erro
console.log(texto.match(/[A-z]/g)); 