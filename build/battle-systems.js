// sistema de combate
var enemy = document.querySelectorAll('.enemy');
var emptyHpBar = document.querySelectorAll('.card_red_hp');
var hpBar = document.querySelectorAll('.card_green_hp');
var EnemyHp = document.querySelectorAll('.card_hp_points');
var characterHP = document.querySelectorAll('.character_hp_points');
var characterMP = document.querySelectorAll('.character__mana__points');
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
        name: "Largo",
        health: 100,
        mana: 20,
        damage: 20,
    },
];
var enemys = [
    {
        name: "Minion",
        health: 100,
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
// sistema de vitoria
var victoryScreen = document.getElementById('won');
// sistema de passagem de turnos
var nextTurnButton = document.getElementById('end-turn-button');
if (nextTurnButton) {
    nextTurnButton.addEventListener('click', function () {
        EnemyHp.forEach(function (e) {
            if (e.textContent === "0") {
                enemy.forEach(function (e) {
                    e.style.width = "0";
                });
                emptyHpBar.forEach(function (e) {
                    e.style.display = "none";
                });
            }
            else {
                console.log("Turno finalizado, nenhum inimigo foi morto");
            }
            if (e.textContent === "0") {
                victoryScreen.style.display = "block";
            }
        });
    });
}
