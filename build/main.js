// sistema de passagem de turnos
var turnCounter = 1;
var turnDisplay = document.getElementById('turn-number');
var nextTurnButton = document.getElementById('end-turn-button');
if (turnDisplay && nextTurnButton) {
    nextTurnButton.addEventListener('click', function () {
        turnCounter += 1;
        turnDisplay.textContent = turnCounter.toString();
    });
}
// sistema de detecção de monstros
var firstMonstersCamp = document.getElementById('first-column');
var secondMonsterCamp = document.getElementById('second-column');
// console.log('Monstros no primeiro campo:', firstMonstersCamp.childElementCount);
// console.log('Monstros no segundo campo:', secondMonsterCamp.childElementCount);
if (firstMonstersCamp.childElementCount + secondMonsterCamp.childElementCount > 0) {
    console.log("Existem monstros no campo!");
}
else {
    console.log("Não existem monstros no campo!");
}
