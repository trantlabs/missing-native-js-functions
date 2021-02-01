const modules = ["Global", "Array", "Object", "String", "Math", "Promise"];

for (const module of modules) {
	console.log("-".repeat(30));
	console.log(module.toUpperCase());
	require("./" + module);
}
