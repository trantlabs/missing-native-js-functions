Object.defineProperties(String.prototype, {
	capitalize: {
		enumerable: false,
		value: function () {
			return this.slice(0, 1).toUpperCase() + this.slice(1);
		},
	},
	replaceAll: {
		enumerable: false,
		value: function (find: string, replace: string) {
			return this.replace(new RegExp(escapeRegExp(find), "g"), replace);
		},
	},
	similarity: {
		enumerable: false,
		value: function (second: string) {
			let first = this.replace(/\s+/g, "");
			second = second.replace(/\s+/g, "");

			if (!first.length && !second.length) return 1; // if both are empty strings
			if (!first.length || !second.length) return 0; // if only one is empty string
			if (first === second) return 1; // identical
			if (first.length === 1 && second.length === 1) return 0; // both are 1-letter strings
			if (first.length < 2 || second.length < 2) return 0; // if either is a 1-letter string

			let firstBigrams = new Map();
			for (let i = 0; i < first.length - 1; i++) {
				const bigram = first.substring(i, i + 2);
				const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;

				firstBigrams.set(bigram, count);
			}

			let intersectionSize = 0;
			for (let i = 0; i < second.length - 1; i++) {
				const bigram = second.substring(i, i + 2);
				const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;

				if (count > 0) {
					firstBigrams.set(bigram, count - 1);
					intersectionSize++;
				}
			}

			return (2.0 * intersectionSize) / (first.length + second.length - 2);
		},
	},
});

// copied from https://github.com/aceakash/string-similarity/blob/master/src/index.js
// MIT License Copyright (c) 2018 Akash Kurdekar
function escapeRegExp(str: string) {
	return str.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
declare global {
	interface String {
		capitalize(): string;
		replaceAll(search: string, replace: string): string;
		similarity(compare: string): number;
	}
}
export {};
