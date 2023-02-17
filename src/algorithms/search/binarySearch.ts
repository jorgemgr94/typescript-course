/**
 * O(log N)
 * NOTE: array MUST be sorted.
 */
function binarySearch(stack: number[], objective: number): boolean {
  let lo = 0;
  let hi = stack.length;
  do {
    const index = Math.floor(lo + (hi - lo) / 2);
    const value = stack[index];

    if (value === objective) return true;

    if (value > objective) {
      hi = index;
    } else {
      lo = index + 1;
    }
  } while (lo < hi);

  return false;
}

const randomNumbers = Array.from(Array(100).keys());
console.log(binarySearch(randomNumbers, 0));
