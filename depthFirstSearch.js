class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  // TIME COMPLEXITY -> O(v + e) -> Vertices + Edges
  // SPACE COMPLEXITY -> O(v) -> Verticees

  depthFirstSearch(array) {
    this.traverse(this, array);
    return array;
  }
  
  traverse(node, array) {
    if (!node) return;
    array.push(node.name);
    for (let i = 0; i < node.children.length; i++){
      let child = node.children[i];
      this.traverse(child, array);
    }
  }
}
