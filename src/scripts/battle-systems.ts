// sistema de combate

const enemy = document.querySelectorAll<HTMLElement>('.enemy');
const emptyHpBar = document.querySelectorAll<HTMLElement>('.card_red_hp');
const hpBar = document.querySelectorAll<HTMLElement>('.card_green_hp');
const EnemyHp = document.querySelectorAll<HTMLElement>('.card_hp_points');
const characterHP = document.querySelectorAll<HTMLElement>('.character_hp_points');
const characterMP = document.querySelectorAll<HTMLElement>('.character__mana__points');

EnemyHp.forEach((e) => {
    e.textContent = "10/10"
})

enemy.forEach((e) =>{
    e.addEventListener('click', ()=>{
        EnemyHp.forEach((e) => {
            e.textContent = "0/10"
        })
        hpBar.forEach((e) => {
            e.style.width = '0%'; 
        })
        
    })
});

// calculo de dano

type ally = {
    name: string;
    health: number;
    mana: number;
    damage: number;
}

type enemy = {
    name: string;
    health: number;
    damage: number;
}

const allys: ally[] = [
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
]

const enemys: enemy[] = [
    {
        name: "Minion",
        health: 100,
        damage: 50,
    },
]

function setAllyHp(ally: ally, characterHP: HTMLElement) {
    characterHP.textContent = ally.health.toString();
}

setAllyHp(allys[0], characterHP[0]);
setAllyHp(allys[1], characterHP[1]);

function setAllyMp(ally: ally, characterMP: HTMLElement) {
    characterMP.textContent = ally.mana.toString();
}

setAllyMp(allys[0], characterMP[0]);
setAllyMp(allys[1], characterMP[1]);

function setEnemyHp(enemy: enemy, EnemyHp: HTMLElement) {
    EnemyHp.textContent = enemy.health.toString();
}

setEnemyHp(enemys[0], EnemyHp[0]);
setEnemyHp(enemys[0], EnemyHp[1]);
setEnemyHp(enemys[0], EnemyHp[2]);

// sistema de vitoria

const victoryScreen = document.getElementById('won') as HTMLElement;

// sistema de passagem de turnos

const nextTurnButton = document.getElementById('end-turn-button') as HTMLButtonElement;

if (nextTurnButton) {
 
    nextTurnButton.addEventListener('click', () => {
 
        EnemyHp.forEach((e) => {
        
            if (e.textContent === "0/10") {
                enemy.forEach((e) =>{
                    e.style.width = "0"
                });
        
                emptyHpBar.forEach((e)=>{
                    e.style.display = "none"
                });
            } else {
                console.log("Turno finalizado, nenhum inimigo foi morto");
            }

            if (e.textContent === "0/10") {
                victoryScreen.style.display = "block"
                }
        });

    });
}