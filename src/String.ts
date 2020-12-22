String.prototype.capitalize = function () {
	return this.slice(0, 1).toUpperCase() + this.slice(1);
};

String.prototype.replaceAll = function (find: string, replace: string) {
	return this.replace(new RegExp(escapeRegExp(find), "g"), replace);
};

function escapeRegExp(str: string) {
	return str.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
declare global {
	interface String {
		capitalize(): string;
		replaceAll(search: string, replace: string): string;
	}
}
export {};
