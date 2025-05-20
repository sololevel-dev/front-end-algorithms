// Node class for tree
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Binary Search Tree class
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a value into the tree
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value < current.value) {
          // Go left
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          // Go right
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    // In-order traversal (left, root, right)
    inOrderTraversal(node = this.root) {
      if (!node) return;
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
  
  // Example usage
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(2);
  bst.insert(7);
  bst.insert(12);
  
  bst.inOrderTraversal();  // Output will be sorted: 2, 5, 7, 10, 12, 15

  
//   📌 What this does:
// insert() adds nodes to the correct position.

// inOrderTraversal() prints values in sorted order.



