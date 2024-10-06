// sistema de esconder as cartas da mão
var containerCards = document.getElementById('container-cards');
var closeButton = document.getElementById('container-cards-close-button');
var containerCardsIcon = document.getElementById('container-cards-icon');
closeButton.addEventListener('click', function () {
    var computedStyle = window.getComputedStyle(containerCards);
    if (computedStyle.display === "none") {
        containerCardsIcon.style.rotate = "180deg";
        containerCards.style.display = "flex";
    }
    else {
        containerCardsIcon.style.rotate = "0deg";
        containerCards.style.display = "none";
    }
});
// sistema de draggin
var columns = document.querySelectorAll(".column");
document.addEventListener("dragstart", function (e) {
    var target = e.target;
    target.classList.add("dragging");
});
document.addEventListener("dragend", function (e) {
    var target = e.target;
    target.classList.remove("dragging");
});
columns.forEach(function (item) {
    item.addEventListener("dragover", function (e) {
        e.preventDefault();
        var dragging = document.querySelector(".dragging");
        var applyAfter = getNewPosition(item, e.clientY);
        if (applyAfter) {
            applyAfter.insertAdjacentElement("afterend", dragging);
        }
        else {
            item.prepend(dragging);
        }
    });
});
function getNewPosition(column, posY) {
    var cards = column.querySelectorAll("item:not(.dragging)");
    var result;
    for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
        var refer_card = cards_1[_i];
        var box = refer_card.getBoundingClientRect();
        var boxCenterY = box.top + box.height / 2;
        if (posY >= boxCenterY)
            result = refer_card;
    }
    return result;
}
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
//sistema de passagem de sala
