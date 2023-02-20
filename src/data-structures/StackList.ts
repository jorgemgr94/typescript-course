/**
 * Definition: LIFO (last-in first-out), provides a unique way to work with contiguous memory.
 */
interface StackInterface<T> {
  push(item: T): void /*input a new element*/;
  pop(): T | undefined /*remove the top element, return the removed element*/;
  peek(): T | undefined /*return the top element*/;
}

type StackNode<T> = {
  value: T;
  previous: StackNode<T> | null;
};

export class StackList<T> implements StackInterface<T> {
  head: StackNode<T> | null = null;
  length: number = 0;

  /**
   * O(1)
   */
  push(item: T) {
    this.length++;

    const node: StackNode<T> = {
      value: item,
      previous: !this.head ? null : this.head,
    };

    this.head = node;
  }

  /**
   * O(1)
   */
  pop() {
    if (!this.head) return undefined;

    this.length--;

    const previousHead = this.head;
    this.head = this.head.previous;
    return previousHead?.value;
  }

  /**
   * O(1)
   */
  peek() {
    return this.head?.value;
  }
}
