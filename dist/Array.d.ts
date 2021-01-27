declare global {
    interface Array<T> {
        remove(o: T): this;
        flat(depth?: number): T;
        first(): T | undefined;
        last(): T | undefined;
        findLastIndex<T>(predicate: (value: T, index: number, obj: T[]) => any | undefined): number;
        findMap<T>(predicate: (value: T, index: number, obj: T[]) => any | undefined): any | undefined;
        findLast<T>(predicate: (value: T, index: number, obj: T[]) => any | undefined): T | undefined;
        random(): T | undefined;
        unique(): T[];
        shuffle(): T[];
        insert(elem: T, index: number): T[];
        count(search: RegExp | any): number;
    }
}
export {};
