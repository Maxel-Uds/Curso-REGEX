const texto = `Emails dos convidados:
- fulano@cod3r.com.br
- chico@gmail.com
- maxellopes32@gmail.com
- joao@empresa.info.br
- maria_silva@registro.br
- rafa.sampaio@yahoo.com`;

const regex = /\w.+@.+/g;
console.log(texto.match(regex));

console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g));
console.log(texto.match(/\w+@\w+\.\w{2,4}/g));
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g));
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g));