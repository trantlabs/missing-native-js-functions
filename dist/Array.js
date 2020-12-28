"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperties(Array, {
    remove: {
        enumerable: false,
        value: function (elem) {
            // do not use filter to modify current array
            const index = this.indexOf(elem);
            if (index === -1)
                return this;
            this.splice(index, 1);
            return this; //.filter((e) => e !== elem);
        },
    },
    insert: {
        enumerable: false,
        value: function (elem, index) {
            if (!index)
                index = this.length;
            return this.splice(index, 0, elem);
        },
    },
    flat: {
        enumerable: false,
        value: function (depth = 1) {
            return this.reduce((acc, val) => (Array.isArray(val) && depth >= 1) || depth === -1
                ? acc.concat(val.flat(depth--))
                : acc.concat(val), []);
        },
    },
    last: {
        enumerable: false,
        value: function () {
            return this[this.length - 1];
        },
    },
    first: {
        enumerable: false,
        value: function () {
            return this[0];
        },
    },
    unique: {
        enumerable: false,
        value: function () {
            return [...new Set(this)];
        },
    },
    random: {
        enumerable: false,
        value: function () {
            return this[Math.floor(Math.random() * this.length)];
        },
    },
    shuffle: {
        enumerable: false,
        value: function () {
            for (let i = this.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this[i], this[j]] = [this[j], this[i]];
            }
            return this;
        },
    },
    findMap: {
        enumerable: false,
        value: function (predicate, map) {
            let found = this.find(predicate);
            return found !== undefined ? map(found) : found;
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO0lBQzlCLE1BQU0sRUFBRTtRQUNQLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxVQUF3QixJQUFPO1lBQ3JDLDRDQUE0QztZQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQyxDQUFDLDZCQUE2QjtRQUMzQyxDQUFDO0tBQ0Q7SUFDRCxNQUFNLEVBQUU7UUFDUCxVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsVUFBYSxJQUFPLEVBQUUsS0FBYTtZQUN6QyxJQUFJLENBQUMsS0FBSztnQkFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDO0tBQ0Q7SUFDRCxJQUFJLEVBQUU7UUFDTCxVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsVUFBVSxRQUFnQixDQUFDO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FDakIsQ0FBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLEVBQUUsQ0FDdEIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQy9CLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUNuQixFQUFFLENBQ0YsQ0FBQztRQUNILENBQUM7S0FDRDtJQUNELElBQUksRUFBRTtRQUNMLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRTtZQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQztLQUNEO0lBQ0QsS0FBSyxFQUFFO1FBQ04sVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztLQUNEO0lBQ0QsTUFBTSxFQUFFO1FBQ1AsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFO1lBQ04sT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDO0tBQ0Q7SUFDRCxNQUFNLEVBQUU7UUFDUCxVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUU7WUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQ0Q7SUFDRCxPQUFPLEVBQUU7UUFDUixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUU7WUFDTixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDO0tBQ0Q7SUFDRCxPQUFPLEVBQUU7UUFDUixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsVUFDTixTQUF5RCxFQUN6RCxHQUFzQjtZQUV0QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakQsQ0FBQztLQUNEO0NBQ0QsQ0FBQyxDQUFDIn0=