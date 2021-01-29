"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var deepmerge_1 = __importDefault(require("deepmerge"));
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
    merge: {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (obj) {
            // this will overwrite if obj has the same property
            return deepmerge_1.default(obj, this);
        },
    },
});
// @ts-ignore
Object.equals = function (x, y) { return x.equals(y); };
