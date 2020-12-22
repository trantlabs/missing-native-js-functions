Array.prototype.remove = function <T>(this: T[], elem: T): T[] {
	// do not use filter to modify current array
	const index = this.indexOf(elem);
	if (index === -1) return this;

	this.splice(index, 1);
	return this; //.filter((e) => e !== elem);
};

Array.prototype.insert = function <T>(elem: T, index: number) {
	if (!index) index = this.length;
	return this.splice(index, 0, elem);
};

Array.prototype.flat = function (depth: number = 1) {
	return this.reduce(
		(acc: any, val: any) =>
			(Array.isArray(val) && depth >= 1) || depth === -1 ? acc.concat(val.flat(depth--)) : acc.concat(val),
		[]
	);
};

Array.prototype.last = function () {
	return this[this.length - 1];
};

Array.prototype.first = function () {
	return this[0];
};

Array.prototype.unique = function () {
	return [...new Set(this)];
};

Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.shuffle = function () {
	for (let i = this.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[this[i], this[j]] = [this[j], this[i]];
	}
	return this;
};

Array.prototype.findMap = function <T>(
	predicate: (value: T, index: number, obj: T[]) => unknown,
	map: (value: T) => any
): any | undefined {
	let found = this.find(predicate);
	return found !== undefined ? map(found) : found;
};

declare global {
	interface Array<T> {
		remove(o: T): this;
		flat(depth?: number): T;
		first(): T;
		last(): T;
		findMap<T>(predicate: (value: T, index: number, obj: T[]) => unknown, map: (value: T) => any): any | undefined;
		random(): T;
		unique(): T[];
		shuffle(): T[];
		insert(elem: T, index: number): T[];
	}
}

export {};
