declare global {
    interface String {
        capitalize(): string;
        replaceAll(search: string, replace: string): string;
        similarity(compare: string): number;
        join(iterate: string[]): string;
        partition(separator: string): string[];
        toNumber(): number;
	toBigInt(): bigint;
	equalsIgnoreCase(compareString: string): boolean;
        count(letter: string): number;
        containsIgnoreCase(containsString: string): boolean;
    }
}
export {};
