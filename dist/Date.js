"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("./Util");
Util_1.define(Date, {
    nowSeconds: function () {
        return Math.floor(Date.now() / 1000);
    },
});
