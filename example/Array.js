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
	// -> [ 0,1,2,3,2,3,2,3,4,5,6,7 ]
	.unique()
	// -> [ 0,1,2,3,4,5,6,7 ]
	.shuffle();
// -> [ 1, 2, 7, 3, 5, 6, 4 ]
console.log(arr);

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const randomNumber = arr.random();
// -> 5
arr.remove(arr.random());
// will modify the current array and remove the number 5

const first = arr.first();
console.log(first); // -> 1

const last = arr.last();
console.log(last); // -> 4

arr.insert(8, arr.length); // -> inserts the number 8 at the last index

console.log(arr1.count(Number));
// -> in the arr1 are 10 Numbers

console.log("last number divisable by 2: " + arr.findLast((x) => x % 2 == 0));
// -> returns the number 8

console.log("index of it: " + arr.findLastIndex((x) => x % 2 == 0));
// -> returns the index of number 8 -> index 7

console.log("Similarities between to arrays", [0, 1, 2, 3, 4].similarities([0, 2, 4, 6, 8, 10]));
// -> [ 0, 2, 4 ]

console.log("Missing values in comparison array", [0, 1, 2, 3, 4, 5].missing([0, 5]));
// -> [ 1, 2, 3, 4 ]
