import { Stack } from "./Stack";

describe("Stack", () => {
  let stack: Stack<string>;

  beforeEach(() => {
    stack = new Stack();
  });

  describe("push", () => {
    it("should add an element to the top of the stack", () => {
      stack.push("apple");
      stack.push("banana");
      stack.push("cherry");
      expect(stack.pop()).toBe("cherry");
      expect(stack.pop()).toBe("banana");
      expect(stack.pop()).toBe("apple");
    });
  });

  describe("pop", () => {
    it("should return undefined if the stack is empty", () => {
      expect(stack.pop()).toBeUndefined();
    });

    it("should remove and return the top element of the stack", () => {
      stack.push("apple");
      stack.push("banana");
      expect(stack.pop()).toBe("banana");
      expect(stack.pop()).toBe("apple");
    });
  });

  describe("peek", () => {
    it("should return undefined if the stack is empty", () => {
      expect(stack.peek()).toBeUndefined();
    });

    it("should return the top element of the stack without removing it", () => {
      stack.push("apple");
      stack.push("banana");
      expect(stack.peek()).toBe("banana");
      expect(stack.pop()).toBe("banana");
      expect(stack.peek()).toBe("apple");
    });
  });
});
