/**
 * Definition: LIFO (last-in first-out), provides a unique way to work with contiguous memory.
 */
interface StackInterface<T> {
  push(item: T): void /*input a new element*/;
  pop(): T | undefined /*remove the top element, return the removed element*/;
  peek(): T | undefined /*return the top element*/;
}

export class Stack<T> implements StackInterface<T> {
  private items: T[] = [];

  /**
   * O(1)
   */
  push(item: T) {
    this.items.push(item);
  }

  /**
   * O(1)
   */
  pop() {
    return this.items.pop();
  }

  /**
   * O(1)
   */
  peek() {
    return this.items[this.items.length - 1];
  }
}
