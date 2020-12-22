# missing-native-JS-functions
mnJSf that should be the base lib for every JS project

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

## [Reference](/dist/index.d.ts)
