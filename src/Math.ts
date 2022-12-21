import { define } from "./Util";

define(Math, {
	randomBetween: function (min: number, max: number) {
		return Math.random() * (max - min) + min;
	},
	randomIntBetween: function (min: number, max: number) {
		return Math.round(Math.randomBetween(min, max));
	},
});

declare global {
	interface Math {
    /**
     * Generates a random floating point number between min and max
     * @param {number} min
     * @param {number} max
     * @returns {number} min < x < max
     * @example
     * let x = Math.randomBetween(0, 1); // 0.0 < x < 1.0
     * x = Math.randomBetween(1, 1590); // 1.0 < x < 1590.0
     */
		randomBetween(min: number, max: number): number;
    /**
     * Generates a random integer between min and max
     * @param {number} min
     * @param {number} max
     * @returns {number} min < x < max
     * @example
     * let x = Math.randomBetween(0, 1); // 0 < x < 1
     * x = Math.randomBetween(1, 1590); // 1 < x < 1590
     */
		randomIntBetween(min: number, max: number): number;
	}
}
