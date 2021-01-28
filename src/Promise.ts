Object.defineProperties(Promise.prototype, {
	caught: {
		enumerable: false,
		configurable: true,
		writable: true,
		value: function () {
			return this.catch(console.error);
		},
	},
});

declare global {
	interface Promise<T> {
		caught(): void;
	}
}

export {};
