import { define } from "./Util";

define(Array.prototype, {
	remove: function <T>(this: T[], elem: T): T[] {
		// do not use filter to modify current array
		const index = this.indexOf(elem);
		if (index === -1) return this;

		this.splice(index, 1);
		return this; // .filter((e) => e !== elem);
	},

	insert: function <T>(elem: T, index: number) {
		if (!index) index = this.length;
		this.splice(index, 0, elem);
		return this;
	},

	flat: function (depth: number = 1) {
		return this.reduce(
			(acc: any, val: any) =>
				(Array.isArray(val) && depth >= 1) || depth === -1 ? acc.concat(val.flat(depth--)) : acc.concat(val),
			[]
		);
	},

	last: function () {
		return this[this.length - 1];
	},

	first: function () {
		return this[0];
	},

	unique: function <T>(predicate?: (value: T, index: number, obj: T[]) => any) {
		if (predicate) {
			return [
				...new Map(
					this.map((item: T, index: number, obj: T[]) => [predicate(item, index, obj), item])
				).values(),
			];
		}
		return [...new Set(this)];
	},

	random: function () {
		return this[Math.floor(Math.random() * this.length)];
	},

	shuffle: function () {
		for (let i = this.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this[i], this[j]] = [this[j], this[i]];
		}
		return this;
	},

	findMap: function <T>(predicate: (value: T, index: number, obj: T[]) => any | undefined): number {
		for (let i = 0; i < this.length; i++) {
			const result = predicate(this[i], i, this);
			if (result) {
				return result;
			}
		}
	},

	findLast: function <T>(predicate: (value: T, index: number, obj: T[]) => any | undefined): T | undefined {
		for (let i = this.length; i >= 0; i--) {
			if (predicate(this[i], i, this)) return this[i];
		}
		return null;
	},

	findLastIndex: function <T>(predicate: (value: T, index: number, obj: T[]) => any | undefined): number {
		for (let i = this.length - 1; i >= 0; i--) {
			if (predicate(this[i], i, this)) return i;
		}
		return -1;
	},

	count: function (search: RegExp | any) {
		const nativeTypes = ["string", "number", "object", "array"];
		let count: number = 0;

		this.forEach((element: any) => {
			if (element === search) {
				count++;
				return;
			}

			// check if searchparam is a native class (l: 99)
			if (typeof search === "function") {
				const className = search.name.toLowerCase();
				// eslint-disable-next-line valid-typeof
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
				}
			}
		});
		return count;
	},

	missing: function <T>(arr: T[]): T[] {
		return this.filter((x: any) => !arr.includes(x));
	},

	similarities: function <T>(arr: T[]): T[] {
		return this.filter((x: any) => arr.includes(x));
	},
});

declare global {
	interface Array<T> {
		/**
		 * Removes the given elements from the array
		 * @param {elem} o elements to remove
		 * @returns modified array
		 */
		remove(o: T): this;
		/**
		 * Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
		 */
		flat(depth?: number): T;
		/**
		 * Returns the first element
		 */
		first(): T | undefined;
		/**
		 * Returns the last element
		 */
		last(): T | undefined;
		/**
		 * Returns the index of the element which passes the predicate, iterates from the right to the left
		 */
		findLastIndex(predicate: (value: T, index: number, obj: T[]) => any | undefined): number;
		/**
		 * Returns the the element which passes the predicate, iterates from the right to the left
		 */
		findLast(predicate: (value: T, index: number, obj: T[]) => any | undefined): T | undefined;
		/**
		 * 
		 */
		findMap(predicate: (value: T, index: number, obj: T[]) => any | undefined): any | undefined;
		/**
		 * Returns a random value of the array
		 */
		random(): T | undefined;
		/**
		 * Returns the unique items of the array
		 */
		unique(predicate?: (value: T, index: number, obj: T[]) => any | undefined): T[];
		/**
		 * Randomizes the item positions in the array
		 * @returns modified array
		 */
		shuffle(): T[];
		/**
		 * Inserts the element at the index
		 * @param {elem} elem element to insert
		 * @param {index} index index at which the element will be inserted
		 * @returns modified array
		 */
		insert(elem: T, index: number): this;
		/**
		 * Returns total of found items for specified search
		 * @param {search} search
		 */
		count(search: RegExp | any): number;
		/**
		 * Returns a new array with elements that are both in this array and in the comparison array
		 */
		similarities(arr: T[]): T[];
		/**
		 * Returns a new array with elements that are in this array, but are missing in the comparison array
		 */
		missing(arr: T[]): T[];
	}
}

export {};
