import { define } from './Util'

define(Object.prototype, {
  forEach: function (callback: (element: any, index?: string) => any) {
    // @ts-ignore
    return Object.keys(this).forEach(key => callback(this[key], key))
  },
  map: function (callback: (element: any, index?: string) => any) {
    const obj = {}

    Object.keys(this).forEach((key) => {
      // @ts-ignore
      obj[key] = callback(this[key], key)
    })
    return obj
  },
  keys: function (): any[] {
    return Object.keys(this)
  },
  entries: function (): any[] {
    return Object.entries(this)
  },
  merge: function (obj: any) {
    // this will overwrite if obj has the same property
    return mergeDeep(obj || {}, this)
  },
  stringify: function () {
    return JSON.stringify(this)
  }
})

function mergeDeep (target: any, ...sources: any): any {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}

function isObject (item: any) {
  return (
    item &&
    typeof item === 'object' &&
    !Array.isArray(item) &&
    item?.constructor?.name === 'Object'
  )
}

declare global {
  interface Object {
    forEach(callback: (element: any, index?: string) => any): void;
    map(callback: (element: any, index?: string) => any): this;
    keys(): string[];
    entries(): Array<[string, any]>;
    merge(obj: any): any;
    stringify(): string;
  }

  interface ObjectConstructor {}
}
export {}
