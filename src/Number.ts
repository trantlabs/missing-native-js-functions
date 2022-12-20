import {define} from './Util'

define(Number.prototype, {
    toInt: function () {
        return Math.floor(this)
    }
})

declare global {
    interface Number {
        toInt(): number;
    }
}
