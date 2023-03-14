"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AbstractPerson = require("../persons/AbstractPerson");

var BODY_PART = {
  1: HEAD,
  2: BODY,
  3: LEGS
};

var Fight =
/*#__PURE__*/
function () {
  function Fight() {
    _classCallCheck(this, Fight);
  }

  _createClass(Fight, null, [{
    key: "attack",
    value: function attack() {
      var hero = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new AbstractPerson();
      var monster = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Monster();
      console.log("".concat(hero.name, " hit monster in ").concat(BODY_PART[hero.attackPoint], ", ").concat(monster.name, " blocked ").concat(BODY_PART[monster.defencePart]));
      console.log("".concat(monster.name, " hit hero in ").concat(BODY_PART[monster.attackPoint], ", ").concat(hero.name, " blocked ").concat(BODY_PART[hero.defencePart]));

      if (hero.attackPoint !== monster.defencePart) {
        monster.hp = monster.hp - hero.power * hero.lvl;
      }

      if (monster.attackPoint !== hero.defencePart) {
        hero.hp = hero.hp - monster.power * monster.lvl;
      }
    }
  }]);

  return Fight;
}();

;
module.exports = Fight;