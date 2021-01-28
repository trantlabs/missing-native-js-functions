declare global {
    interface Promise<T> {
        caught(): this;
    }
}
export {};
