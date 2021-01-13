declare global {
    interface String {
        capitalize(): string;
        replaceAll(search: string, replace: string): string;
        similarity(compare: string): number;
        join(iterate: string[]): string;
        partition(separator: string): string[];
        toNumber(): number;
	    toBigInt(): bigint;
	    equalsIgnoreCase(compareString: string): string;
	    count(letter: string): number;
    }
}
export {};
