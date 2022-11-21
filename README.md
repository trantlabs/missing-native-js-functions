<h1>
	Missing Native
	<img width="24" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png">
	Functions
</h1>

mnJSf that should be the base lib for every JS project whether for browser or nodejs

This library extends the properties of `Array`, `Object`, `Promise`, `Global`, `Math`, `Number` and `String`

## [Docs](https://flam3rboy.github.io/missing-native-js-functions/)

credit goes to ~[xnacly](http://github.com/xnacly/)

## Installation

```
npm i missing-native-js-functions
# or "yarn add missing-native-js-functions"
```

## Usage

ES5 import

```js
require("missing-native-js-functions");
```

ES6 import

```js
import "missing-native-js-functions";
```

use in Browser

```html
<script src="https://cdn.jsdelivr.net/npm/missing-native-js-functions/dist/mnjsf.min.js"></script>
```

## [Reference](/dist/index.d.ts)

### [Array](/dist/Array.d.ts)

```ts
Array {
	remove(value: T): this; // removes the value of the array (Notice: it modifies the current array)
	flat(depth?: number): T; // returns a new flattened array e.g. [[1,2],[3,4]] -> [1,2,3,4]
	first(): T; // returns the first element of the array
	last(): T; // returns the last element of the array
	findMap(predicate: (value: T, index: number, obj: T[]) => unknown, map: (value: T) => any): any | undefined; // finds a value in the array and maps it
	random(): T; // returns a random array element
	unique(): T[]; // returns a new unique array with distinct values
	shuffle(): T[]; // shuffles the current array
	insert(elem: T, index: number): T[]; // insert an element at a specified index
	count(search: RegExp | any): number; // returns total of found items for specified search
	similarities(arr: T[]): T[]; // returns a new array with elements that are both in this array and in the comparison array
	missing(arr: T[]): T[]; // returns a new array with elements that are in this array, but are missing in the comparison array
}
```

### [Object](/dist/Object.d.ts)

```ts
Object {
	forEach(callback: (element: any, index?: string) => any): void; // callback is called for every element in object
	map(callback: (element: any, index?: string) => any): this; // callback is called for every element in object and the result is returned as a new object
	keys(): string[]; //returns keys of object itself
	entries():  Array<[string, any]>; // returns a nested array of key and corresponding value of object itself
	merge(obj: any): any; // returns a new object deeply merged with obj, the current will overwrite obj, if obj has the same property. Notice will not merge classes
	stringify(): string; // parses the object to an string (trows errors if invalid input)
}
```

### [String](/dist/String.d.ts)

```ts
String {
	capitalize(): string; // Returns a new string with the first character capitalized
	replaceAll(search: string, replace: string): string; // Replace all occurrences of search with replace
	similarity(compare: string): number; // Returns a value between 0 (different) and 1 (same) indicating how similar the string is to compare
	join(iterate: string[]): string; // Returns the array values seperated by the given divider as a string
	partition(separator: string): string[]; // Returns split array, but includes separators
	toNumber(): number; // converts string to number, if not a number returns NaN
	toBigInt(): number; // converts string to BigInt, if not a number returns NaN
	count(countString: RegExp | any): number; // returns total of found items for specified search;
	swapcase(): string;// Returns a swapped case string -> aLL CASES ARE SWAPPED
	title(): string; // converts the string into a title string -> This Is A Title String
	toObject(): object; // parses the string to an object (trows errors if invalid input)
}
```

### [Promise](/dist/Promise.d.ts)

```ts
Promise {
	caught(): this; // catch all errors in the console without the need to specify a function, similar like promise.catch(console.error)
}
```

### [Global](/dist/Global.d.ts)

```ts
Global {
    function atob(data: string): string; // Converts a Base64 encoded string back to UTF-8
    function btoa(data: string): string; // Converts a UTF-8 string to a Base64 encoded string
    function sleep(milliseconds: number): Promise<void>; // Returns a promise that resolves after the specified milliseconds
}
```

### [Number](/dist/Number.d.ts)

```ts
Number {
	toInt(): number; // converts the current number to an integer (remove the numbers after the dot)
}
```

### [Math](/dist/Math.d.ts)

```ts
Math {
	static randomBetween(min: number, max: number): number; // generates a random floating point number between min and max
	static randomIntBetween(min: number, max: number): number; // generates a random integer between min and max
}
```

## Example

### Array

```js
require("missing-native-js-functions");

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

console.log(arr);
// -> [4, 7, 5, 1, 6, 2, 3, 8]

class Test {
	constructor() {}
}

let array = ["test", "test", "test", "no", 2, 15, { 2: 14 }, new Test(), new Test()];

console.log(array.count(Number));
// -> 2
console.log(array.count(String));
// -> 4
console.log(array.count(Object));
// -> 1
console.log(array.count(Test));
// -> 2
console.log(array.count(/[a-z]/));
// -> 4
console.log(array.count("test"));
// -> 3
console.log(array.count(15));
// -> 1

console.log("last number divisable by 2: " + arr.findLast((x) => x % 2 == 0));
// -> 8
console.log("index of it: " + arr.findLastIndex((x) => x % 2 == 0));
// -> 7

console.log("Similarities between to arrays", [0, 1, 2, 3, 4].similarities([0, 2, 4, 6, 8, 10]));
// -> [ 0, 2, 4 ]

console.log("Missing values in comparison array", [0, 1, 2, 3, 4, 5].missing([0, 5]));
// -> [ 1, 2, 3, 4 ]
```

### Object

```js
require("missing-native-js-functions");

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

obj.forEach(console.log);
// -> 2 test
// -> 4 tester

console.log(obj.keys());
// -> ["test","tester"]

console.log(obj.entries());
// -> [[test,1],[tester,2]]

console.log(obj.stringify());
// -> '{"test": 2, "tester": 4}'
```

### String

```js
require("missing-native-js-functions");

const str1 = "test,hello,1234";
const str2 = str1.replaceAll(",", "-");

console.log({ str1, str2 });
// -> {str1: 'test,hello,1234', str2: 'test-hello-1234'}

console.log(str2.capitalize());
// -> Test-hello-1234

const words = ["test", "hello", "1234"];
console.log(", ".join(words));
// -> test, hello, 1234

const wordList = "test.hello.1234";
console.log(wordList.partition("."));
// -> ["test", ".", "hello", ".", "1234"]

"25".toNumber();
// -> 25

"25".toBigInt();
// -> 25n

"This is a Thonk Text".swapcase();
// -> tHIS IS A tHONK tEXT

"this is a test".title();
// -> This Is A Test

'{"this object":"is now parsed"}'.toObject();
// -> {"this object":"is now parsed"}
```

### Promise

```js
new Promise((res, rej) => {
	rej("Promised rejected, but caught in console.error");
}).caught();
// -> will not throw the promise, but log the error in the console
```

### Global

```js
const convert = "this string will be base64 encoded";
const converted = btoa("this string was base64 encoded");
console.log(convert, btoa(convert));
// -> this string will be base64 encoded dGhpcyBzdHJpbmcgd2lsbCBiZSBiYXNlNjQgZW5jb2RlZA==

console.log(atob(converted), converted);
// -> this string was base64 encoded dGhpcyBzdHJpbmcgd2FzIGJhc2U2NCBlbmNvZGVk
```

### Number

```js
const x = 3.14;
console.log(`Floating point number ${x} to int: `, x.toInt());
// -> 3
```

### Math

```js
console.log("Random number between 1-10", Math.randomBetween(1, 10));
// -> 8.54098

console.log("Random int between 1-10", Math.randomIntBetween(1, 10));
// -> 5
```
