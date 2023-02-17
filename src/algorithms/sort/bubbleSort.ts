/**
 * Time complexity: O(n^2)
 */
function bubbleSort(stack: number[]) {
  for (let i = 0; i < stack.length; i++) {
    for (let j = 0; j < stack.length - 1 - i; j++) {
      if (stack[j] > stack[j + 1]) {
        const temp = stack[j];
        stack[j] = stack[j + 1];
        stack[j + 1] = temp;
      }
    }
  }
  return stack;
}

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 10];
console.log(bubbleSort(arr));
