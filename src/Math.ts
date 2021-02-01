import { define } from "./Util";

define(Math, {
	randomBetween: function (min: number, max: number) {
		return Math.random() * (max - min) + min;
	},
});

declare global {
	interface Math {
		// @ts-ignore
		static randomBetween(min: number, max: number): number;
	}
}
