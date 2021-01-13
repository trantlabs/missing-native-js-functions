"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var Global;
try {
    Global = window;
}
catch (error) {
    Global = global;
}
if (!Global.atob)
    Global.atob = function (data) { return Buffer.from(data, "base64").toString("utf8"); };
if (!Global.btoa)
    Global.btoa = function (data) { return Buffer.from(data.toString(), "utf8").toString("base64"); };
