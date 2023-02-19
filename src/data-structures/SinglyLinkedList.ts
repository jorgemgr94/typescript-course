interface SinglyLinkedListInterface<T> {
  append(item: T): void;
  getAt(index: number): {
    current: SinglyLinkedListNode<T> | null;
    previous: SinglyLinkedListNode<T> | null;
  };
  get(item: T): {
    current: SinglyLinkedListNode<T> | null;
    previous: SinglyLinkedListNode<T> | null;
  };
  insertAt(item: T, index: number): void;
  prepend(item: T): void;
  remove(item: T): void;
  removeAt(index: number): T | undefined;
  size(): number;
  isEmpty(): boolean;
}

type SinglyLinkedListNode<T> = {
  value: T;
  next: SinglyLinkedListNode<T> | null;
};

export class SinglyLinkedList<T> implements SinglyLinkedListInterface<T> {
  head: SinglyLinkedListNode<T> | null = null;
  tail: SinglyLinkedListNode<T> | null = null;
  length: number = 0;

  /**
   * O(1)
   */
  append(item: T): void {
    this.length++;
    const node: SinglyLinkedListNode<T> = {
      value: item,
      next: null,
    };

    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  /**
   * O(1)
   */
  prepend(item: T): void {
    this.length++;

    const node: SinglyLinkedListNode<T> = {
      value: item,
      next: null,
    };

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head = node;
    return;
  }

  /**
   * O(N)
   */
  remove(item: T) {
    const { current, previous } = this.get(item);
    if (!current) return; /*not found*/

    this.length--;
    // case 1: removing the head
    if (!previous) {
      this.head = current.next;
      return;
    }

    // reassign previous element;
    previous.next = current.next;
    if (current.next === null /*reach the tail*/) {
      this.tail = previous;
    }
    return;
  }

  /**
   * O(N)
   */
  insertAt(item: T, index: number) {
    const { current, previous } = this.getAt(index);

    const isTailInsert = index === this.length;
    const isHeadInsert = !previous;
    const nodeFound = current;
    if (!nodeFound && !isTailInsert) return /*index, not found*/;

    this.length++;
    const node: SinglyLinkedListNode<T> = {
      value: item,
      next: isTailInsert ? null : current,
    };

    // insert at tail
    if (isTailInsert) {
      previous!.next = node;
      this.tail = node;
      return;
    }

    // inserting at head
    if (isHeadInsert) {
      this.head = node;
      return;
    }

    // reassign previous element;
    previous.next = node;
    return;
  }

  /**
   * O(N)
   */
  removeAt(index: number) {
    const { current, previous } = this.getAt(index);
    if (!current) return undefined; /*not found*/

    this.length--;
    // removing the head
    if (!previous) {
      this.head = current.next;
      return current.value;
    }

    // reassign previous element;
    previous.next = current.next;

    // removing the head
    if (current.next === null /*reach the tail*/) {
      this.tail = previous;
    }
    return current.value;
  }

  /**
   * O(N)
   */
  getAt(index: number) {
    let current = this.head;
    let previous = null;
    let idx = 0;
    while (current) {
      if (index === idx) break;

      idx++;
      previous = current;
      current = current.next;
    }

    return { current, previous };
  }

  /**
   * O(N)
   */
  get(item: T) {
    let current: SinglyLinkedListNode<T> | null = this.head;
    let previous = null;
    while (current !== null) {
      if (current.value === item) break;
      previous = current;
      current = current.next;
    }

    return { current, previous };
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
