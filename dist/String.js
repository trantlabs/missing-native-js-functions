"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperties(String.prototype, {
    capitalize: {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.slice(0, 1).toUpperCase() + this.slice(1);
        },
    },
    replaceAll: {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (find, replace) {
            return this.replace(new RegExp(escapeRegExp(find), "g"), replace);
        },
    },
    similarity: {
        enumerable: false,
        configurable: true,
        writable: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO0lBQ3pDLFVBQVUsRUFBRTtRQUNYLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsS0FBSyxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FDRDtJQUNELFVBQVUsRUFBRTtRQUNYLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsS0FBSyxFQUFFLFVBQVUsSUFBWSxFQUFFLE9BQWU7WUFDN0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuRSxDQUFDO0tBQ0Q7SUFDRCxVQUFVLEVBQUU7UUFDWCxVQUFVLEVBQUUsS0FBSztRQUNqQixZQUFZLEVBQUUsSUFBSTtRQUNsQixRQUFRLEVBQUUsSUFBSTtRQUNkLEtBQUssRUFBRSxVQUFVLE1BQWM7WUFDOUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXBDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7WUFDM0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtZQUM3RSxJQUFJLEtBQUssS0FBSyxNQUFNO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWTtZQUM1QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtZQUNyRixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztZQUV0RixJQUFJLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUxRSxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNoQztZQUVELElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXRFLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtvQkFDZCxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLGdCQUFnQixFQUFFLENBQUM7aUJBQ25CO2FBQ0Q7WUFFRCxPQUFPLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEUsQ0FBQztLQUNEO0NBQ0QsQ0FBQyxDQUFDO0FBRUgscUZBQXFGO0FBQ3JGLGdEQUFnRDtBQUNoRCxTQUFTLFlBQVksQ0FBQyxHQUFXO0lBQ2hDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLG9DQUFvQztBQUMxRixDQUFDIn0=