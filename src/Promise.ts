import { define } from "./Util";

define(Promise.prototype, {
	caught: function () {
		this.catch(console.error);
		return this;
	},
});

declare global {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface Promise<T> {
		/**
		 * Catches all errors in the console without the need to specify a function, similar to `promise.catch(console.error)`
		 * @example
		 * new Promise((res, rej) => {
		 *	rej("Promised rejected, but caught in console.error");
		 *}).caught(); // will not throw the promise, but log the error in the console
		 */
		caught(): this;
	}
}

export {};
