const texto = `0,1,2,3,4,5,6,a.b c!d?e	-
f_g`;

// Acha apenas os digítos do texto
console.log(texto.match(/\d/g));
// Acha todos os caracteres que não são digítos no texto
console.log(texto.match(/\D/g).join());
// Corresponde ao conjunto [a-zA-Z0-9]
console.log(texto.match(/\w/g));
// Acha todos os elementos que não são caracteres nem digítos no texto
console.log(texto.match(/\W/g));
// Acha os espaços em branco no texto
console.log(texto.match(/\s/g));
// Acha tudo que não é espaço em branco no texto
console.log(texto.match(/\S/g).join());