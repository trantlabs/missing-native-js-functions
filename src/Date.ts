import { define } from "./Util";
define(Date.prototype, {
	nowSeconds: function () {
		return Math.floor(Date.now() / 1000);
	},
	setTimezone: function (timezone: string) {
		return new Date(
			this.toLocaleString("en-US", {
				timeZone: timezone,
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
         * @returns {number} date in seconds
		 * @example
		 * new Date().nowSeconds() // 1671621321
		 */
		nowSeconds(): number;
		/**
		 * specifies the timezone for the current date
         * @param {string} timezone see available timezones: https://www.iana.org/time-zones
		 * @example
		 * let date = new Date()
		 * date.setTimezone("Europe/Berlin") // returns 2022-12-21T12:22:18.000Z
		 * date.setTimezone("America/Jamaica") // returns 2022-12-21T06:22:18.000Z
		 */
		setTimezone(timezone: string): Date;
		/**
		 * Checks if the date is in the past
         * @returns {boolean} is date in past
		 * @example
		 * new Date("2022-12-01").isInPast() // returns: true
		 */
		isInPast(): boolean;
	}
}

export {};
