declare global {
    interface Array<T> {
        remove(o: T): this;
        flat(depth?: number): T;
        first(): T | undefined;
        last(): T | undefined;
        findMap<T>(predicate: (value: T, index: number, obj: T[]) => any | undefined): any | undefined;
        random(): T | undefined;
        unique(): T[];
        shuffle(): T[];
        insert(elem: T, index: number): T[];
    }
}
export {};
