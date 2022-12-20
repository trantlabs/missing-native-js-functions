try {
	if (!globalThis.atob) {
		globalThis.atob = (data: string) => Buffer.from(data, "base64").toString("utf8");
	}
	if (!globalThis.btoa) {
		globalThis.btoa = (data: string) => Buffer.from(data.toString(), "utf8").toString("base64");
	}
	if (!globalThis.setIntervalNow) {
		globalThis.setIntervalNow = function (callback: Function, milliseconds?: number, ...args: any[]) {
			const func = callback.bind(this, ...args);
			func();
			return setInterval(func, milliseconds);
		};
	}
	if (!globalThis.sleep) {
		globalThis.sleep = (ms: number) => new Promise((_resolve) => setTimeout(_resolve, ms));
	}
} catch (error) {}

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

	/**
	 * Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call, immediately executes the first callback on setup, after that waits for the given delay
	 * @param {callback} callback a function to be executed every delay milliseconds. The first execution happens after delay milliseconds.
	 * @param {milliseconds} milliseconds The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code.
	 * @param {args} args Additional arguments which are passed through to the function specified by func once the timer expires.
	 * https://developer.mozilla.org/en-US/docs/Web/API/setInterval
	 */
	function setIntervalNow(callback: Function, milliseconds?: number, ...args: any[]): number | NodeJS.Timeout;

	/**
	 * Returns a promise that resolves after the specified milliseconds
	 * @param {ms} ms The time, in milliseconds (thousandths of a second), the function should delay the execution of the program.
	 */
	function sleep(ms: number): Promise<void>;
}
export {};
