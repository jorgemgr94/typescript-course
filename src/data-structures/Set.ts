/**
 * Set represents a collection of unique values.
 * @see Set
 *
 * methods time complexity:
 * add(value: T): O(1)
 * clear(): O(1)
 * delete(value: T): O(1)
 * has(value: T): O(1)
 * forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): O(n)
 */
const userIds = new Set<string>();

// add method
userIds.add("12c484fb-5ffe-42fe-8e39-6bf4591f02df");
userIds.add("e879439e-0392-460d-9aca-105d402b6001");
userIds.add("12c484fb-5ffe-42fe-8e39-6bf4591f02df");

// has method
console.log(userIds.has("e879439e-0392-460d-9aca-105d402b6001"));

// NOTE: avoid declaration collisions by declaring this file as an ES module
export {};
