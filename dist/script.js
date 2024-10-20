// Definindo as opções do jogo
var choices = ['pedra', 'papel', 'tesoura'];
// Obtendo referências aos botões e ao elemento de resultado
var rockButton = document.getElementById('rock');
var paperButton = document.getElementById('paper');
var scissorsButton = document.getElementById('scissors');
var resultDisplay = document.getElementById('result');
// Função para determinar o vencedor
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Empate!";
    }
    else if ((playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')) {
        return "Você ganhou!";
    }
    else {
        return "Você perdeu!";
    }
}
// Função para jogar
function playGame(playerChoice) {
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    var result = determineWinner(playerChoice, computerChoice);
    resultDisplay.textContent = "Voc\u00EA escolheu ".concat(playerChoice, ". A m\u00E1quina escolheu ").concat(computerChoice, ". ").concat(result);
}
// Adicionando eventos de clique aos botões
rockButton.addEventListener('click', function () { return playGame('pedra'); });
paperButton.addEventListener('click', function () { return playGame('papel'); });
scissorsButton.addEventListener('click', function () { return playGame('tesoura'); });
