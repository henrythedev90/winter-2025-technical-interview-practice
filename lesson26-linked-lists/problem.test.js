const { middleNode, hasCycle, mergeLinkList, ListNode } = require("./problem"); // Adjust the path as necessary

describe("Linked List Functions", () => {
  // Test for middleNode
  describe("middleNode", () => {
    test("returns the middle node of an odd-length list", () => {
      const head = new ListNode(1);
      head.next = new ListNode(2);
      head.next.next = new ListNode(3);
      head.next.next.next = new ListNode(4);
      head.next.next.next.next = new ListNode(5);

      const result = middleNode(head);

      expect(result.value).toBe(3); // Middle node is 3
    });

    test("returns the middle node of an even-length list", () => {
      const head = new ListNode(1);
      head.next = new ListNode(2);
      head.next.next = new ListNode(3);
      head.next.next.next = new ListNode(4);
      head.next.next.next.next = new ListNode(5);
      head.next.next.next.next.next = new ListNode(6);
      expect(middleNode(head).value).toBe(4); // Middle node is 4 (second middle)
    });

    test("returns the only node for a single-node list", () => {
      const head = new ListNode(1);
      expect(middleNode(head).value).toBe(1); // Middle node is 1
    });

    test("returns null for an empty list", () => {
      expect(middleNode(null)).toBeNull(); // Middle node is null
    });
  });

  // Test for hasCycle
  describe("hasCycle", () => {
    test("returns true for a list with a cycle", () => {
      const head = new ListNode(1);
      const second = new ListNode(2);
      head.next = second;
      second.next = head; // Creates a cycle
      expect(hasCycle(head)).toBe(true);
    });

    test("returns false for a list without a cycle", () => {
      const head = new ListNode(1);
      head.next = new ListNode(2);
      head.next.next = new ListNode(3);
      expect(hasCycle(head)).toBe(false);
    });
  });

  // Test for mergeLinkList
  describe("mergeLinkList", () => {
    test("merges two sorted linked lists", () => {
      const list1 = new ListNode(1);
      list1.next = new ListNode(2);
      list1.next.next = new ListNode(4);

      const list2 = new ListNode(1);
      list2.next = new ListNode(3);
      list2.next.next = new ListNode(4);

      const mergedList = mergeLinkList(list1, list2);
      const values = [];
      let current = mergedList;
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      expect(values).toEqual([1, 1, 2, 3, 4, 4]); // Expected merged values
    });
  });
});
