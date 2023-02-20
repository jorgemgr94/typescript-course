import { StackList } from "./StackList";

describe("StackList", () => {
  let stack: StackList<number>;

  beforeEach(() => {
    stack = new StackList();
  });

  it("should push and pop items", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(undefined);
  });

  it("should peek the top item", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);

    stack.pop();

    expect(stack.peek()).toBe(2);

    stack.pop();
    stack.pop();

    expect(stack.peek()).toBe(undefined);
  });

  it("should return undefined when popping an empty stack", () => {
    expect(stack.pop()).toBe(undefined);
  });

  it("should return undefined when peeking an empty stack", () => {
    expect(stack.peek()).toBe(undefined);
  });

  it("should track the length of the stack", () => {
    expect(stack.length).toBe(0);

    stack.push(1);
    expect(stack.length).toBe(1);

    stack.push(2);
    expect(stack.length).toBe(2);

    stack.pop();
    expect(stack.length).toBe(1);

    stack.pop();
    expect(stack.length).toBe(0);

    stack.pop();
    expect(stack.length).toBe(0);
  });
});
