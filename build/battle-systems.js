// sistema de combate
var enemy = document.querySelectorAll('.enemy');
var emptyHpBar = document.querySelectorAll('.card_red_hp');
var hpBar = document.querySelectorAll('.card_green_hp');
var EnemyHp = document.querySelectorAll('.card_hp_points');
var characterHP = document.querySelectorAll('.character_hp_points');
var healthBar = document.querySelectorAll('.character_green_hp');
var characterMP = document.querySelectorAll('.character__mana__points');
var manaBar = document.querySelectorAll('.character__mana__value');
var characterUI = document.getElementById('main-character-bars-container');
var characterIMG = document.getElementById('character-image');
var characterNAME = document.getElementById('character-name');
var llargoUI = document.getElementById('main-llargo-bars-container');
var llargoIMG = document.getElementById('llargo-image');
var largoNAME = document.getElementById('llargo-name');
llargoUI.style.display = "none";
enemy.forEach(function (e) {
    e.addEventListener('click', function () {
        EnemyHp.forEach(function (e) {
            e.textContent = "0";
        });
        hpBar.forEach(function (e) {
            e.style.width = '0%';
        });
    });
});
var allys = [
    {
        name: "Main Character",
        health: 150,
        mana: 30,
        damage: 30,
    },
    {
        name: "Llargo",
        health: 100,
        mana: 20,
        damage: 20,
    },
];
var enemys = [
    {
        name: "Minion",
        health: 80,
        damage: 50,
    },
];
function setAllyHp(ally, characterHP) {
    characterHP.textContent = ally.health.toString();
}
setAllyHp(allys[0], characterHP[0]);
setAllyHp(allys[1], characterHP[1]);
function setAllyMp(ally, characterMP) {
    characterMP.textContent = ally.mana.toString();
}
setAllyMp(allys[0], characterMP[0]);
setAllyMp(allys[1], characterMP[1]);
function setEnemyHp(enemy, EnemyHp) {
    EnemyHp.textContent = enemy.health.toString();
}
setEnemyHp(enemys[0], EnemyHp[0]);
setEnemyHp(enemys[0], EnemyHp[1]);
setEnemyHp(enemys[0], EnemyHp[2]);
// sistema de vida
function updateEnemyHPBar() {
    var maxHP = 100;
    var healthPercentageOne = (enemys[0].health / maxHP) * 100;
    hpBar[0].style.width = "".concat(healthPercentageOne, "%");
    var healthPercentageTwo = (enemys[0].health / maxHP) * 100;
    hpBar[1].style.width = "".concat(healthPercentageTwo, "%");
    var healthPercentageThree = (enemys[0].health / maxHP) * 100;
    hpBar[2].style.width = "".concat(healthPercentageThree, "%");
}
function updateAllyHPBar() {
    var maxHP = 150;
    var healthPercentage = (allys[0].health / maxHP) * 100;
    healthBar[0].style.width = "".concat(healthPercentage, "%");
}
// simulação de dano
function reduceEnemyHP() {
    enemys[0].health -= 10;
    setEnemyHp(enemys[0], EnemyHp[0]);
    setEnemyHp(enemys[0], EnemyHp[1]);
    setEnemyHp(enemys[0], EnemyHp[2]);
    updateEnemyHPBar();
}
// simulação de dano
function reduceAllyHP() {
    allys[0].health -= 10;
    setAllyHp(allys[0], characterHP[0]);
    updateAllyHPBar();
}
// sistema de mana
function updateManaBar(index) {
    var maxMana = 30;
    var manaPercentage = (allys[index].mana / maxMana) * 100;
    manaBar[index].style.width = "".concat(manaPercentage, "%");
}
function reduceMana(index) {
    if (allys[index].mana >= 10) {
        allys[index].mana -= 10;
        setAllyMp(allys[index], characterMP[index]);
        updateManaBar(index);
    }
    else {
        console.log("Mana insuficiente");
    }
}
function increaseMana(index) {
    if (allys[index].mana <= 20) {
        allys[index].mana = allys[index].mana + 10;
    }
    setAllyMp(allys[index], characterMP[index]);
    console.log(allys[index], characterMP[index]);
    updateManaBar(index);
}
var victoryScreen = document.getElementById('won');
var loseScreen = document.getElementById('lose');
// sistema de passagem de turnos
var nextTurnButton = document.getElementById('end-turn-button');
if (nextTurnButton) {
    nextTurnButton.addEventListener('click', function () {
        EnemyHp.forEach(function (e) {
            if (e.textContent === "0") {
                enemy.forEach(function (e) {
                    e.style.width = "0";
                    victoryScreen.style.display = "block";
                });
                emptyHpBar.forEach(function (e) {
                    e.style.display = "none";
                });
            }
        });
        reduceAllyHP();
        reduceEnemyHP();
        increaseMana(0);
        characterHP.forEach(function (e) {
            if (e.textContent === "0") {
                loseScreen.style.display = "block";
            }
        });
    });
}
// sistema de criar cartas na mão
var cardFinalDestination = document.getElementById('container-cards');
var drawCardButton = document.getElementById('draw-card-button');
drawCardButton.addEventListener('click', function () {
    if (cardFinalDestination.children.length < 3) {
        reduceMana(0);
        var newCard = document.createElement('div');
        newCard.classList.add('card_container');
        newCard.textContent = 'Nova Carta';
        cardFinalDestination.appendChild(newCard);
    }
    else {
        console.log("Limite de cartas atingido (3)");
    }
});
