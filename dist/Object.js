"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperties(Object.prototype, {
    forEach: {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (callback) {
            var _this = this;
            // @ts-ignore
            return Object.keys(this).forEach(function (key) { return callback(_this[key], key); });
        },
    },
    map: {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (callback) {
            var _this = this;
            var obj = {};
            Object.keys(this).forEach(function (key) {
                // @ts-ignore
                obj[key] = callback(_this[key], key);
            });
            return obj;
        },
    },
    equals: {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (other) {
            return JSON.stringify(this) === JSON.stringify(other);
        },
    },
    keys: {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return Object.keys(this);
        },
    },
    values: {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return Object.values(this);
        },
    },
    entries: {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return Object.entries(this);
        },
    },
});
// @ts-ignore
Object.equals = function (x, y) { return x.equals(y); };
