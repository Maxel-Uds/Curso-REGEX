const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>';

//Quantificadores são gulosos por padrão
console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>+/g));

//Quantificadores não gulosos
console.log(texto.match(/<div>.+?<\/div>+/g));
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>+/g));