# missing-native-JS-functions
mnJSf that should be the base lib for every JS project

This library extends the property of ``Array``, ``Object`` and ``Array``

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

or ES6 import

```js
import "missing-native-js-functions";
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
}
```

### [Object](/dist/Object.d.ts)
```ts
Object {
	forEach(callback: (element: any, index?: string) => any): void; // callback is called for every element in object
	map(callback: (element: any, index?: string) => any): this; // callback is called for every element in object and the result is returned as a new object 
	static equals(x: any, y: any): boolean; 
	equals(other: any): boolean; // checks if this Objects is the same with the other, WARNING this won't work with circular objects
}
```

### [String](/dist/String.d.ts)
```ts
String {
	capitalize(): string; // returns a new string with the first character capitalized
	replaceAll(search: string, replace: string): string; // replace all occurrences of search with replace
	similarity(compare: string): number; // Returns a value between 0 (different) and 1 (same) indicating how similar the string is to compare
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

console.log(obj.equals(compareObj));
// -> true

obj.forEach(console.log);
// -> 2 test
// -> 4 tester
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
```
