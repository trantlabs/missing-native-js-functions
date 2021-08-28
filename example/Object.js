require("../dist/Object");

const obj = { username: "mnjsf", age: 1, size: "5kb", minified: true };

obj.map((val, key) => `[${key}]: ${val}`).forEach((element) => console.log(element));
/*
console.logs this in each line:
[username]: mnjsf
[age]: 1
[size]: 5kb
[minified]: true
*/

let compareObj = {
	test: 2,
	tester: 4,
};

console.log("shouldn't be equal", obj.equals({ test: "not equals" }));
// -> false

console.log("should be equal", { username: "mnjsf", age: 1, size: "5kb", minified: true }.equals(obj));
// -> true

console.log("keys", obj.keys());
// -> [ 'username', 'age', 'size', 'minified' ]

console.log("entries", obj.entries());
// -> [[ 'username', 'mnjsf' ],[ 'age', 1 ],[ 'size', '5kb' ],[ 'minified', true ]]

class Test {}

console.log(
	"deepmerge objects",
	{ user: { name: "test", test: new Test() } }.merge({ user: { id: 0, name: "ThisNameWillBeOverwritten" } })
);
// -> { user: { id: 0, name: 'test', test: TestClass } }

const example_string = { "this is": "now a string", "this also": 25 }.stringify();

console.log(typeof example_string, example_string);
// string, '{"this is":"now a string","this also":25}'
