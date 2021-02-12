"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("./Util");
Util_1.define(Math, {
    randomBetween: function (min, max) {
        return Math.random() * (max - min) + min;
    },
    randomIntBetween: function (min, max) {
        return Math.round(Math.randomBetween(min, max));
    },
});
