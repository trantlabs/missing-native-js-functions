import { define } from "./Util";

define(String.prototype, {
	capitalize: function () {
		return this.slice(0, 1).toUpperCase() + this.slice(1);
	},
	title: function () {
		return this.split(" ")
			.map((element: string) => {
				return element.capitalize();
			})
			.join(" ");
	},
	replaceAll: function (find: string, replace: string) {
		return this.replace(new RegExp(escapeRegExp(find), "g"), replace);
	},
	similarity: function (s2: string) {
		var s1 = this.toLowerCase();
		s2 = s2.toLowerCase();

		if (s1.length < s2.length) {
			s1 = s2;
			s2 = this;
		}
		var longerLength = s1.length;
		if (longerLength == 0) {
			return 1.0;
		}

		var costs = new Array();
		for (var i = 0; i <= s1.length; i++) {
			var lastValue = i;
			for (var j = 0; j <= s2.length; j++) {
				if (i == 0) costs[j] = j;
				else {
					if (j > 0) {
						var newValue = costs[j - 1];
						if (s1.charAt(i - 1) != s2.charAt(j - 1))
							newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
						costs[j - 1] = lastValue;
						lastValue = newValue;
					}
				}
			}
			if (i > 0) costs[s2.length] = lastValue;
		}

		return (longerLength - costs[s2.length]) / parseFloat(longerLength);
	},
	join: function (iterate: string[]) {
		if (typeof iterate === "string") return iterate;
		return iterate.join(this);
	},
	partition: function (seperator: string) {
		if (!this.includes(seperator)) {
			return [this];
		}
		const returnArray: string[] = [];
		const splitarray: string[] = this.split(seperator);
		for (let i = 0; i < splitarray.length; i++) {
			returnArray.push(splitarray[i]);
			if (i !== splitarray.length - 1) returnArray.push(seperator);
		}
		return returnArray;
	},
	toNumber: function () {
		return Number(this);
	},
	toBigInt: function () {
		try {
			return BigInt(this);
		} catch (error) {
			return NaN;
		}
	},
	equalsIgnoreCase: function (compareString: String) {
		return this.toLowerCase() === compareString.toLowerCase();
	},
	count: function (countString: string) {
		return this.split(countString).length - 1;
	},
	swapcase: function () {
		return this.split("")
			.map((char: string) => {
				if (char === char.toUpperCase()) return char.toLowerCase();
				return char.toUpperCase();
			})
			.join("");
	},
	toObject: function () {
		return JSON.parse(this);
	},
	toBoolean: function () {
		switch (this.toLowerCase().trim()) {
			case "true":
			case "yes":
			case "1":
				return true;
			case "false":
			case "no":
			case "0":
			case null:
				return false;
			default:
				return Boolean(this);
		}
	},
});

// copied from https://github.com/aceakash/string-similarity/blob/master/src/index.js
// MIT License Copyright (c) 2018 Akash Kurdekar
function escapeRegExp(str: string) {
	return str.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
declare global {
	interface String {
		/**
		 * Returns a new string with the first character capitalized
		 * @returns {string} modified string
		 * @example
		 * "capitalize this string".capitalize(); // returns: "Capitalize this string"
		 */
		capitalize(): string;
		/**
		 * Replace all occurrences of find in the string with replace
		 * @returns {string} modified string
		 * @example
		 * "i iii iiiii".replaceAll("i", "I"); // returns: I III IIIII
		 */
		replaceAll(search: string, replace: string): string;
		/**
		 * Returns a value between 0 (different) and 1 (same) indicating how similar the string is to compare
		 * @returns {number} 0 =< x =< 1
		 * @param {string} compare string to compare the original to
		 * @example
		 * "this is a test".similarity("this is a test"); // returns: 1
		 * "this string is very similiar".similarity("this string should be very smiliar"); // returns: 1.3411764705882347
		 * "this string is not similiar".similarity(""); // returns: 0
		 */
		similarity(compare: string): number;
		/**
		 * Returns the array values separated by the original string
		 * @param {string[]} iterate array to join together separated the original string
		 * @returns {string} joined string
		 * @example
		 * " ".join(["git", "commit", "-m", "feat(util): updated context"]); // returns: git commit -m "feat(util): updated context"
		 * ",".join(["comma", "separated", "value"]); // returns: comma,separated,value
		 */
		join(iterate: string[]): string;
		/**
		 * Returns split array, but includes separators
		 * @param {string} separator
		 * @returns {string[]} split array, including separator
		 * @example
		 * "2022-12-21".partition("-"); // returns: ["2022", "-", "12", "-", "21"]
		 */
		partition(separator: string): string[];
		/**
		 * Converts the given string to a number, if parsing fails returns Nan
		 * @returns {number} parsed number
		 * @example
		 * "512".toNumber(); // returns: 512
		 * "5.12".toNumber(); // returns: 5.12
		 * "5..12".toNumber(); // returns: Nan
		 */
		toNumber(): number;
		/**
		 * Converts string to BigInt, if parsing fails returns NaN
		 * @returns {bigint} parsed bigint
		 * @example
		 * "this is 3948653498563498563489563234986n as a bigint".toBigInt(); // returns: 3948653498563498563489563234986n
		 * "this is NaN".toBigInt(); // returns: Nan
		 */
		toBigInt(): bigint;
		/**
		 * Compares given string to compareString, ignores cases
		 * @param {string} compareString string to compare the original against
		 * @return {boolean}
		 * @example
		 * "TEST".equalsIgnoreCase("test") // returns: true
		 * "teST".equalsIgnoreCase("test") // returns: true
		 * "".equalsIgnoreCase("test") // returns: false
		 */
		equalsIgnoreCase(compareString: string): boolean;
		/**
		 * Returns total of found items for specified search
		 * @param {RegExp | string} countString element to be counted
		 * @returns {number} amount of found matching elements
		 * @example
		 * "test test test example example".count("test") // returns: 3
		 * "example example".count("test") // returns: 0
		 */
		count(countString: RegExp | any): number;
		/**
		 * Swaps the case for all chars in the string
		 * @returns {string} string with swapped cases
		 * @example
		 * "This Should Be Case Swapped".swapcase() // returns: tHIS sHOULD bE cASE sWAPPED
		 * "test".swapcase() // returns: TEST
		 * "TEST".swapcase() // returns: test
		 */
		swapcase(): string;
		/**
		 * Returns a new string in which every first character of a word is capizalized
		 * @returns {string} string in titlecase format
		 * @example
		 * "convert this string to title case".title(); // returns: "Convert This String To Title Case"
		 */
		title(): string;
		/**
		 * Parses the string to an object, uses JSON.parse() under the hood.
		 * @returns {object} parsed JSON
		 * @example
		 * '{"user": "name"}'.toObject(); // returns {user: "name"}
		 * "{\"user\": \"name\"}".toObject(); // returns {user: "name"}
		 * "{'user': 'name'}".toObject(); // throws error
		 * "test".toObject(); // throws error
		 */
		toObject(): object;
		/**
		 * Converts the string to a boolean
		 * @returns {boolean} parsed boolean
		 * @example
		 * "yes".toBoolean() // returns true
		 * "1".toBoolean() // returns true
		 * "true".toBoolean() // returns true
		 * "no".toBoolean() // returns false
		 * "0".toBoolean() // returns false
		 * "false".toBoolean() // returns false
		 */
		toBoolean(): boolean;
	}
}
export {};
