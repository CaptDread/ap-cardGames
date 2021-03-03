"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Deck = /*#__PURE__*/function () {
  //'♠️', '♦️']
  //, "7", "8", "9", "10", "J", "Q", "K"]
  function Deck(deckSize) {
    _classCallCheck(this, Deck);

    _defineProperty(this, "DEFAULT_DECK_SIZE", 52);

    _defineProperty(this, "deckSize", null);

    _defineProperty(this, "SUITS", ['🖤', '♣️']);

    _defineProperty(this, "RANKS", ["A", "2", "3", "4", "5", "6"]);

    this.deckSize = deckSize ? deckSize : this.DEFAULT_DECK_SIZE;
    this.create(); // this.shuffle()
    // this.showAll()
  }

  _createClass(Deck, [{
    key: "create",
    value: function create() {
      var _this = this;

      this.cards = [];
      this.SUITS.forEach(function (suit) {
        _this.RANKS.forEach(function (rank) {
          _this.cards.push(new Card(suit, rank));
        });
      });
    }
  }, {
    key: "match",
    value: function (_match) {
      function match() {
        return _match.apply(this, arguments);
      }

      match.toString = function () {
        return _match.toString();
      };

      return match;
    }(function () {
      this.match = [this.firstVal, this.secVal];
      console.log(match);
    })
  }, {
    key: "reset",
    value: function reset() {
      this.create();
    }
  }, {
    key: "shuffle",
    value: function shuffle() {
      var m = this.cards.length,
          t,
          i; // While there remain elements to shuffle…

      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--); // And swap it with the current element.

        t = this.cards[m];
        this.cards[m] = this.cards[i];
        this.cards[i] = t;
      } //optional return just incase it helps somewhere in the game or app
      // return this.cards;

    }
  }, {
    key: "deal",
    value: function deal(numCards) {
      var returnCards = [];

      for (var i = 0; i < numCards; i++) {
        returnCards.push(this.cards.pop());
      }

      return returnCards;
    }
  }]);

  return Deck;
}();

new Deck();
//# sourceMappingURL=deck.js.map
