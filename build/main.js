var turnCounter = 1;
var turnDisplay = document.getElementById('turn__number');
var nextTurnButton = document.getElementById('end__turn__button');
if (turnDisplay && nextTurnButton) {
    nextTurnButton.addEventListener('click', function () {
        turnCounter += 1;
        turnDisplay.textContent = turnCounter.toString();
    });
}
