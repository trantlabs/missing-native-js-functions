import { define } from "./Util";

define(Number.prototype, {
	toInt: function () {
		return Math.floor(this);
	},
});

declare global {
	interface Number {
		/**
		 * Converts the current number to an integer (rounds up)
		 * @returns {number} rounded number
		 * @example
		 * 5102.039.toInt() // returns: 5102
		 * 0.039.toInt() // returns: 0
		 */
		toInt(): number;
	}
}
