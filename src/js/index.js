var numeroSecreto = parseInt(Math.random() * 1001);
var tentativas = 10;

while (tentativas > 0) {
    var chute = prompt('Tente adivinhar o número correto de 0 a 1000. Digite 0 para sair.');

    if (chute == numeroSecreto) {
        alert('Você acertou! O número secreto é ' + numeroSecreto);
        break;
    } else if (chute == 0) {
        alert('Foi um prazer!')
        break;
    } else if (chute > numeroSecreto) {
        tentativas = tentativas - 1;
        alert('Você errou! O número secreto é menor do que ' + chute + '. Você possui ' + tentativas + ' tentativas.');
    } else if (chute < numeroSecreto) {
        tentativas = tentativas - 1;
        alert('Você errou! O número secreto é maior do que ' + chute + '. Você possui ' + tentativas + ' tentativas.');
    } else if (tentativas == 0) {
        alert('Você excedeu o número de tentativas. O número secreto era: ' + numeroSecreto + ' Tente novamente, por favor!');
    }
}

if (tentativas == 0) {
    alert('Você excedeu o número de tentativas. O número secreto era: ' + numeroSecreto + ' Tente novamente, por favor!');
}
