/*

The distance between a node in a Binary Tree and the tree's root is called the node's depth. 

Write a function that takes in a Binary Tree and returns the sum of its nodes' depths. 

Each BinaryTree node has an integer value, a left child node, and a right child node. 

Children nodes can either be BinaryTree nodes themselves or None / null. 

Sample Input tree = 
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9

Sample Output = 
16
*/
// TIME COMPLEXITY: O(n) -> number of nodes in tree
// SPACE COMPLEXITY: O(d) -> depth/height of tree

function nodeDepths(root) {
  let depthSum = 0;
  let stack = [{ node: root, depth: 0 }];
  while (stack.length) {
    let curr = stack.pop();
    if (!curr.node) continue;
    depthSum += curr.depth;
    stack.push({ node: curr.node.left, depth: curr.depth + 1 });
    stack.push({ node: curr.node.right, depth: curr.depth + 1 });
  }
  return depthSum;
}

// Recursive
function nodeDepthsRecursive(root, depth = 0) {
  if (root === null) return 0;
  return depth + nodeDepthsRecursive(root.left, depth + 1) + nodeDepthsRecursive(root.right, depth + 1);
}

class BinarySearchTree{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const bst = new BinarySearchTree(1);
bst.left = new BinarySearchTree(2);
bst.left.left = new BinarySearchTree(4);
bst.left.right = new BinarySearchTree(5);
bst.left.left.left = new BinarySearchTree(8);
bst.left.left.right = new BinarySearchTree(9);
bst.right = new BinarySearchTree(3);
bst.right.left = new BinarySearchTree(6);
bst.right.right = new BinarySearchTree(7);

console.log(
  nodeDepthsRecursive(bst)
);
