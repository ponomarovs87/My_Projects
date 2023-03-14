const AbstractPerson = require("../persons/AbstractPerson");

const BODY_PART = {
    1: HEAD,
    2: BODY,
    3: LEGS,
};

class Fight {
    static attack(hero = new AbstractPerson(), monster = new Monster()) {
        console.log(`${hero.name} hit monster in ${BODY_PART[hero.attackPoint]}, ${monster.name} blocked ${BODY_PART[monster.defencePart]}`);

        console.log(`${monster.name} hit hero in ${BODY_PART[monster.attackPoint]}, ${hero.name} blocked ${BODY_PART[hero.defencePart]}`);

        if (hero.attackPoint !== monster.defencePart) {
            monster.hp = monster.hp - hero.power * hero.lvl;
        }
        if(monster.attackPoint !== hero.defencePart) {
            hero.hp = hero.hp - monster.power * monster.lvl;
        }
    };


};

module.exports = Fight