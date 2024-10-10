const monsterField = document.getElementById('monster-field') as HTMLElement;
const textContainer = document.getElementById('text-container') as HTMLElement;
const dialogueText = document.getElementById('text-container-p') as HTMLElement;
const dialogueOptionYes = document.getElementById('text-container-yes') as HTMLElement;
const dialogueOptionNo = document.getElementById('text-container-no') as HTMLElement;
const characterImage = document.getElementById('character-image') as HTMLElement;
const characterName = document.getElementById('character-name') as HTMLElement;
const llargoImage = document.getElementById('llargo-image') as HTMLElement;
const llargoName = document.getElementById('llargo-name') as HTMLElement;
const battleUi = document.getElementById('character-ui') as HTMLElement;
const closeContainerCardsButton = document.getElementById('container-cards-close-button') as HTMLElement;
const cutsceneLlargoGif = document.getElementById('cutscene-llargo') as HTMLElement;
const battleLlargoGif = document.getElementById('battle-llargo') as HTMLElement;
const llargoBanner = document.getElementById('llargo-banner') as HTMLElement;
const llargoBannerDescription = document.getElementById('llargo-banner-description') as HTMLElement;
const llargoBannerBlackBackground = document.getElementById('llargo-banner-black-background') as HTMLElement;

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

setTimeout(()=> {
    llargoImage.style.display = "block";
    llargoName.style.display = "block";

    characterImage.style.display = "none";
    characterName.style.display = "none";
}, 3500);

setTimeout(() => {
    dialogueText.textContent = "Hi, my friend, you are a mage... right? Can you help me open the path through the dungeon? You can keep the rewards";
    dialogueOptionYes.style.display = "block";
    dialogueOptionNo.style.display = "block";
}, 3500);

dialogueOptionYes.addEventListener('click', () => {
    llargoBanner.style.display = "flex"
    monsterField.style.display = "flex";
    battleUi.style.display = "block";
    closeContainerCardsButton.style.display = "block";
    textContainer.style.display = "none";
    battleLlargoGif.style.display = "block"
    cutsceneLlargoGif.style.display = "none"
})

dialogueOptionNo.addEventListener('click', ()=> {
    console.log("eu disse não");
    llargoImage.style.display = "none";
    llargoName.style.display = "none";
    characterImage.style.display = "block";
    characterName.style.display = "block";
    dialogueText.textContent = "I wouldn't be able to finish the dungeon alone";
    dialogueOptionNo.style.display = "none";
})

llargoBanner.addEventListener('click', () => {
    llargoBannerDescription.style.display = "flex"
    llargoBannerBlackBackground.style.display = "block"

    llargoBannerDescription.addEventListener('click', () => {
        llargoBannerDescription.style.display = "none"
        llargoBannerBlackBackground.style.display = "none"
        llargoBanner.style.display = "none";
    });  
})