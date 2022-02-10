const texto = '0,1,2,3,4,5,6,a.b c!d?e[f';

// Para se definir uma classe (conjunto) de caracteres usa-se []
const regexPares = /[02468]/g;
console.log(texto.match(regexPares));

const texto2 = 'João não vai passear na moto.';
const regexComESemAcento = /n[aã]./g;
console.log(texto2.match(regexComESemAcento));