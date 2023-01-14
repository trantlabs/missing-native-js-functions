import { define } from "./Util";

define(Date, {
	nowSeconds: function () {
		return Math.floor(Date.now() / 1000);
	},
});

define(Date.prototype, {
	setTimezone: function (this: Date, timezone: string) {
		return new Date(
			this.toLocaleString("en-US", {
				timeZone: timezone,
			})
		);
	},
	isInPast: function (this: Date) {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		return this < today;
	},
	addYear: function (this: Date, years: number, month: number = 0, date: number = 0) {
		return this.setFullYear(this.getFullYear() + years, this.getMonth() + month, this.getDate() + date);
	},
	addMonth: function (this: Date, months: number, date: number = 0) {
		return this.setMonth(this.getMonth() + months, this.getDate() + date);
	},
	addDate: function (this: Date, days: number) {
		return this.setDate(this.getDate() + days);
	},
	addHours: function (this: Date, hours: number, minutes: number = 0, seconds: number = 0, milliseconds: number = 0) {
		return this.setHours(
			this.getHours() + hours,
			this.getMinutes() + minutes,
			this.getSeconds() + seconds,
			this.getMilliseconds() + milliseconds
		);
	},
	addMinutes: function (this: Date, minutes: number, seconds: number = 0, milliseconds: number = 0) {
		return this.setMinutes(
			this.getMinutes() + minutes,
			this.getSeconds() + seconds,
			this.getMilliseconds() + milliseconds
		);
	},
	addSeconds: function (this: Date, seconds: number, milliseconds: number = 0) {
		return this.setSeconds(this.getSeconds() + seconds, this.getMilliseconds() + milliseconds);
	},
	addMilliseconds: function (this: Date, milliseconds: number) {
		return this.setMilliseconds(this.getMilliseconds() + milliseconds);
	},
});

declare global {
	interface DateConstructor {
		/**
		 * Returns the current timestamp as its representation in seconds
		 * @returns {number} date in seconds
		 * @example
		 * Date.nowSeconds()
		 */
		nowSeconds(): number;
	}
}

declare global {
	interface Date {
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
		/**
		 * Add a number of years to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addYear(1)
		 */
		addYear(years: number, month?: number, date?: number): number;
		/**
		 * Add a number of months to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addMonth(1)
		 */
		addMonth(months: number, date?: number): number;
		/**
		 * Add a number of days to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addDate(1)
		 */
		addDate(days: number): number;
		/**
		 * Add a number of hours to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addHours(1)
		 */
		addHours(hours: number, minutes?: number, seconds?: number, milliseconds?: number): number;
		/**
		 * Add a number of minutes to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addMinutes(1)
		 */
		addMinutes(minutes: number, seconds?: number, milliseconds?: number): number;
		/**
		 * Add a number of seconds to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addSeconds(1)
		 */
		addSeconds(seconds: number, milliseconds?: number): number;
		/**
		 * Add a number of milliseconds to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addMilliseconds(1)
		 */
		addMilliseconds(milliseconds: number): number;
	}
}

export {};
