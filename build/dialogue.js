var monsterField = document.getElementById('monster-field');
var textContainer = document.getElementById('text-container');
var dialogueText = document.getElementById('text-container-p');
var dialogueOptionYes = document.getElementById('text-container-yes');
var dialogueOptionNo = document.getElementById('text-container-no');
var characterImage = document.getElementById('character-image');
var characterName = document.getElementById('character-name');
var LargoImage = document.getElementById('largo-image');
var LargoName = document.getElementById('largo-name');
var battleUi = document.getElementById('character-ui');
var containerCardsUi = document.getElementById('container-cards');
var closeContainerCardsButton = document.getElementById('container-cards-close-button');
monsterField.style.display = "none";
textContainer.style.display = "block";
battleUi.style.display = "none";
containerCardsUi.style.display = "none";
closeContainerCardsButton.style.display = "none";
dialogueOptionYes.style.display = "none";
dialogueOptionNo.style.display = "none";
LargoImage.style.display = "none";
LargoName.style.display = "none";
// Inicio do diálogo
LargoImage.style.display = "none";
LargoName.style.display = "none";
dialogueText.textContent = "...?";
setTimeout(function () {
    LargoImage.style.display = "block";
    LargoName.style.display = "block";
    characterImage.style.display = "none";
    characterName.style.display = "none";
}, 5000);
setTimeout(function () {
    dialogueText.textContent = "Hi, my friend, you are a mage... right? Can you help me open the path through the dungeon? You can keep the rewards";
    dialogueOptionYes.style.display = "block";
    dialogueOptionNo.style.display = "block";
}, 5000);
dialogueOptionYes.addEventListener('click', function () {
    console.log("eu disse sim");
});
dialogueOptionNo.addEventListener('click', function () {
    console.log("eu disse não");
    LargoImage.style.display = "none";
    LargoName.style.display = "none";
    characterImage.style.display = "block";
    characterName.style.display = "block";
    dialogueText.textContent = "I wouldn't be able to finish the dungeon alone";
    dialogueOptionNo.style.display = "none";
});
