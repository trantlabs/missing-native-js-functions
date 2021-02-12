declare const getCircularReplacer: (other: any) => (key: string, value: any) => any;
declare const stringify: {
    (value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    (value: any, replacer?: (string | number)[], space?: string | number): string;
};
