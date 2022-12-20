import {define} from './Util'

define(Promise.prototype, {
    caught: function () {
        this.catch(console.error)
        return this
    }
})

declare global {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Promise<T> {
        caught(): this;
    }
}

export {}
