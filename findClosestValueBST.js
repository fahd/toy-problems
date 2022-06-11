/*

  Write a function that takes in a Binary Search Tree (BST) and a target integer
  value and returns the closest value to that target value contained in the BST.

  You can assume that there will only be one closest value.

  Each BST node has an integer value, a left child node, and a right child node. 
  
  A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.

  
  Sample Input:
              10
           /       \
          5        15
        /   \     /   \
      2     5   13   22
    /            \
  1             14
  Target: 12
  Sample Output: 13
*/

// TIME COMPLEXITY: O(log(n))
// SPACE COMPLEXITY: O(n)

function findClosestValueInBST(tree, target) {
  let minDiff = Infinity;
  let min = null;
  let stack = [{ node: tree }]
  while (stack.length) {
    let root = stack.pop();
    let node = root.node;
    if (!node) continue;
    let currDiff = Math.abs(node.value - target);
    if (currDiff < minDiff) {
      minDiff = currDiff;
      min = node.value;
    }
    if (target < node.value) {
      stack.push({node: node.left})
    }
    else if (target >= node.value) {
      stack.push({ node: node.right });
    }
  }
  return min;
}

// TIME COMPLEXITY: O(log(n))
// SPACE COMPLEXITY: O(1)
function findClosestValueInBST2(tree, target) {
  return traverse(tree, target, tree.value)
}

function traverse(tree, target, closest) {
  let node = tree;
  let min = Infinity;
  while (node) {
    let diff = Math.abs(node.value - target);
    if (diff < min) {
      min = diff;
      closest = node.value;
    }
    if (target < node.value) node = node.left;
    else if (target > node.value) node = node.right;
    // we've found an exact match here
    else break;
  }
  return closest;
}

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


/*
          10
       /     \
      5       15
    /   \   /   \
   2     5 13    22
 /          \
1           14
*/

const bst = new BinarySearchTree(10);
bst.left = new BinarySearchTree(5);
bst.left.left = new BinarySearchTree(2);
bst.left.right = new BinarySearchTree(5);
bst.left.left.left = new BinarySearchTree(1);
bst.right = new BinarySearchTree(15);
bst.right.left = new BinarySearchTree(13);
bst.right.right = new BinarySearchTree(22);
bst.right.left.left = new BinarySearchTree(14);

console.log(
  findClosestValueInBST2(bst, 5)
);
