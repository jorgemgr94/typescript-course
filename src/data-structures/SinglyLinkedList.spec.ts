import { SinglyLinkedList } from "./SinglyLinkedList";

describe("SingleLinkedList", () => {
  let list: SinglyLinkedList<number>;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  describe("append", () => {
    it("should add an item to the end of the list", () => {
      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.length).toBe(3);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);
    });
  });

  describe("prepend", () => {
    it("should add an item to the beginning of the list", () => {
      list.prepend(3);
      list.prepend(2);
      list.prepend(1);

      expect(list.length).toBe(3);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);
    });
  });

  describe("remove", () => {
    it("should remove the first item from the list", () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.remove(1);

      expect(list.length).toBe(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(3);
    });

    it("should remove the last item from the list", () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.remove(3);

      expect(list.length).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);
    });

    it("should remove an item from the middle of the list", () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.remove(2);

      expect(list.length).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);
    });

    it("should not remove anything if item is not in the list", () => {
      list.append(1);
      list.append(2);
      list.remove(3);

      expect(list.length).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);
    });
  });

  describe("insertAt", () => {
    it("should insert an item at the beginning of the list", () => {
      list.append(2);
      list.insertAt(1, 0);

      expect(list.length).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);
    });

    it("should insert an item at the end of the list", () => {
      list.append(1);
      list.append(2);
      list.insertAt(3, 2);

      expect(list.length).toBe(3);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);
    });

    it("should insert an item in the middle of the list", () => {
      list.append(1);
      list.append(3);
      list.insertAt(2, 1);

      expect(list.length).toBe(3);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);
    });
  });

  describe("removeAt", () => {
    it("removes the head node", () => {
      list.append(1);
      list.append(2);
      list.removeAt(0);
      expect(list.length).toBe(1);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(2);
    });

    it("removes a middle node", () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.removeAt(1);
      expect(list.length).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.head?.next?.value).toBe(3);
      expect(list.tail?.value).toBe(3);
    });

    it("removes the tail node", () => {
      list.append(1);
      list.append(2);
      list.removeAt(1);
      expect(list.length).toBe(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);
    });

    it("does nothing if index is out of range", () => {
      list.append(1);
      list.append(2);
      list.removeAt(2);
      expect(list.length).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);
    });
  });

  describe("toArray", () => {
    it("should return the list as an array", () => {
      list.append(1);
      list.append(2);
      expect(list.toArray()).toEqual([1, 2]);
    });
  });
});
