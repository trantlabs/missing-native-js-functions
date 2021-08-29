declare global {
    interface Math {
        randomBetween(min: number, max: number): number;
        randomIntBetween(min: number, max: number): number;
    }
}
export {};
