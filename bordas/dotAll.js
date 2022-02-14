const texto = 'Romário era um execelente jogador\n, mas hoje é um político questionador';

console.log(texto.match(/^r.*r$/gi)); //problema do dotall (não seleciona o \n)
console.log(texto.match(/^r[\s\S]*r$/gi));