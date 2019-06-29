"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 5000;
app.use(_express["default"]["static"]((0, _path.join)(__dirname, '/../client/build')));
var products = [{
  id: 1,
  name: 'Tacco',
  price: 20,
  image: 'https://lorempixel.com/output/food-q-c-640-480-1.jpg'
}, {
  id: 2,
  name: 'Fajita',
  price: 25,
  image: 'https://lorempixel.com/output/food-q-c-640-480-2.jpg'
}, {
  id: 3,
  name: 'Burrito',
  price: 23,
  image: 'https://lorempixel.com/output/food-q-c-640-480-3.jpg'
}];
app.get('/api/products', function (req, res) {
  return res.json(products);
});
app.listen(port, function () {
  return console.log("server at http://localhost:".concat(port));
});