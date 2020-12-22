declare global {
    interface Array<T> {
        remove(o: T): this;
        flat(depth?: number): T;
        first(): T;
        last(): T;
        findMap<T>(predicate: (value: T, index: number, obj: T[]) => unknown, map: (value: T) => any): any | undefined;
        random(): T;
        unique(): T[];
        shuffle(): T[];
        insert(elem: T, index: number): T[];
    }
}
export {};
