// @ts-ignore
let Global: globalThis;
try {
	Global = window;
} catch (error) {
	Global = global;
}

if (!Global.atob) Global.atob = (data: string) => Buffer.from(data, "base64").toString("utf8");
if (!Global.btoa) Global.btoa = (data: string) => Buffer.from(data.toString(), "utf8").toString("base64");

declare global {
	/**
	 * Converts a Base64 encoded string
	 * @param {string} data Base64 encoded string
	 */
	function atob(data: string): string;
	/**
	 * Converts a string to a Base64 encoded string
	 * @param {string} data UTF-8 string that should get encoded
	 */
	function btoa(data: string): string;
}
export {};
