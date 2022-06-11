/*
  Write a function that takes in a Binary Tree and returns a list of its branch
  sums ordered from leftmost branch sum to rightmost branch sum.

  A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
  branch is a path of nodes in a tree that starts at the root node and ends at
  any leaf node.

  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

  e.g.

           1
        /     \
       2       3
     /   \    /  \
    4     5  6    7
  /   \  /
 8    9 10
*/

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n) -> Number of nodes in the Binary Tree

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function branchSums(root) {
  let sums = [];
  traverse(0, sums, root);
  return sums;
}

function traverse(currentSum, sums, root) {
  if (!root) return;
  if (!root.left && !root.right) {
    sums.push(currentSum + root.value);
    return;
  }
  if (root.left) traverse(currentSum + root.value, sums, root.left);
  if (root.right) traverse(currentSum + root.value, sums, root.right);
}

