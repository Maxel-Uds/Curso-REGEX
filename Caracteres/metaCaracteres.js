// . ? * + -  ^ $ | [] {} \ : -> meta-caracteres
const texto = '0,1,2,3,4,5,6,a.b c!d?e';

// A barra invertida ou scape (\) sinaliza o uso de um meta-caractere de forma literal dentro da REGEX
const regexPonto = /\./g;
console.log(texto.split(regexPonto));

const regexSimbolos = /,|\.|\?|!| /g;
console.log(texto.split(regexSimbolos));