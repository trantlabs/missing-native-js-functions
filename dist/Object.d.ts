declare global {
    interface Object {
        forEach(callback: (element: any, index?: string) => any): void;
        map(callback: (element: any, index?: string) => any): this;
        static equals(x: any, y: any): boolean;
        equals(other: any): boolean;
        keys(): string[];
        values(): any[];
        entries(): Array<[string, any]>;
    }
}
export {};
