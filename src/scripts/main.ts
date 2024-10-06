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