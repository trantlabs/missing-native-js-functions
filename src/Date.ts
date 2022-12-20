import {define} from './Util'
define(Date.prototype, {
    /**
    * Returns the current timestamp as its representation in seconds
    */
    nowSeconds: function () {
        return Math.floor(Date.now() / 1000)
    },
    /**
    * specifies the timezone for the current date
    */
    setTimezone: function (timezone: string) {
        return new Date(
            this.toLocaleString('en-US', {
                timezone
            })
        )
    },
    /**
    * checks if the date is in the past, compares with current date
    */
    isInPast: function () {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return this < today
    }
})

declare global {
    interface DateConstructor {
        nowSeconds(): number;
        setTimezone(): Date;
        isInPast(): boolean;
    }
}

export {}
