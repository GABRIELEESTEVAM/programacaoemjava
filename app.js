alert(' Seja bem vindas ao jogo do número secreto <3');
let numeroSecreto = 5;
console.log('numeroSecreto')
let chute = prompt('Escolha um número entre 1 e 100');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
alert('Isso ai! Você descobriu o número secreto (99)');
} else {
alert('Você fodeu! :(')
}