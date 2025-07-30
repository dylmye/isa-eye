declare module "array.prototype.tosorted" {
  function toSorted<T>(
    array: readonly T[],
    compareFn?: (a: T, b: T) => number,
  ): T[];

  namespace toSorted {
    function shim(): typeof Array.prototype.toSorted;
    function getPolyfill(): typeof Array.prototype.toSorted;
  }

  export = toSorted;
}
