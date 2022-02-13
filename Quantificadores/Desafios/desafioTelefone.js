const texto = `Lista telêfonica: 
- (11) 98756-1212
- 98765-4321`

const regex = /[^\w][(\d)/s].+/g;
console.log(texto.match(regex));