import { define } from "./Util";

define(Array.prototype, {
	remove: function <T>(this: T[], elem: T): T[] {
		// do not use filter to modify current array
		const index = this.indexOf(elem);
		if (index === -1) return this;

		this.splice(index, 1);
		return this;
	},

	insert: function <T>(elem: T, index: number) {
		if (!index) index = this.length;
		this.splice(index, 0, elem);
		return this;
	},

	flat: function <T>(depth: number = 1) {
		return this.reduce(
			(acc: any, val: any) =>
				(Array.isArray(val) && depth >= 1) || depth === -1 ? acc.push(...val.flat(depth--)) : acc.push(val),
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
		 * Removes the given elements from the array, returns modified array
		 * @param {any} o Element
		 * @returns {T} modified array
		 * @example
		 * let a = [1,2,3,4,5];
		 * a.remove(1) // a = [2,3,4,5]
		 */
		remove(o: T): this;
		/**
		 * Returns the modified array with all sub-array elements concatenated into it recursively up to the specified depth.
		 * @param {number=} depth how deep to concatenate
		 * @returns {T} modified array
		 * @example
		 * let a = [
		 *  [0,1]
		 *  [2,3]
		 *  [4,5]
		 * ];
		 * a.flat(); // [0,1,2,3,4,5]
		 */
		flat(depth?: number): T;
		/**
		 * Returns the first element
		 * @returns {T | undefined} first element or undefined if the array is empty
		 * @example
		 * let a = [1,2,3,4,5];
		 * a.first() // 1
		 */
		first(): T | undefined;
		/**
		 * Returns the last element
		 * @returns {T | undefined} last element or undefined if the array is empty
		 * @example
		 * let a = [1,2,3,4,5];
		 * a.last() // 5
		 */
		last(): T | undefined;
		/**
		 * Returns the index of the element which passes the predicate, iterates from the right to the left
		 * @param {} predicate / condition
		 * @returns {number} index of last element which passed predicate
		 * @example
		 * let a = [1,2,3,4,5];
		 * a.findLastIndex(x => x % 2 == 0); // 3 (index of last even number)
		 */
		findLastIndex(predicate: (value: T, index: number, obj: T[]) => any | undefined): number;
		/**
		 * Returns the the element which passes the predicate, iterates from the right to the left
		 * @param {} predicate / condition
		 * @returns {number} last element which passed predicate
		 * @example
		 * let a = [1,2,3,4,5];
		 * a.findLast(x => x % 2 == 0); // 4 (last even number)
		 */
		findLast(predicate: (value: T, index: number, obj: T[]) => any | undefined): T | undefined;
		/**
		 * Searches for an Element in the given array, applies the callback function to this element and returns the result. Acts as a combination of find and map. The function returns the result of the callback for the first element matching the predicate
		 * @param {} predicate callback function
		 * @returns {any | undefined} result of the callback for the found element of the array
		 * @example
		 * let a = [1,2,3,4,5];
		 * a.findMap(x => {
		 *      return x == 3 ? x*25 : false;
		 * }); // returns: 75
		 */
		findMap(predicate: (value: T, index: number, obj: T[]) => any | undefined): any | undefined;
		/**
		 * Returns a random value of the array
		 * @returns {T | undefined} random value of array
		 * @example
		 * let a = [1,2,3,4,5];
		 * a.random() // 2
		 */
		random(): T | undefined;
		/**
		 * Returns the unique items of the array
		 * @param {} predicate / condition
		 * @returns {T[]}
		 * @example
		 * let a = [1,2,3,4,5];
		 * a.unique() // [1,2,3,4,5]
		 */
		unique(predicate?: (value: T, index: number, obj: T[]) => any | undefined): T[];
		/**
		 * Randomizes the item positions in the array, modifies original array
		 * @returns {T[]} shuffled array
		 * @example
		 * let a = [1,2,3,4,5];
		 * a.shuffle() // a = [2,4,5,1,3]
		 */
		shuffle(): T[];
		/**
		 * Inserts the element at the index, modifies array
		 * @param {number} index index at which the element will be inserted
		 * @returns {T[]} array with inserted element
		 * @example
		 * let a = [1,2,3,4,5];
		 * a.insert(27, 2) // a = [1,2,27,3,4,5]
		 */
		insert(elem: T, index: number): this;
		/**
		 * Returns total of found items for specified search
		 * @param {RegExp | any} search
		 * @returns {number} amount of matching elements in array
		 * @example
		 * let a = [1,2,3,4,5];
		 * a.count(Number) // 5
		 * a.count(String) // 0
		 * a.count(2) // 1
		 */
		count(search: RegExp | any): number;
		/**
		 * Returns a new array with elements that are both in this array and in the comparison array
		 * Returns the intersection of the original and the comparison array
		 * @param {T[]} arr array to compare original to
		 * @returns {T[]} intersection
		 * @example
		 * let a = [1,2,3,4,5];
		 * let b = [3,4,5,6,7];
		 * a.similarities(b); // [3,4,5]
		 */
		similarities(arr: T[]): T[];
		/**
		 * Returns the difference between the original and the comparison array
		 * Returns a new array with elements that are in this array, but are missing in the comparison array
		 * @param {T[]} arr array to compare original to
		 * @returns {T[]} difference
		 * @example
		 * let a = [1,2,3,4,5];
		 * let b = [3,4,5,6,7];
		 * a.missing(b); // [1,2]
		 */
		missing(arr: T[]): T[];
	}
}

export {};
