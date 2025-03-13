const { middleNode, hasCycle, mergeLinkList, ListNode } = require("./problem"); // Adjust the path as necessary

const createLinkedList = (values) => {
  if (values.length === 0) {
    return null;
  }
  const head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
};

describe("Linked List Functions", () => {
  // Test for middleNode
  describe("middleNode", () => {
    test("returns the middle node of an odd-length list", () => {
      const head = createLinkedList([1, 2, 3, 4, 5]);
      expect(middleNode(head).value).toBe(3);
    });

    test("returns the middle node of an even-length list", () => {
      const head = createLinkedList([1, 2, 3, 4, 5, 6]);
      expect(middleNode(head).value).toBe(4);
    });

    test("returns the only node for a single-node list", () => {
      const head = createLinkedList([1]);
      expect(middleNode(head).value).toBe(1); // Middle node is 1
    });
    test("returns null for an empty list", () => {
      const head = createLinkedList([]);
      expect(middleNode(head)).toBeNull(); // Middle node is null
    });
  });

  // Test for hasCycle
  describe("hasCycle", () => {
    test("returns true for a list with a cycle", () => {
      const head = createLinkedList([1, 2]);
      head.next.next = head;
      expect(hasCycle(head)).toBe(true);
    });

    test("returns false for a list without a cycle", () => {
      const head = createLinkedList([1, 2, 3]);
      expect(hasCycle(head)).toBe(false);
    });
  });

  // Test for mergeLinkList
  describe("mergeLinkList", () => {
    test("merges two sorted linked lists", () => {
      const list1 = createLinkedList([1, 2, 4]);
      const list2 = createLinkedList([1, 3, 4]);

      const mergedList = mergeLinkList(list1, list2);
      const values = [];
      let current = mergedList;
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      expect(values).toEqual([1, 1, 2, 3, 4, 4]);
    });
  });
});
