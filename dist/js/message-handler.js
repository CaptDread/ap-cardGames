"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MessageHandler = /*#__PURE__*/function () {
  function MessageHandler() {
    var _this = this;

    _classCallCheck(this, MessageHandler);

    _defineProperty(this, "clearMessage", function () {
      _this.messageEl.innerText = '';
    });

    _defineProperty(this, "handleMessage", function (evt) {
      var message = evt.detail.message;
      _this.messageEl.innerText = message;
    });

    this.messageEl = document.getElementById('message');
    this.setupListener();
  }

  _createClass(MessageHandler, [{
    key: "setupListener",
    value: function setupListener() {
      document.addEventListener('message', this.handleMessage);
      document.addEventListener('clear-message', this.clearMessage);
    }
  }]);

  return MessageHandler;
}();
//# sourceMappingURL=message-handler.js.map
