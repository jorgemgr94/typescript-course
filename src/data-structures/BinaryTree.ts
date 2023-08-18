/**
A binary tree is a tree structure where each node can have at most two children.
There is no ordering or constraint on the values that the nodes can hold,
so a binary tree can contain any type of data, and the nodes do not need
to be sorted in any particular way.
*/
interface BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
}

interface BinaryTree<T> {
  head: BinaryTreeNode<T> | null;
  insert(value: T): void;

  // Depth First (DFS)
  // NOTE: this methods preserve shape.
  preOrderSearch(head: BinaryTreeNode<T> | null, path: T[]): void;
  inOrderSearch(head: BinaryTreeNode<T> | null, path: T[]): void;
  postOrderSearch(head: BinaryTreeNode<T> | null, path: T[]): void;

  // Breadth First (BFS)
  // NOTE: this doesn't preserve shape.
  breadthFirstSearch(current: BinaryTreeNode<T> | null, needle: T[]): boolean;
}

class BinaryTree<T> implements BinaryTree<T> {
  head: BinaryTreeNode<T> | null = null;

  insert(item: T) {
    const node: BinaryTreeNode<T> = {
      value: item,
      left: null,
      right: null,
    };
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current) {
      if (item < current.value) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  // Pre Order Traversal (head at left)
  preOrderSearch<T>(current: BinaryTreeNode<T> | null, path: T[] = []) {
    if (!current) return path;

    // pre
    path.push(current.value);

    // recurse
    this.preOrderSearch(current.left, path);
    this.preOrderSearch(current.right, path);

    // post
    return path;
  }

  // In Order Traversal (head at middle)
  inOrderSearch<T>(current: BinaryTreeNode<T> | null, path: T[] = []) {
    if (!current) return path;

    // recurse left
    this.inOrderSearch(current.left, path);

    // no longer walk left!
    path.push(current.value);

    // recurse right
    this.inOrderSearch(current.right, path);

    // post
    return path;
  }

  // Post Order Traversal (head at right)
  postOrderSearch<T>(current: BinaryTreeNode<T> | null, path: T[] = []) {
    if (!current) return path;

    // recurse left
    this.postOrderSearch(current.left, path);

    // recurse right
    this.postOrderSearch(current.right, path);

    // no longer walk right!
    path.push(current.value);

    // post
    return path;
  }

  // NOTE: Am I implementing this? feels like I already implement this but not 100% sure
  breadthFirstSearch<T>(current: BinaryTreeNode<T> | null, needle: T) {
    const queue = [current];
    while (queue.length) {
      const current = queue.shift();

      if (!current) return false;
      if (current.value === needle) {
        return true;
      }

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return false;
  }
}

function drawBinaryTree<T>(node: BinaryTreeNode<T> | null, depth = 0) {
  if (!node) return;

  drawBinaryTree(node.right, depth + 1);

  console.log("  ".repeat(depth) + node.value);

  drawBinaryTree(node.left, depth + 1);
}

const bt = new BinaryTree<number>();
bt.insert(10);
bt.insert(11);
bt.insert(7);
bt.insert(9);
bt.insert(8);
bt.insert(15);
bt.insert(14);

console.log(bt.breadthFirstSearch(bt.head, 2));
