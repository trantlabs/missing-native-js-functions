"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.define = void 0;
function define(target, props) {
    Object.keys(props).forEach(function (prop) {
        try {
            if (!target[prop]) {
                Object.defineProperty(target, prop, {
                    enumerable: false,
                    writable: true,
                    configurable: true,
                    value: props[prop],
                });
            }
        }
        catch (error) { }
    });
}
exports.define = define;
