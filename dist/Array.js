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
var Util_1 = require("./Util");
(0, Util_1.define)(Array.prototype, {
    remove: function (elem) {
        // do not use filter to modify current array
        var index = this.indexOf(elem);
        if (index === -1)
            return this;
        this.splice(index, 1);
        return this; //.filter((e) => e !== elem);
    },
    insert: function (elem, index) {
        if (!index)
            index = this.length;
        this.splice(index, 0, elem);
        return this;
    },
    flat: function (depth) {
        if (depth === void 0) { depth = 1; }
        return this.reduce(function (acc, val) { return ((Array.isArray(val) && depth >= 1) || depth === -1 ? acc.concat(val.flat(depth--)) : acc.concat(val)); }, []);
    },
    last: function () {
        return this[this.length - 1];
    },
    first: function () {
        return this[0];
    },
    unique: function (predicate) {
        if (predicate) {
            return __spreadArray([], __read(new Map(this.map(function (item, index, obj) { return [predicate(item, index, obj), item]; })).values()), false);
        }
        return __spreadArray([], __read(new Set(this)), false);
    },
    random: function () {
        return this[Math.floor(Math.random() * this.length)];
    },
    shuffle: function () {
        var _a;
        for (var i = this.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = __read([this[j], this[i]], 2), this[i] = _a[0], this[j] = _a[1];
        }
        return this;
    },
    findMap: function (predicate) {
        for (var i = 0; i < this.length; i++) {
            var result = predicate(this[i], i, this);
            if (result) {
                return result;
            }
        }
    },
    findLast: function (predicate) {
        for (var i = this.length; i >= 0; i--) {
            if (predicate(this[i], i, this))
                return this[i];
        }
        return null;
    },
    findLastIndex: function (predicate) {
        for (var i = this.length - 1; i >= 0; i--) {
            if (predicate(this[i], i, this))
                return i;
        }
        return -1;
    },
    count: function (search) {
        var nativeTypes = ["string", "number", "object", "array"];
        var count = 0;
        this.forEach(function (element) {
            if (element === search) {
                count++;
                return;
            }
            // check if searchparam is a native class (l: 99)
            if (typeof search == "function") {
                var className = search.name.toLowerCase();
                if (nativeTypes.includes(className) && typeof element === className) {
                    count++;
                    return;
                }
                else if (element instanceof search) {
                    count++;
                    return;
                }
            }
            // if element of array is a string: allow regex patterns
            if (typeof element === "string") {
                if (element.match(search)) {
                    count++;
                    return;
                }
            }
        });
        return count;
    },
    missing: function (arr) {
        return this.filter(function (x) { return !arr.includes(x); });
    },
    similarities: function (arr) {
        return this.filter(function (x) { return arr.includes(x); });
    },
});
//# sourceMappingURL=Array.js.map