declare global {
    interface Math {
        static randomBetween(min: number, max: number): number;
        static randomIntBetween(min: number, max: number): number;
    }
}
export {};
