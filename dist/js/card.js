"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var flipCount = "0";
var firstVal = '0';
var secVal = '0';

var Card = /*#__PURE__*/function () {
  //heart, spade, club, diamond 
  // "A", "1", "2", ... "j", "Q", "K"
  function Card(suit, rank) {
    _classCallCheck(this, Card);

    _defineProperty(this, "suit", null);

    _defineProperty(this, "rank", null);

    this.suit = suit;
    this.rank = rank;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var cardEl = document.createElement('div');
      cardEl.classList.add('card');
      cardEl.classList.add('inactive');
      var suitEl = document.createElement('span');
      suitEl.classList.add(this.suit);
      suitEl.classList.add('suit');
      suitEl.innerHTML = this.suit;
      var rankEl = document.createElement('span');
      rankEl.classList.add(this.rank);
      rankEl.innerHTML = this.rank;
      rankEl.classList.add('rank');
      cardEl.appendChild(rankEl);
      cardEl.appendChild(suitEl);
      cardEl.addEventListener('click', function () {
        cardEl.classList.remove('inactive');
        cardEl.classList.add('active');
        rankEl.classList.add('isVisible');

        if (flipCount === '0') {
          var _firstVal = rankEl.innerHTML;
          console.log("1stVal", _firstVal);
          flipCount++;
        } else if (flipCount === 1) {
          var flipped = document.querySelectorAll('.isVisible');
          var _firstVal2 = flipped[0].innerHTML;
          var _secVal = flipped[1].innerHTML;
          console.log("1stVal", _firstVal2);
          console.log("2ndVal", _secVal);

          if (_firstVal2 === _secVal) {
            console.log("good match");

            for (var m = 0; m < flipped.length; m++) {
              flipped[m].classList.remove('isVisible');
            }

            var matchedCards = document.querySelectorAll('.active');

            for (var w = 0; w < wrongCards.length; w++) {
              matchedCards[w].classList.remove('active');
            }
          } else {
            console.log('no match');

            for (var _m = 0; _m < flipped.length; _m++) {
              flipped[_m].classList.remove('isVisible');
            }

            var _wrongCards = document.querySelectorAll('.active');

            for (var _w = 0; _w < _wrongCards.length; _w++) {
              _wrongCards[_w].classList.add('inactive');

              _wrongCards[_w].classList.remove('active');
            }
          }
        }
      });
      return cardEl;
    }
  }]);

  return Card;
}();
//# sourceMappingURL=card.js.map
