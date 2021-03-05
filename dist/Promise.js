"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("./Util");
Util_1.define(Promise.prototype, {
    caught: function () {
        this.catch(console.error);
        return this;
    },
});
//# sourceMappingURL=Promise.js.map