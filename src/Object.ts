import deepmerge from "deepmerge";

Object.defineProperties(Object.prototype, {
	forEach: {
		enumerable: false,
		configurable: true,
		writable: true,
		value: function (callback: (element: any, index?: string) => any) {
			// @ts-ignore
			return Object.keys(this).forEach((key) => callback(this[key], key));
		},
	},
	map: {
		enumerable: false,
		configurable: true,
		writable: true,
		value: function (callback: (element: any, index?: string) => any) {
			let obj = {};

			Object.keys(this).forEach((key) => {
				// @ts-ignore
				obj[key] = callback(this[key], key);
			});
			return obj;
		},
	},
	equals: {
		enumerable: false,
		configurable: true,
		writable: true,
		value: function (other: any): boolean {
			return JSON.stringify(this) === JSON.stringify(other);
		},
	},
	keys: {
		enumerable: false,
		configurable: true,
		writable: true,
		value: function (): any[] {
			return Object.keys(this);
		},
	},
	values: {
		enumerable: false,
		configurable: true,
		writable: true,
		value: function (): any[] {
			return Object.values(this);
		},
	},
	entries: {
		enumerable: false,
		configurable: true,
		writable: true,
		value: function (): any[] {
			return Object.entries(this);
		},
	},
	merge: {
		enumerable: false,
		configurable: true,
		writable: true,
		value: function (obj: any): any {
			// this will overwrite if obj has the same property
			return deepmerge(obj, this);
		},
	},
});

// @ts-ignore
Object.equals = (x: any, y: any): boolean => x.equals(y);

declare global {
	interface Object {
		forEach(callback: (element: any, index?: string) => any): void;
		map(callback: (element: any, index?: string) => any): this;
		// @ts-ignore
		static equals(x: any, y: any): boolean;
		equals(other: any): boolean;
		keys(): string[];
		values(): any[];
		entries(): Array<[string, any]>;
		merge(obj: any): any;
	}
}
export {};
