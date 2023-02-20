import { Queue } from "./Queue";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test("should start with an empty queue", () => {
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  test("should enqueue items at the back of the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size()).toBe(3);
    expect(queue.isEmpty()).toBe(false);
  });

  test("should dequeue items from the front of the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.size()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
  });

  test("should return undefined if dequeue is called on an empty queue", () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  test("should return the front item of the queue without dequeuing it", () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.front()).toBe(1);
    expect(queue.size()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
  });

  test("should return undefined if front is called on an empty queue", () => {
    expect(queue.front()).toBeUndefined();
  });
});
