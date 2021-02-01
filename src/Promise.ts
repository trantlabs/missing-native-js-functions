import { define } from "./Util";

define(Promise.prototype, {
	caught: function () {
		this.catch(console.error);
		return this;
	},
});

declare global {
	interface Promise<T> {
		caught(): this;
	}
}

export {};
