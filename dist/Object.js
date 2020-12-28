"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperties(Object, {
    forEach: {
        enumerable: false,
        value: function (callback) {
            // @ts-ignore
            return Object.keys(this).forEach((key) => callback(this[key], key));
        },
    },
    map: {
        enumerable: false,
        value: function (callback) {
            let obj = {};
            Object.keys(this).forEach((key) => {
                // @ts-ignore
                obj[key] = callback(this[key], key);
            });
            return obj;
        },
    },
    equals: {
        enumerable: false,
        writable: true,
        value: function (other) {
            return JSON.stringify(this) === JSON.stringify(other);
        },
    },
});
// @ts-ignore
Object.equals = (x, y) => x.equals(y);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL09iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7SUFDL0IsT0FBTyxFQUFFO1FBQ1IsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLFVBQVUsUUFBK0M7WUFDL0QsYUFBYTtZQUNiLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDO0tBQ0Q7SUFDRCxHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsVUFBVSxRQUErQztZQUMvRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFFYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNqQyxhQUFhO2dCQUNiLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxHQUFHLENBQUM7UUFDWixDQUFDO0tBQ0Q7SUFDRCxNQUFNLEVBQUU7UUFDUCxVQUFVLEVBQUUsS0FBSztRQUNqQixRQUFRLEVBQUUsSUFBSTtRQUNkLEtBQUssRUFBRSxVQUFVLEtBQVU7WUFDMUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUNEO0NBQ0QsQ0FBQyxDQUFDO0FBRUgsYUFBYTtBQUNiLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDIn0=