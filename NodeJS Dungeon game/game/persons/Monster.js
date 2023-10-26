const AbstractPerson = require("./AbstractPerson");

const MonstersNamesArray = ["Skeleton","Orc","Wolf","Assassin","Ninja","Titan","Dragon"]

function getRandomNumber0(max) {
    return Math.floor(Math.random() * max);
};

function getRandomNumber(max) {
    return Math.floor(Math.random() * max + 1);
};


class Monster extends AbstractPerson {
    constructor(lvl) {
        let HPmonster = lvl*lvl*5;
        super(MonstersNamesArray[getRandomNumber0(MonstersNamesArray.length)],getRandomNumber(HPmonster),getRandomNumber(lvl))
        // switch (lvl) {
        //     case 1:
        //     case 2:
        //         super("Skeleton", 10, 1);
        //         break;
        //     case 3:
        //         super("Ork", 30, 3);
        //         break;
        //     case 4:
        //     case 5:
        //         super("Wolf", 50, 4);
        //         break;
        //     case 6:
        //         super("Assasin", 60, 7);
        //         break;
        //     case 7:
        //         super("Ninja", 100, 8);
        //         break;
        //     case 8:
        //     case 9:
        //         super("Titan", 150, 15);
        //         break;
        //     case 10:
        //         super("Dragon", 200, 20);
        //         break;
        // };
        this.initialHP = this.hp;
    };
};

module.exports = Monster;