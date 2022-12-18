import { define } from './Util'

define(Array.prototype, {
  remove: function <T> (this: T[], elem: T): T[] {
    // do not use filter to modify current array
    const index = this.indexOf(elem)
    if (index === -1) return this

    this.splice(index, 1)
    return this // .filter((e) => e !== elem);
  },
  insert: function <T> (elem: T, index: number) {
    if (!index) index = this.length
    this.splice(index, 0, elem)
    return this
  },
  flat: function (depth: number = 1) {
    return this.reduce(
      (acc: any, val: any) =>
        (Array.isArray(val) && depth >= 1) || depth === -1
          ? acc.concat(val.flat(depth--))
          : acc.concat(val),
      []
    )
  },
  last: function () {
    return this[this.length - 1]
  },
  first: function () {
    return this[0]
  },
  unique: function <T> (predicate?: (value: T, index: number, obj: T[]) => any) {
    if (predicate) {
      return [
        ...new Map(
          this.map((item: T, index: number, obj: T[]) => [
            predicate(item, index, obj),
            item
          ])
        ).values()
      ]
    }
    return [...new Set(this)]
  },
  random: function () {
    return this[Math.floor(Math.random() * this.length)]
  },
  shuffle: function () {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]]
    }
    return this
  },
  findMap: function <T> (
    predicate: (value: T, index: number, obj: T[]) => any | undefined
  ): number {
    for (let i = 0; i < this.length; i++) {
      const result = predicate(this[i], i, this)
      if (result) {
        return result
      }
    }
  },
  findLast: function <T> (
    predicate: (value: T, index: number, obj: T[]) => any | undefined
  ): T | undefined {
    for (let i = this.length; i >= 0; i--) {
      if (predicate(this[i], i, this)) return this[i]
    }
    return null
  },
  findLastIndex: function <T> (
    predicate: (value: T, index: number, obj: T[]) => any | undefined
  ): number {
    for (let i = this.length - 1; i >= 0; i--) {
      if (predicate(this[i], i, this)) return i
    }
    return -1
  },
  count: function (search: RegExp | any) {
    const nativeTypes = ['string', 'number', 'object', 'array']
    let count: number = 0

    this.forEach((element: any) => {
      if (element === search) {
        count++
        return
      }

      // check if searchparam is a native class (l: 99)
      if (typeof search === 'function') {
        const className = search.name.toLowerCase()
        // eslint-disable-next-line valid-typeof
        if (nativeTypes.includes(className) && typeof element === className) {
          count++
          return
        } else if (element instanceof search) {
          count++
          return
        }
      }

      // if element of array is a string: allow regex patterns
      if (typeof element === 'string') {
        if (element.match(search)) {
          count++
        }
      }
    })
    return count
  },
  missing: function <T> (arr: T[]): T[] {
    return this.filter((x: any) => !arr.includes(x))
  },
  similarities: function <T> (arr: T[]): T[] {
    return this.filter((x: any) => arr.includes(x))
  }
})

declare global {
  interface Array<T> {
    remove(o: T): this;
    flat(depth?: number): T;
    first(): T | undefined;
    last(): T | undefined;
    findLastIndex(
      predicate: (value: T, index: number, obj: T[]) => any | undefined
    ): number;
    findLast(
      predicate: (value: T, index: number, obj: T[]) => any | undefined
    ): T | undefined;
    findMap(
      predicate: (value: T, index: number, obj: T[]) => any | undefined
    ): any | undefined;
    random(): T | undefined;
    unique(
      predicate?: (value: T, index: number, obj: T[]) => any | undefined
    ): T[];
    shuffle(): T[];
    insert(elem: T, index: number): this;
    count(search: RegExp | any): number;
    similarities(arr: T[]): T[];
    missing(arr: T[]): T[];
  }
}

export {}
