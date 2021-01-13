const modules = ["Global", "Array", "Object", "String"];

for (const module of modules) {
	console.log("-".repeat(30));
	console.log(module.toUpperCase());
	require("./" + module);
}
