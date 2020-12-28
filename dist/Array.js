"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperties(Array.prototype, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtJQUN4QyxNQUFNLEVBQUU7UUFDUCxVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsVUFBd0IsSUFBTztZQUNyQyw0Q0FBNEM7WUFDNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUMsQ0FBQyw2QkFBNkI7UUFDM0MsQ0FBQztLQUNEO0lBQ0QsTUFBTSxFQUFFO1FBQ1AsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLFVBQWEsSUFBTyxFQUFFLEtBQWE7WUFDekMsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUNEO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLFVBQVUsUUFBZ0IsQ0FBQztZQUNqQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQ2pCLENBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxFQUFFLENBQ3RCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDbkIsRUFBRSxDQUNGLENBQUM7UUFDSCxDQUFDO0tBQ0Q7SUFDRCxJQUFJLEVBQUU7UUFDTCxVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUU7WUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7S0FDRDtJQUNELEtBQUssRUFBRTtRQUNOLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRTtZQUNOLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7S0FDRDtJQUNELE1BQU0sRUFBRTtRQUNQLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRTtZQUNOLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQztLQUNEO0lBQ0QsTUFBTSxFQUFFO1FBQ1AsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUNEO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFO1lBQ04sS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztLQUNEO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLFVBQ04sU0FBeUQsRUFDekQsR0FBc0I7WUFFdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pELENBQUM7S0FDRDtDQUNELENBQUMsQ0FBQyJ9