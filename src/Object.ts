try {
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
			value: function (obj: any) {
				// this will overwrite if obj has the same property
				return mergeDeep(obj, this);
			},
		},
	});
	// @ts-ignore
	Object.equals = function (x, y) {
		return x.equals(y);
	};
} catch (error) {}

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
