let turnCounter: number = 1;

const turnDisplay = document.getElementById('turn__number') as HTMLElement;
const nextTurnButton = document.getElementById('end__turn__button') as HTMLButtonElement;

if (turnDisplay && nextTurnButton) {
 
    nextTurnButton.addEventListener('click', () => {
 
        turnCounter += 1;
        turnDisplay.textContent = turnCounter.toString();
    });
}
