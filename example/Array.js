require("../dist/Array");

const arr = [
	[0, 1],
	[2, 3],
	[2, 3],
	[2, 3],
	[4, 5],
	[6, 7],
]
	.flat()
	.unique()
	.shuffle();

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.remove(arr.random());

const first = arr.first();
const last = arr.last();

arr.insert(8, 0);

console.log(arr, first, last);

console.log(arr1.count(Number));

console.log("last number divisable by 2: " + arr.findLast((x) => x % 2 == 0));
console.log("index of it: " + arr.findLastIndex((x) => x % 2 == 0));
