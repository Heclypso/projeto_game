// sistema de criar cartas na mão
var cardFinalDestination = document.getElementById('container-cards');
var drawCardButton = document.getElementById('draw-card-button');
drawCardButton.addEventListener('click', function () {
    if (cardFinalDestination.children.length < 3) {
        var newCard = document.createElement('div');
        newCard.classList.add('card_container');
        newCard.textContent = 'Nova Carta';
        cardFinalDestination.appendChild(newCard);
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
var leaveContainer = document.getElementById('leave-battle-menu');
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
// sistema de receber drops 
var claimButton = document.getElementById('victory-screen-claim-button');
claimButton.addEventListener('click', function () {
    console.log("itens recebidos");
});
