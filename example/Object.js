require("../dist/Object");

const obj = { username: "mnjsf", age: 1, size: "5kb", minified: true };

obj.map((val, key) => `[${key}]: ${val}`).forEach((element) => console.log(element));

let compareObj = {
	test: 2,
	tester: 4,
};

console.log("shouldn't be equal", obj.equals({ test: "not equals" }));
console.log("should be equal", { username: "mnjsf", age: 1, size: "5kb", minified: true }.equals(obj));

console.log("keys", obj.keys());
console.log("values", obj.values());
console.log("entries", obj.entries());

class Test {}
console.log(
	"deepmerge objects",
	{ user: { name: "test", test: new Test() } }.merge({ user: { id: 0, name: "test2" } })
);

const example_string = { "this is": "now a string", "this also": 25 }.stringify();
console.log(example_string, typeof example_string);
