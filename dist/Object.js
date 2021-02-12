"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("./Util");
Util_1.define(Object.prototype, {
    forEach: function (callback) {
        var _this = this;
        // @ts-ignore
        return Object.keys(this).forEach(function (key) { return callback(_this[key], key); });
    },
    map: function (callback) {
        var _this = this;
        var obj = {};
        Object.keys(this).forEach(function (key) {
            // @ts-ignore
            obj[key] = callback(_this[key], key);
        });
        return obj;
    },
    equals: function (other) {
        return JSON.stringify(this) === JSON.stringify(other);
    },
    keys: function () {
        return Object.keys(this);
    },
    values: function () {
        return Object.values(this);
    },
    entries: function () {
        return Object.entries(this);
    },
    merge: function (obj) {
        // this will overwrite if obj has the same property
        return mergeDeep(obj || {}, this);
    },
    stringify: function () {
        return JSON.stringify(this);
    },
});
Util_1.define(Object, {
    equals: function (x, y) {
        return x.equals(y);
    },
});
function mergeDeep(target) {
    var _a, _b;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length)
        return target;
    var source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, (_a = {}, _a[key] = {}, _a));
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, (_b = {}, _b[key] = source[key], _b));
            }
        }
    }
    return mergeDeep.apply(void 0, __spread([target], sources));
}
function isObject(item) {
    var _a;
    return item && typeof item === "object" && !Array.isArray(item) && ((_a = item === null || item === void 0 ? void 0 : item.constructor) === null || _a === void 0 ? void 0 : _a.name) === "Object";
}
