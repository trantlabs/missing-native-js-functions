require("../dist/Date");

console.log(Date.nowSeconds());
// -> 1613171021

console.log(new Date().isInPast("2021-02-12 12:00:00"));
// -> true

console.log(new Date().setTimezone("UTC").getHours());
// -> Current hour in UTC

console.log(new Date().add({ year: 1, month: 1, date: 1, hours: 1, minutes: 1, seconds: 1, milliseconds: 1 }));
// -> All values of date are incremented by one

console.log(new Date().set({ time: 0, hours: 12, utc: true }));
// -> 1970-01-01 12:00:00 UTC

console.log(new Date().set({ time: 0, hours: 12 }).toLocaleString());
// -> 1970-01-01 12:00:00 (Local time)

console.log(new Date().addHours(1));
// -> Current date time with one hour added
// -> 1674174846775
