/**
 * Map is implemented using a hash table, the hash table is an array-like
 * data structure that uses a hash function to map each key to an index in the array.
 * @see Map
 *
 * methods time complexity:
 * set(key, value): O(1)
 * get(key): O(1)
 * has(key): O(1)
 * delete(key): O(1)
 * clear(): O(1)
 * keys(): O(n)
 * values(): O(n)
 * entries(): O(n)
 */
const users = new Map<string, string>();

// set method
users.set("12c484fb-5ffe-42fe-8e39-6bf4591f02df", "Jorge");
users.set("e879439e-0392-460d-9aca-105d402b6001 ", "Sergio");

// get method
const p1 = users.get("12c484fb-5ffe-42fe-8e39-6bf4591f02df");
console.log(p1);

// has method
console.log(users.has("12c484fb-5ffe-42fe-8e39-6bf4591f02df"));
console.log(users.has("23232322-5ffe-42fe-8e39-6bf4591f02df"));

// NOTE: avoid declaration collisions by declaring this file as an ES module
export {};
