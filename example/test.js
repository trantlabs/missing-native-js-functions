require("../dist/index");
let obj = {
	test: 1,
	tester: 2,
};
obj = obj.map((x) => x * 2);

console.log(obj);
// -> {test: 2, tester: 4}

let compareObj = {
	test: 2,
	tester: 4,
};

console.log(obj.equals(compareObj));
// -> true

obj.forEach(console.log);

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

arr.insert(8);

console.log(arr, first, last);

const str1 = "test,hello,1234";
const str2 = str1.replaceAll(",", "-");

console.log({ str1, str2 });
// -> {str1: 'test,hello,1234', str2: 'test-hello-1234'}

console.log(str2.capitalize());
