["1", "2", "3", "4", "5"];

// head
// tail
// node
// pointer

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      // list is empty...
      this.head = newNode;
      this.tail = newNode;
    } else {
      // list is not empty...
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    // 1. If the list is empty
    if (this.length === 0) {
      return undefined;
    }

    // 2.Traverse the list to find the second last node
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    // 3. Set the tail attribute of the list to the second last node
    this.tail = pre;

    // 4. Set the next attribute of the new tail node to null
    this.tail.next = null;

    // 5. Decrease the length attribute by one.
    this.length--;

    // 6. If the list becomes empty after the pop operation
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // 7.Return the removed node
    return temp;
  }
}
