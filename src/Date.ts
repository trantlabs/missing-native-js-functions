import { define } from "./Util";
define(Date.prototype, {
	nowSeconds: function () {
		return Math.floor(Date.now() / 1000);
	},
	setTimezone: function (timezone: string) {
		return new Date(
			this.toLocaleString("en-US", {
				timezone,
			})
		);
	}
});

declare global {
	//@ts-ignore
	interface DateConstructor {
		nowSeconds(): number;
		setTimezone(): Date;
	}
}

export {};
