require("../dist/String");

console.log("the first character should be capitalized".capitalize());
// -> The first character should be capitalized

console.log("All.dot.occurrences.should.be.replaced.with.space".replaceAll(".", " "));
// -> All dot occurrences should be replaced with space

console.log("this string is very similiar".similarity("this string should be very smiliar"));
// -> 1.3411764705882347

console.log("this string is not at all similiar".similarity(""));
// -> 0

console.log(" ".join(["every", "array", "entry", "should", "be", "joined", "with", "a", "space"]));
// -> every array entry should be joined with a space

console.log("this string should be split at every space while preserving the separator".partition(" "));
/*
[
  'this',       ' ',         'string',
  ' ',          'should',    ' ',
  'be',         ' ',         'split',
  ' ',          'at',        ' ',
  'every',      ' ',         'space',
  ' ',          'while',     ' ',
  'preserving', ' ',         'the',
  ' ',          'separator'
]
 */

console.log("this should be the number 192939", "192939".toNumber());
// -> 192939

console.log("this is NaN".toNumber());
// -> NaN

console.log("this is 3948653498563498563489563234986n as a bigint", "3948653498563498563489563234986".toBigInt());
// -> 3948653498563498563489563234986n

console.log("this is NaN".toBigInt());
// -> NaN

console.log("in this string 'e' will be counted", "in this string 'e' will be counted".count("e"));
// -> 3

console.log("This String Will Swap Cases".swapcase());
// -> tHIS sTRING wILL sWAP cASES

console.log("this string will be converted into a title string".title());
// -> This String Will Be Converted Into A Title String

const example_str = '{"this object":"is now parsed"}'.toObject();
console.log(typeof example_str, example_str);
// -> object, { 'this object': 'is now parsed' }
