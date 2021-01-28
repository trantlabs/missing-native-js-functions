require("../dist/Promise");

new Promise((res, rej) => {
	rej("Promised rejected, but caught in console.error");
}).caught();
