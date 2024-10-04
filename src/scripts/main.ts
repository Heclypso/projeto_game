// sistema de passagem de turnos

let turnCounter: number = 1;

const turnDisplay = document.getElementById('turn-number') as HTMLElement;
const nextTurnButton = document.getElementById('end-turn-button') as HTMLButtonElement;

if (turnDisplay && nextTurnButton) {
 
    nextTurnButton.addEventListener('click', () => {
 
        turnCounter += 1;
        turnDisplay.textContent = turnCounter.toString();
    });
}

// sistema de detecção de monstros

const firstMonstersCamp = document.getElementById('first-column') as HTMLElement;
const secondMonsterCamp = document.getElementById('second-column') as HTMLElement;

// console.log('Monstros no primeiro campo:', firstMonstersCamp.childElementCount);
// console.log('Monstros no segundo campo:', secondMonsterCamp.childElementCount);

if (firstMonstersCamp.childElementCount + secondMonsterCamp.childElementCount > 0) {
    console.log("Existem monstros no campo!");
} else {
    console.log("Não existem monstros no campo!");
}


//sistema de passagem de sala