//g = global (procura de forma global e não para quando acha a primeira)
//i = ignore case
/* O que está dentro das duas barras '/código/' é a expressão regular */

const texto = 'Carlos assinou o abaixo-assinado.';
console.log(texto.match(/C|ab/));
console.log(texto.match(/c|ab/i));
console.log(texto.match(/ab|c/gi));