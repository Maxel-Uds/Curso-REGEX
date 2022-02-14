const texto = 'Romário era um execelente jogador\n, mas hoje é um político questionador';

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi)); // ^ início da linha/string
console.log(texto.match(/r$/gi)); // $ final da linha/string
console.log(texto.match(/^r.*r$/gi));