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
		value: function <T>(
			predicate: (value: T, index: number, obj: T[]) => unknown,
			map: (value: T) => any
		): any | undefined {
			let found = this.find(predicate);
			return found !== undefined ? map(found) : found;
		},
	},
	count: {
		enumerable: false,
		writable: true,
		configurable: true,
		value: function (search: RegExp | any) {
			let i: number = 0;
			this.forEach((element: any) => {
				if (element === search) {
					i++;
					return;
				}
				if (typeof search == "function") {
					if (typeof element === search.toString().split(" ")[1].slice(0, -2).toLowerCase()) {
						i++;
						return;
					}
				}
				if (typeof element === "string") {
					if (element.match(search)) {
						i++;
						return;
					}
				}
			});
			return i;
		},
	},
});

declare global {
	interface Array<T> {
		remove(o: T): this;
		flat(depth?: number): T;
		first(): T | undefined;
		last(): T | undefined;
		findMap<T>(predicate: (value: T, index: number, obj: T[]) => unknown, map: (value: T) => any): any | undefined;
		random(): T | undefined;
		unique(): T[];
		shuffle(): T[];
		insert(elem: T, index: number): T[];
		count(search: RegExp | any): number;
	}
}

export {};
