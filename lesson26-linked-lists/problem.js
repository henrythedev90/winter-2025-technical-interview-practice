class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//Solve Middle of Linked List in Leetcode
const middleNode = (head) => {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const hasCycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

const mergeLinkList = (list1, list2) => {
  let dummy = new ListNode(0);
  let current = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.value <= list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    //current always has to move
    current = current.next;
  }
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
};

module.exports = {
  ListNode,
  middleNode,
  hasCycle,
  mergeLinkList,
};
