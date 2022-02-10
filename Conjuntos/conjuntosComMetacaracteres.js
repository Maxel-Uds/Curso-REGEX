const texto = '.$+*?-';

// Dentro de um conjunto os metacaracteres são lidos como literais sem precisar do escape
// Não funciona para todos
console.log(texto.match(/[+.?*$]/g));
console.log(texto.match(/[$-?]/g)); // Isso é um intervalo

// Não é um intervalo
console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-?]/g));

// Pode precisar de escape dentro do conjunto: - [] ^