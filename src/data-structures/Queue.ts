import { DoublyLinkedList } from "./DoublyLinkedList";

/**
 * Definition: FIFO (first-in first-out).
 */
interface QueueInterface<T> {
  enqueue(item: T): void /*enter queue, add an element at the end*/;
  dequeue(): T | undefined /*remove the front element and return it*/;
  front(): T | undefined /*get the first element*/;
  isEmpty(): boolean;
  size(): number;
}

export class Queue<T> extends DoublyLinkedList<T> implements QueueInterface<T> {
  /**
   * O(1)
   */
  enqueue(item: T) {
    this.append(item);
  }

  /**
   * O(1)
   */
  dequeue() {
    if (!this.head) return undefined;

    this.length--;
    const headNode = this.head;
    const nextNode = this.head.next;

    this.head = nextNode;
    if (nextNode) nextNode.previous = null;
    if (!nextNode) this.tail = null;

    return headNode?.value;
  }

  front() {
    return this.head?.value;
  }
}
