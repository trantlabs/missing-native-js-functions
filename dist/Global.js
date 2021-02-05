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
// @ts-ignore
var Global;
try {
    Global = window;
}
catch (error) {
    Global = global;
}
if (!Global.atob)
    Global.atob = function (data) { return Buffer.from(data, "base64").toString("utf8"); };
if (!Global.btoa)
    Global.btoa = function (data) { return Buffer.from(data.toString(), "utf8").toString("base64"); };
if (!Global.setIntervalNow) {
    Global.setIntervalNow = function (callback, milliseconds) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var func = callback.bind.apply(callback, __spread([this], args));
        func();
        return setInterval(func, milliseconds);
    };
}
