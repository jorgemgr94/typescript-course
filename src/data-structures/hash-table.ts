/**
 * Hash table
 * provides a unique way to work with contiguous memory.
 */
const persons = new Map<string, number>();

persons.set("p1", 1);
const person1 = persons.get("p1");

console.log(person1);
