declare global {
    interface DateConstructor {
        nowSeconds(): number;
    }
}
export {};
