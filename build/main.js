// sistema de criar cartas na mão
var cardFinalDestination = document.getElementById('container-cards');
var drawCardButton = document.getElementById('draw-card-button');
drawCardButton.addEventListener('click', function () {
    if (cardFinalDestination.children.length < 4) {
        console.log("dan daran dan daran dan DARAN");
    }
    else {
        console.log("Limite de cartas atingido (3)");
    }
});
// sistema de esconder as cartas da mão
var containerCards = document.getElementById('container-cards');
var closeButton = document.getElementById('container-cards-close-button');
var containerCardsIcon = document.getElementById('container-cards-icon');
closeButton.addEventListener('click', function () {
    var computedStyle = window.getComputedStyle(containerCards);
    // sem o computedstyle o botao pode retornar uma string vazia 
    // fazendo com que seja necessario dois clicks para o botao funcionar
    if (computedStyle.display === "none") {
        containerCardsIcon.style.rotate = "180deg";
        containerCards.style.display = "flex";
    }
    else {
        containerCardsIcon.style.rotate = "0deg";
        containerCards.style.display = "none";
    }
});
// sistema de fuga da batalha 
var leaveContainer = document.getElementById('leave-battle-container');
var runButton = document.getElementById('run');
var confirmRunButton = document.getElementById('exit-battle');
var denyRunButton = document.getElementById('stay-in-battle');
runButton.addEventListener('click', function () {
    leaveContainer.style.display = "block";
});
confirmRunButton.addEventListener('click', function () {
    console.log("voce deixou o combate");
});
denyRunButton.addEventListener('click', function () {
    leaveContainer.style.display = "none";
});
// sistema de abrir o menu de opções
var openOptionsButton = document.getElementById('open-options-button');
var closeOptionsButton = document.getElementById('close-options');
var optionsMenu = document.getElementById('options');
openOptionsButton.addEventListener('click', function () {
    var computedStyle = window.getComputedStyle(optionsMenu);
    // sem o computedstyle o botao pode retornar uma string vazia 
    // fazendo com que seja necessario dois clicks para o botao funcionar
    if (computedStyle.display === "none") {
        optionsMenu.style.display = "block";
    }
});
closeOptionsButton.addEventListener('click', function () {
    var computedStyle = window.getComputedStyle(optionsMenu);
    // sem o computedstyle o botao pode retornar uma string vazia 
    // fazendo com que seja necessario dois clicks para o botao funcionar
    if (computedStyle.display === "block") {
        optionsMenu.style.display = "none";
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
if (nextTurnButton) {
    nextTurnButton.addEventListener('click', function () {
        console.log("fim do turno");
    });
}
// sistema de combate
var enemy = document.querySelectorAll('.enemy');
var emptyHpBar = document.querySelectorAll('.card_red_hp');
var hpBar = document.querySelectorAll('.card_green_hp');
var hpPoints = document.querySelectorAll('.card_hp_points');
enemy.forEach(function (e) {
    e.addEventListener('click', function () {
        console.log("eu fui clicado");
    });
});
emptyHpBar.forEach(function () {
    console.log("Barras de vida vazias");
});
hpBar.forEach(function (e) {
    e.style.display = 'block';
});
hpPoints.forEach(function (e) {
    e.textContent = "oie";
});
