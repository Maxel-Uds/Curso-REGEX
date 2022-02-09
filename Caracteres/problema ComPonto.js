const texto = 'Bom\ndia';
console.log(texto);

// O ponto não engloba o \n
//dotall(o ponto resolve o \n ) - em algumas linguagens com a flag /regex/s, mas no JS não 
console.log(texto.match(/.../gi));
console.log(texto.match(/..../gi));