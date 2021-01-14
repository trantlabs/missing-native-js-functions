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
