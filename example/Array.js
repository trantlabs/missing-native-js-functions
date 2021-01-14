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

arr.remove(arr.random());

const first = arr.first();
const last = arr.last();

arr.insert(8, 0);

console.log(arr, first, last);
