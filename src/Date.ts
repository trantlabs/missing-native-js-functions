import { define } from "./Util";
define(Date, {
	nowSeconds: function () {
		return Math.floor(Date.now() / 1000);
	},
});

declare global {
	//@ts-ignore
	interface DateConstructor {
		nowSeconds(): number;
	}
}

export {};
