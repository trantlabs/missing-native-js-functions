import { define } from "./Util";

define(Date, {
	nowSeconds: function () {
		return Math.floor(Date.now() / 1000);
	},
});

type DateSetOptions = {
	time?: number;
	year?: number;
	month?: number;
	date?: number;
	hours?: number;
	minutes?: number;
	seconds?: number;
	milliseconds?: number;
	utc?: boolean;
	timezone?: string;
};

define(Date.prototype, {
	setTimezone: function (this: Date, timezone: string) {
		this.setTime(
			new Date(
				this.toLocaleString("en-US", {
					timeZone: timezone,
				})
			).getTime()
		);
		return this;
	},
	isInPast: function (this: Date) {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		return this < today;
	},
	set: function (this: Date, opts: DateSetOptions) {
		if (opts.timezone) return this.setTimezone(opts.timezone).set({ ...opts, timezone: undefined });
		if (opts.time != null) this.setTime(opts.time);
		if (opts.utc != null) {
			if (opts.year != null) this.setUTCFullYear(opts.year);
			if (opts.month != null) this.setUTCMonth(opts.month);
			if (opts.date != null) this.setUTCDate(opts.date);
			if (opts.hours != null) this.setUTCHours(opts.hours);
			if (opts.minutes != null) this.setUTCMinutes(opts.minutes);
			if (opts.seconds != null) this.setUTCSeconds(opts.seconds);
			if (opts.milliseconds != null) this.setUTCMilliseconds(opts.milliseconds);
		} else {
			if (opts.year != null) this.setFullYear(opts.year);
			if (opts.month != null) this.setMonth(opts.month);
			if (opts.date != null) this.setDate(opts.date);
			if (opts.hours != null) this.setHours(opts.hours);
			if (opts.minutes != null) this.setMinutes(opts.minutes);
			if (opts.seconds != null) this.setSeconds(opts.seconds);
			if (opts.milliseconds != null) this.setMilliseconds(opts.milliseconds);
		}
		return this;
	},
	add: function (this: Date, opts: DateSetOptions) {
		if (opts.timezone) return this.setTimezone(opts.timezone).set({ ...opts, timezone: undefined });
		if (opts.utc) delete opts.utc;
		if (opts.time != null) opts.time += this.getTime();
		if (opts.year != null) opts.year += this.getFullYear();
		if (opts.month != null) opts.month += this.getMonth();
		if (opts.date != null) opts.date += this.getDate();
		if (opts.hours != null) opts.hours += this.getHours();
		if (opts.minutes != null) opts.minutes += this.getMinutes();
		if (opts.seconds != null) opts.seconds += this.getSeconds();
		if (opts.milliseconds != null) opts.milliseconds += this.getMilliseconds();

		return this.set(opts);
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
		 * new Date().addYear(1) // e.g. returns: 1640252854242
		 */
		addYear(years: number, month?: number, date?: number): number;
		/**
		 * Add a number of months to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addMonth(1) // e.g. returns: 1640252854242
		 */
		addMonth(months: number, date?: number): number;
		/**
		 * Add a number of days to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addDate(1) // e.g. returns: 1640252854242
		 */
		addDate(days: number): number;
		/**
		 * Add a number of hours to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addHours(1) // e.g. returns: 1640252854242
		 */
		addHours(hours: number, minutes?: number, seconds?: number, milliseconds?: number): number;
		/**
		 * Add a number of minutes to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addMinutes(1) // e.g. returns: 1640252854242
		 */
		addMinutes(minutes: number, seconds?: number, milliseconds?: number): number;
		/**
		 * Add a number of seconds to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addSeconds(1) // e.g. returns: 1640252854242
		 */
		addSeconds(seconds: number, milliseconds?: number): number;
		/**
		 * Add a number of milliseconds to the current date
		 * @returns {number} timestamp in milliseconds
		 * @example
		 * new Date().addMilliseconds(1) // e.g. returns: 1640252854242
		 */
		addMilliseconds(milliseconds: number): number;
		/**
		 * Sets the date and time value and returns the Date object
		 * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
		 * @example
		 * new Date().set({ time: 0 }) // sets the date to 1970-01-01 00:00:00.000 UTC and returns the date object
		 * new Date().set({ year: 2020 }) // sets the year to 2020 and returns the date object
		 * new Date().set({ month: 1 }) // sets the month to february and returns the date object
		 * new Date().set({ date: 20 }) // sets the current date of the month to 20 and returns the date object
		 * new Date().set({ hours: 13 }) // sets the current hour to 1pm (13 o'clock) and returns the date object
		 * new Date().set({ minutes: 59 }) // sets the current minute to 59 and returns the date object
		 * new Date().set({ seconds: 30 }) // sets the current second to 30 and returns the date object
		 * new Date().set({ milliseconds: 825 }) // sets the current millisecond to 825 (.825s) and returns the date object
		 *
		 * // sets the date to 1970-01-01 12:30:10.500 local time and returns the date object
		 * new Date().set({ time: 0, hours: 12, minutes: 30, seconds:10, milliseconds: 500 })
		 *
		 * // by specifying the utc option, the options (year, month, date, hours, minutes, seconds, milliseconds) will be set in UTC time
		 * new Date().set({ utc: true, hour: 2 }) // sets the current hour to 2am (2 o'clock) UTC (not local time!) and returns the date object
		 *
		 * new Date().set({ timezone: "GMT" }) // sets the current timezone to GMT and returns the date object
		 */
		set(opts: {
			time?: number;
			year?: number;
			month?: number;
			date?: number;
			hours?: number;
			minutes?: number;
			seconds?: number;
			milliseconds?: number;
			utc?: boolean;
			timezone?: string;
		}): Date;
		/**
		 * Adds the specified object to the current date and returns the Date object
		 * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
		 * @example
		 * new Date().add({ time: 0 }) // adds 0 milliseconds to the current date and returns the date object
		 * new Date().add({ hours: 12 }) // adds 12 hours to the current date and returns the date object
		 * new Date().add({ year: 1 }) // adds 1 year to the current date and returns the date object
		 * new Date().add({ month: 1 }) // adds 1 month to the current date and returns the date object
		 * new Date().add({ date: 20 }) // adds 20 days to the current date and returns the date object
		 * new Date().add({ hours: 13 }) // adds 13 hours to the current date and returns the date object
		 * new Date().add({ minutes: 59 }) // adds 59 minutes to the current date and returns the date object
		 * new Date().add({ seconds: 30 }) // adds 30 seconds to the current date and returns the date object
		 * new Date().add({ milliseconds: 825 }) // adds 825 milliseconds to the current date and returns the date object
		 *
		 * // adds 1 year, 1 month, 1 day, 1 hour, 1 minute, 1 second and 1 millisecond to the current date and returns the date object
		 * new Date().add({ year: 1, month: 1, date: 1, hours: 1, minutes: 1, seconds: 1, milliseconds: 1 })
		 *
		 * new Date().add({ timezone: "GMT", hours: 1 }) // sets the current timezone to GMT, adds 1 hour and returns the date object
		 *
		 */
		add(opts: {
			time?: number;
			year?: number;
			month?: number;
			date?: number;
			hours?: number;
			minutes?: number;
			seconds?: number;
			milliseconds?: number;
			timezone?: string;
		}): Date;
	}
}

export {};
