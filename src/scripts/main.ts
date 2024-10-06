// sistema de criar cartas na mão

const cardFinalDestination = document.getElementById('container-cards') as HTMLElement;
const drawCardButton = document.getElementById('draw-card-button') as HTMLElement;

drawCardButton.addEventListener('click', () => {

    if (cardFinalDestination.children.length < 4) {
        console.log("dan daran dan daran dan DARAN")
    } else {
        console.log("Limite de cartas atingido (3)")
    }

});

// sistema de esconder as cartas da mão

const containerCards = document.getElementById('container-cards') as HTMLElement;
const closeButton = document.getElementById('container-cards-close-button') as HTMLElement;
const containerCardsIcon = document.getElementById('container-cards-icon') as HTMLElement;

closeButton.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(containerCards); 
    // sem o computedstyle o botao pode retornar uma string vazia 
    // fazendo com que seja necessario dois clicks para o botao funcionar
    if (computedStyle.display === "none") {
        containerCardsIcon.style.rotate = "180deg";
        containerCards.style.display = "flex";
    } else {
        containerCardsIcon.style.rotate = "0deg";
        containerCards.style.display = "none";
    }
});

// sistema de fuga da batalha 

const leaveContainer = document.getElementById('leave-battle-container') as HTMLElement;
const runButton = document.getElementById('run') as HTMLElement;
const confirmRunButton = document.getElementById('exit-battle') as HTMLElement;
const denyRunButton = document.getElementById('stay-in-battle') as HTMLElement;

runButton.addEventListener('click', () => {
    leaveContainer.style.display = "block";
});

confirmRunButton.addEventListener('click', () => {
    console.log("voce deixou o combate")
});

denyRunButton.addEventListener('click', () => {
    leaveContainer.style.display = "none";
});
// sistema de abrir o menu de opções

const openOptionsButton = document.getElementById('open-options-button') as HTMLElement;
const closeOptionsButton = document.getElementById('close-options') as HTMLElement;
const optionsMenu = document.getElementById('options') as HTMLElement;

openOptionsButton.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(optionsMenu); 
    // sem o computedstyle o botao pode retornar uma string vazia 
    // fazendo com que seja necessario dois clicks para o botao funcionar
    if (computedStyle.display === "none") {
        optionsMenu.style.display = "block";
    } 
});

closeOptionsButton.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(optionsMenu); 
    // sem o computedstyle o botao pode retornar uma string vazia 
    // fazendo com que seja necessario dois clicks para o botao funcionar
    if (computedStyle.display === "block") {
        optionsMenu.style.display = "none";
    } 
});


// sistema de draggin

const columns = document.querySelectorAll<HTMLElement>(".column"); 

document.addEventListener("dragstart", (e: DragEvent) => {
    const target = e.target as HTMLElement;
    target.classList.add("dragging");
});

document.addEventListener("dragend", (e: DragEvent) => {
    const target = e.target as HTMLElement; 
    target.classList.remove("dragging");
});

columns.forEach((item) => {
    item.addEventListener("dragover", (e: DragEvent) => {
        e.preventDefault(); 

        const dragging = document.querySelector<HTMLElement>(".dragging");
        const applyAfter = getNewPosition(item, e.clientY);

        if (applyAfter) {
            applyAfter.insertAdjacentElement("afterend", dragging);
        } else {
            item.prepend(dragging);
        }
    });
});

function getNewPosition(column, posY) {
    const cards = column.querySelectorAll("item:not(.dragging)");
    let result;

    for (let refer_card of cards) {
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.top + box.height / 2;

        if (posY >= boxCenterY) result = refer_card;
    }

    return result
}

// sistema de passagem de turnos

let turnCounter: number = 1;

const turnDisplay = document.getElementById('turn-number') as HTMLElement;
const nextTurnButton = document.getElementById('end-turn-button') as HTMLButtonElement;

if (nextTurnButton) {
 
    nextTurnButton.addEventListener('click', () => {
 
        console.log("fim do turno")

        // turnCounter += 1;
        // turnDisplay.textContent = turnCounter.toString();
    });
}

// sistema de detecção de monstros

// const firstMonstersCamp = document.getElementById('first-column') as HTMLElement;
// const secondMonsterCamp = document.getElementById('second-column') as HTMLElement;

// console.log('Monstros no primeiro campo:', firstMonstersCamp.childElementCount);
// console.log('Monstros no segundo campo:', secondMonsterCamp.childElementCount);

// if (firstMonstersCamp.childElementCount + secondMonsterCamp.childElementCount > 0) {
//     console.log("Existem monstros no campo!");
// } else {
//     console.log("Não existem monstros no campo!");
// }

//sistema de passagem de sala