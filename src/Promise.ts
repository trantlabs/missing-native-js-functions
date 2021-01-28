Object.defineProperties(Promise.prototype, {
	caught: {
		enumerable: false,
		configurable: true,
		writable: true,
		value: function () {
			this.catch(console.error);
			return this;
		},
	},
});

declare global {
	interface Promise<T> {
		caught(): this;
	}
}

export {};
