var monsterField = document.getElementById('monster-field');
var textContainer = document.getElementById('text-container');
var dialogueText = document.getElementById('text-container-p');
var dialogueOptionYes = document.getElementById('text-container-yes');
var dialogueOptionNo = document.getElementById('text-container-no');
var characterImage = document.getElementById('character-image');
var characterName = document.getElementById('character-name');
var llargoImage = document.getElementById('llargo-image');
var llargoName = document.getElementById('llargo-name');
var battleUi = document.getElementById('character-ui');
var closeContainerCardsButton = document.getElementById('container-cards-close-button');
var cutsceneLlargoGif = document.getElementById('cutscene-llargo');
var battleLlargoGif = document.getElementById('battle-llargo');
var llargoBanner = document.getElementById('llargo-banner');
var llargoBannerDescription = document.getElementById('llargo-banner-description');
var llargoBannerBlackBackground = document.getElementById('llargo-banner-black-background');
battleLlargoGif.style.display = "none";
monsterField.style.display = "none";
textContainer.style.display = "block";
battleUi.style.display = "none";
closeContainerCardsButton.style.display = "none";
dialogueOptionYes.style.display = "none";
dialogueOptionNo.style.display = "none";
llargoImage.style.display = "none";
llargoName.style.display = "none";
// Inicio do diálogo
llargoImage.style.display = "none";
llargoName.style.display = "none";
dialogueText.textContent = "...?";
setTimeout(function () {
    llargoImage.style.display = "block";
    llargoName.style.display = "block";
    characterImage.style.display = "none";
    characterName.style.display = "none";
}, 3500);
setTimeout(function () {
    dialogueText.textContent = "Hi, my friend, you are a mage... right? Can you help me open the path through the dungeon? You can keep the rewards";
    dialogueOptionYes.style.display = "block";
    dialogueOptionNo.style.display = "block";
}, 3500);
dialogueOptionYes.addEventListener('click', function () {
    llargoBanner.style.display = "flex";
    monsterField.style.display = "flex";
    battleUi.style.display = "block";
    closeContainerCardsButton.style.display = "block";
    textContainer.style.display = "none";
    battleLlargoGif.style.display = "block";
    cutsceneLlargoGif.style.display = "none";
});
dialogueOptionNo.addEventListener('click', function () {
    console.log("eu disse não");
    llargoImage.style.display = "none";
    llargoName.style.display = "none";
    characterImage.style.display = "block";
    characterName.style.display = "block";
    dialogueText.textContent = "I wouldn't be able to finish the dungeon alone";
    dialogueOptionNo.style.display = "none";
});
llargoBanner.addEventListener('click', function () {
    llargoBannerDescription.style.display = "flex";
    llargoBannerBlackBackground.style.display = "block";
    llargoBannerDescription.addEventListener('click', function () {
        llargoBannerDescription.style.display = "none";
        llargoBannerBlackBackground.style.display = "none";
        llargoBanner.style.display = "none";
    });
});
