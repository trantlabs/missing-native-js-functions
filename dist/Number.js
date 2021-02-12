"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("./Util");
Util_1.define(Number.prototype, {
    toInt: function () {
        return Math.floor(this);
    },
});
