"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function isPositiveNumber(value) {
    return !isNaN(parseInt(value)) && value > 0 ? true : false;
}

var perim = function perim(a, b) {
    return 2 * (a + b);
};

var square = function square(a, b) {
    return a * b;
};

exports.perim = perim;
exports.square = square;