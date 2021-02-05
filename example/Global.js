require("../dist/Global");

const convert = "this string will be base64 encoded";
const converted = btoa("this string was base64 encoded");
console.log(convert, btoa(convert));
console.log(atob(converted), converted);

const interval = setIntervalNow(() => {
	console.log("this function will be called immediately and every 1000ms");
}, 1000);

setTimeout(() => {
	clearInterval(interval);
}, 1500);
