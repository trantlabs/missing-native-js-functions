try {
  if (!globalThis.atob) {
    globalThis.atob = (data: string) =>
      Buffer.from(data, 'base64').toString('utf8')
  }
  if (!globalThis.btoa) {
    globalThis.btoa = (data: string) =>
      Buffer.from(data.toString(), 'utf8').toString('base64')
  }
  if (!globalThis.setIntervalNow) {
    globalThis.setIntervalNow = function (
      callback: Function,
      milliseconds?: number,
      ...args: any[]
    ) {
      const func = callback.bind(this, ...args)
      func()
      return setInterval(func, milliseconds)
    }
  }
  if (!globalThis.sleep) {
    globalThis.sleep = (ms: number) =>
      new Promise(_resolve => setTimeout(_resolve, ms))
  }
} catch (error) {}

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

  function setIntervalNow(
    callback: Function,
    milliseconds?: number,
    ...args: any[]
  ): number | NodeJS.Timeout;

  function sleep(ms: number): Promise<void>;
}
export {}
