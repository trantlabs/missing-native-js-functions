"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("./Util");
Util_1.define(String.prototype, {
    capitalize: function () {
        return this.slice(0, 1).toUpperCase() + this.slice(1);
    },
    title: function () {
        return this.split(" ")
            .map(function (element) {
            return element.capitalize();
        })
            .join(" ");
    },
    replaceAll: function (find, replace) {
        return this.replace(new RegExp(escapeRegExp(find), "g"), replace);
    },
    similarity: function (second) {
        var first = this.replace(/\s+/g, "");
        second = second.replace(/\s+/g, "");
        if (!first.length && !second.length)
            return 1; // if both are empty strings
        if (!first.length || !second.length)
            return 0; // if only one is empty string
        if (first === second)
            return 1; // identical
        if (first.length === 1 && second.length === 1)
            return 0; // both are 1-letter strings
        if (first.length < 2 || second.length < 2)
            return 0; // if either is a 1-letter string
        var firstBigrams = new Map();
        var lowBigrams = new Map();
        for (var i = 0; i < first.length - 1; i++) {
            var bigram = first.substring(i, i + 2);
            var count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;
            var countLow = lowBigrams.has(bigram.toLowerCase()) ? lowBigrams.get(bigram.toLowerCase()) + 1 : 1;
            lowBigrams.set(bigram.toLowerCase(), countLow);
            firstBigrams.set(bigram, count);
        }
        var intersectionSize = 0;
        for (var i = 0; i < second.length - 1; i++) {
            var bigram = second.substring(i, i + 2);
            var count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;
            var countLow = firstBigrams.has(bigram.toLowerCase()) ? firstBigrams.get(bigram.toLowerCase()) : 0;
            if (count > 0) {
                firstBigrams.set(bigram, count - 1);
                intersectionSize++;
            }
            if (countLow > 0) {
                firstBigrams.set(bigram.toLowerCase(), countLow - 1);
                intersectionSize += 0.9;
            }
        }
        return (2.0 * intersectionSize) / (first.length + second.length - 2);
    },
    join: function (iterate) {
        return iterate.join(this);
    },
    partition: function (seperator) {
        if (!this.includes(seperator)) {
            return [this];
        }
        var returnArray = [];
        var splitarray = this.split(seperator);
        for (var i = 0; i < splitarray.length; i++) {
            returnArray.push(splitarray[i]);
            if (i != splitarray.length - 1)
                returnArray.push(seperator);
        }
        return returnArray;
    },
    toNumber: function () {
        return Number(this);
    },
    toBigInt: function () {
        try {
            return BigInt(this);
        }
        catch (error) {
            return NaN;
        }
    },
    equalsIgnoreCase: function (compareString) {
        return this.toLowerCase() === compareString.toLowerCase();
    },
    count: function (countString) {
        return this.split(countString).length - 1;
    },
    swapcase: function () {
        return this.split("")
            .map(function (char) {
            if (char === char.toUpperCase())
                return char.toLowerCase();
            return char.toUpperCase();
        })
            .join("");
    },
    toObject: function () {
        return JSON.parse(this);
    },
});
// copied from https://github.com/aceakash/string-similarity/blob/master/src/index.js
// MIT License Copyright (c) 2018 Akash Kurdekar
function escapeRegExp(str) {
    return str.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
//# sourceMappingURL=String.js.map