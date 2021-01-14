require("../dist/String");

console.log("the first character should be capitalized".capitalize());

console.log("All.dot.occurrences.should.be.replaced.with.space".replaceAll(".", " "));

console.log("this string is very similiar".similarity("this string should be very smiliar"));
console.log("this string is not at all similiar".similarity(""));

console.log(" ".join(["every", "array", "entry", "should", "be", "joined", "with", "a", "space"]));

console.log("this string should be split at every space while preserving the separator".partition(" "));

console.log("this should be the number 192939", "192939".toNumber());
console.log("this is NaN".toNumber());

console.log("this is 3948653498563498563489563234986n as a bigint", "3948653498563498563489563234986".toBigInt());
console.log("this is NaN".toBigInt());
