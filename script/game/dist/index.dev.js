"use strict";

var Fight = require("./Fight/fight");

var Monster = require("./persons/Monster");

var promt = require("prompt-sync")();

var WELKOME_TEXT = "Welcome to the Fight club! \nRemember! Never Tell about Fight club!!\n What is your name?";

function main() {
  console.log(WELKOME_TEXT);
  var name = promt();
  var hero = new AbstractPerson(name, 20, 1);
  var monster = new Monster(1);
  console.log("".concat(name, " , welcome to the Fight club!\nYour first monster is: ").concat(monster.name, ".\nYou have ").concat(hero.hp, ", and ").concat(monster.name, " have ").concat(monster.hp));

  while (hero.isAlive()) {
    console.log("Select defence part:\n1. HEAD\n2. BODY\n3. LEGS");
    var defence = prompt();
    hero.chooseDefence(defence);
    console.log("Select attack point:\n1. HEAD\n2. BODY\n3. LEGS");
    var attack = prompt();
    hero.chooseAttackPart(attack);
    monster.chooseAttackPart(getRandomNumber(3));
    monster.chooseDefence(getRandomNumber(3));
    Fight.attack(hero, monster);
  }

  ;
}

;

function getRandomNumber(max) {
  return Math.floor(Math.random() * max + 1);
}

;
main();