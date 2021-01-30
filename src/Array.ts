import { type } from "os";

Object.defineProperties(Array.prototype, {
	remove: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function <T>(this: T[], elem: T): T[] {
			// do not use filter to modify current array
			const index = this.indexOf(elem);
			if (index === -1) return this;

			this.splice(index, 1);
			return this; //.filter((e) => e !== elem);
		},
	},
	insert: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function <T>(elem: T, index: number) {
			if (!index) index = this.length;
			return this.splice(index, 0, elem);
		},
	},
	flat: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function (depth: number = 1) {
			return this.reduce(
				(acc: any, val: any) =>
					(Array.isArray(val) && depth >= 1) || depth === -1
						? acc.concat(val.flat(depth--))
						: acc.concat(val),
				[]
			);
		},
	},
	last: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function () {
			return this[this.length - 1];
		},
	},
	first: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function () {
			return this[0];
		},
	},
	unique: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function () {
			return [...new Set(this)];
		},
	},
	random: {
		enumerable: false,
		value: function () {
			return this[Math.floor(Math.random() * this.length)];
		},
	},
	shuffle: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function () {
			for (let i = this.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[this[i], this[j]] = [this[j], this[i]];
			}
			return this;
		},
	},
	findMap: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function <T>(predicate: (value: T, index: number, obj: T[]) => any | undefined): number {
			for (let i = 0; i < this.length; i++) {
				var result = predicate(this[i], i, this);
				if (result) {
					return result;
				}
			}
		},
	},
	findLast: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function <T>(predicate: (value: T, index: number, obj: T[]) => any | undefined): T | undefined {
			for (let i = this.length; i >= 0; i--) {
				if (predicate(this[i], i, this)) return this[i];
			}
			return null;
		},
	},
	findLastIndex: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function <T>(predicate: (value: T, index: number, obj: T[]) => any | undefined): number {
			for (let i = this.length - 1; i >= 0; i--) {
				if (predicate(this[i], i, this)) return i;
			}
			return -1;
		},
	},
	count: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function (search: RegExp | any) {
			const nativeTypes = ["string", "number", "object", "array"];
			let count: number = 0;

			this.forEach((element: any) => {
				if (element === search) {
					count++;
					return;
				}

				// check if searchparam is a native class (l: 99)
				if (typeof search == "function") {
					const className = search.name.toLowerCase();
					if (nativeTypes.includes(className) && typeof element === className) {
						count++;
						return;
					} else if (element instanceof search) {
						count++;
						return;
					}
				}

				// if element of array is a string: allow regex patterns
				if (typeof element === "string") {
					if (element.match(search)) {
						count++;
						return;
					}
				}
			});
			return count;
		},
	},
	missing: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function <T>(arr: T[]): T[] {
			return this.filter((x: any) => !arr.includes(x));
		},
	},
	similarities: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function <T>(arr: T[]): T[] {
			return this.filter((x: any) => arr.includes(x));
		},
	},
});

declare global {
	interface Array<T> {
		remove(o: T): this;
		flat(depth?: number): T;
		first(): T | undefined;
		last(): T | undefined;
		findLastIndex(predicate: (value: T, index: number, obj: T[]) => any | undefined): number;
		findLast(predicate: (value: T, index: number, obj: T[]) => any | undefined): T | undefined;
		findMap(predicate: (value: T, index: number, obj: T[]) => any | undefined): any | undefined;
		random(): T | undefined;
		unique(): T[];
		shuffle(): T[];
		insert(elem: T, index: number): T[];
		count(search: RegExp | any): number;
		similarities(arr: T[]): T[];
		missing(arr: T[]): T[];
	}
}

export {};
