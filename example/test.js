require("../dist/index");

const str1 = "test,hello,1234";
const str2 = str1.replaceAll(",", "-");

console.log({ str1, str2 });
// -> {str1: 'test,hello,1234', str2: 'test-hello-1234'}

console.log(str2.capitalize());
// -> Test-hello-1234
