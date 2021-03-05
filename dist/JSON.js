"use strict";
var getCircularReplacer = function (other) {
    var seen = new WeakSet();
    return function (key, value) {
        if (typeof value === "bigint")
            value = value.toString();
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        if (other && typeof other === "function")
            return other(value);
        return value;
    };
};
var stringify = JSON.stringify;
JSON.stringify = function (value, replacer, space) {
    return stringify(value, getCircularReplacer(replacer), space);
};
//# sourceMappingURL=JSON.js.map