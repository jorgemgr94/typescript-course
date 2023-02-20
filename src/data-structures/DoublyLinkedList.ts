interface DoublyLinkedListInterface<T> {
  append(item: T): void;
  getAt(index: number): DoublyLinkedListNode<T> | null;
  get(item: T): DoublyLinkedListNode<T> | null;
  insertAt(item: T, index: number): void;
  prepend(item: T): void;
  remove(item: T): void;
  removeAt(index: number): T | undefined;
  removeItem(current: DoublyLinkedListNode<T>): void;
  size(): number;
  isEmpty(): boolean;
}

type DoublyLinkedListNode<T> = {
  value: T;
  next: DoublyLinkedListNode<T> | null;
  previous: DoublyLinkedListNode<T> | null;
};

export class DoublyLinkedList<T> implements DoublyLinkedListInterface<T> {
  head: DoublyLinkedListNode<T> | null = null;
  tail: DoublyLinkedListNode<T> | null = null;
  length: number = 0;

  /**
   * O(1)
   */
  append(item: T): void {
    this.length++;

    const node: DoublyLinkedListNode<T> = {
      value: item,
      next: null,
      previous: null,
    };

    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  /**
   * O(1)
   */
  prepend(item: T): void {
    this.length++;

    const node: DoublyLinkedListNode<T> = {
      value: item,
      next: null,
      previous: null,
    };

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.previous = node;
    this.head = node;
  }

  /**
   * O(N)
   */
  remove(item: T) {
    const current = this.get(item);
    if (!current) return; /*not found*/
    this.removeItem(current);
  }

  removeItem(current: DoublyLinkedListNode<T>) {
    this.length--;
    // case 1: removing the head
    if (!current.previous) {
      current.next!.previous = null;
      this.head = current.next;
      return;
    }

    const previousNode = current.previous;
    const nextNode = current.next;

    // removing the tail.
    if (!nextNode /*reach the tail*/) {
      previousNode.next = null;
      this.tail = previousNode;
      return;
    }

    // rest of elements.
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
    return;
  }

  /**
   * O(N)
   */
  insertAt(item: T, index: number) {
    const current = this.getAt(index);
    const isTailInsert = index === this.length;
    const isInitializingList = index === 0 && this.isEmpty();
    const isHeadInsert = index === 0;

    if (!current && !isTailInsert && !isInitializingList)
      return /*index, not found*/;

    this.length++;
    const node: DoublyLinkedListNode<T> = {
      value: item,
      next: null,
      previous: null,
    };

    if (isInitializingList) {
      this.head = node;
      this.tail = node;
      return;
    }

    if (isTailInsert) {
      node.previous = this.tail;
      this.tail!.next = node;
      this.tail = node;
      return;
    }

    if (isHeadInsert) {
      node.next = this.head;
      this.head = node;
      return;
    }

    node.previous = current!.previous;
    current!.previous!.next = node;

    current!.previous = node;
    node.next = current;
    return;
  }

  /**
   * O(N)
   */
  removeAt(index: number) {
    const current = this.getAt(index);
    if (!current) return undefined; /*not found*/
    this.removeItem(current);
  }

  /**
   * O(N)
   */
  getAt(index: number) {
    let current = this.head;
    let idx = 0;
    while (current) {
      if (index === idx) break;
      idx++;
      current = current.next;
    }
    return current;
  }

  /**
   * O(N)
   */
  get(item: T) {
    let current: DoublyLinkedListNode<T> | null = this.head;
    while (current !== null) {
      if (current.value === item) break;
      current = current.next;
    }
    return current;
  }

  /**
   * O(N)
   */
  toArray() {
    let current = this.head;
    const listArray = [];
    while (current !== null) {
      listArray.push(current.value);
      current = current.next;
    }
    return listArray;
  }

  /**
   * O(1)
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * O(1)
   */
  size() {
    return this.length;
  }
}
