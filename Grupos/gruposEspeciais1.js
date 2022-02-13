const texto = 'João é calmo, mas no transito fica nervoso.';

console.log(texto.match(/[\wÀ-ú]+/gi));

//Positive lookahead (vai procurar algo na frente do resultado de um expressão)
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi));

//Negative lookahead (vai procurar algo atrás do resultado de um expressão)
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi));
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi));