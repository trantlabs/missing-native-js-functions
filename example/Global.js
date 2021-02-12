require("../dist/Global");

const convert = "this string will be base64 encoded";
const converted = btoa("this string was base64 encoded");
// -> converted: dGhpcyBzdHJpbmcgd2lsbCBiZSBiYXNlNjQgZW5jb2RlZA==

console.log(convert, btoa(convert));
// -> this string will be base64 encoded , dGhpcyBzdHJpbmcgd2lsbCBiZSBiYXNlNjQgZW5jb2RlZA==

console.log(atob(converted), converted);
// -> this string was base64 encoded dGhpcyBzdHJpbmcgd2FzIGJhc2U2NCBlbmNvZGVk

const interval = setIntervalNow(() => {
	console.log("this function will be called immediately and every 1000ms");
}, 1000);

// ignore -> will clear the interval
setTimeout(() => {
	clearInterval(interval);
}, 1500);
