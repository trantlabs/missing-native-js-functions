"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperties(Array.prototype, {
    remove: {
        enumerable: false,
        writable: true,
        configurable: true,
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
        writable: true,
        configurable: true,
        value: function (elem, index) {
            if (!index)
                index = this.length;
            return this.splice(index, 0, elem);
        },
    },
    flat: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function (depth = 1) {
            return this.reduce((acc, val) => (Array.isArray(val) && depth >= 1) || depth === -1
                ? acc.concat(val.flat(depth--))
                : acc.concat(val), []);
        },
    },
    last: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function () {
            return this[this.length - 1];
        },
    },
    first: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function () {
            return this[0];
        },
    },
    unique: {
        enumerable: false,
        writable: true,
        configurable: true,
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
        writable: true,
        configurable: true,
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
        writable: true,
        configurable: true,
        value: function (predicate, map) {
            let found = this.find(predicate);
            return found !== undefined ? map(found) : found;
        },
    },
    count: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function (search) {
            let i = 0;
            this.forEach((element) => {
                if (element === search) {
                    i++;
                    return;
                }
                if (typeof search == "function") {
                    if (typeof element === search.toString().split(" ")[1].slice(0, -2).toLowerCase()) {
                        i++;
                        return;
                    }
                }
                if (typeof element === "string") {
                    if (element.match(search)) {
                        i++;
                        return;
                    }
                }
            });
            return i;
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtJQUN4QyxNQUFNLEVBQUU7UUFDUCxVQUFVLEVBQUUsS0FBSztRQUNqQixRQUFRLEVBQUUsSUFBSTtRQUNkLFlBQVksRUFBRSxJQUFJO1FBQ2xCLEtBQUssRUFBRSxVQUF3QixJQUFPO1lBQ3JDLDRDQUE0QztZQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQyxDQUFDLDZCQUE2QjtRQUMzQyxDQUFDO0tBQ0Q7SUFDRCxNQUFNLEVBQUU7UUFDUCxVQUFVLEVBQUUsS0FBSztRQUNqQixRQUFRLEVBQUUsSUFBSTtRQUNkLFlBQVksRUFBRSxJQUFJO1FBQ2xCLEtBQUssRUFBRSxVQUFhLElBQU8sRUFBRSxLQUFhO1lBQ3pDLElBQUksQ0FBQyxLQUFLO2dCQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7S0FDRDtJQUNELElBQUksRUFBRTtRQUNMLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsWUFBWSxFQUFFLElBQUk7UUFDbEIsS0FBSyxFQUFFLFVBQVUsUUFBZ0IsQ0FBQztZQUNqQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQ2pCLENBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxFQUFFLENBQ3RC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