/**
 * Stack: LIFO (last-in first-out)
 * provides a unique way to work with contiguous memory.
 */
interface StackInterface<T> {
  push(element: T): void;
  pop(): T | undefined;
  isEmpty(): boolean;
}

class Stack<T> implements StackInterface<T> {
  private items: T[] = [];

  push(element: T) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();

console.log(stack);
