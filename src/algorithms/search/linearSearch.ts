/**
 * O(N), easiest way to tackle a search problem.
 */
function linearSearch(stack: number[], objective: number): boolean {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === objective) return true;
  }
  return false;
}

console.log(linearSearch([1, 2, 4, 3], 2));
