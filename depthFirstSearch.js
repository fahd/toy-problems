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
    array.push(this.name);
    let node = this;
    for (let child of node.children) {
      child.depthFirstSearch(array);
    } 
    return array;
  }
}
