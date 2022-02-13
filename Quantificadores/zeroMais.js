const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fire fog in NYC';

// O * representa ZERO ou MAIS (opcional)
const regex = /fogo*/gi;
console.log(texto1.match(regex));
console.log(texto2.match(regex));