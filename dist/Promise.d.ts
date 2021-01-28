declare global {
    interface Promise<T> {
        caught(): void;
    }
}
export {};
