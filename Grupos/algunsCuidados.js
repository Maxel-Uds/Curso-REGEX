const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC';

//Dentro de um conjunto um grupo não existe
console.log(texto.match(/[(abc)]/gi));
//Conjuntos podem existir dentro de grupos
console.log(texto.match(/([abc])/gi));