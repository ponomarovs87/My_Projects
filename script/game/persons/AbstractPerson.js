class AbstractPerson {
    constructor(name, hp, lvl) {
        this.name = name;
        this.hp = hp;
        this.lvl = lvl;
        this.power = 2;
    };

    isAlive(){
        return this.hp > 0;
    };

    chooseAttackPart(bodyPart){
        this.attackPoint = bodyPart
    };

    chooseDefence(bodyPart){
        this.defencePart = bodyPart
    };
};

module.exports = AbstractPerson;