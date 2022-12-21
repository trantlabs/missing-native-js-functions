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
		 */
		caught(): this;
	}
}

export {};
