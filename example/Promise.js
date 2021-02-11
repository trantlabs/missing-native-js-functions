require("../dist/Promise");

new Promise((res, rej) => {
	rej("Promised rejected, but caught in console.error");
}).caught();
// .caught() will add a .catch listener that logs the error in the error
