const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`
//Captura senhas entre 6 e 20 caracteres
console.log(texto.match(/^.{6,20}$/gm));
//Captura senhas entre 6 e 20 caracteres e com letras maiúsculas
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm));
//Captura senhas entre 6 e 20 caracteres, com letras maiúsculas e símbolos
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#!$%^&*]).{6,20}$/gm));