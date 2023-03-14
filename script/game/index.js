const Fight = require("./Fight/fight");
const Monster = require("./persons/Monster");

const promt = require("prompt-sync")();

const WELKOME_TEXT = `Welcome to the Fight club! \nRemember! Never Tell about Fight club!!\n What is your name?`


function main() {
    console.log(WELKOME_TEXT);

    const name = promt();

    const hero = new AbstractPerson(name , 20 , 1);

    let monster = new Monster(1);

    console.log(`${name} , welcome to the Fight club!\nYour first monster is: ${monster.name}.\nYou have ${hero.hp}, and ${monster.name} have ${monster.hp}`);

    while(hero.isAlive()){
        console.log("Select defence part:\n1. HEAD\n2. BODY\n3. LEGS");
        const defence = prompt()
        hero.chooseDefence(defence)

        console.log("Select attack point:\n1. HEAD\n2. BODY\n3. LEGS");
        const attack = prompt()
        hero.chooseAttackPart(attack)

        monster.chooseAttackPart(getRandomNumber(3));
        monster.chooseDefence(getRandomNumber(3));

        Fight.attack(hero, monster)
    };
};

function getRandomNumber(max){
    return Math.floor(Math.random() * max + 1);
};

main();