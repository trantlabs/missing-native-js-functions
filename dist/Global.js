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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
try {
    if (!globalThis.atob)
        globalThis.atob = function (data) { return Buffer.from(data, "base64").toString("utf8"); };
    if (!globalThis.btoa)
        globalThis.btoa = function (data) { return Buffer.from(data.toString(), "utf8").toString("base64"); };
    if (!globalThis.setIntervalNow) {
        globalThis.setIntervalNow = function (callback, milliseconds) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var func = callback.bind.apply(callback, __spreadArray([this], __read(args), false));
            func();
            return setInterval(func, milliseconds);
        };
    }
    if (!globalThis.sleep)
        globalThis.sleep = function (ms) { return new Promise(function (res) { return setTimeout(res, ms); }); };
}
catch (error) { }
//# sourceMappingURL=Global.js.map