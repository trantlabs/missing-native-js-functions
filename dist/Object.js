"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperties(Object.prototype, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL09iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO0lBQ3pDLE9BQU8sRUFBRTtRQUNSLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxVQUFVLFFBQStDO1lBQy9ELGFBQWE7WUFDYixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQztLQUNEO0lBQ0QsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLFVBQVUsUUFBK0M7WUFDL0QsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBRWIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDakMsYUFBYTtnQkFDYixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sR0FBRyxDQUFDO1FBQ1osQ0FBQztLQUNEO0lBQ0QsTUFBTSxFQUFFO1FBQ1AsVUFBVSxFQUFFLEtBQUs7UUFDakIsUUFBUSxFQUFFLElBQUk7UUFDZCxLQUFLLEVBQUUsVUFBVSxLQUFVO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FDRDtDQUNELENBQUMsQ0FBQztBQUVILGFBQWE7QUFDYixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9