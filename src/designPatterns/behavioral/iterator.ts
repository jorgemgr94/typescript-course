import {
  asyncBatchConsume,
  asyncParallelConsume,
} from "../../util/consumption";
import { fakePromise } from "../../util/promise";

/**
 * All iterators must implement the same interface. This makes the client code
 * compatible with any collection type or any traversal algorithm as long as
 * there’s a proper iterator. If you need a special way to traverse a collection,
 * you just create a new iterator class, without having to change the collection
 * or the client.
 */
interface Iterator<T> {
  // Return the current element.
  current(): IteratorResult<T>;

  // Return the current element and move forward to next element.
  next(): IteratorResult<T>;

  // Return the key of the current element.
  key(): number;

  // Checks if current position is valid.
  hasNext(): boolean;

  // Rewind the Iterator to the first element.
  rewind(): void;
}

class ConcreteIterator<T> implements Iterator<T> {
  protected index: number = 0;

  constructor(protected collection: T[], protected reverse: boolean = false) {
    if (reverse) {
      this.index = this.collection.length - 1;
    }
  }

  public rewind() {
    this.index = this.reverse ? this.collection.length - 1 : 0;
  }

  public next(): IteratorResult<T> {
    const value = this.collection[this.index];
    this.index += this.reverse ? -1 : 1;
    const done = !this.hasNext();
    return { done, value };
  }

  public current(): IteratorResult<T> {
    const value = this.collection[this.index];
    const done = !this.hasNext();
    return { done, value };
  }

  public hasNext(): boolean {
    return this.reverse ? this.index >= 0 : this.index < this.collection.length;
  }

  public key(): number {
    return this.index;
  }
}

async function init() {
  const collection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // -- parallel consumption ---------------------------------------------------
  await asyncParallelConsume(collection, async (value) => {
    const result = await fakePromise(2500);
    console.log(result, value);
  });

  // -- batch consumption ------------------------------------------------------
  let iterator = new ConcreteIterator<number>(collection, true);
  await asyncBatchConsume(
    iterator,
    async (value, index) => {
      const result = await fakePromise(2500);
      console.log(result, value);
    },
    5
  );
}

init();
