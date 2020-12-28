"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperties(String, {
    capitalize: {
        enumerable: false,
        value: function () {
            return this.slice(0, 1).toUpperCase() + this.slice(1);
        },
    },
    replaceAll: {
        enumerable: false,
        value: function (find, replace) {
            return this.replace(new RegExp(escapeRegExp(find), "g"), replace);
        },
    },
    similarity: {
        enumerable: false,
        value: function (second) {
            let first = this.replace(/\s+/g, "");
            second = second.replace(/\s+/g, "");
            if (!first.length && !second.length)
                return 1; // if both are empty strings
            if (!first.length || !second.length)
                return 0; // if only one is empty string
            if (first === second)
                return 1; // identical
            if (first.length === 1 && second.length === 1)
                return 0; // both are 1-letter strings
            if (first.length < 2 || second.length < 2)
                return 0; // if either is a 1-letter string
            let firstBigrams = new Map();
            for (let i = 0; i < first.length - 1; i++) {
                const bigram = first.substring(i, i + 2);
                const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;
                firstBigrams.set(bigram, count);
            }
            let intersectionSize = 0;
            for (let i = 0; i < second.length - 1; i++) {
                const bigram = second.substring(i, i + 2);
                const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;
                if (count > 0) {
                    firstBigrams.set(bigram, count - 1);
                    intersectionSize++;
                }
            }
            return (2.0 * intersectionSize) / (first.length + second.length - 2);
        },
    },
});
// copied from https://github.com/aceakash/string-similarity/blob/master/src/index.js
// MIT License Copyright (c) 2018 Akash Kurdekar
function escapeRegExp(str) {
    return str.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7SUFDL0IsVUFBVSxFQUFFO1FBQ1gsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FDRDtJQUNELFVBQVUsRUFBRTtRQUNYLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxVQUFVLElBQVksRUFBRSxPQUFlO1lBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkUsQ0FBQztLQUNEO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLFVBQVUsTUFBYztZQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNyQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtZQUMzRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsOEJBQThCO1lBQzdFLElBQUksS0FBSyxLQUFLLE1BQU07Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZO1lBQzVDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1lBQ3JGLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUNBQWlDO1lBRXRGLElBQUksWUFBWSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTFFLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFdEUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO29CQUNkLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDbkI7YUFDRDtZQUVELE9BQU8sQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDO0tBQ0Q7Q0FDRCxDQUFDLENBQUM7QUFFSCxxRkFBcUY7QUFDckYsZ0RBQWdEO0FBQ2hELFNBQVMsWUFBWSxDQUFDLEdBQVc7SUFDaEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsb0NBQW9DO0FBQzFGLENBQUMifQ==