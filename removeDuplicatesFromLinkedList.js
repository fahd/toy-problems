class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 1 - 2 - 2 - 3 - 3 - 4 - 5
// i   n   nn

// TIME-COMPLEXITY: O(n)
// SPACE-COMPLEXITY: O(1)
function removeDuplicatesFromLinkedList(linkedList) {
  let node = linkedList;

  while (node !== null) {
    let nextNode = node.next;

    while (nextNode !== null && nextNode.value === node.value) {
      nextNode = nextNode.next;
    }
    node.next = nextNode;
    node = nextNode;
  }

  return linkedList;
}