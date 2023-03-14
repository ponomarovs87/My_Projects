"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AbstractPerson =
/*#__PURE__*/
function () {
  function AbstractPerson(name, hp, lvl) {
    _classCallCheck(this, AbstractPerson);

    this.name = name;
    this.hp = hp;
    this.lvl = lvl;
    this.power = 2;
  }

  _createClass(AbstractPerson, [{
    key: "isAlive",
    value: function isAlive() {
      return this.hp > 0;
    }
  }, {
    key: "chooseAttackPart",
    value: function chooseAttackPart(bodyPart) {
      this.attackPoint = bodyPart;
    }
  }, {
    key: "chooseDefence",
    value: function chooseDefence(bodyPart) {
      this.defencePart = bodyPart;
    }
  }]);

  return AbstractPerson;
}();

;
module.exports = AbstractPerson;