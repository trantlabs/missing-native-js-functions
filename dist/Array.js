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
Object.defineProperties(Array.prototype, {
    remove: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function (elem) {
            // do not use filter to modify current array
            var index = this.indexOf(elem);
            if (index === -1)
                return this;
            this.splice(index, 1);
            return this; //.filter((e) => e !== elem);
        },
    },
    insert: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function (elem, index) {
            if (!index)
                index = this.length;
            return this.splice(index, 0, elem);
        },
    },
    flat: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function (depth) {
            if (depth === void 0) { depth = 1; }
            return this.reduce(function (acc, val) {
                return (Array.isArray(val) && depth >= 1) || depth === -1
                    ? acc.concat(val.flat(depth--))
                    : acc.concat(val);
            }, []);
        },
    },
    last: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function () {
            return this[this.length - 1];
        },
    },
    first: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function () {
            return this[0];
        },
    },
    unique: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function () {
            return __spread(new Set(this));
        },
    },
    random: {
        enumerable: false,
        value: function () {
            return this[Math.floor(Math.random() * this.length)];
        },
    },
    shuffle: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function () {
            var _a;
            for (var i = this.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                _a = __read([this[j], this[i]], 2), this[i] = _a[0], this[j] = _a[1];
            }
            return this;
        },
    },
    findMap: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function (predicate) {
            for (var i = 0; i < this.length; i++) {
                var result = predicate(this[i], i, this);
                if (result) {
                    return result;
                }
            }
        },
    },
});
