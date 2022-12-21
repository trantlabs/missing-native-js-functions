import { define } from "./Util";

define(Object.prototype, {
	forEach: function (callback: (element: any, index?: string) => any) {
		// @ts-ignore
		return Object.keys(this).forEach((key) => callback(this[key], key));
	},
	map: function (callback: (element: any, index?: string) => any) {
		const obj = {};

		Object.keys(this).forEach((key) => {
			// @ts-ignore
			obj[key] = callback(this[key], key);
		});
		return obj;
	},
	keys: function (): any[] {
		return Object.keys(this);
	},
	entries: function (): any[] {
		return Object.entries(this);
	},
	merge: function (obj: any) {
		// this will overwrite if obj has the same property
		return mergeDeep(obj || {}, this);
	},
	stringify: function () {
		return JSON.stringify(this);
	},
});

function mergeDeep(target: any, ...sources: any): any {
	if (!sources.length) return target;
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} });
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return mergeDeep(target, ...sources);
}

function isObject(item: any) {
	return item && typeof item === "object" && !Array.isArray(item) && item?.constructor?.name === "Object";
}

declare global {
	interface Object {
        /**
         * Performs the specified action for each element in an array.
         * @param {} callback function that accepts the following arguments: 
         *     - value
         *     - key
         * @example
         * {a: 1, b: 2, c: 3}.forEach((v,k)=>console.log(`${k}: ${v}`));
         * // a: 1
         * // b: 2
         * // c: 3
         */
		forEach(callback: (element: any, index?: string) => any): void;
        /**
         * Calls a defined callback function on each element of an object, and returns an object that contains the results.
         * @param {} callback function that accepts the following arguments: 
         *     - value
         *     - key
         * @example
         * {a: 1, b: 2, c: 3}.map((v,k) => v*25); // {a: 25, b: 50, c: 75}
         */
		map(callback: (element: any, index?: string) => any): this;
        /**
         * Returns an array consisting of the keys of the object
         * @returns {string[]} array containing the keys of the object
         * @example
         * {a: 1, b: 2, c: 3}.keys() // ["a", "b", "c"]
         */
		keys(): string[];
        /**
         * Returns an array consisting of the key value pairs of the object
         * @returns {string[]} array containing the key value paris of the object
         * @example
         * {a: 1, b: 2, c: 3}.entries() // [["a", 1], ["b", 2], ["c", 3]]
         */
		entries(): Array<[string, any]>;
        /**
         * Merge the original object with the given object.
         * Keys will be overwritten if they occure in both objects, the last occurrence will be kept in the resulting object
         * @param {object} obj
         * @returns {any}
         * @example
         * {a: 1, b: 2, c: 3}.merge({d: 4, e: 5, f: 6}) // {a:1, b:2, c: 3, d: 4, e: 5, f: 6}
         * {a: 1, b: 2, c: 3}.merge({a: 4}) // {a:4, b:2, c: 3}
         */
		merge(obj: any): any;
        /**
         * Convert the object to its string representation, uses JSON.stringify under the hood
         * @returns {string}
         * @example
         * {a: 1, b: 2, c: 3}.stringify() // "{\"a\":1, \"b\":2, \"c\":3}"
         */
		stringify(): string;
	}

	interface ObjectConstructor {}
}
export {};
