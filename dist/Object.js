"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperties(Object.prototype, {
    forEach: {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (callback) {
            // @ts-ignore
            return Object.keys(this).forEach((key) => callback(this[key], key));
        },
    },
    map: {
        enumerable: false,
        configurable: true,
        writable: true,
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
        configurable: true,
        writable: true,
        value: function (other) {
            return JSON.stringify(this) === JSON.stringify(other);
        },
    },
});
// @ts-ignore
Object.equals = (x, y) => x.equals(y);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL09iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO0lBQ3pDLE9BQU8sRUFBRTtRQUNSLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsS0FBSyxFQUFFLFVBQVUsUUFBK0M7WUFDL0QsYUFBYTtZQUNiLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDO0tBQ0Q7SUFDRCxHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztRQUNqQixZQUFZLEVBQUUsSUFBSTtRQUNsQixRQUFRLEVBQUUsSUFBSTtRQUNkLEtBQUssRUFBRSxVQUFVLFFBQStDO1lBQy9ELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUViLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2pDLGFBQWE7Z0JBQ2IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLEdBQUcsQ0FBQztRQUNaLENBQUM7S0FDRDtJQUNELE1BQU0sRUFBRTtRQUNQLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsS0FBSyxFQUFFLFVBQVUsS0FBVTtZQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQ0Q7Q0FDRCxDQUFDLENBQUM7QUFFSCxhQUFhO0FBQ2IsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMifQ==