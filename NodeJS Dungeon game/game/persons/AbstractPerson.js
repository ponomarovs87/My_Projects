class AbstractPerson {
    constructor(name, hp, lvl) {
        this.name = name;
        this.hp = hp;
        this.lv = lvl;
        this.power = 2 * lvl;
        this.exp = 0;
        this.needExp = 10;
    };

    addExp(initialHP, lvl) {
        this.exp += initialHP * lvl;

        if (this.exp >= this.needExp) {
            let lvl = this.lv + 1 ;
            let needExp = this.needExp * 2;
            this.setLvl(lvl, needExp)

        };
    };

    isAlive() {
        return this.hp > 0;
    };

    chooseAttackPart(bodyPart) {
        this.attackPoint = bodyPart;
    };

    chooseDefence(bodyPart) {
        this.defencePart = bodyPart;
    };

    setLvl(lv, needExp) {
        this.lv = lv;
        this.hp = 20 * this.lv;
        this.power = 2 * this.lv;
        this.needExp = needExp;
    }
};

module.exports = AbstractPerson;