"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HttpStatus = require('http-status');

var defaultResponse = function defaultResponse(data) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : HttpStatus.OK;
  return {
    data: data,
    status: status
  };
};

var errorResponse = function errorResponse(message) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : HttpStatus.BAD_REQUEST;
  return defaultResponse({
    error: message,
    status: status
  }, status);
};

var RoomsController =
/*#__PURE__*/
function () {
  function RoomsController(modelRoom) {
    _classCallCheck(this, RoomsController);

    this.Rooms = modelRoom;
  }

  _createClass(RoomsController, [{
    key: "getAll",
    value: function getAll() {
      return this.Rooms.findAll({}).then(function (rs) {
        return defaultResponse(rs);
      })["catch"](function (e) {
        return errorResponse(e.message);
      });
    }
  }, {
    key: "getById",
    value: function getById(params) {
      return this.Rooms.findOne({
        where: params
      }).then(function (rs) {
        return rs;
      })["catch"](function (e) {
        return e;
      });
    }
  }, {
    key: "create",
    value: function create(data) {
      return this.Rooms.create(data).then(function (rs) {
        return rs;
      })["catch"](function (e) {
        return e;
      });
    }
  }, {
    key: "update",
    value: function update(data, params) {
      return this.Rooms.update(data, {
        where: params
      }).then(function (rs) {
        return rs;
      })["catch"](function (e) {
        return e;
      });
    }
  }, {
    key: "delete",
    value: function _delete(params) {
      return this.Rooms.destroy({
        where: params
      }).then(function (rs) {
        return rs;
      })["catch"](function (e) {
        return e;
      });
    }
  }]);

  return RoomsController;
}();

module.exports = RoomsController;