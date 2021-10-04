declare global {
    interface Object {
        forEach(callback: (element: any, index?: string) => any): void;
        map(callback: (element: any, index?: string) => any): this;
        keys(): string[];
        entries(): Array<[string, any]>;
        merge(obj: any): any;
        stringify(): string;
    }
    interface ObjectConstructor {
    }
}
export {};
