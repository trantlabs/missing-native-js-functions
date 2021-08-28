declare global {
    interface Object {
        forEach(callback: (element: any, index?: string) => any): void;
        map(callback: (element: any, index?: string) => any): this;
        equals(other: any): boolean;
        keys(): string[];
        entries(): Array<[string, any]>;
        merge(obj: any): any;
        stringify(): string;
    }
    interface ObjectConstructor {
        equals(x: any, y: any): boolean;
    }
}
export {};
