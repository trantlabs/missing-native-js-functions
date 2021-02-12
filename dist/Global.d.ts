/// <reference types="node" />
declare global {
    /**
     * Converts a Base64 encoded string
     * @param {string} data Base64 encoded string
     */
    function atob(data: string): string;
    /**
     * Converts a string to a Base64 encoded string
     * @param {string} data UTF-8 string that should get encoded
     */
    function btoa(data: string): string;
    function setIntervalNow(callback: Function, milliseconds?: number, ...args: any[]): number | NodeJS.Timeout;
}
export {};
