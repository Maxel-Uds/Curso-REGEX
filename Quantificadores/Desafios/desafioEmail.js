const texto = `Emails dos convidados:
- fulano@cod3r.com.br
- chico@gmail.com
- maxellopes32@gmail.com`;

const regex = /\w.+@.+/g;
console.log(texto.match(regex));