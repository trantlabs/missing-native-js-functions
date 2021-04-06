require("../dist/JSON");

const bigint = { bigint: 234986234982634923423n, string: "string", number: 1234 };
bigint.circular = { obj: bigint };

console.log("stringify bigint and circular object:", JSON.stringify(bigint));
// -> {"test":"234986234982634923423","circular":{}}
// -> bigint.circular.obj is circular, so it will be completly removed
