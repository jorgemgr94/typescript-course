import { DoublyLinkedList } from "./DoublyLinkedList";

describe("DoublyLinkedList", () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList<number>();
  });

  describe("append", () => {
    test("should append item to the end of the list", () => {
      list.append(1);
      list.append(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);
    });

    test("should increase the length of the list", () => {
      list.append(1);
      list.append(2);
      expect(list.length).toBe(2);
    });
  });

  describe("prepend", () => {
    test("should prepend item to the beginning of the list", () => {
      list.prepend(1);
      list.prepend(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(1);
    });

    test("should increase the length of the list", () => {
      list.prepend(1);
      list.prepend(2);
      expect(list.length).toBe(2);
    });
  });

  describe("remove", () => {
    test("should remove item from the list", () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.remove(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);
      expect(list.length).toBe(2);
    });

    test("should do nothing if item is not found in the list", () => {
      list.append(1);
      list.append(2);
      list.remove(3);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);
      expect(list.length).toBe(2);
    });
  });

  describe("removeAt", () => {
    test("should remove item at the specified index", () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.removeAt(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);
      expect(list.length).toBe(2);
    });

    test("should return undefined if index is out of bounds", () => {
      list.append(1);
      list.append(2);
      expect(list.removeAt(2)).toBeUndefined();
      expect(list.removeAt(-1)).toBeUndefined();
    });
  });

  describe("insertAt", () => {
    test("should insert item at the specified index", () => {
      list.append(1);
      list.append(2);
      list.insertAt(3, 1);
      expect(list.head?.value).toBe(1);
      expect(list.head?.next?.value).toBe(3);
      expect(list.head?.next?.next?.value).toBe(2);
      expect(list.length).toBe(3);
    });

    test("should insert item at the beginning of the list if index is 0", () => {
      list.append(1);
      list.append(2);
      list.insertAt(3, 0);
      expect(list.head?.value).toBe(3);
      expect(list.head?.next?.value).toBe(1);
      expect(list.head?.next?.next?.value).toBe(2);
      expect(list.length).toBe(3);
    });

    test("should insert an item at the beginning of an empty list", () => {
      list.insertAt(1, 0);

      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);
      expect(list.length).toBe(1);
    });

    test("should insert an item at the beginning of a non-empty list", () => {
      list.append(1);
      list.insertAt(2, 0);

      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(1);
      expect(list.length).toBe(2);
    });

    test("should insert an item at the end of a non-empty list", () => {
      list.append(1);
      list.insertAt(2, 1);

      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);
      expect(list.length).toBe(2);
    });

    test("should insert an item in the middle of a non-empty list", () => {
      list.append(1);
      list.append(3);
      list.insertAt(2, 1);

      expect(list.head?.value).toBe(1);
      expect(list.head?.next?.value).toBe(2);
      expect(list.head?.next?.next?.value).toBe(3);
      expect(list.tail?.value).toBe(3);
      expect(list.length).toBe(3);
    });

    test("should not insert an item at an invalid index", () => {
      list.append(1);
      list.insertAt(2, 2);

      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);
      expect(list.length).toBe(1);
    });

    test("should not insert an item at a negative index", () => {
      list.append(1);
      list.insertAt(2, -1);

      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);
      expect(list.length).toBe(1);
    });

    test("should not insert an item at a non-numeric index", () => {
      // @ts-ignore
      list.insertAt(1, "not a number");

      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
      expect(list.length).toBe(0);
    });
  });
});
