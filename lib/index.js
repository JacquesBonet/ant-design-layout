"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function get() {
    return _col["default"];
  }
});
Object.defineProperty(exports, "Grid", {
  enumerable: true,
  get: function get() {
    return _grid["default"];
  }
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _row["default"];
  }
});

var _col = _interopRequireDefault(require("./col"));

var _grid = _interopRequireDefault(require("./grid"));

var _row = _interopRequireDefault(require("./row"));

/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
var ENV = process.env.NODE_ENV;

if (ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && // eslint-disable-line no-console
typeof window !== 'undefined') {
  // eslint-disable-next-line no-console
  console.warn('You are using a whole package of antd, ' + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}
/* @remove-on-es-build-end */