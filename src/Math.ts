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
		randomBetween(min: number, max: number): number;
		randomIntBetween(min: number, max: number): number;
	}
}
