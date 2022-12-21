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
	},
	isInPast: function () {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		return this < today;
	},
});

declare global {
	interface DateConstructor {
		/**
		 * Returns the current timestamp as its representation in seconds
		 * @example
		 * Date.nowSeconds() //
		 */
		nowSeconds(): number;
		/**
		 * specifies the timezone for the current date
		 */
		setTimezone(): Date;
		/**
		 * checks if the date is in the past, compares with current date
		 */
		isInPast(): boolean;
	}
}

export {};
