// Below we provided a partially completed queue with the peek and isEmpty method. Create the basic operations for a Queue
// enqueue method
// given a value add the node to the queue and return the queue
// if the queue is empty the new node should be the head and the tail
// dequeue method
// remove the head and return the new head of the element
// if the queue is empty than return "Queue is empty"
// size method
//  Return the number of nodes in the queue.
// clear method
// Remove all elements from the queue.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add an element to the queue and return queue
  enqueue(element) {
    let node = new Node(element);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // Remove and return the head element
  dequeue() {
    if (!this.head) {
      return null;
    }
    const data = this.head.value;
    this.head = this.head.next;
    this.length--;

    if (!this.head) {
      this.tail = null;
    }
    return data;
  }

  clear() {
    while (this.length) {
      this.dequeue();
    }
    return this.length;
  }

  size() {
    return this.length;
  }

  // View the head element
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.head.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.head === null;
  }
}

module.exports = Queue;
