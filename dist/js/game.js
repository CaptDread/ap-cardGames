"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Game = /*#__PURE__*/function () {
  function Game(deckSize) {
    var _this = this;

    _classCallCheck(this, Game);

    _defineProperty(this, "handleStart", function () {
      _this.showMessage('the game is a foot');

      _this.start();
    });

    _defineProperty(this, "shuffle", function () {
      _this.showMessage('shuffling ...');

      _this.deck.shuffle();

      _this.showMessage('the deck has been shuffled');
    });

    this.deckSize = deckSize;
    this.deck = new Deck(deckSize);
    this.setupListeners();
    new MessageHandler();
  }

  _createClass(Game, [{
    key: "setupListeners",
    value: function setupListeners() {
      document.getElementById('start').addEventListener('click', this.handleStart);
      document.getElementById('shuffle').addEventListener('click', this.shuffle);
      document.getElementById('finish').addEventListener('click', this.finish);
    }
  }, {
    key: "showMessage",
    value: function showMessage(message) {
      var evt = new CustomEvent('message', {
        detail: {
          message: message
        }
      });
      document.dispatchEvent(evt);
      setTimeout(function () {
        var evt = new CustomEvent('clear-message');
        document.dispatchEvent(evt);
      }, 5000);
    } // start = () => {
    //     console.log('parent start')
    // }

  }, {
    key: "finish",
    value: function finish() {}
  }, {
    key: "addCardToBoard",
    value: function addCardToBoard(card) {
      var deckEl = document.getElementById('deck');
      var cardEl = card.render();
      deckEl.appendChild(cardEl);
    }
  }, {
    key: "showAll",
    value: function showAll() {
      var _this2 = this;

      // var deckEl = document.getElementById('deck')
      // deckEl.innerHTML = ''
      this.cards.forEach(function (card) {
        _this2.addCardToBoard(card); // const cardEl = card.render()
        // deckEl.appendChild(cardEl)

      });
    }
  }]);

  return Game;
}();
//# sourceMappingURL=game.js.map
